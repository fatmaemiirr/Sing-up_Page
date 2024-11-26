function showForm() {
    document.getElementById('initial-card').classList.remove('active');
    document.getElementById('form-card').classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendiğinde ilk formu göster
    document.getElementById('initial-card').classList.add('active');

    // Form gönderim işlemini yönet
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini durdurun
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Form verilerini burada işleyebilirsiniz
        alert(`Kayıt başarılı!\nAd: ${name}\nE-posta: ${email}`);
    });
});
