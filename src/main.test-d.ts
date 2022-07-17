import type { ChalkInstance } from 'chalk'
import colorsOption, { Options } from 'colors-option'
import { expectType, expectAssignable, expectError } from 'tsd'

expectType<ChalkInstance>(colorsOption())

expectAssignable<Options>({})
colorsOption({})
expectError(colorsOption(true))

expectAssignable<Options>({ colors: undefined })
colorsOption({ colors: undefined })
expectAssignable<Options>({ colors: true })
colorsOption({ colors: true })
expectError(colorsOption({ colors: 1 }))

expectAssignable<Options>({ stream: process.stderr })
colorsOption({ stream: process.stderr })
expectError(colorsOption({ stream: true }))
