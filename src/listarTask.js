const { readDB } = require("./porHacer");
const colors = require("colors");

const listarTask = () => {
  let bd = readDB();
  for (const t of bd) {
    console.log("============= TASK TO BE DONE ===========".inverse.green);
    console.log(
      `=============== ${t.descripcion} =================`.underline.yellow
    );
    console.log(`=========== STATE  : ${t.completado} ===========`.cyan);
    console.log("=========================================".rainbow);
  }
};

module.exports = {
  listarTask,
};
