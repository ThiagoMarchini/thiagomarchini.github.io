let validRadio = false;
// const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');
// const rightInputs = document.querySelectorAll('.main-form');
const form = document.getElementById('mainContent');
const rightInputs = form.querySelectorAll('input');

function validateRadioButtons() {
  const inputs = rightInputs;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].checked) {
      validRadio = true;
    }
  }
  return validRadio;
}

function createNewParagraph() {
  const paragraph = document.createElement('p');
  paragraph.style.color = 'red';
  paragraph.classList += 'invalid';
  paragraph.innerText = 'Campos inválidos';
  return paragraph;
}

function validateForm() {
  const parent = document.querySelector('.main-form');
  const inputs = rightInputs;
  const paragraph = createNewParagraph();
  if (document.querySelector('.invalid')) {
    parent.removeChild(document.querySelector('.invalid'));
  }
  for (let index = 0; index < inputs.length; index += 1) {
    if (!inputs[index].value || !validateRadioButtons()) {
      parent.appendChild(paragraph);
      return false;
    }
  }
  return true;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGenderInput() {
  const parent = document.getElementById('personalizedGender');
  const input = document.createElement('input');
  input.id = 'genderCustomText';
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  parent.appendChild(input);
}

function createNameParagraph(first, last) {
  const paragraph = document.createElement('p');
  paragraph.classList += 'return';
  const fullName = `${first} ${last}`;
  paragraph.innerText = `Olá, ${fullName}`;
  return paragraph;
}

function createNameOutput() {
  const container = rightContent;
  const inputs = rightInputs;
  for (let index = 1; index < inputs.length; index += 1) {
    if (index === 1) {
      const firstName = inputs[index - 1].value;
      const lastName = inputs[index].value;
      const paragraph = createNameParagraph(firstName, lastName);
      container.appendChild(paragraph);
    }
  }
}

function createOthersOutput() {
  const container = rightContent;
  const inputs = rightInputs;
  for (let index = 2; index < 5; index += 1) {
    if (index === 2 || index === 4) {
      const paragraph = document.createElement('p');
      paragraph.innerText = inputs[index].value;
      paragraph.classList += 'return';
      container.appendChild(paragraph);
    }
  }
}

function createRadioOutput() {
  const container = rightContent;
  const inputs = rightInputs;
  console.log(inputs);
  for (let index = 5; index < inputs.length; index += 1) {
    if (inputs[index].checked) {
      const paragraph = document.createElement('p');
      paragraph.classList += 'return';
      paragraph.innerText = inputs[index].value;
      container.appendChild(paragraph);
    }
  }
}

document.getElementById('facebook-register').addEventListener('click',
  (event) => {
    event.preventDefault();
    validateForm();
    if (validateForm()) {
      removeAllChildNodes(rightContent);
      createNameOutput();
      createOthersOutput();
      createRadioOutput();
    }
  });

document.querySelectorAll('input[name="gender"]').forEach((elem) => {
  elem.addEventListener('change', (event) => {
    const inputValue = event.target.value;
    const textBox = document.getElementById('genderCustomText');
    if (inputValue === 'Personalizado' && !textBox) {
      createGenderInput();
    }
  });
});

//  alert no botão Entrar

const buttonEnter = document.getElementById('button-login');
function showAlert(event) {
  event.preventDefault();
  alert(document.getElementById('user-email-phone').value);
}

buttonEnter.addEventListener('click', showAlert);
