let secilenCevaplar = [];

function isaretle(element) {
    const testSecenek = element.closest('.test-secenek');
    const secenekler = testSecenek.querySelectorAll('.ozel-buton');
    const secenek = element.getAttribute('data-secenek');

    secenekler.forEach(btn => {
        if (btn !== element) {
            btn.classList.remove('secildi');
        }
    });

    element.classList.toggle('secildi');

    const soruIndex = Array.from(document.querySelectorAll('.test-secenek')).indexOf(testSecenek);

    if (element.classList.contains('secildi')) {
        secilenCevaplar[soruIndex] = secenek;
    } else {
        secilenCevaplar[soruIndex] = null;
    }

    console.log(secilenCevaplar);
}

function hesaplaSonuc() {
    // Tüm soruların işaretlenip işaretlenmediğini kontrol et
    const isaretlenenSoruSayisi = secilenCevaplar.filter(cevap => cevap !== null).length;

    if (isaretlenenSoruSayisi < 10) {
        alert("Lütfen tüm soruları cevaplayınız.");
    } else {
        const sonucAlanı = document.getElementById('sonuc-alanı');
        const yonlendirme = alanYönlendirme(secilenCevaplar);
        sonucAlanı.innerText = yonlendirme;
    }
}

function alanYönlendirme(cevaplar) {
    const puanlar = {
        'A': 0,
        'B': 0,
        'C': 0,
        'D': 0,
        'E': 0
    };

    for (const cevap of cevaplar) {
        if (cevap) {
            puanlar[cevap] += 1;
        }
    }

    const enYuksekPuan = Math.max(...Object.values(puanlar));
    const ilgiliAlanlar = Object.keys(puanlar).filter(alan => puanlar[alan] === enYuksekPuan);

    let sonuc = "";

    if (ilgiliAlanlar.includes('A')) {
        sonuc += "Sistem Programlama, Algoritma Geliştirme, Veri Yapıları, Gömülü Sistemler gibi alanlara ilgi duyabilirsin.\n";
    }
    if (ilgiliAlanlar.includes('B')) {
        sonuc += "Oyun Geliştirme, Grafik Tasarım, Web Geliştirme (Frontend), Animasyon, Dijital Sanat gibi alanlara ilgi duyabilirsin.\n";
    }
    if (ilgiliAlanlar.includes('C')) {
        sonuc += "Veritabanı Yönetimi, Büyük Veri Analizi, Yapay Zeka, Makine Öğrenmesi, Veri Bilimi gibi alanlara ilgi duyabilirsin.\n";
    }
    if (ilgiliAlanlar.includes('D')) {
        sonuc += "Kullanıcı Deneyimi (UX), Kullanıcı Arayüzü (UI) Tasarımı, Mobil Uygulama Geliştirme, Etkileşim Tasarımı gibi alanlara ilgi duyabilirsin.\n";
    }
    if (ilgiliAlanlar.includes('E')) {
        sonuc += "Ağ Yönetimi, Siber Güvenlik, Bulut Bilişim, DevOps, Sistem Yöneticiliği gibi alanlara ilgi duyabilirsin.\n";
    }

    return sonuc || "Çeşitli alanlara ilgi duyuyor olabilirsin. Daha fazla bilgi için diğer konuları incele.";
}
