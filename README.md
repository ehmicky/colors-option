[![Codecov](https://img.shields.io/codecov/c/github/ehmicky/colors-option.svg?label=tested&logo=codecov)](https://codecov.io/gh/ehmicky/colors-option)
[![Build](https://github.com/ehmicky/colors-option/workflows/Build/badge.svg)](https://github.com/ehmicky/colors-option/actions)
[![Node](https://img.shields.io/node/v/colors-option.svg?logo=node.js)](https://www.npmjs.com/package/colors-option)
[![Gitter](https://img.shields.io/gitter/room/ehmicky/colors-option.svg?logo=gitter)](https://gitter.im/ehmicky/colors-option)
[![Twitter](https://img.shields.io/badge/%E2%80%8B-twitter-4cc61e.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ehmicky)
[![Medium](https://img.shields.io/badge/%E2%80%8B-medium-4cc61e.svg?logo=medium)](https://medium.com/@ehmicky)

Let your users enable/disable colors.

This is a thin wrapper around the popular colors library
[`chalk`](https://github.com/chalk/chalk) that adds support for:

- A `colors` boolean option.
- The [`NO_COLOR`](https://no-color.org/) and
  [`NODE_DISABLE_COLORS`](https://nodejs.org/api/cli.html#cli_node_disable_colors_1)
  environment variables.

# Example

```js
const colorsOption = require('colors-option')

const exampleLibrary = function ({ colors, ...opts }) {
  const chalk = colorsOption({ colors })
  console.log(chalk.red('example'))
}
```

# Install

```
npm install colors-option
```

# API

## colorsOption(options?)

`options`: `object`\
_Return value_: `Chalk`

This returns an instance of [`chalk`](https://github.com/chalk/chalk#api).

### options

#### colors

_Type_: `boolean`\
_Default_: `undefined`

Whether colors should be enabled/disabled, regardless of terminal support.

Colors support is automatically detected by default, so this is only meant for
users to override the default detection.

The recommended approach is to:

- Add a programmatic `colors` boolean option (and optionally a `--colors`
  boolean CLI flag)
- Not assign any default value to it
- Forward it to `colors-option`

This relies on Node.js built-in colors detection
[`getColorDepth()`](https://nodejs.org/api/tty.html#tty_writestream_getcolordepth_env)
instead of [`chalk/supports-color`](https://github.com/chalk/supports-color)
which enables the following features:

- Support for the [`NO_COLOR`](https://no-color.org/) and
  [`NODE_DISABLE_COLORS`](https://nodejs.org/api/cli.html#cli_node_disable_colors_1)
  environment variables.
- Does not try to guess colors detection based on the presence of a
  [`--colors` CLI flag](https://github.com/chalk/supports-color#info). This
  gives you finer control and flexibility over how you prefer to expose this as
  a CLI flag.

#### stream

_Type_: `Stream`\
_Default_: `process.stdout`

Stream used to detect colors support. This should be the file or terminal where
the colors are output.

# Support

If you found a bug or would like a new feature, _don't hesitate_ to
[submit an issue on GitHub](../../issues).

For other questions, feel free to
[chat with us on Gitter](https://gitter.im/ehmicky/colors-option).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!--
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/colors-option/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/colors-option/commits?author=ehmicky" title="Documentation">📖</a></td>
  </tr>
</table>

-->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
