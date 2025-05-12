const calculateBMI = require('../src/algo5_calculateBMI.js');

test('should return "Underweight" for BMI < 18.5', () => {
    expect(calculateBMI(50, 180)).toBe("Underweight");
});

test('should return "Normal" for BMI between 18.5 and 24.9', () => {
    expect(calculateBMI(68, 175)).toBe("Normal");
});

test('should return "Overweight" for BMI between 25 and 29.9', () => {
    expect(calculateBMI(85, 175)).toBe("Overweight");
});