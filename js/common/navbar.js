function initNavbar() {
    const city = "Vijayawada";
    const pincode = "520007";
    const userName = "Koushik";
    const addressEl = document.getElementById("address");
    const loginEl = document.getElementById("login");
    const addressBtn = document.getElementById("addressBtn");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close");
    if (addressEl) {
        addressEl.innerText = city && pincode
            ? `${city} ${pincode}`
            : "Select Address";
    }
    if (loginEl) {
        loginEl.innerText = userName || "Login";
    }
    if (addressBtn && popup && overlay) {
        addressBtn.addEventListener("click", () => {
            popup.hidden = false;
            overlay.hidden = false;
        });
    }
    if (closeBtn && popup && overlay) {
        closeBtn.addEventListener("click", closeModal);
        overlay.addEventListener("click", closeModal);
    }
    function closeModal() {
        popup.hidden = true;
        overlay.hidden = true;
    }
}
document.addEventListener("DOMContentLoaded", initNavbar);
