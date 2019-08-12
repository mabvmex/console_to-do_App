const argv = require('./config/yargs').argv
const colors = require('colors');
const nuevoItem = require('./todo/to-do');

// console.log('PRUEBA DEL CONTENIDO DE ARGV'.rainbow.bold, argv);

let comando = argv._[0];

switch (comando) {
    case 'create':
        let tarea = nuevoItem.crear(argv.descripcion)
        console.log('Mensaje del switch: Crear una nueva tarea:'.yellow.bold);
        break;

    case 'list':
        let listaParaMostrar = nuevoItem.getListado();
        console.log('\n');
        console.log(`************************************`.black.bgGreen);
        console.log('\n');
        console.log(`======== Tareas pendientes ========`.bold.green);
        for (const tarea of listaParaMostrar) {
            if (!tarea.completado) {
                console.log(`>> ${tarea.descripcion}`.bold.yellow);
                console.log(`   Completado: ${tarea.completado}`.bgRed);
            }
        }

        console.log('\n');
        console.log(`======== Tareas completadas ========`.bold.green);
        for (const tarea of listaParaMostrar) {
            if (tarea.completado) {
                console.log(`>> ${tarea.descripcion}`.bold.yellow);
                console.log(`Completado: ${tarea.completado}`.bold.bgBlue);
            }
        }
        console.log('\n');
        console.log(`************************************`.black.bgGreen);
        break;

    case 'update':
        let actualizado = nuevoItem.actualizar(argv.descripcion, argv.completado);
        console.log('La tarea se ha actualizado existosamente'.bold.bgBlue);
        break;

    case 'delete':
        let borrarTarea = nuevoItem.borrar(argv.descripcion);
        console.log('La tarea ha sido eliminada existosamente'.bold.bgBlue)
        break;

    default:
        console.log('Comando no reconocido'.yellow.bgRed);
}