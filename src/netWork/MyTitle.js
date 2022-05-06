import { ajax } from "./require.js";
export default function get() {
    return ajax({
        url: "/getUser/"
    })
}