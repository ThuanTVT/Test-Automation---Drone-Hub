describe('LoginAndReturnLoggedInSuccessfully', () => {
    it('LoginAndReturnLoggedInSuccessfully', () => {
    // 1. Verify if a user cannot login with an invalid username and an invalid password
      cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('abc@gmail.com')
          cy.get('input[type = "password"]').type('1234567')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
    // Expected Result
    cy.get('.MuiFormHelperText-root').should('have.text','Trường Email không hợp lệ')
    cy.wait(sleeptimes)
    // 2. Verify if a user cannot login with a valid username and an invalid password
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
      cy.get('input[type = "password"]').type('12345')
      cy.get('.MuiButton-contained').click()
      cy.wait(sleeptimes)
    // Expected Result
    cy.get('.MuiFormHelperText-root').should('have.text', 'Trường Email không hợp lệ')
    cy.wait(sleeptimes)
    // 3. Verify if a user cannot login with an invalid username and a valid password
    cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('abc@gmail.com')
          cy.get('input[type = "password"]').type('1234566')
          cy.get('.MuiButton-contained').click()
          cy.wait(sleeptimes)
    // Expected Result
    cy.get('.MuiFormHelperText-root').should('have.text', 'Trường Email không hợp lệ') 
    cy.wait(sleeptimes) 
    // 4. Verify if a user cannot login with a valid username and a blank password
    cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('abc@gmail.com')
          cy.get('input[type = "password"]').type(' ')
          cy.get('.MuiButton-contained').click()
          cy.wait(sleeptimes)
    // Expected Result
    cy.get('.MuiFormHelperText-root').should('have.text', 'The Password field is required.')
    cy.wait(sleeptimes)
     // 5. Verify if a user can login with a valid username and a valid password
     cy.visit('http://172.25.254.0:10103/login')
     cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
     cy.get('input[type = "password"]').type('123456')
     cy.get('.MuiButton-contained').click()
     cy.wait(sleeptimes)
    // Expected Result: Login Successfully
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Dữ liệu bay mapping')
    cy.wait(sleeptimes)
    cy.get('.px-16 > :nth-child(2) > .MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Dữ liệu rải hạt giống')
    cy.wait(sleeptimes)
    cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiTypography-root').should('have.text', 'Dữ liệu phun thuốc')
    cy.wait(sleeptimes)

 })
})           