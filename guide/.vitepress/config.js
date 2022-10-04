module.exports = {
  lang: "en-US",
  title: 'Guide to Incrementals',
  description: 'A comprehensive guide to Incremental Games as a genre.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,600;1,400' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['script', { defer: true, 'data-domain': 'thepaperpilot.org', src: 'https://plausible.io/js/plausible.js' }],
    ['meta', { name: 'og:description', content: 'A comprehensive guide to Incremental Games as a genre' }]
  ],
  base: '/guide-to-incrementals/',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    editLink: {
      pattern: "https://github.com/thepaperpilot/guide-to-incrementals/edit/main/guide/:path",
      editLinkText: "Edit this page on GitHub"
    },
    nav: [
      { text: "Guide", link: "/", activeMatch: "^/" },
      { text: "Other Stuff", link: "https://thepaperpilot.org" }
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/F3xveHV" }
    ],
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/guide/" },
          { text: "Setting Up", link: "/guide/getting-started/setup" },
          { text: "Updating Profectus", link: "/guide/getting-started/updating" },
          { text: "Example Projects", link: "/guide/getting-started/examples" }
        ]
      }
    ]
  }
}
