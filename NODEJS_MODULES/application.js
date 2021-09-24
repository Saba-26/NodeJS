const fs=require('fs')

console.log('Start Sync');
const file=fs.readdirSync('./')
console.log(`Files:${file}`);
console.log('End Sync');


console.log("-----------------ASYNC-----------------");
console.log('Start Async');
const fileAsync=fs.readdir('./',(err,files)=>{ //call back function
    if(err) console.log(err);
    else console.log(files);
})
console.log('End Async');

