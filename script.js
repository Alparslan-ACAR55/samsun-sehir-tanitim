function formKontrol() {
    if (
        ad.value === "" ||
        email.value === "" ||
        konu.value === "" ||
        mesaj.value === "" ||
        !kvkk.checked
    ) {
        alert("Lütfen tüm alanları doldurun!");
        return false;
    } else {
        alert("Form başarıyla gönderildi.");
        return true;
    }
}

window.onload = function () {
    let alan = document.getElementById("tarihSaat");
    if (alan) {
        alan.innerHTML = "Bugünün tarihi ve saati: " + new Date().toLocaleString();
    }
};
document.querySelectorAll(".img-click").forEach(img => {
    img.addEventListener("click", function () {
        document.getElementById("modalImage").src = this.dataset.img;
    });
});

let mesaj = document.getElementById("mesaj");
if (mesaj) {
    mesaj.textContent = "";
}
alert("Hoşgeldiniz");