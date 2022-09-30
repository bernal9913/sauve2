class PaymentPage{
    getPayByBankWireOptionButton(){
        cy.get('.bankwire')

    }
    getConfirmMyOrderButton(){
        cy.get('.cart_navigation > button')
    }
    getDescriptionTittleText(){
        cy.get('.cheque-indent >  .dark')
    }
}
export default PaymentPage;