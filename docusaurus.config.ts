import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'HwHost | Base de connaissance',
  tagline: '',
  favicon: 'img/logo_big.png',

  url: 'https://bdc.hwhost.fr',
  baseUrl: '/',

  organizationName: 'HwHost',
  projectName: 'HwHost | Base de connaissance',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "prerelease",
      content: 'La base de connaissances est en développement continu',
      backgroundColor: "rgba(237, 72, 187, 0.1)",
      textColor: "#ed48bb",
      isCloseable: true,
    },
    navbar: {
      title: 'HwHost | Base de connaissance',
      logo: {
        alt: 'HwHost Logo',
        src: 'img/logo_big.png',
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
