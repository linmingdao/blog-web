import axios from 'axios';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    props: {
        articleId: {
            type: String
        }
    },
    data() {
        console.log(this.articleId);
        return {
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            category: []
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
            const { origin } = window.location;
            window.open(`${origin}/#/article/${articleId}`);
        }
    },
    components: { navigationBar, markdownViewer }
};
