document.addEventListener("DOMContentLoaded", function() {
    var theme = document.getElementById("theme");

    if(theme) {
        theme.onclick = function() {
            document.body.classList.toggle("light-theme");
            if (document.body.classList.contains("light-theme")) {
                theme.querySelector("img").src = 'images/moon.png';
                localStorage.setItem("theme", "light-theme");
            } else {
                theme.querySelector("img").src = 'images/sun.png';
                localStorage.removeItem("theme");
            }
        };
    }
});

function onload() {
    document.body.classList.toggle('light-theme', localStorage.getItem('theme') === "light-theme");
}