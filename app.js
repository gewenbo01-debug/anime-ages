const STAGES = [
  {
    id: "all",
    label: "全部年龄",
    sub: "0–99岁",
    title: "全年龄段精选片单总览",
    desc: "按儿童心理与认知发展规律划分 7 个阶段。点击上方任意年龄段，可查看该阶段的发育重点、屏幕时间建议与精准片单。",
    screenTime: "按年龄梯度递进",
    focus: "认知 · 语言 · 审美",
    color: "#E85D3F"
  },
  {
    id: "0-2",
    label: "0–2 岁",
    sub: "感官启蒙",
    title: "0–2 岁 · 感官与节奏启蒙期",
    desc: "18 个月前建议尽量远离屏幕；18–24 个月若观看，应只选画面极简、镜头切换极慢、有温暖韵律和重复词汇的作品，避免强光爆闪与快剪。",
    screenTime: "≤ 15 分钟/天（尽量少看）",
    focus: "听觉律动 · 视觉追踪",
    color: "#1D7874"
  },
  {
    id: "2-4",
    label: "2–4 岁",
    sub: "语言与习惯",
    title: "2–4 岁 · 语言爆发与生活常规期",
    desc: "孩子开始模仿日常行为、学说完整句子。最适合生活化、人物关系清晰、每集 5–7 分钟、充满安全感与幽默感的短剧（如《小猪佩奇》）。",
    screenTime: "15–30 分钟/天",
    focus: "日常表达 · 情绪命名",
    color: "#E85D3F"
  },
  {
    id: "4-6",
    label: "4–6 岁",
    sub: "社交与科普",
    title: "4–6 岁 · 社交规则与好奇心爆发期",
    desc: "孩子开始关心“为什么”以及如何与同伴合作。适合引入团队协作、自然科普、想象力游戏与更丰富的亲子互动剧情。",
    screenTime: "30–45 分钟/天",
    focus: "同理心 · 科普好奇",
    color: "#C88A1E"
  },
  {
    id: "6-9",
    label: "6–9 岁",
    sub: "冒险与逻辑",
    title: "6–9 岁 · 小学低年级与逻辑冒险期",
    desc: "阅读与理解能力跃升，能跟得上连续剧情与多线悬念。适合温和奇幻、机智解谜、经典长片与有“友情与勇气”内核的作品。",
    screenTime: "≤ 1 小时/天",
    focus: "逻辑推理 · 勇气友情",
    color: "#3A6EA5"
  },
  {
    id: "9-12",
    label: "9–12 岁",
    sub: "世界观思辨",
    title: "9–12 岁 · 复杂叙事与自我认同期",
    desc: "开始思考公平、离别、梦想与责任。可以欣赏具有宏大世界观、人物弧光完整、甚至探讨生老病死与情绪接纳的动画杰作。",
    screenTime: "约 1 小时/天",
    focus: "世界观 · 自我接纳",
    color: "#6C4F82"
  },
  {
    id: "12-15",
    label: "12–15 岁",
    sub: "青春成长",
    title: "12–15 岁 · 青春热血与审美觉醒期",
    desc: "中学阶段对同伴关系、热爱与挫折感同身受。热血体育番、青春治愈系与高水准动画电影能带来极强的正向激励。",
    screenTime: "自主管理 · 兼顾作息",
    focus: "热血坚持 · 审美养成",
    color: "#2E5EAA"
  },
  {
    id: "15+",
    label: "15 岁+ & 成人",
    sub: "哲思与艺术",
    title: "15 岁+ 与成人 · 哲学、艺术与深度叙事",
    desc: "动画从不是“小孩子专属”。这一阶段的作品探讨存在主义、时间流逝、社会隐喻与极致视听语言，值得静下心细品。",
    screenTime: "电影/剧集自由欣赏",
    focus: "哲学思辨 · 视听艺术",
    color: "#1D1B18"
  }
];

const SHOWS = [
  // 0-2
  {
    title: "花园宝宝",
    en: "In the Night Garden...",
    stage: "0-2",
    origin: "英国 BBC",
    duration: "约 28 分钟/集",
    tags: ["语言启蒙", "亲子共赏"],
    desc: "专为睡前安抚设计的梦幻绘本世界。色彩柔和、节奏极慢，用重复的歌谣和简单动作帮助婴幼儿放松情绪。",
    tip: "适合临睡前看半集作为睡前仪式，注意不要开太亮。"
  },
  {
    title: "天线宝宝",
    en: "Teletubbies",
    stage: "0-2",
    origin: "英国 BBC",
    duration: "约 15–25 分钟/集",
    tags: ["语言启蒙"],
    desc: "由幼教专家参与设计，大量使用“再见”“抱抱”等重复词汇和慢速动作，契合 1–2 岁幼儿的视觉与语言接收速度。",
    tip: "家长可以跟着屏幕一起做“抱抱”动作，变成现实互动。"
  },
  {
    title: "Super Simple Songs 儿歌动画",
    en: "Super Simple Songs",
    stage: "0-2",
    origin: "加拿大",
    duration: "2–3 分钟/首",
    tags: ["语言启蒙", "亲子共赏"],
    desc: "吐字极其清晰、旋律简单抓耳的英语启蒙儿歌，如《Twinkle Twinkle Little Star》《Bath Song》，几乎没有无效信息。",
    tip: "完全可以只放音频当背景音乐“磨耳朵”，减少盯屏时间。"
  },
  {
    title: "宝宝巴士 / 姆明短片启蒙",
    en: "Puffin Rock (剪辑/慢速篇)",
    stage: "0-2",
    origin: "爱尔兰",
    duration: "7 分钟/集",
    tags: ["科学科普", "亲子共赏"],
    desc: "《蓬蓬洛克》画风如水彩绘本般温柔，讲述小海雀一家的日常，没有反派和暴力冲突，声音设计非常治愈。",
    tip: "2 岁左右过渡到剧情动画时的绝佳桥梁。"
  },

  // 2-4
  {
    title: "小猪佩奇",
    en: "Peppa Pig",
    stage: "2-4",
    origin: "英国",
    duration: "5 分钟/集",
    tags: ["语言启蒙", "社交情商", "亲子共赏"],
    desc: "围绕佩奇、乔治、伊薇与爸爸妈妈的日常展开。画风极简却充满英式幽默，把刷牙、去幼儿园、跳泥坑拍得妙趣横生。",
    tip: "每集仅 5 分钟，天然适合控制时长；英音纯正，二刷强烈建议切英文原声。"
  },
  {
    title: "嗨！道奇",
    en: "Hey Duggee",
    stage: "2-4",
    origin: "英国 BBC",
    duration: "7 分钟/集",
    tags: ["社交情商", "语言启蒙"],
    desc: "大狗道奇带着小动物们在松鼠俱乐部收集各种“徽章”。没有说教，全靠任务驱动和可爱的肢体喜剧。",
    tip: "动画结尾每次都会喊“Hug!（抱抱）”，看完顺势给孩子一个大拥抱。"
  },
  {
    title: "小鼠波波",
    en: "Maisy Mouse",
    stage: "2-4",
    origin: "英国",
    duration: "5 分钟/集",
    tags: ["语言启蒙"],
    desc: "改编自经典绘本，线条粗犷鲜明、只有旁白和拟声词，非常适合刚开始学说话、认颜色和生活物品的小朋友。",
    tip: "可搭配同名纸板绘本一起读，虚实联动效果更好。"
  },
  {
    title: "汪汪队立大功",
    en: "PAW Patrol",
    stage: "2-4",
    origin: "加拿大",
    duration: "22 分钟/集（含两小节）",
    tags: ["冒险想象", "社交情商"],
    desc: "莱德队长和各具特长的救援小狗解决小镇麻烦，传达“没有困难的工作，只有勇敢的狗狗”的团队精神。",
    tip: "画面节奏比《小猪佩奇》快一些，建议 3 岁后再引入，每次看半集（11 分钟）。"
  },

  // 4-6
  {
    title: "布鲁伊",
    en: "Bluey",
    stage: "4-6",
    origin: "澳大利亚",
    duration: "7 分钟/集",
    tags: ["亲子共赏", "社交情商", "语言启蒙"],
    desc: "被誉为当代“天花板级”家庭动画。牧羊犬一家用无数脑洞大开的过家家游戏，细腻呈现儿童心理与父母高质量陪伴。",
    tip: "父母一定要陪着看！很多集（如《Sleepytime》《Baby Race》）会让大人直接看哭。"
  },
  {
    title: "海底小纵队",
    en: "The Octonauts",
    stage: "4-6",
    origin: "英国",
    duration: "11 分钟/集",
    tags: ["科学科普", "冒险想象"],
    desc: "巴克队长带队探索海洋、救助生物，每集结尾还有“海底报告”用真实画面或儿歌科普海洋动物冷知识。",
    tip: "对自然科普极度友好，看完可以带孩子去水族馆对照认生物。"
  },
  {
    title: "神奇校车（经典版）",
    en: "The Magic School Bus",
    stage: "4-6",
    origin: "美国 / 加拿大",
    duration: "26 分钟/集",
    tags: ["科学科普", "冒险想象"],
    desc: "卷毛老师开着能变身校车带学生钻进人体血管、飞向太阳系、穿越恐龙时代，把硬核科学变成奇幻冒险。",
    tip: "适合 5 岁以上对“十万个为什么”着迷的孩子，信息密度较高。"
  },
  {
    title: "小马宝莉：友谊的魔力",
    en: "My Little Pony: Friendship is Magic",
    stage: "4-6",
    origin: "美国 / 加拿大",
    duration: "22 分钟/集",
    tags: ["社交情商", "冒险想象"],
    desc: "围绕诚实、慷慨、忠诚、善良等友谊品质展开的奇幻日常，帮学龄前儿童理解同伴冲突与和解。",
    tip: "适合引导孩子讨论“朋友之间意见不合时该怎么办”。"
  },

  // 6-9
  {
    title: "希尔达",
    en: "Hilda",
    stage: "6-9",
    origin: "英国 / 加拿大",
    duration: "24 分钟/集",
    tags: ["冒险想象", "审美哲思"],
    desc: "蓝发女孩希尔达在充满北欧精灵、巨魔与奇幻生物的世界里冒险。画风复古温暖，教会孩子尊重未知与不同族群。",
    tip: "故事有连续性，适合周末全家一起追一两集。"
  },
  {
    title: "龙猫",
    en: "My Neighbor Totoro",
    stage: "6-9",
    origin: "日本 · 吉卜力",
    duration: "86 分钟（电影）",
    tags: ["亲子共赏", "审美哲思", "冒险想象"],
    desc: "宫崎骏最纯净的童年诗篇。没有坏人，只有夏日乡间的风、等待公交车的雨夜，以及只有纯真孩子才能看见的森林精灵。",
    tip: "绝佳的第一部电影院级动画长片，4–9 岁都能看懂不同层次的温暖。"
  },
  {
    title: "疯狂动物城",
    en: "Zootopia",
    stage: "6-9",
    origin: "美国 · 迪士尼",
    duration: "108 分钟（电影）",
    tags: ["冒险想象", "社交情商", "亲子共赏"],
    desc: "兔子朱迪与狐狸尼克的破案冒险。表层是爆笑侦探喜剧，深层巧妙触及刻板印象、偏见与梦想坚持。",
    tip: "看完可以聊聊“为什么大家一开始不相信小兔子能当警察”。"
  },
  {
    title: "飞哥与小佛",
    en: "Phineas and Ferb",
    stage: "6-9",
    origin: "美国",
    duration: "11–22 分钟/集",
    tags: ["冒险想象", "科学科普"],
    desc: "两个脑洞无限的兄弟在暑假每天造过山车、建海滩、环游世界，而他们的宠物鸭嘴兽其实是秘密特工。",
    tip: "极大激发动手创造欲与幽默感，对小学低年级孩子极具吸引力。"
  },

  // 9-12
  {
    title: "降世神通：最后的气宗",
    en: "Avatar: The Last Airbender",
    stage: "9-12",
    origin: "美国",
    duration: "23 分钟/集（共三季）",
    tags: ["冒险想象", "审美哲思", "社交情商"],
    desc: "融合东方武术与元素魔法的史诗之作。不仅打斗精彩，更对战争代价、赎罪（祖寇线）与责任给出了极高水准的探讨。",
    tip: "许多观众心目中的“美漫巅峰”，9–12 岁看热血与成长，成人二刷看哲学。"
  },
  {
    title: "怪诞小镇",
    en: "Gravity Falls",
    stage: "9-12",
    origin: "美国",
    duration: "22 分钟/集（共两季）",
    tags: ["冒险想象", "科学科普"],
    desc: "双胞胎兄妹在神秘小镇度过暑假，破解隐藏密码与超自然谜题。推理线索严密，亲情羁绊动人。",
    tip: "每集片尾都有真实可破译的密码彩蛋，特别锻炼观察力与逻辑。"
  },
  {
    title: "寻梦环游记",
    en: "Coco",
    stage: "9-12",
    origin: "美国 · 皮克斯",
    duration: "105 分钟（电影）",
    tags: ["亲子共赏", "审美哲思"],
    desc: "以墨西哥亡灵节为背景，温柔探讨“真正的死亡是被遗忘”与家庭梦想之间的和解。",
    tip: "极其优秀的生命教育电影，备好纸巾。"
  },
  {
    title: "头脑特工队",
    en: "Inside Out",
    stage: "9-12",
    origin: "美国 · 皮克斯",
    duration: "95 分钟（电影）",
    tags: ["社交情商", "亲子共赏"],
    desc: "把大脑里的乐乐、忧忧、怕怕、怒怒、厌厌具象化，告诉青春期前夕的孩子：悲伤不是坏情绪，它同样能带来共情与成长。",
    tip: "适合与进入“小大人”阶段、情绪起伏变大的孩子一起观看并讨论情绪。"
  },

  // 12-15
  {
    title: "排球少年！！",
    en: "Haikyuu!!",
    stage: "12-15",
    origin: "日本",
    duration: "24 分钟/集",
    tags: ["社交情商", "冒险想象"],
    desc: "没有超能力、没有绝对反派的纯粹体育群像剧。每个人都在为了“再多打一球”拼尽全力，把挫折与团队信任刻画得淋漓尽致。",
    tip: "极佳的抗挫折与团队精神激励作品，连配角都有完整的闪光时刻。"
  },
  {
    title: "蜘蛛侠：平行宇宙",
    en: "Spider-Man: Into the Spider-Verse",
    stage: "12-15",
    origin: "美国 · 索尼",
    duration: "117 分钟（电影）",
    tags: ["审美哲思", "冒险想象"],
    desc: "将美漫网点、涂鸦与三渲二技术融合到极致，讲述普通少年迈尔斯如何完成属于自己的“信仰之跃”。",
    tip: "视听语言教科书，对美术、音乐和影视剪辑感兴趣的青少年会大呼过瘾。"
  },
  {
    title: "千与千寻",
    en: "Spirited Away",
    stage: "12-15",
    origin: "日本 · 吉卜力",
    duration: "125 分钟（电影）",
    tags: ["审美哲思", "冒险想象"],
    desc: "10–15 岁再看《千与千寻》，不再只是奇幻汤屋，而是关于“不要忘记自己的名字”、劳动独立与抵御欲望的成长寓言。",
    tip: "不同年龄看会有完全不同的感悟，很适合少年阶段正式重温。"
  },
  {
    title: "夏目友人帐",
    en: "Natsume's Book of Friends",
    stage: "12-15",
    origin: "日本",
    duration: "24 分钟/集",
    tags: ["审美哲思", "社交情商"],
    desc: "能看见妖怪的孤独少年夏目，在归还名字的过程中与人类和妖怪建立温柔羁绊，治愈青春期的孤独感。",
    tip: "节奏舒缓温暖，适合学业压力大时用来放松心情。"
  },

  // 15+
  {
    title: "葬送的芙莉莲",
    en: "Frieren: Beyond Journey's End",
    stage: "15+",
    origin: "日本",
    duration: "24 分钟/集",
    tags: ["审美哲思", "冒险想象"],
    desc: "从“勇者打败魔王之后”开始讲起。长生种精灵在人类队友老去逝去后，重新踏上理解人类短暂生命与情感的旅程。",
    tip: "看似慢热，实则后劲极大，探讨时间、记忆与“珍惜当下”。"
  },
  {
    title: "双城之战",
    en: "Arcane",
    stage: "15+",
    origin: "美国 / 法国",
    duration: "40 分钟/集（共两季）",
    tags: ["审美哲思", "冒险想象"],
    desc: "即使完全没玩过《英雄联盟》也能震撼入坑。油画质感的三渲二巅峰，讲述阶级撕裂、姐妹宿命与理想主义的悲剧。",
    tip: "含较强戏剧冲突与成人向主题，建议 15 岁以上观看。"
  },
  {
    title: "心灵奇旅",
    en: "Soul",
    stage: "15+",
    origin: "美国 · 皮克斯",
    duration: "100 分钟（电影）",
    tags: ["审美哲思", "亲子共赏"],
    desc: "献给追梦者的温柔叩问：生命的意义不一定非要宏大的“火花”，街头落叶、一片披萨和微风拂面本身就是活着的美好。",
    tip: "非常适合高中生、大学生以及感到焦虑的成年人。"
  },
  {
    title: "强风吹拂",
    en: "Run with the Wind",
    stage: "15+",
    origin: "日本",
    duration: "24 分钟/集（共 23 集）",
    tags: ["审美哲思", "社交情商"],
    desc: "十个性格迥异的大学生凑在一起挑战箱根驿传长跑。“你喜欢跑步吗？”——这是一部关于热爱、坚持与自我和解的青春群像。",
    tip: "看完很容易让人想换上跑鞋出门跑两圈。"
  }
];

let activeStage = "all";
let activeTag = "all";
let searchQuery = "";

const ageTabsEl = document.getElementById("ageTabs");
const tagFiltersEl = document.getElementById("tagFilters");
const searchInputEl = document.getElementById("searchInput");
const stageBriefEl = document.getElementById("stageBrief");
const cardsGridEl = document.getElementById("cardsGrid");
const emptyStateEl = document.getElementById("emptyState");
const resetBtnEl = document.getElementById("resetFilters");

function renderAgeTabs() {
  ageTabsEl.innerHTML = STAGES.map(s => `
    <button
      class="age-tab ${s.id === activeStage ? "active" : ""}"
      data-stage="${s.id}"
      role="tab"
      aria-selected="${s.id === activeStage}"
    >
      <span>${s.label}</span>
      <small>${s.sub}</small>
    </button>
  `).join("");
}

function renderStageBrief() {
  const stage = STAGES.find(s => s.id === activeStage) || STAGES[0];
  stageBriefEl.innerHTML = `
    <div class="stage-brief-main">
      <h2>${stage.title}</h2>
      <p>${stage.desc}</p>
    </div>
    <div class="stage-meta-badges">
      <div class="meta-badge">
        <span>建议屏幕时间</span>
        <strong>${stage.screenTime}</strong>
      </div>
      <div class="meta-badge">
        <span>阶段核心重点</span>
        <strong>${stage.focus}</strong>
      </div>
    </div>
  `;
}

function getStageLabel(stageId) {
  const found = STAGES.find(s => s.id === stageId);
  return found ? found.label : stageId;
}

function getStageColor(stageId) {
  const found = STAGES.find(s => s.id === stageId);
  return found ? found.color : "#E85D3F";
}

function renderCards() {
  const q = searchQuery.trim().toLowerCase();
  const filtered = SHOWS.filter(show => {
    const matchStage = activeStage === "all" || show.stage === activeStage;
    const matchTag = activeTag === "all" || show.tags.includes(activeTag);
    const matchQuery = !q || [
      show.title,
      show.en,
      show.origin,
      show.desc,
      show.tip,
      ...show.tags
    ].some(text => text.toLowerCase().includes(q));
    return matchStage && matchTag && matchQuery;
  });

  if (filtered.length === 0) {
    cardsGridEl.innerHTML = "";
    emptyStateEl.classList.remove("hidden");
    return;
  }

  emptyStateEl.classList.add("hidden");
  cardsGridEl.innerHTML = filtered.map(show => `
    <article class="show-card" style="--card-accent: ${getStageColor(show.stage)}">
      <div class="card-top">
        <span class="age-chip">${getStageLabel(show.stage)}</span>
        <span class="origin-chip">${show.origin}</span>
      </div>
      <div class="card-title-wrap">
        <h3>${show.title}</h3>
        <div class="card-en">${show.en}</div>
      </div>
      <p class="card-desc">${show.desc}</p>
      <div class="card-tip"><strong>观看建议：</strong>${show.tip}</div>
      <div class="card-footer">
        <div class="card-tags">
          ${show.tags.map(t => `<span class="mini-tag">${t}</span>`).join("")}
        </div>
        <span>${show.duration}</span>
      </div>
    </article>
  `).join("");
}

ageTabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".age-tab");
  if (!btn) return;
  activeStage = btn.dataset.stage;
  renderAgeTabs();
  renderStageBrief();
  renderCards();
});

tagFiltersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".tag-btn");
  if (!btn) return;
  activeTag = btn.dataset.tag;
  tagFiltersEl.querySelectorAll(".tag-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderCards();
});

searchInputEl.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderCards();
});

resetBtnEl.addEventListener("click", () => {
  activeStage = "all";
  activeTag = "all";
  searchQuery = "";
  searchInputEl.value = "";
  tagFiltersEl.querySelectorAll(".tag-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.tag === "all");
  });
  renderAgeTabs();
  renderStageBrief();
  renderCards();
});

renderAgeTabs();
renderStageBrief();
renderCards();
