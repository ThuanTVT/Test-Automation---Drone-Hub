
describe('DeviceModelsManagementWithRoleAdminAndReturnSuccessfullyResult', () => {
    it('DeviceModelsManagementWithRoleAdminAndReturnSuccessfullyResult', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 3000;
          cy.wait(sleeptimes)
      //1. Open Devive Models Management
      cy.get('.flex-1 > .MuiButtonBase-root').click()
      cy.wait(sleeptimes)
      cy.get('[href="/apps/device-models"]').click()
      cy.wait(sleeptimes)
      //2. Add Device Model
      cy.get('.MuiPaper-root > .flex > .MuiButton-root').click()
      cy.wait(sleeptimes)
      //3. Name of Model
      cy.get('.mb-16').click()
      cy.wait(sleeptimes)
      //4. Device Model Type
      cy.get('.mb-16 > .MuiInput-root > .MuiInput-input').type('demotest')
      cy.wait(sleeptimes)
      cy.get('#create-device-model-type').click()
      cy.wait(sleeptimes)
      cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
      cy.wait(sleeptimes)
      //5. Save Device Model
      cy.get('.MuiButton-textSuccess').click()
      cy.wait(5000)
      //6. Expected Result: Successful create device model
      cy.get('.SnackbarContent-root > .MuiPaper-root > .MuiTypography-root').should('have.text', 'Thêm dòng máy bay thành công!')
      cy.wait(sleeptimes)
      //7. Params setting
      cy.get(':nth-child(5) > :nth-child(6) > :nth-child(2)').click()
      cy.wait(sleeptimes)
      //8. Add params device model
      cy.get('.MuiPaper-root > .flex > .MuiButton-root').click()
      cy.wait(sleeptimes)
      //9. Input data
      cy.get('.flex-col > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('testdemo')
      cy.wait(sleeptimes)
      cy.get('.flex-col > :nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('testdemo')
      cy.wait(sleeptimes)
      cy.get('.flex-col > :nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('0.2')
      cy.wait(sleeptimes)
      cy.get(':nth-child(5) > :nth-child(1) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('0.2')
      cy.wait(sleeptimes)
      cy.get(':nth-child(5) > :nth-child(2) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('0.4')
      cy.wait(sleeptimes)
      cy.get(':nth-child(5) > :nth-child(3) > .MuiOutlinedInput-root > .MuiOutlinedInput-input').type('0.6')
      cy.wait(sleeptimes)
      //10. Choose Default
      cy.get(':nth-child(1) > .justify-between > .MuiBox-root > .MuiButton-root').click()
      cy.wait(sleeptimes)
      cy.get(':nth-child(2) > .justify-between > .MuiBox-root > .MuiButton-root').click()
      cy.wait(sleeptimes)
      cy.get(':nth-child(3) > .justify-between > .MuiBox-root > .MuiButton-root').click()
      cy.wait(sleeptimes)
      //11. Add params setting
      cy.get('.MuiButton-textSuccess').click()
      cy.wait(sleeptimes)
      //12. Expected Result: Add Params successful
      cy.get('.SnackbarContent-root > .MuiPaper-root > .MuiTypography-root').should('have.text', 'Thêm thành công')
      cy.wait(sleeptimes)

    })
})