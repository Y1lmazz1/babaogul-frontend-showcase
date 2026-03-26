// Sayfa yüklenmeden önce kontrol et
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // Oturum kapalıysa login sayfasına şutla
        window.location.href = "admin-login.html";
    } else {
        // Giriş varsa sayfayı göster (HTML'de body style="display:none" yapmıştık ya, onu açar)
        document.body.style.display = "block";
    }
});

// ARAÇ EKLEME FONKSİYONU
async function addVehicle() {
    const name = document.getElementById('vName').value;
    const price = document.getElementById('vPrice').value;
    const file = document.getElementById('vImage').files[0];
    const status = "Satılık"; // Varsayılan durum

    if(!name || !price || !file) return alert("Lütfen tüm alanları doldurun!");

    // 1. Resmi Storage'a yükle
    const storageRef = storage.ref('vehicles/' + file.name);
    await storageRef.put(file);
    const imageUrl = await storageRef.getDownloadURL();

    // 2. Verileri Firestore'a kaydet
    db.collection("vehicles").add({
        name: name,
        price: price,
        image: imageUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert("Araç başarıyla eklendi!");
        location.reload();
    });
}

const logoutButton = document.getElementById('logoutBtn');

if (logoutButton) {
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle
        
        firebase.auth().signOut().then(() => {
            console.log("Oturum başarıyla kapatıldı.");
            // Çıkış yapınca direkt login sayfasına gönder
            window.location.href = "admin-login.html";
        }).catch((error) => {
            console.error("Çıkış hatası:", error);
            alert("Çıkış yapılamadı: " + error.message);
        });
    });
}