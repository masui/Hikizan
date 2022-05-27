#
# テキストを、インポート可能なJSファイルにする
#

puts <<EOF
(function () {
  let str = ''

EOF

ARGF.each { |line|
  line.chomp!
  # if line =~ /^\A(?:\p{Hiragana}|\p{Katakana}|[ー－]|[一-龠々])+\z$/ && line.length < 8
  if line !~ /'/ && line.length < 8
    puts "  str += '#{line}\\n'"
  end
}

puts <<EOF

  exports.data = str
}).call(this)
EOF


