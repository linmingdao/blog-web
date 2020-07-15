export default {
    props: {
        isBlogHome: {
            type: Boolean,
            default: true
        },
        slogan: {
            type: String,
            default: '叕要开始扯蛋了'
        },
        href: {
            type: String,
            default: 'https://linmingdao.github.io/'
        },
        items: {
            type: Array,
            default: function() {
                return [
                    {
                        label: '微博',
                        target: '_blank',
                        href: 'https://weibo.com/p/1005052270750257/home?from=page_100505&mod=TAB&is_all=1#place'
                    },
                    {
                        label: 'B站',
                        target: '_blank',
                        href: 'https://space.bilibili.com/325195'
                    },
                    {
                        label: 'GitHub',
                        target: '_blank',
                        href: 'https://github.com/linmingdao'
                    },
                    {
                        label: '关于作者',
                        target: '_blank',
                        href: 'https://github.com/linmingdao'
                    }
                ];
            }
        }
    }
};
