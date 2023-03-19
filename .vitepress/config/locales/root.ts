export const root = {
    lang: 'en',
    label: 'English',
    title: 'Cafully',
    description: 'A Java Agent Framework',
    themeConfig: {
        lastUpdateText: 'Last Updated',
        outline: {
            label: 'On this page',
        },
        docFooter: {
            prev: 'Previous page',
            next: 'Next page',
        },
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
                activeMatch: '/guide/'
            }
        ],
        editLink: {
            pattern: 'https://github.com/Cafully/website/edit/master/src/:path',
            text: 'Edit this page on GitHub',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © 2023-${new Date().getFullYear()} Enaium`,
        },
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {
                        text: 'Getting Started',
                        link: '/guide/'
                    },
                    {
                        text: 'Directory',
                        link: '/guide/directory'
                    },
                    {
                        text: 'Plugin',
                        link: '/guide/plugin'
                    }
                ]
            }
        ]
    }
}