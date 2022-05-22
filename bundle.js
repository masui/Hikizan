/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./hikizan.js ***!
  \********************/
eval("//$ = require('jquery')\n//process = require('process') // 何故かこれがないとエラーになる\n//kuromoji = require('kuromoji')\n\n// kuromojiテスト\n//kuromoji.builder({ dicPath: \"dict/\" }).build(function (error, tokenizer) {\n//    var path = tokenizer.tokenize(\"私の名前は増井です\");\n//    console.log(path);\n//});\n \nvar minuend, subtrahend, difference;\nvar munuendlist, subtrahendlist;\n\nfunction run(){\n    minuend = $('#minuend')\n    subtrahend = $('#subtrahend')\n    difference = $('#difference')\n\n    difference.on('click', ()=> alert(100))\n    \n    minuendlist = $('#minuendlist')\n    li = $('<li>').appendTo(minuendlist)\n    $('<a>').text('aaaa').attr('href','http://example.com').appendTo(li)\n    //li.remove();\n\n    // Drag&Dropされたファイルの処理\n    //minuend.on(\"dragover\", e => { return false } ) 不要っぽい\n    //minuend.on(\"dragend\", e => { return false; } )\n    minuend.on(\"drop\", e => {\n\t    e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制\n\t    //console.log(e.originalEvent.dataTransfer)\n\t    let dt = e.originalEvent.dataTransfer\n\t    let li = $('<li>').appendTo(minuendlist)\n\t    let a = $('<a>').appendTo(li)\n\t    a.attr('class','list')\n\t    if(dt.files[0]){ // ファイルのD&D\n\t        a.text(dt.files[0].name)\n\t        a.attr('href','http://example.com')\n\t    }\n\t    else { // URLのD&D\n\t        var url = dt.getData(\"URL\")\n\t        a.text(url)\n\t        a.attr('href',url)\n\t    }\n    })\n    \n    $('body').on(\"drop\", function(e){\n\t    e.preventDefault();  //  デフォルトの「ファイルを開く」処理を抑制\n    })\n}\n\n\n//# sourceURL=webpack://hikizan/./hikizan.js?");
/******/ })()
;