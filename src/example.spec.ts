import { add } from './example';

describe(add.name, function() {
    it('Should add up first and second argument', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(2, 3)).toEqual(5);
    });

    it('Fail', () => {
        expect(add(1, 2)).toEqual(4);
    });
});
