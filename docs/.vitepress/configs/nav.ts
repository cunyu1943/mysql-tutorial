import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    { text: '🏠 首页', link: '/' },
    { text: ' 我的主页', link: 'https://cunyu1943.github.io' },
    // { text: '🐎 2026 年刊', link: '/2026/latest' },

    {
        text: '🗺️ 学习路线',
        items: [
            { text: '1️⃣ 基础教程', link: '/basic' },
            { text: '2️⃣ SQL 必知必会', link: '/sql-in-10min' },

        ]
    },

]