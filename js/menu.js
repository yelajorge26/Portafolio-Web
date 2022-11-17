const $menu = document.querySelector(".nav-container")
const $aboutLink = document.querySelectorAll(".nav-link")
const $check = document.getElementById("menu-list-button")
const $upButton = document.querySelector(".btn-up")

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop || document.body.scrollTop

    if(scroll > 50){
        $menu.classList.add("nav-shadow-container")
    } else {
        $menu.classList.remove("nav-shadow-container")
    }
}

$aboutLink.forEach(link => {
    link.addEventListener("click", e => {
        $check.checked = false
        window.removeEventListener("scroll", disabledScroll)
    })
})

function disabledScroll() {
    window.scrollTo(0, 0)
}

$check.addEventListener("click", e => {
    if($check.checked){
        window.addEventListener("scroll", disabledScroll)
        window.scrollTo(0, 0)
    }else{
        window.removeEventListener("scroll", disabledScroll)
    }
})

$upButton.addEventListener("click", e => {
    let time = 10
    let scrollStep = -window.scrollY / (300 / time)
    let scrollInterval = setInterval(function(){
        if(window.scrollY != 0){
            window.scrollBy(0, scrollStep)
        }else{
            clearInterval(scrollInterval)
        }
    }, time)
})