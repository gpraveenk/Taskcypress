class polestar{

    alertDialog(){

        return cy.get('#onetrust-accept-btn-handler')
    }
    hamburgerMenu(){
        return cy.get('[title="Meny"]')
    }
    selecePolestar2(){
        return cy.get('[id="165013927"]')
    }
    seleceUpptäckPolestar2(){
        return cy.get('#aHcGD0vNTNyjB4HDYuK_HQ')
    }
    getPolestar2Text(){
        return cy.get('[data-testid="hero-spacer"] + h1')
    }


    selecePolestar3(){
        return cy.get('[id="169265241"]')
    }
    seleceUpptäckPolestar3(){
        return cy.get('#ZddD4jm8TlOTIw_SNHmdqQ')
    }
    getPolestar3Text(){
        return cy.get('[class="css-13k5rd7"] +h1')
    }

}
export default polestar;