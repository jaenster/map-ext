interface Extender<K, V> {
    get(key: K): V
}

export class WeakMapExt<K extends object, V> extends WeakMap<K, V> implements Extender<K, V> {
    constructor(private readonly cb: () => V) {
        super()
    }
}

export class MapExt<K, V> extends Map<K, V> implements Extender<K, V> {

    constructor(private readonly cb: () => V) {
        super()
    }
}

const factory = (prototype) => function get(key) {
    if (this.has(key)) return prototype.call(this, key);
    const v = this.cb();
    this.set(key, v);
    return v;
}

WeakMapExt.prototype.get = factory(WeakMap.prototype.get);
MapExt.prototype.get = factory(Map.prototype.get);
