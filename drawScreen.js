function drawScreen() {
    textSize(40);
  
  if (isConnected) {
    background(100, 100, 255);
	text('Robot Control center', 20, 500);
    text('Connected :)', 80, 15);
  } else {
    background(255, 100, 100);
	text('Robot Control center', windowWidth/2, windowHeight-500);
    //textAlign(CENTER);
	textSize(18);
    text('Disconnected', windowWidth/2, windowHeight-150);
  }

  text(receivedValue, 15, 40);
  }
