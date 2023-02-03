describe('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
  it('CreatReportWithRoleUserAndReturnSuccessfullyGeneratedReport', () => {
    cy.visit('http://172.25.254.0:10103/login')
    cy.get('input[type = "text"]').type('huynhthehainam.mismart@gmail.com')
        cy.get('input[type = "password"]').type('123456')
        cy.get('.MuiButton-contained').click()
        const sleeptimes = 3000 ;
        cy.wait(sleeptimes)
    // Open Log Files Management
    cy.get('.flex-1 > .MuiButtonBase-root').click()
    cy.wait(sleeptimes)
    cy.get('[href="/apps/log-files"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(sleeptimes)
    // Netx page
    cy.get('[aria-label="Go to next page"]').click()
    cy.wait(500)
    // Flight Information///////////////////////////////////////////////////////////////////////////////
    let condition = false;
    for (let index = 0; index <= 9; index += 1) {
       cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).then(($temp) => {
        console.log($temp.attr('style'));
        if ($temp.attr('style').includes('background-color: rgb(122, 122, 122)')){
        
          condition = true;
          cy.get(`[index="${index}"] > :nth-child(1) > .MuiButtonBase-root > div`).click()
          cy.wait(sleeptimes)
          // Creat Report
          cy.get('.justify-end > .MuiButton-root').click()
          cy.wait(sleeptimes)
          // Flight Status Report
          cy.get('#pilotDescription').type('demo')
          cy.wait(sleeptimes)
          cy.get(':nth-child(4) > .MuiOutlinedInput-root > [rows="3"]').type('demo')
          cy.wait(sleeptimes)
          cy.get('#pilot').type('demo')
          cy.wait(sleeptimes)
          cy.get('.MuiGrid-grid-xs-8 > .MuiBox-root > .MuiFormControl-root > .MuiOutlinedInput-root > [rows="4"]').type('demo')
          cy.wait(sleeptimes)
          // Save Report
          cy.get('.MuiDialogActions-root > .MuiButton-root').click()
          cy.wait(7000)
           // Expected Result: Created Successfully
           cy.get('.grid > :nth-child(4) > .MuiTypography-root').should('have.text', 'Cảnh báo')
          cy.wait(sleeptimes)
          

      }
      
       })
    }
  })
})
