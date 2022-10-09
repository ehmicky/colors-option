import { stdout } from 'process'
import { Stream } from 'stream'

import isPlainObj from 'is-plain-obj'

// Normalize options and assign default values
export const getOpts = function (opts = {}) {
  validateBasicOpts(opts)
  const { colors, stream = stdout, ...chalkOpts } = opts
  validateColors(colors)
  validateStream(stream)
  return { colors, stream, chalkOpts }
}

const validateBasicOpts = function (opts) {
  if (!isPlainObj(opts)) {
    throw new TypeError(`Options must be a plain object: ${opts}`)
  }
}

const validateColors = function (colors) {
  if (colors !== undefined && typeof colors !== 'boolean') {
    throw new TypeError(`"colors" option must be a boolean: ${colors}`)
  }
}

const validateStream = function (stream) {
  if (!(stream instanceof Stream)) {
    throw new TypeError(`"stream" option must be a stream: ${stream}`)
  }
}
