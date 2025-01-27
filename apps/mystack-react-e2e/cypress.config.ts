import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run mystack-react:serve',
        production: 'nx run mystack-react:preview',
      },
      ciWebServerCommand: 'nx run mystack-react:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
