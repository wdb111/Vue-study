import store from '@/store';

//权限指令
const powerInstruct = {
    inserted(el, binding, vnode) {
        // let {value} = binding;
        // if (!value) value = ['editor', 'creator', 'controller'];
        // else if (typeof value === 'string') value = JSON.parse(value);
        let role = store.state.permission;
        if (!role) {
            // if (!value.includes(role)) {
            el.parentNode && el.parentNode.removeChild(el);
            // }
        }
    }
}

//自定义指令
const demoInstruct = {
    inserted(el, binding, vnode) {
        el.innerHTML=binding.value;
    }
}
export default {
    powerInstruct,
    demoInstruct
};