//var difference = document.getElementById('difference')
var minuend, subtrahend, difference;
var munuendlist, subtrahendlist;

function handleDDFile(file){
    var li = $('<li>').appendTo(minuendlist)
    var a = document.createElement('a')
    a.href = 'http://example.com'
    console.log(file)
}

function run(){
    minuend = $('#minuend')
    subtrahend = $('#subtrahend')
    difference = $('#difference')

    difference.on('click', ()=> alert(100))
    
    minuendlist = $('#minuendlist')
    li = $('<li>').appendTo(minuendlist)
    $('<a>').text('aaaa').attr('href','http://example.com').appendTo(li)
    //li.remove();

    // Drag&Dropされたファイルの処理
    //minuend.on("dragover", e => { return false } )
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
	else {
	    var url = dt.getData("URL")
	    a.text(url)
	    a.attr('href',url)
	}
    })
    
    $('body').bind("dragover", function(e){
	return false;
    }).bind("dragend", function(e){
	return false;
    }).bind("drop", function(e){
	e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制
    })
}
