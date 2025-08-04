export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'zinc'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'FusionPHP'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'logo',
      light: 'logo-light.png',
      dark: 'logo-dark.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/fusion-php/fusion',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide:globe',
      'to': 'https://aaronfrancis.com/',
      'target': '_blank',
      'aria-label': 'Aaron Website'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://twitter.com/@aarondfrancis',
      'target': '_blank',
      'aria-label': 'Aaron on X'
    }, {
      'icon': 'i-simple-icons-youtube',
      'to': 'https://youtube.com/@aarondfrancis',
      'target': '_blank',
      'aria-label': 'Aaron on Youtube'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/aarondfrancis',
      'target': '_blank',
      'aria-label': 'Aaron on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/fusion-php/fusion',
        target: '_blank'
      }]
    }
  }
})
