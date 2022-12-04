import type { ChalkInstance } from 'chalk'
import { expectType, expectAssignable } from 'tsd'

import colorsOption, { Options } from 'colors-option'

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

expectAssignable<Options>({ stream: process.stderr })
colorsOption({ stream: process.stderr })
// @ts-expect-error
colorsOption({ stream: true })
