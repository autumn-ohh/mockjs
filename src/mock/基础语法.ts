import Mock from 'mockjs'

// const data = Mock.mock({
//   'string|1-4': "哎呦!"
// })

// 生成文本
// const data = Mock.mock({
//   string: '@cword(3, 10)'
// })

// 生成标题和内容
// const data = Mock.mock({
//   title: '@ctitle(3, 10)',
//   sentence: '@csentence(10, 20)'
// })

// 生成段落
// const data = Mock.mock({
//   content: '@cparagraph(5)',
// })

// 生成数字
// const data = Mock.mock({
//   'number|1-100': 10,
// })

// 生成增量id
// const data = Mock.mock({
//   id: "@increment(1)"
// })

// 生成姓名-地址-身份证号
// const data = Mock.mock({
//   name: '@cname()',
//   idCard: '@id()',
//   address: '@city(true)',
// })

// 生成图片 [图片大小, 图片背景色, 图片前景色, 图片格式, 图片文字 ]
// const data = Mock.mock({
//   img_url: "@image('25×25', '#FFA07A', '#FFBBFF', 'png', '坤坤')"
// })

// 生成时间
// const data = Mock.mock({
//   date: '@date(yyyy-MM-dd HH:mm:ss)'
// })


// 生成数组
// const data = Mock.mock({
//   "list|8-20": [
//     {
//       id: '@increment(1)',
//       name: '@cname()',
//       idCard: '@id()',
//       address: '@city(true)',
//     }
//   ]
// })


// console.log(data)

// 定义 get 请求
Mock.mock('/api/news', 'get', {
  status: 200,
  msg: '获取数据成功'
})

// 定义 post 请求
Mock.mock('/api/post/news', 'post', {
  status: 200,
  msg: 'post获取数据成功'
})
