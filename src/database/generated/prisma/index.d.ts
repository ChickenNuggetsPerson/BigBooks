
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RegistrationCode
 * 
 */
export type RegistrationCode = $Result.DefaultSelection<Prisma.$RegistrationCodePayload>
/**
 * Model InviteCode
 * 
 */
export type InviteCode = $Result.DefaultSelection<Prisma.$InviteCodePayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Payperiod
 * 
 */
export type Payperiod = $Result.DefaultSelection<Prisma.$PayperiodPayload>
/**
 * Model PayStub
 * 
 */
export type PayStub = $Result.DefaultSelection<Prisma.$PayStubPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registrationCode`: Exposes CRUD operations for the **RegistrationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistrationCodes
    * const registrationCodes = await prisma.registrationCode.findMany()
    * ```
    */
  get registrationCode(): Prisma.RegistrationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inviteCode`: Exposes CRUD operations for the **InviteCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteCodes
    * const inviteCodes = await prisma.inviteCode.findMany()
    * ```
    */
  get inviteCode(): Prisma.InviteCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payperiod`: Exposes CRUD operations for the **Payperiod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payperiods
    * const payperiods = await prisma.payperiod.findMany()
    * ```
    */
  get payperiod(): Prisma.PayperiodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payStub`: Exposes CRUD operations for the **PayStub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayStubs
    * const payStubs = await prisma.payStub.findMany()
    * ```
    */
  get payStub(): Prisma.PayStubDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RegistrationCode: 'RegistrationCode',
    InviteCode: 'InviteCode',
    Role: 'Role',
    Organization: 'Organization',
    Employee: 'Employee',
    Payperiod: 'Payperiod',
    PayStub: 'PayStub'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "registrationCode" | "inviteCode" | "role" | "organization" | "employee" | "payperiod" | "payStub"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RegistrationCode: {
        payload: Prisma.$RegistrationCodePayload<ExtArgs>
        fields: Prisma.RegistrationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          findFirst: {
            args: Prisma.RegistrationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          findMany: {
            args: Prisma.RegistrationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>[]
          }
          create: {
            args: Prisma.RegistrationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          createMany: {
            args: Prisma.RegistrationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>[]
          }
          delete: {
            args: Prisma.RegistrationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          update: {
            args: Prisma.RegistrationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          deleteMany: {
            args: Prisma.RegistrationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>[]
          }
          upsert: {
            args: Prisma.RegistrationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationCodePayload>
          }
          aggregate: {
            args: Prisma.RegistrationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistrationCode>
          }
          groupBy: {
            args: Prisma.RegistrationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCodeCountAggregateOutputType> | number
          }
        }
      }
      InviteCode: {
        payload: Prisma.$InviteCodePayload<ExtArgs>
        fields: Prisma.InviteCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findFirst: {
            args: Prisma.InviteCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findMany: {
            args: Prisma.InviteCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          create: {
            args: Prisma.InviteCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          createMany: {
            args: Prisma.InviteCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          delete: {
            args: Prisma.InviteCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          update: {
            args: Prisma.InviteCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          deleteMany: {
            args: Prisma.InviteCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          upsert: {
            args: Prisma.InviteCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          aggregate: {
            args: Prisma.InviteCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInviteCode>
          }
          groupBy: {
            args: Prisma.InviteCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCodeCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCodeCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Payperiod: {
        payload: Prisma.$PayperiodPayload<ExtArgs>
        fields: Prisma.PayperiodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayperiodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayperiodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          findFirst: {
            args: Prisma.PayperiodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayperiodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          findMany: {
            args: Prisma.PayperiodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>[]
          }
          create: {
            args: Prisma.PayperiodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          createMany: {
            args: Prisma.PayperiodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayperiodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>[]
          }
          delete: {
            args: Prisma.PayperiodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          update: {
            args: Prisma.PayperiodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          deleteMany: {
            args: Prisma.PayperiodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayperiodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayperiodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>[]
          }
          upsert: {
            args: Prisma.PayperiodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayperiodPayload>
          }
          aggregate: {
            args: Prisma.PayperiodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayperiod>
          }
          groupBy: {
            args: Prisma.PayperiodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayperiodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayperiodCountArgs<ExtArgs>
            result: $Utils.Optional<PayperiodCountAggregateOutputType> | number
          }
        }
      }
      PayStub: {
        payload: Prisma.$PayStubPayload<ExtArgs>
        fields: Prisma.PayStubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayStubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayStubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          findFirst: {
            args: Prisma.PayStubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayStubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          findMany: {
            args: Prisma.PayStubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>[]
          }
          create: {
            args: Prisma.PayStubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          createMany: {
            args: Prisma.PayStubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayStubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>[]
          }
          delete: {
            args: Prisma.PayStubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          update: {
            args: Prisma.PayStubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          deleteMany: {
            args: Prisma.PayStubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayStubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayStubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>[]
          }
          upsert: {
            args: Prisma.PayStubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubPayload>
          }
          aggregate: {
            args: Prisma.PayStubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayStub>
          }
          groupBy: {
            args: Prisma.PayStubGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayStubGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayStubCountArgs<ExtArgs>
            result: $Utils.Optional<PayStubCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    registrationCode?: RegistrationCodeOmit
    inviteCode?: InviteCodeOmit
    role?: RoleOmit
    organization?: OrganizationOmit
    employee?: EmployeeOmit
    payperiod?: PayperiodOmit
    payStub?: PayStubOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    memberships: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    employees: number
    payperiods: number
    inviteCodes: number
    memberships: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
    payperiods?: boolean | OrganizationCountOutputTypeCountPayperiodsArgs
    inviteCodes?: boolean | OrganizationCountOutputTypeCountInviteCodesArgs
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountPayperiodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayperiodWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInviteCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    payStubs: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStubs?: boolean | EmployeeCountOutputTypeCountPayStubsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayStubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubWhereInput
  }


  /**
   * Count Type PayperiodCountOutputType
   */

  export type PayperiodCountOutputType = {
    payStubs: number
  }

  export type PayperiodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStubs?: boolean | PayperiodCountOutputTypeCountPayStubsArgs
  }

  // Custom InputTypes
  /**
   * PayperiodCountOutputType without action
   */
  export type PayperiodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayperiodCountOutputType
     */
    select?: PayperiodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayperiodCountOutputType without action
   */
  export type PayperiodCountOutputTypeCountPayStubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    passHash: string | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    passHash: string | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    isActive: number
    firstName: number
    lastName: number
    email: number
    username: number
    passHash: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    uuid: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "isActive" | "firstName" | "lastName" | "email" | "username" | "passHash", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      isActive: boolean
      firstName: string
      lastName: string
      email: string
      username: string
      passHash: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const userWithUuidOnly = await prisma.user.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `uuid`
     * const userWithUuidOnly = await prisma.user.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `uuid`
     * const userWithUuidOnly = await prisma.user.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly uuid: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passHash: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RegistrationCode
   */

  export type AggregateRegistrationCode = {
    _count: RegistrationCodeCountAggregateOutputType | null
    _min: RegistrationCodeMinAggregateOutputType | null
    _max: RegistrationCodeMaxAggregateOutputType | null
  }

  export type RegistrationCodeMinAggregateOutputType = {
    uuid: string | null
    expires: Date | null
  }

  export type RegistrationCodeMaxAggregateOutputType = {
    uuid: string | null
    expires: Date | null
  }

  export type RegistrationCodeCountAggregateOutputType = {
    uuid: number
    expires: number
    _all: number
  }


  export type RegistrationCodeMinAggregateInputType = {
    uuid?: true
    expires?: true
  }

  export type RegistrationCodeMaxAggregateInputType = {
    uuid?: true
    expires?: true
  }

  export type RegistrationCodeCountAggregateInputType = {
    uuid?: true
    expires?: true
    _all?: true
  }

  export type RegistrationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationCode to aggregate.
     */
    where?: RegistrationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationCodes to fetch.
     */
    orderBy?: RegistrationCodeOrderByWithRelationInput | RegistrationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistrationCodes
    **/
    _count?: true | RegistrationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationCodeMaxAggregateInputType
  }

  export type GetRegistrationCodeAggregateType<T extends RegistrationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistrationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistrationCode[P]>
      : GetScalarType<T[P], AggregateRegistrationCode[P]>
  }




  export type RegistrationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationCodeWhereInput
    orderBy?: RegistrationCodeOrderByWithAggregationInput | RegistrationCodeOrderByWithAggregationInput[]
    by: RegistrationCodeScalarFieldEnum[] | RegistrationCodeScalarFieldEnum
    having?: RegistrationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCodeCountAggregateInputType | true
    _min?: RegistrationCodeMinAggregateInputType
    _max?: RegistrationCodeMaxAggregateInputType
  }

  export type RegistrationCodeGroupByOutputType = {
    uuid: string
    expires: Date
    _count: RegistrationCodeCountAggregateOutputType | null
    _min: RegistrationCodeMinAggregateOutputType | null
    _max: RegistrationCodeMaxAggregateOutputType | null
  }

  type GetRegistrationCodeGroupByPayload<T extends RegistrationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationCodeGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    expires?: boolean
  }, ExtArgs["result"]["registrationCode"]>

  export type RegistrationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    expires?: boolean
  }, ExtArgs["result"]["registrationCode"]>

  export type RegistrationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    expires?: boolean
  }, ExtArgs["result"]["registrationCode"]>

  export type RegistrationCodeSelectScalar = {
    uuid?: boolean
    expires?: boolean
  }

  export type RegistrationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "expires", ExtArgs["result"]["registrationCode"]>

  export type $RegistrationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistrationCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      expires: Date
    }, ExtArgs["result"]["registrationCode"]>
    composites: {}
  }

  type RegistrationCodeGetPayload<S extends boolean | null | undefined | RegistrationCodeDefaultArgs> = $Result.GetResult<Prisma.$RegistrationCodePayload, S>

  type RegistrationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCodeCountAggregateInputType | true
    }

  export interface RegistrationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistrationCode'], meta: { name: 'RegistrationCode' } }
    /**
     * Find zero or one RegistrationCode that matches the filter.
     * @param {RegistrationCodeFindUniqueArgs} args - Arguments to find a RegistrationCode
     * @example
     * // Get one RegistrationCode
     * const registrationCode = await prisma.registrationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationCodeFindUniqueArgs>(args: SelectSubset<T, RegistrationCodeFindUniqueArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistrationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationCodeFindUniqueOrThrowArgs} args - Arguments to find a RegistrationCode
     * @example
     * // Get one RegistrationCode
     * const registrationCode = await prisma.registrationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeFindFirstArgs} args - Arguments to find a RegistrationCode
     * @example
     * // Get one RegistrationCode
     * const registrationCode = await prisma.registrationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationCodeFindFirstArgs>(args?: SelectSubset<T, RegistrationCodeFindFirstArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistrationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeFindFirstOrThrowArgs} args - Arguments to find a RegistrationCode
     * @example
     * // Get one RegistrationCode
     * const registrationCode = await prisma.registrationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistrationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistrationCodes
     * const registrationCodes = await prisma.registrationCode.findMany()
     * 
     * // Get first 10 RegistrationCodes
     * const registrationCodes = await prisma.registrationCode.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const registrationCodeWithUuidOnly = await prisma.registrationCode.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends RegistrationCodeFindManyArgs>(args?: SelectSubset<T, RegistrationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistrationCode.
     * @param {RegistrationCodeCreateArgs} args - Arguments to create a RegistrationCode.
     * @example
     * // Create one RegistrationCode
     * const RegistrationCode = await prisma.registrationCode.create({
     *   data: {
     *     // ... data to create a RegistrationCode
     *   }
     * })
     * 
     */
    create<T extends RegistrationCodeCreateArgs>(args: SelectSubset<T, RegistrationCodeCreateArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistrationCodes.
     * @param {RegistrationCodeCreateManyArgs} args - Arguments to create many RegistrationCodes.
     * @example
     * // Create many RegistrationCodes
     * const registrationCode = await prisma.registrationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCodeCreateManyArgs>(args?: SelectSubset<T, RegistrationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistrationCodes and returns the data saved in the database.
     * @param {RegistrationCodeCreateManyAndReturnArgs} args - Arguments to create many RegistrationCodes.
     * @example
     * // Create many RegistrationCodes
     * const registrationCode = await prisma.registrationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistrationCodes and only return the `uuid`
     * const registrationCodeWithUuidOnly = await prisma.registrationCode.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistrationCode.
     * @param {RegistrationCodeDeleteArgs} args - Arguments to delete one RegistrationCode.
     * @example
     * // Delete one RegistrationCode
     * const RegistrationCode = await prisma.registrationCode.delete({
     *   where: {
     *     // ... filter to delete one RegistrationCode
     *   }
     * })
     * 
     */
    delete<T extends RegistrationCodeDeleteArgs>(args: SelectSubset<T, RegistrationCodeDeleteArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistrationCode.
     * @param {RegistrationCodeUpdateArgs} args - Arguments to update one RegistrationCode.
     * @example
     * // Update one RegistrationCode
     * const registrationCode = await prisma.registrationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationCodeUpdateArgs>(args: SelectSubset<T, RegistrationCodeUpdateArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistrationCodes.
     * @param {RegistrationCodeDeleteManyArgs} args - Arguments to filter RegistrationCodes to delete.
     * @example
     * // Delete a few RegistrationCodes
     * const { count } = await prisma.registrationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationCodeDeleteManyArgs>(args?: SelectSubset<T, RegistrationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistrationCodes
     * const registrationCode = await prisma.registrationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationCodeUpdateManyArgs>(args: SelectSubset<T, RegistrationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistrationCodes and returns the data updated in the database.
     * @param {RegistrationCodeUpdateManyAndReturnArgs} args - Arguments to update many RegistrationCodes.
     * @example
     * // Update many RegistrationCodes
     * const registrationCode = await prisma.registrationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistrationCodes and only return the `uuid`
     * const registrationCodeWithUuidOnly = await prisma.registrationCode.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegistrationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistrationCode.
     * @param {RegistrationCodeUpsertArgs} args - Arguments to update or create a RegistrationCode.
     * @example
     * // Update or create a RegistrationCode
     * const registrationCode = await prisma.registrationCode.upsert({
     *   create: {
     *     // ... data to create a RegistrationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistrationCode we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationCodeUpsertArgs>(args: SelectSubset<T, RegistrationCodeUpsertArgs<ExtArgs>>): Prisma__RegistrationCodeClient<$Result.GetResult<Prisma.$RegistrationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistrationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeCountArgs} args - Arguments to filter RegistrationCodes to count.
     * @example
     * // Count the number of RegistrationCodes
     * const count = await prisma.registrationCode.count({
     *   where: {
     *     // ... the filter for the RegistrationCodes we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCodeCountArgs>(
      args?: Subset<T, RegistrationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistrationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegistrationCodeAggregateArgs>(args: Subset<T, RegistrationCodeAggregateArgs>): Prisma.PrismaPromise<GetRegistrationCodeAggregateType<T>>

    /**
     * Group by RegistrationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegistrationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationCodeGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegistrationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistrationCode model
   */
  readonly fields: RegistrationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistrationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegistrationCode model
   */
  interface RegistrationCodeFieldRefs {
    readonly uuid: FieldRef<"RegistrationCode", 'String'>
    readonly expires: FieldRef<"RegistrationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RegistrationCode findUnique
   */
  export type RegistrationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter, which RegistrationCode to fetch.
     */
    where: RegistrationCodeWhereUniqueInput
  }

  /**
   * RegistrationCode findUniqueOrThrow
   */
  export type RegistrationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter, which RegistrationCode to fetch.
     */
    where: RegistrationCodeWhereUniqueInput
  }

  /**
   * RegistrationCode findFirst
   */
  export type RegistrationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter, which RegistrationCode to fetch.
     */
    where?: RegistrationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationCodes to fetch.
     */
    orderBy?: RegistrationCodeOrderByWithRelationInput | RegistrationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationCodes.
     */
    cursor?: RegistrationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationCodes.
     */
    distinct?: RegistrationCodeScalarFieldEnum | RegistrationCodeScalarFieldEnum[]
  }

  /**
   * RegistrationCode findFirstOrThrow
   */
  export type RegistrationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter, which RegistrationCode to fetch.
     */
    where?: RegistrationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationCodes to fetch.
     */
    orderBy?: RegistrationCodeOrderByWithRelationInput | RegistrationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistrationCodes.
     */
    cursor?: RegistrationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistrationCodes.
     */
    distinct?: RegistrationCodeScalarFieldEnum | RegistrationCodeScalarFieldEnum[]
  }

  /**
   * RegistrationCode findMany
   */
  export type RegistrationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter, which RegistrationCodes to fetch.
     */
    where?: RegistrationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistrationCodes to fetch.
     */
    orderBy?: RegistrationCodeOrderByWithRelationInput | RegistrationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistrationCodes.
     */
    cursor?: RegistrationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistrationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistrationCodes.
     */
    skip?: number
    distinct?: RegistrationCodeScalarFieldEnum | RegistrationCodeScalarFieldEnum[]
  }

  /**
   * RegistrationCode create
   */
  export type RegistrationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a RegistrationCode.
     */
    data: XOR<RegistrationCodeCreateInput, RegistrationCodeUncheckedCreateInput>
  }

  /**
   * RegistrationCode createMany
   */
  export type RegistrationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistrationCodes.
     */
    data: RegistrationCodeCreateManyInput | RegistrationCodeCreateManyInput[]
  }

  /**
   * RegistrationCode createManyAndReturn
   */
  export type RegistrationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many RegistrationCodes.
     */
    data: RegistrationCodeCreateManyInput | RegistrationCodeCreateManyInput[]
  }

  /**
   * RegistrationCode update
   */
  export type RegistrationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a RegistrationCode.
     */
    data: XOR<RegistrationCodeUpdateInput, RegistrationCodeUncheckedUpdateInput>
    /**
     * Choose, which RegistrationCode to update.
     */
    where: RegistrationCodeWhereUniqueInput
  }

  /**
   * RegistrationCode updateMany
   */
  export type RegistrationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistrationCodes.
     */
    data: XOR<RegistrationCodeUpdateManyMutationInput, RegistrationCodeUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationCodes to update
     */
    where?: RegistrationCodeWhereInput
    /**
     * Limit how many RegistrationCodes to update.
     */
    limit?: number
  }

  /**
   * RegistrationCode updateManyAndReturn
   */
  export type RegistrationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * The data used to update RegistrationCodes.
     */
    data: XOR<RegistrationCodeUpdateManyMutationInput, RegistrationCodeUncheckedUpdateManyInput>
    /**
     * Filter which RegistrationCodes to update
     */
    where?: RegistrationCodeWhereInput
    /**
     * Limit how many RegistrationCodes to update.
     */
    limit?: number
  }

  /**
   * RegistrationCode upsert
   */
  export type RegistrationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the RegistrationCode to update in case it exists.
     */
    where: RegistrationCodeWhereUniqueInput
    /**
     * In case the RegistrationCode found by the `where` argument doesn't exist, create a new RegistrationCode with this data.
     */
    create: XOR<RegistrationCodeCreateInput, RegistrationCodeUncheckedCreateInput>
    /**
     * In case the RegistrationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationCodeUpdateInput, RegistrationCodeUncheckedUpdateInput>
  }

  /**
   * RegistrationCode delete
   */
  export type RegistrationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
    /**
     * Filter which RegistrationCode to delete.
     */
    where: RegistrationCodeWhereUniqueInput
  }

  /**
   * RegistrationCode deleteMany
   */
  export type RegistrationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistrationCodes to delete
     */
    where?: RegistrationCodeWhereInput
    /**
     * Limit how many RegistrationCodes to delete.
     */
    limit?: number
  }

  /**
   * RegistrationCode without action
   */
  export type RegistrationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCode
     */
    select?: RegistrationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistrationCode
     */
    omit?: RegistrationCodeOmit<ExtArgs> | null
  }


  /**
   * Model InviteCode
   */

  export type AggregateInviteCode = {
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  export type InviteCodeMinAggregateOutputType = {
    uuid: string | null
    organizationId: string | null
    role: string | null
    expires: Date | null
  }

  export type InviteCodeMaxAggregateOutputType = {
    uuid: string | null
    organizationId: string | null
    role: string | null
    expires: Date | null
  }

  export type InviteCodeCountAggregateOutputType = {
    uuid: number
    organizationId: number
    role: number
    expires: number
    _all: number
  }


  export type InviteCodeMinAggregateInputType = {
    uuid?: true
    organizationId?: true
    role?: true
    expires?: true
  }

  export type InviteCodeMaxAggregateInputType = {
    uuid?: true
    organizationId?: true
    role?: true
    expires?: true
  }

  export type InviteCodeCountAggregateInputType = {
    uuid?: true
    organizationId?: true
    role?: true
    expires?: true
    _all?: true
  }

  export type InviteCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCode to aggregate.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteCodes
    **/
    _count?: true | InviteCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteCodeMaxAggregateInputType
  }

  export type GetInviteCodeAggregateType<T extends InviteCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteCode[P]>
      : GetScalarType<T[P], AggregateInviteCode[P]>
  }




  export type InviteCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithAggregationInput | InviteCodeOrderByWithAggregationInput[]
    by: InviteCodeScalarFieldEnum[] | InviteCodeScalarFieldEnum
    having?: InviteCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCodeCountAggregateInputType | true
    _min?: InviteCodeMinAggregateInputType
    _max?: InviteCodeMaxAggregateInputType
  }

  export type InviteCodeGroupByOutputType = {
    uuid: string
    organizationId: string
    role: string
    expires: Date
    _count: InviteCodeCountAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  type GetInviteCodeGroupByPayload<T extends InviteCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
        }
      >
    >


  export type InviteCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    role?: boolean
    expires?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    role?: boolean
    expires?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    role?: boolean
    expires?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inviteCode"]>

  export type InviteCodeSelectScalar = {
    uuid?: boolean
    organizationId?: boolean
    role?: boolean
    expires?: boolean
  }

  export type InviteCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "organizationId" | "role" | "expires", ExtArgs["result"]["inviteCode"]>
  export type InviteCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type InviteCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type InviteCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $InviteCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteCode"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      organizationId: string
      role: string
      expires: Date
    }, ExtArgs["result"]["inviteCode"]>
    composites: {}
  }

  type InviteCodeGetPayload<S extends boolean | null | undefined | InviteCodeDefaultArgs> = $Result.GetResult<Prisma.$InviteCodePayload, S>

  type InviteCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCodeCountAggregateInputType | true
    }

  export interface InviteCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteCode'], meta: { name: 'InviteCode' } }
    /**
     * Find zero or one InviteCode that matches the filter.
     * @param {InviteCodeFindUniqueArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteCodeFindUniqueArgs>(args: SelectSubset<T, InviteCodeFindUniqueArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InviteCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteCodeFindUniqueOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteCodeFindFirstArgs>(args?: SelectSubset<T, InviteCodeFindFirstArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InviteCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InviteCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany()
     * 
     * // Get first 10 InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const inviteCodeWithUuidOnly = await prisma.inviteCode.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends InviteCodeFindManyArgs>(args?: SelectSubset<T, InviteCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InviteCode.
     * @param {InviteCodeCreateArgs} args - Arguments to create a InviteCode.
     * @example
     * // Create one InviteCode
     * const InviteCode = await prisma.inviteCode.create({
     *   data: {
     *     // ... data to create a InviteCode
     *   }
     * })
     * 
     */
    create<T extends InviteCodeCreateArgs>(args: SelectSubset<T, InviteCodeCreateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InviteCodes.
     * @param {InviteCodeCreateManyArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCodeCreateManyArgs>(args?: SelectSubset<T, InviteCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InviteCodes and returns the data saved in the database.
     * @param {InviteCodeCreateManyAndReturnArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InviteCodes and only return the `uuid`
     * const inviteCodeWithUuidOnly = await prisma.inviteCode.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InviteCode.
     * @param {InviteCodeDeleteArgs} args - Arguments to delete one InviteCode.
     * @example
     * // Delete one InviteCode
     * const InviteCode = await prisma.inviteCode.delete({
     *   where: {
     *     // ... filter to delete one InviteCode
     *   }
     * })
     * 
     */
    delete<T extends InviteCodeDeleteArgs>(args: SelectSubset<T, InviteCodeDeleteArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InviteCode.
     * @param {InviteCodeUpdateArgs} args - Arguments to update one InviteCode.
     * @example
     * // Update one InviteCode
     * const inviteCode = await prisma.inviteCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteCodeUpdateArgs>(args: SelectSubset<T, InviteCodeUpdateArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InviteCodes.
     * @param {InviteCodeDeleteManyArgs} args - Arguments to filter InviteCodes to delete.
     * @example
     * // Delete a few InviteCodes
     * const { count } = await prisma.inviteCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteCodeDeleteManyArgs>(args?: SelectSubset<T, InviteCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteCodeUpdateManyArgs>(args: SelectSubset<T, InviteCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes and returns the data updated in the database.
     * @param {InviteCodeUpdateManyAndReturnArgs} args - Arguments to update many InviteCodes.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InviteCodes and only return the `uuid`
     * const inviteCodeWithUuidOnly = await prisma.inviteCode.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InviteCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InviteCode.
     * @param {InviteCodeUpsertArgs} args - Arguments to update or create a InviteCode.
     * @example
     * // Update or create a InviteCode
     * const inviteCode = await prisma.inviteCode.upsert({
     *   create: {
     *     // ... data to create a InviteCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteCode we want to update
     *   }
     * })
     */
    upsert<T extends InviteCodeUpsertArgs>(args: SelectSubset<T, InviteCodeUpsertArgs<ExtArgs>>): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeCountArgs} args - Arguments to filter InviteCodes to count.
     * @example
     * // Count the number of InviteCodes
     * const count = await prisma.inviteCode.count({
     *   where: {
     *     // ... the filter for the InviteCodes we want to count
     *   }
     * })
    **/
    count<T extends InviteCodeCountArgs>(
      args?: Subset<T, InviteCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteCodeAggregateArgs>(args: Subset<T, InviteCodeAggregateArgs>): Prisma.PrismaPromise<GetInviteCodeAggregateType<T>>

    /**
     * Group by InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteCodeGroupByArgs['orderBy'] }
        : { orderBy?: InviteCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteCode model
   */
  readonly fields: InviteCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InviteCode model
   */
  interface InviteCodeFieldRefs {
    readonly uuid: FieldRef<"InviteCode", 'String'>
    readonly organizationId: FieldRef<"InviteCode", 'String'>
    readonly role: FieldRef<"InviteCode", 'String'>
    readonly expires: FieldRef<"InviteCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteCode findUnique
   */
  export type InviteCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findUniqueOrThrow
   */
  export type InviteCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findFirst
   */
  export type InviteCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findFirstOrThrow
   */
  export type InviteCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findMany
   */
  export type InviteCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter, which InviteCodes to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode create
   */
  export type InviteCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a InviteCode.
     */
    data: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
  }

  /**
   * InviteCode createMany
   */
  export type InviteCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
  }

  /**
   * InviteCode createManyAndReturn
   */
  export type InviteCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode update
   */
  export type InviteCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a InviteCode.
     */
    data: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
    /**
     * Choose, which InviteCode to update.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode updateMany
   */
  export type InviteCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
  }

  /**
   * InviteCode updateManyAndReturn
   */
  export type InviteCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InviteCode upsert
   */
  export type InviteCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the InviteCode to update in case it exists.
     */
    where: InviteCodeWhereUniqueInput
    /**
     * In case the InviteCode found by the `where` argument doesn't exist, create a new InviteCode with this data.
     */
    create: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
    /**
     * In case the InviteCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
  }

  /**
   * InviteCode delete
   */
  export type InviteCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    /**
     * Filter which InviteCode to delete.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode deleteMany
   */
  export type InviteCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCodes to delete
     */
    where?: InviteCodeWhereInput
    /**
     * Limit how many InviteCodes to delete.
     */
    limit?: number
  }

  /**
   * InviteCode without action
   */
  export type InviteCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    uuid: string | null
    userId: string | null
    organizationId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    uuid: string | null
    userId: string | null
    organizationId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    uuid: number
    userId: number
    organizationId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    uuid?: true
    userId?: true
    organizationId?: true
    role?: true
    joinedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    uuid?: true
    userId?: true
    organizationId?: true
    role?: true
    joinedAt?: true
  }

  export type RoleCountAggregateInputType = {
    uuid?: true
    userId?: true
    organizationId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    uuid: string
    userId: string
    organizationId: string
    role: string
    joinedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    uuid?: boolean
    userId?: boolean
    organizationId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "userId" | "organizationId" | "role" | "joinedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      userId: string
      organizationId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const roleWithUuidOnly = await prisma.role.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `uuid`
     * const roleWithUuidOnly = await prisma.role.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `uuid`
     * const roleWithUuidOnly = await prisma.role.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly uuid: FieldRef<"Role", 'String'>
    readonly userId: FieldRef<"Role", 'String'>
    readonly organizationId: FieldRef<"Role", 'String'>
    readonly role: FieldRef<"Role", 'String'>
    readonly joinedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    periodsPerYear: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    periodsPerYear: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    notes: string | null
    address: string | null
    isDeleted: boolean | null
    periodsPerYear: number | null
    periodsRefDate: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    notes: string | null
    address: string | null
    isDeleted: boolean | null
    periodsPerYear: number | null
    periodsRefDate: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    uuid: number
    name: number
    notes: number
    address: number
    isDeleted: number
    periodsPerYear: number
    periodsRefDate: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    periodsPerYear?: true
  }

  export type OrganizationSumAggregateInputType = {
    periodsPerYear?: true
  }

  export type OrganizationMinAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
    periodsPerYear?: true
    periodsRefDate?: true
  }

  export type OrganizationMaxAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
    periodsPerYear?: true
    periodsRefDate?: true
  }

  export type OrganizationCountAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
    periodsPerYear?: true
    periodsRefDate?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    uuid: string
    name: string
    notes: string
    address: string
    isDeleted: boolean
    periodsPerYear: number
    periodsRefDate: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
    periodsPerYear?: boolean
    periodsRefDate?: boolean
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    payperiods?: boolean | Organization$payperiodsArgs<ExtArgs>
    inviteCodes?: boolean | Organization$inviteCodesArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
    periodsPerYear?: boolean
    periodsRefDate?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
    periodsPerYear?: boolean
    periodsRefDate?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
    periodsPerYear?: boolean
    periodsRefDate?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "notes" | "address" | "isDeleted" | "periodsPerYear" | "periodsRefDate", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    payperiods?: boolean | Organization$payperiodsArgs<ExtArgs>
    inviteCodes?: boolean | Organization$inviteCodesArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      payperiods: Prisma.$PayperiodPayload<ExtArgs>[]
      inviteCodes: Prisma.$InviteCodePayload<ExtArgs>[]
      memberships: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      notes: string
      address: string
      isDeleted: boolean
      periodsPerYear: number
      periodsRefDate: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const organizationWithUuidOnly = await prisma.organization.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `uuid`
     * const organizationWithUuidOnly = await prisma.organization.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `uuid`
     * const organizationWithUuidOnly = await prisma.organization.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Organization$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payperiods<T extends Organization$payperiodsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$payperiodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inviteCodes<T extends Organization$inviteCodesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$inviteCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends Organization$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly uuid: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly notes: FieldRef<"Organization", 'String'>
    readonly address: FieldRef<"Organization", 'String'>
    readonly isDeleted: FieldRef<"Organization", 'Boolean'>
    readonly periodsPerYear: FieldRef<"Organization", 'Int'>
    readonly periodsRefDate: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.employees
   */
  export type Organization$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Organization.payperiods
   */
  export type Organization$payperiodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    where?: PayperiodWhereInput
    orderBy?: PayperiodOrderByWithRelationInput | PayperiodOrderByWithRelationInput[]
    cursor?: PayperiodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayperiodScalarFieldEnum | PayperiodScalarFieldEnum[]
  }

  /**
   * Organization.inviteCodes
   */
  export type Organization$inviteCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InviteCode
     */
    omit?: InviteCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteCodeInclude<ExtArgs> | null
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    cursor?: InviteCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * Organization.memberships
   */
  export type Organization$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    salary: Decimal | null
    dependants: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    salary: Decimal | null
    dependants: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    uuid: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    notes: string | null
    address: string | null
    email: string | null
    phoneNumber: string | null
    ssn: string | null
    isSalary: boolean | null
    salary: Decimal | null
    filingStatus: string | null
    dependants: number | null
    isDeleted: boolean | null
    organizationId: string | null
  }

  export type EmployeeMaxAggregateOutputType = {
    uuid: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    notes: string | null
    address: string | null
    email: string | null
    phoneNumber: string | null
    ssn: string | null
    isSalary: boolean | null
    salary: Decimal | null
    filingStatus: string | null
    dependants: number | null
    isDeleted: boolean | null
    organizationId: string | null
  }

  export type EmployeeCountAggregateOutputType = {
    uuid: number
    firstName: number
    middleName: number
    lastName: number
    notes: number
    address: number
    email: number
    phoneNumber: number
    ssn: number
    isSalary: number
    salary: number
    hourlyRates: number
    filingStatus: number
    dependants: number
    isDeleted: number
    organizationId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    salary?: true
    dependants?: true
  }

  export type EmployeeSumAggregateInputType = {
    salary?: true
    dependants?: true
  }

  export type EmployeeMinAggregateInputType = {
    uuid?: true
    firstName?: true
    middleName?: true
    lastName?: true
    notes?: true
    address?: true
    email?: true
    phoneNumber?: true
    ssn?: true
    isSalary?: true
    salary?: true
    filingStatus?: true
    dependants?: true
    isDeleted?: true
    organizationId?: true
  }

  export type EmployeeMaxAggregateInputType = {
    uuid?: true
    firstName?: true
    middleName?: true
    lastName?: true
    notes?: true
    address?: true
    email?: true
    phoneNumber?: true
    ssn?: true
    isSalary?: true
    salary?: true
    filingStatus?: true
    dependants?: true
    isDeleted?: true
    organizationId?: true
  }

  export type EmployeeCountAggregateInputType = {
    uuid?: true
    firstName?: true
    middleName?: true
    lastName?: true
    notes?: true
    address?: true
    email?: true
    phoneNumber?: true
    ssn?: true
    isSalary?: true
    salary?: true
    hourlyRates?: true
    filingStatus?: true
    dependants?: true
    isDeleted?: true
    organizationId?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    uuid: string
    firstName: string
    middleName: string
    lastName: string
    notes: string
    address: string
    email: string
    phoneNumber: string
    ssn: string
    isSalary: boolean
    salary: Decimal
    hourlyRates: JsonValue
    filingStatus: string
    dependants: number
    isDeleted: boolean
    organizationId: string
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    notes?: boolean
    address?: boolean
    email?: boolean
    phoneNumber?: boolean
    ssn?: boolean
    isSalary?: boolean
    salary?: boolean
    hourlyRates?: boolean
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payStubs?: boolean | Employee$payStubsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    notes?: boolean
    address?: boolean
    email?: boolean
    phoneNumber?: boolean
    ssn?: boolean
    isSalary?: boolean
    salary?: boolean
    hourlyRates?: boolean
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    notes?: boolean
    address?: boolean
    email?: boolean
    phoneNumber?: boolean
    ssn?: boolean
    isSalary?: boolean
    salary?: boolean
    hourlyRates?: boolean
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    uuid?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    notes?: boolean
    address?: boolean
    email?: boolean
    phoneNumber?: boolean
    ssn?: boolean
    isSalary?: boolean
    salary?: boolean
    hourlyRates?: boolean
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "firstName" | "middleName" | "lastName" | "notes" | "address" | "email" | "phoneNumber" | "ssn" | "isSalary" | "salary" | "hourlyRates" | "filingStatus" | "dependants" | "isDeleted" | "organizationId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payStubs?: boolean | Employee$payStubsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      payStubs: Prisma.$PayStubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      firstName: string
      middleName: string
      lastName: string
      notes: string
      address: string
      email: string
      phoneNumber: string
      ssn: string
      isSalary: boolean
      salary: Prisma.Decimal
      hourlyRates: Prisma.JsonValue
      filingStatus: string
      dependants: number
      isDeleted: boolean
      organizationId: string
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const employeeWithUuidOnly = await prisma.employee.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `uuid`
     * const employeeWithUuidOnly = await prisma.employee.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `uuid`
     * const employeeWithUuidOnly = await prisma.employee.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payStubs<T extends Employee$payStubsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payStubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly uuid: FieldRef<"Employee", 'String'>
    readonly firstName: FieldRef<"Employee", 'String'>
    readonly middleName: FieldRef<"Employee", 'String'>
    readonly lastName: FieldRef<"Employee", 'String'>
    readonly notes: FieldRef<"Employee", 'String'>
    readonly address: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly phoneNumber: FieldRef<"Employee", 'String'>
    readonly ssn: FieldRef<"Employee", 'String'>
    readonly isSalary: FieldRef<"Employee", 'Boolean'>
    readonly salary: FieldRef<"Employee", 'Decimal'>
    readonly hourlyRates: FieldRef<"Employee", 'Json'>
    readonly filingStatus: FieldRef<"Employee", 'String'>
    readonly dependants: FieldRef<"Employee", 'Int'>
    readonly isDeleted: FieldRef<"Employee", 'Boolean'>
    readonly organizationId: FieldRef<"Employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.payStubs
   */
  export type Employee$payStubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    where?: PayStubWhereInput
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    cursor?: PayStubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubScalarFieldEnum | PayStubScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Payperiod
   */

  export type AggregatePayperiod = {
    _count: PayperiodCountAggregateOutputType | null
    _min: PayperiodMinAggregateOutputType | null
    _max: PayperiodMaxAggregateOutputType | null
  }

  export type PayperiodMinAggregateOutputType = {
    uuid: string | null
    periodStart: Date | null
    periodEnd: Date | null
    organizationId: string | null
  }

  export type PayperiodMaxAggregateOutputType = {
    uuid: string | null
    periodStart: Date | null
    periodEnd: Date | null
    organizationId: string | null
  }

  export type PayperiodCountAggregateOutputType = {
    uuid: number
    periodStart: number
    periodEnd: number
    includedEmployees: number
    organizationId: number
    _all: number
  }


  export type PayperiodMinAggregateInputType = {
    uuid?: true
    periodStart?: true
    periodEnd?: true
    organizationId?: true
  }

  export type PayperiodMaxAggregateInputType = {
    uuid?: true
    periodStart?: true
    periodEnd?: true
    organizationId?: true
  }

  export type PayperiodCountAggregateInputType = {
    uuid?: true
    periodStart?: true
    periodEnd?: true
    includedEmployees?: true
    organizationId?: true
    _all?: true
  }

  export type PayperiodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payperiod to aggregate.
     */
    where?: PayperiodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payperiods to fetch.
     */
    orderBy?: PayperiodOrderByWithRelationInput | PayperiodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayperiodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payperiods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payperiods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payperiods
    **/
    _count?: true | PayperiodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayperiodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayperiodMaxAggregateInputType
  }

  export type GetPayperiodAggregateType<T extends PayperiodAggregateArgs> = {
        [P in keyof T & keyof AggregatePayperiod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayperiod[P]>
      : GetScalarType<T[P], AggregatePayperiod[P]>
  }




  export type PayperiodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayperiodWhereInput
    orderBy?: PayperiodOrderByWithAggregationInput | PayperiodOrderByWithAggregationInput[]
    by: PayperiodScalarFieldEnum[] | PayperiodScalarFieldEnum
    having?: PayperiodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayperiodCountAggregateInputType | true
    _min?: PayperiodMinAggregateInputType
    _max?: PayperiodMaxAggregateInputType
  }

  export type PayperiodGroupByOutputType = {
    uuid: string
    periodStart: Date
    periodEnd: Date
    includedEmployees: JsonValue
    organizationId: string
    _count: PayperiodCountAggregateOutputType | null
    _min: PayperiodMinAggregateOutputType | null
    _max: PayperiodMaxAggregateOutputType | null
  }

  type GetPayperiodGroupByPayload<T extends PayperiodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayperiodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayperiodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayperiodGroupByOutputType[P]>
            : GetScalarType<T[P], PayperiodGroupByOutputType[P]>
        }
      >
    >


  export type PayperiodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    includedEmployees?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payStubs?: boolean | Payperiod$payStubsArgs<ExtArgs>
    _count?: boolean | PayperiodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payperiod"]>

  export type PayperiodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    includedEmployees?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payperiod"]>

  export type PayperiodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    includedEmployees?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payperiod"]>

  export type PayperiodSelectScalar = {
    uuid?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    includedEmployees?: boolean
    organizationId?: boolean
  }

  export type PayperiodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "periodStart" | "periodEnd" | "includedEmployees" | "organizationId", ExtArgs["result"]["payperiod"]>
  export type PayperiodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    payStubs?: boolean | Payperiod$payStubsArgs<ExtArgs>
    _count?: boolean | PayperiodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayperiodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PayperiodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PayperiodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payperiod"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      payStubs: Prisma.$PayStubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      periodStart: Date
      periodEnd: Date
      includedEmployees: Prisma.JsonValue
      organizationId: string
    }, ExtArgs["result"]["payperiod"]>
    composites: {}
  }

  type PayperiodGetPayload<S extends boolean | null | undefined | PayperiodDefaultArgs> = $Result.GetResult<Prisma.$PayperiodPayload, S>

  type PayperiodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayperiodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayperiodCountAggregateInputType | true
    }

  export interface PayperiodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payperiod'], meta: { name: 'Payperiod' } }
    /**
     * Find zero or one Payperiod that matches the filter.
     * @param {PayperiodFindUniqueArgs} args - Arguments to find a Payperiod
     * @example
     * // Get one Payperiod
     * const payperiod = await prisma.payperiod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayperiodFindUniqueArgs>(args: SelectSubset<T, PayperiodFindUniqueArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payperiod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayperiodFindUniqueOrThrowArgs} args - Arguments to find a Payperiod
     * @example
     * // Get one Payperiod
     * const payperiod = await prisma.payperiod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayperiodFindUniqueOrThrowArgs>(args: SelectSubset<T, PayperiodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payperiod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodFindFirstArgs} args - Arguments to find a Payperiod
     * @example
     * // Get one Payperiod
     * const payperiod = await prisma.payperiod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayperiodFindFirstArgs>(args?: SelectSubset<T, PayperiodFindFirstArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payperiod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodFindFirstOrThrowArgs} args - Arguments to find a Payperiod
     * @example
     * // Get one Payperiod
     * const payperiod = await prisma.payperiod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayperiodFindFirstOrThrowArgs>(args?: SelectSubset<T, PayperiodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payperiods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payperiods
     * const payperiods = await prisma.payperiod.findMany()
     * 
     * // Get first 10 Payperiods
     * const payperiods = await prisma.payperiod.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const payperiodWithUuidOnly = await prisma.payperiod.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends PayperiodFindManyArgs>(args?: SelectSubset<T, PayperiodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payperiod.
     * @param {PayperiodCreateArgs} args - Arguments to create a Payperiod.
     * @example
     * // Create one Payperiod
     * const Payperiod = await prisma.payperiod.create({
     *   data: {
     *     // ... data to create a Payperiod
     *   }
     * })
     * 
     */
    create<T extends PayperiodCreateArgs>(args: SelectSubset<T, PayperiodCreateArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payperiods.
     * @param {PayperiodCreateManyArgs} args - Arguments to create many Payperiods.
     * @example
     * // Create many Payperiods
     * const payperiod = await prisma.payperiod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayperiodCreateManyArgs>(args?: SelectSubset<T, PayperiodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payperiods and returns the data saved in the database.
     * @param {PayperiodCreateManyAndReturnArgs} args - Arguments to create many Payperiods.
     * @example
     * // Create many Payperiods
     * const payperiod = await prisma.payperiod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payperiods and only return the `uuid`
     * const payperiodWithUuidOnly = await prisma.payperiod.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayperiodCreateManyAndReturnArgs>(args?: SelectSubset<T, PayperiodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payperiod.
     * @param {PayperiodDeleteArgs} args - Arguments to delete one Payperiod.
     * @example
     * // Delete one Payperiod
     * const Payperiod = await prisma.payperiod.delete({
     *   where: {
     *     // ... filter to delete one Payperiod
     *   }
     * })
     * 
     */
    delete<T extends PayperiodDeleteArgs>(args: SelectSubset<T, PayperiodDeleteArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payperiod.
     * @param {PayperiodUpdateArgs} args - Arguments to update one Payperiod.
     * @example
     * // Update one Payperiod
     * const payperiod = await prisma.payperiod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayperiodUpdateArgs>(args: SelectSubset<T, PayperiodUpdateArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payperiods.
     * @param {PayperiodDeleteManyArgs} args - Arguments to filter Payperiods to delete.
     * @example
     * // Delete a few Payperiods
     * const { count } = await prisma.payperiod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayperiodDeleteManyArgs>(args?: SelectSubset<T, PayperiodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payperiods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payperiods
     * const payperiod = await prisma.payperiod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayperiodUpdateManyArgs>(args: SelectSubset<T, PayperiodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payperiods and returns the data updated in the database.
     * @param {PayperiodUpdateManyAndReturnArgs} args - Arguments to update many Payperiods.
     * @example
     * // Update many Payperiods
     * const payperiod = await prisma.payperiod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payperiods and only return the `uuid`
     * const payperiodWithUuidOnly = await prisma.payperiod.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayperiodUpdateManyAndReturnArgs>(args: SelectSubset<T, PayperiodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payperiod.
     * @param {PayperiodUpsertArgs} args - Arguments to update or create a Payperiod.
     * @example
     * // Update or create a Payperiod
     * const payperiod = await prisma.payperiod.upsert({
     *   create: {
     *     // ... data to create a Payperiod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payperiod we want to update
     *   }
     * })
     */
    upsert<T extends PayperiodUpsertArgs>(args: SelectSubset<T, PayperiodUpsertArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payperiods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodCountArgs} args - Arguments to filter Payperiods to count.
     * @example
     * // Count the number of Payperiods
     * const count = await prisma.payperiod.count({
     *   where: {
     *     // ... the filter for the Payperiods we want to count
     *   }
     * })
    **/
    count<T extends PayperiodCountArgs>(
      args?: Subset<T, PayperiodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayperiodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payperiod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayperiodAggregateArgs>(args: Subset<T, PayperiodAggregateArgs>): Prisma.PrismaPromise<GetPayperiodAggregateType<T>>

    /**
     * Group by Payperiod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayperiodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayperiodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayperiodGroupByArgs['orderBy'] }
        : { orderBy?: PayperiodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayperiodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayperiodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payperiod model
   */
  readonly fields: PayperiodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payperiod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayperiodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payStubs<T extends Payperiod$payStubsArgs<ExtArgs> = {}>(args?: Subset<T, Payperiod$payStubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payperiod model
   */
  interface PayperiodFieldRefs {
    readonly uuid: FieldRef<"Payperiod", 'String'>
    readonly periodStart: FieldRef<"Payperiod", 'DateTime'>
    readonly periodEnd: FieldRef<"Payperiod", 'DateTime'>
    readonly includedEmployees: FieldRef<"Payperiod", 'Json'>
    readonly organizationId: FieldRef<"Payperiod", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payperiod findUnique
   */
  export type PayperiodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter, which Payperiod to fetch.
     */
    where: PayperiodWhereUniqueInput
  }

  /**
   * Payperiod findUniqueOrThrow
   */
  export type PayperiodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter, which Payperiod to fetch.
     */
    where: PayperiodWhereUniqueInput
  }

  /**
   * Payperiod findFirst
   */
  export type PayperiodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter, which Payperiod to fetch.
     */
    where?: PayperiodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payperiods to fetch.
     */
    orderBy?: PayperiodOrderByWithRelationInput | PayperiodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payperiods.
     */
    cursor?: PayperiodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payperiods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payperiods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payperiods.
     */
    distinct?: PayperiodScalarFieldEnum | PayperiodScalarFieldEnum[]
  }

  /**
   * Payperiod findFirstOrThrow
   */
  export type PayperiodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter, which Payperiod to fetch.
     */
    where?: PayperiodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payperiods to fetch.
     */
    orderBy?: PayperiodOrderByWithRelationInput | PayperiodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payperiods.
     */
    cursor?: PayperiodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payperiods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payperiods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payperiods.
     */
    distinct?: PayperiodScalarFieldEnum | PayperiodScalarFieldEnum[]
  }

  /**
   * Payperiod findMany
   */
  export type PayperiodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter, which Payperiods to fetch.
     */
    where?: PayperiodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payperiods to fetch.
     */
    orderBy?: PayperiodOrderByWithRelationInput | PayperiodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payperiods.
     */
    cursor?: PayperiodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payperiods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payperiods.
     */
    skip?: number
    distinct?: PayperiodScalarFieldEnum | PayperiodScalarFieldEnum[]
  }

  /**
   * Payperiod create
   */
  export type PayperiodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * The data needed to create a Payperiod.
     */
    data: XOR<PayperiodCreateInput, PayperiodUncheckedCreateInput>
  }

  /**
   * Payperiod createMany
   */
  export type PayperiodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payperiods.
     */
    data: PayperiodCreateManyInput | PayperiodCreateManyInput[]
  }

  /**
   * Payperiod createManyAndReturn
   */
  export type PayperiodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * The data used to create many Payperiods.
     */
    data: PayperiodCreateManyInput | PayperiodCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payperiod update
   */
  export type PayperiodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * The data needed to update a Payperiod.
     */
    data: XOR<PayperiodUpdateInput, PayperiodUncheckedUpdateInput>
    /**
     * Choose, which Payperiod to update.
     */
    where: PayperiodWhereUniqueInput
  }

  /**
   * Payperiod updateMany
   */
  export type PayperiodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payperiods.
     */
    data: XOR<PayperiodUpdateManyMutationInput, PayperiodUncheckedUpdateManyInput>
    /**
     * Filter which Payperiods to update
     */
    where?: PayperiodWhereInput
    /**
     * Limit how many Payperiods to update.
     */
    limit?: number
  }

  /**
   * Payperiod updateManyAndReturn
   */
  export type PayperiodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * The data used to update Payperiods.
     */
    data: XOR<PayperiodUpdateManyMutationInput, PayperiodUncheckedUpdateManyInput>
    /**
     * Filter which Payperiods to update
     */
    where?: PayperiodWhereInput
    /**
     * Limit how many Payperiods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payperiod upsert
   */
  export type PayperiodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * The filter to search for the Payperiod to update in case it exists.
     */
    where: PayperiodWhereUniqueInput
    /**
     * In case the Payperiod found by the `where` argument doesn't exist, create a new Payperiod with this data.
     */
    create: XOR<PayperiodCreateInput, PayperiodUncheckedCreateInput>
    /**
     * In case the Payperiod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayperiodUpdateInput, PayperiodUncheckedUpdateInput>
  }

  /**
   * Payperiod delete
   */
  export type PayperiodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
    /**
     * Filter which Payperiod to delete.
     */
    where: PayperiodWhereUniqueInput
  }

  /**
   * Payperiod deleteMany
   */
  export type PayperiodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payperiods to delete
     */
    where?: PayperiodWhereInput
    /**
     * Limit how many Payperiods to delete.
     */
    limit?: number
  }

  /**
   * Payperiod.payStubs
   */
  export type Payperiod$payStubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    where?: PayStubWhereInput
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    cursor?: PayStubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubScalarFieldEnum | PayStubScalarFieldEnum[]
  }

  /**
   * Payperiod without action
   */
  export type PayperiodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payperiod
     */
    select?: PayperiodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payperiod
     */
    omit?: PayperiodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayperiodInclude<ExtArgs> | null
  }


  /**
   * Model PayStub
   */

  export type AggregatePayStub = {
    _count: PayStubCountAggregateOutputType | null
    _avg: PayStubAvgAggregateOutputType | null
    _sum: PayStubSumAggregateOutputType | null
    _min: PayStubMinAggregateOutputType | null
    _max: PayStubMaxAggregateOutputType | null
  }

  export type PayStubAvgAggregateOutputType = {
    salary: Decimal | null
    commission: Decimal | null
    bonus: Decimal | null
    federalRate: Decimal | null
    federalAmt: Decimal | null
    stateRate: Decimal | null
    stateAmt: Decimal | null
    mediRate: Decimal | null
    mediAmt: Decimal | null
    socialRate: Decimal | null
    socialAmt: Decimal | null
  }

  export type PayStubSumAggregateOutputType = {
    salary: Decimal | null
    commission: Decimal | null
    bonus: Decimal | null
    federalRate: Decimal | null
    federalAmt: Decimal | null
    stateRate: Decimal | null
    stateAmt: Decimal | null
    mediRate: Decimal | null
    mediAmt: Decimal | null
    socialRate: Decimal | null
    socialAmt: Decimal | null
  }

  export type PayStubMinAggregateOutputType = {
    uuid: string | null
    salary: Decimal | null
    commission: Decimal | null
    bonus: Decimal | null
    federalRate: Decimal | null
    federalAmt: Decimal | null
    stateRate: Decimal | null
    stateAmt: Decimal | null
    mediRate: Decimal | null
    mediAmt: Decimal | null
    socialRate: Decimal | null
    socialAmt: Decimal | null
    employeeId: string | null
    payperiodId: string | null
  }

  export type PayStubMaxAggregateOutputType = {
    uuid: string | null
    salary: Decimal | null
    commission: Decimal | null
    bonus: Decimal | null
    federalRate: Decimal | null
    federalAmt: Decimal | null
    stateRate: Decimal | null
    stateAmt: Decimal | null
    mediRate: Decimal | null
    mediAmt: Decimal | null
    socialRate: Decimal | null
    socialAmt: Decimal | null
    employeeId: string | null
    payperiodId: string | null
  }

  export type PayStubCountAggregateOutputType = {
    uuid: number
    hourly: number
    salary: number
    commission: number
    bonus: number
    federalRate: number
    federalAmt: number
    stateRate: number
    stateAmt: number
    mediRate: number
    mediAmt: number
    socialRate: number
    socialAmt: number
    otherItems: number
    employeeId: number
    payperiodId: number
    _all: number
  }


  export type PayStubAvgAggregateInputType = {
    salary?: true
    commission?: true
    bonus?: true
    federalRate?: true
    federalAmt?: true
    stateRate?: true
    stateAmt?: true
    mediRate?: true
    mediAmt?: true
    socialRate?: true
    socialAmt?: true
  }

  export type PayStubSumAggregateInputType = {
    salary?: true
    commission?: true
    bonus?: true
    federalRate?: true
    federalAmt?: true
    stateRate?: true
    stateAmt?: true
    mediRate?: true
    mediAmt?: true
    socialRate?: true
    socialAmt?: true
  }

  export type PayStubMinAggregateInputType = {
    uuid?: true
    salary?: true
    commission?: true
    bonus?: true
    federalRate?: true
    federalAmt?: true
    stateRate?: true
    stateAmt?: true
    mediRate?: true
    mediAmt?: true
    socialRate?: true
    socialAmt?: true
    employeeId?: true
    payperiodId?: true
  }

  export type PayStubMaxAggregateInputType = {
    uuid?: true
    salary?: true
    commission?: true
    bonus?: true
    federalRate?: true
    federalAmt?: true
    stateRate?: true
    stateAmt?: true
    mediRate?: true
    mediAmt?: true
    socialRate?: true
    socialAmt?: true
    employeeId?: true
    payperiodId?: true
  }

  export type PayStubCountAggregateInputType = {
    uuid?: true
    hourly?: true
    salary?: true
    commission?: true
    bonus?: true
    federalRate?: true
    federalAmt?: true
    stateRate?: true
    stateAmt?: true
    mediRate?: true
    mediAmt?: true
    socialRate?: true
    socialAmt?: true
    otherItems?: true
    employeeId?: true
    payperiodId?: true
    _all?: true
  }

  export type PayStubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStub to aggregate.
     */
    where?: PayStubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubs to fetch.
     */
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayStubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayStubs
    **/
    _count?: true | PayStubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayStubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayStubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayStubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayStubMaxAggregateInputType
  }

  export type GetPayStubAggregateType<T extends PayStubAggregateArgs> = {
        [P in keyof T & keyof AggregatePayStub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayStub[P]>
      : GetScalarType<T[P], AggregatePayStub[P]>
  }




  export type PayStubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubWhereInput
    orderBy?: PayStubOrderByWithAggregationInput | PayStubOrderByWithAggregationInput[]
    by: PayStubScalarFieldEnum[] | PayStubScalarFieldEnum
    having?: PayStubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayStubCountAggregateInputType | true
    _avg?: PayStubAvgAggregateInputType
    _sum?: PayStubSumAggregateInputType
    _min?: PayStubMinAggregateInputType
    _max?: PayStubMaxAggregateInputType
  }

  export type PayStubGroupByOutputType = {
    uuid: string
    hourly: JsonValue
    salary: Decimal
    commission: Decimal
    bonus: Decimal
    federalRate: Decimal
    federalAmt: Decimal
    stateRate: Decimal
    stateAmt: Decimal
    mediRate: Decimal
    mediAmt: Decimal
    socialRate: Decimal
    socialAmt: Decimal
    otherItems: JsonValue
    employeeId: string
    payperiodId: string
    _count: PayStubCountAggregateOutputType | null
    _avg: PayStubAvgAggregateOutputType | null
    _sum: PayStubSumAggregateOutputType | null
    _min: PayStubMinAggregateOutputType | null
    _max: PayStubMaxAggregateOutputType | null
  }

  type GetPayStubGroupByPayload<T extends PayStubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayStubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayStubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayStubGroupByOutputType[P]>
            : GetScalarType<T[P], PayStubGroupByOutputType[P]>
        }
      >
    >


  export type PayStubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    hourly?: boolean
    salary?: boolean
    commission?: boolean
    bonus?: boolean
    federalRate?: boolean
    federalAmt?: boolean
    stateRate?: boolean
    stateAmt?: boolean
    mediRate?: boolean
    mediAmt?: boolean
    socialRate?: boolean
    socialAmt?: boolean
    otherItems?: boolean
    employeeId?: boolean
    payperiodId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    hourly?: boolean
    salary?: boolean
    commission?: boolean
    bonus?: boolean
    federalRate?: boolean
    federalAmt?: boolean
    stateRate?: boolean
    stateAmt?: boolean
    mediRate?: boolean
    mediAmt?: boolean
    socialRate?: boolean
    socialAmt?: boolean
    otherItems?: boolean
    employeeId?: boolean
    payperiodId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    hourly?: boolean
    salary?: boolean
    commission?: boolean
    bonus?: boolean
    federalRate?: boolean
    federalAmt?: boolean
    stateRate?: boolean
    stateAmt?: boolean
    mediRate?: boolean
    mediAmt?: boolean
    socialRate?: boolean
    socialAmt?: boolean
    otherItems?: boolean
    employeeId?: boolean
    payperiodId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectScalar = {
    uuid?: boolean
    hourly?: boolean
    salary?: boolean
    commission?: boolean
    bonus?: boolean
    federalRate?: boolean
    federalAmt?: boolean
    stateRate?: boolean
    stateAmt?: boolean
    mediRate?: boolean
    mediAmt?: boolean
    socialRate?: boolean
    socialAmt?: boolean
    otherItems?: boolean
    employeeId?: boolean
    payperiodId?: boolean
  }

  export type PayStubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "hourly" | "salary" | "commission" | "bonus" | "federalRate" | "federalAmt" | "stateRate" | "stateAmt" | "mediRate" | "mediAmt" | "socialRate" | "socialAmt" | "otherItems" | "employeeId" | "payperiodId", ExtArgs["result"]["payStub"]>
  export type PayStubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }
  export type PayStubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }
  export type PayStubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payperiod?: boolean | PayperiodDefaultArgs<ExtArgs>
  }

  export type $PayStubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayStub"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      payperiod: Prisma.$PayperiodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      hourly: Prisma.JsonValue
      salary: Prisma.Decimal
      commission: Prisma.Decimal
      bonus: Prisma.Decimal
      federalRate: Prisma.Decimal
      federalAmt: Prisma.Decimal
      stateRate: Prisma.Decimal
      stateAmt: Prisma.Decimal
      mediRate: Prisma.Decimal
      mediAmt: Prisma.Decimal
      socialRate: Prisma.Decimal
      socialAmt: Prisma.Decimal
      otherItems: Prisma.JsonValue
      employeeId: string
      payperiodId: string
    }, ExtArgs["result"]["payStub"]>
    composites: {}
  }

  type PayStubGetPayload<S extends boolean | null | undefined | PayStubDefaultArgs> = $Result.GetResult<Prisma.$PayStubPayload, S>

  type PayStubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayStubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayStubCountAggregateInputType | true
    }

  export interface PayStubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayStub'], meta: { name: 'PayStub' } }
    /**
     * Find zero or one PayStub that matches the filter.
     * @param {PayStubFindUniqueArgs} args - Arguments to find a PayStub
     * @example
     * // Get one PayStub
     * const payStub = await prisma.payStub.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayStubFindUniqueArgs>(args: SelectSubset<T, PayStubFindUniqueArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayStub that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayStubFindUniqueOrThrowArgs} args - Arguments to find a PayStub
     * @example
     * // Get one PayStub
     * const payStub = await prisma.payStub.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayStubFindUniqueOrThrowArgs>(args: SelectSubset<T, PayStubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStub that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubFindFirstArgs} args - Arguments to find a PayStub
     * @example
     * // Get one PayStub
     * const payStub = await prisma.payStub.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayStubFindFirstArgs>(args?: SelectSubset<T, PayStubFindFirstArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStub that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubFindFirstOrThrowArgs} args - Arguments to find a PayStub
     * @example
     * // Get one PayStub
     * const payStub = await prisma.payStub.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayStubFindFirstOrThrowArgs>(args?: SelectSubset<T, PayStubFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayStubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayStubs
     * const payStubs = await prisma.payStub.findMany()
     * 
     * // Get first 10 PayStubs
     * const payStubs = await prisma.payStub.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const payStubWithUuidOnly = await prisma.payStub.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends PayStubFindManyArgs>(args?: SelectSubset<T, PayStubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayStub.
     * @param {PayStubCreateArgs} args - Arguments to create a PayStub.
     * @example
     * // Create one PayStub
     * const PayStub = await prisma.payStub.create({
     *   data: {
     *     // ... data to create a PayStub
     *   }
     * })
     * 
     */
    create<T extends PayStubCreateArgs>(args: SelectSubset<T, PayStubCreateArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayStubs.
     * @param {PayStubCreateManyArgs} args - Arguments to create many PayStubs.
     * @example
     * // Create many PayStubs
     * const payStub = await prisma.payStub.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayStubCreateManyArgs>(args?: SelectSubset<T, PayStubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayStubs and returns the data saved in the database.
     * @param {PayStubCreateManyAndReturnArgs} args - Arguments to create many PayStubs.
     * @example
     * // Create many PayStubs
     * const payStub = await prisma.payStub.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayStubs and only return the `uuid`
     * const payStubWithUuidOnly = await prisma.payStub.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayStubCreateManyAndReturnArgs>(args?: SelectSubset<T, PayStubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayStub.
     * @param {PayStubDeleteArgs} args - Arguments to delete one PayStub.
     * @example
     * // Delete one PayStub
     * const PayStub = await prisma.payStub.delete({
     *   where: {
     *     // ... filter to delete one PayStub
     *   }
     * })
     * 
     */
    delete<T extends PayStubDeleteArgs>(args: SelectSubset<T, PayStubDeleteArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayStub.
     * @param {PayStubUpdateArgs} args - Arguments to update one PayStub.
     * @example
     * // Update one PayStub
     * const payStub = await prisma.payStub.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayStubUpdateArgs>(args: SelectSubset<T, PayStubUpdateArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayStubs.
     * @param {PayStubDeleteManyArgs} args - Arguments to filter PayStubs to delete.
     * @example
     * // Delete a few PayStubs
     * const { count } = await prisma.payStub.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayStubDeleteManyArgs>(args?: SelectSubset<T, PayStubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayStubs
     * const payStub = await prisma.payStub.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayStubUpdateManyArgs>(args: SelectSubset<T, PayStubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubs and returns the data updated in the database.
     * @param {PayStubUpdateManyAndReturnArgs} args - Arguments to update many PayStubs.
     * @example
     * // Update many PayStubs
     * const payStub = await prisma.payStub.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayStubs and only return the `uuid`
     * const payStubWithUuidOnly = await prisma.payStub.updateManyAndReturn({
     *   select: { uuid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PayStubUpdateManyAndReturnArgs>(args: SelectSubset<T, PayStubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayStub.
     * @param {PayStubUpsertArgs} args - Arguments to update or create a PayStub.
     * @example
     * // Update or create a PayStub
     * const payStub = await prisma.payStub.upsert({
     *   create: {
     *     // ... data to create a PayStub
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayStub we want to update
     *   }
     * })
     */
    upsert<T extends PayStubUpsertArgs>(args: SelectSubset<T, PayStubUpsertArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayStubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubCountArgs} args - Arguments to filter PayStubs to count.
     * @example
     * // Count the number of PayStubs
     * const count = await prisma.payStub.count({
     *   where: {
     *     // ... the filter for the PayStubs we want to count
     *   }
     * })
    **/
    count<T extends PayStubCountArgs>(
      args?: Subset<T, PayStubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayStubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayStub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayStubAggregateArgs>(args: Subset<T, PayStubAggregateArgs>): Prisma.PrismaPromise<GetPayStubAggregateType<T>>

    /**
     * Group by PayStub.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PayStubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayStubGroupByArgs['orderBy'] }
        : { orderBy?: PayStubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PayStubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayStubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayStub model
   */
  readonly fields: PayStubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayStub.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayStubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payperiod<T extends PayperiodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayperiodDefaultArgs<ExtArgs>>): Prisma__PayperiodClient<$Result.GetResult<Prisma.$PayperiodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PayStub model
   */
  interface PayStubFieldRefs {
    readonly uuid: FieldRef<"PayStub", 'String'>
    readonly hourly: FieldRef<"PayStub", 'Json'>
    readonly salary: FieldRef<"PayStub", 'Decimal'>
    readonly commission: FieldRef<"PayStub", 'Decimal'>
    readonly bonus: FieldRef<"PayStub", 'Decimal'>
    readonly federalRate: FieldRef<"PayStub", 'Decimal'>
    readonly federalAmt: FieldRef<"PayStub", 'Decimal'>
    readonly stateRate: FieldRef<"PayStub", 'Decimal'>
    readonly stateAmt: FieldRef<"PayStub", 'Decimal'>
    readonly mediRate: FieldRef<"PayStub", 'Decimal'>
    readonly mediAmt: FieldRef<"PayStub", 'Decimal'>
    readonly socialRate: FieldRef<"PayStub", 'Decimal'>
    readonly socialAmt: FieldRef<"PayStub", 'Decimal'>
    readonly otherItems: FieldRef<"PayStub", 'Json'>
    readonly employeeId: FieldRef<"PayStub", 'String'>
    readonly payperiodId: FieldRef<"PayStub", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PayStub findUnique
   */
  export type PayStubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter, which PayStub to fetch.
     */
    where: PayStubWhereUniqueInput
  }

  /**
   * PayStub findUniqueOrThrow
   */
  export type PayStubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter, which PayStub to fetch.
     */
    where: PayStubWhereUniqueInput
  }

  /**
   * PayStub findFirst
   */
  export type PayStubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter, which PayStub to fetch.
     */
    where?: PayStubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubs to fetch.
     */
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubs.
     */
    cursor?: PayStubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubs.
     */
    distinct?: PayStubScalarFieldEnum | PayStubScalarFieldEnum[]
  }

  /**
   * PayStub findFirstOrThrow
   */
  export type PayStubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter, which PayStub to fetch.
     */
    where?: PayStubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubs to fetch.
     */
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubs.
     */
    cursor?: PayStubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubs.
     */
    distinct?: PayStubScalarFieldEnum | PayStubScalarFieldEnum[]
  }

  /**
   * PayStub findMany
   */
  export type PayStubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter, which PayStubs to fetch.
     */
    where?: PayStubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubs to fetch.
     */
    orderBy?: PayStubOrderByWithRelationInput | PayStubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayStubs.
     */
    cursor?: PayStubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubs.
     */
    skip?: number
    distinct?: PayStubScalarFieldEnum | PayStubScalarFieldEnum[]
  }

  /**
   * PayStub create
   */
  export type PayStubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * The data needed to create a PayStub.
     */
    data: XOR<PayStubCreateInput, PayStubUncheckedCreateInput>
  }

  /**
   * PayStub createMany
   */
  export type PayStubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayStubs.
     */
    data: PayStubCreateManyInput | PayStubCreateManyInput[]
  }

  /**
   * PayStub createManyAndReturn
   */
  export type PayStubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * The data used to create many PayStubs.
     */
    data: PayStubCreateManyInput | PayStubCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStub update
   */
  export type PayStubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * The data needed to update a PayStub.
     */
    data: XOR<PayStubUpdateInput, PayStubUncheckedUpdateInput>
    /**
     * Choose, which PayStub to update.
     */
    where: PayStubWhereUniqueInput
  }

  /**
   * PayStub updateMany
   */
  export type PayStubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayStubs.
     */
    data: XOR<PayStubUpdateManyMutationInput, PayStubUncheckedUpdateManyInput>
    /**
     * Filter which PayStubs to update
     */
    where?: PayStubWhereInput
    /**
     * Limit how many PayStubs to update.
     */
    limit?: number
  }

  /**
   * PayStub updateManyAndReturn
   */
  export type PayStubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * The data used to update PayStubs.
     */
    data: XOR<PayStubUpdateManyMutationInput, PayStubUncheckedUpdateManyInput>
    /**
     * Filter which PayStubs to update
     */
    where?: PayStubWhereInput
    /**
     * Limit how many PayStubs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStub upsert
   */
  export type PayStubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * The filter to search for the PayStub to update in case it exists.
     */
    where: PayStubWhereUniqueInput
    /**
     * In case the PayStub found by the `where` argument doesn't exist, create a new PayStub with this data.
     */
    create: XOR<PayStubCreateInput, PayStubUncheckedCreateInput>
    /**
     * In case the PayStub was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayStubUpdateInput, PayStubUncheckedUpdateInput>
  }

  /**
   * PayStub delete
   */
  export type PayStubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
    /**
     * Filter which PayStub to delete.
     */
    where: PayStubWhereUniqueInput
  }

  /**
   * PayStub deleteMany
   */
  export type PayStubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubs to delete
     */
    where?: PayStubWhereInput
    /**
     * Limit how many PayStubs to delete.
     */
    limit?: number
  }

  /**
   * PayStub without action
   */
  export type PayStubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStub
     */
    select?: PayStubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStub
     */
    omit?: PayStubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    uuid: 'uuid',
    isActive: 'isActive',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    username: 'username',
    passHash: 'passHash'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegistrationCodeScalarFieldEnum: {
    uuid: 'uuid',
    expires: 'expires'
  };

  export type RegistrationCodeScalarFieldEnum = (typeof RegistrationCodeScalarFieldEnum)[keyof typeof RegistrationCodeScalarFieldEnum]


  export const InviteCodeScalarFieldEnum: {
    uuid: 'uuid',
    organizationId: 'organizationId',
    role: 'role',
    expires: 'expires'
  };

  export type InviteCodeScalarFieldEnum = (typeof InviteCodeScalarFieldEnum)[keyof typeof InviteCodeScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    uuid: 'uuid',
    userId: 'userId',
    organizationId: 'organizationId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    notes: 'notes',
    address: 'address',
    isDeleted: 'isDeleted',
    periodsPerYear: 'periodsPerYear',
    periodsRefDate: 'periodsRefDate'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    uuid: 'uuid',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    notes: 'notes',
    address: 'address',
    email: 'email',
    phoneNumber: 'phoneNumber',
    ssn: 'ssn',
    isSalary: 'isSalary',
    salary: 'salary',
    hourlyRates: 'hourlyRates',
    filingStatus: 'filingStatus',
    dependants: 'dependants',
    isDeleted: 'isDeleted',
    organizationId: 'organizationId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PayperiodScalarFieldEnum: {
    uuid: 'uuid',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    includedEmployees: 'includedEmployees',
    organizationId: 'organizationId'
  };

  export type PayperiodScalarFieldEnum = (typeof PayperiodScalarFieldEnum)[keyof typeof PayperiodScalarFieldEnum]


  export const PayStubScalarFieldEnum: {
    uuid: 'uuid',
    hourly: 'hourly',
    salary: 'salary',
    commission: 'commission',
    bonus: 'bonus',
    federalRate: 'federalRate',
    federalAmt: 'federalAmt',
    stateRate: 'stateRate',
    stateAmt: 'stateAmt',
    mediRate: 'mediRate',
    mediAmt: 'mediAmt',
    socialRate: 'socialRate',
    socialAmt: 'socialAmt',
    otherItems: 'otherItems',
    employeeId: 'employeeId',
    payperiodId: 'payperiodId'
  };

  export type PayStubScalarFieldEnum = (typeof PayStubScalarFieldEnum)[keyof typeof PayStubScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    uuid?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passHash?: StringFilter<"User"> | string
    memberships?: RoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
    memberships?: RoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    username?: string
    passHash?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isActive?: BoolFilter<"User"> | boolean
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    memberships?: RoleListRelationFilter
  }, "uuid" | "uuid" | "username" | "passHash">

  export type UserOrderByWithAggregationInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passHash?: StringWithAggregatesFilter<"User"> | string
  }

  export type RegistrationCodeWhereInput = {
    AND?: RegistrationCodeWhereInput | RegistrationCodeWhereInput[]
    OR?: RegistrationCodeWhereInput[]
    NOT?: RegistrationCodeWhereInput | RegistrationCodeWhereInput[]
    uuid?: StringFilter<"RegistrationCode"> | string
    expires?: DateTimeFilter<"RegistrationCode"> | Date | string
  }

  export type RegistrationCodeOrderByWithRelationInput = {
    uuid?: SortOrder
    expires?: SortOrder
  }

  export type RegistrationCodeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: RegistrationCodeWhereInput | RegistrationCodeWhereInput[]
    OR?: RegistrationCodeWhereInput[]
    NOT?: RegistrationCodeWhereInput | RegistrationCodeWhereInput[]
    expires?: DateTimeFilter<"RegistrationCode"> | Date | string
  }, "uuid" | "uuid">

  export type RegistrationCodeOrderByWithAggregationInput = {
    uuid?: SortOrder
    expires?: SortOrder
    _count?: RegistrationCodeCountOrderByAggregateInput
    _max?: RegistrationCodeMaxOrderByAggregateInput
    _min?: RegistrationCodeMinOrderByAggregateInput
  }

  export type RegistrationCodeScalarWhereWithAggregatesInput = {
    AND?: RegistrationCodeScalarWhereWithAggregatesInput | RegistrationCodeScalarWhereWithAggregatesInput[]
    OR?: RegistrationCodeScalarWhereWithAggregatesInput[]
    NOT?: RegistrationCodeScalarWhereWithAggregatesInput | RegistrationCodeScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"RegistrationCode"> | string
    expires?: DateTimeWithAggregatesFilter<"RegistrationCode"> | Date | string
  }

  export type InviteCodeWhereInput = {
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    uuid?: StringFilter<"InviteCode"> | string
    organizationId?: StringFilter<"InviteCode"> | string
    role?: StringFilter<"InviteCode"> | string
    expires?: DateTimeFilter<"InviteCode"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type InviteCodeOrderByWithRelationInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expires?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type InviteCodeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    organizationId?: StringFilter<"InviteCode"> | string
    role?: StringFilter<"InviteCode"> | string
    expires?: DateTimeFilter<"InviteCode"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "uuid" | "uuid">

  export type InviteCodeOrderByWithAggregationInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expires?: SortOrder
    _count?: InviteCodeCountOrderByAggregateInput
    _max?: InviteCodeMaxOrderByAggregateInput
    _min?: InviteCodeMinOrderByAggregateInput
  }

  export type InviteCodeScalarWhereWithAggregatesInput = {
    AND?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    OR?: InviteCodeScalarWhereWithAggregatesInput[]
    NOT?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"InviteCode"> | string
    organizationId?: StringWithAggregatesFilter<"InviteCode"> | string
    role?: StringWithAggregatesFilter<"InviteCode"> | string
    expires?: DateTimeWithAggregatesFilter<"InviteCode"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    uuid?: StringFilter<"Role"> | string
    userId?: StringFilter<"Role"> | string
    organizationId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    joinedAt?: DateTimeFilter<"Role"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type RoleOrderByWithRelationInput = {
    uuid?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    userId_organizationId?: RoleUserIdOrganizationIdCompoundUniqueInput
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    userId?: StringFilter<"Role"> | string
    organizationId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    joinedAt?: DateTimeFilter<"Role"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "uuid" | "userId_organizationId">

  export type RoleOrderByWithAggregationInput = {
    uuid?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Role"> | string
    userId?: StringWithAggregatesFilter<"Role"> | string
    organizationId?: StringWithAggregatesFilter<"Role"> | string
    role?: StringWithAggregatesFilter<"Role"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    uuid?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    notes?: StringFilter<"Organization"> | string
    address?: StringFilter<"Organization"> | string
    isDeleted?: BoolFilter<"Organization"> | boolean
    periodsPerYear?: IntFilter<"Organization"> | number
    periodsRefDate?: DateTimeFilter<"Organization"> | Date | string
    employees?: EmployeeListRelationFilter
    payperiods?: PayperiodListRelationFilter
    inviteCodes?: InviteCodeListRelationFilter
    memberships?: RoleListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    periodsPerYear?: SortOrder
    periodsRefDate?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
    payperiods?: PayperiodOrderByRelationAggregateInput
    inviteCodes?: InviteCodeOrderByRelationAggregateInput
    memberships?: RoleOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    notes?: StringFilter<"Organization"> | string
    address?: StringFilter<"Organization"> | string
    isDeleted?: BoolFilter<"Organization"> | boolean
    periodsPerYear?: IntFilter<"Organization"> | number
    periodsRefDate?: DateTimeFilter<"Organization"> | Date | string
    employees?: EmployeeListRelationFilter
    payperiods?: PayperiodListRelationFilter
    inviteCodes?: InviteCodeListRelationFilter
    memberships?: RoleListRelationFilter
  }, "uuid" | "uuid">

  export type OrganizationOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    periodsPerYear?: SortOrder
    periodsRefDate?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    notes?: StringWithAggregatesFilter<"Organization"> | string
    address?: StringWithAggregatesFilter<"Organization"> | string
    isDeleted?: BoolWithAggregatesFilter<"Organization"> | boolean
    periodsPerYear?: IntWithAggregatesFilter<"Organization"> | number
    periodsRefDate?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    uuid?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    middleName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    notes?: StringFilter<"Employee"> | string
    address?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phoneNumber?: StringFilter<"Employee"> | string
    ssn?: StringFilter<"Employee"> | string
    isSalary?: BoolFilter<"Employee"> | boolean
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonFilter<"Employee">
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payStubs?: PayStubListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    uuid?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    ssn?: SortOrder
    isSalary?: SortOrder
    salary?: SortOrder
    hourlyRates?: SortOrder
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    payStubs?: PayStubOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    firstName?: StringFilter<"Employee"> | string
    middleName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    notes?: StringFilter<"Employee"> | string
    address?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phoneNumber?: StringFilter<"Employee"> | string
    ssn?: StringFilter<"Employee"> | string
    isSalary?: BoolFilter<"Employee"> | boolean
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonFilter<"Employee">
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payStubs?: PayStubListRelationFilter
  }, "uuid" | "uuid">

  export type EmployeeOrderByWithAggregationInput = {
    uuid?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    ssn?: SortOrder
    isSalary?: SortOrder
    salary?: SortOrder
    hourlyRates?: SortOrder
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Employee"> | string
    firstName?: StringWithAggregatesFilter<"Employee"> | string
    middleName?: StringWithAggregatesFilter<"Employee"> | string
    lastName?: StringWithAggregatesFilter<"Employee"> | string
    notes?: StringWithAggregatesFilter<"Employee"> | string
    address?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    phoneNumber?: StringWithAggregatesFilter<"Employee"> | string
    ssn?: StringWithAggregatesFilter<"Employee"> | string
    isSalary?: BoolWithAggregatesFilter<"Employee"> | boolean
    salary?: DecimalWithAggregatesFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonWithAggregatesFilter<"Employee">
    filingStatus?: StringWithAggregatesFilter<"Employee"> | string
    dependants?: IntWithAggregatesFilter<"Employee"> | number
    isDeleted?: BoolWithAggregatesFilter<"Employee"> | boolean
    organizationId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type PayperiodWhereInput = {
    AND?: PayperiodWhereInput | PayperiodWhereInput[]
    OR?: PayperiodWhereInput[]
    NOT?: PayperiodWhereInput | PayperiodWhereInput[]
    uuid?: StringFilter<"Payperiod"> | string
    periodStart?: DateTimeFilter<"Payperiod"> | Date | string
    periodEnd?: DateTimeFilter<"Payperiod"> | Date | string
    includedEmployees?: JsonFilter<"Payperiod">
    organizationId?: StringFilter<"Payperiod"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payStubs?: PayStubListRelationFilter
  }

  export type PayperiodOrderByWithRelationInput = {
    uuid?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    includedEmployees?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    payStubs?: PayStubOrderByRelationAggregateInput
  }

  export type PayperiodWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayperiodWhereInput | PayperiodWhereInput[]
    OR?: PayperiodWhereInput[]
    NOT?: PayperiodWhereInput | PayperiodWhereInput[]
    periodStart?: DateTimeFilter<"Payperiod"> | Date | string
    periodEnd?: DateTimeFilter<"Payperiod"> | Date | string
    includedEmployees?: JsonFilter<"Payperiod">
    organizationId?: StringFilter<"Payperiod"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    payStubs?: PayStubListRelationFilter
  }, "uuid" | "uuid">

  export type PayperiodOrderByWithAggregationInput = {
    uuid?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    includedEmployees?: SortOrder
    organizationId?: SortOrder
    _count?: PayperiodCountOrderByAggregateInput
    _max?: PayperiodMaxOrderByAggregateInput
    _min?: PayperiodMinOrderByAggregateInput
  }

  export type PayperiodScalarWhereWithAggregatesInput = {
    AND?: PayperiodScalarWhereWithAggregatesInput | PayperiodScalarWhereWithAggregatesInput[]
    OR?: PayperiodScalarWhereWithAggregatesInput[]
    NOT?: PayperiodScalarWhereWithAggregatesInput | PayperiodScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"Payperiod"> | string
    periodStart?: DateTimeWithAggregatesFilter<"Payperiod"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Payperiod"> | Date | string
    includedEmployees?: JsonWithAggregatesFilter<"Payperiod">
    organizationId?: StringWithAggregatesFilter<"Payperiod"> | string
  }

  export type PayStubWhereInput = {
    AND?: PayStubWhereInput | PayStubWhereInput[]
    OR?: PayStubWhereInput[]
    NOT?: PayStubWhereInput | PayStubWhereInput[]
    uuid?: StringFilter<"PayStub"> | string
    hourly?: JsonFilter<"PayStub">
    salary?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    otherItems?: JsonFilter<"PayStub">
    employeeId?: StringFilter<"PayStub"> | string
    payperiodId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payperiod?: XOR<PayperiodScalarRelationFilter, PayperiodWhereInput>
  }

  export type PayStubOrderByWithRelationInput = {
    uuid?: SortOrder
    hourly?: SortOrder
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
    otherItems?: SortOrder
    employeeId?: SortOrder
    payperiodId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    payperiod?: PayperiodOrderByWithRelationInput
  }

  export type PayStubWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayStubWhereInput | PayStubWhereInput[]
    OR?: PayStubWhereInput[]
    NOT?: PayStubWhereInput | PayStubWhereInput[]
    hourly?: JsonFilter<"PayStub">
    salary?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    otherItems?: JsonFilter<"PayStub">
    employeeId?: StringFilter<"PayStub"> | string
    payperiodId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payperiod?: XOR<PayperiodScalarRelationFilter, PayperiodWhereInput>
  }, "uuid" | "uuid">

  export type PayStubOrderByWithAggregationInput = {
    uuid?: SortOrder
    hourly?: SortOrder
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
    otherItems?: SortOrder
    employeeId?: SortOrder
    payperiodId?: SortOrder
    _count?: PayStubCountOrderByAggregateInput
    _avg?: PayStubAvgOrderByAggregateInput
    _max?: PayStubMaxOrderByAggregateInput
    _min?: PayStubMinOrderByAggregateInput
    _sum?: PayStubSumOrderByAggregateInput
  }

  export type PayStubScalarWhereWithAggregatesInput = {
    AND?: PayStubScalarWhereWithAggregatesInput | PayStubScalarWhereWithAggregatesInput[]
    OR?: PayStubScalarWhereWithAggregatesInput[]
    NOT?: PayStubScalarWhereWithAggregatesInput | PayStubScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"PayStub"> | string
    hourly?: JsonWithAggregatesFilter<"PayStub">
    salary?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    otherItems?: JsonWithAggregatesFilter<"PayStub">
    employeeId?: StringWithAggregatesFilter<"PayStub"> | string
    payperiodId?: StringWithAggregatesFilter<"PayStub"> | string
  }

  export type UserCreateInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    memberships?: RoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    memberships?: RoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
    memberships?: RoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
    memberships?: RoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
  }

  export type RegistrationCodeCreateInput = {
    uuid?: string
    expires: Date | string
  }

  export type RegistrationCodeUncheckedCreateInput = {
    uuid?: string
    expires: Date | string
  }

  export type RegistrationCodeUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCodeUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCodeCreateManyInput = {
    uuid?: string
    expires: Date | string
  }

  export type RegistrationCodeUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCodeUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateInput = {
    uuid?: string
    role: string
    expires: Date | string
    organization: OrganizationCreateNestedOneWithoutInviteCodesInput
  }

  export type InviteCodeUncheckedCreateInput = {
    uuid?: string
    organizationId: string
    role: string
    expires: Date | string
  }

  export type InviteCodeUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutInviteCodesNestedInput
  }

  export type InviteCodeUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeCreateManyInput = {
    uuid?: string
    organizationId: string
    role: string
    expires: Date | string
  }

  export type InviteCodeUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    uuid?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
  }

  export type RoleUncheckedCreateInput = {
    uuid?: string
    userId: string
    organizationId: string
    role?: string
    joinedAt?: Date | string
  }

  export type RoleUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateManyInput = {
    uuid?: string
    userId: string
    organizationId: string
    role?: string
    joinedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
  }

  export type EmployeeUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployeeUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type PayperiodCreateInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    organization: OrganizationCreateNestedOneWithoutPayperiodsInput
    payStubs?: PayStubCreateNestedManyWithoutPayperiodInput
  }

  export type PayperiodUncheckedCreateInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    organizationId: string
    payStubs?: PayStubUncheckedCreateNestedManyWithoutPayperiodInput
  }

  export type PayperiodUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    organization?: OrganizationUpdateOneRequiredWithoutPayperiodsNestedInput
    payStubs?: PayStubUpdateManyWithoutPayperiodNestedInput
  }

  export type PayperiodUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
    payStubs?: PayStubUncheckedUpdateManyWithoutPayperiodNestedInput
  }

  export type PayperiodCreateManyInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    organizationId: string
  }

  export type PayperiodUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
  }

  export type PayperiodUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubCreateInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
    payperiod: PayperiodCreateNestedOneWithoutPayStubsInput
  }

  export type PayStubUncheckedCreateInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employeeId: string
    payperiodId: string
  }

  export type PayStubUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
    payperiod?: PayperiodUpdateOneRequiredWithoutPayStubsNestedInput
  }

  export type PayStubUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employeeId?: StringFieldUpdateOperationsInput | string
    payperiodId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubCreateManyInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employeeId: string
    payperiodId: string
  }

  export type PayStubUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
  }

  export type PayStubUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employeeId?: StringFieldUpdateOperationsInput | string
    payperiodId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegistrationCodeCountOrderByAggregateInput = {
    uuid?: SortOrder
    expires?: SortOrder
  }

  export type RegistrationCodeMaxOrderByAggregateInput = {
    uuid?: SortOrder
    expires?: SortOrder
  }

  export type RegistrationCodeMinOrderByAggregateInput = {
    uuid?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type InviteCodeCountOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expires?: SortOrder
  }

  export type InviteCodeMaxOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expires?: SortOrder
  }

  export type InviteCodeMinOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    expires?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleUserIdOrganizationIdCompoundUniqueInput = {
    userId: string
    organizationId: string
  }

  export type RoleCountOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    uuid?: SortOrder
    userId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type PayperiodListRelationFilter = {
    every?: PayperiodWhereInput
    some?: PayperiodWhereInput
    none?: PayperiodWhereInput
  }

  export type InviteCodeListRelationFilter = {
    every?: InviteCodeWhereInput
    some?: InviteCodeWhereInput
    none?: InviteCodeWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayperiodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    periodsPerYear?: SortOrder
    periodsRefDate?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    periodsPerYear?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    periodsPerYear?: SortOrder
    periodsRefDate?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    periodsPerYear?: SortOrder
    periodsRefDate?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    periodsPerYear?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PayStubListRelationFilter = {
    every?: PayStubWhereInput
    some?: PayStubWhereInput
    none?: PayStubWhereInput
  }

  export type PayStubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    uuid?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    ssn?: SortOrder
    isSalary?: SortOrder
    salary?: SortOrder
    hourlyRates?: SortOrder
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    salary?: SortOrder
    dependants?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    uuid?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    ssn?: SortOrder
    isSalary?: SortOrder
    salary?: SortOrder
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    uuid?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    ssn?: SortOrder
    isSalary?: SortOrder
    salary?: SortOrder
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    salary?: SortOrder
    dependants?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PayperiodCountOrderByAggregateInput = {
    uuid?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    includedEmployees?: SortOrder
    organizationId?: SortOrder
  }

  export type PayperiodMaxOrderByAggregateInput = {
    uuid?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    organizationId?: SortOrder
  }

  export type PayperiodMinOrderByAggregateInput = {
    uuid?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayperiodScalarRelationFilter = {
    is?: PayperiodWhereInput
    isNot?: PayperiodWhereInput
  }

  export type PayStubCountOrderByAggregateInput = {
    uuid?: SortOrder
    hourly?: SortOrder
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
    otherItems?: SortOrder
    employeeId?: SortOrder
    payperiodId?: SortOrder
  }

  export type PayStubAvgOrderByAggregateInput = {
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
  }

  export type PayStubMaxOrderByAggregateInput = {
    uuid?: SortOrder
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
    employeeId?: SortOrder
    payperiodId?: SortOrder
  }

  export type PayStubMinOrderByAggregateInput = {
    uuid?: SortOrder
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
    employeeId?: SortOrder
    payperiodId?: SortOrder
  }

  export type PayStubSumOrderByAggregateInput = {
    salary?: SortOrder
    commission?: SortOrder
    bonus?: SortOrder
    federalRate?: SortOrder
    federalAmt?: SortOrder
    stateRate?: SortOrder
    stateAmt?: SortOrder
    mediRate?: SortOrder
    mediAmt?: SortOrder
    socialRate?: SortOrder
    socialAmt?: SortOrder
  }

  export type RoleCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    createMany?: RoleCreateManyUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    createMany?: RoleCreateManyUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleCreateManyUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleCreateManyUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationCreateNestedOneWithoutInviteCodesInput = {
    create?: XOR<OrganizationCreateWithoutInviteCodesInput, OrganizationUncheckedCreateWithoutInviteCodesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInviteCodesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutInviteCodesNestedInput = {
    create?: XOR<OrganizationCreateWithoutInviteCodesInput, OrganizationUncheckedCreateWithoutInviteCodesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutInviteCodesInput
    upsert?: OrganizationUpsertWithoutInviteCodesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutInviteCodesInput, OrganizationUpdateWithoutInviteCodesInput>, OrganizationUncheckedUpdateWithoutInviteCodesInput>
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembershipsInput
    upsert?: OrganizationUpsertWithoutMembershipsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembershipsInput, OrganizationUpdateWithoutMembershipsInput>, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type EmployeeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayperiodCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput> | PayperiodCreateWithoutOrganizationInput[] | PayperiodUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayperiodCreateOrConnectWithoutOrganizationInput | PayperiodCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayperiodCreateManyOrganizationInputEnvelope
    connect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
  }

  export type InviteCodeCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput> | RoleCreateWithoutOrganizationInput[] | RoleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOrganizationInput | RoleCreateOrConnectWithoutOrganizationInput[]
    createMany?: RoleCreateManyOrganizationInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayperiodUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput> | PayperiodCreateWithoutOrganizationInput[] | PayperiodUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayperiodCreateOrConnectWithoutOrganizationInput | PayperiodCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayperiodCreateManyOrganizationInputEnvelope
    connect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
  }

  export type InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput> | RoleCreateWithoutOrganizationInput[] | RoleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOrganizationInput | RoleCreateOrConnectWithoutOrganizationInput[]
    createMany?: RoleCreateManyOrganizationInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayperiodUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput> | PayperiodCreateWithoutOrganizationInput[] | PayperiodUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayperiodCreateOrConnectWithoutOrganizationInput | PayperiodCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayperiodUpsertWithWhereUniqueWithoutOrganizationInput | PayperiodUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayperiodCreateManyOrganizationInputEnvelope
    set?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    disconnect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    delete?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    connect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    update?: PayperiodUpdateWithWhereUniqueWithoutOrganizationInput | PayperiodUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayperiodUpdateManyWithWhereWithoutOrganizationInput | PayperiodUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayperiodScalarWhereInput | PayperiodScalarWhereInput[]
  }

  export type InviteCodeUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput | InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    set?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    disconnect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    delete?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    update?: InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput | InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InviteCodeUpdateManyWithWhereWithoutOrganizationInput | InviteCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput> | RoleCreateWithoutOrganizationInput[] | RoleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOrganizationInput | RoleCreateOrConnectWithoutOrganizationInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutOrganizationInput | RoleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RoleCreateManyOrganizationInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutOrganizationInput | RoleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutOrganizationInput | RoleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutOrganizationInput | EmployeeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutOrganizationInput | EmployeeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutOrganizationInput | EmployeeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type PayperiodUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput> | PayperiodCreateWithoutOrganizationInput[] | PayperiodUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayperiodCreateOrConnectWithoutOrganizationInput | PayperiodCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayperiodUpsertWithWhereUniqueWithoutOrganizationInput | PayperiodUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayperiodCreateManyOrganizationInputEnvelope
    set?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    disconnect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    delete?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    connect?: PayperiodWhereUniqueInput | PayperiodWhereUniqueInput[]
    update?: PayperiodUpdateWithWhereUniqueWithoutOrganizationInput | PayperiodUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayperiodUpdateManyWithWhereWithoutOrganizationInput | PayperiodUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayperiodScalarWhereInput | PayperiodScalarWhereInput[]
  }

  export type InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput> | InviteCodeCreateWithoutOrganizationInput[] | InviteCodeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: InviteCodeCreateOrConnectWithoutOrganizationInput | InviteCodeCreateOrConnectWithoutOrganizationInput[]
    upsert?: InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput | InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: InviteCodeCreateManyOrganizationInputEnvelope
    set?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    disconnect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    delete?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    connect?: InviteCodeWhereUniqueInput | InviteCodeWhereUniqueInput[]
    update?: InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput | InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: InviteCodeUpdateManyWithWhereWithoutOrganizationInput | InviteCodeUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput> | RoleCreateWithoutOrganizationInput[] | RoleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOrganizationInput | RoleCreateOrConnectWithoutOrganizationInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutOrganizationInput | RoleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: RoleCreateManyOrganizationInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutOrganizationInput | RoleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutOrganizationInput | RoleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayStubCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type PayStubUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrganizationUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmployeesInput, OrganizationUpdateWithoutEmployeesInput>, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type PayStubUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubUpsertWithWhereUniqueWithoutEmployeeInput | PayStubUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    set?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    disconnect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    delete?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    update?: PayStubUpdateWithWhereUniqueWithoutEmployeeInput | PayStubUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubUpdateManyWithWhereWithoutEmployeeInput | PayStubUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
  }

  export type PayStubUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubUpsertWithWhereUniqueWithoutEmployeeInput | PayStubUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    set?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    disconnect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    delete?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    update?: PayStubUpdateWithWhereUniqueWithoutEmployeeInput | PayStubUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubUpdateManyWithWhereWithoutEmployeeInput | PayStubUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutPayperiodsInput = {
    create?: XOR<OrganizationCreateWithoutPayperiodsInput, OrganizationUncheckedCreateWithoutPayperiodsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPayperiodsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayStubCreateNestedManyWithoutPayperiodInput = {
    create?: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput> | PayStubCreateWithoutPayperiodInput[] | PayStubUncheckedCreateWithoutPayperiodInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutPayperiodInput | PayStubCreateOrConnectWithoutPayperiodInput[]
    createMany?: PayStubCreateManyPayperiodInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type PayStubUncheckedCreateNestedManyWithoutPayperiodInput = {
    create?: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput> | PayStubCreateWithoutPayperiodInput[] | PayStubUncheckedCreateWithoutPayperiodInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutPayperiodInput | PayStubCreateOrConnectWithoutPayperiodInput[]
    createMany?: PayStubCreateManyPayperiodInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutPayperiodsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPayperiodsInput, OrganizationUncheckedCreateWithoutPayperiodsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPayperiodsInput
    upsert?: OrganizationUpsertWithoutPayperiodsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPayperiodsInput, OrganizationUpdateWithoutPayperiodsInput>, OrganizationUncheckedUpdateWithoutPayperiodsInput>
  }

  export type PayStubUpdateManyWithoutPayperiodNestedInput = {
    create?: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput> | PayStubCreateWithoutPayperiodInput[] | PayStubUncheckedCreateWithoutPayperiodInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutPayperiodInput | PayStubCreateOrConnectWithoutPayperiodInput[]
    upsert?: PayStubUpsertWithWhereUniqueWithoutPayperiodInput | PayStubUpsertWithWhereUniqueWithoutPayperiodInput[]
    createMany?: PayStubCreateManyPayperiodInputEnvelope
    set?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    disconnect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    delete?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    update?: PayStubUpdateWithWhereUniqueWithoutPayperiodInput | PayStubUpdateWithWhereUniqueWithoutPayperiodInput[]
    updateMany?: PayStubUpdateManyWithWhereWithoutPayperiodInput | PayStubUpdateManyWithWhereWithoutPayperiodInput[]
    deleteMany?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
  }

  export type PayStubUncheckedUpdateManyWithoutPayperiodNestedInput = {
    create?: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput> | PayStubCreateWithoutPayperiodInput[] | PayStubUncheckedCreateWithoutPayperiodInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutPayperiodInput | PayStubCreateOrConnectWithoutPayperiodInput[]
    upsert?: PayStubUpsertWithWhereUniqueWithoutPayperiodInput | PayStubUpsertWithWhereUniqueWithoutPayperiodInput[]
    createMany?: PayStubCreateManyPayperiodInputEnvelope
    set?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    disconnect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    delete?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
    update?: PayStubUpdateWithWhereUniqueWithoutPayperiodInput | PayStubUpdateWithWhereUniqueWithoutPayperiodInput[]
    updateMany?: PayStubUpdateManyWithWhereWithoutPayperiodInput | PayStubUpdateManyWithWhereWithoutPayperiodInput[]
    deleteMany?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutPayStubsInput = {
    create?: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayStubsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayperiodCreateNestedOneWithoutPayStubsInput = {
    create?: XOR<PayperiodCreateWithoutPayStubsInput, PayperiodUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: PayperiodCreateOrConnectWithoutPayStubsInput
    connect?: PayperiodWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutPayStubsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayStubsInput
    upsert?: EmployeeUpsertWithoutPayStubsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayStubsInput, EmployeeUpdateWithoutPayStubsInput>, EmployeeUncheckedUpdateWithoutPayStubsInput>
  }

  export type PayperiodUpdateOneRequiredWithoutPayStubsNestedInput = {
    create?: XOR<PayperiodCreateWithoutPayStubsInput, PayperiodUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: PayperiodCreateOrConnectWithoutPayStubsInput
    upsert?: PayperiodUpsertWithoutPayStubsInput
    connect?: PayperiodWhereUniqueInput
    update?: XOR<XOR<PayperiodUpdateToOneWithWhereWithoutPayStubsInput, PayperiodUpdateWithoutPayStubsInput>, PayperiodUncheckedUpdateWithoutPayStubsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoleCreateWithoutUserInput = {
    uuid?: string
    role?: string
    joinedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembershipsInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    uuid?: string
    organizationId: string
    role?: string
    joinedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateManyUserInputEnvelope = {
    data: RoleCreateManyUserInput | RoleCreateManyUserInput[]
  }

  export type RoleUpsertWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    uuid?: StringFilter<"Role"> | string
    userId?: StringFilter<"Role"> | string
    organizationId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    joinedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type OrganizationCreateWithoutInviteCodesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInviteCodesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutInviteCodesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutInviteCodesInput, OrganizationUncheckedCreateWithoutInviteCodesInput>
  }

  export type OrganizationUpsertWithoutInviteCodesInput = {
    update: XOR<OrganizationUpdateWithoutInviteCodesInput, OrganizationUncheckedUpdateWithoutInviteCodesInput>
    create: XOR<OrganizationCreateWithoutInviteCodesInput, OrganizationUncheckedCreateWithoutInviteCodesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutInviteCodesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutInviteCodesInput, OrganizationUncheckedUpdateWithoutInviteCodesInput>
  }

  export type OrganizationUpdateWithoutInviteCodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInviteCodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutMembershipsInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type OrganizationCreateWithoutMembershipsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payperiods?: PayperiodUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembershipsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
  }

  export type OrganizationUpsertWithoutMembershipsInput = {
    update: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
    create: XOR<OrganizationCreateWithoutMembershipsInput, OrganizationUncheckedCreateWithoutMembershipsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembershipsInput, OrganizationUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payperiods?: PayperiodUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeCreateWithoutOrganizationInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: EmployeeCreateManyOrganizationInput | EmployeeCreateManyOrganizationInput[]
  }

  export type PayperiodCreateWithoutOrganizationInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    payStubs?: PayStubCreateNestedManyWithoutPayperiodInput
  }

  export type PayperiodUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    payStubs?: PayStubUncheckedCreateNestedManyWithoutPayperiodInput
  }

  export type PayperiodCreateOrConnectWithoutOrganizationInput = {
    where: PayperiodWhereUniqueInput
    create: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput>
  }

  export type PayperiodCreateManyOrganizationInputEnvelope = {
    data: PayperiodCreateManyOrganizationInput | PayperiodCreateManyOrganizationInput[]
  }

  export type InviteCodeCreateWithoutOrganizationInput = {
    uuid?: string
    role: string
    expires: Date | string
  }

  export type InviteCodeUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    role: string
    expires: Date | string
  }

  export type InviteCodeCreateOrConnectWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    create: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type InviteCodeCreateManyOrganizationInputEnvelope = {
    data: InviteCodeCreateManyOrganizationInput | InviteCodeCreateManyOrganizationInput[]
  }

  export type RoleCreateWithoutOrganizationInput = {
    uuid?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type RoleUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutOrganizationInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput>
  }

  export type RoleCreateManyOrganizationInputEnvelope = {
    data: RoleCreateManyOrganizationInput | RoleCreateManyOrganizationInput[]
  }

  export type EmployeeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutOrganizationInput, EmployeeUncheckedUpdateWithoutOrganizationInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutOrganizationInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    uuid?: StringFilter<"Employee"> | string
    firstName?: StringFilter<"Employee"> | string
    middleName?: StringFilter<"Employee"> | string
    lastName?: StringFilter<"Employee"> | string
    notes?: StringFilter<"Employee"> | string
    address?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    phoneNumber?: StringFilter<"Employee"> | string
    ssn?: StringFilter<"Employee"> | string
    isSalary?: BoolFilter<"Employee"> | boolean
    salary?: DecimalFilter<"Employee"> | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonFilter<"Employee">
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
  }

  export type PayperiodUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PayperiodWhereUniqueInput
    update: XOR<PayperiodUpdateWithoutOrganizationInput, PayperiodUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PayperiodCreateWithoutOrganizationInput, PayperiodUncheckedCreateWithoutOrganizationInput>
  }

  export type PayperiodUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PayperiodWhereUniqueInput
    data: XOR<PayperiodUpdateWithoutOrganizationInput, PayperiodUncheckedUpdateWithoutOrganizationInput>
  }

  export type PayperiodUpdateManyWithWhereWithoutOrganizationInput = {
    where: PayperiodScalarWhereInput
    data: XOR<PayperiodUpdateManyMutationInput, PayperiodUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PayperiodScalarWhereInput = {
    AND?: PayperiodScalarWhereInput | PayperiodScalarWhereInput[]
    OR?: PayperiodScalarWhereInput[]
    NOT?: PayperiodScalarWhereInput | PayperiodScalarWhereInput[]
    uuid?: StringFilter<"Payperiod"> | string
    periodStart?: DateTimeFilter<"Payperiod"> | Date | string
    periodEnd?: DateTimeFilter<"Payperiod"> | Date | string
    includedEmployees?: JsonFilter<"Payperiod">
    organizationId?: StringFilter<"Payperiod"> | string
  }

  export type InviteCodeUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    update: XOR<InviteCodeUpdateWithoutOrganizationInput, InviteCodeUncheckedUpdateWithoutOrganizationInput>
    create: XOR<InviteCodeCreateWithoutOrganizationInput, InviteCodeUncheckedCreateWithoutOrganizationInput>
  }

  export type InviteCodeUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InviteCodeWhereUniqueInput
    data: XOR<InviteCodeUpdateWithoutOrganizationInput, InviteCodeUncheckedUpdateWithoutOrganizationInput>
  }

  export type InviteCodeUpdateManyWithWhereWithoutOrganizationInput = {
    where: InviteCodeScalarWhereInput
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type InviteCodeScalarWhereInput = {
    AND?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
    OR?: InviteCodeScalarWhereInput[]
    NOT?: InviteCodeScalarWhereInput | InviteCodeScalarWhereInput[]
    uuid?: StringFilter<"InviteCode"> | string
    organizationId?: StringFilter<"InviteCode"> | string
    role?: StringFilter<"InviteCode"> | string
    expires?: DateTimeFilter<"InviteCode"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutOrganizationInput, RoleUncheckedUpdateWithoutOrganizationInput>
    create: XOR<RoleCreateWithoutOrganizationInput, RoleUncheckedCreateWithoutOrganizationInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutOrganizationInput, RoleUncheckedUpdateWithoutOrganizationInput>
  }

  export type RoleUpdateManyWithWhereWithoutOrganizationInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    payperiods?: PayperiodCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    payperiods?: PayperiodUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type PayStubCreateWithoutEmployeeInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    payperiod: PayperiodCreateNestedOneWithoutPayStubsInput
  }

  export type PayStubUncheckedCreateWithoutEmployeeInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    payperiodId: string
  }

  export type PayStubCreateOrConnectWithoutEmployeeInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubCreateManyEmployeeInputEnvelope = {
    data: PayStubCreateManyEmployeeInput | PayStubCreateManyEmployeeInput[]
  }

  export type OrganizationUpsertWithoutEmployeesInput = {
    update: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutEmployeesInput, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type OrganizationUpdateWithoutEmployeesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payperiods?: PayperiodUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payperiods?: PayperiodUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PayStubUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubWhereUniqueInput
    update: XOR<PayStubUpdateWithoutEmployeeInput, PayStubUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubWhereUniqueInput
    data: XOR<PayStubUpdateWithoutEmployeeInput, PayStubUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayStubUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayStubScalarWhereInput
    data: XOR<PayStubUpdateManyMutationInput, PayStubUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayStubScalarWhereInput = {
    AND?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
    OR?: PayStubScalarWhereInput[]
    NOT?: PayStubScalarWhereInput | PayStubScalarWhereInput[]
    uuid?: StringFilter<"PayStub"> | string
    hourly?: JsonFilter<"PayStub">
    salary?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    commission?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    otherItems?: JsonFilter<"PayStub">
    employeeId?: StringFilter<"PayStub"> | string
    payperiodId?: StringFilter<"PayStub"> | string
  }

  export type OrganizationCreateWithoutPayperiodsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPayperiodsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    periodsPerYear?: number
    periodsRefDate: Date | string
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPayperiodsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPayperiodsInput, OrganizationUncheckedCreateWithoutPayperiodsInput>
  }

  export type PayStubCreateWithoutPayperiodInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
  }

  export type PayStubUncheckedCreateWithoutPayperiodInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employeeId: string
  }

  export type PayStubCreateOrConnectWithoutPayperiodInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput>
  }

  export type PayStubCreateManyPayperiodInputEnvelope = {
    data: PayStubCreateManyPayperiodInput | PayStubCreateManyPayperiodInput[]
  }

  export type OrganizationUpsertWithoutPayperiodsInput = {
    update: XOR<OrganizationUpdateWithoutPayperiodsInput, OrganizationUncheckedUpdateWithoutPayperiodsInput>
    create: XOR<OrganizationCreateWithoutPayperiodsInput, OrganizationUncheckedCreateWithoutPayperiodsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPayperiodsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPayperiodsInput, OrganizationUncheckedUpdateWithoutPayperiodsInput>
  }

  export type OrganizationUpdateWithoutPayperiodsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPayperiodsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    periodsPerYear?: IntFieldUpdateOperationsInput | number
    periodsRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PayStubUpsertWithWhereUniqueWithoutPayperiodInput = {
    where: PayStubWhereUniqueInput
    update: XOR<PayStubUpdateWithoutPayperiodInput, PayStubUncheckedUpdateWithoutPayperiodInput>
    create: XOR<PayStubCreateWithoutPayperiodInput, PayStubUncheckedCreateWithoutPayperiodInput>
  }

  export type PayStubUpdateWithWhereUniqueWithoutPayperiodInput = {
    where: PayStubWhereUniqueInput
    data: XOR<PayStubUpdateWithoutPayperiodInput, PayStubUncheckedUpdateWithoutPayperiodInput>
  }

  export type PayStubUpdateManyWithWhereWithoutPayperiodInput = {
    where: PayStubScalarWhereInput
    data: XOR<PayStubUpdateManyMutationInput, PayStubUncheckedUpdateManyWithoutPayperiodInput>
  }

  export type EmployeeCreateWithoutPayStubsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
  }

  export type EmployeeUncheckedCreateWithoutPayStubsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
  }

  export type EmployeeCreateOrConnectWithoutPayStubsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
  }

  export type PayperiodCreateWithoutPayStubsInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    organization: OrganizationCreateNestedOneWithoutPayperiodsInput
  }

  export type PayperiodUncheckedCreateWithoutPayStubsInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
    organizationId: string
  }

  export type PayperiodCreateOrConnectWithoutPayStubsInput = {
    where: PayperiodWhereUniqueInput
    create: XOR<PayperiodCreateWithoutPayStubsInput, PayperiodUncheckedCreateWithoutPayStubsInput>
  }

  export type EmployeeUpsertWithoutPayStubsInput = {
    update: XOR<EmployeeUpdateWithoutPayStubsInput, EmployeeUncheckedUpdateWithoutPayStubsInput>
    create: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutPayStubsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutPayStubsInput, EmployeeUncheckedUpdateWithoutPayStubsInput>
  }

  export type EmployeeUpdateWithoutPayStubsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutPayStubsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type PayperiodUpsertWithoutPayStubsInput = {
    update: XOR<PayperiodUpdateWithoutPayStubsInput, PayperiodUncheckedUpdateWithoutPayStubsInput>
    create: XOR<PayperiodCreateWithoutPayStubsInput, PayperiodUncheckedCreateWithoutPayStubsInput>
    where?: PayperiodWhereInput
  }

  export type PayperiodUpdateToOneWithWhereWithoutPayStubsInput = {
    where?: PayperiodWhereInput
    data: XOR<PayperiodUpdateWithoutPayStubsInput, PayperiodUncheckedUpdateWithoutPayStubsInput>
  }

  export type PayperiodUpdateWithoutPayStubsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    organization?: OrganizationUpdateOneRequiredWithoutPayperiodsNestedInput
  }

  export type PayperiodUncheckedUpdateWithoutPayStubsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateManyUserInput = {
    uuid?: string
    organizationId: string
    role?: string
    joinedAt?: Date | string
  }

  export type RoleUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateManyOrganizationInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    isSalary?: boolean
    salary?: Decimal | DecimalJsLike | number | string
    hourlyRates: JsonNullValueInput | InputJsonValue
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
  }

  export type PayperiodCreateManyOrganizationInput = {
    uuid?: string
    periodStart: Date | string
    periodEnd: Date | string
    includedEmployees: JsonNullValueInput | InputJsonValue
  }

  export type InviteCodeCreateManyOrganizationInput = {
    uuid?: string
    role: string
    expires: Date | string
  }

  export type RoleCreateManyOrganizationInput = {
    uuid?: string
    userId: string
    role?: string
    joinedAt?: Date | string
  }

  export type EmployeeUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hourlyRates?: JsonNullValueInput | InputJsonValue
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PayperiodUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    payStubs?: PayStubUpdateManyWithoutPayperiodNestedInput
  }

  export type PayperiodUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
    payStubs?: PayStubUncheckedUpdateManyWithoutPayperiodNestedInput
  }

  export type PayperiodUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    includedEmployees?: JsonNullValueInput | InputJsonValue
  }

  export type InviteCodeUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCodeUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type RoleUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayStubCreateManyEmployeeInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    payperiodId: string
  }

  export type PayStubUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    payperiod?: PayperiodUpdateOneRequiredWithoutPayStubsNestedInput
  }

  export type PayStubUncheckedUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    payperiodId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubUncheckedUpdateManyWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    payperiodId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubCreateManyPayperiodInput = {
    uuid?: string
    hourly: JsonNullValueInput | InputJsonValue
    salary?: Decimal | DecimalJsLike | number | string
    commission?: Decimal | DecimalJsLike | number | string
    bonus?: Decimal | DecimalJsLike | number | string
    federalRate?: Decimal | DecimalJsLike | number | string
    federalAmt?: Decimal | DecimalJsLike | number | string
    stateRate?: Decimal | DecimalJsLike | number | string
    stateAmt?: Decimal | DecimalJsLike | number | string
    mediRate?: Decimal | DecimalJsLike | number | string
    mediAmt?: Decimal | DecimalJsLike | number | string
    socialRate?: Decimal | DecimalJsLike | number | string
    socialAmt?: Decimal | DecimalJsLike | number | string
    otherItems: JsonNullValueInput | InputJsonValue
    employeeId: string
  }

  export type PayStubUpdateWithoutPayperiodInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
  }

  export type PayStubUncheckedUpdateWithoutPayperiodInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubUncheckedUpdateManyWithoutPayperiodInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    hourly?: JsonNullValueInput | InputJsonValue
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    federalAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stateAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    mediAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    socialAmt?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    otherItems?: JsonNullValueInput | InputJsonValue
    employeeId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}