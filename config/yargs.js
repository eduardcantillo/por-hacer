const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de una tarea por hacer'

}

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como compleato o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer ', { descripcion })
    .command('actualizar', 'actualiza el estado compleatdo de una tarea', { descripcion, completado })
    .command('borrar', 'Eliminar una tarea con la descripcion', { descripcion })
    .help()
    .argv




module.exports = {
    argv
}