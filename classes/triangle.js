const Shapes = require('./shapes.js');

class Triangle extends Shapes {
    constructor(text, textColor, logoColor) {
        super(text, textColor, logoColor)
        

    };
    render() {
        
        return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">

                <polygon points="100,50 0,250 200,250" style="fill:${this.logoColor}"/>
      
                <text x="100" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
                </svg>`
    };
};

module.exports = Triangle;