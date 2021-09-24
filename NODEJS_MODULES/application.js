// const fs=require('fs')

// console.log('Start Sync');
// const file=fs.readdirSync('./')
// console.log(`Files:${file}`);
// console.log('End Sync');


// console.log("-----------------ASYNC-----------------");
// console.log('Start Async');
// const fileAsync=fs.readdir('./',(err,files)=>{ //call back function
//     if(err) console.log(err);
//     else console.log(files);
// })
// console.log('End Async');

// fs.mkdir('./New',(err)=>{
//     if(err)console.log(err);
//     else console.log('Directory Created!');
// })

// fs.rename('./New','./Latest',(err)=>{
//     if(err)console.log(err);
//     else console.log('Successfully Renamed!');
// })

// const os = require('os')

// freeMemory=os.freemem();
// console.log(`Free Memory: ${freeMemory}`);


// totalMemory=os.totalmem();
// console.log(`Total Memory: ${totalMemory}`);

// console.log(os.homedir());

// console.log(os.hostname());

// const path=require('path')

// console.log(path.extname(__filename));

// console.log(path.dirname(__filename));

// console.log(path.parse(__filename));

const url=require('url')

const myURL=new URL('')