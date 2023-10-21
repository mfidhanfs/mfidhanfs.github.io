document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Menghentikan pengiriman formulir awal

        // Validasi
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const subject = form.querySelector('input[type="text"]:last-child').value;
        const message = form.querySelector('textarea').value;

        if (!name || !email || !subject || !message) {
            alert("Harap isi semua kolom.");
            return;
        }

        if (!validateName(name)) {
            alert("Nama harus berisi huruf dan tidak boleh mengandung angka atau karakter khusus.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Alamat email tidak valid.");
            return;
        }

        // Jika semua validasi berhasil, Anda dapat melakukan pengiriman formulir ke server di sini
        alert("Formulir telah berhasil dikirim!");
        form.reset(); // Menghapus isi formulir setelah pengiriman berhasil
    });

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateName(name) {
        const regex = /^[a-zA-Z\s]+$/; // Hanya huruf dan spasi diizinkan
        return regex.test(name);
    }
});
