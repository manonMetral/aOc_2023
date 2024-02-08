import * as fs from 'fs';

import { describe, expect, it } from 'vitest';

import { Trebuchet } from './trebuchet';

describe('Trebuchet', () => {
  const trebuchet = new Trebuchet();
  it('should concatenate a string with two number', () => {
    const stringWithNumber = '12';

    expect(trebuchet.getConcatenation(stringWithNumber)).toBe(12);
  });

  it('should concatenate a string with two number with letters', () => {
    const stringWithNumber = 'a4b2c';

    expect(trebuchet.getConcatenation(stringWithNumber)).toBe(42);
  });

  it('should concatenate a string with three number with letters', () => {
    const stringWithNumber = 'a4b2c7';

    expect(trebuchet.getConcatenation(stringWithNumber)).toBe(47);
  });

  it('should concatenate a string with one number with letters', () => {
    const stringWithNumber = 'ab2c';

    expect(trebuchet.getConcatenation(stringWithNumber)).toBe(22);
  });

  it('should return 0 if no number', () => {
    const stringWithNumber = 'abc';

    expect(trebuchet.getConcatenation(stringWithNumber)).toBe(0);
  });

  it('should sum all results', () => {
    const stringWithNumber = 'ab2c';
    const stringWithAnotherNumber = 'a1b2c';

    expect(trebuchet.getResult([stringWithNumber, stringWithAnotherNumber])).toBe(34);
  });

  it('should replace string with number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'one';
    expect(trebuchet.formattingString(stringWithNumberFormattedInString)).toBe('11');
  });

  it('should replace string with two number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'oneandtwo';
    expect(trebuchet.formattingString(stringWithNumberFormattedInString)).toBe('1and21and2');
  });

  it('should replace string with all number formatted in string to string with digits', () => {
    const stringWithNumberFormattedInString = 'onetwothreefourfivesixseveneightnine';
    expect(trebuchet.formattingString(stringWithNumberFormattedInString)).toBe('123456789123456789');
  });

  it('should replace string with all number formatted in string to be 29', () => {
    const stringWithNumberFormattedInString = 'twonesevenine';
    expect(trebuchet.getConcatenation(stringWithNumberFormattedInString)).toBe(29);
  });

  it('should string with all number formatted in string to be 19', () => {
    const stringWithNumberFormattedInString = 'onetwothreefourfivesixseveneightnine';
    expect(trebuchet.getConcatenation(stringWithNumberFormattedInString)).toBe(19);
  });

  it('should return all concatenation', () => {
    const contenu = fs.readFileSync('C:\\Users\\mmetr\\Desktop\\Projets\\Inner_projects\\aoc\\src\\Day1_trebuchet\\example.txt', 'utf-8');
    const list = contenu.split('\n');

    list.forEach((s) => {
      console.log(trebuchet.getConcatenation(s));
    });
  });

  it('should sum all results from list', () => {
    const contenu = fs.readFileSync('C:\\Users\\mmetr\\Desktop\\Projets\\Inner_projects\\aoc\\src\\Day1_trebuchet\\list.txt', 'utf-8');
    const list = contenu.split('\n');

    console.log(trebuchet.getResult(list));
  });
});
