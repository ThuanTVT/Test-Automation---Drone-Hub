
describe('AircraftManagementWithRoleAdminAndReturnCreatedDeviceSuccessfully', () => {
    it('AicraftManagementWithRoleAdminAndReturnCreatedDeviceSuccessfully', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
      //1. Open Aircraft Managemnt
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(sleeptimes)
      cy.get('[href="/apps/maintainer-device"]').click()
      cy.wait(sleeptimes)
      //2. Create device
      cy.get('.MuiPaper-root > .flex > .MuiButton-root').click()
      cy.wait(sleeptimes)
      //3. Input data
      cy.get('.flex > .MuiTextField-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('demotest')
      cy.wait(sleeptimes)
      cy.get('#create-device-models').click()
      cy.wait(sleeptimes)
      cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
      cy.wait(sleeptimes)
      cy.get('#create-execution-company').click()
      cy.wait(sleeptimes)
      cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
      cy.wait(sleeptimes)
      cy.get('#create-customer').click()
      cy.wait(sleeptimes)
      cy.get('[data-value="12"]').click()
      cy.wait(sleeptimes)
      //4. Save create device
      cy.get('.MuiDialogActions-root > .MuiButton-textSuccess').click()
      cy.wait(sleeptimes)
      //5. Expected Result Created Successfully
      cy.get('.SnackbarContent-root > .MuiPaper-root > .MuiTypography-root').should('have.text', 'Tạo thành công')
      cy.wait(sleeptimes)
    //   //6. next page
    //   cy.get('.MuiTablePagination-actions > [tabindex="0"]').click()
    //   cy.wait(sleeptimes)
    //   // 2.Edit 
    //   cy.get(':nth-child(4) > :nth-child(8) > :nth-child(1)').click()
    //   cy.wait(sleeptimes)
    //   // Edit company
    //   cy.get('#create-execution-company').click()
    //   cy.wait(sleeptimes)
    //   cy.get('[data-value="2"]').click()
    //   cy.wait(sleeptimes)
    //   // 
    //   cy.get('#create-customer').click()
    //   cy.wait(sleeptimes)
    //   cy.get('[data-value="4"]').click()
    //   cy.wait(sleeptimes)
    //   // Save Edit
    //   cy.get('.MuiDialogActions-root > .MuiButton-textSuccess').click()
    //   cy.wait(sleeptimes)
    //    // Expected Result updated successfully
    //    cy.get('.SnackbarContent-root > .MuiPaper-root > .MuiTypography-root').should('have.text', 'Cập nhật thành công')
    //    cy.wait(sleeptimes)
    //    // 3.Get Authenticaton Token
    //    cy.get(':nth-child(19) > :nth-child(8) > :nth-child(2)').click()
    //    cy.wait(sleeptimes)
    //    // Copy Token
    //    cy.get('.MuiDialogActions-root > .MuiButton-textSuccess').click()
    //    cy.wait(sleeptimes)
    //    // Expected Result copy token
    })
})