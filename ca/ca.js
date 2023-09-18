
什么也没有
    
************************
[rewrite_local]
^https:\/\/ca\.completeanatomy\.cn\/api\/v13\/users url script-response-body https://raw.githubusercontent.com/Heaven-Canceller/Qx/ca/ca.js
[mimt]
hostname = ca.completeanatomy.cn


************************

var body = $response.body;
var url = $request.url;
var obj = JSON.parse body);

const ca = ‘/info’;

if (url.indexOf(ca) != -1) {
    obj.data.active = true;
obj.data. expire = "2099-07-31T00:00:00Z";
body = JSON.stringing(obj);
}

$done({body});
