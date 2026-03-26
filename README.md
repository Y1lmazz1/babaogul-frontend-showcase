# 🛠️ Baba Oğul Oto Kaporta - Profesyonel Yönetim Paneli

Bu proje, Malatya'da faaliyet gösteren "Baba Oğul Oto Kaporta" dükkanı için özel olarak geliştirilmiş, Firebase tabanlı, dinamik bir araç satış ve galeri yönetim sistemidir. Hem dükkan sahibinin araç envanterini kolayca yönetmesini sağlar, hem de müşterilere jilet gibi bir vitrin sunar.

### ✨ Öne Çıkan Özellikler

* **🔒 Güvenli Giriş:** Firebase Auth entegrasyonu ile sadece yetkili personelin panele erişimi sağlanır.
* **🚗 Dinamik Envanter:** Saniyeler içinde araç ekleme, silme ve detaylarını (fiyat, model vb.) güncelleme imkanı.
* **🖼️ Öncesi/Sonrası Galerisi:** Yapılan kaporta işlemlerinin kalitesini gösteren dinamik fotoğraf yükleme (ImgBB API).
* **📱 Mobil Uyumlu (Responsive):** İster bilgisayardan, ister cep telefonundan dükkanı yönetin.
* **⚡ Firebase Realtime:** Veriler anında güncellenir, müşteri siteye girince en güncel araçları görür.

---

### 🖥️ Proje Ekran Görüntüleri

#### 1. Müşteri Vitrini (Ana Sayfa)
*Müşterilerin dükkanı ve sunulan hizmetleri gördüğü ilk ekran. Şık ve güven veren bir tasarım.*

<img width="1892" height="906" alt="Baba Ogul Müşteri Vitrini" src="https://github.com/user-attachments/assets/5cf1487d-1ed4-4628-ba41-0f0190a56251" />

---

#### 2. Dinamik Araç Galerisi
*Firebase'den anlık çekilen araçların sergilendiği bölüm.*

<img width="1907" height="908" alt="Araç Galerisi" src="https://github.com/user-attachments/assets/1ff7de6a-ac8e-4b39-953f-1c1ed5cbbabb" />

---

#### 3. Öncesi & Sonrası Galerisi
*Ustalığın konuşturulduğu, yapılan işlerin kalitesini kanıtlayan dinamik bölüm.*

<img width="1902" height="715" alt="Öncesi Sonrası Galerisi" src="https://github.com/user-attachments/assets/29e2c99a-802b-4174-bf3b-3cfa07e19d43" />

---

#### 4. Yönetim Paneli Giriş Ekranı (Firebase Auth)
*Dükkanın dijital anahtarı. Sadece yetkili kullanıcılar giriş yapabilir.*

<img width="900" height="860" alt="Yönetim Paneli Giriş" src="https://github.com/user-attachments/assets/bb658e93-3ad0-4458-b640-51f70cf6e72b" />

---

#### 5. Ana Yönetim Paneli (Dashboard)
*Dükkan sahibinin tüm araçları bir bakışta gördüğü ve yönettiği merkez.*

<img width="1513" height="661" alt="Yönetim Dashboard" src="https://github.com/user-attachments/assets/2228dbbe-b722-4ad0-9647-98d7a21e8d34" />

---

#### 6. Yeni Araç Ekleme Modalı
*Detaylı araç bilgilerini (Fiyat, Model, Km vb.) girmek için kullanılan form.*

<img width="1041" height="892" alt="Araç Ekleme Formu" src="https://github.com/user-attachments/assets/849cc172-eb05-4d54-9dac-2008ed308553" />

---

#### 7. Fotoğraf Yükleme ve Yönetimi (ImgBB & Firebase Storage)
*Araç fotoğraflarını API üzerinden yükleyip veritabanına işleyen bölüm.*

<img width="1580" height="882" alt="Fotoğraf Yönetimi" src="https://github.com/user-attachments/assets/25ab1162-ac46-4ec1-b5b1-d6beb621b9e6" />

---

#### 8. Mobil Uyumlu Tasarım Kontrolü
*Yönetim panelinin cep telefonlarında da kusursuz çalıştığını gösteren görünüm.*

<img width="1406" height="912" alt="Mobil Uyumlu Panel" src="https://github.com/user-attachments/assets/fa8caffb-b578-4e50-adf8-4bf897b453c0" />

---

### 🛑 Güvenlik Notu

Bu depo, projenin **Frontend (Arayüz)** kodlarını içeren bir vitrindir. Güvenlik nedeniyle gerçek Firebase API anahtarları, şifreler ve özel yapılandırma dosyaları kaldırılmıştır.

Projenin tam halini kendi Firebase projenizle çalıştırmak için:
1.  Firebase Console'dan yeni bir proje oluşturun.
2.  Auth, Firestore ve Storage servislerini aktif edin.
3.  `firebase-config.js` dosyasındaki şablon değerlerini kendi API anahtarlarınızla değiştirin.

### 📜 Lisans

Bu proje, "Baba Oğul Oto Kaporta" için özel olarak geliştirilmiştir. Kodların kopyalanması veya ticari amaçla kullanılması izne tabidir.

*(© 2024 Baba Oğul Oto Kaporta - Malatya)*





