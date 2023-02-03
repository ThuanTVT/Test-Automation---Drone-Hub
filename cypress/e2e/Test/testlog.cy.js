describe('LogFileAnalystAndReturnSuccessfullyAnalysic', () => {
    it('LogFileAnalystAndReturnSuccessfullyAnalysic', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
      //1. Flight Information
      let condition = false;
      for (let index = 0; index <= 9; index += 1) {
          cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).then(($temp) => {
          if ($temp.attr('style').includes('background-color: rgb(55, 205, 215)')){
            console.log(index);
            condition = true;
            cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
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
          cy.wait(7000)
          //5. Expected Result
          cy.get('.grid > :nth-child(2) > .MuiTypography-root').should('have.text', 'Đã hoàn thành')
          cy.wait(7000)
          cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
          condition = true
          if (cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).contains('background-color: rgb(55, 205, 215)').click());
          cy.wait(500)
          {
            return
          }
          // cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
          // cy.wait(500)
          //   if  (cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).includes('background-color: rgb(55, 205, 215)')){
          //   return
          //   }
            
          
            // cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
            // cy.wait(500)
            // if (cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click().includes('background-color: rgb(55, 205, 215)')){
            //   return
            // }
             
           
          }
          
        // if (index == 9 && !condition) {
        //   index = 0
        //   cy.wait(5000)
        //   cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
        // }

      })
        if (condition) break
      }
    })
  })
