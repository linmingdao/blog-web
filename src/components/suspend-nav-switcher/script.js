import SuspendNav from './suspend-nav/index.js';

export default {
    name: 'suspend-nav-switcher',
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
    data() {
        return {
            suspendNavNode: undefined
        };
    },
    methods: {
        showSuspendNav() {
            if (this.suspendNavNode) {
                this.suspendNavNode.style.display = 'block';
            } else {
                const suspendNavNode = new SuspendNav({
                    propsData: {
                        navItems: this.navItems,
                        currentModel: this.currentModel
                    }
                }).$mount().$el;

                document.body.appendChild(suspendNavNode);

                this.$set(this, 'suspendNavNode', suspendNavNode);
            }
        }
    }
};
