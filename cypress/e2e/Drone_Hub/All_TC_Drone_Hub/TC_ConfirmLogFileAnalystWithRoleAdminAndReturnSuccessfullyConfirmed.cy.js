describe('ConfirmLogFileAnalystWithRoleAdminAndReturnSuccessfullyConfirmed ', () => {
    it(' ConfirmLogFileAnalystWithRoleAdminAndReturnSuccessfullyConfirmed', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
      //1. Open Log Files Management
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(sleeptimes)
      cy.get('[href="/apps/administrator-log-file"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.wait(sleeptimes)
      //2. Open Report
      cy.get('.MuiTableBody-root > :nth-child(4) > :nth-child(1)').click()
      cy.wait(sleeptimes) 
      //3. Result log file
      cy.get('.justify-end > :nth-child(2)').click()
      cy.wait(sleeptimes)
      //4. Confirm
      cy.get('.mr-12').click()
      cy.wait(20000)
      //5. Expect Result: Confirm successfully 
      cy.get('.grid > .items-center > .MuiTypography-root').should('have.text', 'Đã được duyệt')
      cy.wait(sleeptimes)
    })
})