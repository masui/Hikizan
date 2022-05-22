//$ = require('jquery')
//process = require('process') // 何故かこれがないとエラーになる
//kuromoji = require('kuromoji')

// kuromojiテスト
//kuromoji.builder({ dicPath: "dict/" }).build(function (error, tokenizer) {
//    var path = tokenizer.tokenize("私の名前は増井です");
//    console.log(path);
//});
 
var minuend, subtrahend, difference;
var munuendlist, subtrahendlist;

function run(){
    minuend = $('#minuend')
    subtrahend = $('#subtrahend')
    difference = $('#difference')

    difference.on('click', ()=> {
        //var s = minuend.val().split(/\s/)
        var a = {}
        kuromoji.builder({ dicPath: "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/" }).build(function (error, tokenizer) {
           var path = tokenizer.tokenize(minuend.val());
           console.log(path)
           for(var i=0; i < path.length; i++){
               a[path[i].surface_form] = 1
           }
           path = tokenizer.tokenize(subtrahend.val());
           for(var i=0; i < path.length; i++){
               delete a[path[i].surface_form]
           }
           delete a['*']
           delete a[' ']
           delete a['\n']
           var words = Object.keys(a)
           difference.val(words.join(', '))
        });
    });
    
    
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
}
