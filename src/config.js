const config = {
  //网页元数据
  metaData:{
    title: '一隅🎉',
    description: '寻芳不觉醉流霞，倚树沉眠日已斜',
    keywords: '桑榆,sangyu,一隅',
    icon: 'favicon.png'   //网页图标，支持外链
  },

  avatar: "https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/portrait.jpg", // 头像
  welcometitle: "Hi, I'm sangyu", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['乐观开朗','编程爱好者','清澈愚蠢','才思敏捷','风趣幽默','摆烂的大学牲'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"", 
        "preview":"https://i.postimg.cc/13fDSjJS/image.jpg",
        "url":"https://i.postimg.cc/13fDSjJS/image.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"https://i.postimg.cc/hjd3rbYM/image.png",
        "url":"https://i.postimg.cc/hjd3rbYM/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
  },

  //社交按钮
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://github.com/sangyu520"},
    {icon:"mdi-email",link:"mailto:2035027466@qq.com"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://wx.qq.com/"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-facebook",link:"https://www.facebook.com"}
  ],

  //打字机
  typeWriterStrings: [
    "“失之东隅，收之桑榆”回头看，轻舟已过万重山；向前看，前路漫漫亦灿灿",
    "我是一个经常笑的人，可我不是一个经常开心的人",
    "人生到处知何似，应似飞鸿踏雪泥",
    "休言完事转头空，未转头时是梦",
    "墙里秋千墙外道，墙外行人墙里佳人笑，笑渐不闻声渐悄，多情总被无情恼"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"海洋女孩","preview":"/img/wallpaper/static/海洋女孩/image-pre.webp","url":"/img/wallpaper/static/海洋女孩/image.png"},
      {"title":"下雪啦","preview":"https://i.postimg.cc/XqP1Wb8g/2025-04-08-142509.png","url":"https://i.postimg.cc/XqP1Wb8g/2025-04-08-142509.png"},
      {"title":"凌乱的一天","preview":"https://i.postimg.cc/mkKjqSLX/4-K.jpg","url":"https://i.postimg.cc/mkKjqSLX/4-K.jpg"},
      {"title":"书房夜晚","preview":"/img/wallpaper/static/书房夜晚/image-pre.webp","url":"/img/wallpaper/static/书房夜晚/image.png"},
      {"title":"安逸舒适","preview":"/img/wallpaper/static/安逸舒适/image-pre.webp","url":"/img/wallpaper/static/安逸舒适/image.png"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
      {"title":"fVEEjEOA","preview":"https://file.uhsea.com/2503/ed0a4c0a43118ac4e2f39bab75ec19f4PI.png","url":"https://file.uhsea.com/2503/4adbf54af317a075c6b98483a552641f61.png"},
      {"title":"jgnIKMpd","preview":"https://file.uhsea.com/2503/5d4d35ed1c286afc930184231456edc9BR.png","url":"https://file.uhsea.com/2503/3bf8025d8ad7ccefcf7e72c9368a245cLL.png"},
      {"title":"mgqyySeh","preview":"https://file.uhsea.com/2503/38994dc4ef8659067537a3ea11af0927KB.png","url":"https://file.uhsea.com/2503/6e3b14778e879234826b9d5c793474ffOS.png"},
      {"title":"dSXZfZp","preview":"https://file.uhsea.com/2503/22c27ea8c1e44209a223a28026146115LS.png","url":"https://file.uhsea.com/2503/8d1203a01e7a5a639caf91ca6c9608acVL.png"},
      {"title":"","preview":"https://i.postimg.cc/nLYDfGkR/SY.png","url":"https://i.postimg.cc/nLYDfGkR/SY.png"},
      {"title":"怎么还没过年","preview":"https://i.postimg.cc/tgrMkWxf/image.jpg","url":"https://i.postimg.cc/tgrMkWxf/image.jpg"},
      {"title":"静谧","preview":"https://i.postimg.cc/JtVrh97b/image.jpg","url":"https://i.postimg.cc/JtVrh97b/image.jpg"},
      {"title":"SpongeBob","preview":"https://i.postimg.cc/vm7FZ3Zq/spongebob.jpg","url":"https://i.postimg.cc/vm7FZ3Zq/spongebob.jpg"},
      {"title":"太阳，又落山了","preview":"https://i.postimg.cc/fTJmSXzy/image.jpg","url":"https://i.postimg.cc/fTJmSXzy/image.jpg"},
      {"title":"自由","preview":"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/background1.webp","url":"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/background1.webp"},
      {"title":"看书","preview":"https://i.postimg.cc/13fDSjJS/image.jpg","url":"https://i.postimg.cc/13fDSjJS/image.jpg"},
      {"title":"怜悯","preview":"https://i.postimg.cc/zB1hnX5D/image.jpg","url":"https://i.postimg.cc/zB1hnX5D/image.jpg"},
      
      
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      {"title":"DfNHPPcc","preview":"https://i.postimg.cc/wjkw0LNz/image.jpg","url":"https://i.postimg.cc/wjkw0LNz/image.jpg"},
      {"title":"WIOlrGSy","preview":"https://i.postimg.cc/15kB9MGs/Chris.jpg","url":"https://i.postimg.cc/15kB9MGs/Chris.jpg"},
      {"title":"cZZwzhis","preview":"https://i.postimg.cc/0QVZPsfB/image.jpg","url":"https://i.postimg.cc/0QVZPsfB/image.jpg"},
      {"title":"aANKZHPX","preview":"https://i.postimg.cc/RVprXrxG/image.jpg","url":"https://i.postimg.cc/RVprXrxG/image.jpg"},
      {"title":"girl","preview":"https://i.postimg.cc/Vk7smK3Z/image.jpg","url":"https://i.postimg.cc/Vk7smK3Z/image.jpg"},
      {"title":"girl2","preview":"https://i.postimg.cc/CLzmc5wZ/2.jpg","url":"https://i.postimg.cc/CLzmc5wZ/2.jpg"},  
      {"title":"yl","preview":"https://i.postimg.cc/VvBFT4V5/Chris.jpg","url":"https://i.postimg.cc/VvBFT4V5/Chris.jpg"},  
    ],
    video:[
      {
        "title":"尼尔：机械纪元 团队",
        "preview":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
        "url":"/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
      },
      {
        "title":"向往航天的女孩",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
      },
      {
        "title":"松赖响起",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/woods.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/woods.webm"
      },
      {
        "title":"学习",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/freecompress-output.mp4",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/freecompress-output.mp4"
      },
      {
        "title":"听雨",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/Cozy Bedroom Rain On Window.mp4",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/Cozy Bedroom Rain On Window.mp4"
      },
      {
        "title":"雪",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/雪.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/雪.webm"
      },
      {
        "title":"Solar_System",
        "preview":"/img/wallpaper/dynamic/向往航天的女孩/solar-system.webm",
        "url":"/img/wallpaper/dynamic/向往航天的女孩/solar-system.webm"
      },
      
    ],
    videoMobile:[
      {
        "title":"幻觉镇-gaako_illust",
        "preview":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
      },
      {
        "title":"chuva",
        "preview":"/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
      },
      {
        "title":"Doodle-小猫女仆降临",
        "preview":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 戳我",img:"https://i.postimg.cc/mkSM8xVx/image.jpg",title:"桑榆主页",subtitle:"1,000 miles of wonder", text:"这是blog主站，主要是关于生活的",url:"https://www.sangyufeiwan.com/",show:false},
    {go:"🗂️ 点一下嘞",img:"https://i.postimg.cc/XvtXmdjp/image.jpg",title:"学习笔记",subtitle:"2,000 miles of wonder", text:"这是blog分站，主要是记一些学习笔记的",url:"https://co.sangyufeiwan.com/",show:false},
    {go:"📝 click",img:"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/%E3%80%90%E5%93%B2%E9%A3%8E%E5%A3%81%E7%BA%B8%E3%80%91%E4%B9%A6%E6%88%BF-%E5%A4%9C%E6%99%9A.png",title:"实验项目",subtitle:"3,000 miles of wonder", text:"一些实验项目，可以加",url:"https://deploy.sangyufeiwan.com/",show:false},
    {go:"👍 前往",img:"https://i.postimg.cc/s2vwXYv0/image.jpg",title:"我也不知道干什么",subtitle:"4,000 miles of wonder", text:"暂时就是个极其简略的个人介绍",url:"https://unkown.sangyufeiwan.com/",show:false},
    {go:"🗃 前往",img:"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/%E3%80%90%E5%93%B2%E9%A3%8E%E5%A3%81%E7%BA%B8%E3%80%91%E5%B0%8F%E9%BB%84%E8%8A%B1-%E7%8C%AB.png",title:"前面的路以后再来探索吧",subtitle:"5,000 miles of wonder", text:"还在开发中，别催我",url:"https://unkown.sangyufeiwan.com/404",show:false},
    {go:"🎨 前往",img:"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/%E7%8B%97%E7%8B%97.png",title:"前面的路以后再来探索吧",subtitle:"6,000 miles of wonder", text:"还在开发中，别催我",url:"https://www.sangyufeiwan.com/404.html",show:false},
    {go:"💍 前往",img:"https://cdn.jsdelivr.net/gh/sangyu520/picgo/img/%E3%80%90%E5%93%B2%E9%A3%8E%E5%A3%81%E7%BA%B8%E3%80%91%E5%8F%A3%E8%A2%8B%E5%A6%96%E6%80%AA-%E5%9C%BA%E6%99%AF-%E6%B8%A9%E6%B3%89.png",title:"前面的路以后再来探索吧",subtitle:"7,000 miles of wonder", text:"还在开发中，别催我",url:"https://www.sangyufeiwan.com/404.html",show:false},
    {go:"🔍 前往",img:"https://i.postimg.cc/BQpgBYFV/image.jpg",title:"前面的路以后再来探索吧",subtitle:"8,000 miles of wonder", text:"还在开发中，别催我",url:"https://i.postimg.cc/BQpgBYFV/image.jpg",show:false},
  ],
}

export default config
