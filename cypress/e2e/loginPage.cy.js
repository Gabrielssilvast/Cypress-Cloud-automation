/// <reference types="cypress" />

describe('Adicionndo Item e realizando cadastro', () => {
    beforeEach(() => cy.visit('https://checkout.einscricao.app//?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev'))
    
    
    it('Home Page: Login', () => {

        //Verificando informações da página
        cy.contains('.MuiTypography-h6', 'Normal').should('be.visible')
        cy.contains('.MuiTypography-body1', 'Gratuito').should('have.text', 'Gratuito')

        //Adicionando 1 item
        cy.get('[tabindex="0"] > .MuiIconButton-label > .MuiSvgIcon-root').click()
        cy.wait(4000)

        //Click em Continuar
        cy.get('.MuiButton-label').click()
        cy.wait(4000)

        //Selecionando Continuar Sem Conta
        cy.get(':nth-child(4) > .MuiButtonBase-root-279 > .MuiButton-label-253').click()

        //Preenchendo Nome
        cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
            .type('Teste 1')
        
        //Selecionando o tipo de documento CPF
        cy.get('.MuiSelect-root').select('cpf')

        //Preenchendo CPF válido
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .type('102.257.210-58')
    
        //Preenchendo e-mail    
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
            .type('teste@gmail.com.br')
            cy.wait(4000)

        //Finalizando
        cy.get('.MuiButton-label').click()
        cy.wait(6000)

        //Salvar Comprovante e gerar download do PDF
        cy.get('[style="position: relative; display: inline-block; width: auto;"] > .MuiButtonBase-root > .MuiButton-label').click()






  
  })
  })