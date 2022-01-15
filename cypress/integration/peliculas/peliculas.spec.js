describe ('Página principal: Se abre HOME y funciona su navegación',()=>{
    beforeEach(() => {
        cy.visit('http://localhost:8080')       
      
      });
    it ('visitar URL de HOME y verificar que el título existe',()=>{
       
        cy.contains('HBOPaty')        
    })
    it ('Dar click en peliculas infantiles verificar que la URL fué a la página correcta y regresar a HOME',()=>{        
        cy.visit('http://localhost:8080/#/peliculas/A')
        //cy.get('a[href*="peliculas/A"]').click()
        cy.get('text-center')
         // cy.contains('Infantiles').click()
       // cy.url().should('include', '/peliculas/A')
       // cy.get('#Home')
        //cy.url().should('eq', 'http://localhost:8080/#/')        
    })
    it ('Dar click en peliculas para adolescentes verificar que la URL fué a la página correcta y regresar a HOME',()=>{       
        cy.visit('http://localhost:8080/#/peliculas/A')
      /*  cy.contains('Peliculas para Adolescentes').click()
        cy.url().should('include', '/peliculas/B')
        cy.get('#Home').click()
        cy.url().should('eq', 'http://localhost:8080/#/')
        cy.url().should('not.include','/peliculas/B')*/
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
