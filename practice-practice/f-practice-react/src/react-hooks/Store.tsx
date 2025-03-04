/* eslint-disable react/react-in-jsx-scope */
import { useSyncExternalStore } from "react";

// A simple external store
const store = {
  _state: { value: 0 },
  listeners: new Set<() => void>(),
  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  setState(newState: { value: number }) {
    this._state = newState;
    this.listeners.forEach((listener) => listener());
  },
  getSnapshot() {
    return this._state;
  },
};

// ExternalStoreComponent;
function Store() {
  const state = useSyncExternalStore(
    (callback) => store.subscribe(callback),
    () => store.getSnapshot(),
  );

  return (
    <div>
      <p>External value: {state.value}</p>
      <button onClick={() => store.setState({ value: state.value + 1 })}>
        Increase External Value
      </button>
    </div>
  );
}

export default Store;
