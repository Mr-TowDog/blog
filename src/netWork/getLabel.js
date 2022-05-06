import { ajax } from './require';
export default function(label) {
    return ajax({
        url: "/getLabel/",
        method: "get",
        params: {
            label,
        }
    })
}