describe('DownloadReportWithRoleLogFileAnalystAndReturnSuccessfullyDownloaded', () => {
    it('DownloadReportWithRoleUserAndReturnSuccessfullyDownloaded', () => {
      // Download with role: Log Files Analyst
    cy.visit('http://172.25.254.0:10103/login')
    cy.get('input[type = "text"]').type('loganalyst@yopmail.com')
        cy.get('input[type = "password"]').type('123456')
        cy.get('.MuiButton-contained').click()
        const sleeptimes = 2500;
        cy.wait(sleeptimes)
         // Open Log Files Management
         cy.get('.MuiTableBody-root > :nth-child(4) > :nth-child(1)').click()
         cy.wait(sleeptimes)
    // Download Report
    cy.get('[style="background-color: rgb(214, 214, 214); font-size: 12px; font-weight: 700; color: rgb(85, 85, 85); line-height: 26px;"]').click()
    cy.wait(20000)
    // Expected Result: Downloaded Successfully
   
 })
}) 