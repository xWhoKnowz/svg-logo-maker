const Triangle = require(`./classes/triangle`)
const Circle = require(`./classes/circle`)
const Square = require(`./classes/square`)

function shapeSelector({text, textColor, logo, logoColor}) {
    if (logo === `Circle`) {
        const svgShape = new Circle(text, textColor, logoColor)
        const circle = svgShape.render()
        console.log(circle);
        return circle
    }
    if (logo === `Triangle`) {
        const svgShape = new Triangle(text, textColor, logoColor)
        const triangle = svgShape.render()
        console.log(triangle);
        return triangle
    }
    if (logo === `Square`) {
        const svgShape = new Square(text, textColor, logoColor)
        const square = svgShape.render()
        console.log(square);
        return square
    }
};


module.exports = shapeSelector;