describe('CreateReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
    it('CreateReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 3000;
          cy.wait(sleeptimes)
      //1. Open Log Files Management
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(sleeptimes)
      cy.get('[href="/apps/log-files"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.wait(sleeptimes)
      //2. Flight Information
      cy.get('.MuiTableBody-root > :nth-child(6) > :nth-child(1)').click()
      cy.wait(sleeptimes)
      cy.wait(sleeptimes)
      //3. Create Report
      cy.get('.justify-end > .MuiButton-root').click()
      cy.wait(sleeptimes)
      //4. Flight Status Report
      cy.get('#pilotDescription').type('demotest')
      cy.wait(sleeptimes)
      cy.get(':nth-child(4) > .MuiOutlinedInput-root > [rows="3"]').type('demotest')
      cy.wait(sleeptimes)
      cy.get('#pilot').type('demotest')
      cy.wait(sleeptimes)
      cy.get('.MuiGrid-grid-xs-8 > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > [rows="4"]').type('demotest')
      cy.wait(sleeptimes)
      //5. Save Report
      cy.get('.MuiDialogActions-root > .MuiButton-root').click()
      cy.wait(10000)
      //6. Expected Result: Created Successfully
      cy.get('.grid > :nth-child(4) > .MuiTypography-root').should('have.text', 'Cảnh báo')
      cy.wait(sleeptimes)
    
    })
  })
