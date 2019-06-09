import { Example, examples } from "../examples/examples"
import { convert } from './dispatchers'

export interface State {
  example: Example
  error?: Error | undefined;
  examples: Example[];
  output: string
}

export async function getInitialState(): Promise<State> {
  return {
    example: examples[0],
    error: undefined,
    examples,
    output: await convert(examples[0]),
  }
}
