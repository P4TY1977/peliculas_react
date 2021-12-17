import {assert, expect} from 'chai'
import sinon from 'sinon'

import PeliculasStore from '../../../src/stores/PeliculasStore'
import ServicioPeliculas from '../../../src/services/ServicioPeliculas'

const sandbox = sinon.createSandbox()

const listadoPrueba =['Dumbo', 'Pesadilla en la calle del infierno']

describe ('PeliculasStore', () =>
{
    beforeEach(()=>
    {
        sandbox.stub(console, 'error') //se deshabilita el error en la consola para que no lo mande en las pruebas
    })
    afterEach(()=> sandbox.restore())

    describe ('cargarListado', () =>
    {
        it('debe cargar listado de peliculas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').resolves (listadoPrueba) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
            expect (store.errorListado).to.be.false
            expect (store.listado).to.deep.equal(listadoPrueba)

            sinon.assert.calledOnce(ServicioPeliculas.leerPeliculas) //se llamó una vez el método y que argumentos
            
        })

        it('debe indicar que hubo un error al cargar peklículas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').rejects (Error('Bum')) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.false
            expect (store.errorListado).to.be.true
            expect (store.listado).to.deep.equal([])

            sinon.assert.calledOnce(ServicioPeliculas.leerPeliculas)
            
        })
    })
    describe ('limpiar', () =>
    {
        it('debe limpiar el listado de peliculas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').resolves (listadoPrueba) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
           
            store.limpiar()
            
            expect (store.listadoCargado).to.be.false
            expect (store.errorListado).to.be.false
            expect (store.listado).to.deep.equal([])

                      
        })
    })
})