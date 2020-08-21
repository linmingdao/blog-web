import axios from 'axios';
import CategoryTree from './category-tree/index.js';

function doFlatCategory(category, arr) {
    if (category.children) {
        category.children.forEach(item => {
            doFlatCategory(item, arr);
        });
    } else {
        category.id && arr.push(category);
        return arr;
    }
}

export default {
    name: 'category-switcher',
    data() {
        return {
            meta: {},
            updates: [],
            category: [],
            flatCategory: [],
            categoryTreeNode: undefined
        };
    },
    async created() {
        const { data: metadata = {} } = await axios.get('https://linmingdao.github.io/blog/metadata.json');

        // 从元数据信息解析出文档大纲信息
        const { meta = {}, category = [], updates = [] } = metadata;

        // 扁平化菜单，用于博客主页列表
        let flatCategory = [];
        category.forEach(item => doFlatCategory(item, flatCategory));
        flatCategory = flatCategory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // 初始化文档分类菜单
        this.init({ meta, updates, category, flatCategory });
    },
    methods: {
        showCategoryTree() {
            this.categoryTreeNode.style.display = 'block';
        },
        init({ meta, updates, category, flatCategory }) {
            // 文章详情baseUrl
            const articleBaseUrl = `${window.location.origin}/#/paper/`;

            // 构建文章分类树组件
            const categoryTreeNode = new CategoryTree({
                propsData: {
                    category,
                    articleBaseUrl
                },
                defaultProps: {
                    label: 'label',
                    children: 'children'
                }
            }).$mount().$el;
            document.body.appendChild(categoryTreeNode);

            // 设置home模块的文章列表信息
            const homeComponent = this.$findParentComponent('home');
            if (homeComponent) {
                homeComponent.initData({ flatCategory, articleBaseUrl });
            }

            // 缓存基本信息
            this.$set(this, 'meta', meta);
            this.$set(this, 'updates', updates);
            this.$set(this, 'category', category);
            this.$set(this, 'flatCategory', flatCategory);
            this.$set(this, 'categoryTreeNode', categoryTreeNode);
        }
    }
};
