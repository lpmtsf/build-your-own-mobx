import { makeObservable, observable } from 'mobx';

export class CounterStore {
  counter = 0;
  constructor() {
    makeObservable(this, { counter: observable });
  }

  increaseCounter() {
    this.counter += 1;
  }

  decreaseCounter() {
    this.counter -= 1;
  }
}

export const counterStore = new CounterStore();
