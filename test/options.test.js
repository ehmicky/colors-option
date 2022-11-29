import test from 'ava'
import colorsOption from 'colors-option'
import { each } from 'test-each'

each([true, { stream: {} }, { colors: 1 }], ({ title }, options) => {
  test(`Validate options | ${title}`, (t) => {
    t.throws(colorsOption.bind(undefined, options))
  })
})

test('Allow Chalk options', (t) => {
  t.notThrows(colorsOption.bind(undefined, { level: 0 }))
})
