const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado o pendiente la tarea'
}

const argv = require('yargs')
    //definimos nuetros comandos
    .command('crear', 'Crear una tarea por hacer ', {
        descripcion
    })
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}