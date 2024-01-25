const Circle = require(`../classes/circle.js`)

describe('Circle', () => {

    describe('adds text to instantiated circle', () => {
        it('should update the text variable for the instantiated circle', () =>{
            // Arrange
            const text = `SVG`;

            // Act
            const newCircle = new Circle (text, `blue`, `green`)

            // Assert
            expect(newCircle.text).toEqual(`SVG`)
        });
    });

    describe('sets text color to instantiated circle', () => {
        it('should update the textColor variable for the instantiated circle', () =>{
            // Arrange
            const textColor = `blue`;

            // Act
            const newCircle = new Circle (`SVG`, textColor, `green`)

            // Assert
            expect(newCircle.textColor).toEqual(`blue`)
        });
    });

    describe('sets logo color to instantiated circle', () => {
        it('should update the logoColor variable for the instantiated circle', () =>{
            // Arrange
            const logoColor = `green`;

            // Act
            const newCircle = new Circle (`SVG`, `blue`, logoColor)

            // Assert
            expect(newCircle.logoColor).toEqual(`green`)
        });
    });

});