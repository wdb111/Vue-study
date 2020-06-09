var Mock = require('mockjs')

Mock.mock('selectData', 'post', {
    data: {
        id: 1,
        username: 'admin',
        nickName: '管理员',
        headImgUrl: null,
        token: '124656789abcdeftghijklmn'
    }
})