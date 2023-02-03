describe('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
    it('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          cy.wait(3000)
      // Open Log Files Management
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(3000)
      cy.get('[href="/apps/log-files"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.wait(3000)
      // Next page
      cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
      cy.get('[aria-label="Go to next page"]').click()
      cy.get('[aria-label="Go to next page"]').click()
      // 2.Edit device model
      cy.get(':nth-child(4) > :nth-child(6) > :nth-child(3)').click()
      cy.wait(3000)
      cy.get('.mb-16 > .MuiInput-root > .MuiInput-input').clear()
      cy.get('.mb-16 > .MuiInput-root > .MuiInput-input').type('demotest1')
      cy.get('#create-device-model-type').click()
      cy.wait(3000)
      cy.get('.MuiList-root > [tabindex="-1"]').click()
      cy.wait(3000)
      // Saved
      cy.get('.MuiButton-textSuccess').click()
      cy.wait(3000)
      // Expected Result Successfully update device model
      cy.get('.SnackbarContent-root > .MuiPaper-root > .MuiTypography-root').should('have.text', 'Cập nhật dòng máy bay thành công!')
      cy.wait(3000)
    })
})