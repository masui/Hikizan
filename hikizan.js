//var difference = document.getElementById('difference')
var minuend, subtrahend, difference;
var munuendlist, subtrahendlist;

function runx(){
    minuend = document.querySelector('#minuend')
    subtrahend = document.querySelector('#subtrahend')
    difference = document.querySelector('#difference')

    difference.addEventListener('click',function(){
	alert(100)
    })
    
    minuend_list = document.getElementById('minuendlist')
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = 'http://example.com'
    a.innerHTML = "aaaa"
    li.appendChild(a)
    minuendlist.appendChild(li);
    //li.remove();
}

function handleDDFile(file){
    //alert(file.name)
    //console.log(file)

    var li = $('<li>').appendTo(minuendlist)
    var a = document.createElement('a')
    a.href = 'http://example.com'
    a.innerHTML = file.name
    li.append(a)
    minuendlist.append(li);
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
    minuend.bind("dragover", (e) => {
	return false;
    }).bind("dragend", (e) => {
	return false;
    }).bind("drop", (e) => {
	e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制
	files = e.originalEvent.dataTransfer.files;
	handleDDFile(files[0]);
    })
    
    $('body').bind("dragover", function(e){
	return false;
    }).bind("dragend", function(e){
	return false;
    }).bind("drop", function(e){
	e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制
    })
}
