var fs = require('fs')
var path = require('path')
var parser = require('xml2json')
var moment = require('moment')

if (!process.argv[2]) {
  console.log('请指定XML文件路径')
  return false
}

// 获取 XML 文件的全路径
var xmlPath = path.resolve(process.cwd(), process.argv[2])

// 读取 XML
fs.readFile(xmlPath, function(err, xmlData) {
  if (err) {
    throw err
  }

  // XML to JSON
  var jsonData = parser.toJson(xmlData, { sanitize: false, coerce: false })
  // JSON 文件的路径，默认与 XML 同名
  var jsonPath = process.argv[3] ?
    path.resolve(process.cwd(), process.argv[3]) :
      path.join(path.dirname(xmlPath), path.basename(xmlPath, '.xml') + '.json')

  // 处理数据
  var disqus = JSON.parse(jsonData).disqus
  var duoshuo = {
    threads: [],
    posts: []
  }

  disqus.thread.forEach(function(data) {
    duoshuo.threads.push({
      thread_key: data['dsq:id'],
      title: data.title,
      url: data.link
    })
  })

  disqus.post.forEach(function(data) {
    if (data.isDeleted === 'false' && data.isSpam === 'false') {
      duoshuo.posts.push({
        post_key: data['dsq:id'],
        thread_key: data.thread['dsq:id'],
        message: data.message,
        parent_key: data.parent ? data.parent['dsq:id'] : undefined,
        author_name: data.author.name,
        author_email: data.author.email,
        ip: data.ipAddress,
        created_at: moment(data.createdAt).format('YYYY-MM-DD HH:mm:ss')
      })
    }
  })

  // 保存文件
  fs.writeFile(jsonPath, JSON.stringify(duoshuo), function(err) {
    if (err) {
      throw err
    }
    console.log('转换完成\n' + jsonPath)
  })
})
