
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
 * Model PayrollGroup
 * 
 */
export type PayrollGroup = $Result.DefaultSelection<Prisma.$PayrollGroupPayload>
/**
 * Model EmployeeCompensation
 * 
 */
export type EmployeeCompensation = $Result.DefaultSelection<Prisma.$EmployeeCompensationPayload>
/**
 * Model HourlyRate
 * 
 */
export type HourlyRate = $Result.DefaultSelection<Prisma.$HourlyRatePayload>
/**
 * Model PayStub
 * 
 */
export type PayStub = $Result.DefaultSelection<Prisma.$PayStubPayload>
/**
 * Model PayStubItem
 * 
 */
export type PayStubItem = $Result.DefaultSelection<Prisma.$PayStubItemPayload>
/**
 * Model PayrollItem
 * 
 */
export type PayrollItem = $Result.DefaultSelection<Prisma.$PayrollItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PayStubItemType: {
  Earning: 'Earning',
  Tax: 'Tax',
  Other: 'Other'
};

export type PayStubItemType = (typeof PayStubItemType)[keyof typeof PayStubItemType]


export const AbsMaxPeriodTypes: {
  None: 'None',
  Month: 'Month',
  Year: 'Year'
};

export type AbsMaxPeriodTypes = (typeof AbsMaxPeriodTypes)[keyof typeof AbsMaxPeriodTypes]

}

export type PayStubItemType = $Enums.PayStubItemType

export const PayStubItemType: typeof $Enums.PayStubItemType

export type AbsMaxPeriodTypes = $Enums.AbsMaxPeriodTypes

export const AbsMaxPeriodTypes: typeof $Enums.AbsMaxPeriodTypes

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
   * `prisma.payrollGroup`: Exposes CRUD operations for the **PayrollGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollGroups
    * const payrollGroups = await prisma.payrollGroup.findMany()
    * ```
    */
  get payrollGroup(): Prisma.PayrollGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeCompensation`: Exposes CRUD operations for the **EmployeeCompensation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeCompensations
    * const employeeCompensations = await prisma.employeeCompensation.findMany()
    * ```
    */
  get employeeCompensation(): Prisma.EmployeeCompensationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hourlyRate`: Exposes CRUD operations for the **HourlyRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HourlyRates
    * const hourlyRates = await prisma.hourlyRate.findMany()
    * ```
    */
  get hourlyRate(): Prisma.HourlyRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payStub`: Exposes CRUD operations for the **PayStub** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayStubs
    * const payStubs = await prisma.payStub.findMany()
    * ```
    */
  get payStub(): Prisma.PayStubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payStubItem`: Exposes CRUD operations for the **PayStubItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayStubItems
    * const payStubItems = await prisma.payStubItem.findMany()
    * ```
    */
  get payStubItem(): Prisma.PayStubItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollItem`: Exposes CRUD operations for the **PayrollItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollItems
    * const payrollItems = await prisma.payrollItem.findMany()
    * ```
    */
  get payrollItem(): Prisma.PayrollItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    PayrollGroup: 'PayrollGroup',
    EmployeeCompensation: 'EmployeeCompensation',
    HourlyRate: 'HourlyRate',
    PayStub: 'PayStub',
    PayStubItem: 'PayStubItem',
    PayrollItem: 'PayrollItem'
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
      modelProps: "user" | "registrationCode" | "inviteCode" | "role" | "organization" | "employee" | "payrollGroup" | "employeeCompensation" | "hourlyRate" | "payStub" | "payStubItem" | "payrollItem"
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
      PayrollGroup: {
        payload: Prisma.$PayrollGroupPayload<ExtArgs>
        fields: Prisma.PayrollGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          findFirst: {
            args: Prisma.PayrollGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          findMany: {
            args: Prisma.PayrollGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>[]
          }
          create: {
            args: Prisma.PayrollGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          createMany: {
            args: Prisma.PayrollGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>[]
          }
          delete: {
            args: Prisma.PayrollGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          update: {
            args: Prisma.PayrollGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          deleteMany: {
            args: Prisma.PayrollGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>[]
          }
          upsert: {
            args: Prisma.PayrollGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollGroupPayload>
          }
          aggregate: {
            args: Prisma.PayrollGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollGroup>
          }
          groupBy: {
            args: Prisma.PayrollGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollGroupCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollGroupCountAggregateOutputType> | number
          }
        }
      }
      EmployeeCompensation: {
        payload: Prisma.$EmployeeCompensationPayload<ExtArgs>
        fields: Prisma.EmployeeCompensationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeCompensationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeCompensationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          findFirst: {
            args: Prisma.EmployeeCompensationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeCompensationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          findMany: {
            args: Prisma.EmployeeCompensationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>[]
          }
          create: {
            args: Prisma.EmployeeCompensationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          createMany: {
            args: Prisma.EmployeeCompensationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCompensationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>[]
          }
          delete: {
            args: Prisma.EmployeeCompensationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          update: {
            args: Prisma.EmployeeCompensationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeCompensationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeCompensationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeCompensationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeCompensationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeCompensationPayload>
          }
          aggregate: {
            args: Prisma.EmployeeCompensationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeCompensation>
          }
          groupBy: {
            args: Prisma.EmployeeCompensationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCompensationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCompensationCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCompensationCountAggregateOutputType> | number
          }
        }
      }
      HourlyRate: {
        payload: Prisma.$HourlyRatePayload<ExtArgs>
        fields: Prisma.HourlyRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HourlyRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HourlyRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          findFirst: {
            args: Prisma.HourlyRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HourlyRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          findMany: {
            args: Prisma.HourlyRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>[]
          }
          create: {
            args: Prisma.HourlyRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          createMany: {
            args: Prisma.HourlyRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HourlyRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>[]
          }
          delete: {
            args: Prisma.HourlyRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          update: {
            args: Prisma.HourlyRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          deleteMany: {
            args: Prisma.HourlyRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HourlyRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HourlyRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>[]
          }
          upsert: {
            args: Prisma.HourlyRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HourlyRatePayload>
          }
          aggregate: {
            args: Prisma.HourlyRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHourlyRate>
          }
          groupBy: {
            args: Prisma.HourlyRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<HourlyRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.HourlyRateCountArgs<ExtArgs>
            result: $Utils.Optional<HourlyRateCountAggregateOutputType> | number
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
      PayStubItem: {
        payload: Prisma.$PayStubItemPayload<ExtArgs>
        fields: Prisma.PayStubItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayStubItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayStubItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          findFirst: {
            args: Prisma.PayStubItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayStubItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          findMany: {
            args: Prisma.PayStubItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>[]
          }
          create: {
            args: Prisma.PayStubItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          createMany: {
            args: Prisma.PayStubItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayStubItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>[]
          }
          delete: {
            args: Prisma.PayStubItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          update: {
            args: Prisma.PayStubItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          deleteMany: {
            args: Prisma.PayStubItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayStubItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayStubItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>[]
          }
          upsert: {
            args: Prisma.PayStubItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubItemPayload>
          }
          aggregate: {
            args: Prisma.PayStubItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayStubItem>
          }
          groupBy: {
            args: Prisma.PayStubItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayStubItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayStubItemCountArgs<ExtArgs>
            result: $Utils.Optional<PayStubItemCountAggregateOutputType> | number
          }
        }
      }
      PayrollItem: {
        payload: Prisma.$PayrollItemPayload<ExtArgs>
        fields: Prisma.PayrollItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findFirst: {
            args: Prisma.PayrollItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          findMany: {
            args: Prisma.PayrollItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          create: {
            args: Prisma.PayrollItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          createMany: {
            args: Prisma.PayrollItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          delete: {
            args: Prisma.PayrollItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          update: {
            args: Prisma.PayrollItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          deleteMany: {
            args: Prisma.PayrollItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>[]
          }
          upsert: {
            args: Prisma.PayrollItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollItemPayload>
          }
          aggregate: {
            args: Prisma.PayrollItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollItem>
          }
          groupBy: {
            args: Prisma.PayrollItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollItemCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollItemCountAggregateOutputType> | number
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
    payrollGroup?: PayrollGroupOmit
    employeeCompensation?: EmployeeCompensationOmit
    hourlyRate?: HourlyRateOmit
    payStub?: PayStubOmit
    payStubItem?: PayStubItemOmit
    payrollItem?: PayrollItemOmit
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
    payrollGroups: number
    inviteCodes: number
    memberships: number
    defaultPayrollItems: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
    payrollGroups?: boolean | OrganizationCountOutputTypeCountPayrollGroupsArgs
    inviteCodes?: boolean | OrganizationCountOutputTypeCountInviteCodesArgs
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs
    defaultPayrollItems?: boolean | OrganizationCountOutputTypeCountDefaultPayrollItemsArgs
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
  export type OrganizationCountOutputTypeCountPayrollGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollGroupWhereInput
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
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDefaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    compensations: number
    payStubs: number
    defaultPayrollItems: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | EmployeeCountOutputTypeCountCompensationsArgs
    payStubs?: boolean | EmployeeCountOutputTypeCountPayStubsArgs
    defaultPayrollItems?: boolean | EmployeeCountOutputTypeCountDefaultPayrollItemsArgs
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
  export type EmployeeCountOutputTypeCountCompensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCompensationWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountPayStubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDefaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }


  /**
   * Count Type PayrollGroupCountOutputType
   */

  export type PayrollGroupCountOutputType = {
    compensations: number
    defaultPayrollItems: number
  }

  export type PayrollGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | PayrollGroupCountOutputTypeCountCompensationsArgs
    defaultPayrollItems?: boolean | PayrollGroupCountOutputTypeCountDefaultPayrollItemsArgs
  }

  // Custom InputTypes
  /**
   * PayrollGroupCountOutputType without action
   */
  export type PayrollGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroupCountOutputType
     */
    select?: PayrollGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollGroupCountOutputType without action
   */
  export type PayrollGroupCountOutputTypeCountCompensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCompensationWhereInput
  }

  /**
   * PayrollGroupCountOutputType without action
   */
  export type PayrollGroupCountOutputTypeCountDefaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
  }


  /**
   * Count Type EmployeeCompensationCountOutputType
   */

  export type EmployeeCompensationCountOutputType = {
    hourlyRates: number
  }

  export type EmployeeCompensationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hourlyRates?: boolean | EmployeeCompensationCountOutputTypeCountHourlyRatesArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCompensationCountOutputType without action
   */
  export type EmployeeCompensationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensationCountOutputType
     */
    select?: EmployeeCompensationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCompensationCountOutputType without action
   */
  export type EmployeeCompensationCountOutputTypeCountHourlyRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HourlyRateWhereInput
  }


  /**
   * Count Type PayStubCountOutputType
   */

  export type PayStubCountOutputType = {
    items: number
  }

  export type PayStubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PayStubCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PayStubCountOutputType without action
   */
  export type PayStubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubCountOutputType
     */
    select?: PayStubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayStubCountOutputType without action
   */
  export type PayStubCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubItemWhereInput
  }


  /**
   * Count Type PayrollItemCountOutputType
   */

  export type PayrollItemCountOutputType = {
    PayStubItem: number
  }

  export type PayrollItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PayStubItem?: boolean | PayrollItemCountOutputTypeCountPayStubItemArgs
  }

  // Custom InputTypes
  /**
   * PayrollItemCountOutputType without action
   */
  export type PayrollItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItemCountOutputType
     */
    select?: PayrollItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollItemCountOutputType without action
   */
  export type PayrollItemCountOutputTypeCountPayStubItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    allocatedOrganizations: number | null
  }

  export type UserSumAggregateOutputType = {
    allocatedOrganizations: number | null
  }

  export type UserMinAggregateOutputType = {
    uuid: string | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    passHash: string | null
    allocatedOrganizations: number | null
  }

  export type UserMaxAggregateOutputType = {
    uuid: string | null
    isActive: boolean | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    passHash: string | null
    allocatedOrganizations: number | null
  }

  export type UserCountAggregateOutputType = {
    uuid: number
    isActive: number
    firstName: number
    lastName: number
    email: number
    username: number
    passHash: number
    allocatedOrganizations: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    allocatedOrganizations?: true
  }

  export type UserSumAggregateInputType = {
    allocatedOrganizations?: true
  }

  export type UserMinAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
    allocatedOrganizations?: true
  }

  export type UserMaxAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
    allocatedOrganizations?: true
  }

  export type UserCountAggregateInputType = {
    uuid?: true
    isActive?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    passHash?: true
    allocatedOrganizations?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
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
    allocatedOrganizations: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    allocatedOrganizations?: boolean
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
    allocatedOrganizations?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
    allocatedOrganizations?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    uuid?: boolean
    isActive?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    passHash?: boolean
    allocatedOrganizations?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "isActive" | "firstName" | "lastName" | "email" | "username" | "passHash" | "allocatedOrganizations", ExtArgs["result"]["user"]>
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
      allocatedOrganizations: number
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
    readonly allocatedOrganizations: FieldRef<"User", 'Int'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    notes: string | null
    address: string | null
    isDeleted: boolean | null
  }

  export type OrganizationMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    notes: string | null
    address: string | null
    isDeleted: boolean | null
  }

  export type OrganizationCountAggregateOutputType = {
    uuid: number
    name: number
    notes: number
    address: number
    isDeleted: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
  }

  export type OrganizationMaxAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
  }

  export type OrganizationCountAggregateInputType = {
    uuid?: true
    name?: true
    notes?: true
    address?: true
    isDeleted?: true
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
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    uuid: string
    name: string
    notes: string
    address: string
    isDeleted: boolean
    _count: OrganizationCountAggregateOutputType | null
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
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    payrollGroups?: boolean | Organization$payrollGroupsArgs<ExtArgs>
    inviteCodes?: boolean | Organization$inviteCodesArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    defaultPayrollItems?: boolean | Organization$defaultPayrollItemsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    uuid?: boolean
    name?: boolean
    notes?: boolean
    address?: boolean
    isDeleted?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "notes" | "address" | "isDeleted", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Organization$employeesArgs<ExtArgs>
    payrollGroups?: boolean | Organization$payrollGroupsArgs<ExtArgs>
    inviteCodes?: boolean | Organization$inviteCodesArgs<ExtArgs>
    memberships?: boolean | Organization$membershipsArgs<ExtArgs>
    defaultPayrollItems?: boolean | Organization$defaultPayrollItemsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      payrollGroups: Prisma.$PayrollGroupPayload<ExtArgs>[]
      inviteCodes: Prisma.$InviteCodePayload<ExtArgs>[]
      memberships: Prisma.$RolePayload<ExtArgs>[]
      defaultPayrollItems: Prisma.$PayrollItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      notes: string
      address: string
      isDeleted: boolean
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
    payrollGroups<T extends Organization$payrollGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$payrollGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inviteCodes<T extends Organization$inviteCodesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$inviteCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends Organization$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultPayrollItems<T extends Organization$defaultPayrollItemsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$defaultPayrollItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * Organization.payrollGroups
   */
  export type Organization$payrollGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    where?: PayrollGroupWhereInput
    orderBy?: PayrollGroupOrderByWithRelationInput | PayrollGroupOrderByWithRelationInput[]
    cursor?: PayrollGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollGroupScalarFieldEnum | PayrollGroupScalarFieldEnum[]
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
   * Organization.defaultPayrollItems
   */
  export type Organization$defaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
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
    dependants: number | null
  }

  export type EmployeeSumAggregateOutputType = {
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
    filingStatus: number
    dependants: number
    isDeleted: number
    organizationId: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    dependants?: true
  }

  export type EmployeeSumAggregateInputType = {
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
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    compensations?: boolean | Employee$compensationsArgs<ExtArgs>
    payStubs?: boolean | Employee$payStubsArgs<ExtArgs>
    defaultPayrollItems?: boolean | Employee$defaultPayrollItemsArgs<ExtArgs>
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
    filingStatus?: boolean
    dependants?: boolean
    isDeleted?: boolean
    organizationId?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "firstName" | "middleName" | "lastName" | "notes" | "address" | "email" | "phoneNumber" | "ssn" | "filingStatus" | "dependants" | "isDeleted" | "organizationId", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    compensations?: boolean | Employee$compensationsArgs<ExtArgs>
    payStubs?: boolean | Employee$payStubsArgs<ExtArgs>
    defaultPayrollItems?: boolean | Employee$defaultPayrollItemsArgs<ExtArgs>
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
      compensations: Prisma.$EmployeeCompensationPayload<ExtArgs>[]
      payStubs: Prisma.$PayStubPayload<ExtArgs>[]
      defaultPayrollItems: Prisma.$PayrollItemPayload<ExtArgs>[]
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
    compensations<T extends Employee$compensationsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$compensationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payStubs<T extends Employee$payStubsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$payStubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultPayrollItems<T extends Employee$defaultPayrollItemsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$defaultPayrollItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * Employee.compensations
   */
  export type Employee$compensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    where?: EmployeeCompensationWhereInput
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    cursor?: EmployeeCompensationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeCompensationScalarFieldEnum | EmployeeCompensationScalarFieldEnum[]
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
   * Employee.defaultPayrollItems
   */
  export type Employee$defaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
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
   * Model PayrollGroup
   */

  export type AggregatePayrollGroup = {
    _count: PayrollGroupCountAggregateOutputType | null
    _avg: PayrollGroupAvgAggregateOutputType | null
    _sum: PayrollGroupSumAggregateOutputType | null
    _min: PayrollGroupMinAggregateOutputType | null
    _max: PayrollGroupMaxAggregateOutputType | null
  }

  export type PayrollGroupAvgAggregateOutputType = {
    payFrequency: number | null
  }

  export type PayrollGroupSumAggregateOutputType = {
    payFrequency: number | null
  }

  export type PayrollGroupMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    payFrequency: number | null
    payRefDate: Date | null
    organizationId: string | null
  }

  export type PayrollGroupMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    description: string | null
    payFrequency: number | null
    payRefDate: Date | null
    organizationId: string | null
  }

  export type PayrollGroupCountAggregateOutputType = {
    uuid: number
    name: number
    description: number
    payFrequency: number
    payRefDate: number
    organizationId: number
    _all: number
  }


  export type PayrollGroupAvgAggregateInputType = {
    payFrequency?: true
  }

  export type PayrollGroupSumAggregateInputType = {
    payFrequency?: true
  }

  export type PayrollGroupMinAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    payFrequency?: true
    payRefDate?: true
    organizationId?: true
  }

  export type PayrollGroupMaxAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    payFrequency?: true
    payRefDate?: true
    organizationId?: true
  }

  export type PayrollGroupCountAggregateInputType = {
    uuid?: true
    name?: true
    description?: true
    payFrequency?: true
    payRefDate?: true
    organizationId?: true
    _all?: true
  }

  export type PayrollGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollGroup to aggregate.
     */
    where?: PayrollGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollGroups to fetch.
     */
    orderBy?: PayrollGroupOrderByWithRelationInput | PayrollGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollGroups
    **/
    _count?: true | PayrollGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollGroupMaxAggregateInputType
  }

  export type GetPayrollGroupAggregateType<T extends PayrollGroupAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollGroup[P]>
      : GetScalarType<T[P], AggregatePayrollGroup[P]>
  }




  export type PayrollGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollGroupWhereInput
    orderBy?: PayrollGroupOrderByWithAggregationInput | PayrollGroupOrderByWithAggregationInput[]
    by: PayrollGroupScalarFieldEnum[] | PayrollGroupScalarFieldEnum
    having?: PayrollGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollGroupCountAggregateInputType | true
    _avg?: PayrollGroupAvgAggregateInputType
    _sum?: PayrollGroupSumAggregateInputType
    _min?: PayrollGroupMinAggregateInputType
    _max?: PayrollGroupMaxAggregateInputType
  }

  export type PayrollGroupGroupByOutputType = {
    uuid: string
    name: string
    description: string
    payFrequency: number
    payRefDate: Date
    organizationId: string
    _count: PayrollGroupCountAggregateOutputType | null
    _avg: PayrollGroupAvgAggregateOutputType | null
    _sum: PayrollGroupSumAggregateOutputType | null
    _min: PayrollGroupMinAggregateOutputType | null
    _max: PayrollGroupMaxAggregateOutputType | null
  }

  type GetPayrollGroupGroupByPayload<T extends PayrollGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollGroupGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollGroupGroupByOutputType[P]>
        }
      >
    >


  export type PayrollGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    payFrequency?: boolean
    payRefDate?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    compensations?: boolean | PayrollGroup$compensationsArgs<ExtArgs>
    defaultPayrollItems?: boolean | PayrollGroup$defaultPayrollItemsArgs<ExtArgs>
    _count?: boolean | PayrollGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollGroup"]>

  export type PayrollGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    payFrequency?: boolean
    payRefDate?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollGroup"]>

  export type PayrollGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    description?: boolean
    payFrequency?: boolean
    payRefDate?: boolean
    organizationId?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollGroup"]>

  export type PayrollGroupSelectScalar = {
    uuid?: boolean
    name?: boolean
    description?: boolean
    payFrequency?: boolean
    payRefDate?: boolean
    organizationId?: boolean
  }

  export type PayrollGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "description" | "payFrequency" | "payRefDate" | "organizationId", ExtArgs["result"]["payrollGroup"]>
  export type PayrollGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    compensations?: boolean | PayrollGroup$compensationsArgs<ExtArgs>
    defaultPayrollItems?: boolean | PayrollGroup$defaultPayrollItemsArgs<ExtArgs>
    _count?: boolean | PayrollGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayrollGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type PayrollGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $PayrollGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollGroup"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      compensations: Prisma.$EmployeeCompensationPayload<ExtArgs>[]
      defaultPayrollItems: Prisma.$PayrollItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      description: string
      payFrequency: number
      payRefDate: Date
      organizationId: string
    }, ExtArgs["result"]["payrollGroup"]>
    composites: {}
  }

  type PayrollGroupGetPayload<S extends boolean | null | undefined | PayrollGroupDefaultArgs> = $Result.GetResult<Prisma.$PayrollGroupPayload, S>

  type PayrollGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollGroupCountAggregateInputType | true
    }

  export interface PayrollGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollGroup'], meta: { name: 'PayrollGroup' } }
    /**
     * Find zero or one PayrollGroup that matches the filter.
     * @param {PayrollGroupFindUniqueArgs} args - Arguments to find a PayrollGroup
     * @example
     * // Get one PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollGroupFindUniqueArgs>(args: SelectSubset<T, PayrollGroupFindUniqueArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollGroupFindUniqueOrThrowArgs} args - Arguments to find a PayrollGroup
     * @example
     * // Get one PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupFindFirstArgs} args - Arguments to find a PayrollGroup
     * @example
     * // Get one PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollGroupFindFirstArgs>(args?: SelectSubset<T, PayrollGroupFindFirstArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupFindFirstOrThrowArgs} args - Arguments to find a PayrollGroup
     * @example
     * // Get one PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollGroups
     * const payrollGroups = await prisma.payrollGroup.findMany()
     * 
     * // Get first 10 PayrollGroups
     * const payrollGroups = await prisma.payrollGroup.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const payrollGroupWithUuidOnly = await prisma.payrollGroup.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends PayrollGroupFindManyArgs>(args?: SelectSubset<T, PayrollGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollGroup.
     * @param {PayrollGroupCreateArgs} args - Arguments to create a PayrollGroup.
     * @example
     * // Create one PayrollGroup
     * const PayrollGroup = await prisma.payrollGroup.create({
     *   data: {
     *     // ... data to create a PayrollGroup
     *   }
     * })
     * 
     */
    create<T extends PayrollGroupCreateArgs>(args: SelectSubset<T, PayrollGroupCreateArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollGroups.
     * @param {PayrollGroupCreateManyArgs} args - Arguments to create many PayrollGroups.
     * @example
     * // Create many PayrollGroups
     * const payrollGroup = await prisma.payrollGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollGroupCreateManyArgs>(args?: SelectSubset<T, PayrollGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollGroups and returns the data saved in the database.
     * @param {PayrollGroupCreateManyAndReturnArgs} args - Arguments to create many PayrollGroups.
     * @example
     * // Create many PayrollGroups
     * const payrollGroup = await prisma.payrollGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollGroups and only return the `uuid`
     * const payrollGroupWithUuidOnly = await prisma.payrollGroup.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollGroup.
     * @param {PayrollGroupDeleteArgs} args - Arguments to delete one PayrollGroup.
     * @example
     * // Delete one PayrollGroup
     * const PayrollGroup = await prisma.payrollGroup.delete({
     *   where: {
     *     // ... filter to delete one PayrollGroup
     *   }
     * })
     * 
     */
    delete<T extends PayrollGroupDeleteArgs>(args: SelectSubset<T, PayrollGroupDeleteArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollGroup.
     * @param {PayrollGroupUpdateArgs} args - Arguments to update one PayrollGroup.
     * @example
     * // Update one PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollGroupUpdateArgs>(args: SelectSubset<T, PayrollGroupUpdateArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollGroups.
     * @param {PayrollGroupDeleteManyArgs} args - Arguments to filter PayrollGroups to delete.
     * @example
     * // Delete a few PayrollGroups
     * const { count } = await prisma.payrollGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollGroupDeleteManyArgs>(args?: SelectSubset<T, PayrollGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollGroups
     * const payrollGroup = await prisma.payrollGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollGroupUpdateManyArgs>(args: SelectSubset<T, PayrollGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollGroups and returns the data updated in the database.
     * @param {PayrollGroupUpdateManyAndReturnArgs} args - Arguments to update many PayrollGroups.
     * @example
     * // Update many PayrollGroups
     * const payrollGroup = await prisma.payrollGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollGroups and only return the `uuid`
     * const payrollGroupWithUuidOnly = await prisma.payrollGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollGroup.
     * @param {PayrollGroupUpsertArgs} args - Arguments to update or create a PayrollGroup.
     * @example
     * // Update or create a PayrollGroup
     * const payrollGroup = await prisma.payrollGroup.upsert({
     *   create: {
     *     // ... data to create a PayrollGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollGroup we want to update
     *   }
     * })
     */
    upsert<T extends PayrollGroupUpsertArgs>(args: SelectSubset<T, PayrollGroupUpsertArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupCountArgs} args - Arguments to filter PayrollGroups to count.
     * @example
     * // Count the number of PayrollGroups
     * const count = await prisma.payrollGroup.count({
     *   where: {
     *     // ... the filter for the PayrollGroups we want to count
     *   }
     * })
    **/
    count<T extends PayrollGroupCountArgs>(
      args?: Subset<T, PayrollGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollGroupAggregateArgs>(args: Subset<T, PayrollGroupAggregateArgs>): Prisma.PrismaPromise<GetPayrollGroupAggregateType<T>>

    /**
     * Group by PayrollGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollGroupGroupByArgs} args - Group by arguments.
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
      T extends PayrollGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollGroupGroupByArgs['orderBy'] }
        : { orderBy?: PayrollGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollGroup model
   */
  readonly fields: PayrollGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    compensations<T extends PayrollGroup$compensationsArgs<ExtArgs> = {}>(args?: Subset<T, PayrollGroup$compensationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultPayrollItems<T extends PayrollGroup$defaultPayrollItemsArgs<ExtArgs> = {}>(args?: Subset<T, PayrollGroup$defaultPayrollItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PayrollGroup model
   */
  interface PayrollGroupFieldRefs {
    readonly uuid: FieldRef<"PayrollGroup", 'String'>
    readonly name: FieldRef<"PayrollGroup", 'String'>
    readonly description: FieldRef<"PayrollGroup", 'String'>
    readonly payFrequency: FieldRef<"PayrollGroup", 'Int'>
    readonly payRefDate: FieldRef<"PayrollGroup", 'DateTime'>
    readonly organizationId: FieldRef<"PayrollGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PayrollGroup findUnique
   */
  export type PayrollGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter, which PayrollGroup to fetch.
     */
    where: PayrollGroupWhereUniqueInput
  }

  /**
   * PayrollGroup findUniqueOrThrow
   */
  export type PayrollGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter, which PayrollGroup to fetch.
     */
    where: PayrollGroupWhereUniqueInput
  }

  /**
   * PayrollGroup findFirst
   */
  export type PayrollGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter, which PayrollGroup to fetch.
     */
    where?: PayrollGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollGroups to fetch.
     */
    orderBy?: PayrollGroupOrderByWithRelationInput | PayrollGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollGroups.
     */
    cursor?: PayrollGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollGroups.
     */
    distinct?: PayrollGroupScalarFieldEnum | PayrollGroupScalarFieldEnum[]
  }

  /**
   * PayrollGroup findFirstOrThrow
   */
  export type PayrollGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter, which PayrollGroup to fetch.
     */
    where?: PayrollGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollGroups to fetch.
     */
    orderBy?: PayrollGroupOrderByWithRelationInput | PayrollGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollGroups.
     */
    cursor?: PayrollGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollGroups.
     */
    distinct?: PayrollGroupScalarFieldEnum | PayrollGroupScalarFieldEnum[]
  }

  /**
   * PayrollGroup findMany
   */
  export type PayrollGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter, which PayrollGroups to fetch.
     */
    where?: PayrollGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollGroups to fetch.
     */
    orderBy?: PayrollGroupOrderByWithRelationInput | PayrollGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollGroups.
     */
    cursor?: PayrollGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollGroups.
     */
    skip?: number
    distinct?: PayrollGroupScalarFieldEnum | PayrollGroupScalarFieldEnum[]
  }

  /**
   * PayrollGroup create
   */
  export type PayrollGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollGroup.
     */
    data: XOR<PayrollGroupCreateInput, PayrollGroupUncheckedCreateInput>
  }

  /**
   * PayrollGroup createMany
   */
  export type PayrollGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollGroups.
     */
    data: PayrollGroupCreateManyInput | PayrollGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollGroup createManyAndReturn
   */
  export type PayrollGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollGroups.
     */
    data: PayrollGroupCreateManyInput | PayrollGroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollGroup update
   */
  export type PayrollGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollGroup.
     */
    data: XOR<PayrollGroupUpdateInput, PayrollGroupUncheckedUpdateInput>
    /**
     * Choose, which PayrollGroup to update.
     */
    where: PayrollGroupWhereUniqueInput
  }

  /**
   * PayrollGroup updateMany
   */
  export type PayrollGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollGroups.
     */
    data: XOR<PayrollGroupUpdateManyMutationInput, PayrollGroupUncheckedUpdateManyInput>
    /**
     * Filter which PayrollGroups to update
     */
    where?: PayrollGroupWhereInput
    /**
     * Limit how many PayrollGroups to update.
     */
    limit?: number
  }

  /**
   * PayrollGroup updateManyAndReturn
   */
  export type PayrollGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * The data used to update PayrollGroups.
     */
    data: XOR<PayrollGroupUpdateManyMutationInput, PayrollGroupUncheckedUpdateManyInput>
    /**
     * Filter which PayrollGroups to update
     */
    where?: PayrollGroupWhereInput
    /**
     * Limit how many PayrollGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollGroup upsert
   */
  export type PayrollGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollGroup to update in case it exists.
     */
    where: PayrollGroupWhereUniqueInput
    /**
     * In case the PayrollGroup found by the `where` argument doesn't exist, create a new PayrollGroup with this data.
     */
    create: XOR<PayrollGroupCreateInput, PayrollGroupUncheckedCreateInput>
    /**
     * In case the PayrollGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollGroupUpdateInput, PayrollGroupUncheckedUpdateInput>
  }

  /**
   * PayrollGroup delete
   */
  export type PayrollGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    /**
     * Filter which PayrollGroup to delete.
     */
    where: PayrollGroupWhereUniqueInput
  }

  /**
   * PayrollGroup deleteMany
   */
  export type PayrollGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollGroups to delete
     */
    where?: PayrollGroupWhereInput
    /**
     * Limit how many PayrollGroups to delete.
     */
    limit?: number
  }

  /**
   * PayrollGroup.compensations
   */
  export type PayrollGroup$compensationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    where?: EmployeeCompensationWhereInput
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    cursor?: EmployeeCompensationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeCompensationScalarFieldEnum | EmployeeCompensationScalarFieldEnum[]
  }

  /**
   * PayrollGroup.defaultPayrollItems
   */
  export type PayrollGroup$defaultPayrollItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    cursor?: PayrollItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollGroup without action
   */
  export type PayrollGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeCompensation
   */

  export type AggregateEmployeeCompensation = {
    _count: EmployeeCompensationCountAggregateOutputType | null
    _avg: EmployeeCompensationAvgAggregateOutputType | null
    _sum: EmployeeCompensationSumAggregateOutputType | null
    _min: EmployeeCompensationMinAggregateOutputType | null
    _max: EmployeeCompensationMaxAggregateOutputType | null
  }

  export type EmployeeCompensationAvgAggregateOutputType = {
    salaryAmount: Decimal | null
  }

  export type EmployeeCompensationSumAggregateOutputType = {
    salaryAmount: Decimal | null
  }

  export type EmployeeCompensationMinAggregateOutputType = {
    uuid: string | null
    employeeId: string | null
    payrollGroupId: string | null
    isSalary: boolean | null
    salaryAmount: Decimal | null
  }

  export type EmployeeCompensationMaxAggregateOutputType = {
    uuid: string | null
    employeeId: string | null
    payrollGroupId: string | null
    isSalary: boolean | null
    salaryAmount: Decimal | null
  }

  export type EmployeeCompensationCountAggregateOutputType = {
    uuid: number
    employeeId: number
    payrollGroupId: number
    isSalary: number
    salaryAmount: number
    _all: number
  }


  export type EmployeeCompensationAvgAggregateInputType = {
    salaryAmount?: true
  }

  export type EmployeeCompensationSumAggregateInputType = {
    salaryAmount?: true
  }

  export type EmployeeCompensationMinAggregateInputType = {
    uuid?: true
    employeeId?: true
    payrollGroupId?: true
    isSalary?: true
    salaryAmount?: true
  }

  export type EmployeeCompensationMaxAggregateInputType = {
    uuid?: true
    employeeId?: true
    payrollGroupId?: true
    isSalary?: true
    salaryAmount?: true
  }

  export type EmployeeCompensationCountAggregateInputType = {
    uuid?: true
    employeeId?: true
    payrollGroupId?: true
    isSalary?: true
    salaryAmount?: true
    _all?: true
  }

  export type EmployeeCompensationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCompensation to aggregate.
     */
    where?: EmployeeCompensationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCompensations to fetch.
     */
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeCompensationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCompensations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCompensations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeCompensations
    **/
    _count?: true | EmployeeCompensationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeCompensationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeCompensationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeCompensationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeCompensationMaxAggregateInputType
  }

  export type GetEmployeeCompensationAggregateType<T extends EmployeeCompensationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeCompensation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeCompensation[P]>
      : GetScalarType<T[P], AggregateEmployeeCompensation[P]>
  }




  export type EmployeeCompensationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeCompensationWhereInput
    orderBy?: EmployeeCompensationOrderByWithAggregationInput | EmployeeCompensationOrderByWithAggregationInput[]
    by: EmployeeCompensationScalarFieldEnum[] | EmployeeCompensationScalarFieldEnum
    having?: EmployeeCompensationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCompensationCountAggregateInputType | true
    _avg?: EmployeeCompensationAvgAggregateInputType
    _sum?: EmployeeCompensationSumAggregateInputType
    _min?: EmployeeCompensationMinAggregateInputType
    _max?: EmployeeCompensationMaxAggregateInputType
  }

  export type EmployeeCompensationGroupByOutputType = {
    uuid: string
    employeeId: string
    payrollGroupId: string
    isSalary: boolean
    salaryAmount: Decimal | null
    _count: EmployeeCompensationCountAggregateOutputType | null
    _avg: EmployeeCompensationAvgAggregateOutputType | null
    _sum: EmployeeCompensationSumAggregateOutputType | null
    _min: EmployeeCompensationMinAggregateOutputType | null
    _max: EmployeeCompensationMaxAggregateOutputType | null
  }

  type GetEmployeeCompensationGroupByPayload<T extends EmployeeCompensationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeCompensationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeCompensationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeCompensationGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeCompensationGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeCompensationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    employeeId?: boolean
    payrollGroupId?: boolean
    isSalary?: boolean
    salaryAmount?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
    hourlyRates?: boolean | EmployeeCompensation$hourlyRatesArgs<ExtArgs>
    _count?: boolean | EmployeeCompensationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCompensation"]>

  export type EmployeeCompensationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    employeeId?: boolean
    payrollGroupId?: boolean
    isSalary?: boolean
    salaryAmount?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCompensation"]>

  export type EmployeeCompensationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    employeeId?: boolean
    payrollGroupId?: boolean
    isSalary?: boolean
    salaryAmount?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeCompensation"]>

  export type EmployeeCompensationSelectScalar = {
    uuid?: boolean
    employeeId?: boolean
    payrollGroupId?: boolean
    isSalary?: boolean
    salaryAmount?: boolean
  }

  export type EmployeeCompensationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "employeeId" | "payrollGroupId" | "isSalary" | "salaryAmount", ExtArgs["result"]["employeeCompensation"]>
  export type EmployeeCompensationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
    hourlyRates?: boolean | EmployeeCompensation$hourlyRatesArgs<ExtArgs>
    _count?: boolean | EmployeeCompensationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeCompensationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
  }
  export type EmployeeCompensationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    payrollGroup?: boolean | PayrollGroupDefaultArgs<ExtArgs>
  }

  export type $EmployeeCompensationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeCompensation"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      payrollGroup: Prisma.$PayrollGroupPayload<ExtArgs>
      hourlyRates: Prisma.$HourlyRatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      employeeId: string
      payrollGroupId: string
      isSalary: boolean
      salaryAmount: Prisma.Decimal | null
    }, ExtArgs["result"]["employeeCompensation"]>
    composites: {}
  }

  type EmployeeCompensationGetPayload<S extends boolean | null | undefined | EmployeeCompensationDefaultArgs> = $Result.GetResult<Prisma.$EmployeeCompensationPayload, S>

  type EmployeeCompensationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeCompensationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCompensationCountAggregateInputType | true
    }

  export interface EmployeeCompensationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeCompensation'], meta: { name: 'EmployeeCompensation' } }
    /**
     * Find zero or one EmployeeCompensation that matches the filter.
     * @param {EmployeeCompensationFindUniqueArgs} args - Arguments to find a EmployeeCompensation
     * @example
     * // Get one EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeCompensationFindUniqueArgs>(args: SelectSubset<T, EmployeeCompensationFindUniqueArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeCompensation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeCompensationFindUniqueOrThrowArgs} args - Arguments to find a EmployeeCompensation
     * @example
     * // Get one EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeCompensationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeCompensationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCompensation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationFindFirstArgs} args - Arguments to find a EmployeeCompensation
     * @example
     * // Get one EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeCompensationFindFirstArgs>(args?: SelectSubset<T, EmployeeCompensationFindFirstArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeCompensation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationFindFirstOrThrowArgs} args - Arguments to find a EmployeeCompensation
     * @example
     * // Get one EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeCompensationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeCompensationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeCompensations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeCompensations
     * const employeeCompensations = await prisma.employeeCompensation.findMany()
     * 
     * // Get first 10 EmployeeCompensations
     * const employeeCompensations = await prisma.employeeCompensation.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const employeeCompensationWithUuidOnly = await prisma.employeeCompensation.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends EmployeeCompensationFindManyArgs>(args?: SelectSubset<T, EmployeeCompensationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeCompensation.
     * @param {EmployeeCompensationCreateArgs} args - Arguments to create a EmployeeCompensation.
     * @example
     * // Create one EmployeeCompensation
     * const EmployeeCompensation = await prisma.employeeCompensation.create({
     *   data: {
     *     // ... data to create a EmployeeCompensation
     *   }
     * })
     * 
     */
    create<T extends EmployeeCompensationCreateArgs>(args: SelectSubset<T, EmployeeCompensationCreateArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeCompensations.
     * @param {EmployeeCompensationCreateManyArgs} args - Arguments to create many EmployeeCompensations.
     * @example
     * // Create many EmployeeCompensations
     * const employeeCompensation = await prisma.employeeCompensation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCompensationCreateManyArgs>(args?: SelectSubset<T, EmployeeCompensationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeCompensations and returns the data saved in the database.
     * @param {EmployeeCompensationCreateManyAndReturnArgs} args - Arguments to create many EmployeeCompensations.
     * @example
     * // Create many EmployeeCompensations
     * const employeeCompensation = await prisma.employeeCompensation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeCompensations and only return the `uuid`
     * const employeeCompensationWithUuidOnly = await prisma.employeeCompensation.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCompensationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCompensationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeCompensation.
     * @param {EmployeeCompensationDeleteArgs} args - Arguments to delete one EmployeeCompensation.
     * @example
     * // Delete one EmployeeCompensation
     * const EmployeeCompensation = await prisma.employeeCompensation.delete({
     *   where: {
     *     // ... filter to delete one EmployeeCompensation
     *   }
     * })
     * 
     */
    delete<T extends EmployeeCompensationDeleteArgs>(args: SelectSubset<T, EmployeeCompensationDeleteArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeCompensation.
     * @param {EmployeeCompensationUpdateArgs} args - Arguments to update one EmployeeCompensation.
     * @example
     * // Update one EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeCompensationUpdateArgs>(args: SelectSubset<T, EmployeeCompensationUpdateArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeCompensations.
     * @param {EmployeeCompensationDeleteManyArgs} args - Arguments to filter EmployeeCompensations to delete.
     * @example
     * // Delete a few EmployeeCompensations
     * const { count } = await prisma.employeeCompensation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeCompensationDeleteManyArgs>(args?: SelectSubset<T, EmployeeCompensationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCompensations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeCompensations
     * const employeeCompensation = await prisma.employeeCompensation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeCompensationUpdateManyArgs>(args: SelectSubset<T, EmployeeCompensationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeCompensations and returns the data updated in the database.
     * @param {EmployeeCompensationUpdateManyAndReturnArgs} args - Arguments to update many EmployeeCompensations.
     * @example
     * // Update many EmployeeCompensations
     * const employeeCompensation = await prisma.employeeCompensation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeCompensations and only return the `uuid`
     * const employeeCompensationWithUuidOnly = await prisma.employeeCompensation.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeCompensationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeCompensationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeCompensation.
     * @param {EmployeeCompensationUpsertArgs} args - Arguments to update or create a EmployeeCompensation.
     * @example
     * // Update or create a EmployeeCompensation
     * const employeeCompensation = await prisma.employeeCompensation.upsert({
     *   create: {
     *     // ... data to create a EmployeeCompensation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeCompensation we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeCompensationUpsertArgs>(args: SelectSubset<T, EmployeeCompensationUpsertArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeCompensations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationCountArgs} args - Arguments to filter EmployeeCompensations to count.
     * @example
     * // Count the number of EmployeeCompensations
     * const count = await prisma.employeeCompensation.count({
     *   where: {
     *     // ... the filter for the EmployeeCompensations we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCompensationCountArgs>(
      args?: Subset<T, EmployeeCompensationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCompensationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeCompensation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeCompensationAggregateArgs>(args: Subset<T, EmployeeCompensationAggregateArgs>): Prisma.PrismaPromise<GetEmployeeCompensationAggregateType<T>>

    /**
     * Group by EmployeeCompensation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCompensationGroupByArgs} args - Group by arguments.
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
      T extends EmployeeCompensationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeCompensationGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeCompensationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeCompensationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeCompensationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeCompensation model
   */
  readonly fields: EmployeeCompensationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeCompensation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeCompensationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payrollGroup<T extends PayrollGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayrollGroupDefaultArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hourlyRates<T extends EmployeeCompensation$hourlyRatesArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeCompensation$hourlyRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EmployeeCompensation model
   */
  interface EmployeeCompensationFieldRefs {
    readonly uuid: FieldRef<"EmployeeCompensation", 'String'>
    readonly employeeId: FieldRef<"EmployeeCompensation", 'String'>
    readonly payrollGroupId: FieldRef<"EmployeeCompensation", 'String'>
    readonly isSalary: FieldRef<"EmployeeCompensation", 'Boolean'>
    readonly salaryAmount: FieldRef<"EmployeeCompensation", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeCompensation findUnique
   */
  export type EmployeeCompensationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCompensation to fetch.
     */
    where: EmployeeCompensationWhereUniqueInput
  }

  /**
   * EmployeeCompensation findUniqueOrThrow
   */
  export type EmployeeCompensationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCompensation to fetch.
     */
    where: EmployeeCompensationWhereUniqueInput
  }

  /**
   * EmployeeCompensation findFirst
   */
  export type EmployeeCompensationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCompensation to fetch.
     */
    where?: EmployeeCompensationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCompensations to fetch.
     */
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCompensations.
     */
    cursor?: EmployeeCompensationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCompensations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCompensations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCompensations.
     */
    distinct?: EmployeeCompensationScalarFieldEnum | EmployeeCompensationScalarFieldEnum[]
  }

  /**
   * EmployeeCompensation findFirstOrThrow
   */
  export type EmployeeCompensationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCompensation to fetch.
     */
    where?: EmployeeCompensationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCompensations to fetch.
     */
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeCompensations.
     */
    cursor?: EmployeeCompensationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCompensations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCompensations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeCompensations.
     */
    distinct?: EmployeeCompensationScalarFieldEnum | EmployeeCompensationScalarFieldEnum[]
  }

  /**
   * EmployeeCompensation findMany
   */
  export type EmployeeCompensationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeCompensations to fetch.
     */
    where?: EmployeeCompensationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeCompensations to fetch.
     */
    orderBy?: EmployeeCompensationOrderByWithRelationInput | EmployeeCompensationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeCompensations.
     */
    cursor?: EmployeeCompensationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeCompensations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeCompensations.
     */
    skip?: number
    distinct?: EmployeeCompensationScalarFieldEnum | EmployeeCompensationScalarFieldEnum[]
  }

  /**
   * EmployeeCompensation create
   */
  export type EmployeeCompensationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeCompensation.
     */
    data: XOR<EmployeeCompensationCreateInput, EmployeeCompensationUncheckedCreateInput>
  }

  /**
   * EmployeeCompensation createMany
   */
  export type EmployeeCompensationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeCompensations.
     */
    data: EmployeeCompensationCreateManyInput | EmployeeCompensationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeCompensation createManyAndReturn
   */
  export type EmployeeCompensationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeCompensations.
     */
    data: EmployeeCompensationCreateManyInput | EmployeeCompensationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeCompensation update
   */
  export type EmployeeCompensationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeCompensation.
     */
    data: XOR<EmployeeCompensationUpdateInput, EmployeeCompensationUncheckedUpdateInput>
    /**
     * Choose, which EmployeeCompensation to update.
     */
    where: EmployeeCompensationWhereUniqueInput
  }

  /**
   * EmployeeCompensation updateMany
   */
  export type EmployeeCompensationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeCompensations.
     */
    data: XOR<EmployeeCompensationUpdateManyMutationInput, EmployeeCompensationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCompensations to update
     */
    where?: EmployeeCompensationWhereInput
    /**
     * Limit how many EmployeeCompensations to update.
     */
    limit?: number
  }

  /**
   * EmployeeCompensation updateManyAndReturn
   */
  export type EmployeeCompensationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeCompensations.
     */
    data: XOR<EmployeeCompensationUpdateManyMutationInput, EmployeeCompensationUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeCompensations to update
     */
    where?: EmployeeCompensationWhereInput
    /**
     * Limit how many EmployeeCompensations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeCompensation upsert
   */
  export type EmployeeCompensationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeCompensation to update in case it exists.
     */
    where: EmployeeCompensationWhereUniqueInput
    /**
     * In case the EmployeeCompensation found by the `where` argument doesn't exist, create a new EmployeeCompensation with this data.
     */
    create: XOR<EmployeeCompensationCreateInput, EmployeeCompensationUncheckedCreateInput>
    /**
     * In case the EmployeeCompensation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeCompensationUpdateInput, EmployeeCompensationUncheckedUpdateInput>
  }

  /**
   * EmployeeCompensation delete
   */
  export type EmployeeCompensationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
    /**
     * Filter which EmployeeCompensation to delete.
     */
    where: EmployeeCompensationWhereUniqueInput
  }

  /**
   * EmployeeCompensation deleteMany
   */
  export type EmployeeCompensationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeCompensations to delete
     */
    where?: EmployeeCompensationWhereInput
    /**
     * Limit how many EmployeeCompensations to delete.
     */
    limit?: number
  }

  /**
   * EmployeeCompensation.hourlyRates
   */
  export type EmployeeCompensation$hourlyRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    where?: HourlyRateWhereInput
    orderBy?: HourlyRateOrderByWithRelationInput | HourlyRateOrderByWithRelationInput[]
    cursor?: HourlyRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HourlyRateScalarFieldEnum | HourlyRateScalarFieldEnum[]
  }

  /**
   * EmployeeCompensation without action
   */
  export type EmployeeCompensationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCompensation
     */
    select?: EmployeeCompensationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeCompensation
     */
    omit?: EmployeeCompensationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeCompensationInclude<ExtArgs> | null
  }


  /**
   * Model HourlyRate
   */

  export type AggregateHourlyRate = {
    _count: HourlyRateCountAggregateOutputType | null
    _avg: HourlyRateAvgAggregateOutputType | null
    _sum: HourlyRateSumAggregateOutputType | null
    _min: HourlyRateMinAggregateOutputType | null
    _max: HourlyRateMaxAggregateOutputType | null
  }

  export type HourlyRateAvgAggregateOutputType = {
    rate: Decimal | null
  }

  export type HourlyRateSumAggregateOutputType = {
    rate: Decimal | null
  }

  export type HourlyRateMinAggregateOutputType = {
    uuid: string | null
    name: string | null
    rate: Decimal | null
    canOvertime: boolean | null
    compensationId: string | null
  }

  export type HourlyRateMaxAggregateOutputType = {
    uuid: string | null
    name: string | null
    rate: Decimal | null
    canOvertime: boolean | null
    compensationId: string | null
  }

  export type HourlyRateCountAggregateOutputType = {
    uuid: number
    name: number
    rate: number
    canOvertime: number
    compensationId: number
    _all: number
  }


  export type HourlyRateAvgAggregateInputType = {
    rate?: true
  }

  export type HourlyRateSumAggregateInputType = {
    rate?: true
  }

  export type HourlyRateMinAggregateInputType = {
    uuid?: true
    name?: true
    rate?: true
    canOvertime?: true
    compensationId?: true
  }

  export type HourlyRateMaxAggregateInputType = {
    uuid?: true
    name?: true
    rate?: true
    canOvertime?: true
    compensationId?: true
  }

  export type HourlyRateCountAggregateInputType = {
    uuid?: true
    name?: true
    rate?: true
    canOvertime?: true
    compensationId?: true
    _all?: true
  }

  export type HourlyRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HourlyRate to aggregate.
     */
    where?: HourlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyRates to fetch.
     */
    orderBy?: HourlyRateOrderByWithRelationInput | HourlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HourlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HourlyRates
    **/
    _count?: true | HourlyRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HourlyRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HourlyRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HourlyRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HourlyRateMaxAggregateInputType
  }

  export type GetHourlyRateAggregateType<T extends HourlyRateAggregateArgs> = {
        [P in keyof T & keyof AggregateHourlyRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHourlyRate[P]>
      : GetScalarType<T[P], AggregateHourlyRate[P]>
  }




  export type HourlyRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HourlyRateWhereInput
    orderBy?: HourlyRateOrderByWithAggregationInput | HourlyRateOrderByWithAggregationInput[]
    by: HourlyRateScalarFieldEnum[] | HourlyRateScalarFieldEnum
    having?: HourlyRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HourlyRateCountAggregateInputType | true
    _avg?: HourlyRateAvgAggregateInputType
    _sum?: HourlyRateSumAggregateInputType
    _min?: HourlyRateMinAggregateInputType
    _max?: HourlyRateMaxAggregateInputType
  }

  export type HourlyRateGroupByOutputType = {
    uuid: string
    name: string
    rate: Decimal
    canOvertime: boolean
    compensationId: string
    _count: HourlyRateCountAggregateOutputType | null
    _avg: HourlyRateAvgAggregateOutputType | null
    _sum: HourlyRateSumAggregateOutputType | null
    _min: HourlyRateMinAggregateOutputType | null
    _max: HourlyRateMaxAggregateOutputType | null
  }

  type GetHourlyRateGroupByPayload<T extends HourlyRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HourlyRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HourlyRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HourlyRateGroupByOutputType[P]>
            : GetScalarType<T[P], HourlyRateGroupByOutputType[P]>
        }
      >
    >


  export type HourlyRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    rate?: boolean
    canOvertime?: boolean
    compensationId?: boolean
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hourlyRate"]>

  export type HourlyRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    rate?: boolean
    canOvertime?: boolean
    compensationId?: boolean
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hourlyRate"]>

  export type HourlyRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    name?: boolean
    rate?: boolean
    canOvertime?: boolean
    compensationId?: boolean
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hourlyRate"]>

  export type HourlyRateSelectScalar = {
    uuid?: boolean
    name?: boolean
    rate?: boolean
    canOvertime?: boolean
    compensationId?: boolean
  }

  export type HourlyRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "name" | "rate" | "canOvertime" | "compensationId", ExtArgs["result"]["hourlyRate"]>
  export type HourlyRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }
  export type HourlyRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }
  export type HourlyRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensation?: boolean | EmployeeCompensationDefaultArgs<ExtArgs>
  }

  export type $HourlyRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HourlyRate"
    objects: {
      compensation: Prisma.$EmployeeCompensationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      name: string
      rate: Prisma.Decimal
      canOvertime: boolean
      compensationId: string
    }, ExtArgs["result"]["hourlyRate"]>
    composites: {}
  }

  type HourlyRateGetPayload<S extends boolean | null | undefined | HourlyRateDefaultArgs> = $Result.GetResult<Prisma.$HourlyRatePayload, S>

  type HourlyRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HourlyRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HourlyRateCountAggregateInputType | true
    }

  export interface HourlyRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HourlyRate'], meta: { name: 'HourlyRate' } }
    /**
     * Find zero or one HourlyRate that matches the filter.
     * @param {HourlyRateFindUniqueArgs} args - Arguments to find a HourlyRate
     * @example
     * // Get one HourlyRate
     * const hourlyRate = await prisma.hourlyRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HourlyRateFindUniqueArgs>(args: SelectSubset<T, HourlyRateFindUniqueArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HourlyRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HourlyRateFindUniqueOrThrowArgs} args - Arguments to find a HourlyRate
     * @example
     * // Get one HourlyRate
     * const hourlyRate = await prisma.hourlyRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HourlyRateFindUniqueOrThrowArgs>(args: SelectSubset<T, HourlyRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HourlyRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateFindFirstArgs} args - Arguments to find a HourlyRate
     * @example
     * // Get one HourlyRate
     * const hourlyRate = await prisma.hourlyRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HourlyRateFindFirstArgs>(args?: SelectSubset<T, HourlyRateFindFirstArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HourlyRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateFindFirstOrThrowArgs} args - Arguments to find a HourlyRate
     * @example
     * // Get one HourlyRate
     * const hourlyRate = await prisma.hourlyRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HourlyRateFindFirstOrThrowArgs>(args?: SelectSubset<T, HourlyRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HourlyRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HourlyRates
     * const hourlyRates = await prisma.hourlyRate.findMany()
     * 
     * // Get first 10 HourlyRates
     * const hourlyRates = await prisma.hourlyRate.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const hourlyRateWithUuidOnly = await prisma.hourlyRate.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends HourlyRateFindManyArgs>(args?: SelectSubset<T, HourlyRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HourlyRate.
     * @param {HourlyRateCreateArgs} args - Arguments to create a HourlyRate.
     * @example
     * // Create one HourlyRate
     * const HourlyRate = await prisma.hourlyRate.create({
     *   data: {
     *     // ... data to create a HourlyRate
     *   }
     * })
     * 
     */
    create<T extends HourlyRateCreateArgs>(args: SelectSubset<T, HourlyRateCreateArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HourlyRates.
     * @param {HourlyRateCreateManyArgs} args - Arguments to create many HourlyRates.
     * @example
     * // Create many HourlyRates
     * const hourlyRate = await prisma.hourlyRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HourlyRateCreateManyArgs>(args?: SelectSubset<T, HourlyRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HourlyRates and returns the data saved in the database.
     * @param {HourlyRateCreateManyAndReturnArgs} args - Arguments to create many HourlyRates.
     * @example
     * // Create many HourlyRates
     * const hourlyRate = await prisma.hourlyRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HourlyRates and only return the `uuid`
     * const hourlyRateWithUuidOnly = await prisma.hourlyRate.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HourlyRateCreateManyAndReturnArgs>(args?: SelectSubset<T, HourlyRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HourlyRate.
     * @param {HourlyRateDeleteArgs} args - Arguments to delete one HourlyRate.
     * @example
     * // Delete one HourlyRate
     * const HourlyRate = await prisma.hourlyRate.delete({
     *   where: {
     *     // ... filter to delete one HourlyRate
     *   }
     * })
     * 
     */
    delete<T extends HourlyRateDeleteArgs>(args: SelectSubset<T, HourlyRateDeleteArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HourlyRate.
     * @param {HourlyRateUpdateArgs} args - Arguments to update one HourlyRate.
     * @example
     * // Update one HourlyRate
     * const hourlyRate = await prisma.hourlyRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HourlyRateUpdateArgs>(args: SelectSubset<T, HourlyRateUpdateArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HourlyRates.
     * @param {HourlyRateDeleteManyArgs} args - Arguments to filter HourlyRates to delete.
     * @example
     * // Delete a few HourlyRates
     * const { count } = await prisma.hourlyRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HourlyRateDeleteManyArgs>(args?: SelectSubset<T, HourlyRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HourlyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HourlyRates
     * const hourlyRate = await prisma.hourlyRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HourlyRateUpdateManyArgs>(args: SelectSubset<T, HourlyRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HourlyRates and returns the data updated in the database.
     * @param {HourlyRateUpdateManyAndReturnArgs} args - Arguments to update many HourlyRates.
     * @example
     * // Update many HourlyRates
     * const hourlyRate = await prisma.hourlyRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HourlyRates and only return the `uuid`
     * const hourlyRateWithUuidOnly = await prisma.hourlyRate.updateManyAndReturn({
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
    updateManyAndReturn<T extends HourlyRateUpdateManyAndReturnArgs>(args: SelectSubset<T, HourlyRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HourlyRate.
     * @param {HourlyRateUpsertArgs} args - Arguments to update or create a HourlyRate.
     * @example
     * // Update or create a HourlyRate
     * const hourlyRate = await prisma.hourlyRate.upsert({
     *   create: {
     *     // ... data to create a HourlyRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HourlyRate we want to update
     *   }
     * })
     */
    upsert<T extends HourlyRateUpsertArgs>(args: SelectSubset<T, HourlyRateUpsertArgs<ExtArgs>>): Prisma__HourlyRateClient<$Result.GetResult<Prisma.$HourlyRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HourlyRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateCountArgs} args - Arguments to filter HourlyRates to count.
     * @example
     * // Count the number of HourlyRates
     * const count = await prisma.hourlyRate.count({
     *   where: {
     *     // ... the filter for the HourlyRates we want to count
     *   }
     * })
    **/
    count<T extends HourlyRateCountArgs>(
      args?: Subset<T, HourlyRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HourlyRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HourlyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HourlyRateAggregateArgs>(args: Subset<T, HourlyRateAggregateArgs>): Prisma.PrismaPromise<GetHourlyRateAggregateType<T>>

    /**
     * Group by HourlyRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HourlyRateGroupByArgs} args - Group by arguments.
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
      T extends HourlyRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HourlyRateGroupByArgs['orderBy'] }
        : { orderBy?: HourlyRateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HourlyRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHourlyRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HourlyRate model
   */
  readonly fields: HourlyRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HourlyRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HourlyRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compensation<T extends EmployeeCompensationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeCompensationDefaultArgs<ExtArgs>>): Prisma__EmployeeCompensationClient<$Result.GetResult<Prisma.$EmployeeCompensationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HourlyRate model
   */
  interface HourlyRateFieldRefs {
    readonly uuid: FieldRef<"HourlyRate", 'String'>
    readonly name: FieldRef<"HourlyRate", 'String'>
    readonly rate: FieldRef<"HourlyRate", 'Decimal'>
    readonly canOvertime: FieldRef<"HourlyRate", 'Boolean'>
    readonly compensationId: FieldRef<"HourlyRate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HourlyRate findUnique
   */
  export type HourlyRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter, which HourlyRate to fetch.
     */
    where: HourlyRateWhereUniqueInput
  }

  /**
   * HourlyRate findUniqueOrThrow
   */
  export type HourlyRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter, which HourlyRate to fetch.
     */
    where: HourlyRateWhereUniqueInput
  }

  /**
   * HourlyRate findFirst
   */
  export type HourlyRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter, which HourlyRate to fetch.
     */
    where?: HourlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyRates to fetch.
     */
    orderBy?: HourlyRateOrderByWithRelationInput | HourlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HourlyRates.
     */
    cursor?: HourlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HourlyRates.
     */
    distinct?: HourlyRateScalarFieldEnum | HourlyRateScalarFieldEnum[]
  }

  /**
   * HourlyRate findFirstOrThrow
   */
  export type HourlyRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter, which HourlyRate to fetch.
     */
    where?: HourlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyRates to fetch.
     */
    orderBy?: HourlyRateOrderByWithRelationInput | HourlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HourlyRates.
     */
    cursor?: HourlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HourlyRates.
     */
    distinct?: HourlyRateScalarFieldEnum | HourlyRateScalarFieldEnum[]
  }

  /**
   * HourlyRate findMany
   */
  export type HourlyRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter, which HourlyRates to fetch.
     */
    where?: HourlyRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HourlyRates to fetch.
     */
    orderBy?: HourlyRateOrderByWithRelationInput | HourlyRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HourlyRates.
     */
    cursor?: HourlyRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HourlyRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HourlyRates.
     */
    skip?: number
    distinct?: HourlyRateScalarFieldEnum | HourlyRateScalarFieldEnum[]
  }

  /**
   * HourlyRate create
   */
  export type HourlyRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * The data needed to create a HourlyRate.
     */
    data: XOR<HourlyRateCreateInput, HourlyRateUncheckedCreateInput>
  }

  /**
   * HourlyRate createMany
   */
  export type HourlyRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HourlyRates.
     */
    data: HourlyRateCreateManyInput | HourlyRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HourlyRate createManyAndReturn
   */
  export type HourlyRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * The data used to create many HourlyRates.
     */
    data: HourlyRateCreateManyInput | HourlyRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HourlyRate update
   */
  export type HourlyRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * The data needed to update a HourlyRate.
     */
    data: XOR<HourlyRateUpdateInput, HourlyRateUncheckedUpdateInput>
    /**
     * Choose, which HourlyRate to update.
     */
    where: HourlyRateWhereUniqueInput
  }

  /**
   * HourlyRate updateMany
   */
  export type HourlyRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HourlyRates.
     */
    data: XOR<HourlyRateUpdateManyMutationInput, HourlyRateUncheckedUpdateManyInput>
    /**
     * Filter which HourlyRates to update
     */
    where?: HourlyRateWhereInput
    /**
     * Limit how many HourlyRates to update.
     */
    limit?: number
  }

  /**
   * HourlyRate updateManyAndReturn
   */
  export type HourlyRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * The data used to update HourlyRates.
     */
    data: XOR<HourlyRateUpdateManyMutationInput, HourlyRateUncheckedUpdateManyInput>
    /**
     * Filter which HourlyRates to update
     */
    where?: HourlyRateWhereInput
    /**
     * Limit how many HourlyRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HourlyRate upsert
   */
  export type HourlyRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * The filter to search for the HourlyRate to update in case it exists.
     */
    where: HourlyRateWhereUniqueInput
    /**
     * In case the HourlyRate found by the `where` argument doesn't exist, create a new HourlyRate with this data.
     */
    create: XOR<HourlyRateCreateInput, HourlyRateUncheckedCreateInput>
    /**
     * In case the HourlyRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HourlyRateUpdateInput, HourlyRateUncheckedUpdateInput>
  }

  /**
   * HourlyRate delete
   */
  export type HourlyRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
    /**
     * Filter which HourlyRate to delete.
     */
    where: HourlyRateWhereUniqueInput
  }

  /**
   * HourlyRate deleteMany
   */
  export type HourlyRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HourlyRates to delete
     */
    where?: HourlyRateWhereInput
    /**
     * Limit how many HourlyRates to delete.
     */
    limit?: number
  }

  /**
   * HourlyRate without action
   */
  export type HourlyRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HourlyRate
     */
    select?: HourlyRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HourlyRate
     */
    omit?: HourlyRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HourlyRateInclude<ExtArgs> | null
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
    grossEarnings: Decimal | null
    totalDeductions: Decimal | null
    netPay: Decimal | null
  }

  export type PayStubSumAggregateOutputType = {
    grossEarnings: Decimal | null
    totalDeductions: Decimal | null
    netPay: Decimal | null
  }

  export type PayStubMinAggregateOutputType = {
    uuid: string | null
    payDate: Date | null
    periodStart: Date | null
    periodEnd: Date | null
    locked: boolean | null
    grossEarnings: Decimal | null
    totalDeductions: Decimal | null
    netPay: Decimal | null
    employeeId: string | null
  }

  export type PayStubMaxAggregateOutputType = {
    uuid: string | null
    payDate: Date | null
    periodStart: Date | null
    periodEnd: Date | null
    locked: boolean | null
    grossEarnings: Decimal | null
    totalDeductions: Decimal | null
    netPay: Decimal | null
    employeeId: string | null
  }

  export type PayStubCountAggregateOutputType = {
    uuid: number
    payDate: number
    periodStart: number
    periodEnd: number
    locked: number
    grossEarnings: number
    totalDeductions: number
    netPay: number
    employeeId: number
    _all: number
  }


  export type PayStubAvgAggregateInputType = {
    grossEarnings?: true
    totalDeductions?: true
    netPay?: true
  }

  export type PayStubSumAggregateInputType = {
    grossEarnings?: true
    totalDeductions?: true
    netPay?: true
  }

  export type PayStubMinAggregateInputType = {
    uuid?: true
    payDate?: true
    periodStart?: true
    periodEnd?: true
    locked?: true
    grossEarnings?: true
    totalDeductions?: true
    netPay?: true
    employeeId?: true
  }

  export type PayStubMaxAggregateInputType = {
    uuid?: true
    payDate?: true
    periodStart?: true
    periodEnd?: true
    locked?: true
    grossEarnings?: true
    totalDeductions?: true
    netPay?: true
    employeeId?: true
  }

  export type PayStubCountAggregateInputType = {
    uuid?: true
    payDate?: true
    periodStart?: true
    periodEnd?: true
    locked?: true
    grossEarnings?: true
    totalDeductions?: true
    netPay?: true
    employeeId?: true
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
    payDate: Date
    periodStart: Date
    periodEnd: Date
    locked: boolean
    grossEarnings: Decimal
    totalDeductions: Decimal
    netPay: Decimal
    employeeId: string
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
    payDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    locked?: boolean
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | PayStub$itemsArgs<ExtArgs>
    _count?: boolean | PayStubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    locked?: boolean
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    locked?: boolean
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectScalar = {
    uuid?: boolean
    payDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    locked?: boolean
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
  }

  export type PayStubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "payDate" | "periodStart" | "periodEnd" | "locked" | "grossEarnings" | "totalDeductions" | "netPay" | "employeeId", ExtArgs["result"]["payStub"]>
  export type PayStubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    items?: boolean | PayStub$itemsArgs<ExtArgs>
    _count?: boolean | PayStubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayStubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type PayStubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $PayStubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayStub"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      items: Prisma.$PayStubItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      payDate: Date
      periodStart: Date
      periodEnd: Date
      locked: boolean
      grossEarnings: Prisma.Decimal
      totalDeductions: Prisma.Decimal
      netPay: Prisma.Decimal
      employeeId: string
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
    items<T extends PayStub$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PayStub$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly payDate: FieldRef<"PayStub", 'DateTime'>
    readonly periodStart: FieldRef<"PayStub", 'DateTime'>
    readonly periodEnd: FieldRef<"PayStub", 'DateTime'>
    readonly locked: FieldRef<"PayStub", 'Boolean'>
    readonly grossEarnings: FieldRef<"PayStub", 'Decimal'>
    readonly totalDeductions: FieldRef<"PayStub", 'Decimal'>
    readonly netPay: FieldRef<"PayStub", 'Decimal'>
    readonly employeeId: FieldRef<"PayStub", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * PayStub.items
   */
  export type PayStub$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    where?: PayStubItemWhereInput
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    cursor?: PayStubItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubItemScalarFieldEnum | PayStubItemScalarFieldEnum[]
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
   * Model PayStubItem
   */

  export type AggregatePayStubItem = {
    _count: PayStubItemCountAggregateOutputType | null
    _avg: PayStubItemAvgAggregateOutputType | null
    _sum: PayStubItemSumAggregateOutputType | null
    _min: PayStubItemMinAggregateOutputType | null
    _max: PayStubItemMaxAggregateOutputType | null
  }

  export type PayStubItemAvgAggregateOutputType = {
    hours: Decimal | null
    rate: Decimal | null
    percent: Decimal | null
    amount: Decimal | null
  }

  export type PayStubItemSumAggregateOutputType = {
    hours: Decimal | null
    rate: Decimal | null
    percent: Decimal | null
    amount: Decimal | null
  }

  export type PayStubItemMinAggregateOutputType = {
    uuid: string | null
    payStubId: string | null
    payrollItemId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    hours: Decimal | null
    rate: Decimal | null
    percent: Decimal | null
    amount: Decimal | null
  }

  export type PayStubItemMaxAggregateOutputType = {
    uuid: string | null
    payStubId: string | null
    payrollItemId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    hours: Decimal | null
    rate: Decimal | null
    percent: Decimal | null
    amount: Decimal | null
  }

  export type PayStubItemCountAggregateOutputType = {
    uuid: number
    payStubId: number
    payrollItemId: number
    type: number
    name: number
    description: number
    hours: number
    rate: number
    percent: number
    amount: number
    _all: number
  }


  export type PayStubItemAvgAggregateInputType = {
    hours?: true
    rate?: true
    percent?: true
    amount?: true
  }

  export type PayStubItemSumAggregateInputType = {
    hours?: true
    rate?: true
    percent?: true
    amount?: true
  }

  export type PayStubItemMinAggregateInputType = {
    uuid?: true
    payStubId?: true
    payrollItemId?: true
    type?: true
    name?: true
    description?: true
    hours?: true
    rate?: true
    percent?: true
    amount?: true
  }

  export type PayStubItemMaxAggregateInputType = {
    uuid?: true
    payStubId?: true
    payrollItemId?: true
    type?: true
    name?: true
    description?: true
    hours?: true
    rate?: true
    percent?: true
    amount?: true
  }

  export type PayStubItemCountAggregateInputType = {
    uuid?: true
    payStubId?: true
    payrollItemId?: true
    type?: true
    name?: true
    description?: true
    hours?: true
    rate?: true
    percent?: true
    amount?: true
    _all?: true
  }

  export type PayStubItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubItem to aggregate.
     */
    where?: PayStubItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubItems to fetch.
     */
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayStubItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayStubItems
    **/
    _count?: true | PayStubItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayStubItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayStubItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayStubItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayStubItemMaxAggregateInputType
  }

  export type GetPayStubItemAggregateType<T extends PayStubItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePayStubItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayStubItem[P]>
      : GetScalarType<T[P], AggregatePayStubItem[P]>
  }




  export type PayStubItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubItemWhereInput
    orderBy?: PayStubItemOrderByWithAggregationInput | PayStubItemOrderByWithAggregationInput[]
    by: PayStubItemScalarFieldEnum[] | PayStubItemScalarFieldEnum
    having?: PayStubItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayStubItemCountAggregateInputType | true
    _avg?: PayStubItemAvgAggregateInputType
    _sum?: PayStubItemSumAggregateInputType
    _min?: PayStubItemMinAggregateInputType
    _max?: PayStubItemMaxAggregateInputType
  }

  export type PayStubItemGroupByOutputType = {
    uuid: string
    payStubId: string
    payrollItemId: string | null
    type: $Enums.PayStubItemType
    name: string
    description: string | null
    hours: Decimal | null
    rate: Decimal | null
    percent: Decimal | null
    amount: Decimal
    _count: PayStubItemCountAggregateOutputType | null
    _avg: PayStubItemAvgAggregateOutputType | null
    _sum: PayStubItemSumAggregateOutputType | null
    _min: PayStubItemMinAggregateOutputType | null
    _max: PayStubItemMaxAggregateOutputType | null
  }

  type GetPayStubItemGroupByPayload<T extends PayStubItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayStubItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayStubItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayStubItemGroupByOutputType[P]>
            : GetScalarType<T[P], PayStubItemGroupByOutputType[P]>
        }
      >
    >


  export type PayStubItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payStubId?: boolean
    payrollItemId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    hours?: boolean
    rate?: boolean
    percent?: boolean
    amount?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }, ExtArgs["result"]["payStubItem"]>

  export type PayStubItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payStubId?: boolean
    payrollItemId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    hours?: boolean
    rate?: boolean
    percent?: boolean
    amount?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }, ExtArgs["result"]["payStubItem"]>

  export type PayStubItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payStubId?: boolean
    payrollItemId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    hours?: boolean
    rate?: boolean
    percent?: boolean
    amount?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }, ExtArgs["result"]["payStubItem"]>

  export type PayStubItemSelectScalar = {
    uuid?: boolean
    payStubId?: boolean
    payrollItemId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    hours?: boolean
    rate?: boolean
    percent?: boolean
    amount?: boolean
  }

  export type PayStubItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "payStubId" | "payrollItemId" | "type" | "name" | "description" | "hours" | "rate" | "percent" | "amount", ExtArgs["result"]["payStubItem"]>
  export type PayStubItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }
  export type PayStubItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }
  export type PayStubItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    payrollItem?: boolean | PayStubItem$payrollItemArgs<ExtArgs>
  }

  export type $PayStubItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayStubItem"
    objects: {
      payStub: Prisma.$PayStubPayload<ExtArgs>
      payrollItem: Prisma.$PayrollItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      payStubId: string
      payrollItemId: string | null
      type: $Enums.PayStubItemType
      name: string
      description: string | null
      hours: Prisma.Decimal | null
      rate: Prisma.Decimal | null
      percent: Prisma.Decimal | null
      amount: Prisma.Decimal
    }, ExtArgs["result"]["payStubItem"]>
    composites: {}
  }

  type PayStubItemGetPayload<S extends boolean | null | undefined | PayStubItemDefaultArgs> = $Result.GetResult<Prisma.$PayStubItemPayload, S>

  type PayStubItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayStubItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayStubItemCountAggregateInputType | true
    }

  export interface PayStubItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayStubItem'], meta: { name: 'PayStubItem' } }
    /**
     * Find zero or one PayStubItem that matches the filter.
     * @param {PayStubItemFindUniqueArgs} args - Arguments to find a PayStubItem
     * @example
     * // Get one PayStubItem
     * const payStubItem = await prisma.payStubItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayStubItemFindUniqueArgs>(args: SelectSubset<T, PayStubItemFindUniqueArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayStubItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayStubItemFindUniqueOrThrowArgs} args - Arguments to find a PayStubItem
     * @example
     * // Get one PayStubItem
     * const payStubItem = await prisma.payStubItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayStubItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PayStubItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemFindFirstArgs} args - Arguments to find a PayStubItem
     * @example
     * // Get one PayStubItem
     * const payStubItem = await prisma.payStubItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayStubItemFindFirstArgs>(args?: SelectSubset<T, PayStubItemFindFirstArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemFindFirstOrThrowArgs} args - Arguments to find a PayStubItem
     * @example
     * // Get one PayStubItem
     * const payStubItem = await prisma.payStubItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayStubItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PayStubItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayStubItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayStubItems
     * const payStubItems = await prisma.payStubItem.findMany()
     * 
     * // Get first 10 PayStubItems
     * const payStubItems = await prisma.payStubItem.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const payStubItemWithUuidOnly = await prisma.payStubItem.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends PayStubItemFindManyArgs>(args?: SelectSubset<T, PayStubItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayStubItem.
     * @param {PayStubItemCreateArgs} args - Arguments to create a PayStubItem.
     * @example
     * // Create one PayStubItem
     * const PayStubItem = await prisma.payStubItem.create({
     *   data: {
     *     // ... data to create a PayStubItem
     *   }
     * })
     * 
     */
    create<T extends PayStubItemCreateArgs>(args: SelectSubset<T, PayStubItemCreateArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayStubItems.
     * @param {PayStubItemCreateManyArgs} args - Arguments to create many PayStubItems.
     * @example
     * // Create many PayStubItems
     * const payStubItem = await prisma.payStubItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayStubItemCreateManyArgs>(args?: SelectSubset<T, PayStubItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayStubItems and returns the data saved in the database.
     * @param {PayStubItemCreateManyAndReturnArgs} args - Arguments to create many PayStubItems.
     * @example
     * // Create many PayStubItems
     * const payStubItem = await prisma.payStubItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayStubItems and only return the `uuid`
     * const payStubItemWithUuidOnly = await prisma.payStubItem.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayStubItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PayStubItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayStubItem.
     * @param {PayStubItemDeleteArgs} args - Arguments to delete one PayStubItem.
     * @example
     * // Delete one PayStubItem
     * const PayStubItem = await prisma.payStubItem.delete({
     *   where: {
     *     // ... filter to delete one PayStubItem
     *   }
     * })
     * 
     */
    delete<T extends PayStubItemDeleteArgs>(args: SelectSubset<T, PayStubItemDeleteArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayStubItem.
     * @param {PayStubItemUpdateArgs} args - Arguments to update one PayStubItem.
     * @example
     * // Update one PayStubItem
     * const payStubItem = await prisma.payStubItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayStubItemUpdateArgs>(args: SelectSubset<T, PayStubItemUpdateArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayStubItems.
     * @param {PayStubItemDeleteManyArgs} args - Arguments to filter PayStubItems to delete.
     * @example
     * // Delete a few PayStubItems
     * const { count } = await prisma.payStubItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayStubItemDeleteManyArgs>(args?: SelectSubset<T, PayStubItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayStubItems
     * const payStubItem = await prisma.payStubItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayStubItemUpdateManyArgs>(args: SelectSubset<T, PayStubItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubItems and returns the data updated in the database.
     * @param {PayStubItemUpdateManyAndReturnArgs} args - Arguments to update many PayStubItems.
     * @example
     * // Update many PayStubItems
     * const payStubItem = await prisma.payStubItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayStubItems and only return the `uuid`
     * const payStubItemWithUuidOnly = await prisma.payStubItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayStubItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PayStubItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayStubItem.
     * @param {PayStubItemUpsertArgs} args - Arguments to update or create a PayStubItem.
     * @example
     * // Update or create a PayStubItem
     * const payStubItem = await prisma.payStubItem.upsert({
     *   create: {
     *     // ... data to create a PayStubItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayStubItem we want to update
     *   }
     * })
     */
    upsert<T extends PayStubItemUpsertArgs>(args: SelectSubset<T, PayStubItemUpsertArgs<ExtArgs>>): Prisma__PayStubItemClient<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayStubItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemCountArgs} args - Arguments to filter PayStubItems to count.
     * @example
     * // Count the number of PayStubItems
     * const count = await prisma.payStubItem.count({
     *   where: {
     *     // ... the filter for the PayStubItems we want to count
     *   }
     * })
    **/
    count<T extends PayStubItemCountArgs>(
      args?: Subset<T, PayStubItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayStubItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayStubItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayStubItemAggregateArgs>(args: Subset<T, PayStubItemAggregateArgs>): Prisma.PrismaPromise<GetPayStubItemAggregateType<T>>

    /**
     * Group by PayStubItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubItemGroupByArgs} args - Group by arguments.
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
      T extends PayStubItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayStubItemGroupByArgs['orderBy'] }
        : { orderBy?: PayStubItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayStubItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayStubItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayStubItem model
   */
  readonly fields: PayStubItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayStubItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayStubItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payStub<T extends PayStubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayStubDefaultArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payrollItem<T extends PayStubItem$payrollItemArgs<ExtArgs> = {}>(args?: Subset<T, PayStubItem$payrollItemArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayStubItem model
   */
  interface PayStubItemFieldRefs {
    readonly uuid: FieldRef<"PayStubItem", 'String'>
    readonly payStubId: FieldRef<"PayStubItem", 'String'>
    readonly payrollItemId: FieldRef<"PayStubItem", 'String'>
    readonly type: FieldRef<"PayStubItem", 'PayStubItemType'>
    readonly name: FieldRef<"PayStubItem", 'String'>
    readonly description: FieldRef<"PayStubItem", 'String'>
    readonly hours: FieldRef<"PayStubItem", 'Decimal'>
    readonly rate: FieldRef<"PayStubItem", 'Decimal'>
    readonly percent: FieldRef<"PayStubItem", 'Decimal'>
    readonly amount: FieldRef<"PayStubItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PayStubItem findUnique
   */
  export type PayStubItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter, which PayStubItem to fetch.
     */
    where: PayStubItemWhereUniqueInput
  }

  /**
   * PayStubItem findUniqueOrThrow
   */
  export type PayStubItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter, which PayStubItem to fetch.
     */
    where: PayStubItemWhereUniqueInput
  }

  /**
   * PayStubItem findFirst
   */
  export type PayStubItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter, which PayStubItem to fetch.
     */
    where?: PayStubItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubItems to fetch.
     */
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubItems.
     */
    cursor?: PayStubItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubItems.
     */
    distinct?: PayStubItemScalarFieldEnum | PayStubItemScalarFieldEnum[]
  }

  /**
   * PayStubItem findFirstOrThrow
   */
  export type PayStubItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter, which PayStubItem to fetch.
     */
    where?: PayStubItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubItems to fetch.
     */
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubItems.
     */
    cursor?: PayStubItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubItems.
     */
    distinct?: PayStubItemScalarFieldEnum | PayStubItemScalarFieldEnum[]
  }

  /**
   * PayStubItem findMany
   */
  export type PayStubItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter, which PayStubItems to fetch.
     */
    where?: PayStubItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubItems to fetch.
     */
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayStubItems.
     */
    cursor?: PayStubItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubItems.
     */
    skip?: number
    distinct?: PayStubItemScalarFieldEnum | PayStubItemScalarFieldEnum[]
  }

  /**
   * PayStubItem create
   */
  export type PayStubItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PayStubItem.
     */
    data: XOR<PayStubItemCreateInput, PayStubItemUncheckedCreateInput>
  }

  /**
   * PayStubItem createMany
   */
  export type PayStubItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayStubItems.
     */
    data: PayStubItemCreateManyInput | PayStubItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayStubItem createManyAndReturn
   */
  export type PayStubItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * The data used to create many PayStubItems.
     */
    data: PayStubItemCreateManyInput | PayStubItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubItem update
   */
  export type PayStubItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PayStubItem.
     */
    data: XOR<PayStubItemUpdateInput, PayStubItemUncheckedUpdateInput>
    /**
     * Choose, which PayStubItem to update.
     */
    where: PayStubItemWhereUniqueInput
  }

  /**
   * PayStubItem updateMany
   */
  export type PayStubItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayStubItems.
     */
    data: XOR<PayStubItemUpdateManyMutationInput, PayStubItemUncheckedUpdateManyInput>
    /**
     * Filter which PayStubItems to update
     */
    where?: PayStubItemWhereInput
    /**
     * Limit how many PayStubItems to update.
     */
    limit?: number
  }

  /**
   * PayStubItem updateManyAndReturn
   */
  export type PayStubItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * The data used to update PayStubItems.
     */
    data: XOR<PayStubItemUpdateManyMutationInput, PayStubItemUncheckedUpdateManyInput>
    /**
     * Filter which PayStubItems to update
     */
    where?: PayStubItemWhereInput
    /**
     * Limit how many PayStubItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubItem upsert
   */
  export type PayStubItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PayStubItem to update in case it exists.
     */
    where: PayStubItemWhereUniqueInput
    /**
     * In case the PayStubItem found by the `where` argument doesn't exist, create a new PayStubItem with this data.
     */
    create: XOR<PayStubItemCreateInput, PayStubItemUncheckedCreateInput>
    /**
     * In case the PayStubItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayStubItemUpdateInput, PayStubItemUncheckedUpdateInput>
  }

  /**
   * PayStubItem delete
   */
  export type PayStubItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    /**
     * Filter which PayStubItem to delete.
     */
    where: PayStubItemWhereUniqueInput
  }

  /**
   * PayStubItem deleteMany
   */
  export type PayStubItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubItems to delete
     */
    where?: PayStubItemWhereInput
    /**
     * Limit how many PayStubItems to delete.
     */
    limit?: number
  }

  /**
   * PayStubItem.payrollItem
   */
  export type PayStubItem$payrollItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    where?: PayrollItemWhereInput
  }

  /**
   * PayStubItem without action
   */
  export type PayStubItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
  }


  /**
   * Model PayrollItem
   */

  export type AggregatePayrollItem = {
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  export type PayrollItemAvgAggregateOutputType = {
    percent: Decimal | null
    amount: Decimal | null
    absMax: Decimal | null
  }

  export type PayrollItemSumAggregateOutputType = {
    percent: Decimal | null
    amount: Decimal | null
    absMax: Decimal | null
  }

  export type PayrollItemMinAggregateOutputType = {
    uuid: string | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    percent: Decimal | null
    amount: Decimal | null
    absMaxPeriod: $Enums.AbsMaxPeriodTypes | null
    absMax: Decimal | null
  }

  export type PayrollItemMaxAggregateOutputType = {
    uuid: string | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    percent: Decimal | null
    amount: Decimal | null
    absMaxPeriod: $Enums.AbsMaxPeriodTypes | null
    absMax: Decimal | null
  }

  export type PayrollItemCountAggregateOutputType = {
    uuid: number
    organizationId: number
    payrollGroupId: number
    employeeId: number
    type: number
    name: number
    description: number
    percent: number
    amount: number
    absMaxPeriod: number
    absMax: number
    _all: number
  }


  export type PayrollItemAvgAggregateInputType = {
    percent?: true
    amount?: true
    absMax?: true
  }

  export type PayrollItemSumAggregateInputType = {
    percent?: true
    amount?: true
    absMax?: true
  }

  export type PayrollItemMinAggregateInputType = {
    uuid?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    percent?: true
    amount?: true
    absMaxPeriod?: true
    absMax?: true
  }

  export type PayrollItemMaxAggregateInputType = {
    uuid?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    percent?: true
    amount?: true
    absMaxPeriod?: true
    absMax?: true
  }

  export type PayrollItemCountAggregateInputType = {
    uuid?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    percent?: true
    amount?: true
    absMaxPeriod?: true
    absMax?: true
    _all?: true
  }

  export type PayrollItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItem to aggregate.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollItems
    **/
    _count?: true | PayrollItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollItemMaxAggregateInputType
  }

  export type GetPayrollItemAggregateType<T extends PayrollItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollItem[P]>
      : GetScalarType<T[P], AggregatePayrollItem[P]>
  }




  export type PayrollItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollItemWhereInput
    orderBy?: PayrollItemOrderByWithAggregationInput | PayrollItemOrderByWithAggregationInput[]
    by: PayrollItemScalarFieldEnum[] | PayrollItemScalarFieldEnum
    having?: PayrollItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollItemCountAggregateInputType | true
    _avg?: PayrollItemAvgAggregateInputType
    _sum?: PayrollItemSumAggregateInputType
    _min?: PayrollItemMinAggregateInputType
    _max?: PayrollItemMaxAggregateInputType
  }

  export type PayrollItemGroupByOutputType = {
    uuid: string
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType
    name: string
    description: string | null
    percent: Decimal | null
    amount: Decimal
    absMaxPeriod: $Enums.AbsMaxPeriodTypes
    absMax: Decimal
    _count: PayrollItemCountAggregateOutputType | null
    _avg: PayrollItemAvgAggregateOutputType | null
    _sum: PayrollItemSumAggregateOutputType | null
    _min: PayrollItemMinAggregateOutputType | null
    _max: PayrollItemMaxAggregateOutputType | null
  }

  type GetPayrollItemGroupByPayload<T extends PayrollItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollItemGroupByOutputType[P]>
        }
      >
    >


  export type PayrollItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    percent?: boolean
    amount?: boolean
    absMaxPeriod?: boolean
    absMax?: boolean
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
    PayStubItem?: boolean | PayrollItem$PayStubItemArgs<ExtArgs>
    _count?: boolean | PayrollItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    percent?: boolean
    amount?: boolean
    absMaxPeriod?: boolean
    absMax?: boolean
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    percent?: boolean
    amount?: boolean
    absMaxPeriod?: boolean
    absMax?: boolean
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payrollItem"]>

  export type PayrollItemSelectScalar = {
    uuid?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    percent?: boolean
    amount?: boolean
    absMaxPeriod?: boolean
    absMax?: boolean
  }

  export type PayrollItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "organizationId" | "payrollGroupId" | "employeeId" | "type" | "name" | "description" | "percent" | "amount" | "absMaxPeriod" | "absMax", ExtArgs["result"]["payrollItem"]>
  export type PayrollItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
    PayStubItem?: boolean | PayrollItem$PayStubItemArgs<ExtArgs>
    _count?: boolean | PayrollItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PayrollItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
  }
  export type PayrollItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | PayrollItem$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayrollItem$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayrollItem$employeeArgs<ExtArgs>
  }

  export type $PayrollItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollItem"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      payrollGroup: Prisma.$PayrollGroupPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      PayStubItem: Prisma.$PayStubItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      organizationId: string | null
      payrollGroupId: string | null
      employeeId: string | null
      type: $Enums.PayStubItemType
      name: string
      description: string | null
      percent: Prisma.Decimal | null
      amount: Prisma.Decimal
      absMaxPeriod: $Enums.AbsMaxPeriodTypes
      absMax: Prisma.Decimal
    }, ExtArgs["result"]["payrollItem"]>
    composites: {}
  }

  type PayrollItemGetPayload<S extends boolean | null | undefined | PayrollItemDefaultArgs> = $Result.GetResult<Prisma.$PayrollItemPayload, S>

  type PayrollItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollItemCountAggregateInputType | true
    }

  export interface PayrollItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollItem'], meta: { name: 'PayrollItem' } }
    /**
     * Find zero or one PayrollItem that matches the filter.
     * @param {PayrollItemFindUniqueArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollItemFindUniqueArgs>(args: SelectSubset<T, PayrollItemFindUniqueArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollItemFindUniqueOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollItemFindFirstArgs>(args?: SelectSubset<T, PayrollItemFindFirstArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindFirstOrThrowArgs} args - Arguments to find a PayrollItem
     * @example
     * // Get one PayrollItem
     * const payrollItem = await prisma.payrollItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany()
     * 
     * // Get first 10 PayrollItems
     * const payrollItems = await prisma.payrollItem.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const payrollItemWithUuidOnly = await prisma.payrollItem.findMany({ select: { uuid: true } })
     * 
     */
    findMany<T extends PayrollItemFindManyArgs>(args?: SelectSubset<T, PayrollItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollItem.
     * @param {PayrollItemCreateArgs} args - Arguments to create a PayrollItem.
     * @example
     * // Create one PayrollItem
     * const PayrollItem = await prisma.payrollItem.create({
     *   data: {
     *     // ... data to create a PayrollItem
     *   }
     * })
     * 
     */
    create<T extends PayrollItemCreateArgs>(args: SelectSubset<T, PayrollItemCreateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollItems.
     * @param {PayrollItemCreateManyArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollItemCreateManyArgs>(args?: SelectSubset<T, PayrollItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollItems and returns the data saved in the database.
     * @param {PayrollItemCreateManyAndReturnArgs} args - Arguments to create many PayrollItems.
     * @example
     * // Create many PayrollItems
     * const payrollItem = await prisma.payrollItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollItems and only return the `uuid`
     * const payrollItemWithUuidOnly = await prisma.payrollItem.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollItem.
     * @param {PayrollItemDeleteArgs} args - Arguments to delete one PayrollItem.
     * @example
     * // Delete one PayrollItem
     * const PayrollItem = await prisma.payrollItem.delete({
     *   where: {
     *     // ... filter to delete one PayrollItem
     *   }
     * })
     * 
     */
    delete<T extends PayrollItemDeleteArgs>(args: SelectSubset<T, PayrollItemDeleteArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollItem.
     * @param {PayrollItemUpdateArgs} args - Arguments to update one PayrollItem.
     * @example
     * // Update one PayrollItem
     * const payrollItem = await prisma.payrollItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollItemUpdateArgs>(args: SelectSubset<T, PayrollItemUpdateArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollItems.
     * @param {PayrollItemDeleteManyArgs} args - Arguments to filter PayrollItems to delete.
     * @example
     * // Delete a few PayrollItems
     * const { count } = await prisma.payrollItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollItemDeleteManyArgs>(args?: SelectSubset<T, PayrollItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollItems
     * const payrollItem = await prisma.payrollItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollItemUpdateManyArgs>(args: SelectSubset<T, PayrollItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollItems and returns the data updated in the database.
     * @param {PayrollItemUpdateManyAndReturnArgs} args - Arguments to update many PayrollItems.
     * @example
     * // Update many PayrollItems
     * const payrollItem = await prisma.payrollItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollItems and only return the `uuid`
     * const payrollItemWithUuidOnly = await prisma.payrollItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollItem.
     * @param {PayrollItemUpsertArgs} args - Arguments to update or create a PayrollItem.
     * @example
     * // Update or create a PayrollItem
     * const payrollItem = await prisma.payrollItem.upsert({
     *   create: {
     *     // ... data to create a PayrollItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollItem we want to update
     *   }
     * })
     */
    upsert<T extends PayrollItemUpsertArgs>(args: SelectSubset<T, PayrollItemUpsertArgs<ExtArgs>>): Prisma__PayrollItemClient<$Result.GetResult<Prisma.$PayrollItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemCountArgs} args - Arguments to filter PayrollItems to count.
     * @example
     * // Count the number of PayrollItems
     * const count = await prisma.payrollItem.count({
     *   where: {
     *     // ... the filter for the PayrollItems we want to count
     *   }
     * })
    **/
    count<T extends PayrollItemCountArgs>(
      args?: Subset<T, PayrollItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollItemAggregateArgs>(args: Subset<T, PayrollItemAggregateArgs>): Prisma.PrismaPromise<GetPayrollItemAggregateType<T>>

    /**
     * Group by PayrollItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollItemGroupByArgs} args - Group by arguments.
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
      T extends PayrollItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollItemGroupByArgs['orderBy'] }
        : { orderBy?: PayrollItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollItem model
   */
  readonly fields: PayrollItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends PayrollItem$organizationArgs<ExtArgs> = {}>(args?: Subset<T, PayrollItem$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payrollGroup<T extends PayrollItem$payrollGroupArgs<ExtArgs> = {}>(args?: Subset<T, PayrollItem$payrollGroupArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends PayrollItem$employeeArgs<ExtArgs> = {}>(args?: Subset<T, PayrollItem$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PayStubItem<T extends PayrollItem$PayStubItemArgs<ExtArgs> = {}>(args?: Subset<T, PayrollItem$PayStubItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PayrollItem model
   */
  interface PayrollItemFieldRefs {
    readonly uuid: FieldRef<"PayrollItem", 'String'>
    readonly organizationId: FieldRef<"PayrollItem", 'String'>
    readonly payrollGroupId: FieldRef<"PayrollItem", 'String'>
    readonly employeeId: FieldRef<"PayrollItem", 'String'>
    readonly type: FieldRef<"PayrollItem", 'PayStubItemType'>
    readonly name: FieldRef<"PayrollItem", 'String'>
    readonly description: FieldRef<"PayrollItem", 'String'>
    readonly percent: FieldRef<"PayrollItem", 'Decimal'>
    readonly amount: FieldRef<"PayrollItem", 'Decimal'>
    readonly absMaxPeriod: FieldRef<"PayrollItem", 'AbsMaxPeriodTypes'>
    readonly absMax: FieldRef<"PayrollItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PayrollItem findUnique
   */
  export type PayrollItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findUniqueOrThrow
   */
  export type PayrollItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem findFirst
   */
  export type PayrollItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findFirstOrThrow
   */
  export type PayrollItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItem to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollItems.
     */
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem findMany
   */
  export type PayrollItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter, which PayrollItems to fetch.
     */
    where?: PayrollItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollItems to fetch.
     */
    orderBy?: PayrollItemOrderByWithRelationInput | PayrollItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollItems.
     */
    cursor?: PayrollItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollItems.
     */
    skip?: number
    distinct?: PayrollItemScalarFieldEnum | PayrollItemScalarFieldEnum[]
  }

  /**
   * PayrollItem create
   */
  export type PayrollItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollItem.
     */
    data: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
  }

  /**
   * PayrollItem createMany
   */
  export type PayrollItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollItem createManyAndReturn
   */
  export type PayrollItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollItems.
     */
    data: PayrollItemCreateManyInput | PayrollItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollItem update
   */
  export type PayrollItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollItem.
     */
    data: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
    /**
     * Choose, which PayrollItem to update.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem updateMany
   */
  export type PayrollItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollItems.
     */
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyInput>
    /**
     * Filter which PayrollItems to update
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to update.
     */
    limit?: number
  }

  /**
   * PayrollItem updateManyAndReturn
   */
  export type PayrollItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * The data used to update PayrollItems.
     */
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyInput>
    /**
     * Filter which PayrollItems to update
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollItem upsert
   */
  export type PayrollItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollItem to update in case it exists.
     */
    where: PayrollItemWhereUniqueInput
    /**
     * In case the PayrollItem found by the `where` argument doesn't exist, create a new PayrollItem with this data.
     */
    create: XOR<PayrollItemCreateInput, PayrollItemUncheckedCreateInput>
    /**
     * In case the PayrollItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollItemUpdateInput, PayrollItemUncheckedUpdateInput>
  }

  /**
   * PayrollItem delete
   */
  export type PayrollItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
    /**
     * Filter which PayrollItem to delete.
     */
    where: PayrollItemWhereUniqueInput
  }

  /**
   * PayrollItem deleteMany
   */
  export type PayrollItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollItems to delete
     */
    where?: PayrollItemWhereInput
    /**
     * Limit how many PayrollItems to delete.
     */
    limit?: number
  }

  /**
   * PayrollItem.organization
   */
  export type PayrollItem$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: OrganizationWhereInput
  }

  /**
   * PayrollItem.payrollGroup
   */
  export type PayrollItem$payrollGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollGroup
     */
    select?: PayrollGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollGroup
     */
    omit?: PayrollGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollGroupInclude<ExtArgs> | null
    where?: PayrollGroupWhereInput
  }

  /**
   * PayrollItem.employee
   */
  export type PayrollItem$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * PayrollItem.PayStubItem
   */
  export type PayrollItem$PayStubItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubItem
     */
    select?: PayStubItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubItem
     */
    omit?: PayStubItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubItemInclude<ExtArgs> | null
    where?: PayStubItemWhereInput
    orderBy?: PayStubItemOrderByWithRelationInput | PayStubItemOrderByWithRelationInput[]
    cursor?: PayStubItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubItemScalarFieldEnum | PayStubItemScalarFieldEnum[]
  }

  /**
   * PayrollItem without action
   */
  export type PayrollItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollItem
     */
    select?: PayrollItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollItem
     */
    omit?: PayrollItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
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
    passHash: 'passHash',
    allocatedOrganizations: 'allocatedOrganizations'
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
    isDeleted: 'isDeleted'
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
    filingStatus: 'filingStatus',
    dependants: 'dependants',
    isDeleted: 'isDeleted',
    organizationId: 'organizationId'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const PayrollGroupScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    description: 'description',
    payFrequency: 'payFrequency',
    payRefDate: 'payRefDate',
    organizationId: 'organizationId'
  };

  export type PayrollGroupScalarFieldEnum = (typeof PayrollGroupScalarFieldEnum)[keyof typeof PayrollGroupScalarFieldEnum]


  export const EmployeeCompensationScalarFieldEnum: {
    uuid: 'uuid',
    employeeId: 'employeeId',
    payrollGroupId: 'payrollGroupId',
    isSalary: 'isSalary',
    salaryAmount: 'salaryAmount'
  };

  export type EmployeeCompensationScalarFieldEnum = (typeof EmployeeCompensationScalarFieldEnum)[keyof typeof EmployeeCompensationScalarFieldEnum]


  export const HourlyRateScalarFieldEnum: {
    uuid: 'uuid',
    name: 'name',
    rate: 'rate',
    canOvertime: 'canOvertime',
    compensationId: 'compensationId'
  };

  export type HourlyRateScalarFieldEnum = (typeof HourlyRateScalarFieldEnum)[keyof typeof HourlyRateScalarFieldEnum]


  export const PayStubScalarFieldEnum: {
    uuid: 'uuid',
    payDate: 'payDate',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    locked: 'locked',
    grossEarnings: 'grossEarnings',
    totalDeductions: 'totalDeductions',
    netPay: 'netPay',
    employeeId: 'employeeId'
  };

  export type PayStubScalarFieldEnum = (typeof PayStubScalarFieldEnum)[keyof typeof PayStubScalarFieldEnum]


  export const PayStubItemScalarFieldEnum: {
    uuid: 'uuid',
    payStubId: 'payStubId',
    payrollItemId: 'payrollItemId',
    type: 'type',
    name: 'name',
    description: 'description',
    hours: 'hours',
    rate: 'rate',
    percent: 'percent',
    amount: 'amount'
  };

  export type PayStubItemScalarFieldEnum = (typeof PayStubItemScalarFieldEnum)[keyof typeof PayStubItemScalarFieldEnum]


  export const PayrollItemScalarFieldEnum: {
    uuid: 'uuid',
    organizationId: 'organizationId',
    payrollGroupId: 'payrollGroupId',
    employeeId: 'employeeId',
    type: 'type',
    name: 'name',
    description: 'description',
    percent: 'percent',
    amount: 'amount',
    absMaxPeriod: 'absMaxPeriod',
    absMax: 'absMax'
  };

  export type PayrollItemScalarFieldEnum = (typeof PayrollItemScalarFieldEnum)[keyof typeof PayrollItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PayStubItemType'
   */
  export type EnumPayStubItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayStubItemType'>
    


  /**
   * Reference to a field of type 'PayStubItemType[]'
   */
  export type ListEnumPayStubItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayStubItemType[]'>
    


  /**
   * Reference to a field of type 'AbsMaxPeriodTypes'
   */
  export type EnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbsMaxPeriodTypes'>
    


  /**
   * Reference to a field of type 'AbsMaxPeriodTypes[]'
   */
  export type ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbsMaxPeriodTypes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    allocatedOrganizations?: IntFilter<"User"> | number
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
    allocatedOrganizations?: SortOrder
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
    allocatedOrganizations?: IntFilter<"User"> | number
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
    allocatedOrganizations?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
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
    allocatedOrganizations?: IntWithAggregatesFilter<"User"> | number
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
    employees?: EmployeeListRelationFilter
    payrollGroups?: PayrollGroupListRelationFilter
    inviteCodes?: InviteCodeListRelationFilter
    memberships?: RoleListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    employees?: EmployeeOrderByRelationAggregateInput
    payrollGroups?: PayrollGroupOrderByRelationAggregateInput
    inviteCodes?: InviteCodeOrderByRelationAggregateInput
    memberships?: RoleOrderByRelationAggregateInput
    defaultPayrollItems?: PayrollItemOrderByRelationAggregateInput
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
    employees?: EmployeeListRelationFilter
    payrollGroups?: PayrollGroupListRelationFilter
    inviteCodes?: InviteCodeListRelationFilter
    memberships?: RoleListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
  }, "uuid" | "uuid">

  export type OrganizationOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
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
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    compensations?: EmployeeCompensationListRelationFilter
    payStubs?: PayStubListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
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
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    compensations?: EmployeeCompensationOrderByRelationAggregateInput
    payStubs?: PayStubOrderByRelationAggregateInput
    defaultPayrollItems?: PayrollItemOrderByRelationAggregateInput
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
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    compensations?: EmployeeCompensationListRelationFilter
    payStubs?: PayStubListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
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
    filingStatus?: StringWithAggregatesFilter<"Employee"> | string
    dependants?: IntWithAggregatesFilter<"Employee"> | number
    isDeleted?: BoolWithAggregatesFilter<"Employee"> | boolean
    organizationId?: StringWithAggregatesFilter<"Employee"> | string
  }

  export type PayrollGroupWhereInput = {
    AND?: PayrollGroupWhereInput | PayrollGroupWhereInput[]
    OR?: PayrollGroupWhereInput[]
    NOT?: PayrollGroupWhereInput | PayrollGroupWhereInput[]
    uuid?: StringFilter<"PayrollGroup"> | string
    name?: StringFilter<"PayrollGroup"> | string
    description?: StringFilter<"PayrollGroup"> | string
    payFrequency?: IntFilter<"PayrollGroup"> | number
    payRefDate?: DateTimeFilter<"PayrollGroup"> | Date | string
    organizationId?: StringFilter<"PayrollGroup"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    compensations?: EmployeeCompensationListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
  }

  export type PayrollGroupOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    payFrequency?: SortOrder
    payRefDate?: SortOrder
    organizationId?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    compensations?: EmployeeCompensationOrderByRelationAggregateInput
    defaultPayrollItems?: PayrollItemOrderByRelationAggregateInput
  }

  export type PayrollGroupWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayrollGroupWhereInput | PayrollGroupWhereInput[]
    OR?: PayrollGroupWhereInput[]
    NOT?: PayrollGroupWhereInput | PayrollGroupWhereInput[]
    name?: StringFilter<"PayrollGroup"> | string
    description?: StringFilter<"PayrollGroup"> | string
    payFrequency?: IntFilter<"PayrollGroup"> | number
    payRefDate?: DateTimeFilter<"PayrollGroup"> | Date | string
    organizationId?: StringFilter<"PayrollGroup"> | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    compensations?: EmployeeCompensationListRelationFilter
    defaultPayrollItems?: PayrollItemListRelationFilter
  }, "uuid" | "uuid">

  export type PayrollGroupOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    payFrequency?: SortOrder
    payRefDate?: SortOrder
    organizationId?: SortOrder
    _count?: PayrollGroupCountOrderByAggregateInput
    _avg?: PayrollGroupAvgOrderByAggregateInput
    _max?: PayrollGroupMaxOrderByAggregateInput
    _min?: PayrollGroupMinOrderByAggregateInput
    _sum?: PayrollGroupSumOrderByAggregateInput
  }

  export type PayrollGroupScalarWhereWithAggregatesInput = {
    AND?: PayrollGroupScalarWhereWithAggregatesInput | PayrollGroupScalarWhereWithAggregatesInput[]
    OR?: PayrollGroupScalarWhereWithAggregatesInput[]
    NOT?: PayrollGroupScalarWhereWithAggregatesInput | PayrollGroupScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"PayrollGroup"> | string
    name?: StringWithAggregatesFilter<"PayrollGroup"> | string
    description?: StringWithAggregatesFilter<"PayrollGroup"> | string
    payFrequency?: IntWithAggregatesFilter<"PayrollGroup"> | number
    payRefDate?: DateTimeWithAggregatesFilter<"PayrollGroup"> | Date | string
    organizationId?: StringWithAggregatesFilter<"PayrollGroup"> | string
  }

  export type EmployeeCompensationWhereInput = {
    AND?: EmployeeCompensationWhereInput | EmployeeCompensationWhereInput[]
    OR?: EmployeeCompensationWhereInput[]
    NOT?: EmployeeCompensationWhereInput | EmployeeCompensationWhereInput[]
    uuid?: StringFilter<"EmployeeCompensation"> | string
    employeeId?: StringFilter<"EmployeeCompensation"> | string
    payrollGroupId?: StringFilter<"EmployeeCompensation"> | string
    isSalary?: BoolFilter<"EmployeeCompensation"> | boolean
    salaryAmount?: DecimalNullableFilter<"EmployeeCompensation"> | Decimal | DecimalJsLike | number | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payrollGroup?: XOR<PayrollGroupScalarRelationFilter, PayrollGroupWhereInput>
    hourlyRates?: HourlyRateListRelationFilter
  }

  export type EmployeeCompensationOrderByWithRelationInput = {
    uuid?: SortOrder
    employeeId?: SortOrder
    payrollGroupId?: SortOrder
    isSalary?: SortOrder
    salaryAmount?: SortOrderInput | SortOrder
    employee?: EmployeeOrderByWithRelationInput
    payrollGroup?: PayrollGroupOrderByWithRelationInput
    hourlyRates?: HourlyRateOrderByRelationAggregateInput
  }

  export type EmployeeCompensationWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    employeeId_payrollGroupId?: EmployeeCompensationEmployeeIdPayrollGroupIdCompoundUniqueInput
    AND?: EmployeeCompensationWhereInput | EmployeeCompensationWhereInput[]
    OR?: EmployeeCompensationWhereInput[]
    NOT?: EmployeeCompensationWhereInput | EmployeeCompensationWhereInput[]
    employeeId?: StringFilter<"EmployeeCompensation"> | string
    payrollGroupId?: StringFilter<"EmployeeCompensation"> | string
    isSalary?: BoolFilter<"EmployeeCompensation"> | boolean
    salaryAmount?: DecimalNullableFilter<"EmployeeCompensation"> | Decimal | DecimalJsLike | number | string | null
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    payrollGroup?: XOR<PayrollGroupScalarRelationFilter, PayrollGroupWhereInput>
    hourlyRates?: HourlyRateListRelationFilter
  }, "uuid" | "employeeId_payrollGroupId">

  export type EmployeeCompensationOrderByWithAggregationInput = {
    uuid?: SortOrder
    employeeId?: SortOrder
    payrollGroupId?: SortOrder
    isSalary?: SortOrder
    salaryAmount?: SortOrderInput | SortOrder
    _count?: EmployeeCompensationCountOrderByAggregateInput
    _avg?: EmployeeCompensationAvgOrderByAggregateInput
    _max?: EmployeeCompensationMaxOrderByAggregateInput
    _min?: EmployeeCompensationMinOrderByAggregateInput
    _sum?: EmployeeCompensationSumOrderByAggregateInput
  }

  export type EmployeeCompensationScalarWhereWithAggregatesInput = {
    AND?: EmployeeCompensationScalarWhereWithAggregatesInput | EmployeeCompensationScalarWhereWithAggregatesInput[]
    OR?: EmployeeCompensationScalarWhereWithAggregatesInput[]
    NOT?: EmployeeCompensationScalarWhereWithAggregatesInput | EmployeeCompensationScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"EmployeeCompensation"> | string
    employeeId?: StringWithAggregatesFilter<"EmployeeCompensation"> | string
    payrollGroupId?: StringWithAggregatesFilter<"EmployeeCompensation"> | string
    isSalary?: BoolWithAggregatesFilter<"EmployeeCompensation"> | boolean
    salaryAmount?: DecimalNullableWithAggregatesFilter<"EmployeeCompensation"> | Decimal | DecimalJsLike | number | string | null
  }

  export type HourlyRateWhereInput = {
    AND?: HourlyRateWhereInput | HourlyRateWhereInput[]
    OR?: HourlyRateWhereInput[]
    NOT?: HourlyRateWhereInput | HourlyRateWhereInput[]
    uuid?: StringFilter<"HourlyRate"> | string
    name?: StringFilter<"HourlyRate"> | string
    rate?: DecimalFilter<"HourlyRate"> | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFilter<"HourlyRate"> | boolean
    compensationId?: StringFilter<"HourlyRate"> | string
    compensation?: XOR<EmployeeCompensationScalarRelationFilter, EmployeeCompensationWhereInput>
  }

  export type HourlyRateOrderByWithRelationInput = {
    uuid?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    canOvertime?: SortOrder
    compensationId?: SortOrder
    compensation?: EmployeeCompensationOrderByWithRelationInput
  }

  export type HourlyRateWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: HourlyRateWhereInput | HourlyRateWhereInput[]
    OR?: HourlyRateWhereInput[]
    NOT?: HourlyRateWhereInput | HourlyRateWhereInput[]
    name?: StringFilter<"HourlyRate"> | string
    rate?: DecimalFilter<"HourlyRate"> | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFilter<"HourlyRate"> | boolean
    compensationId?: StringFilter<"HourlyRate"> | string
    compensation?: XOR<EmployeeCompensationScalarRelationFilter, EmployeeCompensationWhereInput>
  }, "uuid" | "uuid">

  export type HourlyRateOrderByWithAggregationInput = {
    uuid?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    canOvertime?: SortOrder
    compensationId?: SortOrder
    _count?: HourlyRateCountOrderByAggregateInput
    _avg?: HourlyRateAvgOrderByAggregateInput
    _max?: HourlyRateMaxOrderByAggregateInput
    _min?: HourlyRateMinOrderByAggregateInput
    _sum?: HourlyRateSumOrderByAggregateInput
  }

  export type HourlyRateScalarWhereWithAggregatesInput = {
    AND?: HourlyRateScalarWhereWithAggregatesInput | HourlyRateScalarWhereWithAggregatesInput[]
    OR?: HourlyRateScalarWhereWithAggregatesInput[]
    NOT?: HourlyRateScalarWhereWithAggregatesInput | HourlyRateScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"HourlyRate"> | string
    name?: StringWithAggregatesFilter<"HourlyRate"> | string
    rate?: DecimalWithAggregatesFilter<"HourlyRate"> | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolWithAggregatesFilter<"HourlyRate"> | boolean
    compensationId?: StringWithAggregatesFilter<"HourlyRate"> | string
  }

  export type PayStubWhereInput = {
    AND?: PayStubWhereInput | PayStubWhereInput[]
    OR?: PayStubWhereInput[]
    NOT?: PayStubWhereInput | PayStubWhereInput[]
    uuid?: StringFilter<"PayStub"> | string
    payDate?: DateTimeFilter<"PayStub"> | Date | string
    periodStart?: DateTimeFilter<"PayStub"> | Date | string
    periodEnd?: DateTimeFilter<"PayStub"> | Date | string
    locked?: BoolFilter<"PayStub"> | boolean
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: PayStubItemListRelationFilter
  }

  export type PayStubOrderByWithRelationInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    locked?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    items?: PayStubItemOrderByRelationAggregateInput
  }

  export type PayStubWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayStubWhereInput | PayStubWhereInput[]
    OR?: PayStubWhereInput[]
    NOT?: PayStubWhereInput | PayStubWhereInput[]
    payDate?: DateTimeFilter<"PayStub"> | Date | string
    periodStart?: DateTimeFilter<"PayStub"> | Date | string
    periodEnd?: DateTimeFilter<"PayStub"> | Date | string
    locked?: BoolFilter<"PayStub"> | boolean
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    items?: PayStubItemListRelationFilter
  }, "uuid" | "uuid">

  export type PayStubOrderByWithAggregationInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    locked?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
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
    payDate?: DateTimeWithAggregatesFilter<"PayStub"> | Date | string
    periodStart?: DateTimeWithAggregatesFilter<"PayStub"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"PayStub"> | Date | string
    locked?: BoolWithAggregatesFilter<"PayStub"> | boolean
    grossEarnings?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringWithAggregatesFilter<"PayStub"> | string
  }

  export type PayStubItemWhereInput = {
    AND?: PayStubItemWhereInput | PayStubItemWhereInput[]
    OR?: PayStubItemWhereInput[]
    NOT?: PayStubItemWhereInput | PayStubItemWhereInput[]
    uuid?: StringFilter<"PayStubItem"> | string
    payStubId?: StringFilter<"PayStubItem"> | string
    payrollItemId?: StringNullableFilter<"PayStubItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubItem"> | string
    description?: StringNullableFilter<"PayStubItem"> | string | null
    hours?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    percent?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string
    payStub?: XOR<PayStubScalarRelationFilter, PayStubWhereInput>
    payrollItem?: XOR<PayrollItemNullableScalarRelationFilter, PayrollItemWhereInput> | null
  }

  export type PayStubItemOrderByWithRelationInput = {
    uuid?: SortOrder
    payStubId?: SortOrder
    payrollItemId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    amount?: SortOrder
    payStub?: PayStubOrderByWithRelationInput
    payrollItem?: PayrollItemOrderByWithRelationInput
  }

  export type PayStubItemWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayStubItemWhereInput | PayStubItemWhereInput[]
    OR?: PayStubItemWhereInput[]
    NOT?: PayStubItemWhereInput | PayStubItemWhereInput[]
    payStubId?: StringFilter<"PayStubItem"> | string
    payrollItemId?: StringNullableFilter<"PayStubItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubItem"> | string
    description?: StringNullableFilter<"PayStubItem"> | string | null
    hours?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    percent?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string
    payStub?: XOR<PayStubScalarRelationFilter, PayStubWhereInput>
    payrollItem?: XOR<PayrollItemNullableScalarRelationFilter, PayrollItemWhereInput> | null
  }, "uuid">

  export type PayStubItemOrderByWithAggregationInput = {
    uuid?: SortOrder
    payStubId?: SortOrder
    payrollItemId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    hours?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    amount?: SortOrder
    _count?: PayStubItemCountOrderByAggregateInput
    _avg?: PayStubItemAvgOrderByAggregateInput
    _max?: PayStubItemMaxOrderByAggregateInput
    _min?: PayStubItemMinOrderByAggregateInput
    _sum?: PayStubItemSumOrderByAggregateInput
  }

  export type PayStubItemScalarWhereWithAggregatesInput = {
    AND?: PayStubItemScalarWhereWithAggregatesInput | PayStubItemScalarWhereWithAggregatesInput[]
    OR?: PayStubItemScalarWhereWithAggregatesInput[]
    NOT?: PayStubItemScalarWhereWithAggregatesInput | PayStubItemScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"PayStubItem"> | string
    payStubId?: StringWithAggregatesFilter<"PayStubItem"> | string
    payrollItemId?: StringNullableWithAggregatesFilter<"PayStubItem"> | string | null
    type?: EnumPayStubItemTypeWithAggregatesFilter<"PayStubItem"> | $Enums.PayStubItemType
    name?: StringWithAggregatesFilter<"PayStubItem"> | string
    description?: StringNullableWithAggregatesFilter<"PayStubItem"> | string | null
    hours?: DecimalNullableWithAggregatesFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableWithAggregatesFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    percent?: DecimalNullableWithAggregatesFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalWithAggregatesFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemWhereInput = {
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    uuid?: StringFilter<"PayrollItem"> | string
    organizationId?: StringNullableFilter<"PayrollItem"> | string | null
    payrollGroupId?: StringNullableFilter<"PayrollItem"> | string | null
    employeeId?: StringNullableFilter<"PayrollItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayrollItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayrollItem"> | string
    description?: StringNullableFilter<"PayrollItem"> | string | null
    percent?: DecimalNullableFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFilter<"PayrollItem"> | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    PayStubItem?: PayStubItemListRelationFilter
  }

  export type PayrollItemOrderByWithRelationInput = {
    uuid?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    amount?: SortOrder
    absMaxPeriod?: SortOrder
    absMax?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    payrollGroup?: PayrollGroupOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    PayStubItem?: PayStubItemOrderByRelationAggregateInput
  }

  export type PayrollItemWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayrollItemWhereInput | PayrollItemWhereInput[]
    OR?: PayrollItemWhereInput[]
    NOT?: PayrollItemWhereInput | PayrollItemWhereInput[]
    organizationId?: StringNullableFilter<"PayrollItem"> | string | null
    payrollGroupId?: StringNullableFilter<"PayrollItem"> | string | null
    employeeId?: StringNullableFilter<"PayrollItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayrollItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayrollItem"> | string
    description?: StringNullableFilter<"PayrollItem"> | string | null
    percent?: DecimalNullableFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFilter<"PayrollItem"> | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    PayStubItem?: PayStubItemListRelationFilter
  }, "uuid">

  export type PayrollItemOrderByWithAggregationInput = {
    uuid?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    percent?: SortOrderInput | SortOrder
    amount?: SortOrder
    absMaxPeriod?: SortOrder
    absMax?: SortOrder
    _count?: PayrollItemCountOrderByAggregateInput
    _avg?: PayrollItemAvgOrderByAggregateInput
    _max?: PayrollItemMaxOrderByAggregateInput
    _min?: PayrollItemMinOrderByAggregateInput
    _sum?: PayrollItemSumOrderByAggregateInput
  }

  export type PayrollItemScalarWhereWithAggregatesInput = {
    AND?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    OR?: PayrollItemScalarWhereWithAggregatesInput[]
    NOT?: PayrollItemScalarWhereWithAggregatesInput | PayrollItemScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"PayrollItem"> | string
    organizationId?: StringNullableWithAggregatesFilter<"PayrollItem"> | string | null
    payrollGroupId?: StringNullableWithAggregatesFilter<"PayrollItem"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"PayrollItem"> | string | null
    type?: EnumPayStubItemTypeWithAggregatesFilter<"PayrollItem"> | $Enums.PayStubItemType
    name?: StringWithAggregatesFilter<"PayrollItem"> | string
    description?: StringNullableWithAggregatesFilter<"PayrollItem"> | string | null
    percent?: DecimalNullableWithAggregatesFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalWithAggregatesFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesWithAggregatesFilter<"PayrollItem"> | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalWithAggregatesFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    allocatedOrganizations?: number
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
    allocatedOrganizations?: number
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
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
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
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
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
    allocatedOrganizations?: number
  }

  export type UserUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
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
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
  }

  export type OrganizationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrganizationUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollGroupCreateInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organization: OrganizationCreateNestedOneWithoutPayrollGroupsInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupCreateManyInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
  }

  export type PayrollGroupUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollGroupUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeCompensationCreateInput = {
    uuid?: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    employee: EmployeeCreateNestedOneWithoutCompensationsInput
    payrollGroup: PayrollGroupCreateNestedOneWithoutCompensationsInput
    hourlyRates?: HourlyRateCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationUncheckedCreateInput = {
    uuid?: string
    employeeId: string
    payrollGroupId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee?: EmployeeUpdateOneRequiredWithoutCompensationsNestedInput
    payrollGroup?: PayrollGroupUpdateOneRequiredWithoutCompensationsNestedInput
    hourlyRates?: HourlyRateUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationCreateManyInput = {
    uuid?: string
    employeeId: string
    payrollGroupId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type EmployeeCompensationUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type EmployeeCompensationUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type HourlyRateCreateInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
    compensation: EmployeeCompensationCreateNestedOneWithoutHourlyRatesInput
  }

  export type HourlyRateUncheckedCreateInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
    compensationId: string
  }

  export type HourlyRateUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
    compensation?: EmployeeCompensationUpdateOneRequiredWithoutHourlyRatesNestedInput
  }

  export type HourlyRateUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
    compensationId?: StringFieldUpdateOperationsInput | string
  }

  export type HourlyRateCreateManyInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
    compensationId: string
  }

  export type HourlyRateUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HourlyRateUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
    compensationId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubCreateInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
    items?: PayStubItemCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
    items?: PayStubItemUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
    items?: PayStubItemUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    items?: PayStubItemUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubCreateManyInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
  }

  export type PayStubUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubItemCreateInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    payStub: PayStubCreateNestedOneWithoutItemsInput
    payrollItem?: PayrollItemCreateNestedOneWithoutPayStubItemInput
  }

  export type PayStubItemUncheckedCreateInput = {
    uuid?: string
    payStubId: string
    payrollItemId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payStub?: PayStubUpdateOneRequiredWithoutItemsNestedInput
    payrollItem?: PayrollItemUpdateOneWithoutPayStubItemNestedInput
  }

  export type PayStubItemUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    payrollItemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemCreateManyInput = {
    uuid?: string
    payStubId: string
    payrollItemId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    payrollItemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemCreateInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    organization?: OrganizationCreateNestedOneWithoutDefaultPayrollItemsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultPayrollItemsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultPayrollItemsInput
    PayStubItem?: PayStubItemCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemUncheckedCreateInput = {
    uuid?: string
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    organization?: OrganizationUpdateOneWithoutDefaultPayrollItemsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultPayrollItemsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultPayrollItemsNestedInput
    PayStubItem?: PayStubItemUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemCreateManyInput = {
    uuid?: string
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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
    allocatedOrganizations?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    allocatedOrganizations?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
    allocatedOrganizations?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    uuid?: SortOrder
    isActive?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    passHash?: SortOrder
    allocatedOrganizations?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    allocatedOrganizations?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type PayrollGroupListRelationFilter = {
    every?: PayrollGroupWhereInput
    some?: PayrollGroupWhereInput
    none?: PayrollGroupWhereInput
  }

  export type InviteCodeListRelationFilter = {
    every?: InviteCodeWhereInput
    some?: InviteCodeWhereInput
    none?: InviteCodeWhereInput
  }

  export type PayrollItemListRelationFilter = {
    every?: PayrollItemWhereInput
    some?: PayrollItemWhereInput
    none?: PayrollItemWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    notes?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
  }

  export type EmployeeCompensationListRelationFilter = {
    every?: EmployeeCompensationWhereInput
    some?: EmployeeCompensationWhereInput
    none?: EmployeeCompensationWhereInput
  }

  export type PayStubListRelationFilter = {
    every?: PayStubWhereInput
    some?: PayStubWhereInput
    none?: PayStubWhereInput
  }

  export type EmployeeCompensationOrderByRelationAggregateInput = {
    _count?: SortOrder
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
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
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
    filingStatus?: SortOrder
    dependants?: SortOrder
    isDeleted?: SortOrder
    organizationId?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    dependants?: SortOrder
  }

  export type PayrollGroupCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    payFrequency?: SortOrder
    payRefDate?: SortOrder
    organizationId?: SortOrder
  }

  export type PayrollGroupAvgOrderByAggregateInput = {
    payFrequency?: SortOrder
  }

  export type PayrollGroupMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    payFrequency?: SortOrder
    payRefDate?: SortOrder
    organizationId?: SortOrder
  }

  export type PayrollGroupMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    payFrequency?: SortOrder
    payRefDate?: SortOrder
    organizationId?: SortOrder
  }

  export type PayrollGroupSumOrderByAggregateInput = {
    payFrequency?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PayrollGroupScalarRelationFilter = {
    is?: PayrollGroupWhereInput
    isNot?: PayrollGroupWhereInput
  }

  export type HourlyRateListRelationFilter = {
    every?: HourlyRateWhereInput
    some?: HourlyRateWhereInput
    none?: HourlyRateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HourlyRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCompensationEmployeeIdPayrollGroupIdCompoundUniqueInput = {
    employeeId: string
    payrollGroupId: string
  }

  export type EmployeeCompensationCountOrderByAggregateInput = {
    uuid?: SortOrder
    employeeId?: SortOrder
    payrollGroupId?: SortOrder
    isSalary?: SortOrder
    salaryAmount?: SortOrder
  }

  export type EmployeeCompensationAvgOrderByAggregateInput = {
    salaryAmount?: SortOrder
  }

  export type EmployeeCompensationMaxOrderByAggregateInput = {
    uuid?: SortOrder
    employeeId?: SortOrder
    payrollGroupId?: SortOrder
    isSalary?: SortOrder
    salaryAmount?: SortOrder
  }

  export type EmployeeCompensationMinOrderByAggregateInput = {
    uuid?: SortOrder
    employeeId?: SortOrder
    payrollGroupId?: SortOrder
    isSalary?: SortOrder
    salaryAmount?: SortOrder
  }

  export type EmployeeCompensationSumOrderByAggregateInput = {
    salaryAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationScalarRelationFilter = {
    is?: EmployeeCompensationWhereInput
    isNot?: EmployeeCompensationWhereInput
  }

  export type HourlyRateCountOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    canOvertime?: SortOrder
    compensationId?: SortOrder
  }

  export type HourlyRateAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type HourlyRateMaxOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    canOvertime?: SortOrder
    compensationId?: SortOrder
  }

  export type HourlyRateMinOrderByAggregateInput = {
    uuid?: SortOrder
    name?: SortOrder
    rate?: SortOrder
    canOvertime?: SortOrder
    compensationId?: SortOrder
  }

  export type HourlyRateSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type PayStubItemListRelationFilter = {
    every?: PayStubItemWhereInput
    some?: PayStubItemWhereInput
    none?: PayStubItemWhereInput
  }

  export type PayStubItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayStubCountOrderByAggregateInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    locked?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
  }

  export type PayStubAvgOrderByAggregateInput = {
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
  }

  export type PayStubMaxOrderByAggregateInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    locked?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
  }

  export type PayStubMinOrderByAggregateInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    locked?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
  }

  export type PayStubSumOrderByAggregateInput = {
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPayStubItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayStubItemType | EnumPayStubItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayStubItemTypeFilter<$PrismaModel> | $Enums.PayStubItemType
  }

  export type PayStubScalarRelationFilter = {
    is?: PayStubWhereInput
    isNot?: PayStubWhereInput
  }

  export type PayrollItemNullableScalarRelationFilter = {
    is?: PayrollItemWhereInput | null
    isNot?: PayrollItemWhereInput | null
  }

  export type PayStubItemCountOrderByAggregateInput = {
    uuid?: SortOrder
    payStubId?: SortOrder
    payrollItemId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
  }

  export type PayStubItemAvgOrderByAggregateInput = {
    hours?: SortOrder
    rate?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
  }

  export type PayStubItemMaxOrderByAggregateInput = {
    uuid?: SortOrder
    payStubId?: SortOrder
    payrollItemId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
  }

  export type PayStubItemMinOrderByAggregateInput = {
    uuid?: SortOrder
    payStubId?: SortOrder
    payrollItemId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
  }

  export type PayStubItemSumOrderByAggregateInput = {
    hours?: SortOrder
    rate?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPayStubItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayStubItemType | EnumPayStubItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayStubItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayStubItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayStubItemTypeFilter<$PrismaModel>
    _max?: NestedEnumPayStubItemTypeFilter<$PrismaModel>
  }

  export type EnumAbsMaxPeriodTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbsMaxPeriodTypes | EnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel> | $Enums.AbsMaxPeriodTypes
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type PayrollGroupNullableScalarRelationFilter = {
    is?: PayrollGroupWhereInput | null
    isNot?: PayrollGroupWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type PayrollItemCountOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
    absMaxPeriod?: SortOrder
    absMax?: SortOrder
  }

  export type PayrollItemAvgOrderByAggregateInput = {
    percent?: SortOrder
    amount?: SortOrder
    absMax?: SortOrder
  }

  export type PayrollItemMaxOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
    absMaxPeriod?: SortOrder
    absMax?: SortOrder
  }

  export type PayrollItemMinOrderByAggregateInput = {
    uuid?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    percent?: SortOrder
    amount?: SortOrder
    absMaxPeriod?: SortOrder
    absMax?: SortOrder
  }

  export type PayrollItemSumOrderByAggregateInput = {
    percent?: SortOrder
    amount?: SortOrder
    absMax?: SortOrder
  }

  export type EnumAbsMaxPeriodTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbsMaxPeriodTypes | EnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAbsMaxPeriodTypesWithAggregatesFilter<$PrismaModel> | $Enums.AbsMaxPeriodTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel>
    _max?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel>
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type PayrollGroupCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput> | PayrollGroupCreateWithoutOrganizationInput[] | PayrollGroupUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutOrganizationInput | PayrollGroupCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayrollGroupCreateManyOrganizationInputEnvelope
    connect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
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

  export type PayrollItemCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput> | PayrollItemCreateWithoutOrganizationInput[] | PayrollItemUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutOrganizationInput | PayrollItemCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayrollItemCreateManyOrganizationInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput> | EmployeeCreateWithoutOrganizationInput[] | EmployeeUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutOrganizationInput | EmployeeCreateOrConnectWithoutOrganizationInput[]
    createMany?: EmployeeCreateManyOrganizationInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput> | PayrollGroupCreateWithoutOrganizationInput[] | PayrollGroupUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutOrganizationInput | PayrollGroupCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayrollGroupCreateManyOrganizationInputEnvelope
    connect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
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

  export type PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput> | PayrollItemCreateWithoutOrganizationInput[] | PayrollItemUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutOrganizationInput | PayrollItemCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayrollItemCreateManyOrganizationInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
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

  export type PayrollGroupUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput> | PayrollGroupCreateWithoutOrganizationInput[] | PayrollGroupUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutOrganizationInput | PayrollGroupCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayrollGroupUpsertWithWhereUniqueWithoutOrganizationInput | PayrollGroupUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayrollGroupCreateManyOrganizationInputEnvelope
    set?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    disconnect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    delete?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    connect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    update?: PayrollGroupUpdateWithWhereUniqueWithoutOrganizationInput | PayrollGroupUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayrollGroupUpdateManyWithWhereWithoutOrganizationInput | PayrollGroupUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayrollGroupScalarWhereInput | PayrollGroupScalarWhereInput[]
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

  export type PayrollItemUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput> | PayrollItemCreateWithoutOrganizationInput[] | PayrollItemUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutOrganizationInput | PayrollItemCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutOrganizationInput | PayrollItemUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayrollItemCreateManyOrganizationInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutOrganizationInput | PayrollItemUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutOrganizationInput | PayrollItemUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
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

  export type PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput> | PayrollGroupCreateWithoutOrganizationInput[] | PayrollGroupUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutOrganizationInput | PayrollGroupCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayrollGroupUpsertWithWhereUniqueWithoutOrganizationInput | PayrollGroupUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayrollGroupCreateManyOrganizationInputEnvelope
    set?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    disconnect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    delete?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    connect?: PayrollGroupWhereUniqueInput | PayrollGroupWhereUniqueInput[]
    update?: PayrollGroupUpdateWithWhereUniqueWithoutOrganizationInput | PayrollGroupUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayrollGroupUpdateManyWithWhereWithoutOrganizationInput | PayrollGroupUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayrollGroupScalarWhereInput | PayrollGroupScalarWhereInput[]
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

  export type PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput> | PayrollItemCreateWithoutOrganizationInput[] | PayrollItemUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutOrganizationInput | PayrollItemCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutOrganizationInput | PayrollItemUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayrollItemCreateManyOrganizationInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutOrganizationInput | PayrollItemUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutOrganizationInput | PayrollItemUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCompensationCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput> | EmployeeCompensationCreateWithoutEmployeeInput[] | EmployeeCompensationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutEmployeeInput | EmployeeCompensationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCompensationCreateManyEmployeeInputEnvelope
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
  }

  export type PayStubCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type PayrollItemCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type EmployeeCompensationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput> | EmployeeCompensationCreateWithoutEmployeeInput[] | EmployeeCompensationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutEmployeeInput | EmployeeCompensationCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeCompensationCreateManyEmployeeInputEnvelope
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
  }

  export type PayStubUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput> | PayStubCreateWithoutEmployeeInput[] | PayStubUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubCreateOrConnectWithoutEmployeeInput | PayStubCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubCreateManyEmployeeInputEnvelope
    connect?: PayStubWhereUniqueInput | PayStubWhereUniqueInput[]
  }

  export type PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutEmployeesInput
    upsert?: OrganizationUpsertWithoutEmployeesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutEmployeesInput, OrganizationUpdateWithoutEmployeesInput>, OrganizationUncheckedUpdateWithoutEmployeesInput>
  }

  export type EmployeeCompensationUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput> | EmployeeCompensationCreateWithoutEmployeeInput[] | EmployeeCompensationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutEmployeeInput | EmployeeCompensationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeCompensationUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeCompensationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCompensationCreateManyEmployeeInputEnvelope
    set?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    disconnect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    delete?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    update?: EmployeeCompensationUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeCompensationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeCompensationUpdateManyWithWhereWithoutEmployeeInput | EmployeeCompensationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
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

  export type PayrollItemUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput | PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput | PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutEmployeeInput | PayrollItemUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type EmployeeCompensationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput> | EmployeeCompensationCreateWithoutEmployeeInput[] | EmployeeCompensationUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutEmployeeInput | EmployeeCompensationCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeCompensationUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeCompensationUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeCompensationCreateManyEmployeeInputEnvelope
    set?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    disconnect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    delete?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    update?: EmployeeCompensationUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeCompensationUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeCompensationUpdateManyWithWhereWithoutEmployeeInput | EmployeeCompensationUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
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

  export type PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput> | PayrollItemCreateWithoutEmployeeInput[] | PayrollItemUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutEmployeeInput | PayrollItemCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput | PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayrollItemCreateManyEmployeeInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput | PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutEmployeeInput | PayrollItemUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutPayrollGroupsInput = {
    create?: XOR<OrganizationCreateWithoutPayrollGroupsInput, OrganizationUncheckedCreateWithoutPayrollGroupsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPayrollGroupsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput> | EmployeeCompensationCreateWithoutPayrollGroupInput[] | EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput | EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: EmployeeCompensationCreateManyPayrollGroupInputEnvelope
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
  }

  export type PayrollItemCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput> | PayrollItemCreateWithoutPayrollGroupInput[] | PayrollItemUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollGroupInput | PayrollItemCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayrollItemCreateManyPayrollGroupInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput> | EmployeeCompensationCreateWithoutPayrollGroupInput[] | EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput | EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: EmployeeCompensationCreateManyPayrollGroupInputEnvelope
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
  }

  export type PayrollItemUncheckedCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput> | PayrollItemCreateWithoutPayrollGroupInput[] | PayrollItemUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollGroupInput | PayrollItemCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayrollItemCreateManyPayrollGroupInputEnvelope
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
  }

  export type OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput = {
    create?: XOR<OrganizationCreateWithoutPayrollGroupsInput, OrganizationUncheckedCreateWithoutPayrollGroupsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutPayrollGroupsInput
    upsert?: OrganizationUpsertWithoutPayrollGroupsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutPayrollGroupsInput, OrganizationUpdateWithoutPayrollGroupsInput>, OrganizationUncheckedUpdateWithoutPayrollGroupsInput>
  }

  export type EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput> | EmployeeCompensationCreateWithoutPayrollGroupInput[] | EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput | EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: EmployeeCompensationUpsertWithWhereUniqueWithoutPayrollGroupInput | EmployeeCompensationUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: EmployeeCompensationCreateManyPayrollGroupInputEnvelope
    set?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    disconnect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    delete?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    update?: EmployeeCompensationUpdateWithWhereUniqueWithoutPayrollGroupInput | EmployeeCompensationUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: EmployeeCompensationUpdateManyWithWhereWithoutPayrollGroupInput | EmployeeCompensationUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
  }

  export type PayrollItemUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput> | PayrollItemCreateWithoutPayrollGroupInput[] | PayrollItemUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollGroupInput | PayrollItemCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollGroupInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayrollItemCreateManyPayrollGroupInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollGroupInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollGroupInput | PayrollItemUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput> | EmployeeCompensationCreateWithoutPayrollGroupInput[] | EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput | EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: EmployeeCompensationUpsertWithWhereUniqueWithoutPayrollGroupInput | EmployeeCompensationUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: EmployeeCompensationCreateManyPayrollGroupInputEnvelope
    set?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    disconnect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    delete?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
    update?: EmployeeCompensationUpdateWithWhereUniqueWithoutPayrollGroupInput | EmployeeCompensationUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: EmployeeCompensationUpdateManyWithWhereWithoutPayrollGroupInput | EmployeeCompensationUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput> | PayrollItemCreateWithoutPayrollGroupInput[] | PayrollItemUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayrollGroupInput | PayrollItemCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayrollItemUpsertWithWhereUniqueWithoutPayrollGroupInput | PayrollItemUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayrollItemCreateManyPayrollGroupInputEnvelope
    set?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    disconnect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    delete?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    connect?: PayrollItemWhereUniqueInput | PayrollItemWhereUniqueInput[]
    update?: PayrollItemUpdateWithWhereUniqueWithoutPayrollGroupInput | PayrollItemUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayrollItemUpdateManyWithWhereWithoutPayrollGroupInput | PayrollItemUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutCompensationsInput = {
    create?: XOR<EmployeeCreateWithoutCompensationsInput, EmployeeUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompensationsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayrollGroupCreateNestedOneWithoutCompensationsInput = {
    create?: XOR<PayrollGroupCreateWithoutCompensationsInput, PayrollGroupUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutCompensationsInput
    connect?: PayrollGroupWhereUniqueInput
  }

  export type HourlyRateCreateNestedManyWithoutCompensationInput = {
    create?: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput> | HourlyRateCreateWithoutCompensationInput[] | HourlyRateUncheckedCreateWithoutCompensationInput[]
    connectOrCreate?: HourlyRateCreateOrConnectWithoutCompensationInput | HourlyRateCreateOrConnectWithoutCompensationInput[]
    createMany?: HourlyRateCreateManyCompensationInputEnvelope
    connect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
  }

  export type HourlyRateUncheckedCreateNestedManyWithoutCompensationInput = {
    create?: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput> | HourlyRateCreateWithoutCompensationInput[] | HourlyRateUncheckedCreateWithoutCompensationInput[]
    connectOrCreate?: HourlyRateCreateOrConnectWithoutCompensationInput | HourlyRateCreateOrConnectWithoutCompensationInput[]
    createMany?: HourlyRateCreateManyCompensationInputEnvelope
    connect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EmployeeUpdateOneRequiredWithoutCompensationsNestedInput = {
    create?: XOR<EmployeeCreateWithoutCompensationsInput, EmployeeUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutCompensationsInput
    upsert?: EmployeeUpsertWithoutCompensationsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutCompensationsInput, EmployeeUpdateWithoutCompensationsInput>, EmployeeUncheckedUpdateWithoutCompensationsInput>
  }

  export type PayrollGroupUpdateOneRequiredWithoutCompensationsNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutCompensationsInput, PayrollGroupUncheckedCreateWithoutCompensationsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutCompensationsInput
    upsert?: PayrollGroupUpsertWithoutCompensationsInput
    connect?: PayrollGroupWhereUniqueInput
    update?: XOR<XOR<PayrollGroupUpdateToOneWithWhereWithoutCompensationsInput, PayrollGroupUpdateWithoutCompensationsInput>, PayrollGroupUncheckedUpdateWithoutCompensationsInput>
  }

  export type HourlyRateUpdateManyWithoutCompensationNestedInput = {
    create?: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput> | HourlyRateCreateWithoutCompensationInput[] | HourlyRateUncheckedCreateWithoutCompensationInput[]
    connectOrCreate?: HourlyRateCreateOrConnectWithoutCompensationInput | HourlyRateCreateOrConnectWithoutCompensationInput[]
    upsert?: HourlyRateUpsertWithWhereUniqueWithoutCompensationInput | HourlyRateUpsertWithWhereUniqueWithoutCompensationInput[]
    createMany?: HourlyRateCreateManyCompensationInputEnvelope
    set?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    disconnect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    delete?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    connect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    update?: HourlyRateUpdateWithWhereUniqueWithoutCompensationInput | HourlyRateUpdateWithWhereUniqueWithoutCompensationInput[]
    updateMany?: HourlyRateUpdateManyWithWhereWithoutCompensationInput | HourlyRateUpdateManyWithWhereWithoutCompensationInput[]
    deleteMany?: HourlyRateScalarWhereInput | HourlyRateScalarWhereInput[]
  }

  export type HourlyRateUncheckedUpdateManyWithoutCompensationNestedInput = {
    create?: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput> | HourlyRateCreateWithoutCompensationInput[] | HourlyRateUncheckedCreateWithoutCompensationInput[]
    connectOrCreate?: HourlyRateCreateOrConnectWithoutCompensationInput | HourlyRateCreateOrConnectWithoutCompensationInput[]
    upsert?: HourlyRateUpsertWithWhereUniqueWithoutCompensationInput | HourlyRateUpsertWithWhereUniqueWithoutCompensationInput[]
    createMany?: HourlyRateCreateManyCompensationInputEnvelope
    set?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    disconnect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    delete?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    connect?: HourlyRateWhereUniqueInput | HourlyRateWhereUniqueInput[]
    update?: HourlyRateUpdateWithWhereUniqueWithoutCompensationInput | HourlyRateUpdateWithWhereUniqueWithoutCompensationInput[]
    updateMany?: HourlyRateUpdateManyWithWhereWithoutCompensationInput | HourlyRateUpdateManyWithWhereWithoutCompensationInput[]
    deleteMany?: HourlyRateScalarWhereInput | HourlyRateScalarWhereInput[]
  }

  export type EmployeeCompensationCreateNestedOneWithoutHourlyRatesInput = {
    create?: XOR<EmployeeCompensationCreateWithoutHourlyRatesInput, EmployeeCompensationUncheckedCreateWithoutHourlyRatesInput>
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutHourlyRatesInput
    connect?: EmployeeCompensationWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationUpdateOneRequiredWithoutHourlyRatesNestedInput = {
    create?: XOR<EmployeeCompensationCreateWithoutHourlyRatesInput, EmployeeCompensationUncheckedCreateWithoutHourlyRatesInput>
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutHourlyRatesInput
    upsert?: EmployeeCompensationUpsertWithoutHourlyRatesInput
    connect?: EmployeeCompensationWhereUniqueInput
    update?: XOR<XOR<EmployeeCompensationUpdateToOneWithWhereWithoutHourlyRatesInput, EmployeeCompensationUpdateWithoutHourlyRatesInput>, EmployeeCompensationUncheckedUpdateWithoutHourlyRatesInput>
  }

  export type EmployeeCreateNestedOneWithoutPayStubsInput = {
    create?: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayStubsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayStubItemCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput> | PayStubItemCreateWithoutPayStubInput[] | PayStubItemUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayStubInput | PayStubItemCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubItemCreateManyPayStubInputEnvelope
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
  }

  export type PayStubItemUncheckedCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput> | PayStubItemCreateWithoutPayStubInput[] | PayStubItemUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayStubInput | PayStubItemCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubItemCreateManyPayStubInputEnvelope
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutPayStubsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayStubsInput
    upsert?: EmployeeUpsertWithoutPayStubsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayStubsInput, EmployeeUpdateWithoutPayStubsInput>, EmployeeUncheckedUpdateWithoutPayStubsInput>
  }

  export type PayStubItemUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput> | PayStubItemCreateWithoutPayStubInput[] | PayStubItemUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayStubInput | PayStubItemCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubItemUpsertWithWhereUniqueWithoutPayStubInput | PayStubItemUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubItemCreateManyPayStubInputEnvelope
    set?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    disconnect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    delete?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    update?: PayStubItemUpdateWithWhereUniqueWithoutPayStubInput | PayStubItemUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubItemUpdateManyWithWhereWithoutPayStubInput | PayStubItemUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
  }

  export type PayStubItemUncheckedUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput> | PayStubItemCreateWithoutPayStubInput[] | PayStubItemUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayStubInput | PayStubItemCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubItemUpsertWithWhereUniqueWithoutPayStubInput | PayStubItemUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubItemCreateManyPayStubInputEnvelope
    set?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    disconnect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    delete?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    update?: PayStubItemUpdateWithWhereUniqueWithoutPayStubInput | PayStubItemUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubItemUpdateManyWithWhereWithoutPayStubInput | PayStubItemUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
  }

  export type PayStubCreateNestedOneWithoutItemsInput = {
    create?: XOR<PayStubCreateWithoutItemsInput, PayStubUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutItemsInput
    connect?: PayStubWhereUniqueInput
  }

  export type PayrollItemCreateNestedOneWithoutPayStubItemInput = {
    create?: XOR<PayrollItemCreateWithoutPayStubItemInput, PayrollItemUncheckedCreateWithoutPayStubItemInput>
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayStubItemInput
    connect?: PayrollItemWhereUniqueInput
  }

  export type EnumPayStubItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayStubItemType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PayStubUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PayStubCreateWithoutItemsInput, PayStubUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutItemsInput
    upsert?: PayStubUpsertWithoutItemsInput
    connect?: PayStubWhereUniqueInput
    update?: XOR<XOR<PayStubUpdateToOneWithWhereWithoutItemsInput, PayStubUpdateWithoutItemsInput>, PayStubUncheckedUpdateWithoutItemsInput>
  }

  export type PayrollItemUpdateOneWithoutPayStubItemNestedInput = {
    create?: XOR<PayrollItemCreateWithoutPayStubItemInput, PayrollItemUncheckedCreateWithoutPayStubItemInput>
    connectOrCreate?: PayrollItemCreateOrConnectWithoutPayStubItemInput
    upsert?: PayrollItemUpsertWithoutPayStubItemInput
    disconnect?: PayrollItemWhereInput | boolean
    delete?: PayrollItemWhereInput | boolean
    connect?: PayrollItemWhereUniqueInput
    update?: XOR<XOR<PayrollItemUpdateToOneWithWhereWithoutPayStubItemInput, PayrollItemUpdateWithoutPayStubItemInput>, PayrollItemUncheckedUpdateWithoutPayStubItemInput>
  }

  export type OrganizationCreateNestedOneWithoutDefaultPayrollItemsInput = {
    create?: XOR<OrganizationCreateWithoutDefaultPayrollItemsInput, OrganizationUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultPayrollItemsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayrollGroupCreateNestedOneWithoutDefaultPayrollItemsInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultPayrollItemsInput
    connect?: PayrollGroupWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutDefaultPayrollItemsInput = {
    create?: XOR<EmployeeCreateWithoutDefaultPayrollItemsInput, EmployeeUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultPayrollItemsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayStubItemCreateNestedManyWithoutPayrollItemInput = {
    create?: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput> | PayStubItemCreateWithoutPayrollItemInput[] | PayStubItemUncheckedCreateWithoutPayrollItemInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayrollItemInput | PayStubItemCreateOrConnectWithoutPayrollItemInput[]
    createMany?: PayStubItemCreateManyPayrollItemInputEnvelope
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
  }

  export type PayStubItemUncheckedCreateNestedManyWithoutPayrollItemInput = {
    create?: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput> | PayStubItemCreateWithoutPayrollItemInput[] | PayStubItemUncheckedCreateWithoutPayrollItemInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayrollItemInput | PayStubItemCreateOrConnectWithoutPayrollItemInput[]
    createMany?: PayStubItemCreateManyPayrollItemInputEnvelope
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
  }

  export type EnumAbsMaxPeriodTypesFieldUpdateOperationsInput = {
    set?: $Enums.AbsMaxPeriodTypes
  }

  export type OrganizationUpdateOneWithoutDefaultPayrollItemsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDefaultPayrollItemsInput, OrganizationUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultPayrollItemsInput
    upsert?: OrganizationUpsertWithoutDefaultPayrollItemsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDefaultPayrollItemsInput, OrganizationUpdateWithoutDefaultPayrollItemsInput>, OrganizationUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type PayrollGroupUpdateOneWithoutDefaultPayrollItemsNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultPayrollItemsInput
    upsert?: PayrollGroupUpsertWithoutDefaultPayrollItemsInput
    disconnect?: PayrollGroupWhereInput | boolean
    delete?: PayrollGroupWhereInput | boolean
    connect?: PayrollGroupWhereUniqueInput
    update?: XOR<XOR<PayrollGroupUpdateToOneWithWhereWithoutDefaultPayrollItemsInput, PayrollGroupUpdateWithoutDefaultPayrollItemsInput>, PayrollGroupUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type EmployeeUpdateOneWithoutDefaultPayrollItemsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDefaultPayrollItemsInput, EmployeeUncheckedCreateWithoutDefaultPayrollItemsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultPayrollItemsInput
    upsert?: EmployeeUpsertWithoutDefaultPayrollItemsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDefaultPayrollItemsInput, EmployeeUpdateWithoutDefaultPayrollItemsInput>, EmployeeUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type PayStubItemUpdateManyWithoutPayrollItemNestedInput = {
    create?: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput> | PayStubItemCreateWithoutPayrollItemInput[] | PayStubItemUncheckedCreateWithoutPayrollItemInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayrollItemInput | PayStubItemCreateOrConnectWithoutPayrollItemInput[]
    upsert?: PayStubItemUpsertWithWhereUniqueWithoutPayrollItemInput | PayStubItemUpsertWithWhereUniqueWithoutPayrollItemInput[]
    createMany?: PayStubItemCreateManyPayrollItemInputEnvelope
    set?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    disconnect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    delete?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    update?: PayStubItemUpdateWithWhereUniqueWithoutPayrollItemInput | PayStubItemUpdateWithWhereUniqueWithoutPayrollItemInput[]
    updateMany?: PayStubItemUpdateManyWithWhereWithoutPayrollItemInput | PayStubItemUpdateManyWithWhereWithoutPayrollItemInput[]
    deleteMany?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
  }

  export type PayStubItemUncheckedUpdateManyWithoutPayrollItemNestedInput = {
    create?: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput> | PayStubItemCreateWithoutPayrollItemInput[] | PayStubItemUncheckedCreateWithoutPayrollItemInput[]
    connectOrCreate?: PayStubItemCreateOrConnectWithoutPayrollItemInput | PayStubItemCreateOrConnectWithoutPayrollItemInput[]
    upsert?: PayStubItemUpsertWithWhereUniqueWithoutPayrollItemInput | PayStubItemUpsertWithWhereUniqueWithoutPayrollItemInput[]
    createMany?: PayStubItemCreateManyPayrollItemInputEnvelope
    set?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    disconnect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    delete?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    connect?: PayStubItemWhereUniqueInput | PayStubItemWhereUniqueInput[]
    update?: PayStubItemUpdateWithWhereUniqueWithoutPayrollItemInput | PayStubItemUpdateWithWhereUniqueWithoutPayrollItemInput[]
    updateMany?: PayStubItemUpdateManyWithWhereWithoutPayrollItemInput | PayStubItemUpdateManyWithWhereWithoutPayrollItemInput[]
    deleteMany?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPayStubItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PayStubItemType | EnumPayStubItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayStubItemTypeFilter<$PrismaModel> | $Enums.PayStubItemType
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPayStubItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayStubItemType | EnumPayStubItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayStubItemType[] | ListEnumPayStubItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPayStubItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.PayStubItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayStubItemTypeFilter<$PrismaModel>
    _max?: NestedEnumPayStubItemTypeFilter<$PrismaModel>
  }

  export type NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbsMaxPeriodTypes | EnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel> | $Enums.AbsMaxPeriodTypes
  }

  export type NestedEnumAbsMaxPeriodTypesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbsMaxPeriodTypes | EnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    in?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbsMaxPeriodTypes[] | ListEnumAbsMaxPeriodTypesFieldRefInput<$PrismaModel>
    not?: NestedEnumAbsMaxPeriodTypesWithAggregatesFilter<$PrismaModel> | $Enums.AbsMaxPeriodTypes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel>
    _max?: NestedEnumAbsMaxPeriodTypesFilter<$PrismaModel>
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
    skipDuplicates?: boolean
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
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutInviteCodesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput
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
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutInviteCodesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserCreateWithoutMembershipsInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    allocatedOrganizations?: number
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    uuid?: string
    isActive: boolean
    firstName: string
    lastName: string
    email: string
    username: string
    passHash: string
    allocatedOrganizations?: number
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
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembershipsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput
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
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passHash?: StringFieldUpdateOperationsInput | string
    allocatedOrganizations?: IntFieldUpdateOperationsInput | number
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
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembershipsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    compensations?: EmployeeCompensationCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutOrganizationInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutOrganizationInput, EmployeeUncheckedCreateWithoutOrganizationInput>
  }

  export type EmployeeCreateManyOrganizationInputEnvelope = {
    data: EmployeeCreateManyOrganizationInput | EmployeeCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PayrollGroupCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    compensations?: EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupCreateOrConnectWithoutOrganizationInput = {
    where: PayrollGroupWhereUniqueInput
    create: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput>
  }

  export type PayrollGroupCreateManyOrganizationInputEnvelope = {
    data: PayrollGroupCreateManyOrganizationInput | PayrollGroupCreateManyOrganizationInput[]
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
  }

  export type PayrollItemCreateWithoutOrganizationInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultPayrollItemsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultPayrollItemsInput
    PayStubItem?: PayStubItemCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemCreateOrConnectWithoutOrganizationInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput>
  }

  export type PayrollItemCreateManyOrganizationInputEnvelope = {
    data: PayrollItemCreateManyOrganizationInput | PayrollItemCreateManyOrganizationInput[]
    skipDuplicates?: boolean
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
    filingStatus?: StringFilter<"Employee"> | string
    dependants?: IntFilter<"Employee"> | number
    isDeleted?: BoolFilter<"Employee"> | boolean
    organizationId?: StringFilter<"Employee"> | string
  }

  export type PayrollGroupUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PayrollGroupWhereUniqueInput
    update: XOR<PayrollGroupUpdateWithoutOrganizationInput, PayrollGroupUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PayrollGroupCreateWithoutOrganizationInput, PayrollGroupUncheckedCreateWithoutOrganizationInput>
  }

  export type PayrollGroupUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PayrollGroupWhereUniqueInput
    data: XOR<PayrollGroupUpdateWithoutOrganizationInput, PayrollGroupUncheckedUpdateWithoutOrganizationInput>
  }

  export type PayrollGroupUpdateManyWithWhereWithoutOrganizationInput = {
    where: PayrollGroupScalarWhereInput
    data: XOR<PayrollGroupUpdateManyMutationInput, PayrollGroupUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PayrollGroupScalarWhereInput = {
    AND?: PayrollGroupScalarWhereInput | PayrollGroupScalarWhereInput[]
    OR?: PayrollGroupScalarWhereInput[]
    NOT?: PayrollGroupScalarWhereInput | PayrollGroupScalarWhereInput[]
    uuid?: StringFilter<"PayrollGroup"> | string
    name?: StringFilter<"PayrollGroup"> | string
    description?: StringFilter<"PayrollGroup"> | string
    payFrequency?: IntFilter<"PayrollGroup"> | number
    payRefDate?: DateTimeFilter<"PayrollGroup"> | Date | string
    organizationId?: StringFilter<"PayrollGroup"> | string
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

  export type PayrollItemUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutOrganizationInput, PayrollItemUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PayrollItemCreateWithoutOrganizationInput, PayrollItemUncheckedCreateWithoutOrganizationInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutOrganizationInput, PayrollItemUncheckedUpdateWithoutOrganizationInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutOrganizationInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PayrollItemScalarWhereInput = {
    AND?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    OR?: PayrollItemScalarWhereInput[]
    NOT?: PayrollItemScalarWhereInput | PayrollItemScalarWhereInput[]
    uuid?: StringFilter<"PayrollItem"> | string
    organizationId?: StringNullableFilter<"PayrollItem"> | string | null
    payrollGroupId?: StringNullableFilter<"PayrollItem"> | string | null
    employeeId?: StringNullableFilter<"PayrollItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayrollItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayrollItem"> | string
    description?: StringNullableFilter<"PayrollItem"> | string | null
    percent?: DecimalNullableFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFilter<"PayrollItem"> | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFilter<"PayrollItem"> | Decimal | DecimalJsLike | number | string
  }

  export type OrganizationCreateWithoutEmployeesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutEmployeesInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutEmployeesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutEmployeesInput, OrganizationUncheckedCreateWithoutEmployeesInput>
  }

  export type EmployeeCompensationCreateWithoutEmployeeInput = {
    uuid?: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    payrollGroup: PayrollGroupCreateNestedOneWithoutCompensationsInput
    hourlyRates?: HourlyRateCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationUncheckedCreateWithoutEmployeeInput = {
    uuid?: string
    payrollGroupId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeCompensationWhereUniqueInput
    create: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeCompensationCreateManyEmployeeInputEnvelope = {
    data: EmployeeCompensationCreateManyEmployeeInput | EmployeeCompensationCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayStubCreateWithoutEmployeeInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    items?: PayStubItemCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateWithoutEmployeeInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    items?: PayStubItemUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubCreateOrConnectWithoutEmployeeInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubCreateManyEmployeeInputEnvelope = {
    data: PayStubCreateManyEmployeeInput | PayStubCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayrollItemCreateWithoutEmployeeInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    organization?: OrganizationCreateNestedOneWithoutDefaultPayrollItemsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultPayrollItemsInput
    PayStubItem?: PayStubItemCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemUncheckedCreateWithoutEmployeeInput = {
    uuid?: string
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemCreateOrConnectWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollItemCreateManyEmployeeInputEnvelope = {
    data: PayrollItemCreateManyEmployeeInput | PayrollItemCreateManyEmployeeInput[]
    skipDuplicates?: boolean
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
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutEmployeesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeCompensationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeCompensationWhereUniqueInput
    update: XOR<EmployeeCompensationUpdateWithoutEmployeeInput, EmployeeCompensationUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeCompensationCreateWithoutEmployeeInput, EmployeeCompensationUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeCompensationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeCompensationWhereUniqueInput
    data: XOR<EmployeeCompensationUpdateWithoutEmployeeInput, EmployeeCompensationUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeCompensationUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeCompensationScalarWhereInput
    data: XOR<EmployeeCompensationUpdateManyMutationInput, EmployeeCompensationUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeCompensationScalarWhereInput = {
    AND?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
    OR?: EmployeeCompensationScalarWhereInput[]
    NOT?: EmployeeCompensationScalarWhereInput | EmployeeCompensationScalarWhereInput[]
    uuid?: StringFilter<"EmployeeCompensation"> | string
    employeeId?: StringFilter<"EmployeeCompensation"> | string
    payrollGroupId?: StringFilter<"EmployeeCompensation"> | string
    isSalary?: BoolFilter<"EmployeeCompensation"> | boolean
    salaryAmount?: DecimalNullableFilter<"EmployeeCompensation"> | Decimal | DecimalJsLike | number | string | null
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
    payDate?: DateTimeFilter<"PayStub"> | Date | string
    periodStart?: DateTimeFilter<"PayStub"> | Date | string
    periodEnd?: DateTimeFilter<"PayStub"> | Date | string
    locked?: BoolFilter<"PayStub"> | boolean
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
  }

  export type PayrollItemUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutEmployeeInput, PayrollItemUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayrollItemCreateWithoutEmployeeInput, PayrollItemUncheckedCreateWithoutEmployeeInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutEmployeeInput, PayrollItemUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type OrganizationCreateWithoutPayrollGroupsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutPayrollGroupsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutPayrollGroupsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutPayrollGroupsInput, OrganizationUncheckedCreateWithoutPayrollGroupsInput>
  }

  export type EmployeeCompensationCreateWithoutPayrollGroupInput = {
    uuid?: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    employee: EmployeeCreateNestedOneWithoutCompensationsInput
    hourlyRates?: HourlyRateCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput = {
    uuid?: string
    employeeId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedCreateNestedManyWithoutCompensationInput
  }

  export type EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput = {
    where: EmployeeCompensationWhereUniqueInput
    create: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput>
  }

  export type EmployeeCompensationCreateManyPayrollGroupInputEnvelope = {
    data: EmployeeCompensationCreateManyPayrollGroupInput | EmployeeCompensationCreateManyPayrollGroupInput[]
    skipDuplicates?: boolean
  }

  export type PayrollItemCreateWithoutPayrollGroupInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    organization?: OrganizationCreateNestedOneWithoutDefaultPayrollItemsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultPayrollItemsInput
    PayStubItem?: PayStubItemCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemUncheckedCreateWithoutPayrollGroupInput = {
    uuid?: string
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedCreateNestedManyWithoutPayrollItemInput
  }

  export type PayrollItemCreateOrConnectWithoutPayrollGroupInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayrollItemCreateManyPayrollGroupInputEnvelope = {
    data: PayrollItemCreateManyPayrollGroupInput | PayrollItemCreateManyPayrollGroupInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutPayrollGroupsInput = {
    update: XOR<OrganizationUpdateWithoutPayrollGroupsInput, OrganizationUncheckedUpdateWithoutPayrollGroupsInput>
    create: XOR<OrganizationCreateWithoutPayrollGroupsInput, OrganizationUncheckedCreateWithoutPayrollGroupsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutPayrollGroupsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutPayrollGroupsInput, OrganizationUncheckedUpdateWithoutPayrollGroupsInput>
  }

  export type OrganizationUpdateWithoutPayrollGroupsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutPayrollGroupsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type EmployeeCompensationUpsertWithWhereUniqueWithoutPayrollGroupInput = {
    where: EmployeeCompensationWhereUniqueInput
    update: XOR<EmployeeCompensationUpdateWithoutPayrollGroupInput, EmployeeCompensationUncheckedUpdateWithoutPayrollGroupInput>
    create: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput>
  }

  export type EmployeeCompensationUpdateWithWhereUniqueWithoutPayrollGroupInput = {
    where: EmployeeCompensationWhereUniqueInput
    data: XOR<EmployeeCompensationUpdateWithoutPayrollGroupInput, EmployeeCompensationUncheckedUpdateWithoutPayrollGroupInput>
  }

  export type EmployeeCompensationUpdateManyWithWhereWithoutPayrollGroupInput = {
    where: EmployeeCompensationScalarWhereInput
    data: XOR<EmployeeCompensationUpdateManyMutationInput, EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupInput>
  }

  export type PayrollItemUpsertWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayrollItemWhereUniqueInput
    update: XOR<PayrollItemUpdateWithoutPayrollGroupInput, PayrollItemUncheckedUpdateWithoutPayrollGroupInput>
    create: XOR<PayrollItemCreateWithoutPayrollGroupInput, PayrollItemUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayrollItemUpdateWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayrollItemWhereUniqueInput
    data: XOR<PayrollItemUpdateWithoutPayrollGroupInput, PayrollItemUncheckedUpdateWithoutPayrollGroupInput>
  }

  export type PayrollItemUpdateManyWithWhereWithoutPayrollGroupInput = {
    where: PayrollItemScalarWhereInput
    data: XOR<PayrollItemUpdateManyMutationInput, PayrollItemUncheckedUpdateManyWithoutPayrollGroupInput>
  }

  export type EmployeeCreateWithoutCompensationsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutCompensationsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutCompensationsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutCompensationsInput, EmployeeUncheckedCreateWithoutCompensationsInput>
  }

  export type PayrollGroupCreateWithoutCompensationsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organization: OrganizationCreateNestedOneWithoutPayrollGroupsInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutCompensationsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupCreateOrConnectWithoutCompensationsInput = {
    where: PayrollGroupWhereUniqueInput
    create: XOR<PayrollGroupCreateWithoutCompensationsInput, PayrollGroupUncheckedCreateWithoutCompensationsInput>
  }

  export type HourlyRateCreateWithoutCompensationInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
  }

  export type HourlyRateUncheckedCreateWithoutCompensationInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
  }

  export type HourlyRateCreateOrConnectWithoutCompensationInput = {
    where: HourlyRateWhereUniqueInput
    create: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput>
  }

  export type HourlyRateCreateManyCompensationInputEnvelope = {
    data: HourlyRateCreateManyCompensationInput | HourlyRateCreateManyCompensationInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutCompensationsInput = {
    update: XOR<EmployeeUpdateWithoutCompensationsInput, EmployeeUncheckedUpdateWithoutCompensationsInput>
    create: XOR<EmployeeCreateWithoutCompensationsInput, EmployeeUncheckedCreateWithoutCompensationsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutCompensationsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutCompensationsInput, EmployeeUncheckedUpdateWithoutCompensationsInput>
  }

  export type EmployeeUpdateWithoutCompensationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutCompensationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayrollGroupUpsertWithoutCompensationsInput = {
    update: XOR<PayrollGroupUpdateWithoutCompensationsInput, PayrollGroupUncheckedUpdateWithoutCompensationsInput>
    create: XOR<PayrollGroupCreateWithoutCompensationsInput, PayrollGroupUncheckedCreateWithoutCompensationsInput>
    where?: PayrollGroupWhereInput
  }

  export type PayrollGroupUpdateToOneWithWhereWithoutCompensationsInput = {
    where?: PayrollGroupWhereInput
    data: XOR<PayrollGroupUpdateWithoutCompensationsInput, PayrollGroupUncheckedUpdateWithoutCompensationsInput>
  }

  export type PayrollGroupUpdateWithoutCompensationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutCompensationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type HourlyRateUpsertWithWhereUniqueWithoutCompensationInput = {
    where: HourlyRateWhereUniqueInput
    update: XOR<HourlyRateUpdateWithoutCompensationInput, HourlyRateUncheckedUpdateWithoutCompensationInput>
    create: XOR<HourlyRateCreateWithoutCompensationInput, HourlyRateUncheckedCreateWithoutCompensationInput>
  }

  export type HourlyRateUpdateWithWhereUniqueWithoutCompensationInput = {
    where: HourlyRateWhereUniqueInput
    data: XOR<HourlyRateUpdateWithoutCompensationInput, HourlyRateUncheckedUpdateWithoutCompensationInput>
  }

  export type HourlyRateUpdateManyWithWhereWithoutCompensationInput = {
    where: HourlyRateScalarWhereInput
    data: XOR<HourlyRateUpdateManyMutationInput, HourlyRateUncheckedUpdateManyWithoutCompensationInput>
  }

  export type HourlyRateScalarWhereInput = {
    AND?: HourlyRateScalarWhereInput | HourlyRateScalarWhereInput[]
    OR?: HourlyRateScalarWhereInput[]
    NOT?: HourlyRateScalarWhereInput | HourlyRateScalarWhereInput[]
    uuid?: StringFilter<"HourlyRate"> | string
    name?: StringFilter<"HourlyRate"> | string
    rate?: DecimalFilter<"HourlyRate"> | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFilter<"HourlyRate"> | boolean
    compensationId?: StringFilter<"HourlyRate"> | string
  }

  export type EmployeeCompensationCreateWithoutHourlyRatesInput = {
    uuid?: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
    employee: EmployeeCreateNestedOneWithoutCompensationsInput
    payrollGroup: PayrollGroupCreateNestedOneWithoutCompensationsInput
  }

  export type EmployeeCompensationUncheckedCreateWithoutHourlyRatesInput = {
    uuid?: string
    employeeId: string
    payrollGroupId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type EmployeeCompensationCreateOrConnectWithoutHourlyRatesInput = {
    where: EmployeeCompensationWhereUniqueInput
    create: XOR<EmployeeCompensationCreateWithoutHourlyRatesInput, EmployeeCompensationUncheckedCreateWithoutHourlyRatesInput>
  }

  export type EmployeeCompensationUpsertWithoutHourlyRatesInput = {
    update: XOR<EmployeeCompensationUpdateWithoutHourlyRatesInput, EmployeeCompensationUncheckedUpdateWithoutHourlyRatesInput>
    create: XOR<EmployeeCompensationCreateWithoutHourlyRatesInput, EmployeeCompensationUncheckedCreateWithoutHourlyRatesInput>
    where?: EmployeeCompensationWhereInput
  }

  export type EmployeeCompensationUpdateToOneWithWhereWithoutHourlyRatesInput = {
    where?: EmployeeCompensationWhereInput
    data: XOR<EmployeeCompensationUpdateWithoutHourlyRatesInput, EmployeeCompensationUncheckedUpdateWithoutHourlyRatesInput>
  }

  export type EmployeeCompensationUpdateWithoutHourlyRatesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee?: EmployeeUpdateOneRequiredWithoutCompensationsNestedInput
    payrollGroup?: PayrollGroupUpdateOneRequiredWithoutCompensationsNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateWithoutHourlyRatesInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemCreateNestedManyWithoutEmployeeInput
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutEmployeeInput
    defaultPayrollItems?: PayrollItemUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayStubsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
  }

  export type PayStubItemCreateWithoutPayStubInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    payrollItem?: PayrollItemCreateNestedOneWithoutPayStubItemInput
  }

  export type PayStubItemUncheckedCreateWithoutPayStubInput = {
    uuid?: string
    payrollItemId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemCreateOrConnectWithoutPayStubInput = {
    where: PayStubItemWhereUniqueInput
    create: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubItemCreateManyPayStubInputEnvelope = {
    data: PayStubItemCreateManyPayStubInput | PayStubItemCreateManyPayStubInput[]
    skipDuplicates?: boolean
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayStubItemUpsertWithWhereUniqueWithoutPayStubInput = {
    where: PayStubItemWhereUniqueInput
    update: XOR<PayStubItemUpdateWithoutPayStubInput, PayStubItemUncheckedUpdateWithoutPayStubInput>
    create: XOR<PayStubItemCreateWithoutPayStubInput, PayStubItemUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubItemUpdateWithWhereUniqueWithoutPayStubInput = {
    where: PayStubItemWhereUniqueInput
    data: XOR<PayStubItemUpdateWithoutPayStubInput, PayStubItemUncheckedUpdateWithoutPayStubInput>
  }

  export type PayStubItemUpdateManyWithWhereWithoutPayStubInput = {
    where: PayStubItemScalarWhereInput
    data: XOR<PayStubItemUpdateManyMutationInput, PayStubItemUncheckedUpdateManyWithoutPayStubInput>
  }

  export type PayStubItemScalarWhereInput = {
    AND?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
    OR?: PayStubItemScalarWhereInput[]
    NOT?: PayStubItemScalarWhereInput | PayStubItemScalarWhereInput[]
    uuid?: StringFilter<"PayStubItem"> | string
    payStubId?: StringFilter<"PayStubItem"> | string
    payrollItemId?: StringNullableFilter<"PayStubItem"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubItem"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubItem"> | string
    description?: StringNullableFilter<"PayStubItem"> | string | null
    hours?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    percent?: DecimalNullableFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFilter<"PayStubItem"> | Decimal | DecimalJsLike | number | string
  }

  export type PayStubCreateWithoutItemsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
  }

  export type PayStubUncheckedCreateWithoutItemsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
  }

  export type PayStubCreateOrConnectWithoutItemsInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutItemsInput, PayStubUncheckedCreateWithoutItemsInput>
  }

  export type PayrollItemCreateWithoutPayStubItemInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
    organization?: OrganizationCreateNestedOneWithoutDefaultPayrollItemsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultPayrollItemsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultPayrollItemsInput
  }

  export type PayrollItemUncheckedCreateWithoutPayStubItemInput = {
    uuid?: string
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemCreateOrConnectWithoutPayStubItemInput = {
    where: PayrollItemWhereUniqueInput
    create: XOR<PayrollItemCreateWithoutPayStubItemInput, PayrollItemUncheckedCreateWithoutPayStubItemInput>
  }

  export type PayStubUpsertWithoutItemsInput = {
    update: XOR<PayStubUpdateWithoutItemsInput, PayStubUncheckedUpdateWithoutItemsInput>
    create: XOR<PayStubCreateWithoutItemsInput, PayStubUncheckedCreateWithoutItemsInput>
    where?: PayStubWhereInput
  }

  export type PayStubUpdateToOneWithWhereWithoutItemsInput = {
    where?: PayStubWhereInput
    data: XOR<PayStubUpdateWithoutItemsInput, PayStubUncheckedUpdateWithoutItemsInput>
  }

  export type PayStubUpdateWithoutItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
  }

  export type PayStubUncheckedUpdateWithoutItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PayrollItemUpsertWithoutPayStubItemInput = {
    update: XOR<PayrollItemUpdateWithoutPayStubItemInput, PayrollItemUncheckedUpdateWithoutPayStubItemInput>
    create: XOR<PayrollItemCreateWithoutPayStubItemInput, PayrollItemUncheckedCreateWithoutPayStubItemInput>
    where?: PayrollItemWhereInput
  }

  export type PayrollItemUpdateToOneWithWhereWithoutPayStubItemInput = {
    where?: PayrollItemWhereInput
    data: XOR<PayrollItemUpdateWithoutPayStubItemInput, PayrollItemUncheckedUpdateWithoutPayStubItemInput>
  }

  export type PayrollItemUpdateWithoutPayStubItemInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    organization?: OrganizationUpdateOneWithoutDefaultPayrollItemsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultPayrollItemsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultPayrollItemsNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutPayStubItemInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrganizationCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDefaultPayrollItemsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDefaultPayrollItemsInput, OrganizationUncheckedCreateWithoutDefaultPayrollItemsInput>
  }

  export type PayrollGroupCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organization: OrganizationCreateNestedOneWithoutPayrollGroupsInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupCreateOrConnectWithoutDefaultPayrollItemsInput = {
    where: PayrollGroupWhereUniqueInput
    create: XOR<PayrollGroupCreateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedCreateWithoutDefaultPayrollItemsInput>
  }

  export type EmployeeCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organization: OrganizationCreateNestedOneWithoutEmployeesInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDefaultPayrollItemsInput = {
    uuid?: string
    firstName?: string
    middleName?: string
    lastName?: string
    notes?: string
    address?: string
    email?: string
    phoneNumber?: string
    ssn?: string
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutEmployeeInput
    payStubs?: PayStubUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDefaultPayrollItemsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDefaultPayrollItemsInput, EmployeeUncheckedCreateWithoutDefaultPayrollItemsInput>
  }

  export type PayStubItemCreateWithoutPayrollItemInput = {
    uuid?: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    payStub: PayStubCreateNestedOneWithoutItemsInput
  }

  export type PayStubItemUncheckedCreateWithoutPayrollItemInput = {
    uuid?: string
    payStubId: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemCreateOrConnectWithoutPayrollItemInput = {
    where: PayStubItemWhereUniqueInput
    create: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput>
  }

  export type PayStubItemCreateManyPayrollItemInputEnvelope = {
    data: PayStubItemCreateManyPayrollItemInput | PayStubItemCreateManyPayrollItemInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDefaultPayrollItemsInput = {
    update: XOR<OrganizationUpdateWithoutDefaultPayrollItemsInput, OrganizationUncheckedUpdateWithoutDefaultPayrollItemsInput>
    create: XOR<OrganizationCreateWithoutDefaultPayrollItemsInput, OrganizationUncheckedCreateWithoutDefaultPayrollItemsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDefaultPayrollItemsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDefaultPayrollItemsInput, OrganizationUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type OrganizationUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PayrollGroupUpsertWithoutDefaultPayrollItemsInput = {
    update: XOR<PayrollGroupUpdateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedUpdateWithoutDefaultPayrollItemsInput>
    create: XOR<PayrollGroupCreateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedCreateWithoutDefaultPayrollItemsInput>
    where?: PayrollGroupWhereInput
  }

  export type PayrollGroupUpdateToOneWithWhereWithoutDefaultPayrollItemsInput = {
    where?: PayrollGroupWhereInput
    data: XOR<PayrollGroupUpdateWithoutDefaultPayrollItemsInput, PayrollGroupUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type PayrollGroupUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type EmployeeUpsertWithoutDefaultPayrollItemsInput = {
    update: XOR<EmployeeUpdateWithoutDefaultPayrollItemsInput, EmployeeUncheckedUpdateWithoutDefaultPayrollItemsInput>
    create: XOR<EmployeeCreateWithoutDefaultPayrollItemsInput, EmployeeUncheckedCreateWithoutDefaultPayrollItemsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDefaultPayrollItemsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDefaultPayrollItemsInput, EmployeeUncheckedUpdateWithoutDefaultPayrollItemsInput>
  }

  export type EmployeeUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organization?: OrganizationUpdateOneRequiredWithoutEmployeesNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDefaultPayrollItemsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    ssn?: StringFieldUpdateOperationsInput | string
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayStubItemUpsertWithWhereUniqueWithoutPayrollItemInput = {
    where: PayStubItemWhereUniqueInput
    update: XOR<PayStubItemUpdateWithoutPayrollItemInput, PayStubItemUncheckedUpdateWithoutPayrollItemInput>
    create: XOR<PayStubItemCreateWithoutPayrollItemInput, PayStubItemUncheckedCreateWithoutPayrollItemInput>
  }

  export type PayStubItemUpdateWithWhereUniqueWithoutPayrollItemInput = {
    where: PayStubItemWhereUniqueInput
    data: XOR<PayStubItemUpdateWithoutPayrollItemInput, PayStubItemUncheckedUpdateWithoutPayrollItemInput>
  }

  export type PayStubItemUpdateManyWithWhereWithoutPayrollItemInput = {
    where: PayStubItemScalarWhereInput
    data: XOR<PayStubItemUpdateManyMutationInput, PayStubItemUncheckedUpdateManyWithoutPayrollItemInput>
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
    filingStatus?: string
    dependants?: number
    isDeleted?: boolean
  }

  export type PayrollGroupCreateManyOrganizationInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
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

  export type PayrollItemCreateManyOrganizationInput = {
    uuid?: string
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    compensations?: EmployeeCompensationUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutEmployeeNestedInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutEmployeeNestedInput
    payStubs?: PayStubUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutEmployeeNestedInput
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
    filingStatus?: StringFieldUpdateOperationsInput | string
    dependants?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PayrollGroupUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
    defaultPayrollItems?: PayrollItemUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultPayrollItems?: PayrollItemUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PayrollItemUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultPayrollItemsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultPayrollItemsNestedInput
    PayStubItem?: PayStubItemUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateManyWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationCreateManyEmployeeInput = {
    uuid?: string
    payrollGroupId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubCreateManyEmployeeInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    locked?: boolean
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemCreateManyEmployeeInput = {
    uuid?: string
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payrollGroup?: PayrollGroupUpdateOneRequiredWithoutCompensationsNestedInput
    hourlyRates?: HourlyRateUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateManyWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollGroupId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    items?: PayStubItemUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    items?: PayStubItemUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateManyWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    locked?: BoolFieldUpdateOperationsInput | boolean
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayrollItemUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    organization?: OrganizationUpdateOneWithoutDefaultPayrollItemsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultPayrollItemsNestedInput
    PayStubItem?: PayStubItemUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateManyWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationCreateManyPayrollGroupInput = {
    uuid?: string
    employeeId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayrollItemCreateManyPayrollGroupInput = {
    uuid?: string
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
    absMaxPeriod?: $Enums.AbsMaxPeriodTypes
    absMax?: Decimal | DecimalJsLike | number | string
  }

  export type EmployeeCompensationUpdateWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee?: EmployeeUpdateOneRequiredWithoutCompensationsNestedInput
    hourlyRates?: HourlyRateUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRates?: HourlyRateUncheckedUpdateManyWithoutCompensationNestedInput
  }

  export type EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    isSalary?: BoolFieldUpdateOperationsInput | boolean
    salaryAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayrollItemUpdateWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    organization?: OrganizationUpdateOneWithoutDefaultPayrollItemsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultPayrollItemsNestedInput
    PayStubItem?: PayStubItemUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    PayStubItem?: PayStubItemUncheckedUpdateManyWithoutPayrollItemNestedInput
  }

  export type PayrollItemUncheckedUpdateManyWithoutPayrollGroupInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    absMaxPeriod?: EnumAbsMaxPeriodTypesFieldUpdateOperationsInput | $Enums.AbsMaxPeriodTypes
    absMax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type HourlyRateCreateManyCompensationInput = {
    uuid?: string
    name: string
    rate: Decimal | DecimalJsLike | number | string
    canOvertime: boolean
  }

  export type HourlyRateUpdateWithoutCompensationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HourlyRateUncheckedUpdateWithoutCompensationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HourlyRateUncheckedUpdateManyWithoutCompensationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    canOvertime?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PayStubItemCreateManyPayStubInput = {
    uuid?: string
    payrollItemId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUpdateWithoutPayStubInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payrollItem?: PayrollItemUpdateOneWithoutPayStubItemNestedInput
  }

  export type PayStubItemUncheckedUpdateWithoutPayStubInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollItemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUncheckedUpdateManyWithoutPayStubInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payrollItemId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemCreateManyPayrollItemInput = {
    uuid?: string
    payStubId: string
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    percent?: Decimal | DecimalJsLike | number | string | null
    amount: Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUpdateWithoutPayrollItemInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payStub?: PayStubUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PayStubItemUncheckedUpdateWithoutPayrollItemInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubItemUncheckedUpdateManyWithoutPayrollItemInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    percent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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