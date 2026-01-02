function initNavbar() {
    const city = "Vijayawada";
    const pincode = "520007";
    const userName = "Koushik";

    const addressEl = document.getElementById("address");
    const loginEl = document.getElementById("login");
    const addressBtn = document.getElementById("addressBtn");

    if (addressEl) {
        addressEl.innerText = city && pincode
            ? `${city} ${pincode}`
            : "Select Address";
    }

    if (loginEl) {
        loginEl.innerText = userName || "Login";
    }

    if (addressBtn) {
        addressBtn.addEventListener("click", () => {
            alert("Open address selection modal here");
        });
    }
}
