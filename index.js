#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.underline.magentaBright("\n\t*** WELCOME TO THE ADVENTURE GAME ***\n"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.italic.yellowBright.bold("Enter Your Name: "),
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.italic.yellowBright.bold("Select Your Opponent: "),
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.italic.yellowBright.bold("\n What Would You Like To Do? \n"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.redBright(`\n\t You Loose ${P1.name},Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.greenBright(`\n\t *** Congratulations ${P1.name} ! You Win The Game. ***`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.underline.blueBright(`\n\t You Drink Health Portion Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.italic.redBright.underline(`\n\t You Loose ${P1.name},Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.italic.yellowBright.bold("\n What Would You Like To Do? \n"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.redBright(`\n\t You Loose ${P1.name},Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.greenBright(`\n\t *** Congratulations ${P1.name} ! You Win The Game. ***`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.underline.blueBright(`\n\t You Drink Health Portion Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.italic.redBright.underline(`\n\t You Loose ${P1.name},Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.italic.yellowBright.bold("\n What Would You Like To Do? \n"),
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.redBright(`\n\t You Loose ${P1.name},Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.italic.blueBright(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.italic.blueBright(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.italic.underline.greenBright(`\n\t *** Congratulations ${P1.name} ! You Win The Game. ***`));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.underline.blueBright(`\n\t You Drink Health Portion Your fuel is ${P1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.bold.italic.redBright.underline(`\n\t You Loose ${P1.name},Better Luck Next Time`));
            process.exit();
        }
    }
} while (true);
