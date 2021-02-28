import { stdout } from 'process'
import { Stream } from 'stream'

import filterObj from 'filter-obj'
import isPlainObj from 'is-plain-obj'
import { validate } from 'jest-validate'

// Normalize options and assign default values
export const getOpts = function (opts = {}) {
  validateOpts(opts)
  const optsA = filterObj(opts, isDefined)
  const { colors: colorsA, stream, ...chalkOpts } = {
    ...DEFAULT_OPTS,
    ...optsA,
  }
  return { colors: colorsA, stream, chalkOpts }
}

const validateOpts = function (opts) {
  validateBasicOpts(opts)
  validate(opts, { exampleConfig: EXAMPLE_OPTS, recursiveDenylist: ['stream'] })
  validateStream(opts)
}

const validateBasicOpts = function (opts) {
  if (!isPlainObj(opts)) {
    throw new TypeError(`Options must be a plain object: ${opts}`)
  }
}

const validateStream = function ({ stream }) {
  if (stream !== undefined && !(stream instanceof Stream)) {
    throw new TypeError(`"stream" option must be a stream: ${stream}`)
  }
}

const isDefined = function (key, value) {
  return value !== undefined
}

const DEFAULT_OPTS = {
  stream: stdout,
}

const EXAMPLE_OPTS = {
  ...DEFAULT_OPTS,
  colors: true,
}
