import categorySwitcher from '@app/components/category-switcher/index.vue';
import suspendNavSwitcher from '@app/components/suspend-nav-switcher/index.vue';

export default {
    name: 'navigation-bar',
    props: {
        currentModel: {
            type: String,
            default: ''
        },
        slogan: {
            type: String,
            default: '又要开始扯<a class="logo"></a>了'
        },
        items: {
            type: Array,
            default: function() {
                return [
                    {
                        label: '技术',
                        model: 'tech',
                        target: '_self',
                        icon: 'iconyuanzi',
                        href: 'https://linmingdao.github.io/#/tech'
                    },
                    {
                        label: '个人',
                        model: 'privacy',
                        target: '_self',
                        icon: 'iconkongjian',
                        href: 'https://linmingdao.github.io/#/privacy'
                    },
                    {
                        label: '全部博文',
                        model: 'all',
                        target: '_self',
                        icon: 'iconall',
                        href: 'https://linmingdao.github.io/#/all'
                    },
                    {
                        label: 'GitHub',
                        target: '_blank',
                        icon: 'icongithub',
                        href: 'https://github.com/linmingdao'
                    },
                    {
                        label: '微博',
                        target: '_blank',
                        icon: 'iconweibo',
                        href: 'https://weibo.com/p/1005052270750257/home?from=page_100505&mod=TAB&is_all=1#place'
                    },
                    {
                        label: 'B站',
                        target: '_blank',
                        icon: 'iconbilibili',
                        href: 'https://space.bilibili.com/325195'
                    },
                    {
                        label: '作者',
                        target: '_blank',
                        icon: 'iconzuozhe',
                        href: 'https://linmingdao.github.io/#/about'
                    }
                ];
            }
        }
    },
    methods: {
        initCategorySwitcher({ category, articleBaseUrl }) {
            this.$refs['switcher'].init({ category, articleBaseUrl });
        }
    },
    components: { categorySwitcher, suspendNavSwitcher }
};
