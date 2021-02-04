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

readFile('./input.txt', fileContent => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  writeFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied!');
  });
});


//la función readFile de la línea 3 recibe como parámetros el archivo que tiene que leer y la función callback en la línea 23. 
// el input.text es el archivo que tiene que leer y fileContent es el contenido del fichero que le hemos pasado arriba como data si todo ha ido bien. 
// writeFile tiene como parámetro el nombre del fichero que tiene que crear, el contenido que esta vez está formado por el data que tenía el input text + la fecha y como tercer parámetro tiene la función callback que en este caso es el console.log. 