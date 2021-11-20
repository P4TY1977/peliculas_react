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

export default {esperar, separar}