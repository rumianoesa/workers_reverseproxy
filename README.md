# workers_reverseproxy

一个基于 Cloudflare Workers 构建的简易反向代理服务。原样转发所有请求内容到后端，获取返回内容后原样发还给客户端。可用于代理一些 api ，或是 web 服务。支持主页伪装。

## 部署方式

- 创建新的 Workers 项目
- 点击右上角 `编辑代码`
- 复制 [reverseproxy.js](https://github.com/rumianoesa/workers_reverseproxy/blob/main/reverseproxy.js) 代码，`部署`
- 添加变量 `HOST` 和 `URL`
- 添加自定义域或路由

## 变量说明

| 变量名 | 示例 | 必填 | 备注 | 
|--|--|--|--|
| HOST | `api.telegram.org` |✅| 设置需要代理的后端域名 |
| URL | `https://www.nyan.cat/music/original.mp3` |❌| 主页伪装 (设为 `nginx` 则伪装为nginx默认页面) |

## 注意事项

胡乱设置用于主页伪装的变量 `URL` 容易被识别为诈骗网站，设置为被封锁的网站可能导致自定义域或路由也被封锁。如果有主页伪装的需求，通常设置为 `nginx` 即可。
