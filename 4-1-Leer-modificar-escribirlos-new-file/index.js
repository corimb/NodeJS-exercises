// 3: Leer de un fichero, modificar los datos y escribirlos en otro fichero
// Crea un fichero input-file.txt con un texto, ej: Lorem ipsum.
// Crea un index.js.
// Lee el contenido del fichero input-file.txt.
// Crea en un objeto que tenga los siguientes campos:
// {
//    originalContent: 'Lorem ipsum',
//    changedContent: 'LOREM IPSUM',
//    textLenght: 11
// }
// La propiedad changedContent es igual a la propiedad originalContent pero pasada a mayúsculas.
// La propiedad textLenght es la longitud de la propiedad originalContent.
// Guarda el objeto en modo texto en un fichero de destino llamado output-file.json.
// Pista: la asincronía es importante, debes guardar en el fichero de destino después de leer del fichero de origen.

const fs = require('fs');

const readFile = (fileName, callback) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.log('Error:', err);
      } else {
        callback(data);
      }
    });
};

const writeFile = (fileName, fileContent, callback) => {
    fs.writeFile(fileName, fileContent, err => {
      if (err) {
        console.log('Error:', err);
      } else {
        callback();
      }
    });
  };


readFile('./input-file.txt', fileContent => {
    const objectData = {}
    objectData.originalContent = fileContent;
    objectData.changedContent = fileContent.toUpperCase();
    objectData.textLength = objectData.originalContent.length;
    console.log(objectData);
    const newFileObject = JSON.stringify(objectData);
    writeFile('./output-file.json', newFileObject, () => {
        console.log(newFileObject);
    });
});