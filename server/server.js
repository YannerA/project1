var express = require('express');
var formidable = require('formidable');
var jwt = require('jsonwebtoken');
var fs = require('fs');
var app = express();
var miyao = 'iloveyou'

// 登录
app.post('/login', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var phone = fields.phone;
		var pwd = fields.pwd;
		// 去json文件里面验证是不是有这个用户 && 密码 手机号  正确
		fs.readFile('./data.json', (err, data) => {
			var arr = JSON.parse(data.toString()).users
			// some 一直再找符合条件的值 一旦找到就不会继续找了
			// every 有一个不符合条件 就不会及继续找了
			var boolean = arr.some(item => {
				return item.phone === phone && item.pwd === pwd
			});
			//  判断用户名 && 密码是不是正确的 
			if (boolean) {
				// 签发一个token 和 msg信息
				let token = jwt.sign({ phone, pwd }, miyao, { expiresIn: 6000000 })
				res.json({ msg: 'ok', token })
			} else {
				// msg - error
				res.json({ msg: 'error' })
			}

		})

	})
});
app.post('/is_login', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		let token = fields.token;
		// console.log("token", token)
		// jwt.verify 解密 token
		jwt.verify(token, miyao, (error, decode) => {
			if (error) {
				// console.log(error)
				res.json({ msg: 'error' });
				return;
			}
			// 根据电话号码 读取用户信息
			let phone = decode.phone;
			console.log(phone)
			fs.readFile('./data.json', (err, data) => {
				var arr = JSON.parse(data.toString()).users
				var userinfo = arr.filter(item => item.phone === phone).map(_item => _item.userinfo)[0]
				// console.log(userinfo, "userinfo")
				res.json({ msg: "ok", userinfo })
			})
			// console.log('decode',decode)
		})
	})
});
app.post('/zhuce', (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		var phone = fields.phone;
		var pwd = fields.pwd;
		var id = fields.id;
		// console.log(phone, pwd, id)
		fs.readFile('./data.json', (err, data) => {
			var { users } = JSON.parse(data.toString())
			// console.log(users)
			var obj = {
				"phone": phone,
				"pwd": pwd,
				"userinfo": {
					"username": id
				}
			}
			console.log(obj)
			var boolean = users.some(item => {
				return item.phone === phone && item.pwd === pwd
			});
			console.log(boolean)
			if (!boolean) {
				users.push(obj)
				fs.writeFile("./data.json", JSON.stringify({ "users": users }), (err) => {
					// console.log({ "users": users })
					res.json({ "users": users })
				})
			} else {
				res.json("undefined")
			}

		})
	})
})

app.listen(3000, () => {
	console.log(3000);
})