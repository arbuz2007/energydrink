document.addEventListener("DOMContentLoaded", function() {
    // Функция для отображения текущей даты и времени на главной странице
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    dateElement.textContent = now.toLocaleString();

    // Код для аккордеона
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});