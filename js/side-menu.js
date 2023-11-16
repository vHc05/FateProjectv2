function initialize(){
    const headerMenuIcon = document.getElementById("head-icon");
    headerMenuIcon.addEventListener("click", showSideMenu);
    
}

function showSideMenu(){
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("side-menu-close")
    sideMenu.classList.add("side-menu-open")
}

initialize();

