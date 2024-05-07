//专门打包util,指令，hook的
import {series,parallel,src,dest} from 'gulp'
import { buildConfig } from './utils/config'
import path from 'path'
import { outDir, projectRoot } from './utils/paths'
import ts from 'gulp-typescript'
import { withTashName } from './utils'

export const buildPackages = (dirname:string,name:string)=>{
  const tasks = Object.entries(buildConfig).map(([module,config])=>{
    const output = path.resolve(dirname, config.output.name)
    return series(
      withTashName(`build:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.js');
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules'];
        return src(inputs).pipe(ts.createProject(tsConfig, {
          declaration: true,
          strict: false,
          module: config.module
        })()).pipe(dest(output))
      }),
      withTashName(`copy:${dirname}`,()=>{
        return src(`${output}/**`).pipe(dest(path.resolve(outDir,config.output.name,name)))
      })
  )   
});   
  return parallel(...tasks)
}