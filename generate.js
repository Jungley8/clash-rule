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
    config: 'https://github.com/Jungley8/clash-rule/raw/main/config.init',
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

  const url = `https://sub.xeton.dev/sub?${queryString}`;
  console.log(url);
