import type { Equal } from '@type-challenges/utils';

/**
 * 4 - Pick
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 * ×
 */
type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

/**
 * 7 - Readonly
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 * ×
 */
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

/**
 * 11 - Tuple to Object
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 * ×
 */
type TupleToObject<T extends readonly any[]> = { [K in T[number]]: K };

/**
 * 14 - First of Array
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 * ○
 */
type First<T extends any[]> = T extends [] ? never : T[0];
// Another Solutions
type First1<T extends any[]> = T extends [infer P, ...any] ? P : never;
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0];

/**
 * 18 - Length of Tuple
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md
 * ×
 */
type Length<T extends readonly any[]> = T['length'];

/**
 *  43 - Exclude
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
 * ○
 */
type MyExclude<T, U> = T extends U ? never : T;

/**
 * 189 - Awaited
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
 * ×
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;

/**
 * 268 - If
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ja.md
 * ○
 */
type If<C extends boolean, T, F> = C extends true ? T : F;
// Another Solutions
type If1<C extends boolean, T, F> = C extends true
  ? T
  : C extends false
  ? F
  : never;

/**
 * 533 - Concat
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
 * ○
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
// Another Solutions
type Concat1<T, U> = T extends [...infer R]
  ? U extends [...infer S]
    ? [...R, ...S]
    : never
  : never;

/**
 * 898 - Includes
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
 * ×
 */
type Includes<T extends readonly any[], U> = T extends [infer A, ...infer R]
  ? Equal<A, U> extends true
    ? true
    : Includes<R, U>
  : false;

/**
 * 3057 - Push
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
 * ○
 */
type Push<T extends unknown[], U> = [...T, U];

/**
 * 3060 - Unshift
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
 * ○
 */
type Unshift<T extends unknown[], U> = [U, ...T];

/**
 * 3312 - Parameters
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md
 * ○
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;
