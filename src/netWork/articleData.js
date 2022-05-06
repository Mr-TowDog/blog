import { ajax } from './require';

function getArticleData(id) {
    return ajax({
        url: "/getArticleData/",
        method: "get",
        params: {
            id,
        }
    })
};
export { getArticleData };