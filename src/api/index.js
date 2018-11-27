const BASE_URL = 'http://10.112.249.109:60000'

export function getMetaData(url) {
    return {
        "data": {
            "url": "http://39.104.189.84:30200",    // 实验室服务器
            //"url": "http://10.112.246.98:31001", // LXH电脑IP
            "myId": 204,
            "myName": "mary",
            "myUserName": "mary",
            "groups": [{
                "id": 160,
                "name": "IM讨论小组"
            },
            {
                "id": 180,
                "name": "Gru使用讨论"
            },
            {
                "id": 190,
                "name": "测试群组"
            }],
            "users": [
                {
                    "id": 201,
                    "avatar": "avatar1.png",
                    "username": "sumory",
                    "password": "123456",
                    "name": "sumory.wu",
                    "url": "sumory.com",
                    "groups": [160, 170, 180, 190]
                },
                {
                    "id": 202,
                    "avatar": "user2.jpg",
                    "username": "felix",
                    "password": "123456",
                    "name": "felix",
                    "url": "felix.com",
                    "groups": [160, 190]
                }, {
                    "id": 203,
                    "avatar": "user3.jpg",
                    "username": "sunny",
                    "password": "123456",
                    "name": "sunny",
                    "url": "baidu.com",
                    "groups": [180, 190]
                }, {
                    "id": 205,
                    "avatar": "user5.jpg",
                    "username": "bruce",
                    "password": "123456",
                    "name": "bruce",
                    "url": "shell.com",
                    "groups": [160, 170, 190]
                }, {
                    "id": 206,
                    "avatar": "user6.jpg",
                    "username": "bamzi",
                    "password": "123456",
                    "name": "bamzi",
                    "url": "abc.com",
                    "groups": [160, 170, 180]
                }, {
                    "id": 207,
                    "avatar": "user7.jpg",
                    "username": "roy",
                    "password": "123456",
                    "name": "roy",
                    "url": "yahoo.com",
                    "groups": [160, 170, 180, 190]
                }],
            "userMap": {
                "201":
                    { "id": 201, "avatar": "avatar1.png", "username": "sumory", "password": "123456", "name": "sumory.wu", "url": "sumory.com", "groups": [160, 170, 180, 190] },
                "202": { "id": 202, "avatar": "user2.jpg", "username": "felix", "password": "123456", "name": "felix", "url": "felix.com", "groups": [160, 190] },
                "203": { "id": 203, "avatar": "user3.jpg", "username": "sunny", "password": "123456", "name": "sunny", "url": "baidu.com", "groups": [180, 190] },
                "204": { "id": 204, "avatar": "user4.jpg", "username": "mary", "password": "123456", "name": "mary", "url": "google.com", "groups": [160, 180, 190] },
                "205": { "id": 205, "avatar": "user5.jpg", "username": "bruce", "password": "123456", "name": "bruce", "url": "shell.com", "groups": [160, 170, 190] },
                "206": { "id": 206, "avatar": "user6.jpg", "username": "bamzi", "password": "123456", "name": "bamzi", "url": "abc.com", "groups": [160, 170, 180] },
                "207": { "id": 207, "avatar": "user7.jpg", "username": "roy", "password": "123456", "name": "roy", "url": "yahoo.com", "groups": [160, 170, 180, 190] }
            },
            "groupMap": { "160": { "id": 160, "name": "IM璁ㄨ灏忕粍" }, "180": { "id": 180, "name": "Gru浣跨敤璁ㄨ" }, "190": { "id": 190, "name": "娴嬭瘯缇ょ粍" } },
            "groupIds": "160,180,190"
        }
    }

    // @TODO 需要登陆的权限
    // fetch(BASE_URL + url, {
    //     method: "get",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },

    // }).then((response) => response.json())
    //     .then((responseJson) => {
    //         console.log(responseJson)
    //         return responseJson;
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     });
}

export function genToken(url) {
    return {
        "success": true,
        "token1": "382ed36763297d6237c3a998c7e35f39",
        "token2": "3bb1603ebb6d0fd34cb880c6aa62701b"
    }
}
