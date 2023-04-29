new p5();

console.log(window)

const allElements = document.querySelectorAll("*")

allElements.forEach((element) => {
  let c = color(element.style.color)
  console.log(element.style.color)
  element.style.color = c.toString('hsb')
});