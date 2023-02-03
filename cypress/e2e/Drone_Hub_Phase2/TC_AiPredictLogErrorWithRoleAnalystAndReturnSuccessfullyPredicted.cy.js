describe('TC_AiPredictLogErrorWithRoleAnalystAndReturnSuccessfullyPredicted', () => {
    it('TC_AiPredictLogErrorWithRoleAnalystAndReturnSuccessfullyPredicted', () => {
        cy.visit('http://172.25.254.0:10103/login')
          cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          const sleeptimes = 2500;
          cy.wait(sleeptimes)
     //1. Flight Information 
     cy.get('.MuiTableBody-root > :nth-child(2) > :nth-child(1)').click()
     cy.wait(sleeptimes)
     //2. Open Log Files Result
     cy.get('.justify-end > :nth-child(2)').click()
     cy.wait(sleeptimes)
     //3. Open AI Predict Log Error
     cy.get('#simple-tab-1').click()
     cy.wait(sleeptimes)
     //4. Expected Result
     cy.get('.muiltr-1161qt5 > .MuiBox-root > .MuiTypography-root').should('have.text', 'Thông tin chung')
     cy.wait(sleeptimes)
     cy.get('.MuiGrid-container > :nth-child(1) > .MuiBox-root > .MuiButton-root').should('have.text', 'Đồ thị ATT')
     cy.wait(sleeptimes)
     cy.get(':nth-child(2) > .MuiBox-root > .MuiButton-root').should('have.text', 'Đồ thị BATT')
     cy.wait(sleeptimes)
     cy.get(':nth-child(3) > .MuiBox-root > .MuiButton-root').should('have.text', 'Đồ thị RCOUT')
     cy.wait(sleeptimes)
     cy.get(':nth-child(4) > .MuiBox-root > .MuiButton-root').should('have.text', 'Đồ thị RCIN')
     cy.wait(sleeptimes)
     cy.get('.muiltr-hshm0p > .MuiButton-root').should('have.text', 'Đóng')
     cy.wait(sleeptimes)
     //5. Choose ATT Graph 
     cy.get('.MuiGrid-container > :nth-child(1) > .MuiBox-root > .MuiButton-root').click()
     cy.wait(sleeptimes)
     //6. Expected Result: DesRoll, Roll, DesPitch, Pitch, DesYaw, Yaw
     cy.get('.muiltr-xi606m > .MuiButton-root').should('have.text', 'Đồ thị ATT')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').should('have.text', 'DesRoll')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').should('have.text', 'Roll')
     cy.wait(sleeptimes)
     cy.get('.muiltr-t5q34v > .MuiTypography-root').should('have.text', 'DesPitch')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(4) > .MuiTypography-root').should('have.text', 'Pitch')
     cy.wait(sleeptimes)
     cy.get('.MuiFormGroup-root > :nth-child(5) > .MuiTypography-root').should('have.text', 'DesYaw')
     cy.wait(sleeptimes)
     cy.get('.MuiFormGroup-root > :nth-child(6) > .MuiTypography-root').should('have.text', 'Yaw')
     cy.wait(sleeptimes)
     //7. Close ATT Graph
     cy.get('.muiltr-10klw3m > .flex > .MuiButtonBase-root').click()
     cy.wait(1000)
     //8. Choose BATT Graph
     cy.get(':nth-child(2) > .MuiBox-root > .MuiButton-root').click()
     cy.wait(sleeptimes)
     //9. Expected Result
     cy.get('.muiltr-xi606m > .MuiButton-root').should('have.text', 'Đồ thị BATT')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').should('have.text', 'RemPct')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').should('have.text', 'Volt')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(3) > .MuiTypography-root').should('have.text', 'Curr')
     cy.wait(sleeptimes)
     //10. Close  BATT Graph
     cy.get('.muiltr-10klw3m > .flex > .MuiButtonBase-root').click()
     cy.wait(1000)
     //11. Choose RCOUT Graph
     cy.get(':nth-child(3) > .MuiBox-root > .MuiButton-root').click()
     cy.wait(sleeptimes)
     //12. Expected Result: C1--> C6
     cy.get('.muiltr-xi606m > .MuiButton-root').should('have.text', 'Đồ thị RCOUT')
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').should('have.text', 'C1')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').should('have.text', 'C2')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(3) > .MuiTypography-root').should('have.text', 'C3')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(4) > .MuiTypography-root').should('have.text', 'C4')
     cy.wait(sleeptimes)
     cy.get('.MuiFormGroup-root > :nth-child(5) > .MuiTypography-root').should('have.text', 'C5')
     cy.wait(sleeptimes)
     cy.get('.MuiFormGroup-root > :nth-child(6) > .MuiTypography-root').should('have.text', 'C6')
     cy.wait(sleeptimes)
     //13. Close RCOUT Graph
     cy.get('.muiltr-10klw3m > .flex > .MuiButtonBase-root').click()
     cy.wait(1000)
     //14. Choose RCIN Graph
     cy.get(':nth-child(4) > .MuiBox-root > .MuiButton-root').click()
     cy.wait(sleeptimes)
     //15. Expected Result: C1-->C4
     cy.get('.muiltr-xi606m > .MuiButton-root').should('have.text', 'Đồ thị RCIN')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').should('have.text', 'C1')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').should('have.text', 'C2')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(3) > .MuiTypography-root').should('have.text', 'C3')
     cy.wait(sleeptimes)
     cy.get('form > .MuiFormControl-root > .MuiFormGroup-root > :nth-child(4) > .MuiTypography-root').should('have.text', 'C4')
     cy.wait(sleeptimes)
     //16. Close RCIN Graph
     cy.get('.muiltr-10klw3m > .flex > .MuiButtonBase-root').click()
     cy.wait(1000)
     //17. Expected Result: Show General information
     cy.get('.muiltr-1161qt5 > .MuiBox-root > .MuiTypography-root').should('have.text', 'Thông tin chung')
     cy.wait(sleeptimes)
     //18. Close AI Predict Log Error
     cy.get('.muiltr-hshm0p > .MuiButton-root').click()
     cy.wait(1000)
     //19. Expected Result Show Status
     cy.get('.MuiTableCell-paddingCheckbox').should('have.text', 'Trạng thái')
     cy.wait(sleeptimes)

    })
 })               