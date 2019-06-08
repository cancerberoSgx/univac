import { existsSync } from 'fs'
import { join } from 'path'

let packageJsonFolder: string | undefined
export function getPackageJsonFolder(f = __dirname): string | undefined {
  if (!packageJsonFolder) {
    if (existsSync(join(f, 'package.json')) && existsSync(join(f, 'node_modules'))) {
      packageJsonFolder = f
    }
    else {
      const p = join(f, '..')
      if (p && p !== '/') {
        packageJsonFolder = getPackageJsonFolder(p)
      }
    }
  }
  return packageJsonFolder
}
