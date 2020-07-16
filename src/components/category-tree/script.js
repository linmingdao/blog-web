export default {
    name: 'category-tree',
    props: {
        defaultProps: {
            type: Object,
            default: function() {
                return {};
            }
        },
        category: {
            type: Array,
            default: function() {
                return [];
            }
        },
        articleBaseUrl: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleNodeClick({ id }) {
            if (!id) return;
            window.open(`${this.articleBaseUrl}${id}`);
        }
    }
};
