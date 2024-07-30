const app = document.querySelector('#app');

const texts = [
  'congratulations'
];

const styles = ['green', 'yellow', 'red', 'blue'];
const degrees = ['0deg', '5deg', '10deg', '-5deg', '-10deg'];
const sizes = ['lowercase', 'uppercase'];

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateTextAnimated = () => {
  const text = texts[getRndInteger(0, texts.length)];
  
  new TextAnimated(text);
}

class TextAnimated {
  constructor(text) {
    this.text = text;
    this.textAnimatedArr = this.getArr(this.text);
    
    this.render();
  }
  
  createTag(tagName, content) {
    const tag = document.createElement(tagName);
    const tagInner = document.createElement(tagName);
    tag.className = `animated bounceIn text-item text-${this.getSize()} ${this.getStyle()}`;
    
    tagInner.textContent = content;
    tagInner.style.transform = `rotate(${this.getDegree()})`;
    
    tag.appendChild(tagInner);

    return tag;
  }
  
  getArr(string) {
    return string.split('');
  }
  
  getStyle() {
    return styles[getRndInteger(0, styles.length)];
  }
  
  getDegree() {
    return degrees[getRndInteger(0, degrees.length)];
  }
  
  getSize() {
    return sizes[getRndInteger(0, sizes.length)];
  }
  
  render() {
    app.innerHTML = '';
    
    this.textAnimatedArr.forEach(str => app.appendChild(this.createTag('div', str)));
  }  
}

generateTextAnimated();

setInterval(() => {
  generateTextAnimated();
}, 3000);
