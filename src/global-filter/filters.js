//首字母大写
const globalFilter = (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1)
}
//补零
const addZeroFilter = (value) => {
    if (!value) return '';
    let num = Number(value);
    if (isNaN(num)) return value;
    return value.toString().padStart(2, '0')
}
export default {
    globalFilter,
    addZeroFilter
}