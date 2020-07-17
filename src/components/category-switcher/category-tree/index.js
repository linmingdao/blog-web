import Vue from 'vue';
import './style.css';
import template from './template.html';

export default Vue.extend({
    template,
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
        hideSelf() {
            this.$el.style.display = 'none';
        },
        handleNodeClick({ id }) {
            if (!id) return;
            window.open(`${this.articleBaseUrl}${id}`);
        }
    }
});
