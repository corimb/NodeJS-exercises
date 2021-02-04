// 2. Escribir en un fichero
// Crea un index.js.
// Crea una constante con el texto que tú quieras, ej: Lorem ipsum.
// Crea un objeto que tenga las siguientes propiedades:
// {
//    originalContent: 'Lorem ipsum',
//    changedContent: 'LOREM IPSUM',
//    textLenght: 11
// }
// La propiedad changedContent es igual a la propiedad originalContent pero pasada a mayúsculas.
// La propiedad textLenght es la longitud de la propiedad originalContent.
// Consolea el objeto en modo objeto.
// Guarda el objeto tal cual en el fichero de destino:
// ¿Qué error te muestra?
// Consolea el objeto en modo texto.
// Pista: ¿Recuerdas lo que teníamos que hacer para guardar en el local storage un objeto en formato texto?
// Guarda el objeto en modo texto en el fichero de destino y verás que sí funciona.

const fs = require('fs');


let text = 'Lorem ipsum';

const object = {
originalContent: text,
changedContent: text.toUpperCase(),
textLength: text.length
};

console.log(object)

text = JSON.stringify(object);
console.log(text);


fs.writeFile('./output.txt',text, err => {
  if (err) {
    console.log('Error:', err);
  }
});


  











    