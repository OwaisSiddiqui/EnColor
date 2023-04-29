new p5();

const allElements = document.querySelectorAll("*")

allElements.forEach((element) => {
  const style = getComputedStyle(element);
  const elementColor = color(style.color);
  
  const h = hue(elementColor);
  const s = saturation(elementColor);
  const l = lightness(elementColor);

  const newHSLColor = `hsl(${h}, ${constrain(s + 300, 0, 100)}%, ${l}%)`;

  element.style.color = newHSLColor;
});