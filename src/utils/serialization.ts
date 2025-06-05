import { Prisma } from '@/database/generated/prisma';
import superjson, { SuperJSONResult } from 'superjson'


superjson.registerCustom<Prisma.Decimal, string>(
    {
        isApplicable: (v): v is Prisma.Decimal => Prisma.Decimal.isDecimal(v),
        serialize: v => v.toJSON(),
        deserialize: v => new Prisma.Decimal(v),
    },
    'decimal.js'
);




export type SerializationResult<T> = {
    json: SuperJSONResult;
    __type?: T; // Store type to ensure type saftey
};

export function serializeData<T>(data: T): SerializationResult<T> {
    return { json: superjson.serialize(data) };
}

export function deserializeData<T>(result: SerializationResult<T>): T {
    return superjson.deserialize<T>(result.json);
}