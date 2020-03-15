"use strict";
const svg = document.querySelector("svg");
const glass = document.querySelector("#circle");

window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log(start);
  svg.addEventListener("mousemove", start);
}

function start() {
  console.log(start);
  svg.addEventListener("mousemove", theMouseMove);
}

function theMouseMove(evt) {
  console.log(theMouseMove);
  circle.setAttribute("cx", (evt.pageX / window.innerWidth) * 1200);
  circle.setAttribute("cy", (evt.pageY / window.innerHeight) * 1200 * (window.innerHeight / window.innerWidth));
}
