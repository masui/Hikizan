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

    let s = minuend.val()
    // 数字の並びをTinySegmenterから除く
    while (s.match(/\d+/)) {
      s = s.replace(/\d+/, (w) => {
        a[w] = 1
        return ' '
      })
    }
    for (const word of segmenter.segment(s)) {
      a[word] = 1
    }

    s = subtrahend.val()
    while (s.match(/\d+/)) {
      s = s.replace(/\d+/, (w) => {
        delete a[w]
        return ' '
      })
    }
    for (const word of segmenter.segment(s)) {
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
