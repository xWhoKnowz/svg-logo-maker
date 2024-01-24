class Shapes {
    constructor(text, textColor, logoColor) {
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
    };
    render() {
        return `<svg version="1.1" height="200" width="200" xmlns="http://www.w3.org/2000/svg">

                <text x="100" y="" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

                </svg>`
    }

}

module.exports = Shapes;