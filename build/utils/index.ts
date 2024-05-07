import { spawn } from 'child_process';
import { projectRoot } from './paths';
export const withTashName = (name: string, fn: any) => Object.assign(fn, { displayName: name });

//在node使用子进程来运行脚本
export const run = async (command: string) => {
  //rf -rf
  return new Promise((resolve:any)=>{
    const [cmd,...args] = command.split(' ');
    const app = spawn(cmd,args,{cwd:projectRoot,stdio:'inherit',shell:true});
    app.on('close',resolve)
  });
  
}