# EnColor


## Documentation

#### 💭 Inspiration
With the widespread use of the internet being prevalent around the world, we started by looking for something that would make learning and using the web more accessible to everyone. Through our research, we found a problem that exists in 300 million people around the world. Color blindness makes understanding images much more difficult- here's the comparison of an animal cell for those with protanopia and those who don't:

<p float="left">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/READMEimP.png?raw=true" width="400" height="300">
  <img src="https://github.com/OwaisSiddiqui/EnColor/blob/main/READMEim.png?raw=true" width="400"  height="300" /> 
</p>

We were trying to come up with multiple different ideas on the whiteboard, something niche to automate, in which went back and forth on the idea prompt of something to do with accessibility. Inspired by League of Legend’s color-blind mode, we decided to dive into the topic of color blindness and see what we can do. 

#### 💻 What it does
enColor is an easy to use Google Chrome extension with the purpose of providing accessibility for those who may have any type of color-blindness, allowing them to differentiate colors in images and web components that would otherwise appear the same. This has many practicalities, from allowing visually impaired users to see more distinct edges in images to being able to more clearly read text.


#### 🔧 How we built it
We used DOM manipulation to access and modify the main HTML/CSS of the webpage through the extension to change colors of the text and web components such as buttons. For images, we used Python's OpenCV library to create masks in order to isolate the color we wanted to change, then used Numpy to shift the color. The converted images are then returned through a Flask API to the front-end to replace the original images.

#### ⚙️ Challenges we ran into
For the backend we had trouble understanding how colors worked


#### ⭐️ Accomplishments that we're proud of



#### 🧠 What we learned
We learned more intermediate HTML/CSS and how to implement it in a chrome extension. ++ other stuff


#### 👀 What's next for enColor
We plan on implementing more flexibility with the color changing options, allowing for users to select from a larger variety of colors to change from and to instead of focusing on the main types of color blindness. We also plan on implementing WebGL to allow for color manipulation in videos.

#### 💽 Technologies Used
Python, HTML, CSS, JS, Flask, OpenCV, NumPy, p5

#### 🛠 The Devs
- [@JwuCode](https://github.com/JwuCode)
- [@SubmergedDuck](https://github.com/SubmergedDuck)
- [@OwaisSiddiqui](https://github.com/OwaisSiddiqui)
- [@HerschaLo](https://github.com/HerschaLo)
