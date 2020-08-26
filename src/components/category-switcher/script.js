import CategoryTree from './category-tree/index.js';

export default {
    name: 'category-switcher',
    props: {
        category: {
            type: Array,
            default: function() {
                return [];
            }
        },
        articleBaseUrl: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            categoryTreeNode: undefined
        };
    },
    async created() {
        // 初始化文档分类菜单
        this.init();
    },
    methods: {
        showCategoryTree() {
            this.categoryTreeNode.style.display = 'block';
        },
        init() {
            // 构建文章分类树组件
            const categoryTreeNode = new CategoryTree({
                propsData: {
                    category: this.category,
                    articleBaseUrl: this.articleBaseUrl
                },
                defaultProps: {
                    label: 'label',
                    children: 'children'
                }
            }).$mount().$el;

            document.body.appendChild(categoryTreeNode);

            this.$set(this, 'categoryTreeNode', categoryTreeNode);
        }
    }
};
