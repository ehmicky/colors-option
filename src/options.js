import { stdout } from 'node:process'
import { Stream } from 'node:stream'

import isPlainObj from 'is-plain-obj'

// Normalize options and assign default values
export const getOpts = (opts = {}) => {
  validateBasicOpts(opts)
  const { colors, stream = stdout, level, ...chalkOpts } = opts
  validateColors(colors)
  validateStream(stream)
  validateLevel(level)
  return { colors, stream, level, chalkOpts }
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

const validateLevel = (level) => {
  if (level === undefined) {
    return
  }

  if (level === 0) {
    throw new TypeError(
      '"level" option must not be 0. Please use "colors: false" instead.',
    )
  }

  if (!Number.isInteger(level) || level < 1 || level > 3) {
    throw new TypeError(`"level" option must be 1, 2 or 3, not: ${level}`)
  }
}
