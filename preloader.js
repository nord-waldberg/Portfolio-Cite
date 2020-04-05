function fadeOutElem(elem, delay, fadeTime) {
    elem.addEventListener("transitionend", () => {
        elem.style.display = "none";
    });
    setTimeout( () => {
        elem.style.transition = `opacity ${fadeTime}ms`;
        elem.style.opacity = 0;
    }, delay);
}

function fadeOutLoader() {
    let loader =  document.getElementById('page-preloader');
    fadeOutElem(loader, 600, 200);
}

window.onload = fadeOutLoader;
