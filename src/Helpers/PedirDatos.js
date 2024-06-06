import libros from '../data/libros.json'

export const PedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(libros)
        }, 1500)
    })
}