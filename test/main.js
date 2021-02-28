import { env } from 'process'
import { Writable } from 'stream'
import { WriteStream } from 'tty'

import test from 'ava'
import { each } from 'test-each'

import colorsOption from '../src/main.js'

each([[true, true], [true, { stream: {} }], [1]], ({ title }, args) => {
  test(`Validate options | ${title}`, (t) => {
    t.throws(colorsOption.bind(undefined, ...args))
  })
})

const getTtyStream = function () {
  return new WriteStream(1)
}

const getNoTtyStream = function () {
  return new Writable()
}

each(
  [
    { colorsOpt: undefined, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: true, terminalLevel: 0, outputLevel: 1 },
    { colorsOpt: false, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: undefined, terminalLevel: 1, outputLevel: 1 },
    { colorsOpt: true, terminalLevel: 1, outputLevel: 1 },
    { colorsOpt: false, terminalLevel: 1, outputLevel: 0 },
    { colorsOpt: undefined, terminalLevel: 2, outputLevel: 2 },
    { colorsOpt: true, terminalLevel: 2, outputLevel: 2 },
    { colorsOpt: false, terminalLevel: 2, outputLevel: 0 },
    { colorsOpt: undefined, terminalLevel: 3, outputLevel: 3 },
    { colorsOpt: true, terminalLevel: 3, outputLevel: 3 },
    { colorsOpt: false, terminalLevel: 3, outputLevel: 0 },
    { colorsOpt: undefined, stream: getNoTtyStream(), outputLevel: 0 },
  ],
  (
    { title },
    { colorsOpt, terminalLevel = '', stream = getTtyStream(), outputLevel },
  ) => {
    test.serial(`Enable/disable colors | ${title}`, (t) => {
      // eslint-disable-next-line fp/no-mutation
      env.FORCE_COLOR = String(terminalLevel)

      try {
        const chalk = colorsOption(colorsOpt, { stream })
        t.is(chalk.level, outputLevel)
      } finally {
        // eslint-disable-next-line fp/no-delete
        delete env.FORCE_COLOR
      }
    })
  },
)
