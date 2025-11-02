import test from 'ava'
import colorsOption from 'colors-option'
import { each } from 'test-each'

each(
  [
    true,
    { stream: {} },
    { colors: 1 },
    { level: true },
    { level: -1 },
    { level: 0 },
    { level: 4 },
    { level: 1.5 },
  ],
  ({ title }, options) => {
    test(`Validate options | ${title}`, (t) => {
      t.throws(colorsOption.bind(undefined, options))
    })
  },
)
