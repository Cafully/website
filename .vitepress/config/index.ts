import { defineConfig } from 'vitepress'
import { root } from './locales/root'
import { zh } from './locales/zh'

export default defineConfig({
    base: '/',
    lastUpdated: true,
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Cafully' }
        ]
    },
    locales: {
        root,
        zh
    },
    srcDir: 'src'
})
