import type { Stream } from 'node:stream'

import type { ChalkInstance } from 'chalk'

export type Options = Partial<
  Readonly<{
    /**
     * Whether colors should be displayed or not.
     *
     * The default value depends on whether the `stream` supports colors.
     * Therefore, this is only meant to override that.
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
     * The default value depends on
     * [how many colors](https://nodejs.org/api/tty.html#writestreamgetcolordepthenv)
     * the `stream` supports. Therefore, this is only meant to override that.
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
