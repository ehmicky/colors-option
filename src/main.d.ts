import type { Stream } from 'node:stream'

import type { ChalkInstance } from 'chalk'

export type Options = Partial<
  Readonly<{
    /**
     * Whether colors should be displayed or not.
     *
     * Since it is automatically detected by the `stream` option, this is only
     * meant to override the default behavior.
     *
     * @default undefined
     */
    colors: boolean | undefined

    /**
     * [How many colors](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)
     * to display. The value can be:
     *
     * - `1`: 16 (4 bits)
     * - `2`: 256 (8 bits)
     * - `3`: 16 millions (24 bits)
     *
     * Since it is automatically detected by the `stream` option, this is only
     * meant to override the default behavior.
     *
     * @default undefined
     */
    level: 1 | 2 | 3 | undefined

    /**
     * Stream used to detect the default value of the `colors` and `level`
     * options.
     *
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
 * const exampleLibrary = ({ colors, ...otherLibraryOptions }) => {
 *   const chalk = colorsOption({ colors })
 *   console.log(chalk.red('example'))
 * }
 * ```
 */
export default function colorsOption(options?: Options): ChalkInstance
