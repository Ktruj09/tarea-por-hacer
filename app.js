const argv = require('./config/yargs').argv
const colors = require('colors')

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==========Por hacer=========='.green)
            console.log(tarea.descripcion);

            //evaluamos si esta completado que nos cambie el color 
            //de estado
            if (tarea.completado === false) {
                console.log('Estado'.red, tarea.completado);
            } else {
                console.log('Estado'.blue, tarea.completado)
            }

            console.log('============================='.green)
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado)
        break;

    default:
        console.log('El comando escrito no es reconocido... ')
}