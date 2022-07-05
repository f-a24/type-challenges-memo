/**
 * 2757 - PartialByKeys
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
 * ×
 */
type PartialByKeys1<T, K extends keyof any = keyof T> = {
  [k in keyof T as k extends K ? k : never]?: T[k];
} & {
  [k in keyof T as k extends K ? never : k]: T[k];
} extends infer R
  ? {
      [k in keyof R]: R[k];
    }
  : never;
type PartialByKeys2<T, K = keyof T> = Omit<T, K & keyof T> &
  Partial<Pick<T, K & keyof T>> extends infer U
  ? { [K in keyof U]: U[K] }
  : never;

/**
 * 2759 - RequiredByKeys
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md
 * ○
 */
type RequiredByKeys<T, K = keyof T> = Omit<T, K & keyof T> &
  Required<Pick<T, K & keyof T>> extends infer U
  ? { [K in keyof U]: U[K] }
  : never;
// Another Solutions
type RequiredByKeys1<T, K extends keyof any = keyof T> = {
  [k in keyof T as k extends K ? k : never]-?: T[k];
} & {
  [k in keyof T as k extends K ? never : k]: T[k];
} extends infer R
  ? {
      [k in keyof R]: R[k];
    }
  : never;

/**
 * 2793 - Mutable
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
 * ○
 */
type Mutable<T extends { [k: string]: any }> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * 2852 - OmitByType
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md
 * ○
 */
type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

/**
 * 2946 - ObjectEntries
 * https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
 * ×
 */
type ObjectEntries<T> = {
  [K in keyof Required<T>]: [K, T[K] extends undefined ? T[K] : Required<T>[K]];
}[keyof T];

/**
 * 3062 - Shift
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
 * ○
 */
type Shift<T> = T extends [any, ...infer R] ? R : never;

/**
 * 3188 - Tuple to Nested Object
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03188-medium-tuple-to-nested-object/README.md
 * ○
 */
type TupleToNestedObject<T, U> = T extends [infer F extends string, ...infer R]
  ? { [K in F]: TupleToNestedObject<R, U> }
  : U;

/**
 * 3192 - Reverse
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
 * ○
 */
type Reverse<T, A extends any[] = []> = T extends [infer F, ...infer R]
  ? Reverse<R, [F, ...A]>
  : A;
// Another Solutions
type Reverse1<T> = T extends [infer F, ...infer R] ? [...Reverse1<R>, F] : [];

/**
 * 3196 - Flip Arguments
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03196-medium-flip-arguments/README.md
 * ×
 */
type FlipArguments<T extends (...args: any[]) => any> = (
  ...args: Reverse<Parameters<T>>
) => ReturnType<T>;

/**
 * 3243 - FlattenDepth
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03243-medium-flattendepth/README.md
 * ×
 */
type FlattenOnce<T extends any[], A extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? F extends [...infer B]
    ? FlattenOnce<[...R], [...A, ...B]>
    : FlattenOnce<[...R], [...A, F]>
  : A;
type FlattenDepth<
  T extends any[],
  D = 1,
  K extends any[] = []
> = FlattenOnce<T> extends T
  ? T
  : K['length'] extends D
  ? T
  : FlattenDepth<FlattenOnce<T>, D, [...K, 0]>;

/**
 * 3326 - BEM style string
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md
 * ○
 */
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E extends [infer U extends string] ? `__${U}` : ''}${M extends []
  ? ''
  : `--${M[number]}`}`;
// Another Solutions
type BEM1<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${E[0] extends string ? `__${E[number]}` : ''}${M[0] extends string
  ? `--${M[number]}`
  : ''}`;

/**
 * 3376 - InorderTraversal
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03376-medium-inordertraversal/README.md
 * ×
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : [];
