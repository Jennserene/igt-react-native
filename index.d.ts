var spies: {
  log: jest.SpyInstance
  debug: jest.SpyInstance
  trace: jest.SpyInstance
  restore: (spies?: string[]) => void
}