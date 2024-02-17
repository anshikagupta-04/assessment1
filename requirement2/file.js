import { readFile } from 'fs/promises';

const filePath = 'requirement2/poem.txt'; 

readFile(filePath, 'utf8')
  .then((data) => {
    console.log(data); 
  })
  .catch((err) => {
    console.error('Error reading the file:', err);
  });