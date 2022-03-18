function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, 'i');
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(regex);
  });
}

describe('Filter function', () => {
  const input = [
    { id: 1, url: 'https://www.url1.dev' },
    { id: 2, url: 'https://www.url2.dev' },
    { id: 3, url: 'https://www.link3.dev' },
  ];
  const tests = [
    {
      output: [{ id: 3, url: 'https://www.link3.dev' }],
      inputArray: input,
      term: 'link',
    },
    {
      output: [{ id: 3, url: 'https://www.link3.dev' }],
      inputArray: input,
      term: 'LINK',
    },
    {
      output: [
        { id: 1, url: 'https://www.url1.dev' },
        { id: 2, url: 'https://www.url2.dev' },
      ],
      inputArray: input,
      term: 'uRl',
    },
    {
      output: input,
      inputArray: input,
      term: '',
    },
  ];

  for (const testCase in tests) {
    if (Object.hasOwnProperty.call(tests, testCase)) {
      const element = tests[testCase];
      test(`it should filter by a search term ${element.term}`, () => {
        expect(filterByTerm(element.inputArray, element.term)).toEqual(
          element.output,
        );
      });
    }
  }
});
