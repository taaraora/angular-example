window.addEventListener('load', () => {
  document.write('Enter size of your game</br>');

  let size = document.createElement('input');
  size.type = 'number';
  size.id = 'inputSize';
  document.body.appendChild(size);

  let buttonSize = document.createElement('button');
  buttonSize.id = 'button';
  buttonSize.textContent = 'push me';
  document.body.appendChild(buttonSize);

  let button = document.querySelector('#button');
  button.addEventListener('click', buttonHandler);

  function buttonHandler(){
    let input = document.querySelector('#inputSize');

    let resultContainer = document.createElement('div');
    resultContainer.id = 'resultContainer';
    resultContainer.style.width = "60px";
    resultContainer.style.height = "20px";
    resultContainer.style.background = "aqua";

    resultContainer.innerText = input.value;
    document.body.appendChild(resultContainer);
  }

});
