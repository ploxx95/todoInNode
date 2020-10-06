const { readDB, saveDB } = require("./porHacer");

const editTask = (description, complete = true) => {
  let db = [];
  db = readDB();
  let index = db.findIndex((db) => db.descripcion === description);
  db[index].completado = complete;
  console.log("ESTO ES DB ", db);
  saveDB(db);
};

module.exports = {
  editTask,
};
