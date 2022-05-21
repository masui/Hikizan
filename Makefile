# Scrapboxからコードを取得
# -r オプションで上書き
all:
	wget -q -r -O Makefile.x https://scrapbox.io/api/code/Hikizan/Makefile/Makefile.x
	make -f Makefile.x setup
	make -f Makefile.x get

setup:
	/bin/cp Makefile.x Makefile

get:
	wget -q -r -O index.html https://scrapbox.io/api/code/Hikizan/index.html/index.html
	wget -q -r -O hikizan.css https://scrapbox.io/api/code/Hikizan/hikizan.css/hikizan.css
	wget -q -r -O hikizan.js https://scrapbox.io/api/code/Hikizan/hikizan.js/hikizan.js

push:
	git commit -a -m '...' ; git push

run:
	open index.html
