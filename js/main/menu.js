function menu(){
    var menu = document.getElementById("menu");
    var main = document.getElementById("content");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        main.style.width = "100%";
    } else {
        menu.style.display = "flex";
        main.style.width = "85%";
    }
}