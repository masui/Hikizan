//
// Hikizan.orgのテスト
//

let gicdata = require('../../data/data.js')


const URL = 'https://hikizan.org/'
// const URL = 'http://localhost/Hikizan/'
   
describe('Hikizan.orgのテスト', () => {

    //let fs = require ('fs')
    //let gictext = fs.readFileSync('/Users/masui/Hikizan/data/Gictionary.txt')
    
    it('Hikizan.orgにアクセス', () => {
        cy.visit(URL) //hikizan.orgサイトに移動

        //cy.fixture('../../data/Gictionary.txt','utf8').as('gictext')
	//let gictext = cy.readFile('/Users/masui/Hikizan/data/test.txt')
	//let gictext = cy.readFile('data/test.txt')

        /*
        var data = cy.request('/data/test.txt').its('body')
        console.log(data)
        data = "aaaaaaaaawsfweifoawefiawoefijawfiawejafajfawife"
        */
        /*	
        for(var i=0;i<2;i++){
          data += data
        }
        */
        
        cy.get('#minuend')
	        .should('have.value', '引かれるテキストをここに書いてみてください。') // デフォルト値をチェック
	        .clear()
	        .type('増井の変換')
	        .should('have.value', '増井の変換') // 手入力をチェック
        cy.get('#subtrahend')
	        .should('have.value', 'ここに引くテキストを書いてください。') // デフォルト値をチェック
	        .clear()
	        .type('増井の')
	        .should('have.value', '増井の') // 手入力をチェック
        
        cy.get('#difference')
            .click()
	        .should('have.value', '変換')
        cy.get('#subtrahend')
	        .clear()
	        .type('変換の')
	        .should('have.value', '変換の') // 手入力をチェック

        /*
	cy.readFile('data/test.txt').then((str) => {
	    cy.get('#subtrahend')
		.invoke('val', str)
		.should('have.value', str)
            cy.get('#subtrahend')
	        .clear()
	        .type('xyz門戸厄神')
            cy.get('#difference')
		.click()
	        .should('have.value', 'xyz')
	})
	*/

	var data = '増井の'
	cy.get('#subtrahend')
	      .invoke('val', data)
	      .should('have.value', data)
        cy.get('#difference')
            .click()
	        .should('have.value', '変換')


        cy.get('#minuend')
	    .clear()
	    .type('増井xyzミッション')
	cy.get('#subtrahend')
	    .invoke('val', gicdata.gictionary)
	    .should('have.value', gicdata.gictionary)

        cy.get('#difference')
            .click()
            .should('have.value', 'xyz')

	    
	    /*
	    cy.get('#subtrahend')
	      .invoke('val', '増井の')
	      .should('have.value', '増井の')
        cy.get('#difference')
            .click()
	        .should('have.value', '変換')
	    */
	    /*
	    for(var i=0;i<100; i++){
	      c.type('abcdefg\n')
	      c.type('abcdekkkk\n')
	      c.type('abcdefgfsdjaia\n')
	      c.type('abcdefg\n')
	      c.type('abcdefg')
	    }
	    */

       /*
        cy.get('#difference').click()
        cy.get('#difference')
	        .should('have.value', '増井')
	    */
    })
})
