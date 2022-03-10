import { writable } from 'svelte/store';

/** system | dark | light */
export const theme = writable('system');
