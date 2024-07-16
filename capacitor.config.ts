import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.evaluacion3',
  appName: 'evaluacion3',
  webDir: 'www',
  plugins:{
    CapacitorHttp:{
      enabled: true
    }
  }
}

export default config;
