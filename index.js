// TODO: Import all other files.
const inquirer = require(`inquirer`)
const fs = require(`fs`)

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
]
