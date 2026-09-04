// ==========================================================================
// DİL VE KONUŞMA TERAPİSİ (DKT) - GÖRSEL VE VEKTÖR MOTORU
// 100% Karakter ve Nesne Tutarlılığı
//
// 1. Özneler:
//    - "Ben": Kıvırcık kahverengi saçlı, sarı-turuncu tişörtlü kız çocuğu ("Elif").
//    - "Sen": Düz kahverengi saçlı, parlak mavi tişörtlü erkek çocuk ("Can").
//    - "O": Kısa saçlı, yeşil tişörtlü çocuk.
//    - "Biz": Kız ve erkek çocuğun yan yana olduğu arkadaş grubu.
//
// 2. Nesneler:
//    - Tek, cansız (gözsüz/yüzsüz), sevimli nesne illüstrasyonları.
//    - Eylem kartındaki nesne, nesne kartındaki nesneyle 1:1 birebir aynıdır!
// ==========================================================================

const Illustrations = {
  // Ortak Renk Paleti
  colors: {
    girlHair: '#5c3826',
    girlSkin: '#ffd9b3',
    girlShirt: '#ffb703',
    girlPants: '#4361ee',
    girlShoes: '#e63946',

    boyHair: '#4a3525',
    boySkin: '#fed0ab',
    boyShirt: '#3a86ff',
    boyShorts: '#6c757d',
    boyShoes: '#1d4ed8',

    thirdHair: '#6b4423',
    thirdSkin: '#fcd3ad',
    thirdShirt: '#38b000',
    thirdPants: '#2a6f97',
    thirdShoes: '#5c3826',

    // Ortak Nesne Renkleri (Birebir Eşleşme)
    ballPrimary: '#f59e0b',
    ballSecondary: '#3b82f6',
    soupBowl: '#ea580c',
    waterBlue: '#0284c7',
    waterGlass: '#38bdf8',
    schoolWall: '#fef08a',
    schoolRoof: '#dc2626',
    coatRed: '#e11d48',
    coatZip: '#facc15',
    bookCover: '#4f46e5',
    appleRed: '#dc2626',
    appleLeaf: '#16a34a',
    milkCarton: '#0ea5e9',
    toothbrushBlue: '#06b6d4',
    soapPink: '#ec4899'
  },

  wrapSvg(content, viewBox = "0 0 200 200") {
    return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" class="card-svg" width="100%" height="100%">${content}</svg>`;
  },

  // ========================================================================
  // 1. ÖZNE KARTLARI (KİM?)
  // ========================================================================
  getSubject(personKey) {
    switch (personKey) {
      case 'ben': return this.getBen();
      case 'sen': return this.getSen();
      case 'o': return this.getO();
      case 'biz': return this.getBiz();
      default: return this.getBen();
    }
  },

  // BEN: Kıvırcık saçlı, sarı tişörtlü kız çocuğu - Göğsüne elini koymuş 'ben' jesti
  getBen() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fffbeb" stroke="#fde68a" stroke-width="3"/>
      
      <!-- Bacaklar ve Ayakkabılar -->
      <line x1="86" y1="145" x2="86" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <line x1="114" y1="145" x2="114" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="86" cy="186" rx="8" ry="4.5" fill="#e63946"/>
      <ellipse cx="114" cy="186" rx="8" ry="4.5" fill="#e63946"/>
      <rect x="78" y="140" width="44" height="28" rx="5" fill="#4361ee"/>

      <!-- Sarı Tişört -->
      <path d="M72 108 Q100 115 128 108 L132 144 Q100 148 68 144 Z" fill="#ffb703" stroke="#d97706" stroke-width="2"/>
      <path d="M72 108 L52 126 L62 133 L76 118 Z" fill="#ffb703"/>

      <!-- 'Ben' Jesti: Sağ el göğse doğru -->
      <path d="M126 112 Q144 124 124 132 Q108 135 98 128" fill="none" stroke="#ffd9b3" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="98" cy="128" r="7" fill="#ffd9b3"/>
      <!-- Sol Kol rahat duruş -->
      <path d="M72 112 Q58 130 55 148" fill="none" stroke="#ffd9b3" stroke-width="9" stroke-linecap="round"/>

      <!-- Boyun -->
      <rect x="94" y="94" width="12" height="15" fill="#ffd9b3"/>

      <!-- Kıvırcık Saç Arkası -->
      <circle cx="66" cy="62" r="22" fill="#5c3826"/>
      <circle cx="134" cy="62" r="22" fill="#5c3826"/>
      <circle cx="70" cy="42" r="20" fill="#5c3826"/>
      <circle cx="130" cy="42" r="20" fill="#5c3826"/>
      <circle cx="100" cy="34" r="22" fill="#5c3826"/>

      <!-- Baş & Yüz -->
      <circle cx="100" cy="70" r="32" fill="#ffd9b3"/>

      <!-- Kıvırcık Kaküller -->
      <circle cx="76" cy="50" r="12" fill="#5c3826"/>
      <circle cx="96" cy="48" r="13" fill="#5c3826"/>
      <circle cx="118" cy="51" r="12" fill="#5c3826"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="72" r="6" fill="#ffd9b3"/>
      <circle cx="132" cy="72" r="6" fill="#ffd9b3"/>

      <!-- Gözler, Allık ve Gülümseme -->
      <circle cx="88" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="112" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="90" cy="66" r="1.8" fill="#ffffff"/>
      <circle cx="114" cy="66" r="1.8" fill="#ffffff"/>
      <ellipse cx="80" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="120" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <path d="M91 79 Q100 89 109 79" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // SEN: Düz saçlı, mavi tişörtlü erkek çocuk - Karşıyı işaret eden 'sen' jesti
  getSen() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#f0f9ff" stroke="#bae6fd" stroke-width="3"/>
      
      <!-- Bacaklar ve Şort -->
      <line x1="86" y1="146" x2="86" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <line x1="114" y1="146" x2="114" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="86" cy="186" rx="8" ry="4.5" fill="#1d4ed8"/>
      <ellipse cx="114" cy="186" rx="8" ry="4.5" fill="#1d4ed8"/>
      <rect x="78" y="140" width="44" height="26" rx="4" fill="#6c757d"/>

      <!-- Mavi Tişört -->
      <path d="M72 108 Q100 115 128 108 L132 144 Q100 148 68 144 Z" fill="#3a86ff" stroke="#2563eb" stroke-width="2"/>

      <!-- 'Sen' Jesti: Karşıya işaret eden el -->
      <path d="M72 112 Q60 130 60 150" fill="none" stroke="#fed0ab" stroke-width="9" stroke-linecap="round"/>
      <path d="M126 112 Q142 128 120 134 Q105 136 98 130" fill="none" stroke="#fed0ab" stroke-width="12" stroke-linecap="round"/>
      <circle cx="98" cy="130" r="7.5" fill="#fed0ab"/>
      <line x1="98" y1="130" x2="86" y2="130" stroke="#fed0ab" stroke-width="6" stroke-linecap="round"/>

      <!-- Boyun ve Baş -->
      <rect x="94" y="94" width="12" height="15" fill="#fed0ab"/>
      <circle cx="100" cy="70" r="32" fill="#fed0ab"/>

      <!-- Düz Saç -->
      <path d="M68 66 C68 36 132 36 132 66 C132 58 124 40 100 40 C76 40 68 58 68 66 Z" fill="#4a3525"/>
      <path d="M68 58 Q100 50 132 58 L132 48 Q100 35 68 48 Z" fill="#4a3525"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="72" r="6" fill="#fed0ab"/>
      <circle cx="132" cy="72" r="6" fill="#fed0ab"/>

      <!-- Gözler ve Gülümseme -->
      <circle cx="88" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="112" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="90" cy="66" r="1.8" fill="#ffffff"/>
      <circle cx="114" cy="66" r="1.8" fill="#ffffff"/>
      <ellipse cx="80" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="120" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <path d="M91 79 Q100 89 109 79" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // O: Yeşil tişörtlü çocuk (3. Tekil şahıs)
  getO() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="3"/>
      
      <!-- Bacaklar ve Pantolon -->
      <line x1="86" y1="145" x2="86" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <line x1="114" y1="145" x2="114" y2="182" stroke="#333" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="86" cy="186" rx="8" ry="4.5" fill="#5c3826"/>
      <ellipse cx="114" cy="186" rx="8" ry="4.5" fill="#5c3826"/>
      <rect x="78" y="140" width="44" height="28" rx="5" fill="#2a6f97"/>

      <!-- Yeşil Tişört -->
      <path d="M72 108 Q100 115 128 108 L132 144 Q100 148 68 144 Z" fill="#38b000" stroke="#2b8800" stroke-width="2"/>

      <!-- Kollar yanlarda rahat -->
      <path d="M72 112 Q60 132 62 150" fill="none" stroke="#fcd3ad" stroke-width="9" stroke-linecap="round"/>
      <path d="M128 112 Q140 132 138 150" fill="none" stroke="#fcd3ad" stroke-width="9" stroke-linecap="round"/>

      <!-- Boyun ve Baş -->
      <rect x="94" y="94" width="12" height="15" fill="#fcd3ad"/>
      <circle cx="100" cy="70" r="32" fill="#fcd3ad"/>

      <!-- Saç -->
      <path d="M68 64 C68 34 132 34 132 64 C124 53 110 42 100 42 C88 42 76 52 68 64 Z" fill="#6b4423"/>

      <!-- Kulaklar -->
      <circle cx="68" cy="72" r="6" fill="#fcd3ad"/>
      <circle cx="132" cy="72" r="6" fill="#fcd3ad"/>

      <!-- Yüz: Yana tatlı bir bakış -->
      <circle cx="92" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="116" cy="68" r="4.5" fill="#2b2d42"/>
      <circle cx="94" cy="66" r="1.8" fill="#ffffff"/>
      <circle cx="118" cy="66" r="1.8" fill="#ffffff"/>
      <ellipse cx="84" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <ellipse cx="122" cy="77" rx="5" ry="3" fill="#ff85a1" opacity="0.6"/>
      <path d="M94 79 Q103 88 112 79" fill="none" stroke="#2b2d42" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // BİZ: Kız ve erkek çocuk yan yana neşeyle el sallıyor
  getBiz() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fff1f2" stroke="#fecdd3" stroke-width="3"/>
      
      <!-- KIZ ÇOCUĞU (SOL) -->
      <line x1="52" y1="150" x2="52" y2="182" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <line x1="72" y1="150" x2="72" y2="182" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="52" cy="185" rx="7" ry="4" fill="#e63946"/>
      <ellipse cx="72" cy="185" rx="7" ry="4" fill="#e63946"/>
      <rect x="46" y="144" width="32" height="24" rx="4" fill="#4361ee"/>
      <path d="M44 116 Q62 120 80 116 L82 146 Q62 150 42 146 Z" fill="#ffb703"/>
      <!-- Sol El Sallama -->
      <path d="M44 118 Q30 108 26 94" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
      <circle cx="26" cy="94" r="5.5" fill="#ffd9b3"/>
      <!-- Baş & Kıvırcık Saç -->
      <circle cx="42" cy="74" r="15" fill="#5c3826"/>
      <circle cx="84" cy="74" r="15" fill="#5c3826"/>
      <circle cx="63" cy="56" r="16" fill="#5c3826"/>
      <circle cx="63" cy="78" r="22" fill="#ffd9b3"/>
      <circle cx="56" cy="76" r="3.5" fill="#2b2d42"/>
      <circle cx="70" cy="76" r="3.5" fill="#2b2d42"/>
      <path d="M58 84 Q63 90 68 84" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>

      <!-- ERKEK ÇOCUK (SAĞ) -->
      <line x1="128" y1="150" x2="128" y2="182" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <line x1="148" y1="150" x2="148" y2="182" stroke="#333" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="128" cy="185" rx="7" ry="4" fill="#1d4ed8"/>
      <ellipse cx="148" cy="185" rx="7" ry="4" fill="#1d4ed8"/>
      <rect x="122" y="144" width="32" height="22" rx="4" fill="#6c757d"/>
      <path d="M120 116 Q138 120 156 116 L158 146 Q138 150 118 146 Z" fill="#3a86ff"/>
      <!-- Sağ El Sallama -->
      <path d="M156 118 Q170 108 174 94" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
      <circle cx="174" cy="94" r="5.5" fill="#fed0ab"/>
      <!-- Baş & Düz Saç -->
      <circle cx="137" cy="78" r="22" fill="#fed0ab"/>
      <path d="M115 76 C115 54 159 54 159 76 C152 64 142 57 137 57 C130 57 122 64 115 76 Z" fill="#4a3525"/>
      <circle cx="130" cy="76" r="3.5" fill="#2b2d42"/>
      <circle cx="144" cy="76" r="3.5" fill="#2b2d42"/>
      <path d="M132 84 Q137 90 142 84" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>

      <!-- Ortada Omuz Omuza Bağ -->
      <path d="M80 122 Q100 128 120 122" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
    `);
  },

  // ========================================================================
  // 2. NESNE KARTLARI (NEYİ? / NEREYE?)
  // Canlı olmayan, tekil, sade ve çocuk dostu nesneler
  // ========================================================================
  getNesne(type) {
    switch (type) {
      case 'top':
      case 'topu':
        return this.getSingleBall(); // KULLANICININ İSTEDİĞİ: Tek bir top, canlı/yüzsüz değil!
      case 'yemek':
        return this.getSoupBowl();
      case 'su':
        return this.getWaterGlass();
      case 'okula':
      case 'okul':
        return this.getSchoolBuilding();
      case 'resim':
        return this.getEaselPainting();
      case 'mont':
        return this.getRedCoat();
      case 'kitap':
        return this.getBook();
      case 'elma':
        return this.getApple();
      case 'süt':
      case 'sut':
        return this.getMilk();
      case 'diş':
      case 'dis':
      case 'dis_fircasi':
        return this.getToothbrush();
      case 'sabun':
      case 'el':
        return this.getSoap();
      default:
        return this.getSingleBall();
    }
  },

  // TEK BİR TOP (CANLI DEĞİL - Gözsüz, Yüzsüz, Klasik Spor/Oyun Topu)
  getSingleBall() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#f0f9ff" stroke="#bae6fd" stroke-width="3"/>
      <!-- Topun Gölgesi -->
      <ellipse cx="100" cy="172" rx="48" ry="10" fill="#cbd5e1" opacity="0.6"/>
      <!-- Tek Klasik Renkli Top -->
      <circle cx="100" cy="100" r="64" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
      <!-- Canlı mavi ve kırmızı dekoratif eğimli şeritler -->
      <path d="M50 75 Q100 110 150 75 Q100 135 50 75 Z" fill="#3b82f6" opacity="0.9"/>
      <path d="M42 115 Q100 145 158 115" stroke="#ef4444" stroke-width="12" fill="none"/>
      <!-- Beyaz Yıldız Deseni (Yüz veya göz kesinlikle yok) -->
      <polygon points="100,52 105,68 120,68 108,78 112,94 100,84 88,94 92,78 80,68 95,68" fill="#ffffff"/>
      <!-- Işık Parlaması -->
      <ellipse cx="78" cy="62" rx="16" ry="8" fill="#ffffff" opacity="0.55" transform="rotate(-30 78 62)"/>
    `);
  },

  // ÇORBA KASESİ (Yemek)
  getSoupBowl() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fff7ed" stroke="#fed7aa" stroke-width="3"/>
      <ellipse cx="100" cy="168" rx="55" ry="10" fill="#e2e8f0"/>
      <!-- Masa Örtüsü -->
      <rect x="35" y="125" width="130" height="42" rx="6" fill="#fed7aa"/>
      <!-- Çorba Kasesi -->
      <ellipse cx="100" cy="122" rx="64" ry="32" fill="#ea580c"/>
      <ellipse cx="100" cy="116" rx="58" ry="24" fill="#ffedd5"/>
      <ellipse cx="100" cy="116" rx="52" ry="20" fill="#fb923c"/>
      <!-- Sebze Taneleri -->
      <circle cx="85" cy="114" r="5" fill="#16a34a"/>
      <circle cx="115" cy="118" r="4.5" fill="#16a34a"/>
      <circle cx="100" cy="110" r="5" fill="#ea580c"/>
      <circle cx="72" cy="116" r="4.5" fill="#ea580c"/>
      <!-- Kaşık -->
      <path d="M125 106 Q155 78 165 52" stroke="#94a3b8" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="123" cy="109" rx="10" ry="6" fill="#cbd5e1" transform="rotate(-30 123 109)"/>
      <!-- Buhar -->
      <path d="M88 82 Q83 68 88 54" fill="none" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
      <path d="M102 78 Q107 64 102 50" fill="none" stroke="#fdba74" stroke-width="3" stroke-linecap="round"/>
    `);
  },

  // SU BARDAĞI (Su)
  getWaterGlass() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#f0f9ff" stroke="#bae6fd" stroke-width="3"/>
      <ellipse cx="100" cy="170" rx="40" ry="8" fill="#e2e8f0"/>
      <!-- Cam Bardak -->
      <path d="M66 50 L76 160 Q100 170 124 160 L134 50 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="4"/>
      <!-- Mavi Su -->
      <path d="M71 85 L77 156 Q100 165 123 156 L129 85 Q100 95 71 85 Z" fill="#0284c7" opacity="0.85"/>
      <circle cx="90" cy="115" r="4" fill="#ffffff" opacity="0.8"/>
      <circle cx="110" cy="130" r="3" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="80" cy="95" rx="3" ry="12" fill="#ffffff" opacity="0.5"/>
    `);
  },

  // OKUL BİNASI (Okula)
  getSchoolBuilding() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fefce8" stroke="#fef08a" stroke-width="3"/>
      <!-- Okul Gövdesi -->
      <rect x="45" y="80" width="110" height="85" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
      <!-- Kırmızı Çatı -->
      <polygon points="100,35 35,80 165,80" fill="#dc2626"/>
      <!-- Çan Kulesi & Bayrak -->
      <rect x="92" y="20" width="16" height="20" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <polygon points="100,5 90,20 110,20" fill="#b91c1c"/>
      <polygon points="100,2 116,7 100,12" fill="#ef4444"/>
      <!-- Kapı & Pencereler -->
      <rect x="85" y="125" width="30" height="40" rx="3" fill="#92400e"/>
      <rect x="55" y="95" width="22" height="22" rx="2" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
      <rect x="123" y="95" width="22" height="22" rx="2" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
      <!-- Saat -->
      <circle cx="100" cy="62" r="9" fill="#ffffff" stroke="#333" stroke-width="2"/>
      <line x1="100" y1="62" x2="100" y2="57" stroke="#333" stroke-width="2"/>
      <line x1="100" y1="62" x2="104" y2="62" stroke="#333" stroke-width="2"/>
    `);
  },

  // ŞÖVALEDE TUVAL RESMİ (Resim)
  getEaselPainting() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#faf5ff" stroke="#f3e8ff" stroke-width="3"/>
      <!-- Şövale -->
      <line x1="60" y1="175" x2="95" y2="40" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="175" x2="105" y2="40" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
      <line x1="100" y1="175" x2="100" y2="40" stroke="#78350f" stroke-width="5"/>
      <!-- Tuval -->
      <rect x="50" y="55" width="100" height="85" rx="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
      <!-- Güneş ve Gökkuşağı -->
      <circle cx="72" cy="78" r="13" fill="#facc15"/>
      <path d="M60 120 Q100 80 140 120" stroke="#ef4444" stroke-width="6" fill="none"/>
      <path d="M64 123 Q100 88 136 123" stroke="#f59e0b" stroke-width="5" fill="none"/>
      <path d="M68 126 Q100 96 132 126" stroke="#10b981" stroke-width="5" fill="none"/>
      <path d="M72 129 Q100 104 128 129" stroke="#3b82f6" stroke-width="5" fill="none"/>
      <!-- Fırça -->
      <line x1="150" y1="130" x2="165" y2="155" stroke="#d97706" stroke-width="4"/>
      <circle cx="149" cy="128" r="4" fill="#ec4899"/>
    `);
  },

  // KIRMIZI MONT (Mont)
  getRedCoat() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fff1f2" stroke="#fecdd3" stroke-width="3"/>
      <!-- Kırmızı Mont -->
      <path d="M60 65 L40 105 L55 115 L68 85 L68 155 Q100 160 132 155 L132 85 L145 115 L160 105 L140 65 Z" fill="#e11d48"/>
      <!-- Kapüşon -->
      <ellipse cx="100" cy="55" rx="35" ry="25" fill="#be123c"/>
      <ellipse cx="100" cy="58" rx="28" ry="18" fill="#f8fafc"/>
      <!-- Sarı Fermuar -->
      <line x1="100" y1="75" x2="100" y2="156" stroke="#facc15" stroke-width="4"/>
      <!-- Cepler -->
      <rect x="73" y="118" width="18" height="16" rx="3" fill="#be123c"/>
      <rect x="109" y="118" width="18" height="16" rx="3" fill="#be123c"/>
    `);
  },

  // KİTAP (Yeni Kütüphane)
  getBook() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#eef2ff" stroke="#c7d2fe" stroke-width="3"/>
      <ellipse cx="100" cy="165" rx="45" ry="8" fill="#cbd5e1"/>
      <!-- Açık Kitap Sayfaları -->
      <path d="M40 75 Q100 68 100 80 Q100 68 160 75 L155 140 Q100 135 100 145 Q100 135 45 140 Z" fill="#ffffff" stroke="#4f46e5" stroke-width="3"/>
      <!-- Kapak Sırtı -->
      <path d="M100 80 L100 145" stroke="#4338ca" stroke-width="4"/>
      <!-- Renkli Resim ve Yazı Çizgileri -->
      <rect x="52" y="90" width="35" height="25" rx="3" fill="#fde047"/>
      <line x1="52" y1="124" x2="88" y2="124" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="52" y1="130" x2="78" y2="130" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="112" y1="95" x2="148" y2="95" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="112" y1="105" x2="148" y2="105" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="112" y1="115" x2="148" y2="115" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
    `);
  },

  // ELMA (Yeni Kütüphane)
  getApple() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fef2f2" stroke="#fecaca" stroke-width="3"/>
      <ellipse cx="100" cy="165" rx="38" ry="8" fill="#cbd5e1"/>
      <!-- Kırmızı Sulu Elma -->
      <path d="M100 80 C80 60 50 70 50 105 C50 145 80 155 100 155 C120 155 150 145 150 105 C150 70 120 60 100 80 Z" fill="#dc2626" stroke="#b91c1c" stroke-width="3"/>
      <!-- Sap ve Yeşil Yaprak -->
      <path d="M100 80 Q105 55 118 45" stroke="#78350f" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M106 62 Q125 55 130 65 Q115 75 106 62 Z" fill="#16a34a"/>
      <!-- Işık Yansıması -->
      <ellipse cx="75" cy="98" rx="8" ry="18" fill="#ffffff" opacity="0.4" transform="rotate(-20 75 98)"/>
    `);
  },

  // SÜT (Yeni Kütüphane)
  getMilk() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="3"/>
      <ellipse cx="100" cy="168" rx="45" ry="8" fill="#cbd5e1"/>
      <!-- Süt Kutusu -->
      <rect x="55" y="75" width="45" height="80" rx="3" fill="#ffffff" stroke="#0ea5e9" stroke-width="3"/>
      <polygon points="55,75 77,50 100,75" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="2"/>
      <rect x="55" y="105" width="45" height="20" fill="#0ea5e9"/>
      <!-- Süt Bardağı -->
      <path d="M115 95 L120 155 Q135 160 150 155 L155 95 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/>
      <!-- Pipet -->
      <path d="M140 145 L145 80 L160 70" stroke="#f43f5e" stroke-width="4" fill="none" stroke-linecap="round"/>
    `);
  },

  // DİŞ FIRÇASI VE MACUN (Yeni Kütüphane)
  getToothbrush() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#ecfeff" stroke="#a5f3fc" stroke-width="3"/>
      <!-- Fırça Sapı -->
      <path d="M50 150 Q100 110 150 65" stroke="#06b6d4" stroke-width="12" stroke-linecap="round" fill="none"/>
      <!-- Fırça Başı ve Kıllar -->
      <rect x="142" y="48" width="22" height="16" rx="4" fill="#ffffff" stroke="#0891b2" stroke-width="2"/>
      <line x1="146" y1="46" x2="146" y2="40" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="152" y1="46" x2="152" y2="38" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="158" y1="46" x2="158" y2="40" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <!-- Köpük Baloncukları -->
      <circle cx="150" cy="35" r="4" fill="#e0f2fe"/>
      <circle cx="160" cy="32" r="3" fill="#e0f2fe"/>
    `);
  },

  // SABUN (Yeni Kütüphane)
  getSoap() {
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="3"/>
      <!-- Sabunluk -->
      <ellipse cx="100" cy="135" rx="55" ry="20" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Pembe Kalıp Sabun -->
      <rect x="65" y="105" width="70" height="35" rx="14" fill="#f472b6" stroke="#db2777" stroke-width="3"/>
      <ellipse cx="100" cy="115" rx="22" ry="8" fill="#fbcfe8" opacity="0.6"/>
      <!-- Köpükler -->
      <circle cx="70" cy="90" r="10" fill="#ffffff" stroke="#f472b6" stroke-width="2" opacity="0.8"/>
      <circle cx="95" cy="80" r="14" fill="#ffffff" stroke="#f472b6" stroke-width="2" opacity="0.8"/>
      <circle cx="125" cy="88" r="9" fill="#ffffff" stroke="#f472b6" stroke-width="2" opacity="0.8"/>
    `);
  },

  // ========================================================================
  // 3. EYLEM KARTLARI (NE YAPTI?)
  // ÖZNEDEKİ KİŞİYLE VE NESNEDEKİ NESNEYLE 1:1 TAM EŞLEŞME MOTORU
  // ========================================================================
  getAction(actionKey, personKey) {
    const isGirl = (personKey === 'ben');
    const isBoy = (personKey === 'sen');
    const isThird = (personKey === 'o');
    const isGroup = (personKey === 'biz');

    // Aktör Gövde Oluşturucu (Karakterin giysi ve saçına %100 sadık)
    const renderActor = (x, y, scale = 1, customArms = "", customPants = "") => {
      let hairColor = isGirl ? '#5c3826' : (isBoy ? '#4a3525' : '#6b4423');
      let shirtColor = isGirl ? '#ffb703' : (isBoy ? '#3a86ff' : '#38b000');
      let skinColor = isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad');
      let shoeColor = isGirl ? '#e63946' : (isBoy ? '#1d4ed8' : '#5c3826');

      return `
        <g transform="translate(${x}, ${y}) scale(${scale})">
          <!-- Bacaklar -->
          ${customPants ? customPants : `
            <line x1="88" y1="134" x2="88" y2="168" stroke="#333" stroke-width="7" stroke-linecap="round"/>
            <line x1="112" y1="134" x2="112" y2="168" stroke="#333" stroke-width="7" stroke-linecap="round"/>
            <ellipse cx="88" cy="172" rx="7.5" ry="4.5" fill="${shoeColor}"/>
            <ellipse cx="112" cy="172" rx="7.5" ry="4.5" fill="${shoeColor}"/>
            <rect x="80" y="132" width="40" height="26" rx="4" fill="${isBoy ? '#6c757d' : '#4361ee'}"/>
          `}

          <!-- Tişört -->
          <rect x="74" y="92" width="52" height="42" rx="6" fill="${shirtColor}"/>

          <!-- Özel Kollar / Eylem Hareketi -->
          ${customArms}

          <!-- Boyun ve Baş -->
          <rect x="94" y="86" width="12" height="12" fill="${skinColor}"/>

          <!-- Saç Arkası -->
          ${isGirl ? `
            <circle cx="68" cy="55" r="16" fill="${hairColor}"/>
            <circle cx="132" cy="55" r="16" fill="${hairColor}"/>
            <circle cx="100" cy="38" r="18" fill="${hairColor}"/>
          ` : (isBoy ? `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="${hairColor}"/>
          ` : `
            <path d="M72 55 C72 32 128 32 128 55 Z" fill="${hairColor}"/>
          `)}

          <!-- Yüz -->
          <circle cx="100" cy="64" r="26" fill="${skinColor}"/>

          <!-- Kıvırcık Ön Kakül (Sadece Ben/Kız için) -->
          ${isGirl ? `
            <circle cx="82" cy="46" r="9" fill="${hairColor}"/>
            <circle cx="98" cy="45" r="10" fill="${hairColor}"/>
            <circle cx="116" cy="47" r="9" fill="${hairColor}"/>
          ` : ''}

          <!-- Gözler ve Gülümseme -->
          <circle cx="92" cy="62" r="3.5" fill="#2b2d42"/>
          <circle cx="108" cy="62" r="3.5" fill="#2b2d42"/>
          <path d="M94 72 Q100 80 106 72" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `;
    };

    // 1. TOP ATTI (TEK VE AYNI TOP - Yüzsüz/Cansız, Yıldızlı Sarı-Mavi-Kırmızı Top)
    if (actionKey.startsWith('attı')) {
      const singleBallSvg = `
        <circle cx="148" cy="62" r="18" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
        <path d="M134 54 Q148 64 162 54 Q148 72 134 54 Z" fill="#3b82f6"/>
        <polygon points="148,48 150,53 155,53 151,56 153,61 148,58 143,61 145,56 141,53 146,53" fill="#fff"/>
      `;

      if (isGroup) {
        return this.wrapSvg(`
          <circle cx="100" cy="100" r="96" fill="#eff6ff" stroke="#bae6fd" stroke-width="3"/>
          <!-- İki çocuk birbirine o tek topu atıyor -->
          <g transform="translate(-40, 10) scale(0.78)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#ffb703"/>
            <circle cx="100" cy="62" r="24" fill="#ffd9b3"/>
            <circle cx="75" cy="55" r="14" fill="#5c3826"/><circle cx="125" cy="55" r="14" fill="#5c3826"/>
            <path d="M125 95 L145 78" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
          </g>
          <!-- Ortada Uçan Tek Top -->
          <circle cx="100" cy="58" r="16" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
          <path d="M88 52 Q100 60 112 52 Q100 67 88 52 Z" fill="#3b82f6"/>
          <polygon points="100,48 102,53 107,53 103,56 105,61 100,58 95,61 97,56 93,53 98,53" fill="#fff"/>
          <path d="M65 75 Q100 45 135 75" stroke="#3b82f6" stroke-dasharray="3,3" stroke-width="2.5" fill="none"/>
          
          <g transform="translate(40, 10) scale(0.78)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#3a86ff"/>
            <circle cx="100" cy="62" r="24" fill="#fed0ab"/>
            <path d="M75 55 C75 32 125 32 125 55 Z" fill="#4a3525"/>
            <path d="M75 95 L55 80" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
        `);
      }

      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#eff6ff" stroke="#bae6fd" stroke-width="3"/>
        <!-- Uçan Tek Top ve Çizgisi -->
        ${singleBallSvg}
        <path d="M115 85 Q132 70 140 65" stroke="#3b82f6" stroke-dasharray="3,3" stroke-width="2.5" fill="none"/>
        ${renderActor(-15, 10, 0.95, `
          <path d="M120 95 Q135 80 142 70" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="10" stroke-linecap="round"/>
        `)}
      `);
    }

    // 2. YEMEK YEDİ (TAM OLARAK AYNI TURUNCU ÇORBA KASESİ VE KAŞIK)
    if (actionKey.startsWith('yedi')) {
      const bowlSvg = `
        <rect x="40" y="146" width="120" height="18" rx="4" fill="#b45309"/>
        <ellipse cx="100" cy="144" rx="30" ry="14" fill="#ea580c"/>
        <ellipse cx="100" cy="142" rx="26" ry="10" fill="#ffedd5"/>
        <ellipse cx="100" cy="142" rx="22" ry="8" fill="#fb923c"/>
        <circle cx="94" cy="141" r="2.5" fill="#16a34a"/>
        <circle cx="106" cy="143" r="2.5" fill="#16a34a"/>
      `;

      if (isGroup) {
        return this.wrapSvg(`
          <circle cx="100" cy="100" r="96" fill="#fff7ed" stroke="#fed7aa" stroke-width="3"/>
          <rect x="25" y="140" width="150" height="25" rx="5" fill="#b45309"/>
          <!-- İki Aynı Kase -->
          <ellipse cx="65" cy="138" rx="20" ry="10" fill="#ea580c"/>
          <ellipse cx="65" cy="136" rx="16" ry="7" fill="#fb923c"/>
          <ellipse cx="135" cy="138" rx="20" ry="10" fill="#ea580c"/>
          <ellipse cx="135" cy="136" rx="16" ry="7" fill="#fb923c"/>
          <!-- Kız ve Erkek Çocuk Oturuyor -->
          <g transform="translate(-32, 22) scale(0.85)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#ffb703"/>
            <circle cx="100" cy="62" r="24" fill="#ffd9b3"/>
            <circle cx="75" cy="55" r="14" fill="#5c3826"/><circle cx="125" cy="55" r="14" fill="#5c3826"/>
            <path d="M125 100 Q140 115 125 135" stroke="#ffd9b3" stroke-width="8" stroke-linecap="round"/>
          </g>
          <g transform="translate(42, 22) scale(0.85)">
            <rect x="75" y="90" width="50" height="40" rx="6" fill="#3a86ff"/>
            <circle cx="100" cy="62" r="24" fill="#fed0ab"/>
            <path d="M75 55 C75 32 125 32 125 55 Z" fill="#4a3525"/>
            <path d="M75 100 Q60 115 75 135" stroke="#fed0ab" stroke-width="8" stroke-linecap="round"/>
          </g>
        `);
      }

      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fff7ed" stroke="#fed7aa" stroke-width="3"/>
        ${bowlSvg}
        ${renderActor(0, 6, 0.95, `
          <path d="M120 105 Q140 120 115 138" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="9" stroke-linecap="round"/>
          <line x1="110" y1="140" x2="100" y2="142" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
        `)}
      `);
    }

    // 3. SU İÇTİ (TAM OLARAK AYNI CAM BARDAK)
    if (actionKey.startsWith('içti') || actionKey.startsWith('icti')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#f0f9ff" stroke="#bae6fd" stroke-width="3"/>
        ${renderActor(0, 10, 0.95, `
          <path d="M120 100 Q126 80 110 70" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="9" stroke-linecap="round"/>
          <!-- Birebir Aynı Cam Bardak -->
          <path d="M106 60 L108 76 L118 76 L120 60 Z" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
          <path d="M108 66 L109 75 L117 75 L118 66 Z" fill="#0284c7"/>
        `)}
        <circle cx="132" cy="55" r="3.5" fill="#38bdf8"/>
      `);
    }

    // 4. OKULA GİTTİ (TAM OLARAK AYNI KIRMIZI ÇATILI, SARI DUVARLI OKUL)
    if (actionKey.startsWith('gitti')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fefce8" stroke="#fef08a" stroke-width="3"/>
        <!-- Aynı Okul Binası Minyatürü -->
        <g transform="translate(120, 30) scale(0.38)">
          <rect x="45" y="80" width="110" height="85" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
          <polygon points="100,35 35,80 165,80" fill="#dc2626"/>
          <rect x="92" y="20" width="16" height="20" fill="#fef08a"/>
          <polygon points="100,5 90,20 110,20" fill="#b91c1c"/>
        </g>
        <path d="M20 185 Q80 150 140 120 L160 120 Q100 160 30 195 Z" fill="#e2e8f0"/>
        ${renderActor(-18, 15, 0.9, `
          <rect x="62" y="92" width="16" height="28" rx="4" fill="#ec4899"/>
        `)}
      `);
    }

    // 5. RESİM YAPTI (TAM OLARAK AYNI ŞÖVALE VE GÜNEŞLİ/GÖKKUŞAKLI TUVAL)
    if (actionKey.startsWith('yaptı') || actionKey.startsWith('yapti')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#faf5ff" stroke="#f3e8ff" stroke-width="3"/>
        <!-- Aynı Şövale ve Güneş/Gökkuşağı Resmi -->
        <g transform="translate(95, 45) scale(0.6)">
          <rect x="50" y="55" width="90" height="75" rx="4" fill="#fff" stroke="#cbd5e1" stroke-width="3"/>
          <circle cx="70" cy="74" r="11" fill="#facc15"/>
          <path d="M60 110 Q95 80 130 110" stroke="#ef4444" stroke-width="5" fill="none"/>
          <path d="M64 113 Q95 86 126 113" stroke="#f59e0b" stroke-width="4" fill="none"/>
          <path d="M68 116 Q95 92 122 116" stroke="#10b981" stroke-width="4" fill="none"/>
        </g>
        ${renderActor(-25, 10, 0.92, `
          <path d="M120 100 L145 84" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="9" stroke-linecap="round"/>
          <line x1="145" y1="84" x2="155" y2="78" stroke="#d97706" stroke-width="4" stroke-linecap="round"/>
          <circle cx="156" cy="77" r="4" fill="#3b82f6"/>
        `)}
      `);
    }

    // 6. MONT GİYDİ (TAM OLARAK AYNI KIRMIZI KAPÜŞONLU MONT VE SARI FERMUAR)
    if (actionKey.startsWith('giyd')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fff1f2" stroke="#fecdd3" stroke-width="3"/>
        <g transform="translate(0, 8)">
          <rect x="70" y="85" width="60" height="52" rx="8" fill="#e11d48"/>
          <line x1="100" y1="85" x2="100" y2="137" stroke="#facc15" stroke-width="4"/>
          <!-- Eller fermuarda -->
          <path d="M72 95 Q85 110 96 112" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="8" stroke-linecap="round"/>
          <path d="M128 95 Q115 110 104 112" stroke="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}" stroke-width="8" stroke-linecap="round"/>
          <!-- Karakter Başlığı -->
          ${isGirl ? `
            <circle cx="70" cy="55" r="16" fill="#5c3826"/><circle cx="130" cy="55" r="16" fill="#5c3826"/>
          ` : `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="#4a3525"/>
          `}
          <circle cx="100" cy="62" r="26" fill="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}"/>
          <circle cx="91" cy="60" r="3.5" fill="#2b2d42"/><circle cx="109" cy="60" r="3.5" fill="#2b2d42"/>
          <path d="M93 70 Q100 78 107 70" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="88" y1="137" x2="88" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <line x1="112" y1="137" x2="112" y2="165" stroke="#333" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="88" cy="168" rx="7" ry="4" fill="#991b1b"/><ellipse cx="112" cy="168" rx="7" ry="4" fill="#991b1b"/>
        </g>
      `);
    }

    // 7. OTURDU (Ahşap sandalye)
    if (actionKey.startsWith('oturd')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3"/>
        <line x1="65" y1="80" x2="65" y2="170" stroke="#854d0e" stroke-width="6" stroke-linecap="round"/>
        <line x1="115" y1="135" x2="115" y2="170" stroke="#854d0e" stroke-width="6" stroke-linecap="round"/>
        <rect x="60" y="130" width="60" height="10" rx="3" fill="#a16207"/>
        <g transform="translate(0, 15)">
          <rect x="74" y="90" width="50" height="42" rx="6" fill="${isGirl ? '#ffb703' : (isBoy ? '#3a86ff' : '#38b000')}"/>
          <path d="M85 132 L115 132 L115 165" fill="none" stroke="#333" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="118" cy="167" rx="7" ry="4" fill="#e63946"/>
          ${isGirl ? `
            <circle cx="70" cy="55" r="15" fill="#5c3826"/><circle cx="130" cy="55" r="15" fill="#5c3826"/>
          ` : `
            <path d="M72 55 C72 30 128 30 128 55 Z" fill="#4a3525"/>
          `}
          <circle cx="100" cy="62" r="26" fill="${isGirl ? '#ffd9b3' : (isBoy ? '#fed0ab' : '#fcd3ad')}"/>
          <circle cx="92" cy="60" r="3.5" fill="#2b2d42"/><circle cx="108" cy="60" r="3.5" fill="#2b2d42"/>
          <path d="M94 70 Q100 77 106 70" fill="none" stroke="#2b2d42" stroke-width="2.5" stroke-linecap="round"/>
        </g>
      `);
    }

    // 8. YÜRÜDÜ (Patika yol)
    if (actionKey.startsWith('yürüd') || actionKey.startsWith('yurud')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="3"/>
        <line x1="20" y1="175" x2="180" y2="175" stroke="#a7f3d0" stroke-width="6" stroke-linecap="round"/>
        ${renderActor(0, 8, 0.95, `
          <line x1="75" y1="100" x2="60" y2="125" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
          <line x1="125" y1="100" x2="140" y2="120" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
        `)}
        <path d="M50 160 Q40 160 35 155" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      `);
    }

    // 9. ZIPLADI (Havaya zıplama)
    if (actionKey.startsWith('zıplad') || actionKey.startsWith('ziplad')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fef3c7" stroke="#fde68a" stroke-width="3"/>
        <ellipse cx="100" cy="180" rx="35" ry="6" fill="#e2e8f0"/>
        <g transform="translate(0, -15)">
          ${renderActor(0, 10, 0.95, `
            <path d="M75 100 L55 70" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="9" stroke-linecap="round"/>
            <path d="M125 100 L145 70" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="9" stroke-linecap="round"/>
          `)}
        </g>
        <polygon points="50,45 53,52 60,52 55,57 57,64 50,60 43,64 45,57 40,52 47,52" fill="#fbbf24"/>
        <polygon points="150,45 153,52 160,52 155,57 157,64 150,60 143,64 145,57 140,52 147,52" fill="#fbbf24"/>
      `);
    }

    // 10. KİTAP OKUDU (TAM OLARAK AYNI MAVİ KAPAKLI AÇIK KİTAP)
    if (actionKey.startsWith('okud')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#eef2ff" stroke="#c7d2fe" stroke-width="3"/>
        ${renderActor(0, 10, 0.95, `
          <!-- Ellerde Açık Kitap -->
          <path d="M75 110 Q90 120 100 125 Q110 120 125 110" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
          <!-- Kitap -->
          <g transform="translate(68, 115) scale(0.65)">
            <path d="M10 20 Q50 15 50 25 Q50 15 90 20 L86 65 Q50 60 50 70 Q50 60 14 65 Z" fill="#ffffff" stroke="#4f46e5" stroke-width="3"/>
            <rect x="20" y="30" width="22" height="15" fill="#fde047"/>
          </g>
        `)}
      `);
    }

    // 11. ELMA YEDİ (TAM OLARAK AYNI KIRMIZI YEŞİL YAPRAKLI ELMA)
    if (actionKey.startsWith('elma_yed') || (actionKey.includes('yed') && actionKey.includes('elma'))) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fef2f2" stroke="#fecaca" stroke-width="3"/>
        ${renderActor(0, 10, 0.95, `
          <!-- El ağza doğru elmayı tutuyor -->
          <path d="M120 105 Q130 85 115 75" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="9" stroke-linecap="round"/>
          <!-- Kırmızı Elma -->
          <circle cx="118" cy="72" r="10" fill="#dc2626"/>
          <path d="M118 63 Q122 58 126 58" stroke="#78350f" stroke-width="2" fill="none"/>
          <circle cx="123" cy="60" r="2.5" fill="#16a34a"/>
        `)}
      `);
    }

    // 12. SÜT İÇTİ (TAM OLARAK AYNI PİPETLİ BARDAK)
    if (actionKey.startsWith('süt_içt') || (actionKey.includes('içt') && actionKey.includes('sut'))) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="3"/>
        ${renderActor(0, 10, 0.95, `
          <path d="M120 100 Q126 80 110 70" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="9" stroke-linecap="round"/>
          <!-- Pipetli Bardak -->
          <path d="M106 62 L108 76 L118 76 L120 62 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
          <path d="M113 70 L115 52 L122 48" stroke="#f43f5e" stroke-width="2.5" fill="none"/>
        `)}
      `);
    }

    // 13. DİŞ FIRÇALADI (TAM OLARAK AYNI FIRÇA)
    if (actionKey.startsWith('fırçalad') || actionKey.startsWith('fircalad')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#ecfeff" stroke="#a5f3fc" stroke-width="3"/>
        ${renderActor(0, 10, 0.95, `
          <path d="M120 100 Q126 78 110 72" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="9" stroke-linecap="round"/>
          <line x1="105" y1="72" x2="125" y2="72" stroke="#06b6d4" stroke-width="5" stroke-linecap="round"/>
          <!-- Dişinde Köpük -->
          <circle cx="102" cy="71" r="3" fill="#ffffff"/>
          <circle cx="98" cy="72" r="2.5" fill="#ffffff"/>
        `)}
      `);
    }

    // 14. EL YIKADI (TAM OLARAK AYNI SABUN VE KÖPÜKLER)
    if (actionKey.startsWith('yıkad') || actionKey.startsWith('yikad')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="3"/>
        <!-- Lavabo Çeşmesi -->
        <path d="M100 120 L100 105 Q100 95 110 95" stroke="#94a3b8" stroke-width="5" fill="none"/>
        <!-- Su Akışı -->
        <line x1="110" y1="95" x2="110" y2="125" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
        ${renderActor(0, 10, 0.95, `
          <!-- İki El Önde Köpüklü -->
          <path d="M78 105 Q90 122 105 125" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
          <path d="M122 105 Q115 122 105 125" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
          <!-- Köpükler -->
          <circle cx="102" cy="123" r="5" fill="#ffffff" stroke="#f472b6" stroke-width="1.5"/>
          <circle cx="109" cy="121" r="4" fill="#ffffff" stroke="#f472b6" stroke-width="1.5"/>
        `)}
      `);
    }

    // 15. KOŞTU (2 Öğeli)
    if (actionKey.startsWith('koşt') || actionKey.startsWith('kost')) {
      return this.wrapSvg(`
        <circle cx="100" cy="100" r="96" fill="#fef3c7" stroke="#fde68a" stroke-width="3"/>
        <!-- Yol ve Hız Çizgileri -->
        <line x1="20" y1="175" x2="180" y2="175" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
        <line x1="30" y1="120" x2="55" y2="120" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <line x1="35" y1="130" x2="65" y2="130" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
        <g transform="translate(10, 5) rotate(10 100 100)">
          ${renderActor(0, 0, 0.95, `
            <line x1="75" y1="100" x2="50" y2="115" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
            <line x1="125" y1="100" x2="148" y2="85" stroke="${isGirl ? '#ffd9b3' : '#fed0ab'}" stroke-width="8" stroke-linecap="round"/>
          `)}
        </g>
      `);
    }

    // Varsayılan
    return this.wrapSvg(`
      <circle cx="100" cy="100" r="96" fill="#f8fafc"/>
      ${renderActor(0, 10, 0.95)}
    `);
  }
};
