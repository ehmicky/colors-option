import { env, platform, stdout } from 'node:process'
import { Writable } from 'node:stream'
import { WriteStream } from 'node:tty'

import test from 'ava'
import colorsOption from 'colors-option'
import { each } from 'test-each'

// Ava seems to modify `stdout`, which makes `new WriteStream()` fail on
// Windows.
const getTtyStream = () => {
  if (platform === 'win32') {
    return stdout
  }

  return new WriteStream(1)
}

const getNoTtyStream = () => new Writable()

each(
  [
    { colorsOpt: undefined, stream: getNoTtyStream(), outputLevel: 0 },
    { colorsOpt: true, stream: getNoTtyStream(), outputLevel: 1 },
    { colorsOpt: false, stream: getNoTtyStream(), outputLevel: 0 },
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
    { colorsOpt: undefined, levelOption: 1, outputLevel: 1 },
    { colorsOpt: true, levelOption: 1, outputLevel: 1 },
    { colorsOpt: false, levelOption: 1, outputLevel: 0 },
    { colorsOpt: undefined, levelOption: 2, outputLevel: 2 },
    { colorsOpt: true, levelOption: 2, outputLevel: 2 },
    { colorsOpt: false, levelOption: 2, outputLevel: 0 },
    { colorsOpt: undefined, levelOption: 3, outputLevel: 3 },
    { colorsOpt: true, levelOption: 3, outputLevel: 3 },
    { colorsOpt: false, levelOption: 3, outputLevel: 0 },
    { colorsOpt: undefined, levelOption: 1, terminalLevel: 3, outputLevel: 1 },
    { colorsOpt: true, levelOption: 1, terminalLevel: 3, outputLevel: 1 },
    { colorsOpt: false, levelOption: 1, terminalLevel: 3, outputLevel: 0 },
    { colorsOpt: undefined, levelOption: 2, terminalLevel: 3, outputLevel: 2 },
    { colorsOpt: true, levelOption: 2, terminalLevel: 3, outputLevel: 2 },
    { colorsOpt: false, levelOption: 2, terminalLevel: 3, outputLevel: 0 },
    { colorsOpt: undefined, levelOption: 3, terminalLevel: 0, outputLevel: 3 },
    { colorsOpt: true, levelOption: 3, terminalLevel: 0, outputLevel: 3 },
    { colorsOpt: false, levelOption: 3, terminalLevel: 0, outputLevel: 0 },
  ],
  (
    { title },
    {
      colorsOpt,
      terminalLevel = '',
      levelOption,
      stream = getTtyStream(),
      outputLevel,
    },
  ) => {
    test.serial(`Enable/disable colors | ${title}`, (t) => {
      // eslint-disable-next-line fp/no-mutation
      env.FORCE_COLOR = String(terminalLevel)

      try {
        const chalk = colorsOption({
          colors: colorsOpt,
          level: levelOption,
          stream,
        })

        // eslint-disable-next-line max-depth
        if (platform === 'win32') {
          t.pass()
          return
        }

        t.is(chalk.level, outputLevel)
      } finally {
        // eslint-disable-next-line fp/no-delete
        delete env.FORCE_COLOR
      }
    })
  },
)
