const { crear } = require("./src/porHacer");
const { listarTask } = require("./src/listarTask");
const argv = require("./config/yargs").argv;
const { editTask } = require("./src/editTask");
const { deleteTask } = require("./src/deleteTask");

const comand = argv._[0];
let description = argv.descripcion;
let complete = argv.completado;

switch (comand) {
  case "crear":
    console.log(description);
    crear(description);
    break;

  case "listar":
    listarTask();
    break;

  case "actualizar":
    editTask(description, complete);
    break;

  case "delete":
    deleteTask(description);
    break;

  default:
    console.log("COMANDO NO RECONOCIDO");
    break;
}
