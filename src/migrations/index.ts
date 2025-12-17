import * as migration_20251215_130924 from './20251215_130924';
import * as migration_20251216_104531 from './20251216_104531';
import * as migration_20251217_120118 from './20251217_120118';

export const migrations = [
  {
    up: migration_20251215_130924.up,
    down: migration_20251215_130924.down,
    name: '20251215_130924',
  },
  {
    up: migration_20251216_104531.up,
    down: migration_20251216_104531.down,
    name: '20251216_104531',
  },
  {
    up: migration_20251217_120118.up,
    down: migration_20251217_120118.down,
    name: '20251217_120118'
  },
];
