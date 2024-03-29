import { stdout } from 'node:process'
import { Stream } from 'node:stream'

import isPlainObj from 'is-plain-obj'

// Normalize options and assign default values
export const getOpts = (opts = {}) => {
  validateBasicOpts(opts)
  const { colors, stream = stdout, ...chalkOpts } = opts
  validateColors(colors)
  validateStream(stream)
  return { colors, stream, chalkOpts }
}

const validateBasicOpts = (opts) => {
  if (!isPlainObj(opts)) {
    throw new TypeError(`Options must be a plain object: ${opts}`)
  }
}

const validateColors = (colors) => {
  if (colors !== undefined && typeof colors !== 'boolean') {
    throw new TypeError(`"colors" option must be a boolean: ${colors}`)
  }
}

const validateStream = (stream) => {
  if (!(stream instanceof Stream)) {
    throw new TypeError(`"stream" option must be a stream: ${stream}`)
  }
}
