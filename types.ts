export interface Handler {
  regex: RegExp;
  incrementer: (params: IncrementParams) => IncrementOutput;
}

export interface IncrementParams {
  string: string;
  increment: number;
}

export interface IncrementOutput {
  string: string;
}
