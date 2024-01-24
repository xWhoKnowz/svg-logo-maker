const shapes = require(`./shapes`)

class Circle extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
    };
    render() {
        return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        
                <circle cx="100" cy="100" r="100" fill="${logoColor}" />

                <text x="100" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
 
                </svg>`
    };
};

module.exports = Circle;