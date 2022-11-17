const $contactForm = document.querySelector(".contact-form")
const $popupXButton = document.querySelector(".x-item")
const $popupWindow = document.querySelector(".popup-send")
const $popupText = document.querySelector(".mss-item-p")
const $popupIconSend = document.querySelector(".mss-item-i")

$contactForm.addEventListener("submit", e => {
    e.preventDefault()
    $popupWindow.style.display = "block"
    fetch("https://formsubmit.co/ajax/yelajorge6@gmail.com", {
        method: "POST",
        body: new FormData(e.target)
    }).then(res => {
        res.ok ? res.json() : Promise.reject(res)
    }).then(json => {
        $popupText.textContent = "Gracias, mensaje enviado correctamente"
        $popupIconSend.classList.replace("bi-send", "bi-send-check")
        $contactForm.reset()
    }).catch(err => {
        $popupText.textContent = "Algo ocurrio, intentalo nuevamente"
        $popupIconSend.classList.replace("bi-send", "bi-send-x")
        $contactForm.reset()
    })
})

$popupXButton.addEventListener("click", e => {
    $popupWindow.style.display = "none"
})