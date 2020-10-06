const { readDB, saveDB } = require("./porHacer");

const deleteTask = (description) => {
  let db = [];
  db = readDB();
  let index = db.filter((db) => db.descripcion !== description);
  //db.splice(index, 1);

  saveDB(index);
};

module.exports = {
  deleteTask,
};
