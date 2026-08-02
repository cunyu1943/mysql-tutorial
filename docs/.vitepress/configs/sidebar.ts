import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/': [
        { text: '学习指南', link: '/about.md' },
        {
            text: '基础教程',
            collapsed: true,
            items: [
                { text: '快速入门', link: '/basic/20210623-quick-start.md' },
                { text: '开发环境搭建', link: '/basic/20240314-environment.md' },
            ]
        },
        {
            text: 'SQL 必知必会',
            collapsed: true,
            items: [
                { text: '《SQL 必知必会》全解析（1-5）', link: '/sql-in-10min/20220726-1-5.md' },
                { text: '《SQL 必知必会》全解析（6-10）', link: '/sql-in-10min/20220726-6-10.md' },
                { text: '《SQL 必知必会》全解析（11-15）', link: '/sql-in-10min/20220726-11-15.md' },
                { text: '《SQL 必知必会》全解析（16-20）', link: '/sql-in-10min/20220726-16-20.md' },
                { text: '《SQL 必知必会》全解析（21-25）', link: '/sql-in-10min/20220726-21-25.md' },
                { text: '《SQL 必知必会》全解析（26-30）', link: '/sql-in-10min/20220726-26-30.md' },
                { text: '《SQL 必知必会》全解析（31-35）', link: '/sql-in-10min/20220726-31-35.md' },
                { text: '《SQL 必知必会》全解析（36-40）', link: '/sql-in-10min/20220726-36-40.md' },
                { text: '《SQL 必知必会》全解析（41-45）', link: '/sql-in-10min/20220726-41-45.md' },
                { text: '《SQL 必知必会》全解析（46-50）', link: '/sql-in-10min/20220726-46-50.md' },
            ]
        },




    ],
}