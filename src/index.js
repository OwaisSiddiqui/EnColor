new p5();
import { v4 as uuidv4 } from 'uuid'
console.log("Working");
const allElements = document.querySelector("body").querySelectorAll("*");

chrome.storage.local.get("choice", (items) => {
  const choice = items['choice']
  if (choice === "1" || !choice) {
    return;
  }
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
    console.log("image detected")
    console.log(element)
    fetch(url).then(async (response) => {
      let imgData = await response.blob();
      let fileData = new FormData();
      let fileEnding = ''
      if(/data[:][/]image/.test(url)){
        fileEnding = '.'+/(?=data[:]image[/])[a-zA-Z]/.exec(url)[0]
      }
      else{
        fileEnding = /[.][a-zA-Z]+$/.exec(url)[0]
      }
      fileData.append(uuidv4()+fileEnding, imgData);
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
          console.log("changing")
          element.src = base64data;
          element.srcset = base64data
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
  const changeElement = (element) => {
    const properties = ["color", "backgroundColor"];
  
    properties.forEach((property) => {
      if (
        property === "backgroundColor" &&
        element.nodeName.toLowerCase() === "p"
      ) {
        return;
      }
      if (element.nodeName === "IMG") {
        element.loading=""
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
  }
  allElements.forEach((element)=>{
    console.log(element)
    changeElement(element)
  });

const targetNode = document.querySelector("body")

const config = { childList: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
        for (const addedNode of mutation.addedNodes) {
            console.log(addedNode)
            console.log("mutationmutation")
            changeElement(addedNode)
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
  
})