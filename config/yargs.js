const colors = ('colors');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Texto o nombre de la tarea',
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca una tarea como completada o pendiente',
}


const argv = require('yargs')
    .command('create', '-> Crea una nueva tarea\n -> Ej. node app.js create --descripcion [-d] "Ir por tacos"', {descripcion})
    .command('update', '-> Actuliza una tarea\n -> Ej. node app.js update --descripcion [-d] "Capturar tres pokemons" --completado [-c]', {descripcion, completado})
    .command('delete', '-> Elimina una tarea\n -> Ej. node app.js delete --descripcion [-d] "Pedir salsa de la que no pica"', {descripcion})
    .command('list', '-> Muestra todas las tareas disponibles\n -> Ej. node app.js list --titulo [-t] --desc [-d]')
    .help()
    .version('0.0.1')
    .argv;

module.exports = {
    argv
}