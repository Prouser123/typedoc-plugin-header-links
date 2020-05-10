# typedoc-plugin-extras

A plugin for [TypeDoc](https://github.com/TypeStrong/typedoc) that enables to add a extras to the generated documentation.

[![npm](https://img.shields.io/npm/v/typedoc-plugin-extras.svg)](https://www.npmjs.com/package/typedoc-plugin-extras)

## Installation

```bash
npm install --save-dev typedoc typedoc-plugin-extras
```

## Usage

```bash
$ npx typedoc --plugin typedoc-plugin-extras [args]
```

## Arguments

The following arguments can be used in addition to the default [TypeDoc arguments](https://github.com/TypeStrong/typedoc#arguments).

The favicon, date and time are automatically added by default. The favicon is copied into the output documentation directory.

- `--favicon`<br>
  Specify the name of the favicon file. Defaults to `'public/favicon.ico'`.
- `--no-favicon`<br>
  Disable the favicon.
- `--hideDate`<br>
  Hides the date of generation at the end of documentation pages.
- `--hideTime`<br>
  Hides the time of generation at the end of documentation pages.

## License

[MIT](https://github.com/Drarig29/typedoc-plugin-extras/blob/master/LICENSE)
