const Triangle = require(`../classes/triangle.js`)

describe('Triangle', () => {

    describe('adds text to instantiated triangle', () => {
        it('should update the text variable for the instantiated triangle', () =>{
            // Arrange
            const text = `SVG`;

            // Act
            const newTriangle = new Triangle(text, `blue`, `green`)

            // Assert
            expect(newTriangle.text).toEqual(`SVG`)
        });
    });

    describe('sets text color to instantiated triangle', () => {
        it('should update the textColor variable for the instantiated triangle', () =>{
            // Arrange
            const textColor = `blue`;

            // Act
            const newTriangle = new Triangle (`SVG`, textColor, `green`)

            // Assert
            expect(newTriangle.textColor).toEqual(`blue`)
        });
    });

    describe('sets logo color to instantiated circle', () => {
        it('should update the logoColor variable for the instantiated circle', () =>{
            // Arrange
            const logoColor = `green`;

            // Act
            const newTriangle = new Triangle (`SVG`, `blue`, logoColor)

            // Assert
            expect(newTriangle.logoColor).toEqual(`green`)
        });
    });

});