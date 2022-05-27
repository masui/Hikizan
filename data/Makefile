all: gictionary.js SFCHelp.txt

gictionary.js: gictionary.txt
	ruby txt2js.rb Gictionary.txt > gictionary.js
gictionary.txt: Gictionary.json
	ruby gictionary.rb > gictionary.txt

SFCHelp.txt: SFCHelp.json
	ruby json.rb SFCHelp.json > SFCHelp.txt

clean:
	/bin/rm -f *~
	/bin/rm -f gictionary.js gictionary.txt SFCHelp.txt
