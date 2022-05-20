//var difference = document.getElementById('difference')
var minuend, subtrahend, difference;

function run(){
    minuend = document.querySelector('#minuend')
    subtrahend = document.querySelector('#subtrahend')
    difference = document.querySelector('#difference')

    difference.addEventListener('click',function(){
	alert(100)
    })
    
    var minuendlist = document.getElementById('minuendlist')
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.href = 'http://example.com'
    a.innerHTML = "aaaa"
    li.appendChild(a)
    minuendlist.appendChild(li);
    //li.remove();
}
