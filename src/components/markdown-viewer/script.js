import axios from 'axios';
const hljs = require('highlight.js');
const md = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
            } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
});

export default {
    name: 'markdown-viewer',
    props: {
        text: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
    mounted() {
        if (this.url !== '') {
            this.setUrl(this.url);
        } else {
            this.render(this.text, this.$el);
        }
    },
    methods: {
        async setUrl(url) {
            const res = await axios.get(url);
            this.render(res.data, this.$el);
        },
        render(content, node) {
            const result = md.render(content);
            node.innerHTML = result;
        }
    }
};
