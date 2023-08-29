var minuend, subtrahend, difference, intersection

function diff(){
    const a = {}
    const b = {} // 共通部分
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
	if(a[w]) b[w] = 1
        delete a[w]
    }
    delete a['*']
    delete a[' ']
    delete a['\n']
    delete a['「']
    delete a['」']
    //let results = Object.keys(a)
    difference.val(Object.keys(a).join(', '))
    delete b['*']
    delete b[' ']
    delete b['\n']
    delete b['「']
    delete b['」']
    //results = Object.keys(b)
    intersection.val(Object.keys(b).join(', '))
}

function run () {
    minuend = $('#minuend') // 減算されるデータのtextarea
    subtrahend = $('#subtrahend') // 減算するデータのtextarea
    difference = $('#difference') // 減算結果(差分)を表示するtextarea
    intersection = $('#intersection') // 共通部分を表示するtextarea
    
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
