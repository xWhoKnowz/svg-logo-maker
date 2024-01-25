const Shapes = require(`../classes/shapes`)

describe('Shapes', () => {

    describe('text.length limit of 3 characters', () => {
        it('should throw an error whenever text.length exceed 3 characters', () =>{
            // Arrange
            const text = 'SVGG';
            const error = new Error('Text Limit of 3')
            
            // Act
            const shape =  () => new Shapes(text, `blue`, `green`)

            // Assert
            expect(shape).toThrow(error)
        });
        
    });


    describe('', () => {
        it('should throw an error whenever text.length exceed 3 characters', () =>{
            // Arrange
            const text = 'SVGG';
            const error = new Error('Text Limit of 3')
            
            // Act
            const shape =  () => new Shapes(text, `blue`, `green`)

            // Assert
            expect(shape).toThrow(error)
        });
        
    });
    


});