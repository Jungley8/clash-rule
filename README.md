# Clash Rules

subconverter-ng 用的外部配置与自定义规则集。

## 文件

| 文件 | 用途 |
|---|---|
| `config.init` | 外部配置：规则集顺序、代理分组、节点过滤 |
| `DIRECT.list` | 自己的域名 / IP / 进程，强制直连 |
| `PROXY.list` | 需要走代理的自定义域名 |
| `UK.list` | 英国专区（含 `DOMAIN-SUFFIX,uk` 与 `GEOIP,GB`） |
| `ai.list` / `claude.list` / `google.list` / `openai.list` | AI 服务分流 |
| `opencode.list` | opencode.ai 与模型目录，默认走 `🅰️ opencode` 分组（可切 DIRECT） |
| `tailscale.list` | Tailscale 网段 |
| `xiaomi.list` | 小米手机统计、广告、商店推荐与定位上报域名（默认 `REJECT`） |
| `generate.js` | 在浏览器控制台生成订阅链接 |
| `docker-compose.yml` | 本地 subconverter-ng 服务 |

## 规则顺序

`config.init` 中的规则按声明顺序展开，Clash 自上而下首次匹配。

1. 本仓自定义规则（`DIRECT.list` / `PROXY.list`）
2. 拦截（`xiaomi.list`）
3. 局域网 / Tailscale 的 IP 规则
4. AI 服务：具体服务（Claude / OpenAI / Google / opencode）在前，`ai.list` 的 `DOMAIN-SUFFIX,ai` 最后
5. 地区专区
6. 常用服务（谷歌 / 微软 / 苹果 / 电报 / 音乐）
7. 流媒体
8. 兜底（GFWList → 国内 IP/域名 → `GEOIP,CN` → `FINAL`）

新增规则时保持这个顺序：越具体越靠前，通用兜底放最后。分组名同时是规则目标，改名要同步 `custom_proxy_group`。

## 小米上报拦截

`xiaomi.list` 默认命中后走 `🚫 小米上报` 分组，该分组默认 `REJECT`。某个域名影响功能时，在客户端把该分组切到 `DIRECT` 即可临时放行。

刻意不拦截推送、账号、OTA、病毒库更新与联网探针，清单见 `xiaomi.list` 文件头。

## 启动本地转换服务

```sh
docker compose up -d
```

## 生成订阅链接

1. 打开浏览器控制台
2. 粘贴 `generate.js` 内容
3. 修改顶部的订阅地址
4. 执行后得到订阅链接

> `generate.js` 里的订阅地址包含机场 token。不要把带真实 token 的版本提交到公开仓库。本地修改即可，或放到私有 gist。

## ref

- <https://github.com/ACL4SSR/ACL4SSR>
- <https://github.com/Jungley8/subconverter-ng>
