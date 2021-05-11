// declaração das variáveis de escopo global
let validRadio = false;
const rightContent = document.querySelector('.right-content');
// pega todo o conteúdo do mainContent
const form = document.getElementById('mainContent');
// separa, do mainContent apenas os campos input
const rightInputs = form.querySelectorAll('input');

// validação dos radioButtons para ver se algum foi escolhido
function validateRadioButtons() {
  const inputs = rightInputs;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].checked) {
      validRadio = true;
    }
  }
  return validRadio;
}

// função auxiliar que cria um parágrafo que será mostrado caso algum campo não seja preenchido
function createNewParagraph() {
  const paragraph = document.createElement('p');
  paragraph.style.color = 'red';
  paragraph.classList += 'invalid';
  paragraph.innerText = 'Campos inválidos';
  return paragraph;
}

// valida o preenchimento do form
function validateForm() {
  const parent = document.querySelector('.main-form');
  const inputs = rightInputs;
  const paragraph = createNewParagraph();
  // se já houver um parágrafo de "campos inválidos", remove
  if (document.querySelector('.invalid')) {
    parent.removeChild(document.querySelector('.invalid'));
  }
  for (let index = 0; index < inputs.length; index += 1) {
    // verifica se há algum campo não preenchido
    if (!inputs[index].value || !validateRadioButtons()) {
      parent.appendChild(paragraph);
      return false;
    }
  }
  return true;
}

// função auxiliar, remove todos os campos dentro de .right-content
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// função auxiliar cria o campo de gênero caso a opção Personalizado seja escolhida
function createGenderInput() {
  const parent = document.getElementById('personalizedGender');
  const input = document.createElement('input');
  input.id = 'genderCustomText';
  input.type = 'text';
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  parent.appendChild(input);
}

// Cria a string do primeiro parágrafo de retorno dos dados
function createNameParagraph(first, last) {
  const paragraph = document.createElement('p');
  paragraph.classList += 'return';
  const fullName = `${first} ${last}`;
  paragraph.innerText = `Olá, ${fullName}`;
  return paragraph;
}

// cria o primeiro paragrafo de retorno
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

// cria os demais parágrafos de retorno
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

// cria o retorno dos inputs radio
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

// cria o event listener do botão de cadastro e chama as funções de validação e retorno
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

// Cria o event listener para a entrada dos radio buttons de gênero, e se for Personalizado, cria o text input.
document.querySelectorAll('input[name="gender"]').forEach((elem) => {
  elem.addEventListener('change', (event) => {
    const inputValue = event.target.value;
    const textBox = document.getElementById('genderCustomText');
    if (inputValue === 'Personalizado' && !textBox) {
      createGenderInput();
    }
  });
});

// cria o event listener do form de login, e retorna o alert
document.getElementById('button-login').addEventListener('click',
  (event) => {
    event.preventDefault();
    alert(document.getElementById('user-email-phone').value);
  });
