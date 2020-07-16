import categoryMixins from '@app/modules/categoryMixins.js';
import categoryTree from '@app/components/category-tree/index.vue';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'article',
    mixins: [categoryMixins],
    props: {
        articleId: {
            type: String,
            default: ''
        },
        navBar: {
            type: Boolean,
            default: true
        },
        baseUrl: {
            type: String,
            default: 'https://linmingdao.github.io/blog/documents/'
        }
    },
    components: { categoryTree, navigationBar, markdownViewer }
};
