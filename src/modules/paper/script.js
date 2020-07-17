import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';
import categorySwitcher from '@app/components/category-switcher/index.vue';

export default {
    name: 'paper',
    props: {
        paperId: {
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
    components: { navigationBar, markdownViewer, categorySwitcher }
};
