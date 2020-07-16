import axios from 'axios';

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
            updates: [],
            category: [],
            flatCategory: [],
            defaultProps: { children: 'children', label: 'label' },
            articleBaseUrl: `${window.location.origin}/#/article/`
        };
    },
    async created() {
        const { data = {} } = await axios.get('https://linmingdao.github.io/blog/metadata.json');
        const { category = [], metadata = {}, updates = [] } = data;
        this.$set(this, 'updates', updates);
        this.$set(this, 'category', category);
        this.$set(this, 'metadata', metadata);

        // 扁平化菜单
        const flatCategory = [];
        category.forEach(item => doFlatCategory(item, flatCategory));
        // TODO: flatCategory 根据文档发布日期排序
        this.$set(this, 'flatCategory', flatCategory);
    }
};
