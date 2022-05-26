let minuend, subtrahend, difference

function run () {
  minuend = $('#minuend') // 減算されるデータのtextarea
  subtrahend = $('#subtrahend') // 減算するデータのtextarea
  difference = $('#difference') // 減算結果(差分)を表示するtextarea

  // 差分領域をクリックすると差分計算してリストを表示する
  difference.on('click', () => {
    $('#difference').css('background-color', '#eee')
    const a = {}
    // pitecan.comやlocalhostでは以下の方法で動くのに、GitHub Pagesのhikizan.orgでは何故か失敗する
    // kuromoji.builder({ dicPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict" }).build(function (error, tokenizer) {
    // 仕方がないのでdictファイルもサイトに置いたらhikizan.orgで動いた 2022/5/23 11:10
    kuromoji.builder({ dicPath: './dict' }).build(function (error, tokenizer) {
      console.log(error) // ESLint対策
      let tokens = tokenizer.tokenize(minuend.val())
      tokens.forEach(word => {
        a[word.surface_form] = 1
      })

      // 辞書を引算するような場合にkuromojiを適用しないことにする
      let useKuromoji = false
      const subdata = subtrahend.val()
      if (subdata.length < 10000) {
        useKuromoji = true
      } else {
        const lines = subdata.split('\n')
        lines.forEach(line => {
          const words = line.split(/\s+/)
          words.forEach(word => {
            if (word.length > 10) {
              useKuromoji = true
            }
            delete a[word]
          })
        })
      }

      if (useKuromoji) {
        tokens = tokenizer.tokenize(subdata)
        tokens.forEach(word => {
          delete a[word.surface_form]
        })
      }
      delete a['*']
      delete a[' ']
      delete a['\n']
      const results = Object.keys(a)
      difference.val(results.join(', '))
      $('#difference').css('background-color', '#fff')
    })
  })
}

$(function () {
  run()
})
