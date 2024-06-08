# QR-Code-Generator
A Node.js application designed to generate a QR code from a user-provided URL and save both the QR code image and the URL itself to the local file system. The project leverages npm  for package management, user interaction via the terminal, QR code generation, and file system operations.
This project is a Node.js application designed to generate a QR code from a user-provided URL and save both the QR code image and the URL itself to the local file system. The project leverages several key technologies and npm packages to accomplish these tasks efficiently.

### Project Setup

1. **Initialize npm:** Start by initializing npm in the project directory to create a `package.json` file. This file manages the project's dependencies.
   ```bash
   npm init
   ```

2. **Install Dependencies:** Install the required packages, `inquirer` and `qr-image`.
   ```bash
   npm install inquirer qr-image
   ```

3. **Import Modules:** Import the necessary modules:
   - `inquirer` for handling user input.
   - `qr-image` for generating QR codes.
   - Node.js native `fs` (file system) module for file operations.
   ```javascript
   import inquirer from 'inquirer';
   import qr from 'qr-image';
   import * as fs from 'node:fs';
   ```

### Application Functionality

1. **User Input:** The application uses `inquirer` to prompt the user to enter a URL. The prompt is configured to ask for a URL input with a default value of `https://www.google.com/`.
   ```javascript
   inquirer.prompt([
       {
           type: 'input',
           name: 'userInputURL',
           message: 'Enter your URL: ',
           default: 'https://www.google.com/'
       }
   ])
   .then((answers) => {
       const userInputURL = answers.userInputURL;
       
       // Generate QR code
       var qr_image = qr.image(userInputURL); // Generates QR code as a PNG image
       qr_image.pipe(fs.createWriteStream('qrImage.png')); // Save QR code image to file
       
       // Save URL to text file
       fs.writeFile('userInput.txt', `User Inputs are: ${userInputURL}`, (err) => {
           if (err) throw err;
           console.log('The URL has been saved!');
       });
   })
   .catch((error) => {
       if (error.isTtyError) {
           console.log('Prompt failed to render in the current environment');
       } else {
           console.log('An unexpected error occurred');
       }
   });
   ```

### Core Features

- **User Input Handling:** Utilizes `inquirer` to interactively receive URL input from the user.
- **QR Code Generation:** Uses `qr-image` to create a QR code from the input URL. The QR code is generated as a PNG image and saved to the file system.
- **File Operations:** Employs the native `fs` module to write the user-provided URL to a text file named `userInput.txt`.

### Error Handling

The script includes basic error handling to manage potential issues during user prompt interactions and file operations, ensuring robustness and user-friendly feedback.

This project demonstrates effective use of npm for package management, user interaction via the terminal, QR code generation, and file system operations, making it a practical example of a simple yet powerful Node.js application.
