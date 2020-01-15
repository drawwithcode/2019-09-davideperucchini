var colors = ['#6200ee', '#bb86fc', '#3700b3', '#03dac6', '#018786', '#b00020', '#cf6679'];

var quotes = ['Mi sa che lo balzo \ne ritento \nal prossimo appello', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '30L'];

var quote = "Scuoti il telefono per \nscoprire che voto prenderai \nal prossimo esame";
var colore = "#121212";

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(20);
  frameRate(60);
}

function draw() {
  background(colore);
  textSize(72);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('Helvetica');
  fill("#ffffff");
  text(quote, width / 2, height / 2);
}

function deviceShaken() {
  var indexColors = floor(random() * colors.length);
  colore = colors[indexColors];
  var indexQuotes = floor(random() * quotes.length);
  quote = quotes[indexQuotes];
}

function touchMoved() {
  return false;
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
