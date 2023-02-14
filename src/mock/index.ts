import Mock from "mockjs";

const { newsList } = Mock.mock({
  "newsList|51": [
    {
      id: "@increment(1)",
      title: "@ctitle()",
      content: "@cparagraph(3,5)",
      img_url: "@image('20×10', '#ff0101', '#333', 'png', '暂无数据')",
      add_time: "@date(yyyy-MM-dd HH:mm:ss)"
    }
  ]
})

interface Options {
  url: string,
  type: string,
  body: string | null
}

// 根据url获取query参数
const getQuery = (url: string, name: string) => {
  const index = url.indexOf('?')
  if(index !== -1) {
    const queryStr = url.substring(index + 1)
    const queryArr = queryStr.split('&')
    for(let i = 0; i < queryArr.length; i++) {
      const itemArr = queryArr[i].split('=')
      if(itemArr[0] === name){
        return itemArr[1]
      }
    }
  }
  return null
}

// 获取新闻列表
Mock.mock(/\/api\/get\/news/, "get", (options: Options) => {
  // 获取传递的参数pageNum
  const pageNum = Number(getQuery(options.url, 'pageNum'))
  // 获取传递的参数pageSize
  const pageSize = Number(getQuery(options.url, 'pageSize'))

  const start = (pageNum - 1) * pageSize
  const end = pageNum * pageSize

  // 总页数
  const totalPage = Math.ceil(newsList.length / pageSize)

  const list = pageNum > totalPage ? [] : newsList.slice(start, end)
  return {
    status: "200",
    msg: "获取列表成功",
    list: list,
    total: newsList.length,
    totalPage: totalPage
  }
})

// 添加新闻列表的数据
Mock.mock('/api/add/news', 'post', (options: Options) => {
  const body = JSON.parse(options.body!)
  newsList.push(Mock.mock({
    id: "@increment(1)",
    title: body.title,
    content: body.content,
    img_url: "@image('20×10', '#ff0101', '#333', 'png', '暂无数据')",
    add_time: "@date(yyyy-MM-dd HH:mm:ss)"
  }))
  return {
    status: "200",
    msg: "添加成功",
    list: newsList,
    total: newsList.length,
  }
})

// 删除新闻
Mock.mock('/api/delete/news', 'post', (options: Options) => {
  const body = JSON.parse(options.body!)
  const index = newsList.findIndex( (item: any) => item.id === body.id)
  newsList.splice(index, 1)
  return {
    status: "200",
    msg: "添加成功",
    list: newsList,
    total: newsList.length,
  }
})
