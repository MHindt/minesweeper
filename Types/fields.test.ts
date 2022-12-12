import { emptyFieldGenerator, CellState, fieldGenerator } from './fields';

const { empty, bomb, hidden } = CellState;

describe('Field Generator', () => {
  describe('emptyFieldGenerator test', () => {
    it('2x2', () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ]);
    });
    it('3x3', () => {
        expect(emptyFieldGenerator(3)).toStrictEqual([
            [empty,empty,empty],
            [empty,empty,empty],
            [empty,empty,empty],
        ])
    });
    it('3x3 with hidden state', () => {
        expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
            [hidden, hidden, hidden],
            [hidden, hidden, hidden],
            [hidden, hidden, hidden],
        ]);
    });
    describe('Simple test', () => {
        it('Wrong density', () => {
    
           const errorText = 'Density must be between 0 and 1';
           expect(() => fieldGenerator(1, -1)).toThrow(errorText);
           expect(() => fieldGenerator(1, 2)).toThrow(errorText);
        });
        it('smallest field without mine', () => {
            expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
        });
        it('big field without mine', () => {
            expect(fieldGenerator(10, 0)).toStrictEqual([
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
                [empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
            ]);
        });
        it('smallest field with mine', () => {
            expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
        });
    });
  });
});
