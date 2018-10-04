function menuButtonClicked() {
    var menuList = document.querySelector(".menuList");
        menuList.classList.toggle("fullscreen");
    var header = document.querySelector("header");
    header.classList.toggle("fullscreen");
}