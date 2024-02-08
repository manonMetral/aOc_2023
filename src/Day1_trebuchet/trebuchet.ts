export class Trebuchet {
  private listOfNumberInString = [
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
  public formattingString = (stringWithNumber: string) => {
    const formattedStringFromBeginning = this.getPartFormatted(stringWithNumber, true);
    const formattedStringFromEnding = this.getPartFormatted(stringWithNumber, false);
    return formattedStringFromBeginning + formattedStringFromEnding;
  };

  private getPartFormatted(stringWithNumbers: string, readFromBeginning: boolean) {
    let formattedString: string = '';
    const arrayString: string[] = stringWithNumbers.split('');
    if (readFromBeginning) {
      for (let i = 0; i < arrayString.length; i++) {
        formattedString += arrayString[i];
        this.listOfNumberInString.forEach((coupleRegexAndNumber) => {
          formattedString = formattedString.replace(new RegExp(coupleRegexAndNumber[0], 'g'), coupleRegexAndNumber[1]);
        });
      }
    } else {
      for (let i = arrayString.length - 1; i >= 0; i--) {
        formattedString = arrayString[i] + formattedString;
        this.listOfNumberInString.forEach((coupleRegexAndNumber) => {
          formattedString = formattedString.replace(new RegExp(coupleRegexAndNumber[0], 'g'), coupleRegexAndNumber[1]);
        });
      }
    }
    return formattedString;
  }

  public getConcatenation = (stringWithNumber: string): number => {
    const stringifyNumber = this.formattingString(stringWithNumber);
    const stringList = stringifyNumber.match(new RegExp(/[1-9]/, 'g'));
    if (stringList != null) {
      return +(stringList[0] + stringList.slice(stringList.length - 1));
    }
    return 0;
  };

  public getResult = (stringList: string[]) => {
    let sum = 0;
    stringList.forEach((s) => {
      sum += this.getConcatenation(s);
    });
    return sum;
  };
}
