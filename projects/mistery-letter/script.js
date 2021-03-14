const styles = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];
const classTypes = [styles, size, rotation, inclination];
let wordCount = 0;

function numberOfClasses() {
  let numberOfStyleClasses = Math.ceil(Math.random() * 4);
  while (numberOfStyleClasses === 1) {
    numberOfStyleClasses = Math.ceil(Math.random() * 4);
  }
  return numberOfStyleClasses;
}

function splitText() {
  const textInput = document.getElementById('carta-texto').value;
  const textArray = textInput.split(' ');
  return textArray;
}

function classSwitch(index) {
  const caseNumber = index;
  if (caseNumber === 0) {
    const classNumber = Math.floor(Math.random() * 3);
    return classTypes[0][classNumber];
  } if (caseNumber === 1) {
    const classNumber = Math.floor(Math.random() * 3);
    return classTypes[1][classNumber];
  } if (caseNumber === 2) {
    const classNumber = Math.floor(Math.random() * 2);
    return classTypes[2][classNumber];
  } if (caseNumber === 3) {
    const classNumber = Math.floor(Math.random() * 2);
    return classTypes[3][classNumber];
  }
}

function chooseClass() {
  const numberOfClassesToUse = numberOfClasses();
  const classesArray = [];
  for (let index = 0; index < numberOfClassesToUse; index += 1) {
    classesArray.push(classSwitch(index));
  }
  return classesArray;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function generateLetter() {
  const parent = document.getElementById('carta-gerada');
  removeAllChildNodes(parent);
  const words = splitText();
  for (let index3 = 0; index3 < words.length; index3 += 1) {
    const span = document.createElement('span');
    const classesArray = chooseClass();
    for (let index4 = 0; index4 < classesArray.length; index4 += 1) {
      span.classList.add(classesArray[index4]);
    }
    span.innerText = words[index3];
    parent.appendChild(span);
  }
}

function contador() {
  const words = splitText();
  wordCount = words.length;
  const paragraph = document.getElementById('carta-contador');
  paragraph.innerText = `${wordCount}`;
}

function validateInput() {
  let textInput = document.getElementById('carta-texto').value;
  const parent = document.getElementById('carta-gerada');
  textInput = textInput.trim();
  if (textInput === '') {
    parent.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generateLetter();
    contador();
  }
}

document.getElementById('criar-carta').addEventListener('click', validateInput);

document.getElementById('carta-gerada').addEventListener('click', (event) => {
  const span = event.target;
  span.className = '';
  const classesArray = chooseClass();
  for (let index4 = 0; index4 < classesArray.length; index4 += 1) {
    span.classList.add(classesArray[index4]);
  }
});
