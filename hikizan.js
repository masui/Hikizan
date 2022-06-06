let minuend, subtrahend, difference

function run () {
  minuend = $('#minuend') // 減算されるデータのtextarea
  subtrahend = $('#subtrahend') // 減算するデータのtextarea
  difference = $('#difference') // 減算結果(差分)を表示するtextarea

  // 差分領域をクリックすると差分計算してリストを表示する
  difference.on('click', () => {
    $('#difference').css('background-color', '#eee')
    const a = {}
    const segmenter = new TinySegmenter()
    for (const word of segmenter.segment(minuend.val())) {
      a[word] = 1
    }
    for (const word of segmenter.segment(subtrahend.val())) {
      delete a[word]
    }
    delete a['*']
    delete a[' ']
    delete a['\n']
    delete a['「']
    delete a['」']
    const results = Object.keys(a)
    difference.val(results.join(', '))
    $('#difference').css('background-color', '#fff')
  })
}

$(function () {
  run()
})
