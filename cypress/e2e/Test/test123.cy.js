
it("Visiting Google",function(){
    var webUrl = 'https://html5test.com/'
    cy.visit(webUrl)
    var iterator = 1
    while(iterator < 5)
    {
        const $select_element = cy.get('h1 > em')
        if($select_element.contains('abcd'))
        {
            cy.log("string found")
        }
        else
        {
            cy.log('string not found')
            break
        }
        iterator += 1
    }
    })