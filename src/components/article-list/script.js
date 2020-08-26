import { getCategoryData } from '@app/utils';
import categorySwitcher from '@app/components/category-switcher/index.vue';
import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'article-list',
    props: {
        currentModel: {
            type: String
        },
        model: {
            type: [String, Array]
        }
    },
    data() {
        return {
            category: [],
            flatCategory: [],
            articleBaseUrl: ''
        };
    },
    async created() {
        const { category, flatCategory } = await getCategoryData(this.model);
        const articleBaseUrl = `${window.location.origin}/#/paper/`;

        this.$set(this, 'category', category);
        this.$set(this, 'flatCategory', flatCategory);
        this.$set(this, 'articleBaseUrl', articleBaseUrl);

        // 初始化菜单控件
        const $switcher = this.$refs['switcher'];
        $switcher && $switcher.init({ category, articleBaseUrl });
    },
    components: { categorySwitcher, navigationBar, markdownViewer }
};
