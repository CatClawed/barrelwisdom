// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  commentoUrl: 'http://159.65.240.56:8090',
  apiUrl: '/api',
  authUrl: '/auth',
  imageRegex: '/media/',
  mediaURL: '/media/',
  totori_languages: {"en": "English", "ja":"日本語"},
  escha_languages: {"en": "English", "ja":"日本語"},
  shallie_languages: {"en": "English", "ja":"日本語"},
  ryza2_languages: {"en": "English", "fr": "Français", "ja":"日本語", "ko":"한국어", "sc":"简体中文", "tc":"繁體中文"},
  sophie2_languages: {"en": "English", "ja":"日本語", "ko":"한국어", "sc":"简体中文", "tc":"繁體中文"},
  bluereflection_languages: {"en": "English"},
  secondlight_languages: {"en": "English", "ja":"日本語", "sc":"简体中文", "tc":"繁體中文"},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
