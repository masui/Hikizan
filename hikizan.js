var minuend, subtrahend, difference;
var munuendlist, subtrahendlist;

function run(){
    minuend = $('#minuend')       // 減算されるデータのtextarea
    subtrahend = $('#subtrahend') // 減算するデータのtextarea
    difference = $('#difference') // 減算結果(差分)を表示するtextarea

    // 差分領域をクリックすると差分計算してリストを表示する
    difference.on('click', ()=> {
        $('#difference').css('background-color','#eee')
        var a = {}
        // pitecan.comやlocalhostでは以下の方法で動くのに、GitHub Pagesのhikizan.orgでは何故か失敗する
        // kuromoji.builder({ dicPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict" }).build(function (error, tokenizer) {
        // 仕方がないのでdictファイルもサイトに置いたらhikizan.orgで動いた 2022/5/23 11:10
        kuromoji.builder({ dicPath: "./dict" }).build(function (error, tokenizer) {
           var tokens = tokenizer.tokenize(minuend.val())
           tokens.forEach(word => {
               a[word.surface_form] = 1
           })

           // 辞書を引算するような場合にkuromojiを適用しないことにする
           var use_kuromoji = false
           var subdata = subtrahend.val()
           if(subdata.length < 10000){
               use_kuromoji = true
           }
           else {
               var lines = subdata.split("\n")
               lines.forEach(line => {
                   words = line.split(/\s+/)
                   words.forEach(word => {
                       if(word.length > 10){
                            use_kuromoji = true
                       }
                       delete a[word]
                   })
               })
           }
           
           if(use_kuromoji){
               tokens = tokenizer.tokenize(subdata)
               tokens.forEach(word => {
                   delete a[word.surface_form]
               })
           }
           delete a['*']
           delete a[' ']
           delete a['\n']
           var results = Object.keys(a)
           difference.val(results.join(', '))
           $('#difference').css('background-color','#fff')
        });
    });
    
    /*
    // URLやデータファイルをDrag&Dropで指定する予定 (未実装 2022/5/23)
    minuendlist = $('#minuendlist')
    li = $('<li>').appendTo(minuendlist)
    $('<a>').text('aaaa').attr('href','http://example.com').appendTo(li)
    //li.remove();

    // Drag&Dropされたファイルの処理
    //minuend.on("dragover", e => { return false } ) 不要っぽい
    //minuend.on("dragend", e => { return false; } )
    minuend.on("drop", e => {
	    e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制
	    //console.log(e.originalEvent.dataTransfer)
	    let dt = e.originalEvent.dataTransfer
	    let li = $('<li>').appendTo(minuendlist)
	    let a = $('<a>').appendTo(li)
	    a.attr('class','list')
	    if(dt.files[0]){ // ファイルのD&D
	        a.text(dt.files[0].name)
	        a.attr('href','http://example.com')
	    }
	    else { // URLのD&D
	        var url = dt.getData("URL")
	        a.text(url)
	        a.attr('href',url)
	    }
    })
    
    $('body').on("drop", function(e){
	    e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制
    })
    */
}

$(function() {
   run()
})
