const fs = require('fs');




let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo guardar', err)
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')

    } catch (error) {
        listadoPorHacer = []
    }


}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index != -1) {
        listadoPorHacer.pop(index)
        guardarDB()
        console.log(index);
        return true
    } else {
        console.log(index);
        return false
    }


}

const getListado = () => {
    cargarDB()
    return listadoPorHacer

}

const crear = (descripcion) => {
    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let filtrados = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (filtrados.length === listadoPorHacer.length) {

        return false
    } else {
        listadoPorHacer = filtrados
        guardarDB()
        return true
    }



}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}