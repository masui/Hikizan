# Scrapboxからコードを取得
# wgetは-r オプションで上書き
#
all:
	wget -q -r -O Makefile https://scrapbox.io/api/code/Hikizan/Makefile/Makefile
	make get

get:
	wget -q -r -O index.html https://scrapbox.io/api/code/Hikizan/index.html/index.html
	wget -q -r -O hikizan.css https://scrapbox.io/api/code/Hikizan/hikizan.css/hikizan.css
	wget -q -r -O hikizan.js https://scrapbox.io/api/code/Hikizan/hikizan.js/hikizan.js
	wget -q -r -O README.md https://scrapbox.io/api/code/Hikizan/README.md/README.md
	wget -q -r -O cypress/integration/hikizan_test.js https://scrapbox.io/api/code/Hikizan/Test/hikizan_test.js
	wget -q -r -O data/Makefile https://scrapbox.io/api/code/Hikizan/Data/Makefile
 
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
	npx cypress run -s cypress/integration/hikizan_test.js
test-gui:
	npx cypress open

lint:
	eslint hikizan.js
	eslint cypress/integration/hikizan_test.js

htmlcheck:
	open 'https://validator.w3.org/nu/?doc=https%3A%2F%2Fhikizan.org&submit=Check'
