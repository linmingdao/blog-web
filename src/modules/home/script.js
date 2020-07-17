import categorySwitcher from '@app/components/category-switcher/index.vue';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'home',
    data() {
        return {
            flatCategory: [],
            articleBaseUrl: ''
        };
    },
    methods: {
        initData({ flatCategory, articleBaseUrl }) {
            this.$set(this, 'flatCategory', flatCategory);
            this.$set(this, 'articleBaseUrl', articleBaseUrl);
        }
    },
    components: { categorySwitcher, navigationBar, markdownViewer }
};
