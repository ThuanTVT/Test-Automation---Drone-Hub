describe('TC_ResearchFlightIdAndReturnSuccessfullyResearched', () => {
    it('TC_ResearchFlightIdAndReturnSuccessfullyResearched', () => {
        cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 1000;
          cy.wait(sleeptimes)
          //1. Research Flight Id 947
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('947')
          cy.wait(sleeptimes)
          //2. Expected Result
          cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Mã chuyến bay')
          cy.wait(sleeptimes)
          cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').should('have.text', '947')
          cy.wait(sleeptimes)
          //3. Flight ID 923
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('923')
          cy.wait(sleeptimes)
          //4. Expected Result
          cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Mã chuyến bay')
          cy.wait(sleeptimes)
          cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').should('have.text', '923')
          cy.wait(sleeptimes)
          //5. Flight ID 924
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('924')
          cy.wait(sleeptimes)
          //6. Expected Result
          cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Mã chuyến bay')
          cy.wait(sleeptimes)
          cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').should('have.text', '924')
          cy.wait(sleeptimes)
          //7. Flight ID 890
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('887')
          cy.wait(sleeptimes)
          //8. Expected Result
          cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Mã chuyến bay')
          cy.wait(sleeptimes)
          cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(3)').should('have.text', '887')
          cy.wait(sleeptimes)
          //9. Flight ID 519
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('526')
          cy.wait(sleeptimes)
          //10. Expected Result
          cy.get('.MuiTableRow-root > :nth-child(3) > .MuiButtonBase-root').should('have.text', 'Mã chuyến bay')
          cy.wait(sleeptimes)
          cy.get('.MuiTableBody-root > :nth-child(1) > :nth-child(3)').should('have.text', '526')
          cy.wait(sleeptimes)
          //11. Flight ID Error
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('2711')
          cy.wait(sleeptimes)
          //12. Expected Result
          cy.get('.ml-16 > .flex').should('have.text', 'Không có dữ liệu log file')
          cy.wait(sleeptimes)
          //13. Flight ID Error
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').clear()
          cy.wait(sleeptimes)
          cy.get('.my-8 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type(2737)
          cy.wait(sleeptimes)
          //14. Expected Result: No Data
          cy.get('.ml-16 > .flex').should('have.text', 'Không có dữ liệu log file')
          cy.wait(sleeptimes)
        })
    })      