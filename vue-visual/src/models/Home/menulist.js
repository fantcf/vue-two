const menulist = [
    {
        id: 1,
        title: 'test',
        children: [
            {
                id: 101,
                title: '用户管理',
                path: 'users'
            },
            {
                id: 102,
                title: '权限管理',
                children: [
                    {
                        id: 10201,
                        title: '角色列表',
                        path: 'roles'
                    },
                    {
                        id: 10202,
                        title: '权限列表',
                        path: 'rights'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'ElementUI',
        children: [
            {
                id: 201,
                title: 'Form',
                children: [
                    {
                        id: 20101,
                        title: 'Radio 多选框',
                        path: 'el-radio'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Echarts',
        path: 'echarts'
    }
]

export {menulist}