var minuend, subtrahend, difference

function diff(){
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
    for (const w of segmenter.segment(s)) {
        a[w] = 1
    }
    
    s = subtrahend.val()
    while (s.match(/\d+/)) {
        s = s.replace(/\d+/, (w) => {
            delete a[w]
            return ' '
        })
    }
    for (const w of segmenter.segment(s)) {
        delete a[w]
    }
    delete a['*']
    delete a[' ']
    delete a['\n']
    delete a['「']
    delete a['」']
    const results = Object.keys(a)
    difference.val(results.join(', '))
}

function run () {
    minuend = $('#minuend') // 減算されるデータのtextarea
    subtrahend = $('#subtrahend') // 減算するデータのtextarea
    difference = $('#difference') // 減算結果(差分)を表示するtextarea
    
    $('#exchange').on('click',function(){
        let v = minuend.val()
        minuend.val(subtrahend.val())
        subtrahend.val(v)
        diff()
    })
    
    minuend.change(diff)
    subtrahend.change(diff)
    
    // 差分領域をクリックすると差分計算してリストを表示する
    difference.on('click', () => {
        difference.css('background-color', '#eee')
        diff()
        difference.css('background-color', '#fff')
    })

    diff()
}

$(function () {
    run()
})
