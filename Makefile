all: build

build:
	./node_modules/.bin/grunt build

test: build

watch:
	./node_modules/.bin/grunt watch:build

.PHONY: build
