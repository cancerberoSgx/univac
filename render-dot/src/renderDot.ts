import { getLibrary } from './library'
import { Options } from './types'

export async function renderDot(options: Options) {
  return await getLibrary().renderString(options.input, options)
}

