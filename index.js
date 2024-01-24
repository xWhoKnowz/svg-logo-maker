// TODO: Import all other files.
const fs = require(`fs`)
const inquirer = require(`inquirer`)
const triangle = require(`./classes/triangle`)
const circle = require(`./classes/circle`)
const square = require(`./classes/square`)

// TODO: Create Prompts for user input.

const userPrompts = [
    {
        type: `input`,
        message: `Enter the text you want for your logo.`,
        name: text
    },
    {
        type: `input`,
        message: `What color do you want for your logo text?`,
        name: textColor
    },
    {
        type: `list`,
        message: `Pick a shape for your logo.`,
        choices: [circle, triangle, square],
        name: logo
    },
    {
        type: `input`,
        message: `What color do you want the logo to be?`,
        name: logoColor
    },
];

// TODO: Create a function that writes SVG files utilizing user input.

