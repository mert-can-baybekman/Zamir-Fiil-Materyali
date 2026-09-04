// ==========================================================================
// ZAMİR & FİİL CÜMLE KURMA MATERYALİ - DİL VE KONUŞMA TERAPİSİ (DKT)
// Uygulama Mantığı, İnteraktif Terapi Oyunu ve PDF Dışa Aktarımı
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Uygulama Durumu
  const state = {
    selectedCategory: 'all',
    selectedSubject: 'all',
    activeView: 'strips',
    speechEnabled: true,
    score: 0,
    game: {
      target: null,
      step: 0, // 0: Özne, 1: Nesne/Yer, 2: Fiil
      placed: { subject: null, object: null, verb: null }
    }
  };

  // DOM Referansları
  const stripsContainer = document.getElementById('stripsContainer');
  const categoryChips = document.getElementById('categoryChips');
  const subjectChips = document.getElementById('subjectChips');
  const filterCount = document.getElementById('filterCount');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const views = {
    strips: document.getElementById('stripsView'),
    interactive: document.getElementById('interactiveView'),
    catalog: document.getElementById('catalogView'),
    printCenter: document.getElementById('printCenterView')
  };

  const btnToggleSpeech = document.getElementById('btnToggleSpeech');
  const speechIcon = document.getElementById('speechIcon');
  const speechText = document.getElementById('speechText');
  const btnPrintDirect = document.getElementById('btnPrintDirect');
  const btnBrowserPrint = document.getElementById('btnBrowserPrint');
  const btnGeneratePdfDownload = document.getElementById('btnGeneratePdfDownload');

  const guideModal = document.getElementById('guideModal');
  const btnGuide = document.getElementById('btnGuide');
  const btnCloseGuide = document.getElementById('btnCloseGuide');
  const btnDismissGuide = document.getElementById('btnDismissGuide');

  // ==========================================================================
  // 1. SESLENDİRME (SPEECH SYNTHESIS - TÜRKÇE DKT UYUMLU)
  // ==========================================================================
  function speak(text, rate = 0.85) {
    if (!state.speechEnabled || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Önceki seslendirmeyi durdur

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    utterance.rate = rate; // Anaokulu seviyesinde net ve anlaşılır artikülasyon
    utterance.pitch = 1.05;

    // Türkçe seslendiriciyi bul
    const voices = window.speechSynthesis.getVoices();
    const trVoice = voices.find(v => v.lang.includes('tr') || v.lang.includes('TR'));
    if (trVoice) utterance.voice = trVoice;

    window.speechSynthesis.speak(utterance);
  }

  // ==========================================================================
  // 2. FİLTRELERİ BAŞLATMA
  // ==========================================================================
  function initFilters() {
    // Eylem Kategorisi Butonları
    categoryChips.innerHTML = CATEGORIES.map(cat => `
      <button class="chip-btn ${cat.id === state.selectedCategory ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.icon} ${cat.name}
      </button>
    `).join('');

    // Kişi Zamiri Butonları
    subjectChips.innerHTML = SUBJECTS.map(subj => `
      <button class="chip-btn ${subj.id === state.selectedSubject ? 'active' : ''}" data-subj="${subj.id}">
        ${subj.name}
      </button>
    `).join('');

    // Kategori tıklama dinleyicisi
    categoryChips.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;
      state.selectedCategory = btn.dataset.cat;
      updateFilterButtons();
      renderStrips();
    });

    // Zamir tıklama dinleyicisi
    subjectChips.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;
      state.selectedSubject = btn.dataset.subj;
      updateFilterButtons();
      renderStrips();
    });
  }

  function updateFilterButtons() {
    document.querySelectorAll('#categoryChips .chip-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === state.selectedCategory);
    });
    document.querySelectorAll('#subjectChips .chip-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subj === state.selectedSubject);
    });
  }

  // ==========================================================================
  // 3. CÜMLE ŞERİTLERİNİ RENDER ETME (SENTENCE STRIPS)
  // ==========================================================================
  function renderStrips() {
    let filtered = SENTENCE_DATA.filter(item => {
      const catMatch = (state.selectedCategory === 'all' || item.category === state.selectedCategory);
      const subjMatch = (state.selectedSubject === 'all' || item.subjectKey === state.selectedSubject);
      return catMatch && subjMatch;
    });

    filterCount.textContent = `${filtered.length} Cümle Gösteriliyor (Toplam ${SENTENCE_DATA.length})`;

    if (filtered.length === 0) {
      stripsContainer.innerHTML = `
        <div style="text-align:center; padding:3rem; background:#fff; border-radius:18px; color:#64748b;">
          <h3>Arama kriterine uygun cümle bulunamadı.</h3>
          <p>Lütfen filtreleri sıfırlamayı deneyin.</p>
        </div>
      `;
      return;
    }

    stripsContainer.innerHTML = filtered.map((item, index) => {
      // Şahıs ekini vurgula (-m, -n, -k)
      const verbSuffix = item.personSuffix !== 'ø' ? `<span class="verb-suffix">${item.verb.slice(-1)}</span>` : '';
      const verbBase = item.personSuffix !== 'ø' ? item.verb.slice(0, -1) : item.verb;

      return `
        <article class="strip-card" data-id="${item.id}">
          <div class="cut-guide">
            ✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </div>

          <!-- Şerit Üst Başlığı -->
          <div class="strip-header">
            <div class="strip-category-tag">
              <span>🎯</span> ${item.categoryTitle} • Cümle #${index + 1}
            </div>
            <div class="strip-actions no-print">
              <button class="icon-btn btn-speak-sentence" data-sentence="${item.fullSentence}" title="Cümleyi Seslendir">
                🔊
              </button>
            </div>
          </div>

          <!-- Renkli Semantik Kartları -->
          <div class="strip-items-row ${!item.hasObject ? 'two-items' : ''}">
            
            <!-- 1. ÖZNE KARTI (Sarı / KİM?) -->
            <div class="token-card type-subject" onclick="window.speakWord('${item.subject}')" title="Özne: ${item.subject}">
              <span class="card-role-tag">1. ÖZNE (KİM?)</span>
              <div class="card-media-box">
                ${Illustrations.getSubject(item.subjectKey)}
              </div>
              <div class="card-word">${item.subject}</div>
            </div>

            <!-- 2. NESNE / YER KARTI (Varsa Açık Mavi / NEYİ?) -->
            ${item.hasObject ? `
              <div class="token-card type-object" onclick="window.speakWord('${item.object}')" title="${item.objectType === 'yer' ? 'Yer' : 'Nesne'}: ${item.object}">
                <span class="card-role-tag">2. ${item.objectType === 'yer' ? 'YER (NEREYE?)' : 'NESNE (NEYİ?)'}</span>
                <div class="card-media-box">
                  ${Illustrations.getNesne(item.objectKey)}
                </div>
                <div class="card-word">${item.object}</div>
              </div>
            ` : ''}

            <!-- 3. FİİL / EYLEM KARTI (Kırmızı / NE YAPTI?) -->
            <div class="token-card type-verb" onclick="window.speakWord('${item.verb}')" title="Eylem: ${item.verb}">
              <span class="card-role-tag">${item.hasObject ? '3.' : '2.'} EYLEM (NE YAPTI?)</span>
              <div class="card-media-box">
                ${Illustrations.getAction(item.verbKey, item.subjectKey)}
              </div>
              <div class="card-word">
                ${verbBase}${verbSuffix}
              </div>
            </div>

          </div>

          <!-- Tam Cümle Metni ve Terapist Açıklaması -->
          <div class="strip-footer">
            <div class="sentence-text">
              <span>🗣️</span>
              <strong style="cursor:pointer;" onclick="window.speakWord('${item.fullSentence}')">${item.fullSentence}</strong>
            </div>
            <div class="sentence-hint">${item.hint}</div>
          </div>
        </article>
      `;
    }).join('');

    // Cümle içi seslendirme butonlarını bağla
    document.querySelectorAll('.btn-speak-sentence').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        speak(btn.dataset.sentence);
      });
    });
  }

  // Global kelime tıklama sesi
  window.speakWord = function(text) {
    speak(text);
  };

  // ==========================================================================
  // 4. İNTERAKTİF TERAPİ & CÜMLE KURMA OYUNU
  // ==========================================================================
  const gameSlotsRow = document.getElementById('gameSlotsRow');
  const gameOptionsPool = document.getElementById('gameOptionsPool');
  const targetSentenceName = document.getElementById('targetSentenceName');
  const targetHint = document.getElementById('targetHint');
  const optionsStepTitle = document.getElementById('optionsStepTitle');
  const gameSuccessBanner = document.getElementById('gameSuccessBanner');
  const starScore = document.getElementById('starScore');
  const btnNewTarget = document.getElementById('btnNewTarget');
  const btnSpeakTarget = document.getElementById('btnSpeakTarget');

  function startInteractiveGame() {
    // Rastgele bir hedef cümle seç (kullanıcının özellikle istediği 'resim' veya rastgele bir cümle)
    const candidates = SENTENCE_DATA;
    const randomSentence = candidates[Math.floor(Math.random() * candidates.length)];
    setupGameTarget(randomSentence);
  }

  function setupGameTarget(target) {
    state.game.target = target;
    state.game.step = 0; // 0: Özne, 1: Nesne (varsa), 2: Fiil
    state.game.placed = { subject: null, object: null, verb: null };

    targetSentenceName.textContent = `"${target.fullSentence}"`;
    targetHint.textContent = `İpucu: ${target.hint}`;
    gameSuccessBanner.style.display = 'none';

    renderGameSlots();
    renderGameOptions();
  }

  function renderGameSlots() {
    const target = state.game.target;
    if (!target) return;

    let html = '';

    // Özne Yuvası
    if (state.game.placed.subject) {
      html += `
        <div class="token-card type-subject slot-box filled">
          <span class="card-role-tag">1. ÖZNE</span>
          <div class="card-media-box" style="width:90px; height:90px;">
            ${Illustrations.getSubject(target.subjectKey)}
          </div>
          <div class="card-word" style="font-size:1.1rem;">${target.subject}</div>
        </div>
      `;
    } else {
      html += `
        <div class="slot-box slot-subject">
          <div class="slot-placeholder">
            <span style="font-size:1.8rem;">👤</span>
            <span>1. KİM?</span>
            <span style="font-size:0.75rem;">(Özne Kartını Yerleştir)</span>
          </div>
        </div>
      `;
    }

    // Nesne Yuvası (Varsa)
    if (target.hasObject) {
      if (state.game.placed.object) {
        html += `
          <div class="token-card type-object slot-box filled">
            <span class="card-role-tag">2. ${target.objectType === 'yer' ? 'YER' : 'NESNE'}</span>
            <div class="card-media-box" style="width:90px; height:90px;">
              ${Illustrations.getNesne(target.objectKey)}
            </div>
            <div class="card-word" style="font-size:1.1rem;">${target.object}</div>
          </div>
        `;
      } else {
        html += `
          <div class="slot-box slot-object">
            <div class="slot-placeholder">
              <span style="font-size:1.8rem;">📦</span>
              <span>2. ${target.objectType === 'yer' ? 'NEREYE?' : 'NEYİ?'}</span>
              <span style="font-size:0.75rem;">(Nesne Kartını Yerleştir)</span>
            </div>
          </div>
        `;
      }
    }

    // Fiil Yuvası
    if (state.game.placed.verb) {
      html += `
        <div class="token-card type-verb slot-box filled">
          <span class="card-role-tag">${target.hasObject ? '3.' : '2.'} EYLEM</span>
          <div class="card-media-box" style="width:90px; height:90px;">
            ${Illustrations.getAction(target.verbKey, target.subjectKey)}
          </div>
          <div class="card-word" style="font-size:1.1rem;">${target.verb}</div>
        </div>
      `;
    } else {
      html += `
        <div class="slot-box slot-verb">
          <div class="slot-placeholder">
            <span style="font-size:1.8rem;">⚡</span>
            <span>${target.hasObject ? '3.' : '2.'} NE YAPTI?</span>
            <span style="font-size:0.75rem;">(Fiil Kartını Yerleştir)</span>
          </div>
        </div>
      `;
    }

    gameSlotsRow.innerHTML = html;
  }

  function renderGameOptions() {
    const target = state.game.target;
    if (!target) return;

    // ADIM 0: ÖZNE SEÇİMİ
    if (state.game.step === 0) {
      optionsStepTitle.textContent = "1. Adım: Cümlenin Özne Kartını Seç (KİM?)";
      const subjectOptions = [
        { key: 'ben', name: 'Ben' },
        { key: 'sen', name: 'Sen' },
        { key: 'o', name: 'O' },
        { key: 'biz', name: 'Biz' }
      ];

      gameOptionsPool.innerHTML = subjectOptions.map(opt => `
        <div class="token-card type-subject clickable-token" data-step="0" data-val="${opt.key}" style="width:140px;">
          <div class="card-media-box" style="width:90px; height:90px;">
            ${Illustrations.getSubject(opt.key)}
          </div>
          <div class="card-word" style="font-size:1.1rem;">${opt.name}</div>
        </div>
      `).join('');
      return;
    }

    // ADIM 1: NESNE / YER SEÇİMİ (Varsa)
    if (state.game.step === 1 && target.hasObject) {
      optionsStepTitle.textContent = `2. Adım: ${target.objectType === 'yer' ? 'Yer' : 'Nesne'} Kartını Seç (${target.objectType === 'yer' ? 'NEREYE?' : 'NEYİ?'})`;
      const objectOptions = [
        { key: 'top', name: 'topu' },
        { key: 'resim', name: 'resim' },
        { key: 'yemek', name: 'yemek' },
        { key: 'elma', name: 'elma' },
        { key: 'su', name: 'su' },
        { key: 'süt', name: 'süt' },
        { key: 'kitap', name: 'kitap' },
        { key: 'okula', name: 'okula' },
        { key: 'mont', name: 'mont' },
        { key: 'diş', name: 'dişimi' },
        { key: 'sabun', name: 'elimi' }
      ];

      gameOptionsPool.innerHTML = objectOptions.map(opt => `
        <div class="token-card type-object clickable-token" data-step="1" data-val="${opt.key}" style="width:140px;">
          <div class="card-media-box" style="width:90px; height:90px;">
            ${Illustrations.getNesne(opt.key)}
          </div>
          <div class="card-word" style="font-size:1.1rem;">${opt.name}</div>
        </div>
      `).join('');
      return;
    }

    // ADIM 2: FİİL / ÇEKİMLİ EYLEM SEÇİMİ
    if (state.game.step === 2 || (state.game.step === 1 && !target.hasObject)) {
      optionsStepTitle.textContent = "Son Adım: Doğru Çekimli Eylem Kartını Seç (NE YAPTI?)";
      
      // Aynı eylemin 4 şahıs çekimini seçenek olarak sun (-dim, -din, -di, -dik)
      const sisterSentences = SENTENCE_DATA.filter(s => s.category === target.category);
      
      gameOptionsPool.innerHTML = sisterSentences.map(opt => `
        <div class="token-card type-verb clickable-token" data-step="2" data-val="${opt.verbKey}" style="width:140px;">
          <div class="card-media-box" style="width:90px; height:90px;">
            ${Illustrations.getAction(opt.verbKey, opt.subjectKey)}
          </div>
          <div class="card-word" style="font-size:1.1rem;">${opt.verb}</div>
        </div>
      `).join('');
      return;
    }

    // OYUN BİTTİ
    optionsStepTitle.textContent = "🎉 Tebrikler! Tüm kartları başarıyla yerleştirdin!";
    gameOptionsPool.innerHTML = `
      <button id="btnPlayAgain" class="btn btn-primary" style="font-size:1.1rem; padding:0.8rem 1.8rem;">
        🌟 Sıradaki Cümleye Geç
      </button>
    `;
    document.getElementById('btnPlayAgain')?.addEventListener('click', startInteractiveGame);
  }

  // Havuzdan kart seçildiğinde
  gameOptionsPool.addEventListener('click', (e) => {
    const card = e.target.closest('.clickable-token');
    if (!card) return;

    const step = parseInt(card.dataset.step);
    const val = card.dataset.val;
    const target = state.game.target;

    if (step === 0) {
      if (val === target.subjectKey) {
        speak(`Harika! ${target.subject}`);
        state.game.placed.subject = target.subject;
        state.game.step = target.hasObject ? 1 : 2;
        renderGameSlots();
        renderGameOptions();
      } else {
        speak("Tekrar dene!");
        card.style.animation = "shake 0.4s ease";
        setTimeout(() => card.style.animation = "", 400);
      }
    } else if (step === 1) {
      if (val === target.objectKey || (target.objectKey === 'okula' && val === 'okula') || (target.objectKey === 'top' && val === 'top')) {
        speak(`Çok güzel! ${target.object}`);
        state.game.placed.object = target.object;
        state.game.step = 2;
        renderGameSlots();
        renderGameOptions();
      } else {
        speak("Tekrar dene!");
        card.style.animation = "shake 0.4s ease";
        setTimeout(() => card.style.animation = "", 400);
      }
    } else if (step === 2) {
      if (val === target.verbKey) {
        speak(`Aferin! ${target.verb}`);
        state.game.placed.verb = target.verb;
        state.game.step = 3; // Tamamlandı
        state.score += 10;
        starScore.textContent = state.score;

        renderGameSlots();
        renderGameOptions();

        gameSuccessBanner.style.display = 'block';
        speak(`Harika! Cümle tamamlandı: ${target.fullSentence}`);

        // Konfeti Kutlaması
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      } else {
        speak("Tekrar dene!");
        card.style.animation = "shake 0.4s ease";
        setTimeout(() => card.style.animation = "", 400);
      }
    }
  });

  btnNewTarget.addEventListener('click', startInteractiveGame);
  btnSpeakTarget.addEventListener('click', () => {
    if (state.game.target) speak(state.game.target.fullSentence);
  });

  // ==========================================================================
  // 5. FLASHCARD / KART KATALOĞU
  // ==========================================================================
  const catalogContainer = document.getElementById('catalogContainer');
  function renderCatalog() {
    let html = '';

    // Özneler
    SUBJECTS.filter(s => s.id !== 'all').forEach(s => {
      html += `
        <div class="flashcard-item token-card type-subject" onclick="window.speakWord('${s.name.split(' ')[0]}')">
          <span class="card-role-tag">ÖZNE (KİM?)</span>
          <div class="card-media-box" style="width:130px; height:130px;">
            ${Illustrations.getSubject(s.id)}
          </div>
          <div class="card-word">${s.name.split(' ')[0]}</div>
        </div>
      `;
    });

    // Nesneler
    const objects = ['top', 'resim', 'yemek', 'elma', 'su', 'süt', 'kitap', 'okula', 'mont', 'diş', 'sabun'];
    objects.forEach(obj => {
      html += `
        <div class="flashcard-item token-card type-object" onclick="window.speakWord('${obj}')">
          <span class="card-role-tag">NESNE / YER</span>
          <div class="card-media-box" style="width:130px; height:130px;">
            ${Illustrations.getNesne(obj)}
          </div>
          <div class="card-word">${obj}</div>
        </div>
      `;
    });

    // Temel Eylemler (15 Eylem Grubu)
    const verbs = [
      { name: 'attım', key: 'attim', p: 'ben' },
      { name: 'yaptım', key: 'yaptim', p: 'ben' },
      { name: 'yedim', key: 'yedim', p: 'ben' },
      { name: 'okudum', key: 'okudum', p: 'ben' },
      { name: 'içtim', key: 'ictim', p: 'ben' },
      { name: 'gittim', key: 'gittim', p: 'ben' },
      { name: 'giydim', key: 'giydim', p: 'ben' },
      { name: 'fırçaladım', key: 'fırçaladım', p: 'ben' },
      { name: 'yıkadım', key: 'yıkadım', p: 'ben' },
      { name: 'oturdum', key: 'oturdum', p: 'ben' },
      { name: 'yürüdüm', key: 'yurudum', p: 'ben' },
      { name: 'koştum', key: 'koştum', p: 'ben' },
      { name: 'zıpladım', key: 'zipladim', p: 'ben' }
    ];

    verbs.forEach(v => {
      html += `
        <div class="flashcard-item token-card type-verb" onclick="window.speakWord('${v.name}')">
          <span class="card-role-tag">EYLEM</span>
          <div class="card-media-box" style="width:130px; height:130px;">
            ${Illustrations.getAction(v.key, v.p)}
          </div>
          <div class="card-word">${v.name}</div>
        </div>
      `;
    });

    catalogContainer.innerHTML = html;
  }

  // ==========================================================================
  // 6. GÖRÜNÜM GEÇİŞLERİ (TABS)
  // ==========================================================================
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const viewName = btn.dataset.view;
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      Object.keys(views).forEach(k => {
        if (views[k]) views[k].style.display = (k === viewName) ? 'block' : 'none';
      });

      state.activeView = viewName;

      if (viewName === 'interactive') {
        startInteractiveGame();
      } else if (viewName === 'catalog') {
        renderCatalog();
      }
    });
  });

  // ==========================================================================
  // 7. PDF DIŞA AKTARIMI & YAZDIRMA
  // ==========================================================================
  // Doğrudan Tarayıcı Yüksek Çözünürlüklü Yazdırma / PDF
  function triggerPrint() {
    // Önce filtreleri sıfırla ki 36 cümlenin tamamı çıksın
    state.selectedCategory = 'all';
    state.selectedSubject = 'all';
    updateFilterButtons();
    renderStrips();

    // Cümle şeritleri görünümüne geç
    views.strips.style.display = 'block';
    views.interactive.style.display = 'none';
    views.catalog.style.display = 'none';
    views.printCenter.style.display = 'none';

    setTimeout(() => {
      window.print();
    }, 300);
  }

  btnPrintDirect.addEventListener('click', triggerPrint);
  btnBrowserPrint?.addEventListener('click', triggerPrint);

  // html2pdf.js ile tek tıkla dosya olarak indirme
  btnGeneratePdfDownload?.addEventListener('click', () => {
    state.selectedCategory = 'all';
    state.selectedSubject = 'all';
    updateFilterButtons();
    renderStrips();

    const element = document.getElementById('stripsContainer');
    btnGeneratePdfDownload.innerHTML = `<span>⏳</span> PDF Hazırlanıyor...`;
    btnGeneratePdfDownload.disabled = true;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Zamir-Fiil-Cumle-Kurma-Materyali-DKT-60-Cumle.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      btnGeneratePdfDownload.innerHTML = `<span>📥</span> Tek Dosya Olarak PDF İndir (Tüm 60 Cümle)`;
      btnGeneratePdfDownload.disabled = false;
      speak("PDF dosyanız başarıyla indirildi.");
    }).catch(err => {
      console.error(err);
      btnGeneratePdfDownload.innerHTML = `<span>📥</span> Tek Dosya Olarak PDF İndir (Tüm 60 Cümle)`;
      btnGeneratePdfDownload.disabled = false;
      // Hata durumunda native yazdırmaya yönlendir
      triggerPrint();
    });
  });

  // ==========================================================================
  // 8. SESLENDİRME & MODAL DİĞER KONTROLLER
  // ==========================================================================
  btnToggleSpeech.addEventListener('click', () => {
    state.speechEnabled = !state.speechEnabled;
    speechIcon.textContent = state.speechEnabled ? '🔊' : '🔇';
    speechText.textContent = state.speechEnabled ? 'Ses Açık' : 'Ses Kapalı';
    btnToggleSpeech.classList.toggle('active', state.speechEnabled);
  });

  // Terapist Rehberi Modalı
  btnGuide.addEventListener('click', () => guideModal.classList.add('active'));
  btnCloseGuide.addEventListener('click', () => guideModal.classList.remove('active'));
  btnDismissGuide.addEventListener('click', () => guideModal.classList.remove('active'));
  guideModal.addEventListener('click', (e) => {
    if (e.target === guideModal) guideModal.classList.remove('active');
  });

  // Başlangıç Kurulumu
  initFilters();
  renderStrips();
});
