describe('DownloadReportWithRoleAdminAndReturnSuccessfullyDownloaded', () => {
    it('DownloadReportWithRoleAdminAndReturnSuccessfullyDownloaded', () => {
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
      // Open report
      cy.get('.MuiTableBody-root > :nth-child(4) > :nth-child(1)').click()
      cy.wait(3000)
      // Download report
      cy.get('[style="background-color: rgb(214, 214, 214); font-size: 12px; font-weight: 700; color: rgb(85, 85, 85); line-height: 26px;"]').click()
      cy.wait(20000)
      // Expected Result: Downloaded Successfully

    })
})  