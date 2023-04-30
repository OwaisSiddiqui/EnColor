var radioButtons = document.querySelectorAll('input[type="radio"][name="your_name_attribute"]');

const choices = {
    "1": "normal",
    "2": "protanopia",
    "3": "tritanopia",
    "4": "deuteranomaly",
    "5": "achromatopsia"
}

localStorage.setItem("choice", "normal")

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
        if (radioButton.checked) {
            localStorage.setItem("choice", choices[radioButton.value])
        }
    })
})