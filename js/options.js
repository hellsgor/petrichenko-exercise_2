'use strict'

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv(containerVar, text) {
    const container = document.querySelector(containerVar);
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.textContent = `${text}`;
    newDiv.style.height = `${this.height}px`;
    newDiv.style.width = `${this.width}%`;
    newDiv.style.backgroundColor = `${this.bg}`;
    newDiv.style.fontSize = `${this.fontSize}px`;
    newDiv.style.textAlign = `${this.textAlign}`;
    container.appendChild(newDiv);
  }
}

const ohDiv = new Options('30', '50', 'yellow', '16', 'center');
ohDiv.createDiv('main', 'Новый div в деле');
