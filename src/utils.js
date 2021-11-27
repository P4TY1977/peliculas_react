const separar = texto => texto == '' ? []:texto.split(':')

const esperar = milis =>
{
    if(!milis)
        return Promise.reject(Error('no se pasó una espera adecuada'))
    return new Promise(resolve =>
        {
            setTimeout(resolve, milis)
        })
}

const ejecutarDespues = (milis, accion) =>
{
    setTimeout(accion, milis)
}

export default {ejecutarDespues, esperar, separar}