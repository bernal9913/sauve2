class AuthenticationPage{
    getEmailAddressInput(){
        cy.get('#email')
    }
    getPasswordInput(){
        cy.get('#passwd')
    }
    getSignInButton(){
        cy.get('#SubmitLogin')
    }
}
export default AuthenticationPage;