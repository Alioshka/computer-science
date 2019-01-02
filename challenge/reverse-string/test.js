const {
    reverse1,
    reverse2_1,
    reverse2_2,
    reverse2_3_1,
    reverse2_3_2,
    reverse3_1,
    reverse3_2
} = require('./index');

const str = 'Greetings from the interview';
const reversed = 'weivretni eht morf sgniteerG';

test('reverse1() reverses a string', () => {
    expect(reverse1(str)).toEqual(reversed);
});

test('reverse2_1() reverses a string', () => {
    expect(reverse2_1(str)).toEqual(reversed);
});

test('reverse2_2() reverses a string', () => {
    expect(reverse2_2(str)).toEqual(reversed);
});

test('reverse2_3_1() reverses a string', () => {
    expect(reverse2_3_1(str)).toEqual(reversed);
});

test('reverse2_3_2() reverses a string', () => {
    expect(reverse2_3_2(str)).toEqual(reversed);
});

test('reverse3_1() reverses a string', () => {
    expect(reverse3_1(str)).toEqual(reversed);
});

test('reverse3_2() reverses a string', () => {
    expect(reverse3_2(str)).toEqual(reversed);
});