/**
 * 110 - Capitalize
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md
 * ×
 */
type MyCapitalize<S extends string> = S extends `${infer S}${infer R}`
  ? `${Uppercase<S>}${R}`
  : S;

/**
 * 116 - Replace
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
 * ×
 */
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

/**
 * 119 - ReplaceAll
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
 * ○
 */
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;

/**
 * 191 - Append Argument
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
 * ○
 */
type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never;

/**
 * 296 - Permutation
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md
 * ×
 */
type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends U
  ? [T, ...Permutation<Exclude<U, T>>]
  : [];

/**
 * 298 - Length of String
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
 * ×
 */
type LengthOfString<
  S extends string,
  A extends any[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [F, ...A]>
  : A['length'];

/**
 * 459 - Flatten
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md
 * ×
 */
type Flatten<T, A extends any[] = []> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? Flatten<R, [...A, ...Flatten<F>]>
    : Flatten<R, [...A, F]>
  : A;

/**
 * 527 - Append to object
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md
 * ×
 */
type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

/**
 * 529 - Absolute
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md
 * ×
 */
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? U
  : `${T}`;

/**
 * 531 - String to Union
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md
 * ○
 */
type StringToUnion<
  T extends string,
  A extends string[] = []
> = T extends `${infer F}${infer R}` ? StringToUnion<R, [F, ...A]> : A[number];
// Another Solutions
type StringToUnion1<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion1<R>
  : never;

/**
 * 599 - Merge
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md
 * ○
 */
type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};
// Another Solutions
type Merge1<F, S> = {
  [K in keyof (F & S)]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

/**
 * 612 - KebabCase
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
 * ×
 */
type KebabCase1<
  S extends string,
  U extends string = ''
> = S extends `${infer F}${infer R}`
  ? F extends Lowercase<F>
    ? KebabCase1<R, `${U}${F}`>
    : U extends ''
    ? KebabCase1<R, Lowercase<F>>
    : KebabCase1<R, `${U}-${Lowercase<F>}`>
  : U;
type KebabCase2<S extends string> = S extends `${infer F}${infer R}`
  ? Uncapitalize<R> extends R
    ? `${Lowercase<F>}${KebabCase2<R>}`
    : `${Lowercase<F>}-${KebabCase2<R>}`
  : S;
