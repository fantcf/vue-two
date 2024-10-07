const mysql = require('mysql');
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01',
})

// 测试mysql 模块是否有问题
db.query('select 1', (err, res) => {
    if (err) return console.log(err.message);
    // console.log(res);
})

// 查询users表中，所有的数据
const queryAllFromUsers = 'select * from users';
db.query(queryAllFromUsers, (err, res) => {
    if (err) return console.log(err.message);
    // console.log(res);
})

// 在users表中，插入一条新的数据
const user = {username: 'peter1', password: 123};
const insertIntoUsers = 'insert into users (username, password) values (?, ?)'
const insertIntoUsers2 = 'insert into users set ?'
// db.query(insertIntoUsers, [user.username, user.password], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })

// 在users表中，精简插入一条新的数据的方式
// db.query(insertIntoUsers2, user, (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('插入数据成功');
//     }
// })

// 更新表中的数据
const updateUser = {id: 2, username: 'bbb', password: 111222};
// const updateUsers = 'update users set username=?, password=? where id=?';
// db.query(updateUsers, [updateUser.username, updateUser.password, updateUser.id], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('更新数据成功！')
//     }
// })

const updateUsers = 'update users set ? where id=?';
// db.query(updateUsers, [updateUser, updateUser.id], (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('更新数据成功2！')
//     }
// })


// 删除表里的数据
// db.query('delete from users where id=?', 5, (err, res) => {
//     if (err) return console.log(err.message);
//     if (res.affectedRows === 1) {
//         console.log('删除数据成功！');
//     }
// })

db.query('update users set status = 1 where id = ?', 1, (err, res) => {
    if (err) return console.log(err.message);
    if (res.affectedRows === 1) {
        console.log('删除数据成功！');
    }
})