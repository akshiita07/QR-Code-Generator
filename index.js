//to use npm- npm init - create package.json file

//use npm- inquirer package- for user input- npm i inquirer
import inquirer from 'inquirer';

//use npm- qr-image package- for generating qr code for url- npm i qr-image + var qr = require('qr-image');
import qr from "qr-image";

//use native fs module to create text file
import * as fs from 'node:fs';

inquirer
    .prompt([
        {
            //it is a JS object
            "type": "input",
            "name": "userInputURL",
            "message": "Enter your url: ",
            "default": "https://www.google.com/"
        }

    ])
    .then((answers) => {
        // console.log(answers);
        const userInputURL = answers.userInputURL;          //answers store this user input as name of our prompt
        var qr_image = qr.image(userInputURL); //default type is png
        qr_image.pipe(fs.createWriteStream('qrImage.png')); //save qr image as file

        //save url in file
        fs.writeFile("userInput.txt", `User Inputs are: ${userInputURL}`, (err) => {
            if (err) throw err;
            console.log('The url has been saved!');
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Some error occurred");
        } else {
            console.log("Some else error occurred");
        }
    });


