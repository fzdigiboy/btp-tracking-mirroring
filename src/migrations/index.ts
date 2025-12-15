import * as migration_20251202_130850 from './20251202_130850';
import * as migration_20251215_122413 from './20251215_122413';

export const migrations = [
  {
    up: migration_20251202_130850.up,
    down: migration_20251202_130850.down,
    name: '20251202_130850',
  },
  {
    up: migration_20251215_122413.up,
    down: migration_20251215_122413.down,
    name: '20251215_122413'
  },
];
