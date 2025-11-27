export const pis: {
  name: string;
  id: string;
  img: string;
  img_full: string;
  title: string;
  bio: string;
  links: { icon: string; link: string }[];
}[] = [
    {
    name: 'Hongyang Li',
    id: 'hongyang_li',
    img: 'https://mmlabassets.github.io/member/hongyang_li_c.jpg',
    img_full: 'https://ik.imagekit.io/mmlab/hongyang_li.jpg',
    title: 'Assistant Professor',
    bio: "Hongyang Li is an Assistant Professor at Musketeers Foundation Institute of Data Science, University of Hong Kong and has led OpenDriveLab (<a href='https://opendrivelab.com/' target='_blank'>opendrivelab.com</a>) since 2021. His research focus is on autonomous driving and embodied AI. He led the end-to-end autonomous driving project, UniAD and won the IEEE CVPR 2023 Best Paper Award. UniAD has a tremendous impact both in academia and industry, including the recent rollout to customers by Tesla in FSD V12. He created the first large-scale real robot ecosystem, AgiBot World, that systematically investigated the scaling law principles for robotic manipulation. He proposed the bird's-eye-view perception work, BEVFormer, that won Top 100 AI Papers in 2022. He served as Area Chair for CVPR, NeurIPS (including 2023 Notable AC), ICLR, ICCV, ICML, RSS, referee for Nature Communications, Guest Editor at Automotive Innovations. He is the Working Group Chair for IEEE Standards P3474 under Vehicular Technology Society. He is the Senior Member of IEEE, CCF and CSIG. He is the recipient of China AI Wu Wen Jun Early Career Award 2024.",

    links: [
      {
        icon: 'webpage',
        link: 'https://lihongyang.info/',
      },
      {
        icon: 'OpenDriveLab',
        link: 'https://opendrivelab.com/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=Hfrih1EAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:hongyang@hku.hk',
      },
    ],
  },
  {
    name: 'Ping Luo',
    id: 'ping_luo',
    img: 'https://mmlabassets.github.io/member/ping_luo_c.jpg',
    img_full: 'https://ik.imagekit.io/mmlab/ping_luo.jpg',
    title: 'Associate Professor',
    bio: "Ping Luo is an Associate Professor in the Department of Computer Science at the University of Hong Kong, an Associate Director of the HKU Musketeers Foundation Institute of Data Science (HKU IDS), and a Deputy Director of the Joint Research Lab of HKU and Shanghai AI Lab. He obtained his Ph.D. in Information Engineering from the Chinese University of Hong Kong in 2014, under the supervision of <a href='https://www.ie.cuhk.edu.hk/people/xotang.shtml' target='_blank'>Prof. Xiaoou Tang</a> (founder of <a href='https://en.wikipedia.org/wiki/SenseTime' target='_blank'>SenseTime</a>) and <a href='http://www.ee.cuhk.edu.hk/~xgwang/' target='_blank'>Prof. Xiaogang Wang</a>. Before joining HKU in 2019, he was a Research Director in SenseTime. He has published 100+ papers in international conferences and journals such as TPAMI, ICML, ICLR, NeurIPS, and CVPR, with over 75,000 citations on <a href='https://scholar.google.com/citations?user=aXdjxb4AAAAJ' target='_blank'>Google Scholar</a>. He was awarded the 2015 AAAI Easily Accessible Paper, nominated for the 2022 Computational Visual Media Journal's Best Paper of the Year, won the 2022 ACL Outstanding Paper, the 2023 World Artificial Intelligence Conference (WAIC) Outstanding Papers, and was a candidate for the Best Paper at ICCV'23. He was recognized as one of the innovators under 35 in the Asia-Pacific region by the MIT Technology Review (MIT TR35) in 2020. He has mentored 30 Ph.D. students, many of whom have received significant awards such as the Nvidia Fellowship, Baidu Fellowship, WAIC Yunfan Award, etc.",
    links: [
      {
        icon: 'webpage',
        link: 'http://luoping.me/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=aXdjxb4AAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:pluo.lhi@gmail.com',
      },
    ],
  },
  {
    name: 'Yi Ma',
    id: 'xihui_liu',
    img: 'https://mmlabassets.github.io/member/mayi_c.png',
    img_full: 'https://mmlabassets.github.io/member/mayi_f.png', 
    title: 'Professor, Chair of Artificial Intelligence',
    bio: "Yi Ma is a Chair Professor in the Musketeers Foundation Institute of Data Science (HKU IDS) and Department of Computer Science at the University of Hong Kong. He took up the Directorship of HKU IDS on January 12, 2023. He is also a Professor at the Department of Electrical Engineering and Computer Sciences at the University of California, Berkeley. He received his Bachelor’s degrees in Automation and Applied Mathematics from Tsinghua University in 1995, two Masters degrees in EECS and Mathematics in 1997, and a PhD degree in EECS from UC Berkeley in 2000. He has been on the faculty of UIUC ECE from 2000 to 2011, the principal researcher and manager of the Visual Computing group of Microsoft Research Asia from 2009 to 2014, and the Executive Dean of the School of Information Science and Technology of ShanghaiTech University from 2014 to 2017. He then joined the faculty of UC Berkeley EECS in 2018. He has published about 60 journal papers, 120 conference papers, and three textbooks in computer vision, generalized principal component analysis, and high-dimensional data analysis. He received the NSF Career award in 2004 and the ONR Young Investigator award in 2005. He also received the David Marr prize in computer vision from ICCV 1999 and best paper awards from ECCV 2004 and ACCV 2009. He has served as the Program Chair for ICCV 2013 and the General Chair for ICCV 2015. He is a Fellow of IEEE, ACM, and SIAM.",
    links: [
      {
        icon: 'webpage',
        link: 'https://people.eecs.berkeley.edu/~yima/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com.hk/citations?user=XqLiBQMAAAAJ&hl=en',
      },
      {
        icon: 'twitter',
        link: 'https://x.com/YiMaTweets',
      },
      {
        icon: 'email',
        link: 'mailto:mayi@hku.hk',
      },
    ],
  },
];

export const members: {
  name: string;
  img: string;
  title: string;
  pi: string[];
  links: { icon: string; link: string }[];
  keys: string[];
}[] = [
  {
    name: 'Haotian Liang',
    img: 'https://mmlabassets.github.io/member/haotian_liang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2025'],
  },
  {
    name: 'Jianyu Zhang',
    img: 'https://mmlabassets.github.io/member/jianyu_zhang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Bo Dai'],
    links: [],
    keys: ['2025'],
  },
  {
    name: 'Junsong Chen',
    img: 'https://mmlabassets.github.io/member/junsong_chen_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://lawrence-cj.github.io/',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Kaixuan Wang',
    img: 'https://mmlabassets.github.io/member/kaixuan_wang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2025'],
  },
  {
    name: 'Lingxiao Du',
    img: 'https://mmlabassets.github.io/member/lingxiao_du_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2025'],
  },
  {
    name: 'Lirui Zhao',
    img: 'https://mmlabassets.github.io/member/lirui_zhao_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://liruizhao.com/',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Liuao Pei',
    img: 'https://mmlabassets.github.io/member/liuao_pei_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://liuaopei.com/',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Qingquan Lin',
    img: 'https://mmlabassets.github.io/member/qingquan_lin_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2025'],
  },
  {
    name: 'Tianxing Chen',
    img: 'https://mmlabassets.github.io/member/tianxing_chen_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://tianxingchen.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=pvS8MH8AAAAJ&hl=en&oi=ao',
      },
      {
        icon: 'github',
        link: 'https://github.com/tianxingchen',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Xingjian Ran',
    img: 'https://mmlabassets.github.io/member/xingjian_ran_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Bo Dai'],
    links: [
      {
        icon: 'email',
        link: 'mailto:xjran03@gmail.com',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Yixuan Pan',
    img: 'https://mmlabassets.github.io/member/yixuan_pan_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Hongyang Li'],
    links: [
      {
        icon: 'webpage',
        link: 'https://lzpyx.github.io/',
      },
      {
        icon: 'email',
        link: 'mailto:yixuanpan@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/lzpyx',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Zhuoheng Li',
    img: 'https://mmlabassets.github.io/member/zhuoheng_li_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Hongyang Li'],
    links: [
      {
        icon: 'email',
        link: 'mailto:zhuohengli@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/StarCycle/StarCycle',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/lizhuoheng/',
      },
    ],
    keys: ['2025'],
  },
  {
    name: 'Chengqi Duan',
    img: 'https://mmlabassets.github.io/member/chengqi_duan_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=r9qb4ZwAAAAJ&hl=zh-CN',
      },
      {
        icon: 'email',
        link: 'mailto:duancq24@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/gogoduan',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Jielin Li',
    img: 'https://mmlabassets.github.io/member/jielin_li_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=z2Tbc6MAAAAJ&hl=zh-CN',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Jiwen Yu',
    img: 'https://mmlabassets.github.io/member/jiwen_yu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://yujiwen.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com.hk/citations?user=uoRPLHIAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:yujiwen.hk@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/yujiwen',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Junli Ren',
    img: 'https://mmlabassets.github.io/member/junli_ren_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://renjunli99.github.io/',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Lu Qiu',
    img: 'https://mmlabassets.github.io/member/lu_qiu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?hl=en&user=66jKtREAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:qiulu0509@gmail.com',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Quanfeng Lu',
    img: 'https://mmlabassets.github.io/member/quanfeng_lu_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=NlBS3nMAAAAJ&hl',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/hflqf888/',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Tianshuo Yang',
    img: 'https://mmlabassets.github.io/member/tianshuo_yang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=9b5dE40AAAAJ&hl',
      },
      {
        icon: 'webpage',
        link: 'https://violinarthur.github.io/',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Tianwei Xiong',
    img: 'https://mmlabassets.github.io/member/tianwei_xiong_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://silentview.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=tTMKGSYAAAAJ&hl',
      },
      {
        icon: 'email',
        link: 'mailto:xiongtw20@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/SilentView',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Yatai Ji',
    img: 'https://mmlabassets.github.io/member/yatai_ji_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://yataiji.github.io/',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Yi Chen',
    img: 'https://mmlabassets.github.io/member/yi_chen_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=3ep5ODoAAAAJ&hl=zh-CN',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Yihang Qiu',
    img: 'https://mmlabassets.github.io/member/yihang_qiu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=qgRUOdIAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:qiuyihang@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/GihhArwtw',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Yuxuan Jiang',
    img: 'https://mmlabassets.github.io/member/yuxuan_jiang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=ZcwQMfkAAAAJ',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Zhiheng Liu',
    img: 'https://mmlabassets.github.io/member/zhiheng_liu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://johanan528.github.io/',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Zhiqian Lan',
    img: 'https://mmlabassets.github.io/member/zhiqian_lan_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=AkBBXcgAAAAJ',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Zhiyuan Chen',
    img: 'https://mmlabassets.github.io/member/zhiyuan_chen_c.jpg',
    title: 'Mphil',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'zyc.ai',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=CKiY8PIAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:this@zyc.ai',
      },
      {
        icon: 'github',
        link: 'https://github.com/ZhiyuanChen',
      },
    ],
    keys: ['2024'],
  },
  {
    name: 'Yukun Huang',
    img: 'https://mmlabassets.github.io/member/yukun_huang_c.jpg',
    title: 'Postdoc Fellow',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://yukun-huang.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=lHb5gzoAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:kunh6414@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/Yukun-Huang',
      },
    ],
    keys: ['2024', '2025', 'Alumni'],
  },
  {
    name: 'Mengzhao Chen',
    img: 'https://mmlabassets.github.io/member/mengzhao_chen_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://chenmnz.github.io/',
      },
    ],
    keys: ['2024', '2024'],
  },
  {
    name: 'Shuo Yang',
    img: 'https://mmlabassets.github.io/member/shuo_yang_c.jpg',
    title: 'Postdoc Fellow',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://faculty.hitsz.edu.cn/yangshuo',
      },
    ],
    keys: ['2024', '2024', 'Alumni'],
  },
  {
    name: 'Chengyue Wu',
    img: 'https://mmlabassets.github.io/member/chengyue_wu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://hills-code.github.io/',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Chenming Zhu',
    img: 'https://mmlabassets.github.io/member/chenming_zhu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://zcmax.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=QabwS_wAAAAJ&hl=zh-CN',
      },
      {
        icon: 'email',
        link: 'mailto:zcm952742165@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/ZCMax',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Chonghao Sima',
    img: 'https://mmlabassets.github.io/member/chonghao_sima_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=dgYJ6esAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:u3010296@connect.hku.hk',
      },
      {
        icon: 'github',
        link: 'https://github.com/ChonghaoSima',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/smch_1127',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Fanqing Meng',
    img: 'https://mmlabassets.github.io/member/fanqing_meng_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2023'],
  },
  {
    name: 'Jiahao Wang',
    img: 'https://mmlabassets.github.io/member/jiahao_wang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://www.zhihu.com/people/wang-jia-hao-53-3',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Jin Wang',
    img: 'https://mmlabassets.github.io/member/jin_wang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://jinjinw.com/',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Jintao Lin',
    img: 'https://mmlabassets.github.io/member/jintao_lin_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/dreamerlin',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Kaiyi Huang',
    img: 'https://mmlabassets.github.io/member/kaiyi_huang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=dB86D_cAAAAJ&hl=zh-CN&oi=sra',
      },
      {
        icon: 'email',
        link: 'mailto:huangky2022@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/Karine-Huang',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Kaiyue Sun',
    img: 'https://mmlabassets.github.io/member/kaiyue_sun_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/KaiyueSun98',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Li Chen',
    img: 'https://mmlabassets.github.io/member/li_chen_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=ulZxvY0AAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:ilnehc@connect.hku.hk',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Meng Wei',
    img: 'https://mmlabassets.github.io/member/meng_wei_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=Wx8ChLcAAAAJ&hl=en',
      },
      {
        icon: 'email',
        link: 'mailto:kellymeng0427@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/kellyiss',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Mengkang Hu',
    img: 'https://mmlabassets.github.io/member/mengkang_hu_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com.hk/citations?user=FhVRimUAAAAJ&hl=en&oi=ao',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Shilong Zhang',
    img: 'https://mmlabassets.github.io/member/shilong_zhang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://jshilong.github.io/',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Yao Teng',
    img: 'https://mmlabassets.github.io/member/yao_teng_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://tyshiwo1.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=eLIsViIAAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:tengyao19980325@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/tyshiwo1',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Yuheng Lei',
    img: 'https://mmlabassets.github.io/member/yuheng_lei_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://sites.google.com/view/yuhenglei',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Yunhan Yang',
    img: 'https://mmlabassets.github.io/member/yunhan_yang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'webpage',
        link: 'https://yhyang-myron.github.io/',
      },
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=1aRD_e8AAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:yhyang.myron@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/yhyang-myron',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Yuqing Wang',
    img: 'https://mmlabassets.github.io/member/yuqing_wang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Xihui Liu'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?hl=zh-CN&user=QC7nNe0AAAAJ',
      },
      {
        icon: 'email',
        link: 'mailto:yuqingwang1029@gmail.com',
      },
      {
        icon: 'github',
        link: 'https://github.com/yuqingwang1029',
      },
    ],
    keys: ['2023'],
  },
  {
    name: 'Haibao Yu',
    img: 'https://mmlabassets.github.io/member/haibao_yu_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'dblp',
        link: 'https://dblp.org/pid/246/4643.html',
      },
    ],
    keys: ['2022'],
  },
  {
    name: 'Yizhuo Li',
    img: 'https://mmlabassets.github.io/member/yizhuo_li_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://liyz15.github.io/',
      },
    ],
    keys: ['2022'],
  },
  {
    name: 'Yue Yang',
    img: 'https://mmlabassets.github.io/member/yue_yang_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2022'],
  },
  {
    name: 'Zeyue Xue',
    img: 'https://mmlabassets.github.io/member/zeyue_xue_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2022'],
  },
  {
    name: 'Zhixuan Liang',
    img: 'https://mmlabassets.github.io/member/zhixuan_liang_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://liang-zx.github.io/',
      },
    ],
    keys: ['2022'],
  },
  {
    name: 'Yutao Hu',
    img: 'https://mmlabassets.github.io/member/yutao_hu_c.jpeg',
    title: 'Postdoc Fellow',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com.hk/citations?user=4sXuGXAAAAAJ&hl=zh-CN',
      },
    ],
    keys: ['2022', '2023', 'Alumni'],
  },
  {
    name: 'Peng Xu',
    img: 'https://mmlabassets.github.io/member/peng_xu_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2021'],
  },
  {
    name: 'Runjian Chen',
    img: 'https://mmlabassets.github.io/member/runjian_chen_c.jpeg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://www.rjchen.site',
      },
    ],
    keys: ['2021'],
  },
  {
    name: 'Shoufa Chen',
    img: 'https://mmlabassets.github.io/member/shoufa_chen_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://www.shoufachen.com',
      },
    ],
    keys: ['2021'],
  },
  {
    name: 'Yao Lai',
    img: 'https://mmlabassets.github.io/member/yao_lai_c.jpg',
    title: 'Ph.D. Candidate',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://laiyao1.github.io/',
      },
    ],
    keys: ['2021'],
  },
  {
    name: 'Yangyang Xu',
    img: 'https://mmlabassets.github.io/member/yangyang_xu_c.jpeg',
    title: 'Postdoc Fellow',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://cnnlstm.github.io/',
      },
    ],
    keys: ['2021', '2023', 'Alumni'],
  },
  {
    name: 'Qiang Zhai',
    img: 'https://mmlabassets.github.io/member/qiang_zhai_c.jpeg',
    title: 'Visitor',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/zhaiqx',
      },
    ],
    keys: ['2021', '2022', 'Alumni'],
  },
  {
    name: 'Chaofan Tao',
    img: 'https://mmlabassets.github.io/member/chaofan_tao_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'http://chaofantao.top/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Chongjian Ge',
    img: 'https://mmlabassets.github.io/member/chongjian_ge_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://chongjiange.github.io/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Jiannan Wu',
    img: 'https://mmlabassets.github.io/member/jiannan_wu_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/wjn922',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Peize Sun',
    img: 'https://mmlabassets.github.io/member/peize_sun_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://peizesun.github.io/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Qiushan Guo',
    img: 'https://mmlabassets.github.io/member/qiushan_guo_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Sheng Jin',
    img: 'https://mmlabassets.github.io/member/sheng_jin_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://jin-s13.github.io/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Teng Wang',
    img: 'https://mmlabassets.github.io/member/teng_wang_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://ttengwang.github.io/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Tianqi Wang',
    img: 'https://mmlabassets.github.io/member/tianqi_wang_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'github',
        link: 'https://github.com/tianqi-wang1996',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Yuanfeng Ji',
    img: 'https://mmlabassets.github.io/member/yuanfeng_ji_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://jiyuanfeng.github.io/',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Zhanglin Peng',
    img: 'https://mmlabassets.github.io/member/zhanglin_peng_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=78fKbCkAAAAJ&hl=en',
      },
    ],
    keys: ['2020', '2024', 'Alumni'],
  },
  {
    name: 'Zhouxia Wang',
    img: 'https://mmlabassets.github.io/member/zhouxia_wang_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com.hk/citations?user=JWds_bQAAAAJ&hl=en',
      },
    ],
    keys: ['2020', '2023', 'Alumni'],
  },
  {
    name: 'Anran Liu',
    img: 'https://mmlabassets.github.io/member/anran_liu_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2019', '2023', 'Alumni'],
  },
  {
    name: 'Mingyu Ding',
    img: 'https://mmlabassets.github.io/member/mingyu_ding_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://dingmyu.github.io/',
      },
    ],
    keys: ['2019', '2023', 'Alumni'],
  },
  {
    name: 'Yuying Ge',
    img: 'https://mmlabassets.github.io/member/yuying_ge_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://geyuying.github.io/',
      },
    ],
    keys: ['2019', '2023', 'Alumni'],
  },
  {
    name: 'Zhaoyang Zhang',
    img: 'https://mmlabassets.github.io/member/zhaoyang_zhang_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=Pf6o7uAAAAAJ&hl=en',
      },
    ],
    keys: ['2019', '2023', 'Alumni'],
  },
  {
    name: 'Enze Xie',
    img: 'https://mmlabassets.github.io/member/enze_xie_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://xieenze.github.io/',
      },
    ],
    keys: ['2019', '2022', 'Alumni'],
  },
  {
    name: 'Wenhai Wang',
    img: 'https://mmlabassets.github.io/member/wenhai_wang_c.jpg',
    title: 'RA',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://whai362.github.io/',
      },
    ],
    keys: ['2019', '2020', 'Alumni'],
  },
  {
    name: 'Wenqi Shao',
    img: 'https://mmlabassets.github.io/member/wenqi_shao_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=Bs9mrwwAAAAJ&hl=en',
      },
    ],
    keys: ['2018', '2022', 'Alumni'],
  },
  {
    name: 'Jiaming Xie',
    img: 'https://mmlabassets.github.io/member/jiaming_xie_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [],
    keys: ['2017', '2023', 'Alumni'],
  },
  {
    name: 'Nenglun Chen',
    img: 'https://mmlabassets.github.io/member/nenglun_chen_c.jpg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'scholar',
        link: 'https://scholar.google.com/citations?user=UhjTC7AAAAAJ&hl=en',
      },
    ],
    keys: ['2017', '2023', 'Alumni'],
  },
  {
    name: 'Xingang Pan',
    img: 'https://mmlabassets.github.io/member/xingang_pan_c.jpeg',
    title: 'Ph.D.',
    pi: ['Ping Luo'],
    links: [
      {
        icon: 'webpage',
        link: 'https://xingangpan.github.io/',
      },
    ],
    keys: ['2017', '2021', 'Alumni'],
  },
];
