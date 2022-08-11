/*  
 * Bluetooth Test - Processing Side (In Chrome)
 * Arduino to HM10 module to Google Chrome
 * https://www.amazon.com/gp/product/B06WGZB2N4/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1
 * 
 * p5.ble.js
 https://yining1023.github.io/p5ble-website/
 
 * kevin darrah
 * 
 * Twitter: https://twitter.com/KDcircuits
 * For inquiries or design services:
 * https://www.kdcircuits.com
 * 
 * License?  Do whatever you want with this code - it's just a sample
 */
 
 //globals
let blueToothCharacteristic;//this is a blu
let receivedValue = "";

let blueTooth;
let isConnected = false;


var millisecondTimerStart;

function setup() {

  createCanvas(windowWidth, windowHeight);
  
  
  // Create a p5ble class
  console.log("setting up");
  blueTooth = new p5ble();
  textSize(18);
  textAlign(CENTER);
  text('Robot Control Center', windowWidth/2, windowHeight-150);

  const connectButton = createButton('Connect');
  connectButton.mousePressed(connectToBle);
  connectButton.position(windowWidth/2-50, windowHeight-100);
  connectButton.size(100,50);
  connectButton.style('background-color', '#aaa')
  
  const HandMovement = createButton('Hand Movement Follower');
  HandMovement.mousePressed(HandMovement);
  HandMovement.position(windowWidth/2-75, windowHeight/2-75);
  HandMovement.size(150,150);
  
  const LineFollower = createButton('Line Follower');
  LineFollower.mousePressed(LineFollow);
  LineFollower.position(HandMovement.x-170, windowHeight/2-75);
  LineFollower.size(150,150);

  

  const voiceControl = createButton('Voice Control');
  voiceControl.mousePressed(VoiceControl);
  voiceControl.position(HandMovement.x+170, windowHeight/2-75);
  voiceControl.size(150,150);
  
  millisecondTimerStart = millis();
}

function draw() {
  drawScreen();
}
