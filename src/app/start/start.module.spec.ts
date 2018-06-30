import { StartModule } from './start.module';

describe('StartModule', () => {
  let startModule: StartModule;

  beforeEach(() => {
    startModule = new StartModule();
  });

  it('should create an instance', () => {
    expect(startModule).toBeTruthy();
  });
});
