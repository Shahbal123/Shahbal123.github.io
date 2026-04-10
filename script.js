function showThankYou()
{document.getElementById("message").textContent = "Thanks for clicking the button!🎉";
document.querySelector("button").disabled = true;
}

function toggleDarkMode() {
document.body.classList.toggle("dark-mode");}