/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Join the Discord!": "加入 Discord!",
    "STR": "力量",
    "AGI": "敏捷",
    "Skills": "技能",
    "Skills:": "技能:",
    "STR:": "力量:",
    "AGI:": "敏捷:",
    "Recent": "最近",
    "Fight": "战斗",
    "Tank": "坦克",
    "Titan": "泰坦",
    "Undying": "不死",
    "Side Step": "侧步",
    "The Wraith": "幽灵",
    "The GOAT": "山羊",
    "The Legend": "传说",
    "The Mountain": "高山",
    "The Phantom": "幻影",
    "The Matador": "王牌",
    "The Ghost": "鬼魂",
    "Versatile Fighter": "全能战士",
    "Yoga Practitioner": "瑜伽练习者",
    "Wind Dancer": "风之舞者",
    "Weekend Warrior": "周末战士",
    "Undefeated": "未击败",
    "Side Step, Footwork Mastery": "侧步，步法精通",
    "Select an opponent:": "选择一个对手：",
    "Sharp Elbow": "尖肘",
    "Swift Shadow": "迅捷之影",
    "Takes tremendous punishment but keeps coming forward.": "虽然受到了严厉的惩罚，但他还是坚持了下来。",
    "The Destroyer": "毁灭者",
    "The Eternal": "永恒",
    "Knee Guard": "护膝",
    "Knockout Artist": "击倒艺术家",
    "Living Mirage": "生活幻影",
    "Marathon Runner": "马拉松运动员",
    "Muay Thai Idle Fight": "泰拳格斗放置",
    "Boost Items": "提升物品",
    "Glass Cannon": "玻璃大炮",
    "Global Competitor": "全球竞争者",
    "Ethereal": "空灵",
    "Turtle Shell": "龟壳",
    "A balanced amateur who trains around his day job.": "一个平衡的业余爱好者，围绕他的日常工作进行训练。",
    "A balanced beginner learning the basics of Muay Thai.": "一个平衡的初学者学习泰拳的基本知识。",
    "A complete fighter, equally dangerous in all aspects of combat.": "一个完全的斗士，在战斗的各个方面都同样危险。",
    "A counter-striker who makes opponents miss by millimeters.": "一个能让对手失误数毫米的反前锋。",
    "A flexible fighter who uses agility to compensate for low power.": "灵活的战士，用敏捷来弥补力量不足。",
    "A living legend who seems to get stronger the more punishment he takes.": "一个活生生的传奇人物，似乎受到的惩罚越多，他就越强大。",
    "A mythical knockout artist with devastating power in every limb.": "一个神话般的击倒艺术家四肢都有毁灭性的力量。",
    "A prime athlete with championship potential.": "一个有夺冠潜力的优秀运动员。",
    "A seasoned international fighter with experience against various styles.": "一位经验丰富的国际拳手，有对付各种风格的经验。",
    "A true all-rounder with no significant weaknesses.": "一个真正的多面手，没有明显的弱点。",
    "A well-rounded prospect with natural talent.": "具有全面发展前景和天赋的人。",
    "An elite fighter on the cusp of world championship glory.": "一个即将获得世界冠军的精英战士。",
    "Arena": "竞技场",
    "Bar Knuckle": "指节棍",
    "Built his strength at the gym, but lacks technical refinement.": "他在健身房锻炼了力量，但技术上缺乏改进。",
    "Buy me a coffee": "请给我买杯咖啡",
    "Chin of Steel": "钢下巴",
    "Complete Package": "完整礼包",
    "Cost: 10 Training Points": "花费：10个训练点",
    "Counter Hook, Flying Knee": "反钩，飞膝",
    "Counter Hook, Flying Knee, Power Elbow": "反钩拳，飞膝，力量肘",
    "Dancing Phantom": "舞蹈幻影",
    "Defeated": "已击败",
    "Demolition Man": "爆破员",
    "Destroys opponents with devastating power and relentless aggression.": "以毁灭性的力量和无情的侵略摧毁对手。",
    "Dragon Kick, Power Elbow, Spinning Kick": "龙腿，力量肘，旋转腿",
    "Effect lasts for one fight only": "效果只持续一场战斗",
    "Elusive Dodge, Tiger Step": "难以捉摸的闪避，老虎步",
    "END": "耐力",
    "END:": "耐力:",
    "Flying Knee, Quick Jab": "飞膝，快速刺拳",
    "Focuses on overwhelming power and devastating clinch work.": "专注于压倒性的力量和毁灭性的紧握工作。",
    "Former bouncer who specializes in powerful short-range strikes.": "前保镖，擅长近距离强力打击。",
    "Former dancer who uses exceptional footwork and fluid movement.": "前舞者，脚法出众，动作流畅。",
    "Grandmaster of Combat": "格斗宗师",
    "Granite Jaw": "花岗岩下巴",
    "Guide": "指南",
    "Gym Brawler": "健身房拳手",
    "Has absorbed more damage without falling than any fighter on record.": "在没有摔倒的情况下吸收的伤害比历史上任何一架战斗机都多。",
    "Has mastered every aspect of Muay Thai to near perfection.": "对泰拳的各个方面都掌握得近乎完美。",
    "Has more first-round knockouts than any other fighter in the country.": "第一轮击倒对手的次数比国内任何拳手都多。",
    "Has never been finished in over 50 professional fights.": "在50多场职业比赛中从未结束过。",
    "Has never been knocked out despite taking tremendous punishment.": "尽管受到了巨大的惩罚，但从未被淘汰过。",
    "Has the highest strike evasion rate in competition history.": "拥有比赛历史上最高的闪避率。",
    "Heavenly Guard, Iron Chin, Warrior's Endurance": "天卫，铁下巴，勇士耐力",
    "Heavenly Guard, Warrior's Endurance, Iron Chin": "天卫，勇士耐力，铁下巴",
    "Heavenly Guard, Warrior's Endurance, Iron Chin, Steel Guard": "天卫，战士耐力，铁下巴，钢守卫",
    "Heavenly Guard, Warrior's Endurance, Iron Chin, Steel Guard, Zen Focus": "天卫，战士耐力，铁下巴，钢卫，禅意聚焦",
    "Heavenly Guard, Warrior's Endurance, Iron Chin, Steel Guard, Zen Focus, Turtle Shell": "天卫，战士耐力，铁下巴，钢卫，禅意聚焦，龟壳",
    "Heavenly Guard, Warrior's Endurance, Iron Chin, Steel Guard, Zen Focus, Turtle Shell, Knee Guard": "天卫，战士耐力，铁下巴，钢卫，禅意聚焦，龟壳，膝卫",
    "Heavy Bag": "沉重的包",
    "His fights often go the distance, with opponents exhausting themselves.": "他的比赛经常持续到最后，对手们都筋疲力尽。",
    "His opponents claim fighting him is like trying to catch smoke.": "他的对手声称与他战斗就像试图抓烟。",
    "His opponents frequently leave on stretchers.": "他的对手经常被担架抬走。",
    "His power defies human limitations; even a glancing blow can end a fight.": "他的力量超越了人类的极限；即使是一击也能结束一场战斗。",
    "His strategy is simple: outlast the opponent, no matter what.": "他的策略很简单：无论如何都要比对手活得更久。",
    "Hits hard but crumbles when struck. High risk, high reward style.": "打得很狠，但被打得粉碎。高风险高回报的风格。",
    "Holds the record for most strikes evaded in championship fights.": "保持着在冠军赛中避过最多三振的记录。",
    "Iron Chin, Knee Guard": "铁下巴，护膝",
    "Known for ending fights with a single devastating strike.": "以一记致命一击结束战斗而闻名。",
    "Legendary for his ability to walk through fire and keep fighting.": "传说中他能穿越火海并继续战斗。",
    "Lightning Reflex, Elusive Dodge, Side Step": "闪电反射，闪避，侧步",
    "Lightning Reflex, Phantom Strike, Elusive Dodge": "闪电反射，幻影打击，闪避",
    "Lightning Reflex, Phantom Strike, Elusive Dodge, Tiger Step": "闪电反射，幻影打击，闪避，虎步",
    "Lightning Reflex, Phantom Strike, Tiger Step, Elusive Dodge, Footwork Mastery": "闪电反射，幻影打击，虎步，闪避，步法精通",
    "Lightning Reflex, Phantom Strike, Tiger Step, Elusive Dodge, Footwork Mastery, Side Step": "闪电反射，幻影打击，虎步，闪避，步法精通，侧步",
    "Lightning Reflex, Phantom Strike, Tiger Step, Elusive Dodge, Footwork Mastery, Side Step, Zen Focus": "闪电反射，幻影打击，老虎步，难以捉摸的闪避，步法精通，侧步，禅意聚焦",
    "Locker Room": "更衣室",
    "Low Kick, Quick Jab": "低踢，快速刺拳",
    "Moves like water, impossible to pin down.": "像水一样移动，无法控制。",
    "Moves with such speed that he appears to be in multiple places at once.": "动作如此之快，以至于他似乎同时出现在多个地方。",
    "Muay Thai Fury, Counter Hook, Flying Knee": "泰拳狂怒，反钩拳，飞膝",
    "Muay Thai Fury, Counter Hook, Spinning Kick, Zen Focus": "泰拳狂怒，反钩拳，回旋踢，禅意聚焦",
    "Muay Thai Fury, Counter Hook, Zen Focus": "泰拳狂暴，反钩拳，禅意聚焦",
    "Muay Thai Fury, Zen Focus, Counter Hook, Flying Knee, Dragon Kick, Phantom Strike": "泰拳狂怒，禅意聚焦，反钩，飞膝，龙踢，幻影打击",
    "Muay Thai Fury, Zen Focus, Flying Knee, Counter Hook, Dragon Kick": "泰拳狂怒，禅意聚焦，飞膝，反钩，龙踢",
    "Muay Thai Fury, Zen Focus, Flying Knee, Counter Hook, Lightning Reflex, Tiger Step, Phantom Strike": "泰拳狂怒，禅意聚焦，飞膝，反钩，闪电反射，虎步，幻影打击",
    "National Prospect": "国家的前景",
    "Nicknamed for his ability to absorb punishment like a military vehicle.": "绰号是因为他能像军车一样承受惩罚。",
    "No one knows if it's even possible to knock him out or break his will.": "没人知道是否有可能把他打晕或打破他的意志。",
    "One-Punch Wonder": "一拳奇迹",
    "Perfect Fighter": "完美战士",
    "Phantom Strike, Lightning Reflex, Tiger Step": "幻影打击，闪电反射，虎步",
    "Power Elbow": "强力肘",
    "Power Elbow, Dragon Kick": "强力肘，龙腿",
    "Power Elbow, Low Kick": "强力肘，低踢",
    "Quick Jab": "快速刺拳",
    "Rising Talent": "新兴人才",
    "Rookie Fighter": "新手战士",
    "So fast that opponents often swing at where she was, not where she is.": "如此之快，以至于对手经常在她过去的地方挥杆，而不是在她现在的地方。",
    "Some say his opponents never landed a clean hit in his entire career.": "有人说，在他的整个职业生涯中，他的对手从未打出过一记干净的一击。",
    "Steel Guard, Warrior's Endurance": "钢铁守卫，勇士耐力",
    "Steel Guard, Warrior's Endurance, Heavenly Guard": "钢铁护卫，勇士耐力，天堂护卫",
    "Stubborn Student": "倔强的学生",
    "The Executioner": "刽子手",
    "The Fortress": "堡垒",
    "The Immortal": "不朽的",
    "The Immovable": "不可动摇",
    "The most feared puncher in the sport's history, with unreal knockout power.": "他是拳击史上最可怕的拳手，拥有令人难以置信的击倒力。",
    "The reigning world champion, complete in every aspect of the art.": "卫冕世界冠军，在武术的各个方面都很完美。",
    "The ultimate master who has transcended human limitations through decades of training.": "经过数十年的训练，超越人类极限的终极大师。",
    "The Wrecking Ball": "破坏球",
    "Tiger Step, Elusive Dodge": "老虎步，难以捉摸的闪避",
    "Titan's Grip, Dragon Kick": "泰坦之握，龙踢",
    "Titan's Grip, Dragon Kick, Muay Thai Fury, Power Elbow, Spinning Kick, Zen Focus": "泰坦之握，龙踢，泰拳狂怒，力量肘，旋转踢，禅意聚焦",
    "Titan's Grip, Dragon Kick, Muay Thai Fury, Spinning Kick, Power Elbow": "泰坦之握，龙踢，泰拳狂怒，旋转踢，力量肘",
    "Titan's Grip, Dragon Kick, Power Elbow": "泰坦之握，龙腿，强力肘",
    "Titan's Grip, Dragon Kick, Power Elbow, Muay Thai Fury": "泰坦之握，龙踢，强力肘，泰拳狂怒",
    "Titan's Grip, Dragon Kick, Power Elbow, Muay Thai Fury, Spinning Kick, Zen Focus, Counter Hook": "泰坦的握，龙踢，力量肘，泰拳的愤怒，旋转踢，禅意聚焦，反钩",
    "Title Contender": "冠军竞争者",
    "Undisputed Champion": "无可争议的冠军",
    "Uses exceptional cardio and speed to wear opponents down.": "使用特殊的有氧运动和速度来消耗对手。",
    "v0.0.43": "v0.0.43",
    "What he lacks in technique, he makes up for in sheer resilience.": "他在技术上的不足，用他的韧性弥补了。",
    "Widely considered the greatest of all time, with mastery of every technique.": "被广泛认为是有史以来最伟大的，精通每一项技术。",
    "Zen Focus, Muay Thai Fury, Titan's Grip, Lightning Reflex, Warrior's Endurance, Dragon Kick, Phantom Strike, Counter Hook": "禅的专注，泰拳的愤怒，泰坦的握，闪电反射，战士的耐力，龙踢，幻影打击，反钩",
    "Repeat": "重复",
    "Cancel Training": "取消训练",
    "Training Strength": "训练力量",
    "Repeating": "重复中",
    "Training Agility": "训练敏捷",
    "Training Endurance": "训练耐力",
    "- Each bar = one Fast Training session": "- 每个巧克力棒 = 一次快速训练",
    "- Stop training! Earn 1 bar every 2 minutes": "- 停止训练！每2分钟获得1个巧克力棒",
    "It's a Rest Day": "今天是休息日",
    "Use Fast Training to": "使用快速训练去",
    "Big": "大",
    "Available": "可用",
    "All Items": "全部物品",
    "Headwear": "头饰",
    "Adds minor defense but reduces attack.": "增加少量防御，但减少攻击。",
    "Balanced agility & endurance boost.": "平衡敏捷性和耐力提升。",
    "Blazing fast but weak strikes.": "燃烧速度快但打击弱。",
    "Blocks strong attacks with high endurance.": "用高耐力阻挡强攻击。",
    "Counter Hook": "反击钩",
    "Deals high damage after dodging.": "躲闪后造成高伤害。",
    "Dragon Kick": "龙踢",
    "Elusive Dodge": "难以捉摸的闪避",
    "Endless Stamina": "无尽的耐力",
    "Enhances clinch power, slightly reduces agility.": "增强握力，略微降低敏捷性。",
    "Equipment": "装备",
    "Extreme speed boost, weakens attack.": "极速提升，削弱攻击。",
    "Fast but weak attack boost.": "快速但较弱的攻击提升。",
    "Flying Knee": "飞膝",
    "Footwork Mastery": "步法精通",
    "Gloves": "手套",
    "Hand Wraps": "裹手",
    "Heavenly Guard": "天上的警卫",
    "High damage but loses endurance.": "高伤害，但失去耐力。",
    "High damage but reduces agility.": "高伤害，但降低敏捷。",
    "High defense but makes player slow.": "高防守，但使球员慢。",
    "High evasion boost, minor attack loss.": "高闪避增益，小攻击损失。",
    "High-risk, high-reward damage boost.": "高风险，高回报的伤害提升。",
    "Improves dodging ability slightly.": "稍微提高闪避能力。",
    "Increased defense, slower movement.": "增加防御，减慢移动速度。",
    "Insane agility boost but loses endurance.": "疯狂敏捷提升，但失去耐力。",
    "Iron Chin": "铁下巴",
    "Learn": "学习",
    "Leg Sweep": "腿扫",
    "Lightning Reflex": "闪电反射",
    "Low Kick": "低踢",
    "Makes fighter extremely fast.": "使战斗机非常快。",
    "Max defense but reduces speed.": "最大防御，但降低速度。",
    "Max endurance boost, minor agility loss.": "最大耐力提升，小敏捷损失。",
    "Maximizes endurance, slightly lowers attack.": "使耐力最大化，稍微降低攻击。",
    "Medium": "中等",
    "Minor damage but slows opponent slightly.": "轻微伤害，但会使对手稍微减速。",
    "Moderate attack boost, minor endurance drain.": "中等攻击力提升，轻微耐力消耗。",
    "Muay Thai Fury": "泰拳狂怒",
    "Owned": "拥有的",
    "Phantom Strike": "幻影打击",
    "Powerful kick, slightly reduces speed.": "有力的踢腿，稍微降低速度。",
    "Shorts": "短裤",
    "Small": "小",
    "Small attack boost, slightly lowers agility.": "小攻击提升，稍微降低敏捷。",
    "Spinning Kick": "旋转踢",
    "Steel Guard": "钢护罩",
    "Tiger Step": "虎步",
    "Titan's Grip": "泰坦之握",
    "Trips opponent, making them slower.": "绊倒对手，使他们变慢。",
    "Ultimate": "终极",
    "unlocked": "已解锁",
    "Warrior's Endurance": "战士的耐力",
    "Zen Focus": "禅意聚焦",
    "Cooldown": "冷却",
    "You": "你",
    "Copy Log 📋": "复制日志 📋",
    "damage!": "伤害!",
    "VS": "VS",
    "ADVANTAGE": "优势",
    "EVEN": "甚至",
    "Fight in Progress": "战斗进行中",
    "Quick Jab, Low Kick, Sharp Elbow, Knee Guard, Side Step, Flying Knee, Spinning Kick": "快速刺拳，低踢，尖肘，护膝，侧步，飞膝，旋转踢",
    "Return to Opponents": "回到对手身边",
    "Quick Jab": "快速刺拳",
    "Your skills: Quick Jab, Low Kick, Sharp Elbow, Knee Guard, Side Step, Flying Knee, Spinning Kick": "你的技能：快速刺拳，低踢，尖肘，护膝，侧步，飞膝，旋转踢",
    "Active: STR (+50%) for current fight": "活跃: 当前战斗力量 (+50%) ",
    "Glass Cannon's skills: Sharp Elbow": "玻璃大炮技能：尖肘",
    "\" with high endurance!": "\" 具有高耐力！",
    "Defeated Opponents": "击败的对手",
    "Fighter Profile": "战士简介",
    "Skills Mastered": "掌握的技能",
    "⚡ AGI": "⚡ 敏捷",
    "💪 STR": "💪 力量",
    "🛡️ END": "🛡️ 耐力",
    "📱 Screenshot to share your progress!": "📱 截图分享你的进度！",
    "W/L:": "胜/负:",
    "Your": "你的",
    "As you progress, focus on balancing your stats and choosing skills strategically. Skills will naturally become less powerful in late-game, encouraging you to keep training your base stats.": "随着你的进步，专注于平衡你的属性和策略性地选择技能。技能在游戏后期自然会变得不那么强大，鼓励你继续训练你的基础属性。",
    "Fighters earn special achievements that showcase their unique fighting style and accomplishments. These achievements are displayed on the leaderboard and represent your prowess in different aspects of combat:": "战士可以获得特殊的成就，展示他们独特的战斗风格和成就。这些成就会显示在排行榜上，代表你在战斗中不同方面的实力：",
    "The": "",
    "Strategize": "制定策略",
    "Strength:": "力量:",
    "🧠 Unlock Powerful Skills!": "🧠 解锁强大的技能！",
    "🥊 BASICS": "🥊 基础",
    "📈 PROGRESSION": "📈 进度",
    "🌙 Night Fighter:": "🌙 暗夜斗士：",
    "☀️ Morning Warrior:": "☀️ 黎明战士:",
    "🏆 ACHIEVEMENTS": "🏆 成就",
    "💥 Critical Strike Count:": "💥 暴击次数:",
    "👹 OPPONENTS": "👹 敌手",
    "💡 TRAINING POINTS": "💡 训练点数",
    "🏹 Counter Master:": "🏹 计数器大师:",
    "💪 Train Like a Champion!": "💪 像冠军一样训练！",
    "🔄 Comeback Victories:": "🔄 逆转胜利：",
    "🎯 Higher Tier Challenges:": "🎯 更高层次的挑战：",
    "🔄 Perfect Blocks:": "🔄 完美格挡:",
    "⚡ Quick Victories:": "⚡ 快速胜利：",
    "🔥 Train. Fight. Dominate. Welcome to Muay Thai Idle Fight, where you train like a warrior and battle your way to the top!": "🔥训练。战斗。占主导地位。欢迎来到泰拳格斗放置，在这里你像一个战士一样训练，并为达到顶峰而战！",
    "Agility:": "敏捷:",
    "Back to Game": "返回游戏",
    "Return to Game": "回到游戏",
    "⚔️ Giant Killer:": "⚔️ 巨人杀手：",
    "🎭 Different Skills Used:": "🎭 使用的不同技能：",
    "⚡ First Strike Victories:": "⚡ 第一击胜利：",
    "⚔️ Fight Like a Warrior!": "⚔️ 像战士一样战斗！",
    ", and": ", 和",
    "Skill Scaling:": "技能扩展:",
    "—but it’s worth it.": "但这是值得的。",
    "—pick wisely!": "-明智地选择！",
    "—speed demons, iron tanks, or heavy hitters? Your call!": "-速度恶魔，铁坦克，还是重型战车？你说了算！",
    "\"Continuous Training\"": "“持续培训”",
    "(higher stats = lower skill effectiveness)": "（属性越高=技能效率越低）",
    "(more skills = diminishing returns)": "（技能越多=收益递减）",
    "~10% chance (with high endurance) to reduce incoming damage by 90%": "~10%几率（高耐力）降低90%的伤害",
    "~10% chance to deal 1.5x damage": "~10%几率造成1.5倍伤害",
    "A +15% strength skill gives different boosts based on your progress:": "+15%的力量技能根据你的进步给予不同的提升：",
    "Accumulates training sessions started between 5AM and 9AM local time.": "在当地时间早上5点到9点之间开始累积训练课程。",
    "Accumulates with each critical hit that deals 1.5x damage.": "每次造成1.5倍伤害的暴击累积。",
    "Affects attack speed, evasion chance, and special attacks": "影响攻击速度，闪避几率和特殊攻击",
    "AGI 40 = 10% chance for combo, STR 30 = +24% combo damage bonus": "敏捷 40 = 10%几率连击，力量 30 = +24%连击伤害加成",
    "AGI 60 = 15% chance for combo, STR 50 = +48% combo damage bonus": "敏捷 60 = 15%几率连击，力量 50 = +48%连击伤害加成",
    "AGI 60 vs opponent with AGI 60 = +25% evasion chance against the second hit in a combo": "敏捷 60 对 敏捷 60 的对手 = +25%的闪避几率对抗连击中的第二次攻击",
    "Agility 20 vs opponent with Agility 10 = attack 20% faster": "敏捷 20 vs 敏捷10 =攻击速度提高20%",
    "Agility 40 = higher chance for combo attacks (up to 18% chance)": "敏捷 40 = 更高的连击几率（高达18%的几率）",
    "Agility 60 vs opponent's STR 30 = 60% chance to evade attacks": "敏捷 60 vs 敌人力量 30 = 60%几率躲避攻击",
    "Balance earning points through training with spending them on skills": "平衡通过训练获得的点数和将其用于技能",
    "base stats increase": "基础属性增加",
    "become the ultimate Muay Thai legend!": "成为终极泰拳传奇！",
    "Boost": "提高",
    "boost stats but can have trade-offs": "提高属性，但可以有权衡",
    "Both fighters start with 100": "两名选手一开始都是100",
    "Build momentum during battle to unlock more powerful moves": "在战斗中建立动力以解锁更强大的动作",
    "Chain multiple attacks together based on agility (chance) and strength (damage)": "基于敏捷（几率）和力量（伤害）将多个攻击串联在一起",
    "Check back, train smarter, and": "检查一下，更聪明地训练，然后",
    "Combat includes events that can turn the tide of battle:": "战斗包括可以扭转战局的事件：",
    "Combo Attacks:": "组合攻击:",
    "Combo Evasion:": "组合规避:",
    "Counts attacks landed immediately after successfully evading an opponent's strike.": "计算成功躲避对手攻击后立即攻击的次数。",
    "Counts each time you execute a perfect block that reduces damage by 90%.": "计算每次你执行一个完美的格挡，减少90%的伤害。",
    "Counts fights completed between 8PM and 6AM local time.": "统计在当地时间晚上8点到早上6点之间完成的战斗。",
    "Counts how many times you've challenged opponents at least 2 tiers above your current level.": "计算你挑战比你当前等级高至少2个等级的对手的次数。",
    "Critical Hits:": "关键的打击:",
    "crush opponents": "粉碎对手",
    "Crushing Blows:": "破碎的打击:",
    "Defeated opponents appear first in the selection menu": "被击败的对手首先出现在选择菜单中",
    "Defeating opponents in record time.": "在创纪录的时间内击败对手。",
    "Demonstrates your ambition and willingness to test yourself against elite competition.": "展示你的野心和意愿，在精英竞争中考验自己。",
    "Demonstrates your dedication to training at all hours.": "表现出你对培训的投入。",
    "Demonstrates your defensive precision and timing.": "展示你的防守精度和时机。",
    "Demonstrates your resilience and ability to turn the tide of battle even when nearly defeated.": "展示你的韧性和扭转战局的能力，即使在几乎被打败的时候。",
    "Determines damage output and chance for crushing blows": "决定伤害输出和粉碎打击的几率",
    "Dynamic Scaling:": "动态扩展:",
    "Each opponent has unique stats and skills": "每个对手都有独特的属性和技能",
    "Early game (Strength 10, 3 skills): +13% effective boost": "游戏前期（力量10,3技能）：增加13%的有效提升",
    "Earned by winning fights in under 10 seconds (or approximately 10 combat turns).": "在10秒内（或大约10个战斗回合）赢得战斗。",
    "earned from": "赚来的",
    "Earned when you win a fight after being reduced to less than 20 HP at any point during the match.": "当你在比赛中任意时刻的血量减少到低于20时赢得战斗。",
    "Enable": "启用",
    "Endurance 25 = 10% damage reduction + 20% block chance": "耐力25 = 10%减伤+ 20%格挡几率",
    "Endurance 50 = 25% damage reduction + 30% block chance": "耐力50 = 25%减伤+ 30%格挡几率",
    "Endurance 75 = 45% damage reduction + chance for perfect blocks": "耐力75 = 45%减伤+完美格挡的几率",
    "Endurance:": "耐力:",
    "Evasion:": "闪避：",
    "Every completed": "每完成一次",
    "Example:": "例如：",
    "Fights are turn-based with 1-second intervals": "战斗是回合制的，间隔1秒",
    "Fights won by striking first and maintaining advantage.": "先下手为强，保持优势。",
    "Get 1 TP when won": "获胜时获得1个TP",
    "High agility fighters gain bonus evasion against combo attacks after the first hit": "高敏捷战士在第一次攻击后获得额外闪避",
    "High agility relative to your opponent's strength gives you a chance to completely avoid attacks": "相对于对手力量的高敏捷性让你有机会完全避免攻击",
    "higher your stats, the longer training takes": "你的数据越高，训练时间越长",
    "How to Play: Muay Thai Idle Fight": "如何玩：泰拳格斗放置",
    "Idle means progress happens even when you're offline!": "放置意味着即使离线也能取得进展！",
    "Late game (Strength 150, 20 skills): +3.8% effective boost": "游戏后期（力量150,20技能）：增加3.8%的有效提升",
    "Leaderboard Recognition:": "排行榜识别:",
    "learn more skills": "学习更多技能",
    "level up your fighter": "升级你的战斗机",
    "Mastery of various fighting techniques and skills.": "掌握各种格斗技巧和技巧。",
    "Mid game (Strength 50, 10 skills): +7.5% effective boost": "中期游戏（力量50,10技能）：增加7.5%的有效提升",
    "Momentum:": "动力:",
    "Opponents are organized in tiers with increasing difficulty": "对手被组织成等级，难度越来越大",
    "Perfect Blocks:": "完美的块:",
    "Reduces incoming damage and enables blocking": "减少传入伤害并启用格挡",
    "Remember:": "记住:",
    "Represents the number of different skills you've effectively incorporated into your fighting style.": "代表你有效地融入到你的战斗风格中的不同技能的数量。",
    "Represents your mastery of defensive-to-offensive transitions.": "代表你对从防守到进攻转变的掌握。",
    "Shows your ability to find and exploit openings in enemy defenses.": "显示你发现和利用敌人防御漏洞的能力。",
    "Shows your ability to overcome challenging odds through superior technique and strategy.": "展示你通过高超的技术和策略克服困难的能力。",
    "Shows your discipline and consistent training schedule.": "显示你的纪律和一致的训练计划。",
    "Shows your efficiency and dominance in combat.": "显示你在战斗中的效率和优势。",
    "Shows your strategic understanding of initiative in combat.": "显示你对战斗主动性的战略理解。",
    "Shows your versatility as a fighter and tactical adaptability.": "显示了你作为一名战士的多面手和战术适应性。",
    "Skills are ranked:": "技能排名如下：",
    "Skills become less effective as:": "技能在以下情况下变得不那么有效：",
    "Skills cost between 15-30 Training Points depending on their power and tier": "技能消耗在15-30个训练点之间，这取决于他们的力量和等级",
    "Small, Medium, Big, and Ultimate": "小，中，大，和终极",
    "Some opponents specialize in specific stats (strength, agility, or endurance)": "一些对手专注于特定的属性（力量、敏捷或耐力）。",
    "Special Combat Events:": "特殊战斗事件：",
    "Stats affect combat:": "属性影响战斗：",
    "Strength (STR), Agility (AGI), and Endurance (END)": "力量（STR），敏捷（AGI）和耐力（END）",
    "Strength 15 = ~15 damage per hit": "力量15 =每次攻击造成15点伤害",
    "Strength 30 = ~30 damage per hit": "力量30 =每次攻击造成30点伤害",
    "Taking on and fighting opponents from higher tiers.": "与更高级别的对手对抗。",
    "Tallies wins where you landed the first hit and maintained control throughout.": "当你第一次命中并在整个过程中保持控制时，你就赢了。",
    "The \"Effectiveness\" percentage shows how powerful your skills currently are": "“有效性”百分比显示了你目前的技能有多强大",
    "The count increases each time you defeat an opponent with total power at least 25% higher than yours.": "每次你击败一个总能量比你高25%的对手，这个数值就会增加。",
    "The first fighter to reduce their opponent to 0 HP wins": "第一个将对手的生命值降至0的战士获胜",
    "This is an idle game, so progress happens even when you're not actively playing. Check back regularly to start new training sessions and challenge new opponents!": "这是一款空闲游戏，所以即使你不积极地玩游戏也会取得进展。定期回来开始新的训练课程和挑战新的对手！",
    "to keep growing automatically!": "保持自动增长！",
    "Total fights completed during night hours.": "在夜间完成的战斗总数。",
    "Total number of critical hits landed on opponents.": "对对手的暴击总数。",
    "Total number of perfect blocks performed in combat.": "战斗中完成的完美格挡总数。",
    "Total successful counter-attacks after evading.": "躲闪后成功反击的总次数",
    "Train, earn TP, unlock skills,": "训练，赚取训练点数，解锁技能，",
    "training & fights": "训练和战斗",
    "Training Points (TP)": "训练点数（TP）",
    "Training Points (TP) are earned by completing training sessions and winning fights": "训练点数（TP）是通过完成训练课程和赢得战斗而获得的",
    "training session earns you 1 Training Point": "每次训练可获得1个训练点",
    "Training sessions completed in morning hours.": "培训课程在上午完成。",
    "Training takes time but works even when you're offline!": "培训需要时间，但即使你离线也能工作！",
    "Unlock with": "解锁,",
    "Use Training Points to purchase skills": "使用训练点数购买技能",
    "Victories against opponents with significantly higher stats than you.": "战胜属性值明显高于你的对手。",
    "When your strength significantly exceeds your opponent's agility, you can land a crushing blow that bypasses evasion and deals extra damage": "当你的力量明显超过对手的敏捷时，你可以发动一击，绕过闪避并造成额外伤害",
    "Wins achieved after your health dropped below 20%.": "当你的血量降到20%以下时取得胜利。",
    "Your achievements are displayed on the global leaderboard. Click the trophy icon 🏆 next to a fighter's name to see their full list of achievements!": "你的成就会显示在全球排行榜上。点击战士名字旁边的奖杯图标🏆查看他们的完整成就列表！",
    "Your AGI 60 vs opponent's STR 30 (2:1 ratio) gives you ~60% chance to evade attacks": "你的 敏捷 60 比 对手的 力量 30（2:1的比例）给你60%的几率躲避攻击",
    "Your AGI 90 vs opponent's STR 30 (3:1 ratio) gives you ~90% chance to evade attacks": "你的 敏捷 90 vs对手的 力量 30（3:1的比例）让你有90%的几率躲避攻击",
    "Your STR 75 vs opponent's AGI 50 gives ~33% chance for crushing blows that deal 1.75x damage": "你的 力量 75 vs 对手的 敏捷 50有33%的几率造成1.75倍伤害的粉碎打击",
    "Leaderboard": "排行榜",
    "Loading top fighters...": "正在加载顶级斗士...",
    "Retry": "重试",
    "Failed to load leaderboard data. Check your connection and try again.": "加载排行榜数据失败。请检查连接，然后再试一次。（想参与排行榜建议玩英文版。可能需要科学上网才能加载排行榜）",
    "Anonymous Fighter": "匿名斗士",
    "Change Name": "修改名称",
    "Community": "社区",
    "Contact Developer": "联系开发者",
    "Hard Reset": "硬重置",
    "Name:": "名称:",
    "Save Game": "保存游戏",
    "AGI Effectiveness:": "敏捷效率:",
    "END Effectiveness:": "耐力效率:",
    "STR Effectiveness:": "力量效率:",
    "Learned": "已学会",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "TP:": "训练点:",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Fast Train (": "快速训练 (",
    "Train (": "训练 (",
    "Remaining: ": "剩余: ",
    "AGI +": "敏捷 +",
    "END +": "耐力 +",
    "STR +": "力量 +",
    "STR: ": "力量: ",
    "END: ": "耐力: ",
    "AGI: ": "敏捷: ",
    "Cooldown: ": "冷却时间: ",
    "Auto-scroll: ": "自动滚动: ",
    "Rookie Fighter's skills: ": "新手战士技能：",
    "Effectiveness: ": "效率: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    " remaining": " 剩余",
    "% complete": "% 完成",
    " HP": " 生命值",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^v([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+)\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^(.+) hits (.+) for (.+) massive damage!$/, '$1 击中 $2 造成 $3 巨大伤害！'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+)L$/, '$1 负'],
    [/^([\d\.,]+)W$/, '$1 胜'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\" for ([\d\.,]+) critical damage!$/, '\" 和 $1 暴击伤害！'],
    [/^([\d\.,]+) TP$/, '$1 训练点'],
    [/^Defeated ([\d\.,]+) times$/, '已击败 $1 次'],
    [/^You\'ve defeated this opponent ([\d\.,]+) times before.$/, '您已击败该对手 $1 次.'],
    [/^([\d\.,]+) of ([\d\.,]+) per day$/, '$1 \/ $2 每天'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);