let width = window.innerWidth;
let height = window.innerHeight;
let container = document.getElementById("canvasContainer");
let containerHeight = container.offsetHeight;

let sineWaveBaseline = height * 0.24;
let cosineWaveBaseline = height * 0.7; // Adjusted baseline for cosine wave

let particleCount = 600;
let particlesSine1 = [];
let particlesCosine1 = [];
let particlesSine2 = [];
let particlesCosine2 = [];
let amplitude = 300;
let frequency = 0.002; // Adjusted frequency for a slower wave
let timeIncrement = 0.01; // Adjusted time increment for slower movement
let repelDistance = 30; // Distance threshold for repelling particles
let repelForce = 2; // Strength of the repulsion force

function setup() {
  const canvas = createCanvas(width, containerHeight);
  canvas.parent("canvasContainer");

  for (let i = 0; i < particleCount; i++) {
    particlesSine1.push(new ParticleSine1());
    particlesCosine1.push(new ParticleCosine1());
    particlesSine2.push(new ParticleSine2());
    particlesCosine2.push(new ParticleCosine2());
  }

  canvas.mouseMoved(mouseMoved);

  // Attach a window resize event listener
  window.addEventListener("resize", () => {
    width = window.innerWidth; // Update the width
    containerHeight = container.offsetHeight;
    resizeCanvas(width, containerHeight);
  });
}

// Function to retrieve the time from local storage or initialize it
function getTime() {
  const savedTime = localStorage.getItem("savedTime");
  return savedTime ? parseFloat(savedTime) : 0;
}

// Function to save the time to local storage
function saveTime(time) {
  localStorage.setItem("savedTime", time.toString());
}

// Initialize the time variable with the saved value or start from 0
let time = getTime();

function draw() {
  clear();

  for (let particle of particlesSine1) {
    particle.update();
    particle.display();
  }

  for (let particle of particlesCosine1) {
    particle.update();
    particle.display();
  }

  for (let particle of particlesSine2) {
    particle.update();
    particle.display();
  }

  for (let particle of particlesCosine2) {
    particle.update();
    particle.display();
  }

  time += timeIncrement; // Adjusted time increment for slower movement
  saveTime(time); // Save the updated time to local storage
}

function mouseMoved() {
  // Check mouse position against each particle and apply repulsion force if necessary
  for (let particle of particlesSine1) {
    let d = dist(mouseX, mouseY, particle.x, particle.y);
    if (d < repelDistance) {
      let angle = atan2(mouseY - particle.y, mouseX - particle.x);
      let force = p5.Vector.fromAngle(angle);
      force.mult(-repelForce);
      particle.applyForce(force);
    }
  }

  for (let particle of particlesCosine1) {
    let d = dist(mouseX, mouseY, particle.x, particle.y);
    if (d < repelDistance) {
      let angle = atan2(mouseY - particle.y, mouseX - particle.x);
      let force = p5.Vector.fromAngle(angle);
      force.mult(-repelForce);
      particle.applyForce(force);
    }
  }

  for (let particle of particlesSine2) {
    let d = dist(mouseX, mouseY, particle.x, particle.y);
    if (d < repelDistance) {
      let angle = atan2(mouseY - particle.y, mouseX - particle.x);
      let force = p5.Vector.fromAngle(angle);
      force.mult(-repelForce);
      particle.applyForce(force);
    }
  }

  for (let particle of particlesCosine2) {
    let d = dist(mouseX, mouseY, particle.x, particle.y);
    if (d < repelDistance) {
      let angle = atan2(mouseY - particle.y, mouseX - particle.x);
      let force = p5.Vector.fromAngle(angle);
      force.mult(-repelForce);
      particle.applyForce(force);
    }
  }
}

class ParticleSine1 {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocity = createVector(random(1, 3), 0);
    this.heightDeviation = gaussianRandom(0, 25); // Use a Gaussian distribution
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.x += this.velocity.x;
    if (this.x > width) {
      this.x = 0;
    }
    this.y =
      sineWaveBaseline +
      amplitude * sin(frequency * this.x + time) +
      this.heightDeviation;
    this.acceleration.mult(0); // Reset acceleration
  }

  display() {
    fill(242, 242, 242, 200);
    smooth();
    noStroke();
    ellipse(this.x, this.y, 1, 1);
  }
}

class ParticleCosine1 {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocity = createVector(random(1, 3), 0);
    this.heightDeviation = gaussianRandom(0, 25); // Use a Gaussian distribution
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.x += this.velocity.x;
    if (this.x > width) {
      this.x = 0;
    }
    this.y =
      cosineWaveBaseline +
      amplitude * cos(frequency * this.x + time) +
      this.heightDeviation;
    this.acceleration.mult(0); // Reset acceleration
  }

  display() {
    fill(242, 242, 242, 200);
    smooth();
    noStroke();
    ellipse(this.x, this.y, 1, 1);
  }
}

class ParticleSine2 {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocity = createVector(random(1, 3), 0);
    this.heightDeviation = gaussianRandom(0, 200); // Use a Gaussian distribution
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.x += this.velocity.x;
    if (this.x > width) {
      this.x = 0;
    }
    this.y =
      sineWaveBaseline +
      amplitude * sin(frequency * this.x + time) +
      this.heightDeviation;
    this.acceleration.mult(0); // Reset acceleration
  }

  display() {
    fill(242, 242, 242, 200);
    smooth();
    noStroke();
    ellipse(this.x, this.y, 1, 1);
  }
}

class ParticleCosine2 {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocity = createVector(random(1, 3), 0);
    this.heightDeviation = gaussianRandom(0, 200); // Use a Gaussian distribution
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.x += this.velocity.x;
    if (this.x > width) {
      this.x = 0;
    }
    this.y =
      cosineWaveBaseline +
      amplitude * cos(frequency * this.x + time) +
      this.heightDeviation;
    this.acceleration.mult(0); // Reset acceleration
  }

  display() {
    fill(242, 242, 242, 200);
    smooth();
    noStroke();
    ellipse(this.x, this.y, 1, 1);
  }
}

// Generate random numbers following a Gaussian distribution
function gaussianRandom(mean, stdDev) {
  let u1 = 1 - random(); // Subtraction to flip the range from [0, 1] to [1, 0]
  let u2 = 1 - random();
  let normalRandom = sqrt(-2 * log(u1)) * cos(2 * PI * u2);
  return mean + stdDev * normalRandom;
}

/*

  drawSineWave();
  drawCosineWave();

function drawSineWave() {
  noFill();
  stroke(0, 0, 255);
  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = sineWaveBaseline + amplitude * sin(frequency * x + time);
    vertex(x, y);
  }
  endShape();
}

function drawCosineWave() {
  noFill();
  stroke(255, 0, 0);
  beginShape();
  for (let x = 0; x < width; x += 10) {
    let y = cosineWaveBaseline + amplitude * cos(frequency * x + time);
    vertex(x, y);
  }
  endShape();
}

*/
