export default {
    props: {
        slogan: {
            type: String,
            default: '叕要开始扯蛋了'
        },
        items: {
            type: Array,
            default: function() {
                return [
                    {
                        label: '博客',
                        target: '_self',
                        icon: 'iconblog',
                        href: 'https://linmingdao.github.io/'
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
                        label: 'GitHub',
                        target: '_blank',
                        icon: 'icongithub',
                        href: 'https://github.com/linmingdao'
                    },
                    {
                        label: '关于作者',
                        target: '_blank',
                        icon: 'iconzuozhe',
                        href: 'https://github.com/linmingdao'
                    }
                ];
            }
        }
    },
    data() {
        let flatCategory = [];
        let filterItems = [];

        const articleBaseUrl = sessionStorage.getItem('articleBaseUrl');
        const flatCategoryStr = sessionStorage.getItem('flatCategory');
        if (flatCategoryStr) {
            flatCategory = JSON.parse(flatCategoryStr);
            filterItems = [...flatCategory];
        }

        return {
            filterTxt: '',
            filterItems,
            flatCategory,
            articleBaseUrl
        };
    },
    methods: {
        handleInput(val) {
            this.$set(
                this,
                'filterItems',
                this.flatCategory.filter(item => item.label.toLowerCase().includes(val.toLowerCase()))
            );
        }
    }
};
