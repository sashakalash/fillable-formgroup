export const environment = {
  production: true,
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
