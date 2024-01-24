const shapes = require(`./shapes`)

class Triangle extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
    };
    render() {
        return `<svg version="1.1" height="200" width="200" xmlns="http://www.w3.org/2000/svg">
 
                <polygon points="100,0 0,200 200,200" style="fill:${logoColor}" />

                <text x="100" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
 
                </svg>`
    };
};

module.exports = Triangle;