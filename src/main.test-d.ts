import { stderr } from 'node:process'

import type { ChalkInstance } from 'chalk'
import colorsOption, { type Options } from 'colors-option'
import { expectAssignable, expectType } from 'tsd'

expectType<ChalkInstance>(colorsOption())

expectAssignable<Options>({})
colorsOption({})
// @ts-expect-error
colorsOption(true)

expectAssignable<Options>({ colors: undefined })
colorsOption({ colors: undefined })
expectAssignable<Options>({ colors: true })
colorsOption({ colors: true })
// @ts-expect-error
colorsOption({ colors: 1 })

expectAssignable<Options>({ stream: stderr })
colorsOption({ stream: stderr })
// @ts-expect-error
colorsOption({ stream: true })

expectAssignable<Options>({ level: undefined })
colorsOption({ level: undefined })
expectAssignable<Options>({ level: 1 })
colorsOption({ level: 1 })
expectAssignable<Options>({ level: 2 })
colorsOption({ level: 2 })
expectAssignable<Options>({ level: 3 })
colorsOption({ level: 3 })
// @ts-expect-error
colorsOption({ level: 0 })
// @ts-expect-error
colorsOption({ level: 1.5 })
// @ts-expect-error
colorsOption({ level: 4 })
// @ts-expect-error
colorsOption({ level: true })
