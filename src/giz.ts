interface Giz {
  padStart(padSize: number, padStr?: string): Giz
  padEnd(padSize: number, padStr?: string): Giz
  pad(padSize: number, padStr?: string): Giz

  trimLeft(chars?: string): Giz
  trimRight(chars?: string): Giz
  trim(chars?: string): Giz

  /**
   * @example giz('helloworld').wrap(5) => 'hello\nworld'
   * @example giz('hello ').wrap(5) => 'hello\n '
   * @example giz(' hello').wrap(5) => ' hell\no'
   */
  wrap(length: number): Giz

  /**
   * White spaces are trimmed by default.
   * 
   * @example giz('hello world').wrap(5) => 'hello\nworld'
   * @example giz('hello world').wrap(5, false) => 'hello\n \nworld'
   */
  wordWrap(length: number, trim?: boolean): Giz

  /**
   * @example giz('abc').height(1) => 'abc'
   * @example giz('abc').height(2) => 'abc\n'
   */
  height(height: number): Giz
}
