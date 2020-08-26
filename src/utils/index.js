import axios from 'axios';

const CATEGORY_URL = 'https://linmingdao.github.io/blog/{model}.json';

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

export async function getCategoryData(model) {
    let category = [];

    // 获取目录信息
    if (Array.isArray(model)) {
        const res = await Promise.all(model.map(item => axios.get(CATEGORY_URL.replace('{model}', item))));
        res.forEach(item => {
            category = category.concat(item.data.category);
        });
    } else {
        const { data } = await axios.get(CATEGORY_URL.replace('{model}', model));
        category = data.category;
    }

    // 扁平化菜单，用于博客列表
    let flatCategory = [];
    category.forEach(item => doFlatCategory(item, flatCategory));
    flatCategory = flatCategory.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return { category, flatCategory };
}
