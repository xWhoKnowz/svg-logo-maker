const Square = require(`../classes/square.js`)

describe('Square', () => {

    describe('adds text to instantiated square', () => {
        it('should update the text variable for the instantiated square', () =>{
            // Arrange
            const text = `SVG`;

            // Act
            const newSquare = new Square (text, `blue`, `green`)

            // Assert
            expect(newSquare.text).toEqual(`SVG`)
        });
    });

    describe('sets text color to instantiated square', () => {
        it('should update the textColor variable for the instantiated square', () =>{
            // Arrange
            const textColor = `blue`;

            // Act
            const newSquare = new Square (`SVG`, textColor, `green`)

            // Assert
            expect(newSquare.textColor).toEqual(`blue`)
        });
    });

    describe('sets logo color to instantiated circle', () => {
        it('should update the logoColor variable for the instantiated circle', () =>{
            // Arrange
            const logoColor = `green`;

            // Act
            const newSquare = new Square (`SVG`, `blue`, logoColor)

            // Assert
            expect(newSquare.logoColor).toEqual(`green`)
        });
    });

});