class Shapes {
    constructor(text, textColor, logoColor) {
        if (text.length > 3) {
            throw new Error(`Text Limit of 3`)
        }
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
        

        console.log(`This is logoShape`, this.logoShape);
    };
    render() {

        return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">

                <text x="100" y="" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

                </svg>`
    }

}

module.exports = Shapes;