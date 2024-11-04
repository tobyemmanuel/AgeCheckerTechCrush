// Built-in modules
import { stdin } from 'process';
// Third-party module
import chalk from 'chalk';
// Custom modules
import { checkAge } from './my_modules/ageCheck.js';
import { formatUserInfo } from './my_modules/userInfo.js';
console.log(chalk.red('What is your name?'));
// Using process.stdin to get user input
stdin.on('data', (nameInput) => {
 const name = String(nameInput).trim();
 
 console.log(chalk.red('What is your age?'));
 
// Second input for age
 stdin.once('data', (ageInput) => {
    const age = parseInt(String(ageInput));

    // Using custom module to check age
    const status = checkAge(age);
    
    // Using custom module to format the message
    const message = formatUserInfo(name, age, status);
    
    // Using third-party module to add color
    if (status === 'an adult') {
      console.log(chalk.green(message));
    } else {
      console.log(chalk.blue(message));
    }
    
    process.exit();
  });
});
