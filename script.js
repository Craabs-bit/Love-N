function playMusicAndShowMessage() {
    const music = document.getElementById('background-music');
    const messageBox = document.getElementById('message-box');
  
    // Toggle music play/pause
    if (music.paused) {
      music.play();
      messageBox.style.display = 'block'; // Show message box
    } else {
      music.pause();
      music.currentTime = 0; // Reset music to the beginning
      messageBox.style.display = 'none'; // Hide message box
    }
  }