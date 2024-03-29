/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '5e Tools',
  tagline:
    'Useful D&D 5e tables for DMs and players, with custom Homebrew separated into its own section.',
  url: 'https://TheSecondCore.github.io',
  baseUrl: '/5e-tools/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TheSecondCore', // Usually your GitHub org/user name.
  projectName: '5e-tools', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '5e Tools',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/TheSecondCore/5e-tools',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Get in Touch',
          items: [
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/users/TheSecondCore',
            // },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheSecondCore',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TheSecondCore/5e-tools',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} D&D 5e Tools. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
