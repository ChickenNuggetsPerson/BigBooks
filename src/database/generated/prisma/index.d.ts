
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
 * Model PayStubEarning
 * 
 */
export type PayStubEarning = $Result.DefaultSelection<Prisma.$PayStubEarningPayload>
/**
 * Model PayStubDeduction
 * 
 */
export type PayStubDeduction = $Result.DefaultSelection<Prisma.$PayStubDeductionPayload>

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

}

export type PayStubItemType = $Enums.PayStubItemType

export const PayStubItemType: typeof $Enums.PayStubItemType

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
   * `prisma.payStubEarning`: Exposes CRUD operations for the **PayStubEarning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayStubEarnings
    * const payStubEarnings = await prisma.payStubEarning.findMany()
    * ```
    */
  get payStubEarning(): Prisma.PayStubEarningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payStubDeduction`: Exposes CRUD operations for the **PayStubDeduction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayStubDeductions
    * const payStubDeductions = await prisma.payStubDeduction.findMany()
    * ```
    */
  get payStubDeduction(): Prisma.PayStubDeductionDelegate<ExtArgs, ClientOptions>;
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
    PayStubEarning: 'PayStubEarning',
    PayStubDeduction: 'PayStubDeduction'
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
      modelProps: "user" | "registrationCode" | "inviteCode" | "role" | "organization" | "employee" | "payrollGroup" | "employeeCompensation" | "hourlyRate" | "payStub" | "payStubEarning" | "payStubDeduction"
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
      PayStubEarning: {
        payload: Prisma.$PayStubEarningPayload<ExtArgs>
        fields: Prisma.PayStubEarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayStubEarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayStubEarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          findFirst: {
            args: Prisma.PayStubEarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayStubEarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          findMany: {
            args: Prisma.PayStubEarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>[]
          }
          create: {
            args: Prisma.PayStubEarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          createMany: {
            args: Prisma.PayStubEarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayStubEarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>[]
          }
          delete: {
            args: Prisma.PayStubEarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          update: {
            args: Prisma.PayStubEarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          deleteMany: {
            args: Prisma.PayStubEarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayStubEarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayStubEarningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>[]
          }
          upsert: {
            args: Prisma.PayStubEarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubEarningPayload>
          }
          aggregate: {
            args: Prisma.PayStubEarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayStubEarning>
          }
          groupBy: {
            args: Prisma.PayStubEarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayStubEarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayStubEarningCountArgs<ExtArgs>
            result: $Utils.Optional<PayStubEarningCountAggregateOutputType> | number
          }
        }
      }
      PayStubDeduction: {
        payload: Prisma.$PayStubDeductionPayload<ExtArgs>
        fields: Prisma.PayStubDeductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayStubDeductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayStubDeductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          findFirst: {
            args: Prisma.PayStubDeductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayStubDeductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          findMany: {
            args: Prisma.PayStubDeductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>[]
          }
          create: {
            args: Prisma.PayStubDeductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          createMany: {
            args: Prisma.PayStubDeductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayStubDeductionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>[]
          }
          delete: {
            args: Prisma.PayStubDeductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          update: {
            args: Prisma.PayStubDeductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          deleteMany: {
            args: Prisma.PayStubDeductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayStubDeductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayStubDeductionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>[]
          }
          upsert: {
            args: Prisma.PayStubDeductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayStubDeductionPayload>
          }
          aggregate: {
            args: Prisma.PayStubDeductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayStubDeduction>
          }
          groupBy: {
            args: Prisma.PayStubDeductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayStubDeductionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayStubDeductionCountArgs<ExtArgs>
            result: $Utils.Optional<PayStubDeductionCountAggregateOutputType> | number
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
    payStubEarning?: PayStubEarningOmit
    payStubDeduction?: PayStubDeductionOmit
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
    defaultEarnings: number
    defaultDeductions: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | OrganizationCountOutputTypeCountEmployeesArgs
    payrollGroups?: boolean | OrganizationCountOutputTypeCountPayrollGroupsArgs
    inviteCodes?: boolean | OrganizationCountOutputTypeCountInviteCodesArgs
    memberships?: boolean | OrganizationCountOutputTypeCountMembershipsArgs
    defaultEarnings?: boolean | OrganizationCountOutputTypeCountDefaultEarningsArgs
    defaultDeductions?: boolean | OrganizationCountOutputTypeCountDefaultDeductionsArgs
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
  export type OrganizationCountOutputTypeCountDefaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubEarningWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDefaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubDeductionWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    compensations: number
    payStubs: number
    defaultEarnings: number
    defaultDeductions: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | EmployeeCountOutputTypeCountCompensationsArgs
    payStubs?: boolean | EmployeeCountOutputTypeCountPayStubsArgs
    defaultEarnings?: boolean | EmployeeCountOutputTypeCountDefaultEarningsArgs
    defaultDeductions?: boolean | EmployeeCountOutputTypeCountDefaultDeductionsArgs
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
  export type EmployeeCountOutputTypeCountDefaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubEarningWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountDefaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubDeductionWhereInput
  }


  /**
   * Count Type PayrollGroupCountOutputType
   */

  export type PayrollGroupCountOutputType = {
    compensations: number
    defaultEarnings: number
    defaultDeductions: number
  }

  export type PayrollGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compensations?: boolean | PayrollGroupCountOutputTypeCountCompensationsArgs
    defaultEarnings?: boolean | PayrollGroupCountOutputTypeCountDefaultEarningsArgs
    defaultDeductions?: boolean | PayrollGroupCountOutputTypeCountDefaultDeductionsArgs
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
  export type PayrollGroupCountOutputTypeCountDefaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubEarningWhereInput
  }

  /**
   * PayrollGroupCountOutputType without action
   */
  export type PayrollGroupCountOutputTypeCountDefaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubDeductionWhereInput
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
    earnings: number
    deductions: number
  }

  export type PayStubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    earnings?: boolean | PayStubCountOutputTypeCountEarningsArgs
    deductions?: boolean | PayStubCountOutputTypeCountDeductionsArgs
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
  export type PayStubCountOutputTypeCountEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubEarningWhereInput
  }

  /**
   * PayStubCountOutputType without action
   */
  export type PayStubCountOutputTypeCountDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubDeductionWhereInput
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
    defaultEarnings?: boolean | Organization$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | Organization$defaultDeductionsArgs<ExtArgs>
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
    defaultEarnings?: boolean | Organization$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | Organization$defaultDeductionsArgs<ExtArgs>
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
      defaultEarnings: Prisma.$PayStubEarningPayload<ExtArgs>[]
      defaultDeductions: Prisma.$PayStubDeductionPayload<ExtArgs>[]
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
    defaultEarnings<T extends Organization$defaultEarningsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$defaultEarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultDeductions<T extends Organization$defaultDeductionsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$defaultDeductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Organization.defaultEarnings
   */
  export type Organization$defaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    where?: PayStubEarningWhereInput
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    cursor?: PayStubEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * Organization.defaultDeductions
   */
  export type Organization$defaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    where?: PayStubDeductionWhereInput
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    cursor?: PayStubDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
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
    defaultEarnings?: boolean | Employee$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | Employee$defaultDeductionsArgs<ExtArgs>
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
    defaultEarnings?: boolean | Employee$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | Employee$defaultDeductionsArgs<ExtArgs>
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
      defaultEarnings: Prisma.$PayStubEarningPayload<ExtArgs>[]
      defaultDeductions: Prisma.$PayStubDeductionPayload<ExtArgs>[]
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
    defaultEarnings<T extends Employee$defaultEarningsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$defaultEarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultDeductions<T extends Employee$defaultDeductionsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$defaultDeductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Employee.defaultEarnings
   */
  export type Employee$defaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    where?: PayStubEarningWhereInput
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    cursor?: PayStubEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * Employee.defaultDeductions
   */
  export type Employee$defaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    where?: PayStubDeductionWhereInput
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    cursor?: PayStubDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
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
    defaultEarnings?: boolean | PayrollGroup$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | PayrollGroup$defaultDeductionsArgs<ExtArgs>
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
    defaultEarnings?: boolean | PayrollGroup$defaultEarningsArgs<ExtArgs>
    defaultDeductions?: boolean | PayrollGroup$defaultDeductionsArgs<ExtArgs>
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
      defaultEarnings: Prisma.$PayStubEarningPayload<ExtArgs>[]
      defaultDeductions: Prisma.$PayStubDeductionPayload<ExtArgs>[]
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
    defaultEarnings<T extends PayrollGroup$defaultEarningsArgs<ExtArgs> = {}>(args?: Subset<T, PayrollGroup$defaultEarningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    defaultDeductions<T extends PayrollGroup$defaultDeductionsArgs<ExtArgs> = {}>(args?: Subset<T, PayrollGroup$defaultDeductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * PayrollGroup.defaultEarnings
   */
  export type PayrollGroup$defaultEarningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    where?: PayStubEarningWhereInput
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    cursor?: PayStubEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * PayrollGroup.defaultDeductions
   */
  export type PayrollGroup$defaultDeductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    where?: PayStubDeductionWhereInput
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    cursor?: PayStubDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
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
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    earnings?: boolean | PayStub$earningsArgs<ExtArgs>
    deductions?: boolean | PayStub$deductionsArgs<ExtArgs>
    _count?: boolean | PayStubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payStub"]>

  export type PayStubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    uuid?: boolean
    payDate?: boolean
    periodStart?: boolean
    periodEnd?: boolean
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
    grossEarnings?: boolean
    totalDeductions?: boolean
    netPay?: boolean
    employeeId?: boolean
  }

  export type PayStubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"uuid" | "payDate" | "periodStart" | "periodEnd" | "grossEarnings" | "totalDeductions" | "netPay" | "employeeId", ExtArgs["result"]["payStub"]>
  export type PayStubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    earnings?: boolean | PayStub$earningsArgs<ExtArgs>
    deductions?: boolean | PayStub$deductionsArgs<ExtArgs>
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
      earnings: Prisma.$PayStubEarningPayload<ExtArgs>[]
      deductions: Prisma.$PayStubDeductionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      uuid: string
      payDate: Date
      periodStart: Date
      periodEnd: Date
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
    earnings<T extends PayStub$earningsArgs<ExtArgs> = {}>(args?: Subset<T, PayStub$earningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deductions<T extends PayStub$deductionsArgs<ExtArgs> = {}>(args?: Subset<T, PayStub$deductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * PayStub.earnings
   */
  export type PayStub$earningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    where?: PayStubEarningWhereInput
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    cursor?: PayStubEarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * PayStub.deductions
   */
  export type PayStub$deductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    where?: PayStubDeductionWhereInput
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    cursor?: PayStubDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
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
   * Model PayStubEarning
   */

  export type AggregatePayStubEarning = {
    _count: PayStubEarningCountAggregateOutputType | null
    _avg: PayStubEarningAvgAggregateOutputType | null
    _sum: PayStubEarningSumAggregateOutputType | null
    _min: PayStubEarningMinAggregateOutputType | null
    _max: PayStubEarningMaxAggregateOutputType | null
  }

  export type PayStubEarningAvgAggregateOutputType = {
    amount: Decimal | null
    hours: Decimal | null
    rate: Decimal | null
  }

  export type PayStubEarningSumAggregateOutputType = {
    amount: Decimal | null
    hours: Decimal | null
    rate: Decimal | null
  }

  export type PayStubEarningMinAggregateOutputType = {
    id: string | null
    payStubId: string | null
    isDefault: boolean | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    amount: Decimal | null
    hours: Decimal | null
    rate: Decimal | null
  }

  export type PayStubEarningMaxAggregateOutputType = {
    id: string | null
    payStubId: string | null
    isDefault: boolean | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    amount: Decimal | null
    hours: Decimal | null
    rate: Decimal | null
  }

  export type PayStubEarningCountAggregateOutputType = {
    id: number
    payStubId: number
    isDefault: number
    organizationId: number
    payrollGroupId: number
    employeeId: number
    type: number
    name: number
    description: number
    amount: number
    hours: number
    rate: number
    _all: number
  }


  export type PayStubEarningAvgAggregateInputType = {
    amount?: true
    hours?: true
    rate?: true
  }

  export type PayStubEarningSumAggregateInputType = {
    amount?: true
    hours?: true
    rate?: true
  }

  export type PayStubEarningMinAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    hours?: true
    rate?: true
  }

  export type PayStubEarningMaxAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    hours?: true
    rate?: true
  }

  export type PayStubEarningCountAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    hours?: true
    rate?: true
    _all?: true
  }

  export type PayStubEarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubEarning to aggregate.
     */
    where?: PayStubEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubEarnings to fetch.
     */
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayStubEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayStubEarnings
    **/
    _count?: true | PayStubEarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayStubEarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayStubEarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayStubEarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayStubEarningMaxAggregateInputType
  }

  export type GetPayStubEarningAggregateType<T extends PayStubEarningAggregateArgs> = {
        [P in keyof T & keyof AggregatePayStubEarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayStubEarning[P]>
      : GetScalarType<T[P], AggregatePayStubEarning[P]>
  }




  export type PayStubEarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubEarningWhereInput
    orderBy?: PayStubEarningOrderByWithAggregationInput | PayStubEarningOrderByWithAggregationInput[]
    by: PayStubEarningScalarFieldEnum[] | PayStubEarningScalarFieldEnum
    having?: PayStubEarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayStubEarningCountAggregateInputType | true
    _avg?: PayStubEarningAvgAggregateInputType
    _sum?: PayStubEarningSumAggregateInputType
    _min?: PayStubEarningMinAggregateInputType
    _max?: PayStubEarningMaxAggregateInputType
  }

  export type PayStubEarningGroupByOutputType = {
    id: string
    payStubId: string | null
    isDefault: boolean
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType
    name: string
    description: string | null
    amount: Decimal
    hours: Decimal | null
    rate: Decimal | null
    _count: PayStubEarningCountAggregateOutputType | null
    _avg: PayStubEarningAvgAggregateOutputType | null
    _sum: PayStubEarningSumAggregateOutputType | null
    _min: PayStubEarningMinAggregateOutputType | null
    _max: PayStubEarningMaxAggregateOutputType | null
  }

  type GetPayStubEarningGroupByPayload<T extends PayStubEarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayStubEarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayStubEarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayStubEarningGroupByOutputType[P]>
            : GetScalarType<T[P], PayStubEarningGroupByOutputType[P]>
        }
      >
    >


  export type PayStubEarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    hours?: boolean
    rate?: boolean
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubEarning"]>

  export type PayStubEarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    hours?: boolean
    rate?: boolean
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubEarning"]>

  export type PayStubEarningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    hours?: boolean
    rate?: boolean
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubEarning"]>

  export type PayStubEarningSelectScalar = {
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    hours?: boolean
    rate?: boolean
  }

  export type PayStubEarningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payStubId" | "isDefault" | "organizationId" | "payrollGroupId" | "employeeId" | "type" | "name" | "description" | "amount" | "hours" | "rate", ExtArgs["result"]["payStubEarning"]>
  export type PayStubEarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }
  export type PayStubEarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }
  export type PayStubEarningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubEarning$payStubArgs<ExtArgs>
    organization?: boolean | PayStubEarning$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubEarning$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubEarning$employeeArgs<ExtArgs>
  }

  export type $PayStubEarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayStubEarning"
    objects: {
      payStub: Prisma.$PayStubPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      payrollGroup: Prisma.$PayrollGroupPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payStubId: string | null
      isDefault: boolean
      organizationId: string | null
      payrollGroupId: string | null
      employeeId: string | null
      type: $Enums.PayStubItemType
      name: string
      description: string | null
      amount: Prisma.Decimal
      hours: Prisma.Decimal | null
      rate: Prisma.Decimal | null
    }, ExtArgs["result"]["payStubEarning"]>
    composites: {}
  }

  type PayStubEarningGetPayload<S extends boolean | null | undefined | PayStubEarningDefaultArgs> = $Result.GetResult<Prisma.$PayStubEarningPayload, S>

  type PayStubEarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayStubEarningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayStubEarningCountAggregateInputType | true
    }

  export interface PayStubEarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayStubEarning'], meta: { name: 'PayStubEarning' } }
    /**
     * Find zero or one PayStubEarning that matches the filter.
     * @param {PayStubEarningFindUniqueArgs} args - Arguments to find a PayStubEarning
     * @example
     * // Get one PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayStubEarningFindUniqueArgs>(args: SelectSubset<T, PayStubEarningFindUniqueArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayStubEarning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayStubEarningFindUniqueOrThrowArgs} args - Arguments to find a PayStubEarning
     * @example
     * // Get one PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayStubEarningFindUniqueOrThrowArgs>(args: SelectSubset<T, PayStubEarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubEarning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningFindFirstArgs} args - Arguments to find a PayStubEarning
     * @example
     * // Get one PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayStubEarningFindFirstArgs>(args?: SelectSubset<T, PayStubEarningFindFirstArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubEarning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningFindFirstOrThrowArgs} args - Arguments to find a PayStubEarning
     * @example
     * // Get one PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayStubEarningFindFirstOrThrowArgs>(args?: SelectSubset<T, PayStubEarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayStubEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayStubEarnings
     * const payStubEarnings = await prisma.payStubEarning.findMany()
     * 
     * // Get first 10 PayStubEarnings
     * const payStubEarnings = await prisma.payStubEarning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payStubEarningWithIdOnly = await prisma.payStubEarning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayStubEarningFindManyArgs>(args?: SelectSubset<T, PayStubEarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayStubEarning.
     * @param {PayStubEarningCreateArgs} args - Arguments to create a PayStubEarning.
     * @example
     * // Create one PayStubEarning
     * const PayStubEarning = await prisma.payStubEarning.create({
     *   data: {
     *     // ... data to create a PayStubEarning
     *   }
     * })
     * 
     */
    create<T extends PayStubEarningCreateArgs>(args: SelectSubset<T, PayStubEarningCreateArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayStubEarnings.
     * @param {PayStubEarningCreateManyArgs} args - Arguments to create many PayStubEarnings.
     * @example
     * // Create many PayStubEarnings
     * const payStubEarning = await prisma.payStubEarning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayStubEarningCreateManyArgs>(args?: SelectSubset<T, PayStubEarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayStubEarnings and returns the data saved in the database.
     * @param {PayStubEarningCreateManyAndReturnArgs} args - Arguments to create many PayStubEarnings.
     * @example
     * // Create many PayStubEarnings
     * const payStubEarning = await prisma.payStubEarning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayStubEarnings and only return the `id`
     * const payStubEarningWithIdOnly = await prisma.payStubEarning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayStubEarningCreateManyAndReturnArgs>(args?: SelectSubset<T, PayStubEarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayStubEarning.
     * @param {PayStubEarningDeleteArgs} args - Arguments to delete one PayStubEarning.
     * @example
     * // Delete one PayStubEarning
     * const PayStubEarning = await prisma.payStubEarning.delete({
     *   where: {
     *     // ... filter to delete one PayStubEarning
     *   }
     * })
     * 
     */
    delete<T extends PayStubEarningDeleteArgs>(args: SelectSubset<T, PayStubEarningDeleteArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayStubEarning.
     * @param {PayStubEarningUpdateArgs} args - Arguments to update one PayStubEarning.
     * @example
     * // Update one PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayStubEarningUpdateArgs>(args: SelectSubset<T, PayStubEarningUpdateArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayStubEarnings.
     * @param {PayStubEarningDeleteManyArgs} args - Arguments to filter PayStubEarnings to delete.
     * @example
     * // Delete a few PayStubEarnings
     * const { count } = await prisma.payStubEarning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayStubEarningDeleteManyArgs>(args?: SelectSubset<T, PayStubEarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayStubEarnings
     * const payStubEarning = await prisma.payStubEarning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayStubEarningUpdateManyArgs>(args: SelectSubset<T, PayStubEarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubEarnings and returns the data updated in the database.
     * @param {PayStubEarningUpdateManyAndReturnArgs} args - Arguments to update many PayStubEarnings.
     * @example
     * // Update many PayStubEarnings
     * const payStubEarning = await prisma.payStubEarning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayStubEarnings and only return the `id`
     * const payStubEarningWithIdOnly = await prisma.payStubEarning.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PayStubEarningUpdateManyAndReturnArgs>(args: SelectSubset<T, PayStubEarningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayStubEarning.
     * @param {PayStubEarningUpsertArgs} args - Arguments to update or create a PayStubEarning.
     * @example
     * // Update or create a PayStubEarning
     * const payStubEarning = await prisma.payStubEarning.upsert({
     *   create: {
     *     // ... data to create a PayStubEarning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayStubEarning we want to update
     *   }
     * })
     */
    upsert<T extends PayStubEarningUpsertArgs>(args: SelectSubset<T, PayStubEarningUpsertArgs<ExtArgs>>): Prisma__PayStubEarningClient<$Result.GetResult<Prisma.$PayStubEarningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayStubEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningCountArgs} args - Arguments to filter PayStubEarnings to count.
     * @example
     * // Count the number of PayStubEarnings
     * const count = await prisma.payStubEarning.count({
     *   where: {
     *     // ... the filter for the PayStubEarnings we want to count
     *   }
     * })
    **/
    count<T extends PayStubEarningCountArgs>(
      args?: Subset<T, PayStubEarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayStubEarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayStubEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayStubEarningAggregateArgs>(args: Subset<T, PayStubEarningAggregateArgs>): Prisma.PrismaPromise<GetPayStubEarningAggregateType<T>>

    /**
     * Group by PayStubEarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubEarningGroupByArgs} args - Group by arguments.
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
      T extends PayStubEarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayStubEarningGroupByArgs['orderBy'] }
        : { orderBy?: PayStubEarningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayStubEarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayStubEarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayStubEarning model
   */
  readonly fields: PayStubEarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayStubEarning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayStubEarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payStub<T extends PayStubEarning$payStubArgs<ExtArgs> = {}>(args?: Subset<T, PayStubEarning$payStubArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends PayStubEarning$organizationArgs<ExtArgs> = {}>(args?: Subset<T, PayStubEarning$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payrollGroup<T extends PayStubEarning$payrollGroupArgs<ExtArgs> = {}>(args?: Subset<T, PayStubEarning$payrollGroupArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends PayStubEarning$employeeArgs<ExtArgs> = {}>(args?: Subset<T, PayStubEarning$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayStubEarning model
   */
  interface PayStubEarningFieldRefs {
    readonly id: FieldRef<"PayStubEarning", 'String'>
    readonly payStubId: FieldRef<"PayStubEarning", 'String'>
    readonly isDefault: FieldRef<"PayStubEarning", 'Boolean'>
    readonly organizationId: FieldRef<"PayStubEarning", 'String'>
    readonly payrollGroupId: FieldRef<"PayStubEarning", 'String'>
    readonly employeeId: FieldRef<"PayStubEarning", 'String'>
    readonly type: FieldRef<"PayStubEarning", 'PayStubItemType'>
    readonly name: FieldRef<"PayStubEarning", 'String'>
    readonly description: FieldRef<"PayStubEarning", 'String'>
    readonly amount: FieldRef<"PayStubEarning", 'Decimal'>
    readonly hours: FieldRef<"PayStubEarning", 'Decimal'>
    readonly rate: FieldRef<"PayStubEarning", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PayStubEarning findUnique
   */
  export type PayStubEarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter, which PayStubEarning to fetch.
     */
    where: PayStubEarningWhereUniqueInput
  }

  /**
   * PayStubEarning findUniqueOrThrow
   */
  export type PayStubEarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter, which PayStubEarning to fetch.
     */
    where: PayStubEarningWhereUniqueInput
  }

  /**
   * PayStubEarning findFirst
   */
  export type PayStubEarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter, which PayStubEarning to fetch.
     */
    where?: PayStubEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubEarnings to fetch.
     */
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubEarnings.
     */
    cursor?: PayStubEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubEarnings.
     */
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * PayStubEarning findFirstOrThrow
   */
  export type PayStubEarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter, which PayStubEarning to fetch.
     */
    where?: PayStubEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubEarnings to fetch.
     */
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubEarnings.
     */
    cursor?: PayStubEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubEarnings.
     */
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * PayStubEarning findMany
   */
  export type PayStubEarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter, which PayStubEarnings to fetch.
     */
    where?: PayStubEarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubEarnings to fetch.
     */
    orderBy?: PayStubEarningOrderByWithRelationInput | PayStubEarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayStubEarnings.
     */
    cursor?: PayStubEarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubEarnings.
     */
    skip?: number
    distinct?: PayStubEarningScalarFieldEnum | PayStubEarningScalarFieldEnum[]
  }

  /**
   * PayStubEarning create
   */
  export type PayStubEarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * The data needed to create a PayStubEarning.
     */
    data: XOR<PayStubEarningCreateInput, PayStubEarningUncheckedCreateInput>
  }

  /**
   * PayStubEarning createMany
   */
  export type PayStubEarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayStubEarnings.
     */
    data: PayStubEarningCreateManyInput | PayStubEarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayStubEarning createManyAndReturn
   */
  export type PayStubEarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * The data used to create many PayStubEarnings.
     */
    data: PayStubEarningCreateManyInput | PayStubEarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubEarning update
   */
  export type PayStubEarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * The data needed to update a PayStubEarning.
     */
    data: XOR<PayStubEarningUpdateInput, PayStubEarningUncheckedUpdateInput>
    /**
     * Choose, which PayStubEarning to update.
     */
    where: PayStubEarningWhereUniqueInput
  }

  /**
   * PayStubEarning updateMany
   */
  export type PayStubEarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayStubEarnings.
     */
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyInput>
    /**
     * Filter which PayStubEarnings to update
     */
    where?: PayStubEarningWhereInput
    /**
     * Limit how many PayStubEarnings to update.
     */
    limit?: number
  }

  /**
   * PayStubEarning updateManyAndReturn
   */
  export type PayStubEarningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * The data used to update PayStubEarnings.
     */
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyInput>
    /**
     * Filter which PayStubEarnings to update
     */
    where?: PayStubEarningWhereInput
    /**
     * Limit how many PayStubEarnings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubEarning upsert
   */
  export type PayStubEarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * The filter to search for the PayStubEarning to update in case it exists.
     */
    where: PayStubEarningWhereUniqueInput
    /**
     * In case the PayStubEarning found by the `where` argument doesn't exist, create a new PayStubEarning with this data.
     */
    create: XOR<PayStubEarningCreateInput, PayStubEarningUncheckedCreateInput>
    /**
     * In case the PayStubEarning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayStubEarningUpdateInput, PayStubEarningUncheckedUpdateInput>
  }

  /**
   * PayStubEarning delete
   */
  export type PayStubEarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
    /**
     * Filter which PayStubEarning to delete.
     */
    where: PayStubEarningWhereUniqueInput
  }

  /**
   * PayStubEarning deleteMany
   */
  export type PayStubEarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubEarnings to delete
     */
    where?: PayStubEarningWhereInput
    /**
     * Limit how many PayStubEarnings to delete.
     */
    limit?: number
  }

  /**
   * PayStubEarning.payStub
   */
  export type PayStubEarning$payStubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * PayStubEarning.organization
   */
  export type PayStubEarning$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubEarning.payrollGroup
   */
  export type PayStubEarning$payrollGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubEarning.employee
   */
  export type PayStubEarning$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubEarning without action
   */
  export type PayStubEarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubEarning
     */
    select?: PayStubEarningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubEarning
     */
    omit?: PayStubEarningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubEarningInclude<ExtArgs> | null
  }


  /**
   * Model PayStubDeduction
   */

  export type AggregatePayStubDeduction = {
    _count: PayStubDeductionCountAggregateOutputType | null
    _avg: PayStubDeductionAvgAggregateOutputType | null
    _sum: PayStubDeductionSumAggregateOutputType | null
    _min: PayStubDeductionMinAggregateOutputType | null
    _max: PayStubDeductionMaxAggregateOutputType | null
  }

  export type PayStubDeductionAvgAggregateOutputType = {
    amount: Decimal | null
    rate: Decimal | null
  }

  export type PayStubDeductionSumAggregateOutputType = {
    amount: Decimal | null
    rate: Decimal | null
  }

  export type PayStubDeductionMinAggregateOutputType = {
    id: string | null
    payStubId: string | null
    isDefault: boolean | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    amount: Decimal | null
    rate: Decimal | null
  }

  export type PayStubDeductionMaxAggregateOutputType = {
    id: string | null
    payStubId: string | null
    isDefault: boolean | null
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType | null
    name: string | null
    description: string | null
    amount: Decimal | null
    rate: Decimal | null
  }

  export type PayStubDeductionCountAggregateOutputType = {
    id: number
    payStubId: number
    isDefault: number
    organizationId: number
    payrollGroupId: number
    employeeId: number
    type: number
    name: number
    description: number
    amount: number
    rate: number
    _all: number
  }


  export type PayStubDeductionAvgAggregateInputType = {
    amount?: true
    rate?: true
  }

  export type PayStubDeductionSumAggregateInputType = {
    amount?: true
    rate?: true
  }

  export type PayStubDeductionMinAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    rate?: true
  }

  export type PayStubDeductionMaxAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    rate?: true
  }

  export type PayStubDeductionCountAggregateInputType = {
    id?: true
    payStubId?: true
    isDefault?: true
    organizationId?: true
    payrollGroupId?: true
    employeeId?: true
    type?: true
    name?: true
    description?: true
    amount?: true
    rate?: true
    _all?: true
  }

  export type PayStubDeductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubDeduction to aggregate.
     */
    where?: PayStubDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubDeductions to fetch.
     */
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayStubDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayStubDeductions
    **/
    _count?: true | PayStubDeductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayStubDeductionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayStubDeductionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayStubDeductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayStubDeductionMaxAggregateInputType
  }

  export type GetPayStubDeductionAggregateType<T extends PayStubDeductionAggregateArgs> = {
        [P in keyof T & keyof AggregatePayStubDeduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayStubDeduction[P]>
      : GetScalarType<T[P], AggregatePayStubDeduction[P]>
  }




  export type PayStubDeductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayStubDeductionWhereInput
    orderBy?: PayStubDeductionOrderByWithAggregationInput | PayStubDeductionOrderByWithAggregationInput[]
    by: PayStubDeductionScalarFieldEnum[] | PayStubDeductionScalarFieldEnum
    having?: PayStubDeductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayStubDeductionCountAggregateInputType | true
    _avg?: PayStubDeductionAvgAggregateInputType
    _sum?: PayStubDeductionSumAggregateInputType
    _min?: PayStubDeductionMinAggregateInputType
    _max?: PayStubDeductionMaxAggregateInputType
  }

  export type PayStubDeductionGroupByOutputType = {
    id: string
    payStubId: string
    isDefault: boolean
    organizationId: string | null
    payrollGroupId: string | null
    employeeId: string | null
    type: $Enums.PayStubItemType
    name: string
    description: string | null
    amount: Decimal
    rate: Decimal | null
    _count: PayStubDeductionCountAggregateOutputType | null
    _avg: PayStubDeductionAvgAggregateOutputType | null
    _sum: PayStubDeductionSumAggregateOutputType | null
    _min: PayStubDeductionMinAggregateOutputType | null
    _max: PayStubDeductionMaxAggregateOutputType | null
  }

  type GetPayStubDeductionGroupByPayload<T extends PayStubDeductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayStubDeductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayStubDeductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayStubDeductionGroupByOutputType[P]>
            : GetScalarType<T[P], PayStubDeductionGroupByOutputType[P]>
        }
      >
    >


  export type PayStubDeductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    rate?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubDeduction"]>

  export type PayStubDeductionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    rate?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubDeduction"]>

  export type PayStubDeductionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    rate?: boolean
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }, ExtArgs["result"]["payStubDeduction"]>

  export type PayStubDeductionSelectScalar = {
    id?: boolean
    payStubId?: boolean
    isDefault?: boolean
    organizationId?: boolean
    payrollGroupId?: boolean
    employeeId?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    amount?: boolean
    rate?: boolean
  }

  export type PayStubDeductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payStubId" | "isDefault" | "organizationId" | "payrollGroupId" | "employeeId" | "type" | "name" | "description" | "amount" | "rate", ExtArgs["result"]["payStubDeduction"]>
  export type PayStubDeductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }
  export type PayStubDeductionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }
  export type PayStubDeductionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payStub?: boolean | PayStubDefaultArgs<ExtArgs>
    organization?: boolean | PayStubDeduction$organizationArgs<ExtArgs>
    payrollGroup?: boolean | PayStubDeduction$payrollGroupArgs<ExtArgs>
    employee?: boolean | PayStubDeduction$employeeArgs<ExtArgs>
  }

  export type $PayStubDeductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayStubDeduction"
    objects: {
      payStub: Prisma.$PayStubPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      payrollGroup: Prisma.$PayrollGroupPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payStubId: string
      isDefault: boolean
      organizationId: string | null
      payrollGroupId: string | null
      employeeId: string | null
      type: $Enums.PayStubItemType
      name: string
      description: string | null
      amount: Prisma.Decimal
      rate: Prisma.Decimal | null
    }, ExtArgs["result"]["payStubDeduction"]>
    composites: {}
  }

  type PayStubDeductionGetPayload<S extends boolean | null | undefined | PayStubDeductionDefaultArgs> = $Result.GetResult<Prisma.$PayStubDeductionPayload, S>

  type PayStubDeductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayStubDeductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayStubDeductionCountAggregateInputType | true
    }

  export interface PayStubDeductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayStubDeduction'], meta: { name: 'PayStubDeduction' } }
    /**
     * Find zero or one PayStubDeduction that matches the filter.
     * @param {PayStubDeductionFindUniqueArgs} args - Arguments to find a PayStubDeduction
     * @example
     * // Get one PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayStubDeductionFindUniqueArgs>(args: SelectSubset<T, PayStubDeductionFindUniqueArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayStubDeduction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayStubDeductionFindUniqueOrThrowArgs} args - Arguments to find a PayStubDeduction
     * @example
     * // Get one PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayStubDeductionFindUniqueOrThrowArgs>(args: SelectSubset<T, PayStubDeductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubDeduction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionFindFirstArgs} args - Arguments to find a PayStubDeduction
     * @example
     * // Get one PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayStubDeductionFindFirstArgs>(args?: SelectSubset<T, PayStubDeductionFindFirstArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayStubDeduction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionFindFirstOrThrowArgs} args - Arguments to find a PayStubDeduction
     * @example
     * // Get one PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayStubDeductionFindFirstOrThrowArgs>(args?: SelectSubset<T, PayStubDeductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayStubDeductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayStubDeductions
     * const payStubDeductions = await prisma.payStubDeduction.findMany()
     * 
     * // Get first 10 PayStubDeductions
     * const payStubDeductions = await prisma.payStubDeduction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payStubDeductionWithIdOnly = await prisma.payStubDeduction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayStubDeductionFindManyArgs>(args?: SelectSubset<T, PayStubDeductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayStubDeduction.
     * @param {PayStubDeductionCreateArgs} args - Arguments to create a PayStubDeduction.
     * @example
     * // Create one PayStubDeduction
     * const PayStubDeduction = await prisma.payStubDeduction.create({
     *   data: {
     *     // ... data to create a PayStubDeduction
     *   }
     * })
     * 
     */
    create<T extends PayStubDeductionCreateArgs>(args: SelectSubset<T, PayStubDeductionCreateArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayStubDeductions.
     * @param {PayStubDeductionCreateManyArgs} args - Arguments to create many PayStubDeductions.
     * @example
     * // Create many PayStubDeductions
     * const payStubDeduction = await prisma.payStubDeduction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayStubDeductionCreateManyArgs>(args?: SelectSubset<T, PayStubDeductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayStubDeductions and returns the data saved in the database.
     * @param {PayStubDeductionCreateManyAndReturnArgs} args - Arguments to create many PayStubDeductions.
     * @example
     * // Create many PayStubDeductions
     * const payStubDeduction = await prisma.payStubDeduction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayStubDeductions and only return the `id`
     * const payStubDeductionWithIdOnly = await prisma.payStubDeduction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayStubDeductionCreateManyAndReturnArgs>(args?: SelectSubset<T, PayStubDeductionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayStubDeduction.
     * @param {PayStubDeductionDeleteArgs} args - Arguments to delete one PayStubDeduction.
     * @example
     * // Delete one PayStubDeduction
     * const PayStubDeduction = await prisma.payStubDeduction.delete({
     *   where: {
     *     // ... filter to delete one PayStubDeduction
     *   }
     * })
     * 
     */
    delete<T extends PayStubDeductionDeleteArgs>(args: SelectSubset<T, PayStubDeductionDeleteArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayStubDeduction.
     * @param {PayStubDeductionUpdateArgs} args - Arguments to update one PayStubDeduction.
     * @example
     * // Update one PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayStubDeductionUpdateArgs>(args: SelectSubset<T, PayStubDeductionUpdateArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayStubDeductions.
     * @param {PayStubDeductionDeleteManyArgs} args - Arguments to filter PayStubDeductions to delete.
     * @example
     * // Delete a few PayStubDeductions
     * const { count } = await prisma.payStubDeduction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayStubDeductionDeleteManyArgs>(args?: SelectSubset<T, PayStubDeductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayStubDeductions
     * const payStubDeduction = await prisma.payStubDeduction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayStubDeductionUpdateManyArgs>(args: SelectSubset<T, PayStubDeductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayStubDeductions and returns the data updated in the database.
     * @param {PayStubDeductionUpdateManyAndReturnArgs} args - Arguments to update many PayStubDeductions.
     * @example
     * // Update many PayStubDeductions
     * const payStubDeduction = await prisma.payStubDeduction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayStubDeductions and only return the `id`
     * const payStubDeductionWithIdOnly = await prisma.payStubDeduction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PayStubDeductionUpdateManyAndReturnArgs>(args: SelectSubset<T, PayStubDeductionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayStubDeduction.
     * @param {PayStubDeductionUpsertArgs} args - Arguments to update or create a PayStubDeduction.
     * @example
     * // Update or create a PayStubDeduction
     * const payStubDeduction = await prisma.payStubDeduction.upsert({
     *   create: {
     *     // ... data to create a PayStubDeduction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayStubDeduction we want to update
     *   }
     * })
     */
    upsert<T extends PayStubDeductionUpsertArgs>(args: SelectSubset<T, PayStubDeductionUpsertArgs<ExtArgs>>): Prisma__PayStubDeductionClient<$Result.GetResult<Prisma.$PayStubDeductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayStubDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionCountArgs} args - Arguments to filter PayStubDeductions to count.
     * @example
     * // Count the number of PayStubDeductions
     * const count = await prisma.payStubDeduction.count({
     *   where: {
     *     // ... the filter for the PayStubDeductions we want to count
     *   }
     * })
    **/
    count<T extends PayStubDeductionCountArgs>(
      args?: Subset<T, PayStubDeductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayStubDeductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayStubDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayStubDeductionAggregateArgs>(args: Subset<T, PayStubDeductionAggregateArgs>): Prisma.PrismaPromise<GetPayStubDeductionAggregateType<T>>

    /**
     * Group by PayStubDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayStubDeductionGroupByArgs} args - Group by arguments.
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
      T extends PayStubDeductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayStubDeductionGroupByArgs['orderBy'] }
        : { orderBy?: PayStubDeductionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayStubDeductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayStubDeductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayStubDeduction model
   */
  readonly fields: PayStubDeductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayStubDeduction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayStubDeductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payStub<T extends PayStubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PayStubDefaultArgs<ExtArgs>>): Prisma__PayStubClient<$Result.GetResult<Prisma.$PayStubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends PayStubDeduction$organizationArgs<ExtArgs> = {}>(args?: Subset<T, PayStubDeduction$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payrollGroup<T extends PayStubDeduction$payrollGroupArgs<ExtArgs> = {}>(args?: Subset<T, PayStubDeduction$payrollGroupArgs<ExtArgs>>): Prisma__PayrollGroupClient<$Result.GetResult<Prisma.$PayrollGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends PayStubDeduction$employeeArgs<ExtArgs> = {}>(args?: Subset<T, PayStubDeduction$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayStubDeduction model
   */
  interface PayStubDeductionFieldRefs {
    readonly id: FieldRef<"PayStubDeduction", 'String'>
    readonly payStubId: FieldRef<"PayStubDeduction", 'String'>
    readonly isDefault: FieldRef<"PayStubDeduction", 'Boolean'>
    readonly organizationId: FieldRef<"PayStubDeduction", 'String'>
    readonly payrollGroupId: FieldRef<"PayStubDeduction", 'String'>
    readonly employeeId: FieldRef<"PayStubDeduction", 'String'>
    readonly type: FieldRef<"PayStubDeduction", 'PayStubItemType'>
    readonly name: FieldRef<"PayStubDeduction", 'String'>
    readonly description: FieldRef<"PayStubDeduction", 'String'>
    readonly amount: FieldRef<"PayStubDeduction", 'Decimal'>
    readonly rate: FieldRef<"PayStubDeduction", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PayStubDeduction findUnique
   */
  export type PayStubDeductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter, which PayStubDeduction to fetch.
     */
    where: PayStubDeductionWhereUniqueInput
  }

  /**
   * PayStubDeduction findUniqueOrThrow
   */
  export type PayStubDeductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter, which PayStubDeduction to fetch.
     */
    where: PayStubDeductionWhereUniqueInput
  }

  /**
   * PayStubDeduction findFirst
   */
  export type PayStubDeductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter, which PayStubDeduction to fetch.
     */
    where?: PayStubDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubDeductions to fetch.
     */
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubDeductions.
     */
    cursor?: PayStubDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubDeductions.
     */
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
  }

  /**
   * PayStubDeduction findFirstOrThrow
   */
  export type PayStubDeductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter, which PayStubDeduction to fetch.
     */
    where?: PayStubDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubDeductions to fetch.
     */
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayStubDeductions.
     */
    cursor?: PayStubDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayStubDeductions.
     */
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
  }

  /**
   * PayStubDeduction findMany
   */
  export type PayStubDeductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter, which PayStubDeductions to fetch.
     */
    where?: PayStubDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayStubDeductions to fetch.
     */
    orderBy?: PayStubDeductionOrderByWithRelationInput | PayStubDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayStubDeductions.
     */
    cursor?: PayStubDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayStubDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayStubDeductions.
     */
    skip?: number
    distinct?: PayStubDeductionScalarFieldEnum | PayStubDeductionScalarFieldEnum[]
  }

  /**
   * PayStubDeduction create
   */
  export type PayStubDeductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * The data needed to create a PayStubDeduction.
     */
    data: XOR<PayStubDeductionCreateInput, PayStubDeductionUncheckedCreateInput>
  }

  /**
   * PayStubDeduction createMany
   */
  export type PayStubDeductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayStubDeductions.
     */
    data: PayStubDeductionCreateManyInput | PayStubDeductionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayStubDeduction createManyAndReturn
   */
  export type PayStubDeductionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * The data used to create many PayStubDeductions.
     */
    data: PayStubDeductionCreateManyInput | PayStubDeductionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubDeduction update
   */
  export type PayStubDeductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * The data needed to update a PayStubDeduction.
     */
    data: XOR<PayStubDeductionUpdateInput, PayStubDeductionUncheckedUpdateInput>
    /**
     * Choose, which PayStubDeduction to update.
     */
    where: PayStubDeductionWhereUniqueInput
  }

  /**
   * PayStubDeduction updateMany
   */
  export type PayStubDeductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayStubDeductions.
     */
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyInput>
    /**
     * Filter which PayStubDeductions to update
     */
    where?: PayStubDeductionWhereInput
    /**
     * Limit how many PayStubDeductions to update.
     */
    limit?: number
  }

  /**
   * PayStubDeduction updateManyAndReturn
   */
  export type PayStubDeductionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * The data used to update PayStubDeductions.
     */
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyInput>
    /**
     * Filter which PayStubDeductions to update
     */
    where?: PayStubDeductionWhereInput
    /**
     * Limit how many PayStubDeductions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayStubDeduction upsert
   */
  export type PayStubDeductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * The filter to search for the PayStubDeduction to update in case it exists.
     */
    where: PayStubDeductionWhereUniqueInput
    /**
     * In case the PayStubDeduction found by the `where` argument doesn't exist, create a new PayStubDeduction with this data.
     */
    create: XOR<PayStubDeductionCreateInput, PayStubDeductionUncheckedCreateInput>
    /**
     * In case the PayStubDeduction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayStubDeductionUpdateInput, PayStubDeductionUncheckedUpdateInput>
  }

  /**
   * PayStubDeduction delete
   */
  export type PayStubDeductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
    /**
     * Filter which PayStubDeduction to delete.
     */
    where: PayStubDeductionWhereUniqueInput
  }

  /**
   * PayStubDeduction deleteMany
   */
  export type PayStubDeductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayStubDeductions to delete
     */
    where?: PayStubDeductionWhereInput
    /**
     * Limit how many PayStubDeductions to delete.
     */
    limit?: number
  }

  /**
   * PayStubDeduction.organization
   */
  export type PayStubDeduction$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubDeduction.payrollGroup
   */
  export type PayStubDeduction$payrollGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubDeduction.employee
   */
  export type PayStubDeduction$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * PayStubDeduction without action
   */
  export type PayStubDeductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayStubDeduction
     */
    select?: PayStubDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayStubDeduction
     */
    omit?: PayStubDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayStubDeductionInclude<ExtArgs> | null
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
    grossEarnings: 'grossEarnings',
    totalDeductions: 'totalDeductions',
    netPay: 'netPay',
    employeeId: 'employeeId'
  };

  export type PayStubScalarFieldEnum = (typeof PayStubScalarFieldEnum)[keyof typeof PayStubScalarFieldEnum]


  export const PayStubEarningScalarFieldEnum: {
    id: 'id',
    payStubId: 'payStubId',
    isDefault: 'isDefault',
    organizationId: 'organizationId',
    payrollGroupId: 'payrollGroupId',
    employeeId: 'employeeId',
    type: 'type',
    name: 'name',
    description: 'description',
    amount: 'amount',
    hours: 'hours',
    rate: 'rate'
  };

  export type PayStubEarningScalarFieldEnum = (typeof PayStubEarningScalarFieldEnum)[keyof typeof PayStubEarningScalarFieldEnum]


  export const PayStubDeductionScalarFieldEnum: {
    id: 'id',
    payStubId: 'payStubId',
    isDefault: 'isDefault',
    organizationId: 'organizationId',
    payrollGroupId: 'payrollGroupId',
    employeeId: 'employeeId',
    type: 'type',
    name: 'name',
    description: 'description',
    amount: 'amount',
    rate: 'rate'
  };

  export type PayStubDeductionScalarFieldEnum = (typeof PayStubDeductionScalarFieldEnum)[keyof typeof PayStubDeductionScalarFieldEnum]


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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    defaultEarnings?: PayStubEarningOrderByRelationAggregateInput
    defaultDeductions?: PayStubDeductionOrderByRelationAggregateInput
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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    defaultEarnings?: PayStubEarningOrderByRelationAggregateInput
    defaultDeductions?: PayStubDeductionOrderByRelationAggregateInput
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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    defaultEarnings?: PayStubEarningOrderByRelationAggregateInput
    defaultDeductions?: PayStubDeductionOrderByRelationAggregateInput
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
    defaultEarnings?: PayStubEarningListRelationFilter
    defaultDeductions?: PayStubDeductionListRelationFilter
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
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    earnings?: PayStubEarningListRelationFilter
    deductions?: PayStubDeductionListRelationFilter
  }

  export type PayStubOrderByWithRelationInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    grossEarnings?: SortOrder
    totalDeductions?: SortOrder
    netPay?: SortOrder
    employeeId?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    earnings?: PayStubEarningOrderByRelationAggregateInput
    deductions?: PayStubDeductionOrderByRelationAggregateInput
  }

  export type PayStubWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: PayStubWhereInput | PayStubWhereInput[]
    OR?: PayStubWhereInput[]
    NOT?: PayStubWhereInput | PayStubWhereInput[]
    payDate?: DateTimeFilter<"PayStub"> | Date | string
    periodStart?: DateTimeFilter<"PayStub"> | Date | string
    periodEnd?: DateTimeFilter<"PayStub"> | Date | string
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    earnings?: PayStubEarningListRelationFilter
    deductions?: PayStubDeductionListRelationFilter
  }, "uuid" | "uuid">

  export type PayStubOrderByWithAggregationInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
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
    grossEarnings?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalWithAggregatesFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringWithAggregatesFilter<"PayStub"> | string
  }

  export type PayStubEarningWhereInput = {
    AND?: PayStubEarningWhereInput | PayStubEarningWhereInput[]
    OR?: PayStubEarningWhereInput[]
    NOT?: PayStubEarningWhereInput | PayStubEarningWhereInput[]
    id?: StringFilter<"PayStubEarning"> | string
    payStubId?: StringNullableFilter<"PayStubEarning"> | string | null
    isDefault?: BoolFilter<"PayStubEarning"> | boolean
    organizationId?: StringNullableFilter<"PayStubEarning"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubEarning"> | string | null
    employeeId?: StringNullableFilter<"PayStubEarning"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubEarning"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubEarning"> | string
    description?: StringNullableFilter<"PayStubEarning"> | string | null
    amount?: DecimalFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string
    hours?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    payStub?: XOR<PayStubNullableScalarRelationFilter, PayStubWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type PayStubEarningOrderByWithRelationInput = {
    id?: SortOrder
    payStubId?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    hours?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    payStub?: PayStubOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    payrollGroup?: PayrollGroupOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayStubEarningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayStubEarningWhereInput | PayStubEarningWhereInput[]
    OR?: PayStubEarningWhereInput[]
    NOT?: PayStubEarningWhereInput | PayStubEarningWhereInput[]
    payStubId?: StringNullableFilter<"PayStubEarning"> | string | null
    isDefault?: BoolFilter<"PayStubEarning"> | boolean
    organizationId?: StringNullableFilter<"PayStubEarning"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubEarning"> | string | null
    employeeId?: StringNullableFilter<"PayStubEarning"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubEarning"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubEarning"> | string
    description?: StringNullableFilter<"PayStubEarning"> | string | null
    amount?: DecimalFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string
    hours?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    payStub?: XOR<PayStubNullableScalarRelationFilter, PayStubWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type PayStubEarningOrderByWithAggregationInput = {
    id?: SortOrder
    payStubId?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    hours?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    _count?: PayStubEarningCountOrderByAggregateInput
    _avg?: PayStubEarningAvgOrderByAggregateInput
    _max?: PayStubEarningMaxOrderByAggregateInput
    _min?: PayStubEarningMinOrderByAggregateInput
    _sum?: PayStubEarningSumOrderByAggregateInput
  }

  export type PayStubEarningScalarWhereWithAggregatesInput = {
    AND?: PayStubEarningScalarWhereWithAggregatesInput | PayStubEarningScalarWhereWithAggregatesInput[]
    OR?: PayStubEarningScalarWhereWithAggregatesInput[]
    NOT?: PayStubEarningScalarWhereWithAggregatesInput | PayStubEarningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayStubEarning"> | string
    payStubId?: StringNullableWithAggregatesFilter<"PayStubEarning"> | string | null
    isDefault?: BoolWithAggregatesFilter<"PayStubEarning"> | boolean
    organizationId?: StringNullableWithAggregatesFilter<"PayStubEarning"> | string | null
    payrollGroupId?: StringNullableWithAggregatesFilter<"PayStubEarning"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"PayStubEarning"> | string | null
    type?: EnumPayStubItemTypeWithAggregatesFilter<"PayStubEarning"> | $Enums.PayStubItemType
    name?: StringWithAggregatesFilter<"PayStubEarning"> | string
    description?: StringNullableWithAggregatesFilter<"PayStubEarning"> | string | null
    amount?: DecimalWithAggregatesFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string
    hours?: DecimalNullableWithAggregatesFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableWithAggregatesFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionWhereInput = {
    AND?: PayStubDeductionWhereInput | PayStubDeductionWhereInput[]
    OR?: PayStubDeductionWhereInput[]
    NOT?: PayStubDeductionWhereInput | PayStubDeductionWhereInput[]
    id?: StringFilter<"PayStubDeduction"> | string
    payStubId?: StringFilter<"PayStubDeduction"> | string
    isDefault?: BoolFilter<"PayStubDeduction"> | boolean
    organizationId?: StringNullableFilter<"PayStubDeduction"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubDeduction"> | string | null
    employeeId?: StringNullableFilter<"PayStubDeduction"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubDeduction"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubDeduction"> | string
    description?: StringNullableFilter<"PayStubDeduction"> | string | null
    amount?: DecimalFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string
    rate?: DecimalNullableFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string | null
    payStub?: XOR<PayStubScalarRelationFilter, PayStubWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }

  export type PayStubDeductionOrderByWithRelationInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    rate?: SortOrderInput | SortOrder
    payStub?: PayStubOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    payrollGroup?: PayrollGroupOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
  }

  export type PayStubDeductionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayStubDeductionWhereInput | PayStubDeductionWhereInput[]
    OR?: PayStubDeductionWhereInput[]
    NOT?: PayStubDeductionWhereInput | PayStubDeductionWhereInput[]
    payStubId?: StringFilter<"PayStubDeduction"> | string
    isDefault?: BoolFilter<"PayStubDeduction"> | boolean
    organizationId?: StringNullableFilter<"PayStubDeduction"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubDeduction"> | string | null
    employeeId?: StringNullableFilter<"PayStubDeduction"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubDeduction"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubDeduction"> | string
    description?: StringNullableFilter<"PayStubDeduction"> | string | null
    amount?: DecimalFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string
    rate?: DecimalNullableFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string | null
    payStub?: XOR<PayStubScalarRelationFilter, PayStubWhereInput>
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    payrollGroup?: XOR<PayrollGroupNullableScalarRelationFilter, PayrollGroupWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
  }, "id">

  export type PayStubDeductionOrderByWithAggregationInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    payrollGroupId?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    rate?: SortOrderInput | SortOrder
    _count?: PayStubDeductionCountOrderByAggregateInput
    _avg?: PayStubDeductionAvgOrderByAggregateInput
    _max?: PayStubDeductionMaxOrderByAggregateInput
    _min?: PayStubDeductionMinOrderByAggregateInput
    _sum?: PayStubDeductionSumOrderByAggregateInput
  }

  export type PayStubDeductionScalarWhereWithAggregatesInput = {
    AND?: PayStubDeductionScalarWhereWithAggregatesInput | PayStubDeductionScalarWhereWithAggregatesInput[]
    OR?: PayStubDeductionScalarWhereWithAggregatesInput[]
    NOT?: PayStubDeductionScalarWhereWithAggregatesInput | PayStubDeductionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayStubDeduction"> | string
    payStubId?: StringWithAggregatesFilter<"PayStubDeduction"> | string
    isDefault?: BoolWithAggregatesFilter<"PayStubDeduction"> | boolean
    organizationId?: StringNullableWithAggregatesFilter<"PayStubDeduction"> | string | null
    payrollGroupId?: StringNullableWithAggregatesFilter<"PayStubDeduction"> | string | null
    employeeId?: StringNullableWithAggregatesFilter<"PayStubDeduction"> | string | null
    type?: EnumPayStubItemTypeWithAggregatesFilter<"PayStubDeduction"> | $Enums.PayStubItemType
    name?: StringWithAggregatesFilter<"PayStubDeduction"> | string
    description?: StringNullableWithAggregatesFilter<"PayStubDeduction"> | string | null
    amount?: DecimalWithAggregatesFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string
    rate?: DecimalNullableWithAggregatesFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string | null
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
    defaultEarnings?: PayStubEarningUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupNestedInput
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
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
    earnings?: PayStubEarningCreateNestedManyWithoutPayStubInput
    deductions?: PayStubDeductionCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
    earnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayStubInput
    deductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
    earnings?: PayStubEarningUpdateManyWithoutPayStubNestedInput
    deductions?: PayStubDeductionUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    earnings?: PayStubEarningUncheckedUpdateManyWithoutPayStubNestedInput
    deductions?: PayStubDeductionUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubCreateManyInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
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
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
  }

  export type PayStubEarningCreateInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubCreateNestedOneWithoutEarningsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultEarningsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultEarningsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultEarningsInput
  }

  export type PayStubEarningUncheckedCreateInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneWithoutEarningsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultEarningsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultEarningsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultEarningsNestedInput
  }

  export type PayStubEarningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateManyInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub: PayStubCreateNestedOneWithoutDeductionsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultDeductionsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultDeductionsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultDeductionsInput
  }

  export type PayStubDeductionUncheckedCreateInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneRequiredWithoutDeductionsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultDeductionsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultDeductionsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultDeductionsNestedInput
  }

  export type PayStubDeductionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateManyInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type PayStubEarningListRelationFilter = {
    every?: PayStubEarningWhereInput
    some?: PayStubEarningWhereInput
    none?: PayStubEarningWhereInput
  }

  export type PayStubDeductionListRelationFilter = {
    every?: PayStubDeductionWhereInput
    some?: PayStubDeductionWhereInput
    none?: PayStubDeductionWhereInput
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

  export type PayStubEarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayStubDeductionOrderByRelationAggregateInput = {
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

  export type PayStubCountOrderByAggregateInput = {
    uuid?: SortOrder
    payDate?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
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

  export type PayStubNullableScalarRelationFilter = {
    is?: PayStubWhereInput | null
    isNot?: PayStubWhereInput | null
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

  export type PayStubEarningCountOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
  }

  export type PayStubEarningAvgOrderByAggregateInput = {
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
  }

  export type PayStubEarningMaxOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
  }

  export type PayStubEarningMinOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
  }

  export type PayStubEarningSumOrderByAggregateInput = {
    amount?: SortOrder
    hours?: SortOrder
    rate?: SortOrder
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

  export type PayStubScalarRelationFilter = {
    is?: PayStubWhereInput
    isNot?: PayStubWhereInput
  }

  export type PayStubDeductionCountOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    rate?: SortOrder
  }

  export type PayStubDeductionAvgOrderByAggregateInput = {
    amount?: SortOrder
    rate?: SortOrder
  }

  export type PayStubDeductionMaxOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    rate?: SortOrder
  }

  export type PayStubDeductionMinOrderByAggregateInput = {
    id?: SortOrder
    payStubId?: SortOrder
    isDefault?: SortOrder
    organizationId?: SortOrder
    payrollGroupId?: SortOrder
    employeeId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    rate?: SortOrder
  }

  export type PayStubDeductionSumOrderByAggregateInput = {
    amount?: SortOrder
    rate?: SortOrder
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

  export type PayStubEarningCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput> | PayStubEarningCreateWithoutOrganizationInput[] | PayStubEarningUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutOrganizationInput | PayStubEarningCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayStubEarningCreateManyOrganizationInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput> | PayStubDeductionCreateWithoutOrganizationInput[] | PayStubDeductionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutOrganizationInput | PayStubDeductionCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayStubDeductionCreateManyOrganizationInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
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

  export type PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput> | PayStubEarningCreateWithoutOrganizationInput[] | PayStubEarningUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutOrganizationInput | PayStubEarningCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayStubEarningCreateManyOrganizationInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput> | PayStubDeductionCreateWithoutOrganizationInput[] | PayStubDeductionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutOrganizationInput | PayStubDeductionCreateOrConnectWithoutOrganizationInput[]
    createMany?: PayStubDeductionCreateManyOrganizationInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
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

  export type PayStubEarningUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput> | PayStubEarningCreateWithoutOrganizationInput[] | PayStubEarningUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutOrganizationInput | PayStubEarningCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutOrganizationInput | PayStubEarningUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayStubEarningCreateManyOrganizationInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutOrganizationInput | PayStubEarningUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutOrganizationInput | PayStubEarningUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput> | PayStubDeductionCreateWithoutOrganizationInput[] | PayStubDeductionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutOrganizationInput | PayStubDeductionCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutOrganizationInput | PayStubDeductionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayStubDeductionCreateManyOrganizationInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutOrganizationInput | PayStubDeductionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutOrganizationInput | PayStubDeductionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput> | PayStubEarningCreateWithoutOrganizationInput[] | PayStubEarningUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutOrganizationInput | PayStubEarningCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutOrganizationInput | PayStubEarningUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayStubEarningCreateManyOrganizationInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutOrganizationInput | PayStubEarningUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutOrganizationInput | PayStubEarningUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput> | PayStubDeductionCreateWithoutOrganizationInput[] | PayStubDeductionUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutOrganizationInput | PayStubDeductionCreateOrConnectWithoutOrganizationInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutOrganizationInput | PayStubDeductionUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: PayStubDeductionCreateManyOrganizationInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutOrganizationInput | PayStubDeductionUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutOrganizationInput | PayStubDeductionUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput> | PayStubEarningCreateWithoutEmployeeInput[] | PayStubEarningUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutEmployeeInput | PayStubEarningCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubEarningCreateManyEmployeeInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput> | PayStubDeductionCreateWithoutEmployeeInput[] | PayStubDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutEmployeeInput | PayStubDeductionCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubDeductionCreateManyEmployeeInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
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

  export type PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput> | PayStubEarningCreateWithoutEmployeeInput[] | PayStubEarningUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutEmployeeInput | PayStubEarningCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubEarningCreateManyEmployeeInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput> | PayStubDeductionCreateWithoutEmployeeInput[] | PayStubDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutEmployeeInput | PayStubDeductionCreateOrConnectWithoutEmployeeInput[]
    createMany?: PayStubDeductionCreateManyEmployeeInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
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

  export type PayStubEarningUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput> | PayStubEarningCreateWithoutEmployeeInput[] | PayStubEarningUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutEmployeeInput | PayStubEarningCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutEmployeeInput | PayStubEarningUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubEarningCreateManyEmployeeInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutEmployeeInput | PayStubEarningUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutEmployeeInput | PayStubEarningUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput> | PayStubDeductionCreateWithoutEmployeeInput[] | PayStubDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutEmployeeInput | PayStubDeductionCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutEmployeeInput | PayStubDeductionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubDeductionCreateManyEmployeeInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutEmployeeInput | PayStubDeductionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutEmployeeInput | PayStubDeductionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput> | PayStubEarningCreateWithoutEmployeeInput[] | PayStubEarningUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutEmployeeInput | PayStubEarningCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutEmployeeInput | PayStubEarningUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubEarningCreateManyEmployeeInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutEmployeeInput | PayStubEarningUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutEmployeeInput | PayStubEarningUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput> | PayStubDeductionCreateWithoutEmployeeInput[] | PayStubDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutEmployeeInput | PayStubDeductionCreateOrConnectWithoutEmployeeInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutEmployeeInput | PayStubDeductionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: PayStubDeductionCreateManyEmployeeInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutEmployeeInput | PayStubDeductionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutEmployeeInput | PayStubDeductionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput> | PayStubEarningCreateWithoutPayrollGroupInput[] | PayStubEarningUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayrollGroupInput | PayStubEarningCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayStubEarningCreateManyPayrollGroupInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput> | PayStubDeductionCreateWithoutPayrollGroupInput[] | PayStubDeductionUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayrollGroupInput | PayStubDeductionCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayStubDeductionCreateManyPayrollGroupInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
  }

  export type EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<EmployeeCompensationCreateWithoutPayrollGroupInput, EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput> | EmployeeCompensationCreateWithoutPayrollGroupInput[] | EmployeeCompensationUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput | EmployeeCompensationCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: EmployeeCompensationCreateManyPayrollGroupInputEnvelope
    connect?: EmployeeCompensationWhereUniqueInput | EmployeeCompensationWhereUniqueInput[]
  }

  export type PayStubEarningUncheckedCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput> | PayStubEarningCreateWithoutPayrollGroupInput[] | PayStubEarningUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayrollGroupInput | PayStubEarningCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayStubEarningCreateManyPayrollGroupInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionUncheckedCreateNestedManyWithoutPayrollGroupInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput> | PayStubDeductionCreateWithoutPayrollGroupInput[] | PayStubDeductionUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayrollGroupInput | PayStubDeductionCreateOrConnectWithoutPayrollGroupInput[]
    createMany?: PayStubDeductionCreateManyPayrollGroupInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
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

  export type PayStubEarningUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput> | PayStubEarningCreateWithoutPayrollGroupInput[] | PayStubEarningUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayrollGroupInput | PayStubEarningCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutPayrollGroupInput | PayStubEarningUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayStubEarningCreateManyPayrollGroupInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutPayrollGroupInput | PayStubEarningUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutPayrollGroupInput | PayStubEarningUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput> | PayStubDeductionCreateWithoutPayrollGroupInput[] | PayStubDeductionUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayrollGroupInput | PayStubDeductionCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutPayrollGroupInput | PayStubDeductionUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayStubDeductionCreateManyPayrollGroupInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutPayrollGroupInput | PayStubDeductionUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutPayrollGroupInput | PayStubDeductionUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningUncheckedUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput> | PayStubEarningCreateWithoutPayrollGroupInput[] | PayStubEarningUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayrollGroupInput | PayStubEarningCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutPayrollGroupInput | PayStubEarningUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayStubEarningCreateManyPayrollGroupInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutPayrollGroupInput | PayStubEarningUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutPayrollGroupInput | PayStubEarningUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput> | PayStubDeductionCreateWithoutPayrollGroupInput[] | PayStubDeductionUncheckedCreateWithoutPayrollGroupInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayrollGroupInput | PayStubDeductionCreateOrConnectWithoutPayrollGroupInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutPayrollGroupInput | PayStubDeductionUpsertWithWhereUniqueWithoutPayrollGroupInput[]
    createMany?: PayStubDeductionCreateManyPayrollGroupInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutPayrollGroupInput | PayStubDeductionUpdateWithWhereUniqueWithoutPayrollGroupInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutPayrollGroupInput | PayStubDeductionUpdateManyWithWhereWithoutPayrollGroupInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
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

  export type PayStubEarningCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput> | PayStubEarningCreateWithoutPayStubInput[] | PayStubEarningUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayStubInput | PayStubEarningCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubEarningCreateManyPayStubInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput> | PayStubDeductionCreateWithoutPayStubInput[] | PayStubDeductionUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayStubInput | PayStubDeductionCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubDeductionCreateManyPayStubInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
  }

  export type PayStubEarningUncheckedCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput> | PayStubEarningCreateWithoutPayStubInput[] | PayStubEarningUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayStubInput | PayStubEarningCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubEarningCreateManyPayStubInputEnvelope
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
  }

  export type PayStubDeductionUncheckedCreateNestedManyWithoutPayStubInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput> | PayStubDeductionCreateWithoutPayStubInput[] | PayStubDeductionUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayStubInput | PayStubDeductionCreateOrConnectWithoutPayStubInput[]
    createMany?: PayStubDeductionCreateManyPayStubInputEnvelope
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutPayStubsNestedInput = {
    create?: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutPayStubsInput
    upsert?: EmployeeUpsertWithoutPayStubsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutPayStubsInput, EmployeeUpdateWithoutPayStubsInput>, EmployeeUncheckedUpdateWithoutPayStubsInput>
  }

  export type PayStubEarningUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput> | PayStubEarningCreateWithoutPayStubInput[] | PayStubEarningUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayStubInput | PayStubEarningCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutPayStubInput | PayStubEarningUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubEarningCreateManyPayStubInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutPayStubInput | PayStubEarningUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutPayStubInput | PayStubEarningUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput> | PayStubDeductionCreateWithoutPayStubInput[] | PayStubDeductionUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayStubInput | PayStubDeductionCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutPayStubInput | PayStubDeductionUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubDeductionCreateManyPayStubInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutPayStubInput | PayStubDeductionUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutPayStubInput | PayStubDeductionUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
  }

  export type PayStubEarningUncheckedUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput> | PayStubEarningCreateWithoutPayStubInput[] | PayStubEarningUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubEarningCreateOrConnectWithoutPayStubInput | PayStubEarningCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubEarningUpsertWithWhereUniqueWithoutPayStubInput | PayStubEarningUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubEarningCreateManyPayStubInputEnvelope
    set?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    disconnect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    delete?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    connect?: PayStubEarningWhereUniqueInput | PayStubEarningWhereUniqueInput[]
    update?: PayStubEarningUpdateWithWhereUniqueWithoutPayStubInput | PayStubEarningUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubEarningUpdateManyWithWhereWithoutPayStubInput | PayStubEarningUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutPayStubNestedInput = {
    create?: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput> | PayStubDeductionCreateWithoutPayStubInput[] | PayStubDeductionUncheckedCreateWithoutPayStubInput[]
    connectOrCreate?: PayStubDeductionCreateOrConnectWithoutPayStubInput | PayStubDeductionCreateOrConnectWithoutPayStubInput[]
    upsert?: PayStubDeductionUpsertWithWhereUniqueWithoutPayStubInput | PayStubDeductionUpsertWithWhereUniqueWithoutPayStubInput[]
    createMany?: PayStubDeductionCreateManyPayStubInputEnvelope
    set?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    disconnect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    delete?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    connect?: PayStubDeductionWhereUniqueInput | PayStubDeductionWhereUniqueInput[]
    update?: PayStubDeductionUpdateWithWhereUniqueWithoutPayStubInput | PayStubDeductionUpdateWithWhereUniqueWithoutPayStubInput[]
    updateMany?: PayStubDeductionUpdateManyWithWhereWithoutPayStubInput | PayStubDeductionUpdateManyWithWhereWithoutPayStubInput[]
    deleteMany?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
  }

  export type PayStubCreateNestedOneWithoutEarningsInput = {
    create?: XOR<PayStubCreateWithoutEarningsInput, PayStubUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutEarningsInput
    connect?: PayStubWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutDefaultEarningsInput = {
    create?: XOR<OrganizationCreateWithoutDefaultEarningsInput, OrganizationUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultEarningsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayrollGroupCreateNestedOneWithoutDefaultEarningsInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultEarningsInput, PayrollGroupUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultEarningsInput
    connect?: PayrollGroupWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutDefaultEarningsInput = {
    create?: XOR<EmployeeCreateWithoutDefaultEarningsInput, EmployeeUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultEarningsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumPayStubItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.PayStubItemType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PayStubUpdateOneWithoutEarningsNestedInput = {
    create?: XOR<PayStubCreateWithoutEarningsInput, PayStubUncheckedCreateWithoutEarningsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutEarningsInput
    upsert?: PayStubUpsertWithoutEarningsInput
    disconnect?: PayStubWhereInput | boolean
    delete?: PayStubWhereInput | boolean
    connect?: PayStubWhereUniqueInput
    update?: XOR<XOR<PayStubUpdateToOneWithWhereWithoutEarningsInput, PayStubUpdateWithoutEarningsInput>, PayStubUncheckedUpdateWithoutEarningsInput>
  }

  export type OrganizationUpdateOneWithoutDefaultEarningsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDefaultEarningsInput, OrganizationUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultEarningsInput
    upsert?: OrganizationUpsertWithoutDefaultEarningsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDefaultEarningsInput, OrganizationUpdateWithoutDefaultEarningsInput>, OrganizationUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type PayrollGroupUpdateOneWithoutDefaultEarningsNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultEarningsInput, PayrollGroupUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultEarningsInput
    upsert?: PayrollGroupUpsertWithoutDefaultEarningsInput
    disconnect?: PayrollGroupWhereInput | boolean
    delete?: PayrollGroupWhereInput | boolean
    connect?: PayrollGroupWhereUniqueInput
    update?: XOR<XOR<PayrollGroupUpdateToOneWithWhereWithoutDefaultEarningsInput, PayrollGroupUpdateWithoutDefaultEarningsInput>, PayrollGroupUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type EmployeeUpdateOneWithoutDefaultEarningsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDefaultEarningsInput, EmployeeUncheckedCreateWithoutDefaultEarningsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultEarningsInput
    upsert?: EmployeeUpsertWithoutDefaultEarningsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDefaultEarningsInput, EmployeeUpdateWithoutDefaultEarningsInput>, EmployeeUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type PayStubCreateNestedOneWithoutDeductionsInput = {
    create?: XOR<PayStubCreateWithoutDeductionsInput, PayStubUncheckedCreateWithoutDeductionsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutDeductionsInput
    connect?: PayStubWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutDefaultDeductionsInput = {
    create?: XOR<OrganizationCreateWithoutDefaultDeductionsInput, OrganizationUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultDeductionsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type PayrollGroupCreateNestedOneWithoutDefaultDeductionsInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultDeductionsInput, PayrollGroupUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultDeductionsInput
    connect?: PayrollGroupWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutDefaultDeductionsInput = {
    create?: XOR<EmployeeCreateWithoutDefaultDeductionsInput, EmployeeUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultDeductionsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PayStubUpdateOneRequiredWithoutDeductionsNestedInput = {
    create?: XOR<PayStubCreateWithoutDeductionsInput, PayStubUncheckedCreateWithoutDeductionsInput>
    connectOrCreate?: PayStubCreateOrConnectWithoutDeductionsInput
    upsert?: PayStubUpsertWithoutDeductionsInput
    connect?: PayStubWhereUniqueInput
    update?: XOR<XOR<PayStubUpdateToOneWithWhereWithoutDeductionsInput, PayStubUpdateWithoutDeductionsInput>, PayStubUncheckedUpdateWithoutDeductionsInput>
  }

  export type OrganizationUpdateOneWithoutDefaultDeductionsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDefaultDeductionsInput, OrganizationUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDefaultDeductionsInput
    upsert?: OrganizationUpsertWithoutDefaultDeductionsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDefaultDeductionsInput, OrganizationUpdateWithoutDefaultDeductionsInput>, OrganizationUncheckedUpdateWithoutDefaultDeductionsInput>
  }

  export type PayrollGroupUpdateOneWithoutDefaultDeductionsNestedInput = {
    create?: XOR<PayrollGroupCreateWithoutDefaultDeductionsInput, PayrollGroupUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: PayrollGroupCreateOrConnectWithoutDefaultDeductionsInput
    upsert?: PayrollGroupUpsertWithoutDefaultDeductionsInput
    disconnect?: PayrollGroupWhereInput | boolean
    delete?: PayrollGroupWhereInput | boolean
    connect?: PayrollGroupWhereUniqueInput
    update?: XOR<XOR<PayrollGroupUpdateToOneWithWhereWithoutDefaultDeductionsInput, PayrollGroupUpdateWithoutDefaultDeductionsInput>, PayrollGroupUncheckedUpdateWithoutDefaultDeductionsInput>
  }

  export type EmployeeUpdateOneWithoutDefaultDeductionsNestedInput = {
    create?: XOR<EmployeeCreateWithoutDefaultDeductionsInput, EmployeeUncheckedCreateWithoutDefaultDeductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutDefaultDeductionsInput
    upsert?: EmployeeUpsertWithoutDefaultDeductionsInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutDefaultDeductionsInput, EmployeeUpdateWithoutDefaultDeductionsInput>, EmployeeUncheckedUpdateWithoutDefaultDeductionsInput>
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutOrganizationInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayrollGroupInput
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

  export type PayStubEarningCreateWithoutOrganizationInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubCreateNestedOneWithoutEarningsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultEarningsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultEarningsInput
  }

  export type PayStubEarningUncheckedCreateWithoutOrganizationInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateOrConnectWithoutOrganizationInput = {
    where: PayStubEarningWhereUniqueInput
    create: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput>
  }

  export type PayStubEarningCreateManyOrganizationInputEnvelope = {
    data: PayStubEarningCreateManyOrganizationInput | PayStubEarningCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type PayStubDeductionCreateWithoutOrganizationInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub: PayStubCreateNestedOneWithoutDeductionsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultDeductionsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultDeductionsInput
  }

  export type PayStubDeductionUncheckedCreateWithoutOrganizationInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateOrConnectWithoutOrganizationInput = {
    where: PayStubDeductionWhereUniqueInput
    create: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput>
  }

  export type PayStubDeductionCreateManyOrganizationInputEnvelope = {
    data: PayStubDeductionCreateManyOrganizationInput | PayStubDeductionCreateManyOrganizationInput[]
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

  export type PayStubEarningUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PayStubEarningWhereUniqueInput
    update: XOR<PayStubEarningUpdateWithoutOrganizationInput, PayStubEarningUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PayStubEarningCreateWithoutOrganizationInput, PayStubEarningUncheckedCreateWithoutOrganizationInput>
  }

  export type PayStubEarningUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PayStubEarningWhereUniqueInput
    data: XOR<PayStubEarningUpdateWithoutOrganizationInput, PayStubEarningUncheckedUpdateWithoutOrganizationInput>
  }

  export type PayStubEarningUpdateManyWithWhereWithoutOrganizationInput = {
    where: PayStubEarningScalarWhereInput
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PayStubEarningScalarWhereInput = {
    AND?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
    OR?: PayStubEarningScalarWhereInput[]
    NOT?: PayStubEarningScalarWhereInput | PayStubEarningScalarWhereInput[]
    id?: StringFilter<"PayStubEarning"> | string
    payStubId?: StringNullableFilter<"PayStubEarning"> | string | null
    isDefault?: BoolFilter<"PayStubEarning"> | boolean
    organizationId?: StringNullableFilter<"PayStubEarning"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubEarning"> | string | null
    employeeId?: StringNullableFilter<"PayStubEarning"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubEarning"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubEarning"> | string
    description?: StringNullableFilter<"PayStubEarning"> | string | null
    amount?: DecimalFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string
    hours?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
    rate?: DecimalNullableFilter<"PayStubEarning"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: PayStubDeductionWhereUniqueInput
    update: XOR<PayStubDeductionUpdateWithoutOrganizationInput, PayStubDeductionUncheckedUpdateWithoutOrganizationInput>
    create: XOR<PayStubDeductionCreateWithoutOrganizationInput, PayStubDeductionUncheckedCreateWithoutOrganizationInput>
  }

  export type PayStubDeductionUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: PayStubDeductionWhereUniqueInput
    data: XOR<PayStubDeductionUpdateWithoutOrganizationInput, PayStubDeductionUncheckedUpdateWithoutOrganizationInput>
  }

  export type PayStubDeductionUpdateManyWithWhereWithoutOrganizationInput = {
    where: PayStubDeductionScalarWhereInput
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type PayStubDeductionScalarWhereInput = {
    AND?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
    OR?: PayStubDeductionScalarWhereInput[]
    NOT?: PayStubDeductionScalarWhereInput | PayStubDeductionScalarWhereInput[]
    id?: StringFilter<"PayStubDeduction"> | string
    payStubId?: StringFilter<"PayStubDeduction"> | string
    isDefault?: BoolFilter<"PayStubDeduction"> | boolean
    organizationId?: StringNullableFilter<"PayStubDeduction"> | string | null
    payrollGroupId?: StringNullableFilter<"PayStubDeduction"> | string | null
    employeeId?: StringNullableFilter<"PayStubDeduction"> | string | null
    type?: EnumPayStubItemTypeFilter<"PayStubDeduction"> | $Enums.PayStubItemType
    name?: StringFilter<"PayStubDeduction"> | string
    description?: StringNullableFilter<"PayStubDeduction"> | string | null
    amount?: DecimalFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string
    rate?: DecimalNullableFilter<"PayStubDeduction"> | Decimal | DecimalJsLike | number | string | null
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
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
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    earnings?: PayStubEarningCreateNestedManyWithoutPayStubInput
    deductions?: PayStubDeductionCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateWithoutEmployeeInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    earnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayStubInput
    deductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubCreateOrConnectWithoutEmployeeInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutEmployeeInput, PayStubUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubCreateManyEmployeeInputEnvelope = {
    data: PayStubCreateManyEmployeeInput | PayStubCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayStubEarningCreateWithoutEmployeeInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubCreateNestedOneWithoutEarningsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultEarningsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultEarningsInput
  }

  export type PayStubEarningUncheckedCreateWithoutEmployeeInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateOrConnectWithoutEmployeeInput = {
    where: PayStubEarningWhereUniqueInput
    create: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubEarningCreateManyEmployeeInputEnvelope = {
    data: PayStubEarningCreateManyEmployeeInput | PayStubEarningCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type PayStubDeductionCreateWithoutEmployeeInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub: PayStubCreateNestedOneWithoutDeductionsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultDeductionsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultDeductionsInput
  }

  export type PayStubDeductionUncheckedCreateWithoutEmployeeInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateOrConnectWithoutEmployeeInput = {
    where: PayStubDeductionWhereUniqueInput
    create: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubDeductionCreateManyEmployeeInputEnvelope = {
    data: PayStubDeductionCreateManyEmployeeInput | PayStubDeductionCreateManyEmployeeInput[]
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
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
    grossEarnings?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFilter<"PayStub"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"PayStub"> | string
  }

  export type PayStubEarningUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubEarningWhereUniqueInput
    update: XOR<PayStubEarningUpdateWithoutEmployeeInput, PayStubEarningUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayStubEarningCreateWithoutEmployeeInput, PayStubEarningUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubEarningUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubEarningWhereUniqueInput
    data: XOR<PayStubEarningUpdateWithoutEmployeeInput, PayStubEarningUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayStubEarningUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayStubEarningScalarWhereInput
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type PayStubDeductionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubDeductionWhereUniqueInput
    update: XOR<PayStubDeductionUpdateWithoutEmployeeInput, PayStubDeductionUncheckedUpdateWithoutEmployeeInput>
    create: XOR<PayStubDeductionCreateWithoutEmployeeInput, PayStubDeductionUncheckedCreateWithoutEmployeeInput>
  }

  export type PayStubDeductionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: PayStubDeductionWhereUniqueInput
    data: XOR<PayStubDeductionUpdateWithoutEmployeeInput, PayStubDeductionUncheckedUpdateWithoutEmployeeInput>
  }

  export type PayStubDeductionUpdateManyWithWhereWithoutEmployeeInput = {
    where: PayStubDeductionScalarWhereInput
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyWithoutEmployeeInput>
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
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

  export type PayStubEarningCreateWithoutPayrollGroupInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubCreateNestedOneWithoutEarningsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultEarningsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultEarningsInput
  }

  export type PayStubEarningUncheckedCreateWithoutPayrollGroupInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateOrConnectWithoutPayrollGroupInput = {
    where: PayStubEarningWhereUniqueInput
    create: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayStubEarningCreateManyPayrollGroupInputEnvelope = {
    data: PayStubEarningCreateManyPayrollGroupInput | PayStubEarningCreateManyPayrollGroupInput[]
    skipDuplicates?: boolean
  }

  export type PayStubDeductionCreateWithoutPayrollGroupInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
    payStub: PayStubCreateNestedOneWithoutDeductionsInput
    organization?: OrganizationCreateNestedOneWithoutDefaultDeductionsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultDeductionsInput
  }

  export type PayStubDeductionUncheckedCreateWithoutPayrollGroupInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateOrConnectWithoutPayrollGroupInput = {
    where: PayStubDeductionWhereUniqueInput
    create: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayStubDeductionCreateManyPayrollGroupInputEnvelope = {
    data: PayStubDeductionCreateManyPayrollGroupInput | PayStubDeductionCreateManyPayrollGroupInput[]
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
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

  export type PayStubEarningUpsertWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayStubEarningWhereUniqueInput
    update: XOR<PayStubEarningUpdateWithoutPayrollGroupInput, PayStubEarningUncheckedUpdateWithoutPayrollGroupInput>
    create: XOR<PayStubEarningCreateWithoutPayrollGroupInput, PayStubEarningUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayStubEarningUpdateWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayStubEarningWhereUniqueInput
    data: XOR<PayStubEarningUpdateWithoutPayrollGroupInput, PayStubEarningUncheckedUpdateWithoutPayrollGroupInput>
  }

  export type PayStubEarningUpdateManyWithWhereWithoutPayrollGroupInput = {
    where: PayStubEarningScalarWhereInput
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyWithoutPayrollGroupInput>
  }

  export type PayStubDeductionUpsertWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayStubDeductionWhereUniqueInput
    update: XOR<PayStubDeductionUpdateWithoutPayrollGroupInput, PayStubDeductionUncheckedUpdateWithoutPayrollGroupInput>
    create: XOR<PayStubDeductionCreateWithoutPayrollGroupInput, PayStubDeductionUncheckedCreateWithoutPayrollGroupInput>
  }

  export type PayStubDeductionUpdateWithWhereUniqueWithoutPayrollGroupInput = {
    where: PayStubDeductionWhereUniqueInput
    data: XOR<PayStubDeductionUpdateWithoutPayrollGroupInput, PayStubDeductionUncheckedUpdateWithoutPayrollGroupInput>
  }

  export type PayStubDeductionUpdateManyWithWhereWithoutPayrollGroupInput = {
    where: PayStubDeductionScalarWhereInput
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupInput>
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutCompensationsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayrollGroupInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutCompensationsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupNestedInput
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutEmployeeInput
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutPayStubsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutPayStubsInput, EmployeeUncheckedCreateWithoutPayStubsInput>
  }

  export type PayStubEarningCreateWithoutPayStubInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
    organization?: OrganizationCreateNestedOneWithoutDefaultEarningsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultEarningsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultEarningsInput
  }

  export type PayStubEarningUncheckedCreateWithoutPayStubInput = {
    id?: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateOrConnectWithoutPayStubInput = {
    where: PayStubEarningWhereUniqueInput
    create: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubEarningCreateManyPayStubInputEnvelope = {
    data: PayStubEarningCreateManyPayStubInput | PayStubEarningCreateManyPayStubInput[]
    skipDuplicates?: boolean
  }

  export type PayStubDeductionCreateWithoutPayStubInput = {
    id?: string
    isDefault?: boolean
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
    organization?: OrganizationCreateNestedOneWithoutDefaultDeductionsInput
    payrollGroup?: PayrollGroupCreateNestedOneWithoutDefaultDeductionsInput
    employee?: EmployeeCreateNestedOneWithoutDefaultDeductionsInput
  }

  export type PayStubDeductionUncheckedCreateWithoutPayStubInput = {
    id?: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateOrConnectWithoutPayStubInput = {
    where: PayStubDeductionWhereUniqueInput
    create: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubDeductionCreateManyPayStubInputEnvelope = {
    data: PayStubDeductionCreateManyPayStubInput | PayStubDeductionCreateManyPayStubInput[]
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayStubEarningUpsertWithWhereUniqueWithoutPayStubInput = {
    where: PayStubEarningWhereUniqueInput
    update: XOR<PayStubEarningUpdateWithoutPayStubInput, PayStubEarningUncheckedUpdateWithoutPayStubInput>
    create: XOR<PayStubEarningCreateWithoutPayStubInput, PayStubEarningUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubEarningUpdateWithWhereUniqueWithoutPayStubInput = {
    where: PayStubEarningWhereUniqueInput
    data: XOR<PayStubEarningUpdateWithoutPayStubInput, PayStubEarningUncheckedUpdateWithoutPayStubInput>
  }

  export type PayStubEarningUpdateManyWithWhereWithoutPayStubInput = {
    where: PayStubEarningScalarWhereInput
    data: XOR<PayStubEarningUpdateManyMutationInput, PayStubEarningUncheckedUpdateManyWithoutPayStubInput>
  }

  export type PayStubDeductionUpsertWithWhereUniqueWithoutPayStubInput = {
    where: PayStubDeductionWhereUniqueInput
    update: XOR<PayStubDeductionUpdateWithoutPayStubInput, PayStubDeductionUncheckedUpdateWithoutPayStubInput>
    create: XOR<PayStubDeductionCreateWithoutPayStubInput, PayStubDeductionUncheckedCreateWithoutPayStubInput>
  }

  export type PayStubDeductionUpdateWithWhereUniqueWithoutPayStubInput = {
    where: PayStubDeductionWhereUniqueInput
    data: XOR<PayStubDeductionUpdateWithoutPayStubInput, PayStubDeductionUncheckedUpdateWithoutPayStubInput>
  }

  export type PayStubDeductionUpdateManyWithWhereWithoutPayStubInput = {
    where: PayStubDeductionScalarWhereInput
    data: XOR<PayStubDeductionUpdateManyMutationInput, PayStubDeductionUncheckedUpdateManyWithoutPayStubInput>
  }

  export type PayStubCreateWithoutEarningsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
    deductions?: PayStubDeductionCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateWithoutEarningsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
    deductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubCreateOrConnectWithoutEarningsInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutEarningsInput, PayStubUncheckedCreateWithoutEarningsInput>
  }

  export type OrganizationCreateWithoutDefaultEarningsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDefaultEarningsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDefaultEarningsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDefaultEarningsInput, OrganizationUncheckedCreateWithoutDefaultEarningsInput>
  }

  export type PayrollGroupCreateWithoutDefaultEarningsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organization: OrganizationCreateNestedOneWithoutPayrollGroupsInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutDefaultEarningsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupCreateOrConnectWithoutDefaultEarningsInput = {
    where: PayrollGroupWhereUniqueInput
    create: XOR<PayrollGroupCreateWithoutDefaultEarningsInput, PayrollGroupUncheckedCreateWithoutDefaultEarningsInput>
  }

  export type EmployeeCreateWithoutDefaultEarningsInput = {
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
    defaultDeductions?: PayStubDeductionCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDefaultEarningsInput = {
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
    defaultDeductions?: PayStubDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDefaultEarningsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDefaultEarningsInput, EmployeeUncheckedCreateWithoutDefaultEarningsInput>
  }

  export type PayStubUpsertWithoutEarningsInput = {
    update: XOR<PayStubUpdateWithoutEarningsInput, PayStubUncheckedUpdateWithoutEarningsInput>
    create: XOR<PayStubCreateWithoutEarningsInput, PayStubUncheckedCreateWithoutEarningsInput>
    where?: PayStubWhereInput
  }

  export type PayStubUpdateToOneWithWhereWithoutEarningsInput = {
    where?: PayStubWhereInput
    data: XOR<PayStubUpdateWithoutEarningsInput, PayStubUncheckedUpdateWithoutEarningsInput>
  }

  export type PayStubUpdateWithoutEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
    deductions?: PayStubDeductionUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateWithoutEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    deductions?: PayStubDeductionUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type OrganizationUpsertWithoutDefaultEarningsInput = {
    update: XOR<OrganizationUpdateWithoutDefaultEarningsInput, OrganizationUncheckedUpdateWithoutDefaultEarningsInput>
    create: XOR<OrganizationCreateWithoutDefaultEarningsInput, OrganizationUncheckedCreateWithoutDefaultEarningsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDefaultEarningsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDefaultEarningsInput, OrganizationUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type OrganizationUpdateWithoutDefaultEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDefaultEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PayrollGroupUpsertWithoutDefaultEarningsInput = {
    update: XOR<PayrollGroupUpdateWithoutDefaultEarningsInput, PayrollGroupUncheckedUpdateWithoutDefaultEarningsInput>
    create: XOR<PayrollGroupCreateWithoutDefaultEarningsInput, PayrollGroupUncheckedCreateWithoutDefaultEarningsInput>
    where?: PayrollGroupWhereInput
  }

  export type PayrollGroupUpdateToOneWithWhereWithoutDefaultEarningsInput = {
    where?: PayrollGroupWhereInput
    data: XOR<PayrollGroupUpdateWithoutDefaultEarningsInput, PayrollGroupUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type PayrollGroupUpdateWithoutDefaultEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutDefaultEarningsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type EmployeeUpsertWithoutDefaultEarningsInput = {
    update: XOR<EmployeeUpdateWithoutDefaultEarningsInput, EmployeeUncheckedUpdateWithoutDefaultEarningsInput>
    create: XOR<EmployeeCreateWithoutDefaultEarningsInput, EmployeeUncheckedCreateWithoutDefaultEarningsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDefaultEarningsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDefaultEarningsInput, EmployeeUncheckedUpdateWithoutDefaultEarningsInput>
  }

  export type EmployeeUpdateWithoutDefaultEarningsInput = {
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
    defaultDeductions?: PayStubDeductionUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDefaultEarningsInput = {
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
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type PayStubCreateWithoutDeductionsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employee: EmployeeCreateNestedOneWithoutPayStubsInput
    earnings?: PayStubEarningCreateNestedManyWithoutPayStubInput
  }

  export type PayStubUncheckedCreateWithoutDeductionsInput = {
    uuid?: string
    payDate: Date | string
    periodStart: Date | string
    periodEnd: Date | string
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
    employeeId: string
    earnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayStubInput
  }

  export type PayStubCreateOrConnectWithoutDeductionsInput = {
    where: PayStubWhereUniqueInput
    create: XOR<PayStubCreateWithoutDeductionsInput, PayStubUncheckedCreateWithoutDeductionsInput>
  }

  export type OrganizationCreateWithoutDefaultDeductionsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeCreateNestedManyWithoutOrganizationInput
    memberships?: RoleCreateNestedManyWithoutOrganizationInput
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutDefaultDeductionsInput = {
    uuid?: string
    name: string
    notes?: string
    address?: string
    isDeleted?: boolean
    employees?: EmployeeUncheckedCreateNestedManyWithoutOrganizationInput
    payrollGroups?: PayrollGroupUncheckedCreateNestedManyWithoutOrganizationInput
    inviteCodes?: InviteCodeUncheckedCreateNestedManyWithoutOrganizationInput
    memberships?: RoleUncheckedCreateNestedManyWithoutOrganizationInput
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutDefaultDeductionsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDefaultDeductionsInput, OrganizationUncheckedCreateWithoutDefaultDeductionsInput>
  }

  export type PayrollGroupCreateWithoutDefaultDeductionsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organization: OrganizationCreateNestedOneWithoutPayrollGroupsInput
    compensations?: EmployeeCompensationCreateNestedManyWithoutPayrollGroupInput
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupUncheckedCreateWithoutDefaultDeductionsInput = {
    uuid?: string
    name: string
    description: string
    payFrequency?: number
    payRefDate: Date | string
    organizationId: string
    compensations?: EmployeeCompensationUncheckedCreateNestedManyWithoutPayrollGroupInput
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutPayrollGroupInput
  }

  export type PayrollGroupCreateOrConnectWithoutDefaultDeductionsInput = {
    where: PayrollGroupWhereUniqueInput
    create: XOR<PayrollGroupCreateWithoutDefaultDeductionsInput, PayrollGroupUncheckedCreateWithoutDefaultDeductionsInput>
  }

  export type EmployeeCreateWithoutDefaultDeductionsInput = {
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
    defaultEarnings?: PayStubEarningCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutDefaultDeductionsInput = {
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
    defaultEarnings?: PayStubEarningUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutDefaultDeductionsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutDefaultDeductionsInput, EmployeeUncheckedCreateWithoutDefaultDeductionsInput>
  }

  export type PayStubUpsertWithoutDeductionsInput = {
    update: XOR<PayStubUpdateWithoutDeductionsInput, PayStubUncheckedUpdateWithoutDeductionsInput>
    create: XOR<PayStubCreateWithoutDeductionsInput, PayStubUncheckedCreateWithoutDeductionsInput>
    where?: PayStubWhereInput
  }

  export type PayStubUpdateToOneWithWhereWithoutDeductionsInput = {
    where?: PayStubWhereInput
    data: XOR<PayStubUpdateWithoutDeductionsInput, PayStubUncheckedUpdateWithoutDeductionsInput>
  }

  export type PayStubUpdateWithoutDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee?: EmployeeUpdateOneRequiredWithoutPayStubsNestedInput
    earnings?: PayStubEarningUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateWithoutDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    earnings?: PayStubEarningUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type OrganizationUpsertWithoutDefaultDeductionsInput = {
    update: XOR<OrganizationUpdateWithoutDefaultDeductionsInput, OrganizationUncheckedUpdateWithoutDefaultDeductionsInput>
    create: XOR<OrganizationCreateWithoutDefaultDeductionsInput, OrganizationUncheckedCreateWithoutDefaultDeductionsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDefaultDeductionsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDefaultDeductionsInput, OrganizationUncheckedUpdateWithoutDefaultDeductionsInput>
  }

  export type OrganizationUpdateWithoutDefaultDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUpdateManyWithoutOrganizationNestedInput
    defaultEarnings?: PayStubEarningUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutDefaultDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    employees?: EmployeeUncheckedUpdateManyWithoutOrganizationNestedInput
    payrollGroups?: PayrollGroupUncheckedUpdateManyWithoutOrganizationNestedInput
    inviteCodes?: InviteCodeUncheckedUpdateManyWithoutOrganizationNestedInput
    memberships?: RoleUncheckedUpdateManyWithoutOrganizationNestedInput
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type PayrollGroupUpsertWithoutDefaultDeductionsInput = {
    update: XOR<PayrollGroupUpdateWithoutDefaultDeductionsInput, PayrollGroupUncheckedUpdateWithoutDefaultDeductionsInput>
    create: XOR<PayrollGroupCreateWithoutDefaultDeductionsInput, PayrollGroupUncheckedCreateWithoutDefaultDeductionsInput>
    where?: PayrollGroupWhereInput
  }

  export type PayrollGroupUpdateToOneWithWhereWithoutDefaultDeductionsInput = {
    where?: PayrollGroupWhereInput
    data: XOR<PayrollGroupUpdateWithoutDefaultDeductionsInput, PayrollGroupUncheckedUpdateWithoutDefaultDeductionsInput>
  }

  export type PayrollGroupUpdateWithoutDefaultDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutPayrollGroupsNestedInput
    compensations?: EmployeeCompensationUpdateManyWithoutPayrollGroupNestedInput
    defaultEarnings?: PayStubEarningUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutDefaultDeductionsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: StringFieldUpdateOperationsInput | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutPayrollGroupNestedInput
  }

  export type EmployeeUpsertWithoutDefaultDeductionsInput = {
    update: XOR<EmployeeUpdateWithoutDefaultDeductionsInput, EmployeeUncheckedUpdateWithoutDefaultDeductionsInput>
    create: XOR<EmployeeCreateWithoutDefaultDeductionsInput, EmployeeUncheckedCreateWithoutDefaultDeductionsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutDefaultDeductionsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutDefaultDeductionsInput, EmployeeUncheckedUpdateWithoutDefaultDeductionsInput>
  }

  export type EmployeeUpdateWithoutDefaultDeductionsInput = {
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutDefaultDeductionsInput = {
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput
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

  export type PayStubEarningCreateManyOrganizationInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateManyOrganizationInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutEmployeeNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
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
    defaultEarnings?: PayStubEarningUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUpdateManyWithoutPayrollGroupNestedInput
  }

  export type PayrollGroupUncheckedUpdateWithoutOrganizationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    payFrequency?: IntFieldUpdateOperationsInput | number
    payRefDate?: DateTimeFieldUpdateOperationsInput | Date | string
    compensations?: EmployeeCompensationUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultEarnings?: PayStubEarningUncheckedUpdateManyWithoutPayrollGroupNestedInput
    defaultDeductions?: PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupNestedInput
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

  export type PayStubEarningUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneWithoutEarningsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultEarningsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultEarningsNestedInput
  }

  export type PayStubEarningUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneRequiredWithoutDeductionsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultDeductionsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultDeductionsNestedInput
  }

  export type PayStubDeductionUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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
    grossEarnings?: Decimal | DecimalJsLike | number | string
    totalDeductions?: Decimal | DecimalJsLike | number | string
    netPay?: Decimal | DecimalJsLike | number | string
  }

  export type PayStubEarningCreateManyEmployeeInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateManyEmployeeInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
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
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    earnings?: PayStubEarningUpdateManyWithoutPayStubNestedInput
    deductions?: PayStubDeductionUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    earnings?: PayStubEarningUncheckedUpdateManyWithoutPayStubNestedInput
    deductions?: PayStubDeductionUncheckedUpdateManyWithoutPayStubNestedInput
  }

  export type PayStubUncheckedUpdateManyWithoutEmployeeInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    payDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    grossEarnings?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalDeductions?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netPay?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PayStubEarningUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneWithoutEarningsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultEarningsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultEarningsNestedInput
  }

  export type PayStubEarningUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneRequiredWithoutDeductionsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultDeductionsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultDeductionsNestedInput
  }

  export type PayStubDeductionUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type EmployeeCompensationCreateManyPayrollGroupInput = {
    uuid?: string
    employeeId: string
    isSalary?: boolean
    salaryAmount?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningCreateManyPayrollGroupInput = {
    id?: string
    payStubId?: string | null
    isDefault?: boolean
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateManyPayrollGroupInput = {
    id?: string
    payStubId: string
    isDefault?: boolean
    organizationId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
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

  export type PayStubEarningUpdateWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneWithoutEarningsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultEarningsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultEarningsNestedInput
  }

  export type PayStubEarningUncheckedUpdateWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUncheckedUpdateManyWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    payStub?: PayStubUpdateOneRequiredWithoutDeductionsNestedInput
    organization?: OrganizationUpdateOneWithoutDefaultDeductionsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultDeductionsNestedInput
  }

  export type PayStubDeductionUncheckedUpdateWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutPayrollGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    payStubId?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type PayStubEarningCreateManyPayStubInput = {
    id?: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    hours?: Decimal | DecimalJsLike | number | string | null
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionCreateManyPayStubInput = {
    id?: string
    isDefault?: boolean
    organizationId?: string | null
    payrollGroupId?: string | null
    employeeId?: string | null
    type: $Enums.PayStubItemType
    name: string
    description?: string | null
    amount: Decimal | DecimalJsLike | number | string
    rate?: Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUpdateWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organization?: OrganizationUpdateOneWithoutDefaultEarningsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultEarningsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultEarningsNestedInput
  }

  export type PayStubEarningUncheckedUpdateWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubEarningUncheckedUpdateManyWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hours?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUpdateWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    organization?: OrganizationUpdateOneWithoutDefaultDeductionsNestedInput
    payrollGroup?: PayrollGroupUpdateOneWithoutDefaultDeductionsNestedInput
    employee?: EmployeeUpdateOneWithoutDefaultDeductionsNestedInput
  }

  export type PayStubDeductionUncheckedUpdateWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type PayStubDeductionUncheckedUpdateManyWithoutPayStubInput = {
    id?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    payrollGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPayStubItemTypeFieldUpdateOperationsInput | $Enums.PayStubItemType
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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