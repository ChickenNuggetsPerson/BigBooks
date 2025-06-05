/* eslint-disable @typescript-eslint/no-explicit-any */
import superjson from 'superjson'

export function callServerAction<TArgs extends any[], TResult>(
    action: (serializedArgs: any) => Promise<any>,
    ...args: TArgs
): Promise<TResult> {
    const serialized = superjson.serialize(args)
    return action(serialized.json)
}