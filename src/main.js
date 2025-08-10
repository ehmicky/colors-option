import { Chalk } from 'chalk'

import { getOpts } from './options.js'

// Retrieve `chalk` instance.
// Allows forcing `opts.colors` with `true` or `false` (default: guessed).
// Use `stdout.getColorDepth()` instead of chalk's default behavior (relying
// on `supports-color`) because it:
//  - Handles the `NO_COLOR` and `NODE_DISABLE_COLORS` environment variables
//  - Does not try to guess the `level` from CLI flags
//  - Has a simpler priority order between CLI flags, options and environment
//    variables
//  - Is built-in Node.js behavior
const colorsOption = (opts) => {
  const { colors, stream, chalkOpts } = getOpts(opts)
  const level = getLevel(colors, stream)
  const chalk = new Chalk({ ...chalkOpts, level })
  return chalk
}

export default colorsOption

const getLevel = (colors, stream) => {
  if (colors === false) {
    return 0
  }

  const terminalLevel = getTerminalLevel(stream)
  return colors === undefined ? terminalLevel : Math.max(terminalLevel, 1)
}

// The internal Node.js code actually does not use `stream` but `process.env`
// to determine the color depth:
// https://github.com/nodejs/node/blob/aac7925801edfc8dd1de051a29aac85332e7d200/lib/internal/tty.js#L123
// We still need the `stream` to disable colors by default when it is not a TTY.
const getTerminalLevel = (stream) =>
  stream.isTTY ? DEPTH_TO_LEVEL[stream.getColorDepth()] : 0

// Maps color depth to chalk levels
const DEPTH_TO_LEVEL = { 1: 0, 4: 1, 8: 2, 24: 3 }
