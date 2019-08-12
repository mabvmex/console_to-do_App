const colors = require('colors');
const fs = require('fs');

let lista = [];
const guardarDB = () => {
    let data = JSON.stringify(lista)

    fs.writeFile('todo/db/task-data.json', data, (e) => {
        if (e) throw new Error('No se pudo grabar', e);
    });
}

const crear = (descripcion) => {

    cargarData();

    let nuevoItem = {
        descripcion,
        completado: false
    };
    lista.push(nuevoItem);
    guardarDB();
    return nuevoItem;
};


const cargarData = () => {
    try {
        lista = require('../todo/db/task-data.json');
    } catch (error) {
        lista = [];
    }

    // console.log(lista); 
}

const getListado = () => {
    cargarData();
    return lista;

}

const actualizar = (descripcion, completado = true) => {
    cargarData();
    let index = lista.findIndex(task => task.descripcion === descripcion);
    if (index >= 0) {
        lista[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarData();

    /* SOLUCIÓN DE FERNANDO
    
    let nuevoListado = lista.filter (tarea => tarea.descripcion !== descripcion);
    if (lista.length === nuevoListado.length){
        return false;
    } else {
        lista = nuevoListado;
        guardarDB();
        return true;
    }
    */


    let index = lista.findIndex(task => task.descripcion === descripcion);
    if (index >= 0) {
        lista.splice(index, 1);
        guardarDB();
    } else {
        return false;
    }
 }

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}