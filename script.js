var radioButtons = document.querySelectorAll("input")
console.log("hellooooo")
const choices = {
    "1": "normal",
    "2": "protanopia",
    "3": "tritanopia",
    "4": "deuteranomaly",
    "5": "achromatopsia"
}
let select = chrome.storage.local.get("choice", (select)=>{
    console.log(JSON.stringify(select))
    console.log(radioButtons)
    if(choices[select['choice']]){
        let selectedChoice = document.querySelector(`input[type="radio"][value="${select['choice']}"]`);
        selectedChoice.checked = true
    }
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("click", () => {
            if (radioButton.checked) {
                chrome.storage.local.set({choice:radioButton.value})
            }
        })
    })
})