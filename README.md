# typedoc-plugin-header-links

**This plugin only works for HTML documentation.**

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) which adds the ability to add custom links to the header.

## Installation

```bash
npm install --save-dev typedoc-plugin-header-links
```

## Usage

```bash
$ npx typedoc --plugin typedoc-plugin-header-links [args]
```

## Arguments

The following arguments can be used in addition to the default [TypeDoc arguments](https://github.com/TypeStrong/typedoc#arguments).


## Testing

To test this plugin, you can generate TypeDoc documentation _for this plugin_.

To do this, you'll first need to build the plugin:

```bash
npm run build
```

Then, link the package to the current repo, to have it in the local `node_modules`:

```bash
npm link
npm link typedoc-plugin-header-links
```

You can now generate the documentation with the plugin (from the source):

```bash
npm run test
```

## License

Based on this plugin by Drarig29: https://github.com/Drarig29/typedoc-plugin-extras

[MIT](https://github.com/joukevandermaas/typedoc-plugin-header-links/blob/master/LICENSE)
