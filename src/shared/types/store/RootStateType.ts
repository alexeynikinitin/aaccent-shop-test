import { store } from 'app/store';

export type RootStateType = ReturnType<typeof store.getState>;
