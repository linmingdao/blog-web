import navigationBar from '@app/components/navigation-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'article',
    props: {
        articleId: {
            type: String,
            default: 'https://linmingdao.github.io/blog/todolist.md'
        },
        navBar: {
            type: Boolean,
            default: true
        },
        url: {
            type: String,
            default: 'https://linmingdao.github.io/blog/todolist.md'
        }
    },
    components: {
        navigationBar,
        markdownViewer
    }
};
