import * as fs from 'fs';

import { describe, expect, it } from 'vitest';

const formattingString = (stringWithNumber: string) => {
  const listOfNumberInString = [
    ['(one)', '1'],
    ['(two)', '2'],
    ['(three)', '3'],
    ['(four)', '4'],
    ['(five)', '5'],
    ['(six)', '6'],
    ['(seven)', '7'],
    ['(eight)', '8'],
    ['(nine)', '9'],
  ];
  let formattedString = '';
  let formattedStringFromBeggining = '';
  let formattedStringFromEnding = '';
  const arrayString = stringWithNumber.split('');
  for (let i = 0; i < arrayString.length; i++) {
    formattedStringFromBeggining += arrayString[i];
    listOfNumberInString.forEach((coupleRegexAndNumber) => {
      formattedStringFromBeggining = formattedStringFromBeggining.replace(
        new RegExp(coupleRegexAndNumber[0], 'g'),
        coupleRegexAndNumber[1]
      );
    });
    for (let j = arrayString.length; j > 0; j--) {
      formattedStringFromEnding = arrayString[j] + formattedStringFromEnding;
      listOfNumberInString.forEach((coupleRegexAndNumber) => {
        formattedStringFromEnding = formattedStringFromEnding.replace(new RegExp(coupleRegexAndNumber[0], 'g'), coupleRegexAndNumber[1]);
      });
    }
    formattedString = formattedStringFromBeggining + formattedStringFromEnding;
  }
  return formattedString;
};
const getConcatenation = (stringWithNumber: string): number => {
  const stringifyNumber = formattingString(stringWithNumber);
  const stringList = stringifyNumber.match(new RegExp(/[1-9]/, 'g'));
  if (stringList != null) {
    return +(stringList[0] + stringList.slice(stringList.length - 1));
  }
  return 0;
};

const getResult = (stringList: string[]) => {
  let sum = 0;
  stringList.forEach((s) => {
    sum += getConcatenation(s);
  });
  return sum;
};

describe('Trebuchet', () => {
  it('should concatenate a string with two number', () => {
    const stringWithNumber = '12';

    expect(getConcatenation(stringWithNumber)).toBe(12);
  });

  it('should concatenate a string with two number', () => {
    const stringWithNumber = '42';

    expect(getConcatenation(stringWithNumber)).toBe(42);
  });

  it('should concatenate a string with two number with letters', () => {
    const stringWithNumber = 'a4b2c';

    expect(getConcatenation(stringWithNumber)).toBe(42);
  });

  it('should concatenate a string with three number with letters', () => {
    const stringWithNumber = 'a4b2c7';

    expect(getConcatenation(stringWithNumber)).toBe(47);
  });

  it('should concatenate a string with one number with letters', () => {
    const stringWithNumber = 'ab2c';

    expect(getConcatenation(stringWithNumber)).toBe(22);
  });

  it('should return 0 if no number', () => {
    const stringWithNumber = 'abc';

    expect(getConcatenation(stringWithNumber)).toBe(0);
  });

  it('should sum all results', () => {
    const stringWithNumber = 'ab2c';
    const stringWithAnotherNumber = 'a1b2c';

    expect(getResult([stringWithNumber, stringWithAnotherNumber])).toBe(34);
  });

  it('should replace string with number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'oneandtwo';
    expect(formattingString(stringWithNumberFormattedInString)).toBe('1and2');
  });

  it('should replace string with two number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'oneandtwo';
    expect(formattingString(stringWithNumberFormattedInString)).toBe('1and2');
  });

  it('should replace string with all number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'onetwothreefourfivesixseveneightnine';
    expect(formattingString(stringWithNumberFormattedInString)).toBe('123456789');
  });

  it('should replace string with all number formatted in string to be 27', () => {
    const stringWithNumberFormattedInString = 'twonesevenine';
    expect(getConcatenation(stringWithNumberFormattedInString)).toBe(27);
  });

  it('should string with all number formatted in string to be 19', () => {
    const stringWithNumberFormattedInString = 'onetwothreefourfivesixseveneightnine';
    expect(getConcatenation(stringWithNumberFormattedInString)).toBe(19);
  });

  it('should return all concatenation', () => {
    const contenu = fs.readFileSync('C:\\Users\\mmetr\\Desktop\\Projets\\Inner_projects\\aoc\\src\\Day1_trebuchet\\example.txt', 'utf-8');
    const list = contenu.split('\n');

    list.forEach((s) => {
      console.log(getConcatenation(s));
    });
  });

  it('should sum all results', () => {
    const contenu = fs.readFileSync('C:\\Users\\mmetr\\Desktop\\Projets\\Inner_projects\\aoc\\src\\Day1_trebuchet\\list.txt', 'utf-8');
    const list = contenu.split('\n');

    console.log(getResult(list));
  });
});
