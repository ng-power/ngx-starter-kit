// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import sharedEnvironment from './base';
import { IEnvironment } from '@env/ienvironment';

export const environment: IEnvironment = {
  ...sharedEnvironment,
  production: false,
  envName: 'dev',

  DOCS_BASE_URL: 'http://localhost:8000',
  API_BASE_URL: 'http://localhost:3000/api',
  WS_EVENT_BUS_URL: 'ws://localhost:3000/eventbus',

  auth: {
    clientId: 'ngxweb',
    issuer: 'https://keycloak-ngx.apps.us-west-1.online-starter.openshift.com/auth/realms/ngx',
    // issuer: 'https://keycloak.traefik.k8s/auth/realms/ngx',

    // clientId: '791772336084-vkt37abstm1du92ofdmhgi30vgd7t0oa.apps.googleusercontent.com',
    // issuer: 'https://accounts.google.com'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
