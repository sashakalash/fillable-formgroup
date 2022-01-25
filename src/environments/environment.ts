// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  default: {
    prefixes: [
      {
        name: 'Азия',
        numbers: [
          {country: 'Азербайджан', code: '994'},
          {country: 'Израиль', code: '972'},
          {country: 'Сингапур', code: '65'},
        ],
      },
      {
        name: 'Африка',
        disabled: true,
        numbers: [
          {country: 'Алжир', code: '213'},
          {country: 'Египет', code: '20'},
          {country: 'Сейшельские Острова', code: '248'},
        ],
      },
      {
        name: 'Европа',
        numbers: [
          {country: 'Германия', code: '49'},
          {country: 'Нидерланды', code: '31'},
          {country: 'Чехия', code: '420'},
        ],
      },
      {
        name: 'Северная Америка',
        numbers: [
          {country: 'Канада', code: '1'},
          {country: 'США', code: '1'},
        ],
      },
    ]
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
