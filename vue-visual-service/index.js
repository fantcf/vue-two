const express = require('express');
let articleData = require('./expressData/baseData').articleData;

const app = express();

// 设置端口号
const PORT = 3000;

// 获取articleItem；
app.get('/baseExpress/code/query', (req, res) => {
    res.send(articleData)
})

// 创建articleItem；
app.post('/baseExpress/code/create', (req, res) => {
    let item;
    if (req.query && Object.keys(req.query).length > 0) {
        item = req.query;
    } else {
        item = {
            title: '接口名',
            description: '基本描述',
            subTitle: '',
            code: '',
        };
    }
    item.id = articleData.length;
    articleData.push(item);
    res.send(true)
})

// 删除articleItem；
app.delete('/baseExpress/code/delete', (req, res) => {
    const id = req.query.id;
    let index = 0;
    articleData.splice(id, 1);
    articleData = articleData.map(item => {
        item.id = index++;
        return item;
    });
    res.send(true)
})

app.post('/baseExpress/code/update', (req, res) => {
    const id = req.query.id;
    articleData[id] = req.query;
    res.send(true)
     
})


// 启动服务并监听端口
app.listen(PORT, () => {
  console.log(`服务正在运行，访问：http://192.168.2.104:${PORT}`);
});
