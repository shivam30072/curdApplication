const fileSystem = require('fs').promises;
const path = require('path')

// USING ASYNC AWAIT && TO USE ASYNC AWAIT {.promises} MUST BE ADDED IN THE FIRST LINE.
const fileOps = async () => {
    try{
      const data = await fileSystem.readFile(path.join(__dirname, 'file.txt'), 'utf8') 
      console.log(data); 
      await fileSystem.appendFile(path.join(__dirname, 'newfile.txt'), '\n\nappending using async await')
    } catch(err) {
        console.error(err);
    }
}

fileOps();


// TO CHECK IF FILE EXIST OR NOT
// { TO USE existsSYNC FUNCTION REMOVE PROMISES FROM THE FIRST LINE}
if(!fileSystem.existsSync('./folder')){
    fileSystem.mkdir('./folder', (err) => {
        if(err) throw err
        console.log('directory created');
    })
} // TO REMOVE A DIRECTORY
else {
    fileSystem.rmdir('./folder', (err) => {
        if(err) throw err
        console.log('directory removed');
    })
}




// USING CALLBACK FUNCTION && REMOVE {.promises} FROM THE FIRST LINE

fileSystem.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


fileSystem.writeFile(path.join(__dirname, 'newfile.txt'), 'writefile operation', (err) => {
    if(err) throw err;
    console.log("writing complete");

    fileSystem.appendFile(path.join(__dirname, 'newfile.txt'), '\n\nappendfile operation', (err) => {
        if(err) throw err;
        console.log("append operation");
    })
    
})






