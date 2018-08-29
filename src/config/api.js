export default {
  defaultHost: {  //接口前缀
    'debug': 'http://10.10.32.174:9000',
    'test': '//10.10.32.174:9000',
    'prod': '//10.10.32.174:9000'
  },
  apis: {
    // 测试接口环境
    'getNews': {   //新闻接口
      'host': {  //配置不同端口
        'test': 'http://10.10.32.174:9010',
        'prod': '//10.10.32.174:9010'
      },
      'serve': 'news.json',  //mock 数据
      'path': ''  //后台给的接口地址
    },
    'getMap':{  //地图接口
      'serve': 'map.json',  //mock 数据
      'path': ''  //后台给的接口地址
    }
  }
}
