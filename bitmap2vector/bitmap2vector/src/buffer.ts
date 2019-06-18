const BrowserBuffer = require('buffer/').Buffer as typeof Buffer;
export const BufferClass = typeof process !== 'undefined' && typeof process.exit === 'function' ? Buffer : BrowserBuffer;
export type BufferType = typeof BufferClass