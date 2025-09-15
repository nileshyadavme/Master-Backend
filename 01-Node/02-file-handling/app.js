const fs = require('fs')

// fs.writeFileSync("./test.txt", "Nilesh - +91 1111111111")

const content = "some Content!"
fs.writeFile("./test2.txt", content, err => {
    if(err)
    {
        console.error(err)
    }
    else {
        console.log("file written successfully !")
    }
})


// const result = fs.readFileSync("./test.txt", "utf-8")

fs.readFile("./test2.txt", "utf-8", (err, result) => {
    if(err){
        console.error(err)
    }
    else{
        console.log(result)
    }   
})