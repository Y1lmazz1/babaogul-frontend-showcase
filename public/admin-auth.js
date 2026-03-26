function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
           
            window.location.href = "admin-panel.html";
        })
        .catch((error) => {
            alert("Hatalı giriş: " + error.message);
        });
}