import axios from 'axios';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            category: [],
            articlePrefix: `${window.location.origin}/#/article/`
        };
    },
    async created() {
        const res = await axios.get('https://linmingdao.github.io/blog/category.json');
        this.$set(this, 'category', res.data);
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