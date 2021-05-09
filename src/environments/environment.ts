// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZGF3aWRrIiwiYSI6ImNraWI2MmRjNDB3Y2EzMWxjaHE4b3V5aTIifQ.qvXuKs0c6RBiFKPbiFQMxw'
    },
    auth: {
        domain: "dawidkapica.eu.auth0.com",
        clientId: "g6T9X3fcIYbvHV3m3vhhjvx8SjtiVpxu",
        redirectUri: window.location.origin,
        audience: "https://sportsapp.com/api"
    },
    dev: {
      serverUrl: "http://localhost:8080"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
