function getRandomColor() {
    // Generate random values for red, green, and blue channels
    var randomRed = Math.floor(Math.random() * 256); // 0 to 255
    var randomGreen = Math.floor(Math.random() * 256); // 0 to 255
    var randomBlue = Math.floor(Math.random() * 256); // 0 to 255
  
    // Convert the RGB values to a hexadecimal color code
    var randomColor = "#" +
      randomRed.toString(16).padStart(2, "0") +
      randomGreen.toString(16).padStart(2, "0") +
      randomBlue.toString(16).padStart(2, "0");
  
    return randomColor;
  }

export default getRandomColor