class ShippingPage{
    getTermsOfService(){
        cy.get('#cgv')
    }
    getProceedToCheckoutButton(){
        cy.get('.cart_navigation > .button')
    }
}
export default ShippingPage;