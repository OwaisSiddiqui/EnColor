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
  colorMode(HSB)
  const style = getComputedStyle(element);
  const elementColor = color(style.color);

  const h = hue(elementColor);
  const s = saturation(elementColor);
  const b = brightness(elementColor);
  
  const newH = absColor(constrain(h, 21, 94),-170);
  const newS = absColor(constrain(s, 92, 189), -50);
  const newB = constrain(b, 85, 215);

  const newColor = color(newH, newS, newB)

  colorMode(HSL)
  
  const newHSLColor = `hsl(${hue(newColor)}, ${saturation(newColor)}%, ${lightness(newColor)}%)`;
  element.style.color = newHSLColor;
});

