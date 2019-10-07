# WCPHL19 Collection

Collection of WordPress Gutenberg items pulled from the Handbook and assembled in a plugin using `wp-scripts` to compile. There are examples of blocks using ES5 and ES6.

## To see the plugin in action

 * From the plugins directory of a local WordPress install

 * Run `git clone https://github.com/pbrocks/wcphl19-collection.git`

 * `cd wcphl19-collection`

 * `npm install`

 * `npm run dev`



## Select a block from the WCPHL19 Panel

![Panel](https://github.com/pbrocks/wcphl19-collection/blob/master/lib/images/panel-in-block-selector.gif)

## To add styles to your build process

As mentioned in the talk, CSS is not compiled by wp-scripts yet, but a workaround was suggested by Jeffrey Carandang in his post [How to Create Gutenberg Block Plugin using wp-scripts with PostCSS Build Process](https://jeffreycarandang.com/create-gutenberg-block-plugin-wp-scripts-postcss-build/). I've incorporated his suggestions in the `postcss` branch to illustrate how it can work.
