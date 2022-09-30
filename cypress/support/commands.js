// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("agregar elemento", (nombreDeProducto) =>{
    cy.get("div[class='product-thumb']").as('contenedor')
    cy.get('@contenedor')
    .each(($el, index, $list) => {
        cy.get(':has(.caption) h4 a').eq(index).find('.price').then(function($el1){
            let producto = $el1.text()
            cy.log(producto)

            if(producto.includes(nombreDeProducto)){
                cy.log('Se ha encontrado el elemento y precio buscado')
                cy.get('@contenedor').eq(index).find("button[onclick^='cart.add']").click()
            }
        })
    })
})

Cypress.Commands.add('verificamosElementosEnCarritoDD', (nombreDeProducto) => {
    cy.get("tr:has(button[onclick^='cart.remove'] td[class='text-left'] a")
        .each(($el, index, $list) => {
            cy.get("td[class='text-left'] a").eq(index).then(function ($el1){
                let producto = $el1.text()
                cy.log(producto)
                cy.get("tr:has(button[onclick^='cart.remove'])").should("contain.text", nombreDeProducto)
            })
        })
})