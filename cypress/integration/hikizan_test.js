//
// Hikizan.orgのテスト
//

const gictionary = require('../../data/gictionary.js')

const URL = 'https://hikizan.org/'
// const URL = 'http://localhost/Hikizan/'

describe('Hikizan.orgのテスト', () => {
  it('Hikizan.orgにアクセス', () => {
    cy.visit(URL) // hikizan.orgサイトに移動

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

    cy.get('#minuend')
      .clear()
      .type('増井 xyzミッション')
    cy.get('#subtrahend')
      .invoke('val', gictionary.data) // テキストをペースト
      .should('have.value', gictionary.data)
    cy.get('#difference')
      .click()
      .should('have.value', 'xyz')
  })
})
