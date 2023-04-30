new p5();
console.log("Working");
const allElements = document.querySelectorAll("*");

function absColor(currVal, addedVal) {
  if (currVal + addedVal > 255) {
    return currVal + addedVal - 255;
  } else if (currVal + addedVal < 0) {
    return currVal + addedVal + 255;
  } else {
    return currVal + addedVal;
  }
}

function changeColor(element, url) {
  fetch(url).then(async (response) => {
    let imgData = await response.blob();
    let fileData = new FormData();
    let fileName = url.replaceAll("/", "");
    fileData.append(fileName, imgData);
    fetch("http://127.0.0.1:5000/convert", {
      method: "POST",
      mode: "cors",
      body: fileData,
    }).then(async (response) => {
      let blob = await response.blob();
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64data = reader.result;
        element.src = base64data;
      };
    });
  });
}
function restrict(val, lower, upper) {
  if (val <= upper && val >= lower) {
    return val;
  } else {
    return -1;
  }
}

allElements.forEach((element) => {
  const properties = ["color", "backgroundColor"];

  properties.forEach((property) => {
    if (
      property === "backgroundColor" &&
      element.nodeName.toLowerCase() === "p"
    ) {
      return;
    }
    if (element.nodeName === "IMG") {
      changeColor(element, element.src);
    } else {
      colorMode(HSB);
      const style = getComputedStyle(element);
      const elementColor = color(style[property]);

      const h = hue(elementColor);
      const s = saturation(elementColor);
      const b = brightness(elementColor);

      console.log(element, style.color);
      console.log(h, s, b);

      var newH = h;
      var newS = s;
      var newB = b;

      if (
        restrict(h, 19, 130) != -1 &&
        restrict(s, 46, 203) != -1 &&
        restrict(b, 60, 194) != -1
      ) {
        newH = absColor(h, -170);
        newS = 120;
        newB = b;
        console.log("blind detected");

        console.log(getComputedStyle(element).color + " " + element.nodeName);

        console.log("New color 1", newH, newS, newB);

        const newColor = color(newH, newS, newB);

        colorMode(HSL);

        console.log("New color", newColor.toString("hsb"));

        const newHSLColor = `hsl(${hue(newColor)}, ${saturation(
          newColor
        )}%, ${lightness(newColor)}%)`;

        element.style[property] = newHSLColor;
      }
    }
  });
});
