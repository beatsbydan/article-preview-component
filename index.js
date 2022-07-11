var shareMobile = document.querySelector(".open-share")
var shareBtn = document.getElementById("btn")
var sharedBtn = document.getElementById("btN")
var complete = document.getElementById("reshare")
var her = document.querySelector(".her")
var tri =document.querySelector(".triangle")
var re =document.querySelector(".final")
var sh =document.querySelector(".share")

shareBtn.addEventListener("click", () => {
    shareMobile.classList.add("clicked")
    her.classList.add("upon")
    tri.classList.add("try")
    sh.classList.add("long")
    re.classList.add("unlocked")
})

sharedBtn.addEventListener("click", () => {
    shareMobile.classList.remove("clicked")
    her.classList.remove("upon")
    tri.classList.remove("try")
    re.classList.remove("unlocked")
    sh.classList.remove("long")
})

complete.addEventListener("click", () => {
    tri.classList.remove("try")
    re.classList.remove("unlocked")
    shareMobile.classList.remove("clicked")
    her.classList.remove("upon")
    sh.classList.remove("long")
})
