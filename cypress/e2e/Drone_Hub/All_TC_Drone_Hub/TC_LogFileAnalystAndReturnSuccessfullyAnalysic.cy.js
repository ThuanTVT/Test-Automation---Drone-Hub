describe('LogFileAnalystAndReturnSuccessfullyAnalysic', () => {
    it('LogFileAnalystAndReturnSuccessfullyAnalysic', () => {
        cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
          //1. Open Log Files Management
          cy.get('.MuiTableBody-root > :nth-child(2) > :nth-child(1)').click()
          cy.wait(sleeptimes)
          //2. Result Log File
          cy.get('.justify-end > :nth-child(2)').click()
          cy.wait(sleeptimes)
          //3. Flight Information
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
          //4. Save Log File Analyst
          cy.get('.mr-12').click()
          cy.wait(10000)
          //5. Expected Result
          cy.get('.grid > :nth-child(2) > .MuiTypography-root').should('have.text', 'Đã hoàn thành')
          cy.wait(sleeptimes)
        
        })
    })       