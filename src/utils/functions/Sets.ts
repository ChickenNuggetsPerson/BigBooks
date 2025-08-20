



export function areSetsEqual<K>(setA: Set<K>, setB: Set<K>) {
    return setA.size === setB.size && [...setA].every(value => setB.has(value))
}

export function getSetDifference<K>(setA: Set<K>, setB: Set<K>)  {
    const difference = new Set(setA);
    for (const elem of setB) {
        difference.delete(elem);
    }
    return difference;
}