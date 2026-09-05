// Dil ve Konuşma Terapisi - Gerçek Hikaye Kitabı Resim Motoru
// SVG yerine doğrudan yüksek çözünürlüklü sanatsal JPG resimleri kullanılır.

const ASSET_V = 'v=' + Date.now();

const Illustrations = {
  // Görsel yükleme etiketi (Tarayıcı önbellek sorununu önlemek için versiyonlu)
  img(src, alt) {
    return `<img src="${src}?${ASSET_V}" alt="${alt}" class="card-img-thumb" loading="lazy" />`;
  },

  // 1. ÖZNELER (Gerçek AI İllüstrasyonları)
  getSubject(personKey) {
    const map = {
      'ben': 'assets/images/ben.jpg',
      'sen': 'assets/images/sen.jpg',
      'o': 'assets/images/o.jpg',
      'biz': 'assets/images/biz.jpg'
    };
    const src = map[personKey] || 'assets/images/ben.jpg';
    return this.img(src, personKey);
  },

  // 2. NESNELER (Gerçek AI İllüstrasyonları)
  getNesne(type) {
    let src = 'assets/images/resim.jpg';
    if (type === 'top' || type === 'topu') src = 'assets/images/top.jpg';
    else if (type === 'yemek') src = 'assets/images/yemek.jpg';
    else if (type === 'elma') src = 'assets/images/elma.jpg';
    else if (type === 'süt' || type === 'sut') src = 'assets/images/sut.jpg';
    else if (type === 'su') src = 'assets/images/su.jpg';
    else if (type === 'okul' || type === 'okula') src = 'assets/images/okul.jpg';
    else if (type === 'resim') src = 'assets/images/resim.jpg';
    else if (type === 'mont') src = 'assets/images/mont.jpg';
    else if (type === 'kitap') src = 'assets/images/kitap.jpg';
    else if (type === 'diş' || type === 'sabun') src = 'assets/images/su.jpg';

    return this.img(src, type);
  },

  // 3. EYLEMLER (Gerçek AI Sahne Resimleri)
  getAction(actionKey, personKey) {
    // 1. Resim Yapmak
    if (actionKey.startsWith('yaptı') || actionKey.startsWith('yapti')) {
      if (personKey === 'ben') return this.img('assets/images/ben_resim_yaptim.jpg', 'Ben resim yaptım');
      if (personKey === 'sen') return this.img('assets/images/sen_resim_yaptin.jpg', 'Sen resim yaptın');
      if (personKey === 'biz') return this.img('assets/images/biz_resim_yaptik.jpg', 'Biz resim yaptık');
      return this.img('assets/images/o_resim_yapti.jpg', 'O resim yaptı');
    }

    // 2. Top Atmak
    if (actionKey.startsWith('attı') || actionKey.startsWith('atti')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'attim', 'sen': 'attin', 'o': 'atti', 'biz': 'attik'}[personKey] || 'attim';
      return this.img(`assets/images/${p}_topu_${v}.jpg`, `${p} topu attı`);
    }

    // 3. Yemek Yemek / Elma Yemek
    if (actionKey.startsWith('elma_yedi')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'yedim', 'sen': 'yedin', 'o': 'yedi', 'biz': 'yedik'}[personKey] || 'yedim';
      return this.img(`assets/images/${p}_elma_${v}.jpg`, `${p} elma yedi`);
    }
    if (actionKey.startsWith('yedi')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'yedim', 'sen': 'yedin', 'o': 'yedi', 'biz': 'yedik'}[personKey] || 'yedim';
      return this.img(`assets/images/${p}_yemek_${v}.jpg`, `${p} yemek yedi`);
    }

    // 4. Su İçmek / Süt İçmek
    if (actionKey.startsWith('içti') || actionKey.startsWith('icti')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'ictim', 'sen': 'ictin', 'o': 'icti', 'biz': 'ictik'}[personKey] || 'ictim';
      return this.img(`assets/images/${p}_su_${v}.jpg`, `${p} su içti`);
    }

    // 5. Okula Gitmek
    if (actionKey.startsWith('gitti')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'gittim', 'sen': 'gittin', 'o': 'gitti', 'biz': 'gittik'}[personKey] || 'gittim';
      return this.img(`assets/images/${p}_okula_${v}.jpg`, `${p} okula gitti`);
    }

    // 6. Mont Giymek
    if (actionKey.startsWith('giyd')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'giydim', 'sen': 'giydin', 'o': 'giydi', 'biz': 'giydik'}[personKey] || 'giydim';
      return this.img(`assets/images/${p}_mont_${v}.jpg`, `${p} mont giydi`);
    }

    // 7. Oturmak
    if (actionKey.startsWith('oturd')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'oturdum', 'sen': 'oturdun', 'o': 'oturdu', 'biz': 'oturduk'}[personKey] || 'oturdum';
      return this.img(`assets/images/${p}_${v}.jpg`, `${p} oturdu`);
    }

    // 8. Yürümek
    if (actionKey.startsWith('yürüd') || actionKey.startsWith('yurud')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'yurudum', 'sen': 'yurudun', 'o': 'yurudu', 'biz': 'yuruduk'}[personKey] || 'yurudum';
      return this.img(`assets/images/${p}_${v}.jpg`, `${p} yürüdü`);
    }

    // 9. Zıplamak
    if (actionKey.startsWith('zıplad') || actionKey.startsWith('ziplad')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'zipladim', 'sen': 'zipladin', 'o': 'zipladi', 'biz': 'zipladik'}[personKey] || 'zipladim';
      return this.img(`assets/images/${p}_${v}.jpg`, `${p} zıpladı`);
    }

    // 10. Kitap Okumak
    if (actionKey.startsWith('okud')) {
      const p = {'ben': 'ben', 'sen': 'sen', 'o': 'o', 'biz': 'biz'}[personKey] || 'ben';
      const v = {'ben': 'okudum', 'sen': 'okudun', 'o': 'okudu', 'biz': 'okuduk'}[personKey] || 'okudum';
      return this.img(`assets/images/${p}_kitap_${v}.jpg`, `${p} kitap okudu`);
    }

    // Varsayılan
    return this.img('assets/images/ben_resim_yaptim.jpg', 'Eylem');
  }
};
