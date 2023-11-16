function initialize(){
    const closeMenuIcon = document.getElementById("close-icon");
    closeMenuIcon.addEventListener("click", closeSideMenu)
    
}

function closeSideMenu(){
    const sideMenu = document.getElementById("side-menu")
    sideMenu.classList.remove("side-menu-open")
    sideMenu.classList.add("side-menu-close")

}

initialize();