import { defineStore } from 'pinia';
import { store } from '@/store';

export const useCounterStore = defineStore('counter', {
	state: () => ({
		count: 0
	}),	
	actions: {
		increment() {
			this.count++;
		}
	}
});

export function useCounterStoreWithOut() {
  return useCounterStore(store);
}