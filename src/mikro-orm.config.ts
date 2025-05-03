import { Organization, Employee, Payperiod, PayStub } from "@/database/models/Models";
import { Options, SqliteDriver } from "@mikro-orm/sqlite";

const config: Options = {

  driver: SqliteDriver,
  dbName: "./data/sqlite.db",
  entities: [Employee, Organization, Payperiod, PayStub],
  debug: false,
};

export default config;
