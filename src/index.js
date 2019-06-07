let form = document.querySelector('#divForm');
let infoModal = document.getElementById('infoModal');
let print = document.getElementById('print');
let contentForModel = '';
let inputImg = document.getElementById('inputImg');
let dataURL = '';

function exit() {
    infoModal.style.display = "none";
    form.style.display = "block";
};

function getJson() {
    let arrP = infoModal.querySelectorAll("p");
    let arrPValue = [];

    for(let i = 0; i < arrP.length-1; i++) {
        arrPValue.push(arrP[i].innerText);
    }
    let arrJson = JSON.stringify(arrPValue);
    infoModal.style.display = "none";
    let jsonFile = document.createElement("div");
    jsonFile.textContent = arrJson;
    let valueJson = document.body.appendChild(jsonFile);
    return valueJson;
};

inputImg.addEventListener('change', function(evt) {
    let input = evt.target;

    let reader = new FileReader();
    reader.onload = function(){
      dataURL = reader.result;
      let output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  });
 
document.getElementById('formInfo').addEventListener('submit', function(evt) {
    evt.preventDefault();
    infoModal.style.display = "inline-block";
    form.style.display = "none";
   
    let inputs = document.getElementsByTagName("input");
    let arrValueInputs = [];
    for(let i = 0; i < inputs.length-2; i++) {
        arrValueInputs.push(inputs[i].value);
    }
   
    infoModal.innerHTML = `
    <button id="print" onClick="window.print()">print</button>
    <button id="exit" onClick="exit()">exit</button>
    <button id="getJson" onClick="getJson()">download</button>
    <h3>Общие данные</h3>
    <p>Имя: <span id="name">${arrValueInputs[0]}</span></p>
    <p>Фамилия: <span id="name2">${arrValueInputs[1]}</span></p>
    <p>Отчество: <span id="name3">${arrValueInputs[2]}</span></p>
    <p>Дата рождения: <span id="date">${arrValueInputs[3]}</span></p>
    <h3>Образование</h3>
    <p>Учреждение образования: <span id="educat">${arrValueInputs[4]}</span></p>
    <p>Факультет: <span id="educat2">${arrValueInputs[5]}</span></p>
    <p>Специализация: <span id="educat3">${arrValueInputs[6]}</span></p>
    <p>Год завершения: <span id="educat4">${arrValueInputs[7]}</span></p>
    <h3>Контактная информация</h3>
    <p>Телефон: <span id="phone">${arrValueInputs[8]}</span>
    <p>E-mail: <span id="email">${arrValueInputs[9]}</span></p>
    <p>Скайп: <span id="skype">${arrValueInputs[10]}</span></p>
    <p>Телеграмм: <span id="telegram">${arrValueInputs[11]}</span></p>
    <p>Сайт: <span id="url">${arrValueInputs[12]}</span></p>
    <p>Фото: <img src=${dataURL} width="300" alt="photo"/></p>`
});