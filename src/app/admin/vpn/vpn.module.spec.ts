import { VpnModule } from './vpn.module';

describe('VpnModule', () => {
  let vpnModule: VpnModule;

  beforeEach(() => {
    vpnModule = new VpnModule();
  });

  it('should create an instance', () => {
    expect(vpnModule).toBeTruthy();
  });
});
