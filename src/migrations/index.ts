import * as migration_20251202_130850 from './20251202_130850';

export const migrations = [
  {
    up: migration_20251202_130850.up,
    down: migration_20251202_130850.down,
    name: '20251202_130850'
  },
];
