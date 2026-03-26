db.collection("satiliklar").orderBy("tarih", "desc").onSnapshot((snapshot) => {
    const grid = document.getElementById('car-list');
    if (!grid) return;
    
    grid.innerHTML = ""; 

    if (snapshot.empty) {
        grid.innerHTML = '<p style="text-align:center; color:#aaa; grid-column: 1/-1;">Şu an yayında araç bulunmamaktadır.</p>';
        return;
    }

    snapshot.forEach(doc => {
        const v = doc.data();
        
      
        let resimler = v.resimler || (v.resim ? [v.resim] : []);
        const kapakResmi = resimler[0] || 'https://via.placeholder.com/400x250?text=Resim+Yok';
        
  
        const rawStatus = v.durum ? String(v.durum).trim().toLowerCase() : "";
        const isSold = rawStatus === 'satildi' || rawStatus === 'satıldı'; 
        
  
        const soldBadge = isSold ? `
            <div style="position:absolute; top:20px; left:20px; background:#e74c3c; color:white; padding:10px 20px; font-weight:bold; border-radius:5px; z-index:50; box-shadow: 0 4px 15px rgba(0,0,0,0.5); font-family: sans-serif; letter-spacing: 1px;">
                <i class="fas fa-check-circle"></i> SATILDI
            </div>` : "";
        
   
        const soldStyle = isSold ? "opacity: 0.5; filter: grayscale(1); pointer-events: none; cursor: default;" : "";


        const formatPrice = (val) => val ? Number(val).toLocaleString('tr-TR') : "0";

        let fiyatHtml = `<div style="color:#ff6a00; font-size:1.5rem; font-weight:bold; margin:10px 0;">${formatPrice(v.fiyat)} TL</div>`;
        if (v.eskiFiyat && Number(v.eskiFiyat) > Number(v.fiyat) && !isSold) {
            fiyatHtml = `
                <div style="margin:10px 0;">
                    <span style="text-decoration:line-through; color:#888; font-size:0.95rem; margin-right:10px;">${formatPrice(v.eskiFiyat)} TL</span>
                    <span style="color:#ff6a00; font-size:1.5rem; font-weight:bold;">${formatPrice(v.fiyat)} TL</span>
                </div>`;
        }


        const waMessage = encodeURIComponent(`Merhaba, ${v.ad} (${v.yil}) aracınız hakkında bilgi alabilir miyim?`);
        const actionBtn = isSold 
            ? `<div style="background:#2c3e50; color:#bdc3c7; text-align:center; padding:13px; border-radius:8px; margin-top:15px; font-weight:bold; border:1px solid #34495e; text-transform:uppercase;">BU ARAÇ SATILMIŞTIR</div>`
            : `<a href="https://wa.me/000000000?text=${waMessage}" target="_blank" style="display:block; background:#25d366; color:white; text-align:center; padding:13px; border-radius:8px; margin-top:15px; text-decoration:none; font-weight:bold; transition: 0.3s; box-shadow: 0 4px 10px rgba(37,211,102,0.2);">
                <i class="fab fa-whatsapp"></i> WhatsApp'tan Bilgi Al
              </a>`;

     
        grid.innerHTML += `
            <div class="vehicle-card" style="position:relative; background:#121212; border-radius:15px; overflow:hidden; border:1px solid #222; transition: transform 0.3s; ${soldStyle}">
                ${soldBadge}
                <div class="img-container" onclick='if(!${isSold}) openGallery(${JSON.stringify(resimler)})' style="cursor:pointer; position:relative; height:230px; overflow:hidden;">
                    <img src="${kapakResmi}" alt="${v.ad}" style="width:100%; height:100%; object-fit:cover;">
                    ${!isSold ? `<div style="position:absolute; bottom:10px; right:10px; background:rgba(0,0,0,0.7); color:white; padding:4px 10px; border-radius:20px; font-size:0.75rem;"><i class="fas fa-camera"></i> ${resimler.length}</div>` : ''}
                </div>
                <div class="details" style="padding:22px;">
                    <h3 style="color:white; margin:0; font-size:1.3rem; font-family:'Oswald', sans-serif; letter-spacing:0.5px;">${v.ad}</h3>
                    ${fiyatHtml}
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; color:#999; font-size:0.85rem; margin-top:15px; border-top:1px solid #222; padding-top:15px;">
                        <span><i class="fas fa-calendar-alt" style="color:#ff6a00; width:15px;"></i> ${v.yil || '-'}</span>
                        <span><i class="fas fa-road" style="color:#ff6a00; width:15px;"></i> ${v.km || '-'} KM</span>
                        <span><i class="fas fa-cog" style="color:#ff6a00; width:15px;"></i> ${v.sanziman || '-'}</span>
                        <span><i class="fas fa-gas-pump" style="color:#ff6a00; width:15px;"></i> ${v.motor || '-'}</span>
                    </div>
                    ${actionBtn}
                </div>
            </div>`;
    });
}, (error) => {
    console.error("Firestore Hatası:", error);
});