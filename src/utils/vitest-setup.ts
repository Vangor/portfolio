type StorageLike = Pick<Storage, 'clear' | 'getItem' | 'key' | 'removeItem' | 'setItem'> & {
  readonly length: number;
};

function createStorage(): StorageLike {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.has(key) ? store.get(key)! : null;
    },
    key(index: number) {
      return Array.from(store.keys())[index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, String(value));
    },
  };
}

function installStorage(name: 'localStorage' | 'sessionStorage') {
  const storage = createStorage();

  Object.defineProperty(window, name, {
    configurable: true,
    enumerable: true,
    value: storage,
    writable: true,
  });

  Object.defineProperty(globalThis, name, {
    configurable: true,
    enumerable: true,
    value: storage,
    writable: true,
  });
}

installStorage('localStorage');
installStorage('sessionStorage');
