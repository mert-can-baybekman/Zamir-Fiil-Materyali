// Dil ve Konuşma Terapisi - Karakter, Nesne ve Eylem Görsel/Vektör Kütüphanesi
// DKT Standartları: Sade arka plan, net hatlar, dikkat dağıtmayan odak nesneleri ve tam karakter tutarlılığı.

const Illustrations = {
  // Karakter Renk ve Özellik Paleti
  theme: {
    girlHair: '#5c3826',
    girlSkin: '#ffd9b3',
    girlShirt: '#ffb703',
    girlPants: '#4361ee',
    boyHair: '#4a3525',
    boySkin: '#fed0ab',
    boyShirt: '#3a86ff',
    boyShorts: '#9c9a96',
    thirdHair: '#6b4423',
    thirdSkin: '#fcd3ad',
    thirdShirt: '#38b000',
    thirdPants: '#2a6f97',
    redCoat: '#e63946',
    coatFur: '#f8f9fa'
  },

  // Yardımcı SVG sarıcı
  wrapSvg(content, viewBox = "0 0 200 200") {
    return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" class="card-svg" width="100%" height="100%">${content}</svg>`;
  },

  // 1. BEN Karakteri (Kıvırcık saçlı, sarı tişörtlü kız çocuğu - göğsüne elini koymuş 'ben' jesti)
  getBen() {
    return this.wrapSvg(`
      <defs>
        <radialGradient id="bgGlowBen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8e7"/>
          <stop offset="100%" stop-color="#faedd0"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#bgGlowBen)"/>
      
      <!-- Vücut & Bacaklar -->
      <path d="M85 145 L85 185 M115 145 L115 185" stroke="#333" stroke-width="8" stroke-linecap="round"/>
      <rect x="80" y="140" width="40" height="35" rx="5" fill="#4361ee"/>
      <ellipse cx="85" cy="188" rx="8" ry="4" fill="#e63946"/>
      <ellipse cx="115" cy="188" rx="8" ry="4" fill="#e63946"/>

      <!-- Sarı Tişört -->
      <path d="M70 110 Q100 118 130 110 L135 148 Q100 152 65 148 Z" fill="#ffb703" stroke="#e09f00" stroke-width="2"/>
      <path d="M70 110 L50 128 L60 135 L75 120 Z" fill="#ffb703"/>
      
      <!-- Sol Kol - Göğse doğru (Ben jesti) -->
      <path d="M125 115 Q145 125 125 132 Q108 135 98 128" fill="none" stroke="#fed0ab" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="98" cy="128" r="7" fill="#fed0ab"/>
      <!-- Sağ Kol -->
      <path d="M70 115 Q55 130 52 148" fill="none" stroke="#fed0ab" stroke-width="10" stroke-linecap="round"/>

      <!-- Boyun -->
      <rect x="94" y="96" width="12" height="15" fill="#ffd9b3"/>

      <!-- Kıvırcık Saç Arkası -->
      <circle cx="65" cy="65" r="22" fill="#5c3826"/>
      <circle cx="135" cy="65" r="22" fill="#5c3826"/>
      <circle cx="70" cy="45" r="20" fill="#5c3826"/>
      <circle cx="130" cy="45" r="20" fill="#5c3826"/>
      <circle cx="100" cy="38" r="22" fill="#5c3826"/>

      <!-- Baş & Yüz -->
      <circle cx="100" cy="72" r="32" fill="#ffd9b3"/>

      <!-- Kıvırcık Kaküller -->
      <circle cx="78" cy="52" r="12" fill="#5c3826"/>
      <circle cx="96" cy="50" r="13" fill="#5c3826"/>
      <circle cx="118" cy="53" r="12" fill="#5c3826"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="73" r="6" fill="#ffd9b3"/>
      <circle cx="132" cy="73" r="6" fill="#ffd9b3"/>

      <!-- Gözler ve Gülümseme -->
      <circle cx="88" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="112" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="89" cy="68" r="1.5" fill="#ffffff"/>
      <circle cx="113" cy="68" r="1.5" fill="#ffffff"/>
      <ellipse cx="82" cy="78" rx="4" ry="2.5" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="118" cy="78" rx="4" ry="2.5" fill="#ff85a1" opacity="0.6"/>
      <path d="M91 80 Q100 90 109 80" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
      <path d="M84 62 Q89 59 94 62" fill="none" stroke="#5c3826" stroke-width="2" stroke-linecap="round"/>
      <path d="M106 62 Q111 59 116 62" fill="none" stroke="#5c3826" stroke-width="2" stroke-linecap="round"/>
    `);
  },

  // 2. SEN Karakteri (Düz saçlı, mavi tişörtlü erkek çocuk - öne doğru 'sen' jesti yapan)
  getSen() {
    return this.wrapSvg(`
      <defs>
        <radialGradient id="bgGlowSen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e8f4f8"/>
          <stop offset="100%" stop-color="#d0e8f2"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#bgGlowSen)"/>
      
      <!-- Bacaklar ve Şort -->
      <path d="M86 148 L86 185 M114 148 L114 185" stroke="#333" stroke-width="8" stroke-linecap="round"/>
      <rect x="78" y="142" width="44" height="28" rx="4" fill="#6c757d"/>
      <ellipse cx="86" cy="188" rx="8" ry="4.5" fill="#3a86ff"/>
      <ellipse cx="114" cy="188" rx="8" ry="4.5" fill="#3a86ff"/>

      <!-- Mavi Tişört -->
      <path d="M70 110 Q100 116 130 110 L134 145 Q100 150 66 145 Z" fill="#3a86ff" stroke="#2667d4" stroke-width="2"/>

      <!-- Kollar ve İşaret Parmağı (Sen jesti) -->
      <path d="M72 115 Q60 135 60 155" fill="none" stroke="#fed0ab" stroke-width="10" stroke-linecap="round"/>
      <!-- Sağ el öne doğru işaret -->
      <path d="M125 115 Q145 130 120 135 Q105 138 98 132" fill="none" stroke="#fed0ab" stroke-width="12" stroke-linecap="round"/>
      <circle cx="98" cy="132" r="8" fill="#fed0ab"/>
      <path d="M96 132 L86 132" stroke="#fed0ab" stroke-width="6" stroke-linecap="round"/>

      <!-- Boyun -->
      <rect x="94" y="96" width="12" height="15" fill="#fed0ab"/>

      <!-- Saç Arkası & Baş -->
      <circle cx="100" cy="72" r="32" fill="#fed0ab"/>
      <path d="M68 68 C68 38 132 38 132 68 C132 60 125 42 100 42 C75 42 68 60 68 68 Z" fill="#4a3525"/>
      <path d="M68 60 Q100 52 132 60 L132 50 Q100 35 68 50 Z" fill="#4a3525"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="73" r="6" fill="#fed0ab"/>
      <circle cx="132" cy="73" r="6" fill="#fed0ab"/>

      <!-- Gözler ve Gülümseme -->
      <circle cx="88" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="112" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="89" cy="68" r="1.5" fill="#ffffff"/>
      <circle cx="113" cy="68" r="1.5" fill="#ffffff"/>
      <ellipse cx="81" cy="78" rx="4" ry="2.5" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="119" cy="78" rx="4" ry="2.5" fill="#ff85a1" opacity="0.6"/>
      <path d="M91 80 Q100 90 109 80" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // 3. O Karakteri (Yeşil tişörtlü çocuk - 3. şahıs)
  getO() {
    return this.wrapSvg(`
      <defs>
        <radialGradient id="bgGlowO" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ebfbee"/>
          <stop offset="100%" stop-color="#d3f9d8"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#bgGlowO)"/>
      
      <!-- Bacaklar ve Pantolon -->
      <path d="M88 145 L88 185 M112 145 L112 185" stroke="#333" stroke-width="8" stroke-linecap="round"/>
      <rect x="80" y="140" width="40" height="36" rx="5" fill="#2a6f97"/>
      <ellipse cx="88" cy="188" rx="8" ry="4" fill="#5c3826"/>
      <ellipse cx="112" cy="188" rx="8" ry="4" fill="#5c3826"/>

      <!-- Yeşil Tişört -->
      <path d="M72 110 Q100 116 128 110 L132 146 Q100 150 68 146 Z" fill="#38b000" stroke="#2b8800" stroke-width="2"/>

      <!-- Kollar yanlarda rahat -->
      <path d="M72 115 Q60 135 62 155" fill="none" stroke="#fcd3ad" stroke-width="10" stroke-linecap="round"/>
      <path d="M128 115 Q140 135 138 155" fill="none" stroke="#fcd3ad" stroke-width="10" stroke-linecap="round"/>
      <circle cx="62" cy="156" r="6" fill="#fcd3ad"/>
      <circle cx="138" cy="156" r="6" fill="#fcd3ad"/>

      <!-- Boyun ve Baş -->
      <rect x="94" y="96" width="12" height="15" fill="#fcd3ad"/>
      <circle cx="100" cy="72" r="32" fill="#fcd3ad"/>

      <!-- Saç -->
      <path d="M68 66 C68 36 132 36 132 66 C124 55 110 44 100 44 C88 44 76 54 68 66 Z" fill="#6b4423"/>
      <path d="M80 50 Q100 42 120 48" stroke="#6b4423" stroke-width="8" stroke-linecap="round"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="73" r="6" fill="#fcd3ad"/>
      <circle cx="132" cy="73" r="6" fill="#fcd3ad"/>

      <!-- Yüz - Yana tatlı bir bakış -->
      <circle cx="92" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="116" cy="70" r="4" fill="#2b2d42"/>
      <circle cx="93" cy="68" r="1.5" fill="#ffffff"/>
      <circle cx="117" cy="68" r="1.5" fill="#ffffff"/>
      <ellipse cx="85" cy="78" rx="4" ry="2" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="121" cy="78" rx="4" ry="2" fill="#ff85a1" opacity="0.6"/>
      <path d="M94 80 Q103 88 112 80" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // 4. BİZ Karakteri (Kız ve erkek çocuk yan yana neşeyle el sallıyor)
  getBiz() {
    return this.wrapSvg(`
      <defs>
        <radialGradient id="bgGlowBiz" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff0f6"/>
          <stop offset="100%" stop-color="#ffdeeb"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="95" fill="url(#bgGlowBiz)"/>
      
      <!-- KIZ ÇOCUĞU (SOL) -->
      <!-- Bacaklar & Etek -->
      <path d="M55 150 L55 185 M75 150 L75 185" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <rect x="50" y="145" width="30" height="28" rx="4" fill="#4361ee"/>
      <ellipse cx="55" cy="188" rx="7" ry="3.5" fill="#e63946"/>
      <ellipse cx="75" cy="188" rx="7" ry="3.5" fill="#e63946"/>
      <!-- Sarı Tişört -->
      <path d="M45 118 Q65 122 85 118 L87 148 Q65 152 43 148 Z" fill="#ffb703"/>
      <!-- Sol El Sallama -->
      <path d="M45 120 Q30 110 25 95" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
      <circle cx="25" cy="95" r="5" fill="#ffd9b3"/>
      <!-- Baş & Saç -->
      <circle cx="42" cy="75" r="16" fill="#5c3826"/>
      <circle cx="86" cy="75" r="16" fill="#5c3826"/>
      <circle cx="64" cy="56" r="16" fill="#5c3826"/>
      <circle cx="64" cy="80" r="23" fill="#ffd9b3"/>
      <circle cx="56" cy="78" r="3" fill="#2b2d42"/>
      <circle cx="72" cy="78" r="3" fill="#2b2d42"/>
      <path d="M58 86 Q64 92 70 86" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>

      <!-- ERKEK ÇOCUK (SAĞ) -->
      <!-- Bacaklar & Şort -->
      <path d="M125 150 L125 185 M145 150 L145 185" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <rect x="120" y="145" width="30" height="25" rx="4" fill="#6c757d"/>
      <ellipse cx="125" cy="188" rx="7" ry="3.5" fill="#3a86ff"/>
      <ellipse cx="145" cy="188" rx="7" ry="3.5" fill="#3a86ff"/>
      <!-- Mavi Tişört -->
      <path d="M115 118 Q135 122 155 118 L157 148 Q135 152 113 148 Z" fill="#3a86ff"/>
      <!-- Sağ El Sallama -->
      <path d="M155 120 Q170 110 175 95" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
      <circle cx="175" cy="95" r="5" fill="#fed0ab"/>
      <!-- Baş & Saç -->
      <circle cx="135" cy="80" r="23" fill="#fed0ab"/>
      <path d="M112 78 C112 55 158 55 158 78 C150 65 140 58 135 58 C128 58 120 65 112 78 Z" fill="#4a3525"/>
      <circle cx="127" cy="78" r="3" fill="#2b2d42"/>
      <circle cx="143" cy="78" r="3" fill="#2b2d42"/>
      <path d="M129 86 Q135 92 141 86" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Ortada Omuz Omuza Sevgi Bağı -->
      <path d="M85 125 Q100 132 115 125" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
    `);
  },

  // 5. NESNELER (Yemek, Top, Su, Okul, Resim, Mont)
  getNesne(type) {
    switch (type) {
      case 'yemek':
        return `<img src="assets/images/yemek.jpg" alt="yemek" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgYemek();" />`;
      case 'top':
      case 'topu':
        return `<img src="assets/images/top.jpg" alt="top" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgTop();" />`;
      case 'su':
        return `<img src="assets/images/su.jpg" alt="su" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgSu();" />`;
      case 'okula':
      case 'okul':
        return `<img src="assets/images/okul.jpg" alt="okul" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgOkul();" />`;
      case 'resim':
        return `<img src="assets/images/resim.jpg" alt="resim" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgResim();" />`;
      case 'mont':
        return `<img src="assets/images/mont.jpg" alt="mont" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgMont();" />`;
      default:
        return `<div class="placeholder-icon">📦</div>`;
    }
  },

  // Vektörel Nesne Yedekleri (Offline veya anında açılış için)
  getSvgYemek() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#fff7ed"/>
      <!-- Servis Bezi -->
      <rect x="35" y="115" width="130" height="50" rx="6" fill="#fed7aa"/>
      <!-- Çorba Kasesi -->
      <ellipse cx="100" cy="120" rx="65" ry="32" fill="#ea580c"/>
      <ellipse cx="100" cy="115" rx="60" ry="26" fill="#ffedd5"/>
      <ellipse cx="100" cy="115" rx="54" ry="22" fill="#fb923c"/>
      <!-- Havuç ve Bezelye Taneleri -->
      <circle cx="85" cy="112" r="5" fill="#16a34a"/>
      <circle cx="115" cy="118" r="4.5" fill="#16a34a"/>
      <circle cx="100" cy="110" r="6" fill="#ea580c"/>
      <circle cx="70" cy="118" r="5" fill="#ea580c"/>
      <!-- Kaşık -->
      <path d="M125 105 Q155 75 165 50" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="122" cy="108" rx="10" ry="6" fill="#cbd5e1" transform="rotate(-30 122 108)"/>
      <!-- Sıcak Duman Çizgileri -->
      <path d="M85 85 Q80 70 85 55" fill="none" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
      <path d="M100 80 Q105 65 100 50" fill="none" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
      <path d="M115 85 Q110 70 115 55" fill="none" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  getSvgTop() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#eff6ff"/>
      <!-- Renkli Sevimli Top -->
      <circle cx="100" cy="100" r="65" fill="#f59e0b"/>
      <!-- Yıldız ve Şerit Desenleri -->
      <path d="M55 70 Q100 100 145 70 Q100 130 55 70 Z" fill="#3b82f6" opacity="0.85"/>
      <path d="M40 110 Q100 140 160 110" stroke="#ef4444" stroke-width="12" fill="none"/>
      <polygon points="100,55 105,70 120,70 108,80 112,95 100,85 88,95 92,80 80,70 95,70" fill="#ffffff"/>
      <!-- Parlama -->
      <ellipse cx="80" cy="65" rx="15" ry="8" fill="#ffffff" opacity="0.5" transform="rotate(-30 80 65)"/>
    `);
  },

  getSvgSu() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#f0f9ff"/>
      <!-- Bardak -->
      <path d="M65 50 L75 160 Q100 170 125 160 L135 50 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="4"/>
      <!-- Bardak İçi Su -->
      <path d="M70 85 L76 156 Q100 165 124 156 L130 85 Q100 95 70 85 Z" fill="#0284c7" opacity="0.8"/>
      <!-- Su Baloncukları -->
      <circle cx="90" cy="115" r="4" fill="#ffffff" opacity="0.8"/>
      <circle cx="110" cy="130" r="3" fill="#ffffff" opacity="0.8"/>
      <circle cx="98" cy="140" r="5" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="80" cy="95" rx="3" ry="12" fill="#ffffff" opacity="0.5"/>
      <!-- Su Damlaları -->
      <path d="M145 65 Q150 75 145 80 Q140 75 145 65 Z" fill="#38bdf8"/>
    `);
  },

  getSvgOkul() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#fefce8"/>
      <!-- Okul Binası -->
      <rect x="45" y="80" width="110" height="85" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
      <!-- Çatı -->
      <polygon points="100,35 35,80 165,80" fill="#dc2626"/>
      <!-- Çan Kulesi & Bayrak -->
      <rect x="92" y="20" width="16" height="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <polygon points="100,5 90,20 110,20" fill="#b91c1c"/>
      <line x1="100" y1="5" x2="100" y2="0" stroke="#333" stroke-width="2"/>
      <polygon points="100,0 115,5 100,10" fill="#ef4444"/>
      <!-- Kapı & Pencereler -->
      <rect x="85" y="125" width="30" height="40" rx="3" fill="#92400e"/>
      <rect x="55" y="95" width="22" height="22" rx="2" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
      <rect x="123" y="95" width="22" height="22" rx="2" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
      <!-- Saat -->
      <circle cx="100" cy="62" r="10" fill="#ffffff" stroke="#333" stroke-width="2"/>
      <line x1="100" y1="62" x2="100" y2="56" stroke="#333" stroke-width="2"/>
      <line x1="100" y1="62" x2="104" y2="62" stroke="#333" stroke-width="2"/>
    `);
  },

  getSvgResim() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#faf5ff"/>
      <!-- Şövale Ayakları -->
      <line x1="60" y1="175" x2="95" y2="40" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="175" x2="105" y2="40" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="175" x2="100" y2="40" stroke="#78350f" stroke-width="5"/>
      <!-- Tuval -->
      <rect x="50" y="55" width="100" height="85" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
      <!-- Resim İçeriği: Güneş ve Gökkuşağı -->
      <circle cx="72" cy="78" r="14" fill="#facc15"/>
      <path d="M60 120 Q100 80 140 120" stroke="#ef4444" stroke-width="6" fill="none"/>
      <path d="M64 123 Q100 88 136 123" stroke="#f59e0b" stroke-width="5" fill="none"/>
      <path d="M68 126 Q100 96 132 126" stroke="#10b981" stroke-width="5" fill="none"/>
      <path d="M72 129 Q100 104 128 129" stroke="#3b82f6" stroke-width="5" fill="none"/>
      <!-- Boya Fırçaları -->
      <line x1="150" y1="130" x2="165" y2="155" stroke="#d97706" stroke-width="4"/>
      <circle cx="149" cy="128" r="4" fill="#ec4899"/>
    `);
  },

  getSvgMont() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#fff1f2"/>
      <!-- Sevimli Kırmızı Kış Montu -->
      <path d="M60 65 L40 105 L55 115 L68 85 L68 150 Q100 155 132 150 L132 85 L145 115 L160 105 L140 65 Z" fill="#e11d48"/>
      <!-- Kapüşon & Kürk -->
      <ellipse cx="100" cy="55" rx="35" ry="25" fill="#be123c"/>
      <ellipse cx="100" cy="58" rx="28" ry="18" fill="#f8fafc"/>
      <!-- Fermuar -->
      <line x1="100" y1="75" x2="100" y2="152" stroke="#facc15" stroke-width="4"/>
      <!-- Cepler -->
      <rect x="73" y="115" width="18" height="16" rx="3" fill="#be123c"/>
      <rect x="109" y="115" width="18" height="16" rx="3" fill="#be123c"/>
    `);
  },

  // 6. EYLEMLER (36 Kombinasyon: 9 Fiil x 4 Zamir)
  // Öznelere göre tam görsel tutarlılığı sağlayan eylem illüstrasyonu
  getAction(actionKey, personKey) {
    // Özel oluşturulan yapay zeka görselleri varsa doğrudan kullan
    if (actionKey === 'yaptim' && personKey === 'ben') {
      return `<img src="assets/images/ben_resim_yaptim.jpg" alt="Ben resim yaptım" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgAction('${actionKey}', '${personKey}');" />`;
    }
    if (actionKey === 'yaptin' && personKey === 'sen') {
      return `<img src="assets/images/sen_resim_yaptin.jpg" alt="Sen resim yaptın" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgAction('${actionKey}', '${personKey}');" />`;
    }
    if (actionKey === 'yaptik' && personKey === 'biz') {
      return `<img src="assets/images/biz_resim_yaptik.jpg" alt="Biz resim yaptık" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSvgAction('${actionKey}', '${personKey}');" />`;
    }

    return this.getSvgAction(actionKey, personKey);
  },

  getSvgAction(actionKey, person) {
    const isGirl = (person === 'ben');
    const isBoy = (person === 'sen');
    const isThird = (person === 'o');
    const isGroup = (person === 'biz');

    // Karakter baş & gövde şablonu
    const getActor = (x, y, scale = 1, customArms = "") => {
      let hairColor = isGirl ? '#5c3826' : (isBoy ? '#4a3525' : '#6b4423');
      let shirtColor = isGirl ? '#ffb703' : (isBoy ? '#3a86ff' : '#38b000');
      let isCurly = isGirl;

      return `
        <g transform="translate(${x}, ${y}) scale(${scale})">
          <!-- Bacaklar -->
          <line x1="88" y1="130" x2="88" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <line x1="112" y1="130" x2="112" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="88" cy="168" rx="7" ry="4" fill="#e63946"/>
          <ellipse cx="112" cy="168" rx="7" ry="4" fill="#e63946"/>
          <!-- Tişört -->
          <rect x="74" y="90" width="52" height="42" rx="6" fill="${shirtColor}"/>
          <!-- Özel Kollar -->
          ${customArms}
          <!-- Baş & Saç -->
          ${isCurly ? `
            <circle cx="70" cy="55" r="16" fill="${hairColor}"/>
            <circle cx="130" cy="55" r="16" fill="${hairColor}"/>
            <circle cx="100" cy="38" r="18" fill="${hairColor}"/>
          ` : `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="${hairColor}"/>
          `}
          <circle cx="100" cy="62" r="26" fill="#fed0ab"/>
          <circle cx="91" cy="60" r="3.5" fill="#2b2d42"/>
          <circle cx="109" cy="60" r="3.5" fill="#2b2d42"/>
          <path d="M93 70 Q100 78 107 70" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `;
    };

    // 1. YEMEK YEMEK (yedim, yedin, yedi, yedik)
    if (actionKey.startsWith('yedi')) {
      if (isGroup) {
        return this.wrapSvg(`
          <circle cx="100" cy="100" r="95" fill="#fff7ed"/>
          <!-- Masa -->
          <rect x="30" y="140" width="140" height="25" rx="5" fill="#b45309"/>
          <!-- İki Çorba Kasesi -->
          <ellipse cx="70" cy="138" rx="20" ry="10" fill="#ea580c"/>
          <ellipse cx="130" cy="138" rx="20" ry="10" fill="#ea580c"/>
          <!-- Kız ve Erkek Çocuk Oturuyor ve Kaşık Tutuyor -->
          <g transform="translate(-30, 20) scale(0.85)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#ffb703"/>
            <circle cx="100" cy="62" r="24" fill="#ffd9b3"/>
            <circle cx="75" cy="55" r="14" fill="#5c3826"/><circle cx="125" cy="55" r="14" fill="#5c3826"/><circle cx="100" cy="40" r="16" fill="#5c3826"/>
            <path d="M125 100 Q145 115 130 135" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
          <g transform="translate(45, 20) scale(0.85)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#3a86ff"/>
            <circle cx="100" cy="62" r="24" fill="#fed0ab"/>
            <path d="M75 55 C75 32 125 32 125 55 Z" fill="#4a3525"/>
            <path d="M75 100 Q55 115 70 135" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
        `);
      }
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#fff7ed"/>
        <!-- Masa ve Tabak -->
        <rect x="40" y="145" width="120" height="20" rx="4" fill="#b45309"/>
        <ellipse cx="100" cy="144" rx="30" ry="14" fill="#ea580c"/>
        <ellipse cx="100" cy="142" rx="26" ry="10" fill="#ffedd5"/>
        <!-- Kaşık tutan kol ve karakter -->
        ${getActor(0, 5, 0.95, `
          <path d="M120 105 Q140 120 115 138" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
          <line x1="110" y1="140" x2="100" y2="142" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
        `)}
      `);
    }

    // 2. TOP ATMAK (attım, attın, attı, attık)
    if (actionKey.startsWith('attı')) {
      if (isGroup) {
        return this.wrapSvg(`
          <circle cx="100" cy="100" r="95" fill="#eff6ff"/>
          <!-- İki çocuk birbirine top atıyor -->
          <g transform="translate(-42, 10) scale(0.78)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#ffb703"/>
            <circle cx="100" cy="62" r="24" fill="#ffd9b3"/>
            <circle cx="75" cy="55" r="14" fill="#5c3826"/><circle cx="125" cy="55" r="14" fill="#5c3826"/>
            <path d="M125 95 L150 75" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
          <!-- Uçan Top ve Hareket Çizgileri -->
          <path d="M65 75 Q100 45 135 75" stroke="#3b82f6" stroke-dasharray="4,4" stroke-width="3" fill="none"/>
          <circle cx="100" cy="55" r="16" fill="#f59e0b"/>
          <polygon points="100,45 103,53 111,53 105,58 107,66 100,61 93,66 95,58 89,53 97,53" fill="#fff"/>
          <g transform="translate(42, 10) scale(0.78)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#3a86ff"/>
            <circle cx="100" cy="62" r="24" fill="#fed0ab"/>
            <path d="M75 55 C75 32 125 32 125 55 Z" fill="#4a3525"/>
            <path d="M75 95 L50 80" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
        `);
      }
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#eff6ff"/>
        <!-- Uçan Top -->
        <circle cx="155" cy="60" r="20" fill="#f59e0b"/>
        <polygon points="155,48 158,57 167,57 160,63 162,72 155,67 148,72 150,63 143,57 152,57" fill="#fff"/>
        <path d="M115 85 Q135 68 142 62" stroke="#3b82f6" stroke-dasharray="3,3" stroke-width="3" fill="none"/>
        ${getActor(-15, 10, 0.95, `
          <!-- Kol topu fırlatmış yukarı uzanıyor -->
          <path d="M120 95 Q135 80 145 70" stroke="#fed0ab" stroke-width="10" stroke-linecap="round"/>
        `)}
      `);
    }

    // 3. SU İÇMEK (içtim, içtin, içti, içtik)
    if (actionKey.startsWith('içti')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#f0f9ff"/>
        <!-- Karakter bardağı ağzına götürüyor -->
        ${getActor(0, 10, 0.95, `
          <path d="M120 100 Q125 80 110 70" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
          <!-- Su Bardağı -->
          <path d="M106 60 L108 76 L118 76 L120 60 Z" fill="#38bdf8" opacity="0.85"/>
        `)}
        <!-- Ferahlatıcı Damlalar -->
        <circle cx="130" cy="55" r="3.5" fill="#38bdf8"/>
        <circle cx="138" cy="70" r="2.5" fill="#38bdf8"/>
      `);
    }

    // 4. OKULA GİTMEK (gittim, gittin, gitti, gittik)
    if (actionKey.startsWith('gitti')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#fefce8"/>
        <!-- Arka planda minik okul binası -->
        <g transform="translate(115, 30) scale(0.42)">
          <rect x="45" y="80" width="90" height="70" rx="3" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <polygon points="90,40 35,80 145,80" fill="#dc2626"/>
        </g>
        <!-- Patika Yol -->
        <path d="M20 185 Q80 150 140 120 L160 120 Q100 160 30 195 Z" fill="#e2e8f0"/>
        <!-- Karakter Okula Doğru Yürüyor, Sırtında Çanta -->
        ${getActor(-20, 15, 0.9, `
          <!-- Sırt Çantası -->
          <rect x="62" y="92" width="16" height="28" rx="4" fill="#ec4899"/>
          <!-- İleri adım atan bacaklar -->
          <line x1="90" y1="130" x2="78" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <line x1="108" y1="130" x2="122" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
        `)}
      `);
    }

    // 5. OTURMAK (oturdum, oturdun, oturdu, oturduk)
    if (actionKey.startsWith('oturd')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#f8fafc"/>
        <!-- Ahşap Sandalye -->
        <line x1="65" y1="80" x2="65" y2="170" stroke="#854d0e" stroke-width="6" stroke-linecap="round"/>
        <line x1="115" y1="135" x2="115" y2="170" stroke="#854d0e" stroke-width="6" stroke-linecap="round"/>
        <rect x="60" y="130" width="60" height="10" rx="3" fill="#a16207"/>
        <!-- Oturan Karakter -->
        <g transform="translate(0, 15)">
          <rect x="74" y="90" width="50" height="42" rx="6" fill="${isGirl ? '#ffb703' : (isBoy ? '#3a86ff' : '#38b000')}"/>
          <!-- Oturmuş bacaklar (L biçiminde) -->
          <path d="M85 132 L115 132 L115 165" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="118" cy="167" rx="7" ry="4" fill="#e63946"/>
          <!-- Baş & Saç -->
          ${isGirl ? `
            <circle cx="70" cy="55" r="15" fill="#5c3826"/><circle cx="130" cy="55" r="15" fill="#5c3826"/>
          ` : `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="#4a3525"/>
          `}
          <circle cx="100" cy="62" r="26" fill="#fed0ab"/>
          <circle cx="92" cy="60" r="3.5" fill="#2b2d42"/>
          <circle cx="108" cy="60" r="3.5" fill="#2b2d42"/>
          <path d="M94 70 Q100 77 106 70" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `);
    }

    // 6. YÜRÜMEK (yürüdüm, yürüdün, yürüdü, yürüdük)
    if (actionKey.startsWith('yürüd')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#ecfdf5"/>
        <!-- Yol Çizgisi -->
        <line x1="20" y1="175" x2="180" y2="175" stroke="#a7f3d0" stroke-width="6" stroke-linecap="round"/>
        <!-- Neşeyle Yürüyen Karakter (Bacaklar ve kollar açık) -->
        ${getActor(0, 8, 0.95, `
          <!-- Yürüyüş kolları -->
          <line x1="75" y1="100" x2="60" y2="125" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          <line x1="125" y1="100" x2="140" y2="120" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
        `)}
        <!-- Hareket Çizgileri -->
        <path d="M50 160 Q40 160 35 155" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
        <path d="M55 168 Q45 168 40 165" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      `);
    }

    // 7. RESİM YAPMAK (yaptım, yaptın, yaptı, yaptık)
    if (actionKey.startsWith('yaptı')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#faf5ff"/>
        <!-- Şövale ve Resim -->
        <g transform="translate(90, 45) scale(0.65)">
          <rect x="50" y="55" width="80" height="70" rx="4" fill="#fff" stroke="#94a3b8" stroke-width="3"/>
          <circle cx="70" cy="75" r="10" fill="#facc15"/>
          <path d="M60 110 Q90 85 120 110" stroke="#ef4444" stroke-width="5" fill="none"/>
        </g>
        <!-- Karakter Fırçayla Boyuyor -->
        ${getActor(-25, 10, 0.92, `
          <path d="M120 100 L145 85" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
          <line x1="145" y1="85" x2="155" y2="78" stroke="#d97706" stroke-width="5" stroke-linecap="round"/>
          <circle cx="156" cy="77" r="4" fill="#3b82f6"/>
        `)}
      `);
    }

    // 8. ZIPLAMAK (zıpladım, zıpladın, zıpladı, zıpladık)
    if (actionKey.startsWith('zıplad')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#fef3c7"/>
        <!-- Yer ve Zıplama Rüzgarı -->
        <ellipse cx="100" cy="180" rx="35" ry="6" fill="#e2e8f0"/>
        <path d="M85 170 Q100 160 115 170" stroke="#f59e0b" stroke-width="3" fill="none"/>
        <!-- Havaya Zıplamış Karakter (Kollar havada, ayaklar bükük) -->
        <g transform="translate(0, -15)">
          ${getActor(0, 10, 0.95, `
            <!-- Kollar Havada Zafer Pozu -->
            <path d="M75 100 L55 70" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
            <path d="M125 100 L145 70" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
          `)}
        </g>
        <!-- Yıldız Işıltıları -->
        <polygon points="50,45 53,52 60,52 55,57 57,64 50,60 43,64 45,57 40,52 47,52" fill="#fbbf24"/>
        <polygon points="150,45 153,52 160,52 155,57 157,64 150,60 143,64 145,57 140,52 147,52" fill="#fbbf24"/>
      `);
    }

    // 9. MONT GİYMEK (giydim, giydin, giydi, giydik)
    if (actionKey.startsWith('giyd')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="95" fill="#fff1f2"/>
        <!-- Karakter Montu Giymiş Fermuar Çekiyor -->
        <g transform="translate(0, 8)">
          <!-- Kırmızı Mont -->
          <rect x="70" y="85" width="60" height="52" rx="8" fill="#e11d48"/>
          <line x1="100" y1="85" x2="100" y2="137" stroke="#facc15" stroke-width="4"/>
          <!-- Eller fermuarda -->
          <path d="M72 95 Q85 110 96 112" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          <path d="M128 95 Q115 110 104 112" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          <!-- Baş & Saç -->
          ${isGirl ? `
            <circle cx="70" cy="55" r="16" fill="#5c3826"/><circle cx="130" cy="55" r="16" fill="#5c3826"/><circle cx="100" cy="38" r="18" fill="#5c3826"/>
          ` : `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="#4a3525"/>
          `}
          <circle cx="100" cy="62" r="26" fill="#fed0ab"/>
          <circle cx="91" cy="60" r="3.5" fill="#2b2d42"/>
          <circle cx="109" cy="60" r="3.5" fill="#2b2d42"/>
          <path d="M93 70 Q100 78 107 70" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Bacaklar -->
          <line x1="88" y1="137" x2="88" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <line x1="112" y1="137" x2="112" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="88" cy="168" rx="7" ry="4" fill="#991b1b"/>
          <ellipse cx="112" cy="168" rx="7" ry="4" fill="#991b1b"/>
        </g>
      `);
    }

    // Varsayılan
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="95" fill="#f8fafc"/>
      ${getActor(0, 10, 0.95)}
    `);
  },

  // Zamir kartı görseli (Ben, Sen, O, Biz)
  getSubject(personKey) {
    switch (personKey) {
      case 'ben':
        return `<img src="assets/images/ben.jpg" alt="Ben" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getBen();" />`;
      case 'sen':
        return `<img src="assets/images/sen.jpg" alt="Sen" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getSen();" />`;
      case 'o':
        return `<img src="assets/images/o.jpg" alt="O" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getO();" />`;
      case 'biz':
        return `<img src="assets/images/biz.jpg" alt="Biz" class="card-img-thumb" onerror="this.onerror=null;this.parentNode.innerHTML=Illustrations.getBiz();" />`;
      default:
        return this.getBen();
    }
  }
};
