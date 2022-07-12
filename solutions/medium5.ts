import type { Equal } from '@type-challenges/utils';

/**
 * 4179 - Flip
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
 * ×
 */
type Flip<T extends { [key: string | number]: any }> = {
  [K in keyof T as `${T[K]}`]: K;
};

/**
 * 4182 - Fibonacci Sequence
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequence/README.md
 * ×
 */
type Fibonacci<
  T extends number,
  N1 extends number[] = [],
  N2 extends number[] = [number],
  V extends number[] = [number]
> = T extends V['length']
  ? N2['length']
  : Fibonacci<T, N2, [...N1, ...N2], [...V, number]>;

/**
 * 4260 - AllCombinations
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04260-medium-nomiwase/README.md
 * ×
 */
type AllCombinations<
  S extends string,
  U extends string = StringToUnion<S>,
  P extends string = U
> =
  | U
  | (P extends any
      ? `${P}${AllCombinations<S, U extends P ? never : U>}`
      : never);
type StringToUnion<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : T;

/**
 * 4425 - Greater Than
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.md
 * ○
 */
type GreaterThan<
  T extends number,
  U extends number,
  A extends any[] = []
> = T extends A['length']
  ? false
  : U extends A['length']
  ? true
  : GreaterThan<T, U, [any, ...A]>;

/**
 * 4471 - Zip
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04471-medium-zip/README.md
 * ○
 */
type Zip<
  T extends unknown[],
  U extends unknown[],
  R extends unknown[] = []
> = T extends [infer TF, ...infer TR]
  ? U extends [infer UF, ...infer UR]
    ? Zip<TR, UR, [...R, [TF, UF]]>
    : R
  : R;
// Another Solutions
type Zip1<T, V> = T extends [infer H, ...infer R]
  ? V extends [infer H1, ...infer R1]
    ? [[H, H1], ...Zip1<R, R1>]
    : []
  : [];

/**
 * 4484 - IsTuple
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md
 * ○
 */
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends []
  ? true
  : T extends readonly [number]
  ? true
  : T extends [infer _F, ...infer _R]
  ? true
  : false;
// Another Solutions
type IsTuple1<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T['length']
    ? false
    : true
  : false;

/**
 * 4499 - Chunk
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md
 * ○
 */
type Chunk<
  T extends any[],
  U extends number,
  A extends any[] = []
> = T extends [infer F, ...infer R]
  ? A['length'] extends U
    ? [A, ...Chunk<R, U, [F]>]
    : Chunk<R, U, [...A, F]>
  : A extends []
  ? A
  : [A];

/**
 * 4518 - Fill
 * https://github.com/type-challenges/type-challenges
 * ○
 */
type GT<T, U, A extends any[] = []> = T extends A['length']
  ? false
  : U extends A['length']
  ? true
  : GT<T, U, [any, ...A]>;
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  A extends any[] = []
> = T extends [infer F, ...infer R]
  ? GT<Start, A['length']> extends false
    ? GT<End, A['length']> extends true
      ? Fill<R, N, Start, End, [...A, N]>
      : Fill<R, N, Start, End, [...A, F]>
    : Fill<R, N, Start, End, [...A, F]>
  : A;
// Another Solutions
type Fill1<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  S extends unknown[] = [],
  E extends unknown[] = []
> = T extends [infer F, ...infer R]
  ? S['length'] extends Start
    ? E['length'] extends End
      ? [...E, F, ...R]
      : Fill1<R, N, Start, End, S, [...E, N]>
    : Fill1<R, N, Start, End, [...S, F], [...E, F]>
  : E;

/**
 * 4803 - Trim Right
 * https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md
 * ○
 */
type TrimRight<S extends string> = S extends `${infer R}${' ' | '\n' | '\t'}`
  ? TrimRight<R>
  : S;

/**
 * 5117 - Without
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md
 * ○
 */
type Without<T, U extends number | number[], A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? U extends number[]
    ? Without<R, U, F extends U[number] ? A : [...A, F]>
    : Without<R, U, F extends U ? A : [...A, F]>
  : A;

/**
 * 5140 - Trunc
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md
 * ○
 */
type Trunc<
  T extends number | string,
  S = `${T}`,
  A extends string = ''
> = S extends `${infer F}${infer R}`
  ? F extends `.`
    ? A
    : Trunc<T, R, `${A}${F}`>
  : A;
// Another Solutions
type Trunc1<T extends string | number> = `${T}` extends `${infer F}.${string}`
  ? F
  : `${T}`;

/**
 * 5153 - IndexOf
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md
 * ○
 */
type IsAny<T> = unknown extends T
  ? [keyof T] extends [never]
    ? false
    : true
  : false;
type IndexOf<T extends any[], U, A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? U extends F
    ? IsAny<U> extends true
      ? IsAny<F> extends true
        ? A['length']
        : IndexOf<R, U, [...A, any]>
      : A['length']
    : IndexOf<R, U, [...A, any]>
  : -1;
// Another Solutions
type IndexOf1<T extends any[], U, A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Equal<U, F> extends true
    ? A['length']
    : IndexOf1<R, U, [...A, F]>
  : -1;
