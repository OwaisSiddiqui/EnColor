import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt

#WE ARE CHANGING RED TO BLUE

def rgb_to_hex(array):
    return '#{:02x}{:02x}{:02x}'.format(array[0], array[1], array[2])

def displayImages(image):
    hsv = cv.cvtColor(image, cv.COLOR_BGR2HSV)
    mask = cv.inRange(hsv, colorDefinitions['noGreen']['lowerBound'], colorDefinitions['noGreen']['upperBound'])
    invmask  = cv.bitwise_not(mask)
    res = cv.bitwise_and(image, image, mask = mask)
    res[:, :, 0] -= 170
    res[:, :, 1] -= 50
    res = cv.bitwise_and(res, res, mask = mask)
    invres = cv.bitwise_and(image, image, mask = invmask)
    final = cv.bitwise_or(res, invres)
    
    image = cv.cvtColor(image, cv.COLOR_BGR2RGB)
    plt.subplot(161),plt.imshow(image)
    plt.subplot(162), plt.imshow(mask)
    res = cv.cvtColor(res, cv.COLOR_BGR2RGB)
    plt.subplot(163), plt.imshow(res)
    plt.subplot(164), plt.imshow(invmask)
    invres = cv.cvtColor(invres, cv.COLOR_BGR2RGB)
    plt.subplot(165), plt.imshow(invres)
    cv.imwrite('convIMG.png', final)
    final = cv.cvtColor(final, cv.COLOR_BGR2RGB)
    plt.subplot(166), plt.imshow(final)
    plt.show()
colorDefinitions = {
  "noGreen": {
    "upperBound" : np.array([92, 203, 194]),
    "lowerBound" : np.array([19, 46, 123])
  }
}


image = cv.imread('./cbT.jpg')
displayImages(image)

