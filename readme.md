# A simple addition to (weak) map

Personally I hate it to check if something is in a map, and if not add an object. So, I always write this small snippet,
I decided to make a repo out of it.

A simple example;

```typescript
import {WeakMapExt} from "map-ext";

type EventHandler = (...[]) => any;

const eventStore = new WeakMapExt<object, MapExt<string, Set<EventHandler>>>(() => new MapExt(() => new Set()));

class Events {
    async emit(key: string, ...args: any[]) {
        for (const cb of eventStore.get(this).get(key)) {
            await cb(...args);
        }
    }

    async on(key: string, cb: EventHandler) {
        eventStore.get(this).get(key).add(cb);
    }

    async off(key: string, cb: EventHandler) {
        eventStore.get(this).get(key).delete(cb);
    }
}
```

