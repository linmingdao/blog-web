export default {
    name: 'author-bar',
    props: {
        author: {
            type: String,
            default: function() {
                return {
                    name: '幂湿特林',
                    link: 'https://github.com/linmingdao'
                };
            }
        },
        blog: {
            type: String,
            default: function() {
                return {
                    name: '又要开始扯蛋了',
                    link: 'https://linmingdao.github.io/'
                };
            }
        }
    }
};
