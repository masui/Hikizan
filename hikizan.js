let minuend, subtrahend, difference

function run () {
  minuend = $('#minuend') // 減算されるデータのtextarea
  subtrahend = $('#subtrahend') // 減算するデータのtextarea
  difference = $('#difference') // 減算結果(差分)を表示するtextarea

  // 差分領域をクリックすると差分計算してリストを表示する
  difference.on('click', () => {
    $('#difference').css('background-color', '#eee')
    const a = {}
    TinySegmenter(minuend.val()).forEach(word => {
      a[word] = 1
    })
    TinySegmenter(subtrahend.val()).forEach(word => {
      delete a[word]
    })
    delete a['*']
    delete a[' ']
    delete a['\n']
    const results = Object.keys(a)
    difference.val(results.join(', '))
    $('#difference').css('background-color', '#fff')
  })
}

$(function () {
  run()
})
