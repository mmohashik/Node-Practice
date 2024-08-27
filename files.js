const fs = require('fs');

fs.readFile('./doc/doc.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

fs.writeFile('./doc/doc.txt', 'Hello, World!', () => {
    console.log('File was written');
});

fs.writeFile('./doc/doc1.txt', 'Hello, World!', () => {
    console.log('File was written');
});

if(!fs.existsSync('./assets')){

fs.mkdir('./assets',(err) =>{
    if(err){
        console.log(err);
    }
    console.log('Folder created');
});

}else{
    fs.rmdir('./assets',(err) =>{
        if(err){
            console.log(err);   
        }
        console.log('Folder deleted');
    });
}