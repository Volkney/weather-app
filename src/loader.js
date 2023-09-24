// loader.js
export async function fadeOutLoaders() {
    var loaders = document.querySelectorAll(".loader");
    for (var i = 0; i < loaders.length; i++) {
        fadeOut(loaders[i]);
    }
}

function fadeOut(el) {
    var opacity = 1;
    var timer = setInterval(function() {
        if (opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = "none";
        }
        el.style.opacity = opacity;
        el.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
        opacity -= opacity * 0.1;
    }, 50);
}
