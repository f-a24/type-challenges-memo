/**
 * 2 - Get Return Type
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
 * ○
 */
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

/**
 * 3 - Omit
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
 * ×
 */
type MyOmit1<T, K extends keyof T> = { [U in Exclude<keyof T, K>]: T[U] };
type MyOmit2<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

/**
 * 8 - Readonly 2
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
 * ×
 */
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;
type MyReadonly2a<T, K extends keyof T = keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
} & { readonly [key in K]: T[key] };

/**
 * 9 - Deep Readonly
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
 * ×
 */
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};

/**
 * 10 - Tuple to Union
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
 * ○
 */
type TupleToUnion<T extends unknown[]> = T[number];

/**
 * 12 - Chainable Options
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md
 * ×
 */
type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [key in K]: V }>;
  get(): T;
};

/**
 * 15 - Last of Array
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
 * ○
 */
type Last<T extends any[]> = T extends [...any, infer U] ? U : never;

/**
 * 16 - Pop
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
 * ○
 */
type Pop<T extends any[]> = T extends [...infer U, any] ? U : never;

/**
 * 20 - Promise.all
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
 * ×
 */
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [k in keyof T]: T[k] extends Promise<infer U> ? U : T[k] }>;

/**
 * 62 - Type Lookup
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
 * ×
 */
type LookUp<U, T> = U extends { type: T } ? U : never;

/**
 * 106 - Trim Left
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
 * ×
 */
type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R>
  : S;

/**
 * 108 - Trim
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
 * ○
 */
type EscapeChar = ' ' | '\n' | '\t';
type TrimLeft1<S extends string> = S extends `${EscapeChar}${infer R}`
  ? TrimLeft1<R>
  : S;
type TrimRight1<S extends string> = S extends `${infer L}${EscapeChar}`
  ? TrimRight1<L>
  : S;
type Trim<S extends string> = TrimLeft1<TrimRight1<S>>;
// Another Solutions
type Trim1<S extends string> = S extends
  | `${EscapeChar}${infer U}`
  | `${infer U}${EscapeChar}`
  ? Trim1<U>
  : S;
type Trim2<S extends string> = S extends `${EscapeChar}${infer R}`
  ? Trim2<R>
  : S extends `${infer L}${EscapeChar}`
  ? Trim2<L>
  : S;
