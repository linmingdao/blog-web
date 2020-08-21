import authorBar from '@app/components/author-bar/index.vue';
import rewardBar from '@app/components/reward-bar/index.vue';
import markdownViewer from '@app/components/markdown-viewer/index.vue';

export default {
    name: 'paper',
    props: {
        paperId: {
            type: String,
            default: ''
        },
        baseUrl: {
            type: String,
            default: 'https://linmingdao.github.io/blog/documents/'
        }
    },
    components: { authorBar, rewardBar, markdownViewer }
};
