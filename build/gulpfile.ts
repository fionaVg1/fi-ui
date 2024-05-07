import { series,parallel } from 'gulp';
import { run,withTashName } from './utils';

//gulp 不叫打包 做代码优化 vite
//1.打包样式 2.打包工具方法 3.打包所有组件 4.打包每个组件 5.生成一个组件库 6.发布组件
export default series(
  withTashName('clean',async ()=>{
    run('rimraf ./dist');
  }),
  withTashName('buildPackages',async ()=>{
    run('pnpm run --filter ./packages/* --parallel build');
  })
)