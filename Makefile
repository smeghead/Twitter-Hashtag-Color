FILES = README.md icon.png manifest.json content-script.js background.js options.html options.js

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/Twitter-Hashtag-Color
	cp $(FILES) dist/Twitter-Hashtag-Color
	cd dist && zip -r Twitter-Hashtag-Color.zip Twitter-Hashtag-Color
