require('shelljs/global');
var fs = require('fs');
var path = require('path');

var blogPath = path.join('../', 'blog');
var dataPath = path.join('../', 'src/data');
var tempPath = path.join(dataPath, 'temp');
var jsonPath = path.join(dataPath, 'articles.json');

rm('-rf', dataPath);
mkdir('-p', dataPath);

var fsOperate = {
	init: function (blogPath){
		var me = this;
		fs.readdir(blogPath, function (err, dirs){
			if (err) {
				console.log(err);
			}
			dirs.forEach(function (dir){
				// console.log(dir);
				me.generateDir(path.join(dataPath, dir));
				me.getArticles(dir);
			});
		});
	},
	generateDir: function (dirPath){
		fs.mkdir(dirPath, function (err){
			if (err) {
				console.log(err);
			}
		});
	},
	getArticles: function (dir){
		var me = this;
		fs.readdir(path.join(blogPath, dir), function (err, files){
			if (err) {
				console.log(err);
			}
			files.forEach(function (file){
				me.getArticle(file, dir);
			});
		});
	},
	getArticle: function (file, dir){
		var fileName = file.slice(0, -3);
		// 以只读的方式打开文件
		var options = {
			encoding: 'utf-8'
		}
		fs.readFile(path.join(blogPath, dir, file), options, function (err, data){
			if (err) {
				console.log(err);
			}
			var str = data.match(/\#\s+([\u4E00-\u9FA5_a-zA-Z0-9]+)\s/);
			var msg = '{title%%' + str[1] + '%%fileName%%' + fileName + '%%date%%' + dir;
			str = data.match(/\*\*简述\*\*\：([\u4E00-\u9FA5_a-zA-Z0-9]+)\s/);
			msg += '%%sumary%%' + (str ? str[1] : '暂无') + '}';
			fs.appendFile(tempPath, msg, function (err){
				if (err) {
					console.log(err);
				}
			});
			// console.log(data);
		});
		// fs.open(path.join(filePath ,file), 'r', function (err, fd) {
		// 	if (err) {
		// 		console.log(err);
		// 	}
		// 	console.log(234);
		// 	console.log(fd);
		// });
	}
}

fsOperate.init(blogPath);

