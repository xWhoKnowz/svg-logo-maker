// TODO: Import all other files.
const fs = require(`fs`)
const inquirer = require(`inquirer`)
const shapeSelector = require(`./shape-selector`)


// TODO: Create Prompts for user input.

const promptData = [
    {
        type: `input`,
        message: `Enter the text you want for your logo.`,
        name: `text`
    },
    {
        type: `input`,
        message: `What color do you want for your logo text?`,
        name: `textColor`
    },
    {
        type: `list`,
        message: `Pick a shape for your logo.`,
        choices: [`Circle`, `Triangle`, `Square`],
        name: `logo`
    },
    {
        type: `input`,
        message: `What color do you want the logo to be?`,
        name: `logoColor`
    },
];

// TODO: Create a function that writes SVG files utilizing user input.
function svgMaker() {
    inquirer
        .prompt(promptData)
        .then((svgData) => {
            console.log(svgData);

            const newLogo = shapeSelector(svgData)

            fs.writeFile(`logo.svg`, newLogo, (err) =>
                err ? console.log(err) : console.log(`Generated logo.svg`))


        });
}
svgMaker()
