import type { Equal } from '@type-challenges/utils';

/**
 * 5310 - Join
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
 * ○
 */
type Join<T, U extends string | number> = T extends [
  infer F extends string,
  ...infer R
]
  ? R extends []
    ? `${F}`
    : `${F}${U}${Join<R, U>}`
  : never;

/**
 * 5317 - LastIndexOf
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md
 * ○
 */
type LastIndexOf<T extends any[], U> = T extends [...infer F, infer R]
  ? Equal<U, R> extends true
    ? F['length']
    : LastIndexOf<F, U>
  : -1;

/**
 * 5360 - Unique
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md
 * ○
 */
type IndexOf<T extends any[], U, A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Equal<U, F> extends true
    ? A['length']
    : IndexOf<R, U, [...A, F]>
  : -1;
type Unique<T, A extends any[] = []> = T extends [infer F, ...infer R]
  ? IndexOf<A, F> extends -1
    ? Unique<R, [...A, F]>
    : Unique<R, A>
  : A;

/**
 * 5821 - MapTypes
 * https://github.com/type-challenges/type-challenges/blob/main/questions/05821-medium-maptypes/README.md
 * ×
 */
type MapTypes1<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
    ? Extract<R, { mapFrom: T[K] }>['mapTo']
    : T[K];
};
type MapTypes2<T, R extends { mapFrom: unknown; mapTo: unknown }> = {
  [K in keyof T]: T[K] extends R['mapFrom']
    ? R extends { mapFrom: T[K]; mapTo: unknown }
      ? R['mapTo']
      : never
    : T[K];
};

/**
 * 7544 - Construct Tuple
 * https://github.com/type-challenges/type-challenges/blob/main/questions/07544-medium-construct-tuple/README.md
 * ○
 */
type ConstructTuple<
  L extends number,
  A extends unknown[] = []
> = A['length'] extends L ? A : ConstructTuple<L, [...A, unknown]>;

/**
 * 8640 - Number Range
 * https://github.com/type-challenges/type-challenges/blob/main/questions/08640-medium-number-range/README.md
 * ×
 */
type BuildArr<
  L extends number,
  A extends unknown[] = []
> = A['length'] extends L ? A : BuildArr<L, [...A, never]>;
type NumberRange1<
  L extends number,
  H extends number,
  R extends unknown[] = BuildArr<L>
> = R['length'] extends H
  ? [...R, R['length']][number]
  : NumberRange1<L, H, [...R, R['length']]>;
type NumberRange2<
  T extends number,
  U extends number,
  R extends any[] = [],
  L extends any[] = [],
  S extends any[] = []
> = T extends R['length']
  ? U extends L['length']
    ? S[number] | L['length']
    : NumberRange2<T, U, R, [...L, T], [...S, L['length']]>
  : NumberRange2<T, U, [...R, T], [...R, T], S>;

/**
 * 8767 - Combination
 * https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.md
 * ×
 */
type Combination<
  T extends string[],
  U = T[number],
  A = U
> = U extends infer U extends string
  ? `${U} ${Combination<T, Exclude<A, U>>}` | U
  : never;

/**
 * 8987 - Subsequence
 * https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.md
 * ×
 */
type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? [F, ...Subsequence<R>] | Subsequence<R>
  : [];
