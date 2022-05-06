import { ajax } from './require';
export default function(name, id, message) {
    message = JSON.stringify(message);
    return ajax({
        url: "/addMessage/",
        params: {
            name,
            id,
            message
        }
    })
}