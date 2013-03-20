先从 DISQUS 网站上导出 XML 文件（Admin -> Tools -> Export），然后用我这个 js 把 XML 转成「多说」支持的 JSON 格式，这样你就可以导入了（站点管理 -> 工具 -> 导入数据）。

## Usage

```bash
$ git clone git://github.com/jsw0528/disqus2duoshuo.js.git

$ node disqus2duoshuo.js XML [JSON]
```

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
