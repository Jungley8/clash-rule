// 支持多个订阅地址
const proxy = [
    'http://example.com',
    // 'http://example2.com',
    // 'http://example3.com',
]

const params = {
    target: 'clash',
    url: proxy.join('|'),
    insert: false,
    // config: 'https://github.com/Jungley8/clash-rule/raw/main/config.init',
    config: 'https://raw.githubusercontent.com/Aethersailor/Custom_OpenClash_Rules/main/cfg/Custom_Clash.ini',
    emoji: false,
    list: false,
    tfo: false,
    scv: true,
    fdn: false,
    sort: false,
    new_name: true
  };

  const queryString = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  // const url = `https://sub.xeton.dev/sub?${queryString}`;
  // const url = `https://api.dler.io/sub?${queryString}`;
  const url = `https://api.asailor.org/sub?${queryString}`;

  console.log(url);
