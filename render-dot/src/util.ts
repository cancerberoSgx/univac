import { join } from 'path';
import { existsSync } from 'fs';

let packageJsonFolder: string | undefined;
export function getPackageJsonFolder(f = process.cwd()): string | undefined {
  if (!packageJsonFolder) {
    if (existsSync(join(f, 'package.json')) && existsSync(join(f, 'node_modules'))) {
      packageJsonFolder = f;
    }
    else {
      const p = join(f, '..');
      if (p && p !== '/') {
        packageJsonFolder = getPackageJsonFolder(p);
      }
    }
  }
  return packageJsonFolder;
}
