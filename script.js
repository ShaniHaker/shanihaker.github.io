
document.getElementById("year").textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(link.getAttribute("href"))
            ?.scrollIntoView({ behavior: "smooth" });
    });
});
