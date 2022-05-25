let h1 = document.querySelector("h1")
let body = document.querySelector("body")
let item = document.querySelectorAll(".item")
let h2 = document.querySelectorAll("h2")
let p = document.querySelectorAll("p")

function darkMode() {
    h1.classList.toggle("h1Dark")
    body.classList.toggle("bodyDark")
    itemDarkMode()
    h2DarkMode()
    pDarkMode()

}

function h2DarkMode() {
    for (let titulo of h2) {
        titulo.classList.toggle("h2Dark")
    }
}

function pDarkMode() {
    for (let titulo of p) {
        titulo.classList.toggle("pDark")
    }
}

function itemDarkMode(){
    for (let titulo of item){
        titulo.classList.toggle("itemDark")
    }
}