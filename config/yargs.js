const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripcion de la tarea a CREAR",
};

const completado = {
  alias: "c",
  desc: "MARCA de la tarea a COMPLETA",
  default: true,
  type: "boolean",
};

const argv = require("yargs")
  .command("crear", "crea una tarea", {
    descripcion,
  })
  .command("actualizar", "actualiza tarea", {
    descripcion,
    completado,
  })
  .command("delete", "borrar tarea", {
    descripcion,
  })
  .help().argv;

module.exports = { argv };
