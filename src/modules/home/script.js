import axios from 'axios';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    data() {
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            category: []
        };
    },
    created() {
        this.fetchCatalog();
    },
    methods: {
        async fetchCatalog() {
            const res = await axios.get('https://linmingdao.github.io/blog/category.json');
            this.$set(this, 'category', res.data);
        },
        handleNodeClick({ url }) {
            url && this.$refs['markdownViewer'].setUrl(url);
        }
    },
    components: {
        markdownViewer
    }
};
