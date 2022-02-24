// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    // projectId: 'ng-uni-project',
    // appId: '1:844486158457:web:f553b35853f992428e8ca8',
    // storageBucket: 'ng-uni-project.appspot.com',
    // locationId: 'europe-west',
    // apiKey: 'AIzaSyAQsK3BuzWLF5EXrUauJhlJIx0_kABE8t4',
    // authDomain: 'ng-uni-project.firebaseapp.com',
    // messagingSenderId: '844486158457',
  },
  production: false,
    firebaseConfig : {
    apiKey: "AIzaSyAQsK3BuzWLF5EXrUauJhlJIx0_kABE8t4",
    authDomain: "ng-uni-project.firebaseapp.com",
    projectId: "ng-uni-project",
    storageBucket: "ng-uni-project.appspot.com",
    messagingSenderId: "844486158457",
    appId: "1:844486158457:web:f553b35853f992428e8ca8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
