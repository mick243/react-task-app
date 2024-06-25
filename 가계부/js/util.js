export function toShow(node){
    node.className = node.classNamereplace("v-none", "v-show");
}

export function toHidden(node){
    node.className = node.classNamereplace("v-none", "v-show");
}

export function validatePrice(currentFunds, currentAmnount){
    return currentFunds >= currentAmnount;
}

export function validateRequired({category, description, price}){
    return Boolean(category) && Boolean(description) && Boolean(price) && price > 0;
}
