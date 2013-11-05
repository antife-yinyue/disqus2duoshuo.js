## 详细步骤

### 1、将评论从 DISQUS 导到本地

首先登录 DISQUS <https://disqus.com/admin/login/>，然后按照步骤操作：

![](http://ww2.sinaimg.cn/large/624f9842gw1eaa21l3ryfj20qp0bidgp.jpg)

收到邮件后，解压出 XML 文件

### 2、安装 NodeJS

```sh
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
nvm install v0.10
```

### 3、安装 disqus2duoshuo.js

```sh
git clone https://github.com/jsw0528/disqus2duoshuo.js.git
cd disqus2duoshuo.js
npm install
```

### 4、XML to JSON

```sh
node disqus2duoshuo.js xxxx.xml
```

转换成功后，你会在 `disqus2duoshuo.js/` 目录内看到一个 JSON 文件

### 5、导入到多说网

登录多说开发者中心 <http://dev.duoshuo.com/>，按照步骤操作：

![](http://ww1.sinaimg.cn/large/624f9842gw1eaa25fhx7cj20i30bnt9n.jpg)

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
