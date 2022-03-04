describe ('Página principal: Se abre HOME y funciona su navegación',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:8080')       
      
      });
    it ('visitar URL de HOME y verificar que el título existe',()=>{
       
        cy.contains('HBOPaty')        
    })
    it ('Dar click en peliculas infantiles verificar que la URL fué a la página correcta y regresar a HOME',()=>{        
       
        cy.contains('Peliculas Infantiles').click()
        cy.url().should('include', '/peliculas/A')
        cy.get('#Home').click()
        cy.url().should('eq', 'http://localhost:8080/#/')        
    })
    it ('Dar click en peliculas para adolescentes verificar que la URL fué a la página correcta y regresar a HOME',()=>{       
        cy.contains('Peliculas para Adolescentes').click()
        cy.url().should('include', '/peliculas/B')
        cy.get('#Home').click()
        cy.url().should('eq', 'http://localhost:8080/#/')
        cy.url().should('not.include','/peliculas/B')
    })
    it ('Dar click en peliculas para adultos verificar que la URL fué a la página correcta y regresar a HOME',()=>{       
        cy.contains('Peliculas para Adultos').click()
        cy.url().should('include', '/peliculas/C')
       // cy.go('back')  
       cy.get('#Home').click()
       cy.url().should('eq', 'http://localhost:8080/#/')     
    })
})

describe('Revisar cards y su contenido',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:8080')       
      
      });
    it('obteniendo cards de Clasificación Infantiles',()=>{        
        cy.contains('Peliculas Infantiles').click()
        cy.get('.card').within(() => {
            cy.get('.card-img-top').should('have.attr', 'src').and('is.not.equal','')
            cy.get('.card-body').within(() => {
                cy.get('.card-title').should('be.not.empty')
                cy.get('.card-text').should('be.not.empty')
            })
        })
    })

    it('obteniendo cards de Clasificación Adultos',()=>{        
        cy.contains('Peliculas para Adultos').click()
        cy.get('.card').within(() => {
            cy.get('.card-img-top').should('have.attr', 'src').and('is.not.equal','')
            cy.get('.card-body').within(() => {
                cy.get('.card-title').should('be.not.empty')
                cy.get('.card-text').should('be.not.empty')
            })
        })
    })
    it('obteniendo cards de Clasificación de Adolescentes',()=>{       
        cy.contains('Peliculas para Adolescentes').click()
        cy.get('.card').within(() => {
            cy.get('.card-img-top').should('have.attr', 'src').and('is.not.equal','')
            cy.get('.card-body').within(() => {
                cy.get('.card-title').should('be.not.empty')
                cy.get('.card-text').should('be.not.empty')
            })
        })
    })
})

describe ('Edición: Revisar navegación del listado a edición',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:8080')       
      
      });
   
    it ('Dar click en peliculas infantiles verificar que la URL fué a la página correcta y dar click en un botón de edición',()=>{        
       
        cy.contains('Peliculas Infantiles').click()
        cy.url().should('include', '/peliculas/A')
        cy.get('.bi-pencil').first().as('editar')        
        cy.get('@editar').parent().invoke('prop', 'href')
        .then(liga => {                //verifico que al dar click en el botón editar el url coincida con el de la liga,              
            cy.get('@editar').click()  //sólo por curiosidad para saber obtener propiedades de elementos ;)
            cy.url().should('include', liga)
          });
        cy.get('.invalid-feedback').should('have.attr', 'class', 'invalid-feedback d-none')
        cy.get('#nombre').clear()
        cy.get('.invalid-feedback').contains('Asignale un nombre, no puedes dejar el campo en blanco')
           .should('have.attr', 'class', 'invalid-feedback d-block')      
        cy.get('#nombre').type('Jefe en pañales')
        cy.get('.invalid-feedback').should('have.attr', 'class', 'invalid-feedback d-none')
        cy.get('#enviar').should('have.attr', 'disabled')
        cy.get('#acepto').should('not.be.checked')
        cy.get('#acepto').check()
        cy.get('#enviar').should('not.have.attr', 'disabled')
    })
  
})
