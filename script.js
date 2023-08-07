function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    const randomHexColor = getRandomHexColor();
    const gradientCheckbox = document.getElementById("gradientCheckbox").checked;
    const colorInput = document.getElementById("colorInput");
    const gradientColorInput = document.getElementById("gradientColorInput");
  
    if (gradientCheckbox) {
      const randomHexColor2 = getRandomHexColor();
      document.body.style.backgroundImage = `linear-gradient(135deg, ${randomHexColor}, ${randomHexColor2})`;
      gradientColorInput.style.display = "block";
      gradientColorInput.value = randomHexColor2;
    } else {
      document.body.style.background = randomHexColor;
      gradientColorInput.style.display = "none";
    }
  
    colorInput.value = randomHexColor;
  }
  
  function toggleGradientInput() {
    const gradientCheckbox = document.getElementById("gradientCheckbox").checked;
    const gradientColorInput = document.getElementById("gradientColorInput");
    
    if (gradientCheckbox) {
      gradientColorInput.style.display = "block";
    } else {
      gradientColorInput.style.display = "none";
    }
  }
  
  window.onload = function() {
    const colorInput = document.getElementById("colorInput");
    colorInput.value = getRandomHexColor();
    changeColor();
  };

  
  
  