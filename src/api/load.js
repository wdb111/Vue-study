import https from '../https'

export function getUsers(data){
    // console.log(data)
    return https({
        url: "selectData",
        method: 'post'
    })
}