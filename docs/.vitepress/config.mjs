import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pairfy - Marketplace",
  base: '/',
  description: "Buy and sell products on the Cardano blockchain",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'DAO', link: '/DAO' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'CONTRIBUTING', link: '/contributing' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pairfy-DAO/pairfy' }
    ]
  }
})
