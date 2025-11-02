import { env, platform, stdout } from 'node:process'
import { Writable } from 'node:stream'
import { WriteStream } from 'node:tty'

import test from 'ava'
import colorsOption from 'colors-option'
import { each } from 'test-each'

// Ava seems to modify `stdout`, which makes `new WriteStream()` fail on
// Windows.
const getStream = (streamOption) => {
  if (streamOption === undefined) {
    return
  }

  if (!streamOption) {
    return new Writable()
  }

  return platform === 'win32' ? stdout : new WriteStream(1)
}

each(
  [
    { colorsOpt: undefined, terminalLevel: 3, outputLevel: 0 },

    { colorsOpt: undefined, stream: false, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: true, stream: false, terminalLevel: 0, outputLevel: 1 },
    { colorsOpt: false, stream: false, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: undefined, stream: false, terminalLevel: 1, outputLevel: 0 },
    { colorsOpt: true, stream: false, terminalLevel: 1, outputLevel: 1 },
    { colorsOpt: false, stream: false, terminalLevel: 1, outputLevel: 0 },
    { colorsOpt: undefined, stream: false, terminalLevel: 2, outputLevel: 0 },
    { colorsOpt: true, stream: false, terminalLevel: 2, outputLevel: 1 },
    { colorsOpt: false, stream: false, terminalLevel: 2, outputLevel: 0 },
    { colorsOpt: undefined, stream: false, terminalLevel: 3, outputLevel: 0 },
    { colorsOpt: true, stream: false, terminalLevel: 3, outputLevel: 1 },
    { colorsOpt: false, stream: false, terminalLevel: 3, outputLevel: 0 },

    { colorsOpt: undefined, stream: true, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: true, stream: true, terminalLevel: 0, outputLevel: 1 },
    { colorsOpt: false, stream: true, terminalLevel: 0, outputLevel: 0 },
    { colorsOpt: undefined, stream: true, terminalLevel: 1, outputLevel: 1 },
    { colorsOpt: true, stream: true, terminalLevel: 1, outputLevel: 1 },
    { colorsOpt: false, stream: true, terminalLevel: 1, outputLevel: 0 },
    { colorsOpt: undefined, stream: true, terminalLevel: 2, outputLevel: 2 },
    { colorsOpt: true, stream: true, terminalLevel: 2, outputLevel: 2 },
    { colorsOpt: false, stream: true, terminalLevel: 2, outputLevel: 0 },
    { colorsOpt: undefined, stream: true, terminalLevel: 3, outputLevel: 3 },
    { colorsOpt: true, stream: true, terminalLevel: 3, outputLevel: 3 },
    { colorsOpt: false, stream: true, terminalLevel: 3, outputLevel: 0 },

    { colorsOpt: undefined, stream: false, levelOption: 1, outputLevel: 0 },
    { colorsOpt: true, stream: false, levelOption: 1, outputLevel: 1 },
    { colorsOpt: false, stream: false, levelOption: 1, outputLevel: 0 },
    { colorsOpt: undefined, stream: false, levelOption: 2, outputLevel: 0 },
    { colorsOpt: true, stream: false, levelOption: 2, outputLevel: 2 },
    { colorsOpt: false, stream: false, levelOption: 2, outputLevel: 0 },
    { colorsOpt: undefined, stream: false, levelOption: 3, outputLevel: 0 },
    { colorsOpt: true, stream: false, levelOption: 3, outputLevel: 3 },
    { colorsOpt: false, stream: false, levelOption: 3, outputLevel: 0 },

    { colorsOpt: undefined, stream: true, levelOption: 1, outputLevel: 1 },
    { colorsOpt: true, stream: true, levelOption: 1, outputLevel: 1 },
    { colorsOpt: false, stream: true, levelOption: 1, outputLevel: 0 },
    { colorsOpt: undefined, stream: true, levelOption: 2, outputLevel: 2 },
    { colorsOpt: true, stream: true, levelOption: 2, outputLevel: 2 },
    { colorsOpt: false, stream: true, levelOption: 2, outputLevel: 0 },
    { colorsOpt: undefined, stream: true, levelOption: 3, outputLevel: 3 },
    { colorsOpt: true, stream: true, levelOption: 3, outputLevel: 3 },
    { colorsOpt: false, stream: true, levelOption: 3, outputLevel: 0 },

    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 1,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 2,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 3,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 0,
    },

    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 1,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 1,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 2,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 2,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 3,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 3,
      terminalLevel: 0,
      outputLevel: 0,
    },

    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 1,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 2,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: false,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: true,
      stream: false,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 3,
    },
    {
      colorsOpt: false,
      stream: false,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 0,
    },

    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 1,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 1,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 1,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 2,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 2,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 2,
      terminalLevel: 3,
      outputLevel: 0,
    },
    {
      colorsOpt: undefined,
      stream: true,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 3,
    },
    {
      colorsOpt: true,
      stream: true,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 3,
    },
    {
      colorsOpt: false,
      stream: true,
      levelOption: 3,
      terminalLevel: 3,
      outputLevel: 0,
    },
  ],
  (
    { title },
    {
      colorsOpt,
      terminalLevel = '',
      levelOption,
      stream: streamOption,
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
          stream: getStream(streamOption),
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
