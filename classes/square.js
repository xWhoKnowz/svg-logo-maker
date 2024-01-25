const Shapes = require(`./shapes`)

class Square extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
    };
    render() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect width="66%" height="100%" fill="${this.logoColor}" />      
      
                <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
                </svg>`

    };
};

module.exports = Square;