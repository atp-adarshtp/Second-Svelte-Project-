import { derived, writable } from "svelte/store";
import localProducts from '../defaultProducts';
const store = writable(flattenProducts([...localProducts]));


function flattenProducts(data) {
    return data.map(item => {
        let image = item.image.url;
        return { ...item, image }
    })
}
export const featuredStore = derived(store,($featured)=>{
    return $featured.filter(item => item.featured === true);
})
export default store;
