import categoryMixins from '@app/modules/categoryMixins.js';
import categoryTree from '@app/components/category-tree/index.vue';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'home',
    mixins: [categoryMixins],
    data() {
        return {};
    },
    components: { categoryTree, navigationBar, markdownViewer }
};
