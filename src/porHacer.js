const fs = require("fs");

let ListToDo = [];

const readDB = () => {
  let dataBase;
  try {
    dataBase = require("../db/data.json");
  } catch (error) {
    dataBase = [];
  }

  return dataBase;
};

const saveDB = (dataFile) => {
  let data = JSON.stringify(dataFile);
  fs.writeFile("./db/data.json", data, (err) => {
    if (err) {
      throw new Error("NOSE PUDO GRABAR", err);
    }
  });
};

const crear = (descripcion) => {
  let porHacer = {
    descripcion,
    completado: false,
  };
  ListToDo = readDB();
  ListToDo.push(porHacer);
  saveDB(ListToDo);
  return porHacer;
};

module.exports = {
  crear,
  readDB,
  saveDB,
};
