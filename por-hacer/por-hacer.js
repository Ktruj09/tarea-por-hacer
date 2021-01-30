const fs = require('fs')

let listadoPorHacer = []
const guardarDB = () => {
    //lo que hara es convertir listadporhacer a un formato json
    let data = JSON.stringify(listadoPorHacer)

    //grabamos en fs
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puede guardar ', err)
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDB()
    let porhacer = {
        descripcion,
        completado: false
    };

    //hacemos un push
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
}

const getListado = () => {
    cargarDB()
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //buscamos que coincida con la descripción
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if (listadoPorHacer.length === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB()
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}