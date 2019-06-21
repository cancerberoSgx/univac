# geometrizer-js

[Repository](https://github.com/cancerberoSgx/univac/tree/master/geometrizer-js).

 * [geometrize](https://www.geometrize.co.uk/) JavaScript API.
 * Generated directly from [official geometrize-haxe](https://github.com/Tw1ddle/geometrize-haxe) code.
 * for node.js and browsers.
 * TypeScript typings
 * Zero dependencies.
 * No implementation, just typings of generated JavaScript library.
 * See https://github.com/Tw1ddle/geometrize-haxe/pull/15

## Usage

TODO

## API docs

TODO

## Build gemoetrize.js

TODO: this PR must be merged so haxe classes are exported.

```sh
git clone https://github.com/Tw1ddle/geometrize-haxe.git
cp this-folder/build/build-js-target.hxml geometrize-haxe
cd geometrize-haxe
haxe build-js-target.hxml
```

That should generate `geometrize-haxe/build/geometrize.js` which should be copied to this projects src folder.