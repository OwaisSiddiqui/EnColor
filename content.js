new p5();

const allElements = document.querySelectorAll("*")

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

allElements.forEach((element) => {
  colorMode(HSB, 255)
  const style = getComputedStyle(element);
  const elementColor = color(style.color);

  const h = hue(elementColor);
  const s = saturation(elementColor);
  const b = brightness(elementColor);
  
  const newH = constrain(absColor(h, -170), 21, 94);
  const newS = constrain(absColor(s, -50), 92, 189);
  const newB = constrain(b, 85, 215);

  const newColor = color(newH, newS, newB)

  colorMode(HSL, 255)
  
  const newHSLColor = `hsl(${hue(newColor)}, ${saturation(newColor)}%, ${lightness(newColor)}%)`;
  element.style.color = newHSLColor;
});

