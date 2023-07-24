export const steps = [
  {
    title: 'welcome',
    intro: 'hello world! 👋'
  },
  {
    title: 'overwrite style',
    intro: '只能全局替换样式'
  },
  {
    title: '第二步',
    element: document.querySelector('#step-img-1'),
    intro: '图片区域，如果图片是动态的，那么高亮区域也会受到影响'
  },
  {
    title: '第三步',
    element: document.querySelector('#step-p-1'),
    intro: '文字区域，配置和页面必须绑定，否则会出现无法高亮的情况，这是配置文件的本身的局限性'
  }
]
