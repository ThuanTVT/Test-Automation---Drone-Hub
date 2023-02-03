describe('ConfirmLogFileAnalystWithRoleAdminAndReturnSuccessfullyConfirmed', () => {
    it('ConfirmLogFileAnalystWithRoleAdminAndReturnSuccessfullyConfirmed', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          cy.wait(3000)
      // Open Log Files Management
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(3000)
      cy.get('[href="/apps/administrator-log-file"] > .MuiListItemText-root > .MuiTypography-root').click()
      cy.wait(3000)
      // Flight Information///////////////////////////////////////////////////////////////////////////////
      let condition = false;
      for (let index = 0; index <= 9; index += 1) {
         cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).then(($temp) => {
          if ($temp.attr('style').includes('background-color: rgb(55, 205, 215)')){
            console.log(index);
            condition = true;
            cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
            cy.wait(3000)
            // Result log file
      cy.get('.justify-end > :nth-child(2)').click()
      cy.wait(2000)
      // Confirm
      cy.get('.mr-12').click()
      cy.wait(20000)
      // Expect Result: Confirm successfully 
      cy.get('.grid > .items-center > .MuiTypography-root').should('have.text', 'Đã được duyệt')
      cy.wait(3000)
  
        }
        // else{
        //   cy.get('.MuiTablePagination-actions > [tabindex="0"]').click();
        //   cy.wait(500)
        // }
      
        
        
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
