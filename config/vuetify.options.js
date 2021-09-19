import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

/** !IMPORTANT
** If you change the palette bellow,
** don't forget to update /saas-theme/components/Testimonials/Testimonials.vue on const palette as well.
** Make sure the const palette has same value as this const palette bellow
**/

const palette = {
  roseGold: {
    primary: colors.pink.lighten1, // primary main
    primarylight: colors.pink.lighten5, // primary light
    primarydark: colors.pink.darken1, // primary dark
    secondary: colors.amber.darken2, // secondary main
    secondarylight: colors.amber.lighten5, // secondary light
    secondarydark: colors.amber.darken4, // secondary dark
    anchor: colors.amber.base // link
  },
}

export const theme = {
  ...palette.roseGold
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
