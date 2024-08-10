export class MenuList {
  expandMenuList = [];
  list = [];
  constructor(baseMenu, expandMenuList) {
    this.list = JSON.parse(JSON.stringify(baseMenu));
    this.expandMenuList = this.constructMenuData(expandMenuList);
  }

  constructMenuData(list) {
    for (const item of list) {
      const newItem = JSON.parse(JSON.stringify(item));
      newItem.children = [];
      if (!newItem.fatherKey) {
        newItem.id = this.list.length;
        this.list.push(newItem);
      } else {
        const fatherItem = this.getFatherItem(item.fatherKey, this.list);
        newItem.id = this.getSonId(
          fatherItem.id,
          fatherItem.children.length + 1,
        );
        fatherItem.children.push(newItem);
      }
      if (item.children && item.children.length > 0) {
        this.constructMenuData(item.children);
      }
    }
  }

  getFatherItem(fatherKey, list) {
    for (const item of list) {
      if (item.key === fatherKey) {
        return item;
      } else if (item.children && item.children.length > 0) {
        const res = this.getFatherItem(fatherKey, item.children); // 这里尤其要注意，如果递归有返回值，则内部递归的时候，也要有返回值
        if (res) {
          return res;
        }
      }
    }
  }

  getSonId(fId, len) {
    const subId = len > 9 ? len : '0' + len;
    return Number(fId + subId);
  }
}
