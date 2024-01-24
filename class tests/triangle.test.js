const Triangle = require(`../classes/triangle.js`)

describe('Triangle', () => {

    describe('Text Limit 3', () => {
        it('should not allow text property to exceed 3', () =>{
            // Arrange
            const text = `SVGG`;
            const error = 'Text may not exceed 3 characters.';

            // Act
            const newTriangle = new Triangle(text, blue, green)

            // Assert
            expect(render(newTriangle)).toThrowError(error)
        });
    });
});