import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
    viewportHeight: 800,
    viewportWidth: 1400,
    chromeWebSecurity: false,
    screenshotOnRunFailure: false,
    video: false,
    e2e: {
        blockHosts: ['*cdn.dummyjson.com'],
        ...nxE2EPreset(__filename, {
            cypressDir: 'src',
            webServerCommands: {
                default: 'yarn nx run dashboard:serve',
                production: 'yarn nx run dashboard:serve-static',
            },
            ciWebServerCommand: 'yarn nx run dashboard:serve-static',
            ciBaseUrl: 'http://localhost:4200',
        }),
        baseUrl: 'http://localhost:4200',
    },
});
