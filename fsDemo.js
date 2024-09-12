
import fs from 'fs/promises'

// fs.readFile('./text.txt', 'utf-8', (error, data) => {
//     console.log(data);

// })

const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt', 'utf-8')
        console.log(data);
    } catch (error) {
        console.log(error);

    }
}


const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', "hello, i am writing this file")
        console.log('file written to...');

    } catch (error) {
        console.log(error);

    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\n this is appended text')
        console.log('file appended to...');

    } catch (error) {

        console.log(error);

    }
}
writeFile()
appendFile()
readFile()
