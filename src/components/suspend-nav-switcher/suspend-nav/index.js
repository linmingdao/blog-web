import Vue from 'vue';
import './style.css';
import template from './template.html';

export default Vue.extend({
    template,
    props: {
        currentModel: {
            type: String
        },
        navItems: {
            type: Object,
            default: function() {
                return [];
            }
        }
    },
    methods: {
        hideSelf() {
            this.$el.style.display = 'none';
        }
    }
});
