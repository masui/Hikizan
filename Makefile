# Scrapboxからコードを取得
# -r オプションで上書き
all:
	wget -q -r -O Makefile https://scrapbox.io/api/code/Hikizan/Makefile/Makefile
	make get

get:
	wget -q -r -O index.html https://scrapbox.io/api/code/Hikizan/index.html/index.html
	wget -q -r -O hikizan.css https://scrapbox.io/api/code/Hikizan/hikizan.css/hikizan.css
	wget -q -r -O hikizan.js https://scrapbox.io/api/code/Hikizan/hikizan.js/hikizan.js
	wget -q -r -O README.md https://scrapbox.io/api/code/Hikizan/README.md/README.md
	wget -q -r -O cypress/integration/hikizan.js https://scrapbox.io/api/code/Hikizan/Test/hikizan.js

push:
	git commit -a -m '...' ; git push

run:
	open index.html

# MacでApacheうごかしてテスト
# $ cd /Library/WebServer/Documents/; ln -s ~/Hikizan
# $ sudo apachectl start
local:
	open http://localhost/Hikizan/

# pitecan.comに置いて実験
upload:
	scp -r index.html hikizan.css hikizan.js dict pitecan.com:/www/www.pitecan.com/Hikizan
pitecan:
	open http://pitecan.com/Hikizan

# Cypressを使ったテスト
test:
	npx cypress run -s cypress/integration/hikizan.js
test-gui:
	npx cypress open

lint:
	eslint hikizan.js
