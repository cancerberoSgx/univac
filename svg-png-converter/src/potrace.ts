import { promisify } from 'util'
import { PotraceTraceOptions, PotracePosterizeOptions } from './types';
var potrace = require('potrace')

export const potraceTrace = promisify(potrace.trace.bind(potrace) as (url: string, o: PotraceTraceOptions, callback: (err: NodeJS.ErrnoException | null, svg: string) => void) => void)

/**
 * @param url  Source image, file path or {@link Jimp} instance
 * @param callback Callback function. Accepts 3 arguments: error, svg content and instance of {@link Potrace}
 * (so it could be reused with different set of parameters)
 */
type PosterizeFnCb = (url: string, o: PotracePosterizeOptions, callback: (err: NodeJS.ErrnoException | null, svg: string) => void) => void

/**
 * @param url  Source image, file path or {@link Jimp} instance
 * @param o
 * @returns plain svg content string
 */
type PosterizeFn = (url: string | Buffer, o: PotracePosterizeOptions) => Promise<string>

export const potracePosterize = promisify(potrace.posterize.bind(potrace) as PosterizeFnCb) as PosterizeFn
