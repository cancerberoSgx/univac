import { Options } from './types';
import { getLibrary } from './library';

export async function renderDot(options: Options) {
  return await getLibrary().renderString(options.code, options);
}

