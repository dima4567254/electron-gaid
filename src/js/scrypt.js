console.log('scrypt.js');
// const { app, BrowserWindow } = require('electron');
// const { contextBridge } = require('electron');
// const path = require('path');
// const fs = require("fs-extra");
// const username = process.env.USERPROFILE;
// const { dialog } = require('electron')

// const saveButton = document.getElementById('from')

// saveButton.addEventListener('click', () => {
//   const path = dialog.showOpenDialogSync({
//     properties: ['openDirectory']
    
//   })
//   console.log(path, "1");
//   if (path) {
//     console.log(path,"2");
//     // Сохранить данные в выбранную папку
//   }
// })

// console.log('value1');
// const form = window.document.querySelector("form");
// console.log('value2');
// form.addEventListener("submit", (event) => {
//     console.log('value3');
//     event.preventDefault();  // Предотвращаем стандартную отправку формы

//     console.log('value4');
//     // const input = window.document.querySelector("input");
//     // const value = input.value;
//     // console.log(value, 'value5');
//     // const input2 = document.querySelector("input"[1]);
//     // const value2 = input2.value2;

//     // const input = document.getElementById("#from");
//     // const value = input.value;

//     // const input2 = document.getElementById("#where");
//     // const value2 = input2.value2;

//     // Теперь значение будет получено при отправке формы
// });

// const input = window.document.querySelector("#from")
// const value = input.value;
// console.log(value, 'value5');

// const input = document.getElementById('from');

// input.addEventListener('change', () => {
//   if (input.files.length > 0) {
//     const file = input.files[0];

//     // Используйте API File System Access, чтобы получить путь к папке
//     const path = file.webkitGetAsEntry().fullPath;

//     console.log(path); // Выводит путь к выбранной папке
//   }
// });
// -------------------------------------


// const input = document.getElementById('from');

// input.addEventListener('change', () => {

//   if (input.files.length > 0) {
//     const file = input.files[0];

//     // Используйте API File System Access, чтобы получить путь к папке
//     const path = file.webkitGetAsEntry().fullPath;

//     console.log(path); // Выводит путь к выбранной папке
//   }
// });

// попробывать другие способы получение и сказать что для файла