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
