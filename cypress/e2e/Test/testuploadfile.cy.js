describe('CreateReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
    it('CreateReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
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
      // Flight Information///////////////////////////////////////////////////////////////////////////////
      let condition = false;
      for (let index = 0; index <= 9; index += 1) {
         cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).then(($temp) => {
          if ($temp.attr('style').includes('background-color: rgb(122, 122, 122)')){
            console.log(index);
            condition = true;
            cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
            cy.wait(3000)
            // Create Report
            cy.get('.justify-end > .MuiButton-root').click()
            cy.wait(3000)
            // Flight Status Report
            cy.get('#pilotDescription').type('demo')
            cy.wait(3000)
            cy.get(':nth-child(4) > .MuiOutlinedInput-root > [rows="3"]').type('demo')
            cy.wait(3000) 
            cy.get('#pilot').type('demo')
            cy.wait(3000)
            cy.get('.MuiGrid-grid-xs-8 > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > [rows="4"]').type('demo')
            cy.wait(3000)
            // Save Report
            cy.get('.MuiDialogActions-root > .MuiButton-root').click()
            cy.wait(5000)
             // Expected Result: Created Successfully
            cy.get('.grid > :nth-child(4) > .MuiTypography-root').should('have.text', 'Cảnh báo')
            cy.wait(3000)
        }
        else{
          cy.get('.MuiTablePagination-actions > [tabindex="0"]').click();
          cy.wait(500)
        
        if (index == 9 && !condition) {
          index = 0
          cy.wait(5000)
          cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
        }

      }
    })
    if (condition) break
  }
})
})

