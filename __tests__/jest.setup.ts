const setUpSpies = () => {
  globalThis.log = jest
    .spyOn(console, 'log')
    .mockImplementation(() => jest.fn())
  globalThis.trace = jest
    .spyOn(console, 'trace')
    .mockImplementation(() => jest.fn())
}

beforeEach(() => {
  setUpSpies()
})

// Additional types for globalThis can be added in index.d.ts
