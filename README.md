<p float="center">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/interface/thumbnail.png?raw=true"/> 
</p>
>>> A Chrome extension enhancing website UI by adjusting colors for improved readability. Suited for those who happen to have color blindness. 

## Documentation

#### 💭 Inspiration
With the widespread use of the internet being prevalent around the world, we started by looking for something that would make learning and using the web more accessible to everyone. Through our research, we found a problem that exists in 300 million people around the world. Color blindness makes understanding images much more difficult- here's the comparison of the visible light spectrum for those who have protanopia and those who don't:

<p float="left">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/READMEimP.png?raw=true" width="400" height="300">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/READMEim.png?raw=true" width="400"  height="300" /> 
</p>

As can be observed, those who have protanopia are unable to correctly identify what at what wavelengths the color has shifted. This can be applied to various other cases as well, such as when studying for a biology exam, and being unable to tell where the cytoplasm starts and where it ends due to the color choice of the website. Through these considerations, we decided to make a chrome extension as a convenient solution that would change certain color-blind afflicted colors so that users can properly identify what they are looking at with one click.

#### 💻 What it does
enColor is an easy to use Google Chrome extension with the purpose of providing accessibility for those who may have any type of color-blindness, allowing them to differentiate colors in images and web components that would otherwise appear the same. This has many practicalities, from allowing visually impaired users to see more distinct edges in images to being able to more clearly read text. Here's how a person with protanopia sees a group of trees with and without our extension:

<p float="left">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/wenc.png?raw=true" width="400" height="300">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/woenc.png?raw=true" width="400"  height="300" /> 
</p>

In the image on the right, all the trees appear to be yellow, but the filtered version on the left highlights green trees using a blue coloring that would've otherwise gone unnoticed by those with this type of color-blindness.

#### 🔧 How we built it
We used DOM manipulation to access and modify the main HTML/CSS of the webpage through the extension to change colors of the text and web components such as buttons. For images, we used Python's OpenCV library to create masks in order to isolate the color we wanted to change, then used Numpy to shift the color. The converted images are then returned through a Flask API to the front-end to replace the original images.

#### ⚙️ Challenges we ran into
We had problems with linearly scaling the color changes in images, as we didn't want to just set the color directly- this would make the image much more difficult to understand. We solved this by switching to the HSV (Hue, Saturation, Value) color code  which allowed us to create a better filter. 

Another major challenge was dealing with CORS-headers, which prevented us from fetching the required image data in our chrome extension. It took a while before we discovered we could use a chrome extension to disable the CORS-headers. 

Besides that, we had to deal with a myriad of other of miscellaneous bugs when setting up our Flask server and chrome extension, such as python package compatbility issues with OpenCV, abnormal document query selector behaviour when using a chrome extension, and dealing with webpages that don't load all their images at once.

#### ⭐️ Accomplishments that we're proud of



#### 🧠 What we learned
We learned more intermediate HTML/CSS, UI/UX design, and how to implement it in a chrome extension. We gained experience in Python through Flask and OpenCV, 

#### 👀 What's next for enColor
We plan on implementing more flexibility with the color changing options, allowing for users to select from a larger variety of colors to change from and to instead of focusing on the main types of color blindness. We also plan on implementing WebGL to allow for color manipulation in videos.

#### 💽 Technologies Used
Python, HTML, CSS, JS, Flask, OpenCV, NumPy, p5

#### 🛠 The Devs
- [@JwuCode](https://github.com/JwuCode)
- [@SubmergedDuck](https://github.com/SubmergedDuck)
- [@OwaisSiddiqui](https://github.com/OwaisSiddiqui)
- [@HerschaLo](https://github.com/HerschaLo)
