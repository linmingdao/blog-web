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
            categoryTreeNode: undefined,
            updates: [],
            category: [],
            metadata: {},
            flatCategory: [],
            defaultProps: { children: 'children', label: 'label' },
            articleBaseUrl: `${window.location.origin}/#/paper/`
        };
    },
    async created() {
        const { data = {} } = await axios.get('https://linmingdao.github.io/blog/metadata.json');
        const { category = [], metadata = {}, updates = [] } = data;
        this.$set(this, 'updates', updates);
        this.$set(this, 'category', category);
        this.$set(this, 'metadata', metadata);

        // 扁平化菜单
        const flatCategory = [];
        category.forEach(item => doFlatCategory(item, flatCategory));
        // TODO: flatCategory 根据文档发布日期排序
        this.$set(this, 'flatCategory', flatCategory);

        // 初始化文档树形分类菜单
        this.initCategoryTree(category);
    },
    methods: {
        showCategoryTree() {
            this.categoryTreeNode.style.display = 'block';
        },
        initCategoryTree(category) {
            const { defaultProps, flatCategory, articleBaseUrl } = this;
            const categoryTree = new CategoryTree({
                propsData: { defaultProps, category, articleBaseUrl }
            }).$mount();
            const categoryTreeNode = categoryTree.$el;
            document.body.appendChild(categoryTreeNode);
            this.$set(this, 'categoryTreeNode', categoryTreeNode);

            // 设置home模块的文章列表信息
            const homeComponent = this.$findParentComponent('home');
            if (homeComponent) {
                homeComponent.initData({ flatCategory, articleBaseUrl });
            }
        }
    }
};
