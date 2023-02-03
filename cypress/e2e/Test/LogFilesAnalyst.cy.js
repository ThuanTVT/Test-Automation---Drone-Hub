describe('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
    it('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500
          cy.wait(sleeptimes)
      // Flight Information///////////////////////////////////////////////////////////////////////////////
      let condition = false;
      for (let index = 0; index <= 9; index += 1) {
         cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).then(($temp) => { 
          if ($temp.attr('style').includes('background-color: rgb(255, 138, 0)')){
            console.log(index);
            condition = true;
            cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
            cy.wait(sleeptimes)
        // Result Log File
        cy.get('.justify-end > :nth-child(2)').click()
        cy.wait(sleeptimes)
        // Flight Information
        cy.get('.muiltr-126xj0f > .MuiDialog-container > .MuiPaper-elevation24').click()
        cy.wait(sleeptimes)
        cy.get(':nth-child(16) > :nth-child(5) > .MuiFormControl-root > .MuiOutlinedInput-root > [aria-invalid="false"]').type('demo')
        cy.get('[colspan="3"] > .MuiFormControl-root > .MuiOutlinedInput-root > #demo-simple-select').click()
        cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
        cy.wait(sleeptimes)
        cy.get('#conclusion').type('demo')
        cy.get(':nth-child(18) > .MuiTableCell-alignLeft > .MuiFormControl-root > .MuiOutlinedInput-root > [aria-invalid="false"]').type('demo')
        cy.wait(sleeptimes)
        cy.get('.MuiGrid-grid-xs-8 > .MuiFormControl-root > .MuiOutlinedInput-root > [aria-invalid="false"]').type('demo')
        cy.wait(sleeptimes)
        // Save Log File Analyst
        cy.get('.mr-12').click()
        cy.wait(5000)
        // Expected Result
        cy.get('.grid > :nth-child(2) > .MuiTypography-root').should('have.text', 'Đã hoàn thành')
        cy.wait(700)
        cy.end()
       
         } 
        // if (index == 9 && !condition) {
        //   index = 0
        //   cy.wait(5000)
        //   cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
        // }

      })
        if (condition) break
        cy.wait(sleeptimes)
    }
    })
  })
