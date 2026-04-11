const API_URL = "http://localhost:5000";
async function login(username, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert(data.message || "Invalid credentials");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong. Try again later.");
    }
}