import type { Stream } from 'stream'

import type { ChalkInstance } from 'chalk'

export type Options = Partial<
  Readonly<{
    /**
     * Whether colors should be enabled/disabled, regardless of terminal
     * support.
     * Colors support is automatically detected, so this is only meant to
     * override that default behavior.
     *
     * @default undefined
     */
    colors: boolean | undefined

    /**
     * Stream used to detect colors support.
     * This should be the file or terminal where the colors are output.
     *
     * @default process.stdout
     */
    stream: Stream
  }>
>

/**
 * Return a [`chalk`](https://github.com/chalk/chalk) instance that is enabled
 * or not based on colors support.
 *
 * @example
 * ```js
 * const exampleLibrary = function ({ colors, ...otherLibraryOptions }) {
 *   const chalk = colorsOption({ colors })
 *   console.log(chalk.red('example'))
 * }
 * ```
 */
export default function colorsOption(options?: Options): ChalkInstance
