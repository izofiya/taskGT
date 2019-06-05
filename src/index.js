let infoModal = document.getElementById('infoModal');
let name = document.getElementById('name');
let name2 = document.getElementById('name2');
let name3 = document.getElementById('name3');
let date = document.getElementById('date');
let educat = document.getElementById('educat');
let educat2 = document.getElementById('educat2');
let educat3 = document.getElementById('educat3');
let educat4 = document.getElementById('educat4');    
let phone = document.getElementById('phone'); 
let email = document.getElementById('email'); 
let skype = document.getElementById('skype'); 
let telegram = document.getElementById('telegram');
let url = document.getElementById('url');

let nameForm = document.getElementById('nameForm');
let name2Form = document.getElementById('name2Form');
let name3Form = document.getElementById('name3Form');
let dateForm = document.getElementById('dateForm');
document.getElementById('formInfo').addEventListener('submit', function(evt){
    evt.preventDefault();
    infoModal.style.display = "block";
    name.textContent = nameForm.value;
    name2.textContent = name2Form.value;
    name3.textContent = name3Form.value;
    date.textContent = dateForm.value;
    // console.log(allInfo.value);
    // let arr = [];
    // for(let i = 0; i < allInfo.value.length; i++) {
    //     arr.push(allInfo.value[i]);
    // }
    // console.log(arr);
    // infoModal.textContent = arr;
})