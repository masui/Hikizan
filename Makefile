# Scrapboxからコードを取得
# -r オプションで上書き
all:
	wget -q -r https://scrapbox.io/api/code/Hikizan/Makefile/Makefile.x
	make -f Makefile.x get

get:
	wget -q -r https://scrapbox.io/api/code/Hikizan/index.html/index.html
	chmod 444 index.html
	wget -q -r https://scrapbox.io/api/code/Hikizan/hikizan.css/hikizan.css
	chmod 444 hikizan.css
	wget -q -r https://scrapbox.io/api/code/Hikizan/hikizan.js/hikizan.js
	chmod 444 hikizan.js

push:
	git commit -a -m '...' ; git push

run:
	open index.html
