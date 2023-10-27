/******************************
⚠️如果放远程，请把completeanatomy.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:ca
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/ca\.completeanatomy\.cn\/api\/v13\/users\/info.*? url script-response-body https://raw.githubusercontent.com/Heaven-Canceller/Qx/main/ca/ca.js


[mitm]
hostname = ca.completeanatomy.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/"active" : ([\s\S]*?)/g,'"active" : true');
body = body.replace(/"expire" : ([\s\S]*?)/g,'"expire" : "2099-09-01T02:11:21.082126Z"');
body = body.replace(/"active\":false,'"active":true,"');
$done(body);
