const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
    };
    render() {
        if (text.length > 3) {

            throw new Error(`Text may not exceed 3 characters.`);

        }
        else {

            return `<svg version="1.1" height="200" width="200" xmlns="http://www.w3.org/2000/svg">
 
                    <polygon points="100,0 0,200 200,200" style="fill:${logoColor}" />

                    <text x="100" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
 
                    </svg>`

        }
    };
};

module.exports = Triangle;