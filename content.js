new p5();

const allElements = document.querySelectorAll("*")

allElements.forEach((element) => {
  const style = getComputedStyle(element);
  const elementColor = color(style.color);
  
  const h = hue(elementColor);
  const s = saturation(elementColor);
  const l = lightness(elementColor);

  function absColor(currVal, addedVal) {
  if (currVal + addedVal > 255) {
    return (currVal + addedVal - 255)
  } else if 
    (currVal + addedVal < 0) {
      return (currVal + addedVal + 255)
    }
    else {
      return (currVal + addedVal)
    }
  }

  
  const newHSLColor = `hsl(${constrain(absColor(h, -170), 21, 94)}, ${constrain(absColor(s, -50), 92, 189)}%, ${constrain(l, 85, 215)}%)`;
  element.style.color = newHSLColor;
});