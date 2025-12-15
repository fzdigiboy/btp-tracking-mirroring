import * as migration_20251215_130924 from './20251215_130924';

export const migrations = [
  {
    up: migration_20251215_130924.up,
    down: migration_20251215_130924.down,
    name: '20251215_130924'
  },
];
