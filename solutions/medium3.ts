/**
 * 645 - Diff
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md
 * ○
 */
type Diff<O extends { [k: string]: any }, O1 extends { [k: string]: any }> = {
  [K in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
    ? O1[K]
    : never;
};

/**
 * 949 - AnyOf
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
 * ○
 */
type AnyOf<T extends readonly any[]> = T[number] extends
  | 0
  | ''
  | false
  | []
  | { [key: string]: never }
  ? false
  : true;
// Another Solutions
type AnyOf1<T extends readonly any[]> = T[number] extends
  | 0
  | ''
  | false
  | []
  | Record<string, never>
  ? false
  : true;

/**
 * 1042 - IsNever
 * https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
 * ×
 */
type IsNever1<T> = [T] extends [never] ? true : false;
type IsNever2<T> = Record<string, T> extends { [k: string]: never }
  ? true
  : false;

/**
 * 1097 - IsUnion
 * https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md
 * ×
 */
type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends K
  ? [K] extends [T]
    ? false
    : true
  : never;

/**
 * 1130 - ReplaceKeys
 * https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md
 * ×
 */
type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

/**
 * 1367 - Remove Index Signature
 * https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md
 * ×
 */
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer G}` ? G : never]: T[K];
};

/**
 * 1978 - Percentage Parser
 * https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md
 * ○
 */
type PercentageParser<
  S extends string,
  A extends string[] = ['', '', '']
> = S extends `${infer U}${infer R}`
  ? U extends '+' | '-'
    ? PercentageParser<R, [U, '', '']>
    : U extends '%'
    ? [A[0], A[1], U]
    : PercentageParser<R, [A[0], `${A[1]}${U}`, '']>
  : A;
// Another Solutions
type PercentageParser1<A extends string> = A extends `${infer m extends
  | '+'
  | '-'}${infer k}%`
  ? [m, k, '%']
  : A extends `${infer m extends '+' | '-'}${infer k}`
  ? [m, k, '']
  : A extends `${infer k}%`
  ? ['', k, '%']
  : ['', A, ''];

/**
 * 2070 - Drop Char
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md
 * ○
 */
type DropChar<S, C, A extends string = ''> = S extends `${infer F}${infer R}`
  ? F extends C
    ? DropChar<R, C, A>
    : DropChar<R, C, `${A}${F}`>
  : A;
// Another Solutions
type DropChar1<S, C> = S extends `${infer F}${infer R}`
  ? `${F extends C ? '' : F}${DropChar<R, C>}`
  : S;

/**
 * 2257 - MinusOne
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md
 * ×
 */
type MinusOne1<T extends number, A extends any[] = []> = [
  ...A,
  any,
  any
]['length'] extends T
  ? [...A, any]['length']
  : [...A, any]['length'] extends T
  ? A['length']
  : MinusOne1<T, [...A, any, any]>;
type MinusOne2<
  T extends number,
  A extends number[] = []
> = T extends A['length']
  ? A extends [infer _F, ...infer R]
    ? R['length']
    : 0
  : MinusOne2<T, [...A, T]>;

/**
 * 2595 - PickByType
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md
 * ○
 */
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

/**
 * 2688 - StartsWith
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md
 * ○
 */
type StartsWith<T extends string, U extends string> = U extends ''
  ? true
  : T extends `${infer F}${infer N}${infer _R}`
  ? `${F}${N}` extends U
    ? true
    : false
  : false;
// Another Solutions
type StartsWith1<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;

/**
 * 2693 - EndsWith
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
 * ○
 */
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;
