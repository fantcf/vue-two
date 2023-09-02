const menuTitlt = {
    test: 'test',
    ElementUI: 'ElementUI',
    Echarts: 'Echarts',
    Vue: 'Vue'
}

const menuId = {
    [menuTitlt.test]: 1,
    [menuTitlt.ElementUI]: 2,
    [menuTitlt.Echarts]: 3,
    [menuTitlt.Vue]: 4
}

const createMenuItemId = function(mainId, subId) {
    const id = mainId + subId.toString()
    return Number(id)
}

const menulist = [
    {
        id: 0,
        title: '首页',
        path: 'homePage'
    },
    {
        id: menuId[menuTitlt.test],
        title: menuTitlt.test,
        children: [
            {
                id: createMenuItemId(menuId[menuTitlt.test], '01'),
                title: '用户管理',
                path: 'test/users'
            },
            {
                id: createMenuItemId(menuId[menuTitlt.test], '02'),
                title: '权限管理',
                children: [
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0201'),
                        title: '角色列表',
                        path: 'test/roles'
                    },
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0202'),
                        title: '权限列表',
                        path: 'test/rights'
                    }
                ]
            },
            {
                id: createMenuItemId(menuId[menuTitlt.test], '03'),
                title: '商品管理',
                children: [
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0301'),
                        title: '商品分类',
                        path: 'test/categories'
                    },
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0302'),
                        title: '商品列表',
                        path: 'test/goods',
                    },
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0303'),
                        title: '商品参数',
                        path: 'test/params'
                    }
                ]
            },
            {
                id: createMenuItemId(menuId[menuTitlt.test], '04'),
                title: '订单管理',
                path: 'test/orders'
            }
        ]
    },
    {
        id: menuId[menuTitlt.ElementUI],
        title: menuTitlt.ElementUI,
        children: [
            {
                id: createMenuItemId(menuId[menuTitlt.test], '01'),
                title: 'Form',
                children: [
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0101'),
                        title: 'Radio 多选框',
                        path: 'el-radio'
                    }
                ]
            }
        ]
    },
    {
        id: menuId[menuTitlt.Echarts],
        title: menuTitlt.Echarts,
        path: 'echarts'
    },
    {
        id: menuId[menuTitlt.Vue],
        title: menuTitlt.Vue,
        children: [
            {
                id: createMenuItemId(menuId[menuTitlt.test], '01'),
                title: 'Vuex',
                children: [
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0101'),
                        title: 'VuexA',
                        path: 'vuexA'
                    },
                    {
                        id: createMenuItemId(menuId[menuTitlt.test], '0102'),
                        title: 'VuexB',
                        path: 'vuexB'
                    }
                ]
            }
        ]
    }
]

export {menulist}