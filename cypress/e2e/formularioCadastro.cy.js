import '..support/commands';
describe('Formulário Cadastro', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    })
  
    it('Usuário deve conseguir se cadastrar com sucesso', ()=>{
      cy.getByData('botao-cadastro').click()
      cy.getByData('nome-input').type('Bruno')
      cy.getByData('email-input').type('brunosr099@outlook.com')
      cy.getByData('senha-input').type('Teste@123')
      cy.getByData('checkbox-input').click()
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    it('Não deve permitir o cadastro de usuários com email e senha inválido', ()=>{
      cy.getByData('botao-cadastro').click()
      cy.getByData('email-input').type('moni@alura.com')
      cy.getByData('senha-input').type('987654')
      cy.getByData('botao-enviar').click()
      cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    })
  })