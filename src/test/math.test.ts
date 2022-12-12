import {add} from './math';

describe('Math functions test', () => {
    it('check add function', () => {
        expect(add(1, 2)).toBe(3);
    })
})