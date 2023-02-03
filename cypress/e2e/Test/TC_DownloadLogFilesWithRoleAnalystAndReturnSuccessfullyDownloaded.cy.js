describe('TC_DOWNLOAD LOG FILES - FLIGHT DURATION', () => {
    it('TC_DOWNLOAD LOG FILES - FLIGHT DURATION', () => {
      cy.visit('http://172.25.254.0:10103/login')
      cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
          cy.get('input[type = "password"]').type('123456')
          cy.get('.MuiButton-contained').click()
          cy.wait(3000)
    // Filter time
    cy.get('.muiltr-17vdz66 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiOutlinedInput-input').click()
    cy.wait(3000)
    cy.get(':nth-child(1) > .muiltr-f7iyql > .MuiIconButton-edgeEnd').click()
    cy.wait(500)
    // Flight Duration
    cy.get(':nth-child(1) > .PrivatePickersSlideTransition-root > .muiltr-i6bazn > :nth-child(3) > :nth-child(3) > .MuiDateRangePickerDay-rangeIntervalPreview > .MuiButtonBase-root').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .PrivatePickersSlideTransition-root > .muiltr-i6bazn > :nth-child(3) > :nth-child(6) > .MuiDateRangePickerDay-rangeIntervalPreview > .MuiButtonBase-root').click()
    cy.wait(2000)
    // Aircraft
    cy.get('#aircraft-name-select').click()
    cy.wait(2000)
    cy.get('[data-value="VS30"]').click()
    cy.wait(2000)
    // Drone ID
    cy.get('#demo-simple-select').click()
    cy.wait(2000)
    cy.get('[data-value="8"]').click()
    cy.wait(2000)
    // Error Group
    cy.get('#customer-name-select').click()
    cy.wait(2000)
    cy.get('[data-value="1"]').click()
    cy.wait(2000)
    // Open Report
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(1)').click()
    cy.wait(2000)
    // Download File Log
    cy.get('.justify-center > [style="background-color: rgb(100, 120, 106); font-size: 12px; font-weight: 700; color: white; line-height: 26px;"]').click()
    cy.wait(2000)
   
    })
})        