import { MikroORM } from "@mikro-orm/core";
import config from "../mikro-orm.config";

let orm: MikroORM | null = null;

export const getORM = async () => {
    if (!orm) {
        orm = await MikroORM.init(config);
        await orm.getSchemaGenerator().updateSchema(); // Ensure schema updates only happen once
    }
    return orm;
};

export const getEM = async () => {
    const ormInstance = await getORM();
    return ormInstance.em.fork();
};
