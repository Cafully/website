import { text } from "stream/consumers";

export const zh = {
    lang: 'zh',
    label: '简体中文',
    title: 'Cafully',
    description: '一个Java的Agent框架',
    themeConfig: {
        lastUpdateText: '最后更新时间',
        outline: {
            label: '目录',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        nav: [
            {
                text: '指南',
                link: '/zh/guide/',
                activeMatch: '/zh/guide/'
            }
        ],
        editLink: {
            pattern: 'https://github.com/Cafully/website/edit/master/src/:path',
            text: '在 GitHub 上编辑此页面',
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © 2023-${new Date().getFullYear()} Enaium`,
        },
        sidebar: [
            {
                text: '指南',
                items: [
                    {
                        text: '开始',
                        link: '/zh/guide/'
                    },
                    {
                        text: '目录',
                        link: '/zh/guide/directory'
                    },
                    {
                        text: '插件',
                        link: '/zh/guide/plugin'
                    }
                ]
            }
        ]
    }
}