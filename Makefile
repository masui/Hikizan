# Scrapboxからコードを取得
# -r オプションで上書き
get:
	wget -q -r https://scrapbox.io/api/code/Hikizan/index.html/index.html
	wget -q -r https://scrapbox.io/api/code/Hikizan/hikizan.css/hikizan.css
	wget -q -r https://scrapbox.io/api/code/Hikizan/hikizan.js/hikizan.js

push:
	git commit -a -m '...' ; git push
