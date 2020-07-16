import axios from 'axios';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

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
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            category: [],
            flatCategory: [],
            articlePrefix: `${window.location.origin}/#/article/`
        };
    },
    async created() {
        const { data = {} } = await axios.get('https://linmingdao.github.io/blog/metadata.json');
        const { category = [], metadata = {} } = data;
        this.$set(this, 'category', category);
        this.$set(this, 'metadata', metadata);

        // 扁平化菜单
        const flatCategory = [];
        category.forEach(item => doFlatCategory(item, flatCategory));
        this.$set(this, 'flatCategory', flatCategory);
    },
    methods: {
        handleNodeClick({ url }) {
            if (!url) return;
            const articleId = '37192';
            window.open(`${this.articlePrefix}${articleId}`);
        }
    },
    components: { navigationBar, markdownViewer }
};
