const menulist = [
    {
        id: 125,
        authName: '用户管理',
        children:  [
            {
                id: 1,
                authName: '用户列表',
                path: 'users'
            }
        ]
    },
    {
        id:  103,
        authName: '权限管理',
        children: [
            {
                id: 1,
                authName: '角色列表',
                path: 'roles'
            },
            {
                id: 2,
                authName: '权限列表',
                path: 'rights'
            }
        ]
    },
    {
        id: 101,
        authName: '商品管理',
        children: [
            {
                id: 1,
                authName: '商品品类',
                path: 'categories'
            },
            {
                id: 2,
                authName: '商品列表',
                path: 'goods'
            },
            {
                id: 3,
                authName: '商品参数',
                path: 'params'
            }
        ]
    },
    {
        id: 102,
        authName: '订单管理',
        children: [
            {
                id: 1,
                authName: '单据列表',
                path: 'orders'
            }
        ]
    },
    {
        id: 145,
        authName: '数据管理',
        children: [
            {
                id: 1,
                authName: '数据报表',
                path: 'reports'
            }
        ]
    }
]

export {menulist}