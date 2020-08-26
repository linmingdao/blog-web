import CategoryTree from './category-tree/index.js';

export default {
    name: 'category-switcher',
    data() {
        return {
            categoryTreeNode: undefined
        };
    },
    methods: {
        showCategoryTree() {
            this.categoryTreeNode && (this.categoryTreeNode.style.display = 'block');
        },
        init({ category = [], articleBaseUrl = '' }) {
            // 构建文章分类树组件
            const categoryTreeNode = new CategoryTree({
                propsData: {
                    category,
                    articleBaseUrl,
                    defaultProps: {
                        label: 'label',
                        children: 'children'
                    }
                }
            }).$mount().$el;

            document.body.appendChild(categoryTreeNode);

            this.$set(this, 'categoryTreeNode', categoryTreeNode);
        }
    }
};
