const setUpSpies = () => {
  globalThis.spies.log = jest
    .spyOn(console, 'log')
    .mockImplementation(() => jest.fn())
  globalThis.spies.debug = jest
    .spyOn(console, 'debug')
    .mockImplementation(() => jest.fn())
  globalThis.spies.trace = jest
    .spyOn(console, 'trace')
    .mockImplementation(() => jest.fn())
}

globalThis.spies = {
  log: jest.fn(),
  debug: jest.fn(),
  trace: jest.fn(),
  restore: () => {},
}

beforeEach(() => {
  setUpSpies()
})

globalThis.spies.restore = (spies = ['all']) => {
  const { log, debug, trace } = globalThis.spies
  if (spies.includes('all')) {
    log.mockRestore()
    debug.mockRestore()
    trace.mockRestore()
  }
  if (spies.includes('log')) {
    log.mockRestore()
  }
  if (spies.includes('debug')) {
    debug.mockRestore()
  }
  if (spies.includes('trace')) {
    trace.mockRestore()
  }
}

// Additional types for globalThis can be added in index.d.ts
