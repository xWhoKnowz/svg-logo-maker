const Shapes = require(`./shapes`)

class Circle extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
    };
    render() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="100" cy="100" r="100" fill="${this.logoColor}" />
      
                <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
                </svg>`

    };
};

module.exports = Circle;