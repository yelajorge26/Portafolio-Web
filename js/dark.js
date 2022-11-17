const $body = document.body
const $buttonDark = document.querySelector(".button-type-screen")
const $buttonType = document.querySelector(".icon-dark")
const $menuIcon = document.querySelector(".icon-menu")

loadScreenSelected()

$buttonDark.addEventListener("click", e => {
    if($body.classList.contains("dark-screen")){
        $buttonType.classList.replace("bi-brightness-high", "bi-moon-fill")
        $buttonType.style.color = "black"
        $menuIcon.style.color = "black"
    }else{
        $buttonType.classList.replace("bi-moon-fill", "bi-brightness-high")
        $buttonType.style.color = "white"
        $menuIcon.style.color = "white"
    }
    $body.classList.toggle("dark-screen")
    saveScreenSelected($body.classList.contains("dark-screen"))
})

function saveScreenSelected(exists) {
    localStorage.setItem("dark-screen", exists)
}

function loadScreenSelected() {
    const darkScreen = localStorage.getItem("dark-screen")

    if(!darkScreen){
        saveScreenSelected("false")
    }else if(darkScreen == "true"){
        $body.classList.add("dark-screen")
        $buttonType.classList.replace("bi-moon-fill", "bi-brightness-high")
        $buttonType.style.color = "white"
        $menuIcon.style.color = "white"
    }
}