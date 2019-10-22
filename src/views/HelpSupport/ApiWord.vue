<template>
    <div id="apiWord" data-automation="apiWord">
        <!-- <h1 style="height:100px">api文档开发者中心通用说明</h1> -->
        <div class="layout">
            <Sider :style="{position: 'fixed', height: '100vh', left: 200, overflow: 'auto'}" style="width: 315px; min-width: 315px; max-width: 325px;">
                <div class="bigtitle">开发者中心</div>
                <Menu theme="light" width="auto" :open-names="['1']" class="sel">
                    <Submenu name="1">
                        <template slot="title">
                            <a href="javascript:void(0)" @click="scroll('#C1')">通用说明</a>
                        </template>
                        <MenuItem name="1-1"><a href="javascript:void(0)" @click="scroll('#C2')">公共约定</a></MenuItem>
                        <MenuItem name="1-2"><a href="javascript:void(0)" @click="scroll('#C3')">结果说明</a></MenuItem>
                        <MenuItem name="1-3"><a href="javascript:void(0)" @click="scroll('#C4')">错误码</a></MenuItem>
                        <MenuItem name="1-4"><a href="javascript:void(0)" @click="scroll('#C5')">API列表</a></MenuItem>
                        <MenuItem name="1-5"><a href="javascript:void(0)" @click="scroll('#C6')">通用参数</a></MenuItem>
                        <MenuItem name="1-6"><a href="javascript:void(0)" @click="scroll('#C7')">加密过程</a></MenuItem>
                        <MenuItem name="1-7"><a href="javascript:void(0)" @click="scroll('#C8')">平台参数</a></MenuItem>
                    </Submenu>
                    <Submenu name="2" class="overflow">
                        <template slot="title">
                            <a href="javascript:void(0)" @click="scroll('#A1')">API详情</a>
                        </template>
                        <MenuItem name="2-1"><a href="javascript:void(0)" @click="scroll('#A2')">获取token</a></MenuItem>
                        <MenuItem name="2-2"><a href="javascript:void(0)" @click="scroll('#A3')">获取单张卡信息</a></MenuItem>
                        <MenuItem name="2-3"><a href="javascript:void(0)" @click="scroll('#A4')">获取批量卡数据</a></MenuItem>
                        <MenuItem name="2-4"><a href="javascript:void(0)" @click="scroll('#A5')">获取卡套餐和叠加包信息</a></MenuItem>
                        <MenuItem name="2-5"><a href="javascript:void(0)" @click="scroll('#A6')">发送短信</a></MenuItem>
                        <MenuItem name="2-6"><a href="javascript:void(0)" @click="scroll('#A7')">批量停开机</a></MenuItem>
                        <MenuItem name="2-7"><a href="javascript:void(0)" @click="scroll('#A8')">单卡停开机</a></MenuItem>
                        <MenuItem name="2-8"><a href="javascript:void(0)" @click="scroll('#A9')">SIM卡续费（记账支付）</a></MenuItem>
                        <MenuItem name="2-9"><a href="javascript:void(0)" @click="scroll('#A10')">查询续费订单结果（记账支付）</a></MenuItem>
                        <MenuItem name="2-10"><a href="javascript:void(0)" @click="scroll('#A11')">SIM卡叠加包续费（记账支付）</a></MenuItem>
                        <MenuItem name="2-11"><a href="javascript:void(0)" @click="scroll('#A12')">批量套餐获取对应的叠加包信息</a></MenuItem>
                        <MenuItem name="2-12"><a href="javascript:void(0)" @click="scroll('#A13')">SIM卡续费创建订单（扫码支付）</a></MenuItem>
                        <MenuItem name="2-13"><a href="javascript:void(0)" @click="scroll('#A14')">根据订单号获取二维码（扫码支付）</a></MenuItem>
                        <MenuItem name="2-14"><a href="javascript:void(0)" @click="scroll('#A15')">支付之后通知支付（扫码支付）</a></MenuItem>
                        <MenuItem name="2-15"><a href="javascript:void(0)" @click="scroll('#A16')">SIM叠加包创建订单（扫码支付）</a></MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '315px'}">
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb>
                        <BreadcrumbItem><router-link to="/index">首页</router-link></BreadcrumbItem>
                        <BreadcrumbItem>开发者中心</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="padding: 80px 0 0 89px;">
                            <div class="shutdown-con">
                                <h3>开发者中心</h3>

                                <div>
                                    <h4><a id="C1">1、通用说明</a></h4>
                                    <div>
                                        <h5><a id="C2">1.1公共约定</a></h5>
                                        <p>1) 编码 UTF-8 编码<br>2) 摘要算法采用MD5进行加密<br>3) 响应格式 Context-Type:application/json charset=ut</p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="C3">1.2结果说明</a></h5>
                                        <p>开发者接入SIM开放平台api之后，无论是正确返回结果还是错误提示都以JSON格式返回，返回格式包含三个字段code(编号)、msg(提示信息)、result (数据)，例如：</p>
                                        <p><Table width="648" height="230" :columns="columns1" :data="data1" size="large"></Table></p>
                                        <p>获取Token返回结果范例：</p>
                                        <pre>
                                            <code>
                                                {
                                                    "code": 0,
                                                "message":
                                                    "success",
                                                    "result":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImFjY291bnQiOiJhZG1pbiIsImV4cGlyZV90aW1lIjoxNTMyMDgwMTMxOTI5LCJwYXNzd29yZCI6IjIxMjE4Y2NhNzc4MDRkMmJhMTkyMmMzM2UwMTUxMTA1In0.xVMiGaRBsqwAEwLWsHNXrQKQj0iHuqAOB81lIZ6_-oc"
                                                }
                                            </code>
                                        </pre> 
                                    </div>
                                    
                                    <div>
                                        <h5><a id="C4">1.3错误码</a></h5>
                                        <p>错误码包括两个部分，第一个是网关返回给客户端的错误码，第二个是api返回的错误码。</p>
                                        <p>GATEWAY错误码：</p>
                                        <p><Table width="648" height="230" :columns="columns2" :data="data2" size="large"></Table></p>
                                        <p>OpenApi 错误码：</p>
                                        <p><Table width="648" height="230" :columns="columns3" :data="data3" size="large"></Table></p>
                                    </div>   

                                    <div>
                                        <h5><a id="C5">1.4API列表</a></h5>
                                        <p><Table width="648" height="230" :columns="columns4" :data="data4" size="large"></Table></p>
                                    </div>

                                    <div>
                                        <h5><a id="C6">1.5通用参数</a></h5>
                                        <p>进行接口调用的时候都需要发送通用参数，开放平台会对参数进行校验，包括方法、token、sign验证</p>
                                        <p><Table width="648" height="230" :columns="columns5" :data="data5" size="large"></Table></p>
                                    </div>

                                    <div>
                                        <h5><a id="C7">1.6加密过程</a></h5>
                                        <p>参数在传输过程确保参数不被篡改，提供md5摘要算法进行验证，参数加密过程如下：<br>1.参数按照key值进行从小到大进行排序，使用key  + value 进行拼接。<br>2.拼接之后，首尾追加app_secret,进行md5加密，生成字符串当成sign参数传输到开放平台进行验证。</p>
                                        <p>范例代码如下：</p>
                                        <p>
                                            <pre>
                                                <code>
                                                    /**
                                                    *
                                                    Pairs 加密参数， appsecrit 平台提供秘钥参数
                                                    **/
                                                    private
                                                    String getSignResult(NameValuePair[] pairs,String appSecrit) {
                                                                       Map&lt;String,String&gt;
                                                    parameterMap = new HashMap&lt;&gt;();
                                                                       for (NameValuePair pair :
                                                    pairs) {
                                                                                parameterMap.put(pair.getName(),
                                                    pair.getValue());
                                                                       }
                                                                       String keys[] =
                                                    parameterMap.keySet().toArray(new String[0]);
                                                                       Arrays.sort(keys);
                                                                       StringBuffer sb = new
                                                    StringBuffer();
                                                                       
                                                                       sb.append(appSecrit);
                                                                       for (String key : keys) {
                                                                                sb.append(key).append(parameterMap.get(key));
                                                                       }
                                                                       sb.append(appSecrit);
                                                                       MessageDigest md5 = null;
                                                                       try {
                                                                                md5 =
                                                    MessageDigest.getInstance("MD5");
                                                                       } catch
                                                    (NoSuchAlgorithmException e) {
                                                                                e.printStackTrace();
                                                                       }
                                                                       byte[] bytes = md5.digest(sb.toString().getBytes(Charset.forName("UTF-8")));
                                                                       
                                                                       //转换成16进制
                                                                       StringBuilder sign = new
                                                    StringBuilder();
                                                                       for (int i = 0; i <
                                                    bytes.length; i++) {
                                                                                String hex =
                                                    Integer.toHexString(bytes[i] & 0xFF);
                                                                                if (hex.length()
                                                    == 1) {
                                                                                         sign.append("0");
                                                                                }
                                                                                sign.append(hex.toUpperCase());
                                                                       }
                                                                       return sign.toString();
                                                    }
                                                </code>
                                            </pre> 
                                        </p>
                                        <p>加密示例：</p>
                                        <p><Table width="648" height="230" :columns="columns6" :data="data6" size="large"></Table></p>
                                    </div>

                                    <div>
                                        <h5><a id="C8">1.7平台参数</a></h5>
                                        <p><Table width="648" height="230" :columns="columns7" :data="data7" size="large"></Table></p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4><a id="A1">2、API详情</a></h4>
                                    <div>
                                        <h5><a id="A2">2.1获取token</a></h5>
                                        <p>接入api需要进行token验证（获取Token除外），Token验证是利用JWT在网关层进行用户拦截，实现用户验证，未通过验证则无法进行业务查询、业务办理<br>1.Token验证利用开放平台提供的参数进行Token获取，第一次获取Token的时候, 不需要Token验证，当系统获取Token值之后，调用其他接口获取数据或者进行业务办理，均要进行Token验证，只有发送正确的Token值才能正确执行。<br>2.Token值有效期是一小时，失效之后必须重新获取才能接入。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/auth/accessToken</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data8" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data9" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                       "code": 0,
                                                       "message":
                                                        "success",
                                                        "result":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImFjY291bnQiOiJhZG1pbiIsImV4cGlyZV90aW1lIjoxNTMyMDgwMTMxOTI5LCJwYXNzd29yZCI6IjIxMjE4Y2NhNzc4MDRkMmJhMTkyMmMzM2UwMTUxMTA1In0.xVMiGaRBsqwAEwLWsHNXrQKQj0iHuqAOB81lIZ6_-oc"
                                                    }
                                                </code>
                                            </pre>
                                        </p> 
                                    </div>
                                    
                                    <div>
                                        <h5><a id="A3">2.2获取单张卡信息</a></h5>
                                        <p> 提供单个卡数据查询，用户提供卡号、 iccid、 msisdn进行查询，随便提供其中一种即可，如果有些运营商的卡没有msidn属性，就应该使用卡号或者iccid进行查询，否则会返回错误提示。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/querySimInfo</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data10" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data11" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                             "code":
                                                    0,
                                                             "message":
                                                    "success",
                                                             "result":
                                                    {
                                                                       "groupNo":
                                                    "QS531ZX",
                                                                       "iccid":
                                                    "898607B7151770282374",
                                                                       "msisdn":
                                                    "1064770627374",
                                                                       "simNo":
                                                    "1064770627374",
                                                                       "primaryCyc":
                                                    "25",
                                                                       "simType":
                                                    "CMCC",
                                                                       "state":
                                                    -1,
                                                                       "terminalstatus":
                                                    1,
                                                                       "importTime":
                                                    1525663772000,
                                                                       "bootTime":
                                                    null,
                                                                       "actcTime":
                                                    1525622400000,
                                                                       "activateTime":
                                                    1527264000000,
                                                                       "lactTime":
                                                    1527264000000,
                                                                       "stopTime":
                                                    null,
                                                                       "deliTime":
                                                    1525622400000,
                                                                       "dueTime":
                                                    1590854400000,
                                                                       "decMark":
                                                    null,
                                                                       "unit":
                                                    null,
                                                                       "cardType":
                                                    "3",
                                                                       "useredFlow":
                                                    0.0,
                                                                       "remainderFlow":
                                                    23.0
                                                             }
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="A4">2.3获取批量卡数据</a></h5>
                                        <p>1.查询的批量卡号必须同时是卡号、iccid、msisdn,不能一部分是iccid,一部分是卡号，必须统一<br>2.批量卡号要用逗号隔开，一次性查询的卡号不能超过1000</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/querySimInfoList</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data12" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data13" size="large"></Table></p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="A5">2.4获取卡套餐和叠加包信息</a></h5>
                                        <p>用户输入SIM卡号，可以获取该卡的套餐信息以及绑定的叠加包信息。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/queryPackageBySimNo</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data21" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data14" size="large"></Table></p>
                                        <p>
                                          <pre>
                                                <code>
                                                    {
                                                         "code": 0,
                                                         "message":
                                                "success",
                                                         "result": {
                                                                   "packageDetail":
                                                {
                                                                            "id":
                                                "31",
                                                                            "productId":
                                                31,
                                                                            "simType":
                                                "CMCC",
                                                                            "packageType":
                                                1,
                                                                            "facePrice":
                                                23.00,
                                                                            "flowType":
                                                2,
                                                                            "totalFlow":
                                                23,
                                                                            "unit":
                                                "M",
                                                                            "period":
                                                1,
                                                                            "isRecharge":
                                                1,
                                                                            "introduction":
                                                "",
                                                                            "proxyPrice":
                                                null,
                                                                            "postpaid":
                                                0,
                                                                            "postpaidLimit":
                                                0,
                                                                            "settleMethod":
                                                0,
                                                                            "productCode":
                                                "23",
                                                                            "productType":
                                                0,
                                                                            "productName":
                                                "23元套餐",
                                                                            "costPrice":
                                                null,
                                                                            "proxyTopPrice":
                                                23.00,
                                                                            "remark":
                                                null,
                                                                            "commNumber":
                                                null
                                                                   },
                                                                   "flowPackageDetails":
                                                [{
                                                                            "id":
                                                "34",
                                                                            "productId":
                                                34,
                                                                            "simType":
                                                "CMCC",
                                                                            "packageType":
                                                2,
                                                                            "facePrice":
                                                null,
                                                                            "flowType":
                                                null,
                                                                            "totalFlow":
                                                45,
                                                                            "unit":
                                                "M",
                                                                            "period":
                                                2,
                                                                            "isRecharge":
                                                1,
                                                                            "introduction":
                                                null,
                                                                            "proxyPrice":
                                                null,
                                                                            "postpaid":
                                                null,
                                                                            "postpaidLimit":
                                                null,
                                                                            "settleMethod":
                                                null,
                                                                            "productCode":
                                                "45",
                                                                            "productType":
                                                0,
                                                                            "productName":
                                                "45元流量包",
                                                                            "costPrice":
                                                45.00,
                                                                            "proxyTopPrice":
                                                45.00,
                                                                            "remark":
                                                null,
                                                                            "commNumber":
                                                null
                                                                   }]
                                                         }
                                                }

                                                </code>
                                            </pre>  
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h5><a id="A6">2.5发送短信</a></h5>
                                        <p>发送短信是用户提供批量卡号，进行发送短信，短信会有延时，提交之后会立即产生结果，但是平台短信处理会有一定的延时。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/sendSms­­</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data15" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data16" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                         "code": 2015,
                                                         "message":
                                                "success",
                                                         "result": {
                                                                   "success": [],
                                                                   "fail": [{
                                                                            "simNo":
                                                "1000000364042",
                                                                            "cause":
                                                "余额不足",
                                                              "failCode": 2008
                                                                   },{
                                                                            "simNo":
                                                "1000000368247",
                                                                            "cause":
                                                "余额不足",
                                                              "failCode": 2008
                                                                   }]
                                                         }
                                                }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A7">2.6批量停开机</a></h5>
                                        <p> 用户提供批量号码，要保证当前这批卡号隶属于当前用户或者下一级用户，不能操作其他用户的卡，否则会开机不成功。<br>1.一批卡不能超过100张，否则不受理；<br>2.卡必须用逗号隔开；<br>3.停复机动作：0是停机，1=是开机，其他状态不受理</p>
                                        <p>调用地址 http://openapi.jimisim.com/gateway.do/open/sim/batchChangeState</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data17" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data18" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                      "code": 0
                                                      "message": "success
                                                      "result": null
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A8">2.7单卡停开机</a></h5>
                                        <p> 单卡停开机和批量基本相同，唯一区别在于只能操作一张卡</p>
                                        <p>调用地址 http://openapi.jimisim.com/gateway.do/open/sim/changeState</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data19" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data20" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                      "code": 0
                                                      "message": "success
                                                      "result": null
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A9">2.8SIM卡续费（记账支付）</a></h5>
                                        <p> SIM可以进行续费办理，每张卡都绑定固定的套餐，续费金额为套餐代理价格。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/reNew</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data22" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data23" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                        "code": 0,
                                                        "message":
                                                        "success",
                                                        "result":
                                                        "670cf18683dd47d0a5d75798f56f0a8a"
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A10">2.9查询续费订单结果（记账支付）</a></h5>
                                        <p> SIM进行续费办理之后可以进行续费详情查询，查询返回结果包含订单数据和每张SIM订单详情数据</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/queryOrderDetail</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data24" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data25" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                             "code": 0,
                                                             "message":
                                                    "success",
                                                             "result": {
                                                                       "orderCode":
                                                    "SIM474534136195842048",
                                                                       "orderType": 0,
                                                                       "userId": 1,
                                                                       "amount": 102.00,
                                                                       "status": 1,
                                                                       "payMethod": 3,
                                                                       "orderPatform":
                                                    "SIM",
                                                                       "orerTime":
                                                    1533179354000,
                                                                       "payTime":
                                                    1533179361000,
                                                                       "details": [{
                                                                                "businessCode":
                                                    "SIM474534136195842048",
                                                                                "productId":
                                                    24,
                                                                                "userId":
                                                    1,
                                                                                "simNo":
                                                    "1000000359006",
                                                                                "simType":
                                                    "CMCC",
                                                                                "productName":
                                                    "34",
                                                                                "productPrice":
                                                    34.00,
                                                                                "productCount":
                                                    1,
                                                                                "facePrice":
                                                    34.00
                                                                       },
                                                                       {
                                                                                "businessCode":
                                                    "SIM474534136195842048",
                                                                                "productId":
                                                    24,
                                                                                "userId":
                                                    1,
                                                                                "simNo":
                                                    "1440293568251",
                                                                                "simType":
                                                    "CMCC",
                                                                                "productName":
                                                    "34",
                                                                                "productPrice":
                                                    34.00,
                                                                                "productCount":
                                                    1,
                                                                                "facePrice":
                                                    34.00
                                                                       },{
                                                                                "businessCode":
                                                    "SIM474534136195842048",
                                                                                "productId":
                                                    24,
                                                                                "userId":
                                                    1,
                                                                                "simNo":
                                                    "1440198807721",
                                                                                "simType":
                                                    "CMCC",
                                                                                "productName":
                                                    "34",
                                                                                "productPrice":
                                                    34.00,
                                                                                "productCount":
                                                    1,
                                                                                "facePrice":
                                                    34.00
                                                                       }]
                                                             }
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A11">2.10SIM卡叠加包续费（记账支付）</a></h5>
                                        <p> Sim卡套餐绑定了多个叠加包，开放api可以指定某一个节叠加包进行续费，续费的形式开放api记账形式</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/ open/order/buyOverlayPackage</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data26" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data27" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                      "code": 0,
                                                         "message":
                                                "success",
                                                         "result":
                                                "670cf18683dd47d0a5d75798f56f0a8a"
                                                }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A12">2.11批量套餐获取对应的叠加包信息</a></h5>
                                        <p> 输入批量套餐编号，套餐id使用逗号(,)隔开，返回每个套餐对应绑定的叠加包数据，返回是数组类型的JSON字符串。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/sim/queryOverlayPackage</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data28" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data29" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                               "code":
                                                        0,
                                                               "message":
                                                        "success",
                                                               "result":
                                                        [{
                                                                      "packageDetail":
                                                        {
                                                                             "id":
                                                        "25",
                                                                             "productId":
                                                        25,
                                                                             "simType":
                                                        "CMCC",
                                                                             "packageType":
                                                        1,
                                                                             "facePrice":
                                                        0.01,
                                                                             "flowType":
                                                        2,
                                                                             "totalFlow":
                                                        67,
                                                                             "unit":
                                                        "M",
                                                                             "period":
                                                        1,
                                                                             "isRecharge":
                                                        1,
                                                                             "introduction":
                                                        "",
                                                                             "proxyPrice":
                                                        null,
                                                                             "postpaid":
                                                        0,
                                                                             "postpaidLimit":
                                                        0,
                                                                             "settleMethod":
                                                        0,
                                                                             "productCode":
                                                        "67",
                                                                             "productType":
                                                        0,
                                                                             "productName":
                                                        "67套餐",
                                                                             "costPrice":
                                                        null,
                                                                             "proxyTopPrice":
                                                        0.01,
                                                                             "remark":
                                                        null,
                                                                             "commNumber":
                                                        null
                                                                      },
                                                                      "flowPackageDetails":
                                                        [{
                                                                             "id":
                                                        "34",
                                                                             "productId":
                                                        34,
                                                                             "simType":
                                                        "CMCC",
                                                                             "packageType":
                                                        2,
                                                                             "facePrice":
                                                        null,
                                                                             "flowType":
                                                        null,
                                                                             "totalFlow":
                                                        45,
                                                                             "unit":
                                                        "M",
                                                                             "period":
                                                        2,
                                                                             "isRecharge":
                                                        1,
                                                                             "introduction": null,
                                                                             "proxyPrice":
                                                        null,
                                                                             "postpaid":
                                                        null,
                                                                             "postpaidLimit":
                                                        null,
                                                                             "settleMethod":
                                                        null,
                                                                             "productCode":
                                                        "45",
                                                                             "productType":
                                                        0,
                                                                             "productName":
                                                        "45叠加包",
                                                                             "costPrice":
                                                        45.00,
                                                                             "proxyTopPrice":
                                                        45.00,
                                                                             "remark":
                                                        null,
                                                                             "commNumber":
                                                        null
                                                                      }]
                                                               }]
                                                        }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A13">2.12SIM卡续费创建订单（扫码支付）</a></h5>
                                        <p> 卡续费支持批量卡同时续费(同时支持1000张,逗号隔开),仅支持微信和支付宝两种支付宝方式，创建订单后，返回订单号和订单详情(每张卡费用状况)</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/payOrder/reNew</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data30" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data31" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                            "code":
                                                        0,
                                                            "message":
                                                        "success",
                                                            "result":
                                                        {
                                                               "orderCode":
                                                        "SIM486140312188616704",
                                                               "totalAmount":
                                                        80.0,
                                                               "items":
                                                        [{
                                                                   "simNo":
                                                        "1000000359006",
                                                                   "iccid":
                                                        null,
                                                                   "productId":
                                                        27,
                                                                   "productName":
                                                        "12号套餐",
                                                                   "price":
                                                        12.0
                                                               },
                                                               {
                                                                   "simNo":
                                                        "1440198807721",
                                                                   "iccid":
                                                        null,
                                                                   "productId":
                                                        24,
                                                                   "productName":
                                                        "34号套餐",
                                                                   "price":
                                                        34.0
                                                               },
                                                               {
                                                                   "simNo":
                                                        "1440293568251",
                                                                   "iccid":
                                                        null,
                                                                   "productId":
                                                        24,
                                                                   "productName":
                                                        "34号套餐",
                                                                   "price":
                                                        34.0
                                                               }]
                                                            }
                                                        }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A14">2.13根据订单号获取二维码（扫码支付）</a></h5>
                                        <p>创建订单后，根据订单号获取二维码，获取二维码的api可以变更支付类型，返回对应类型的二维码，获取二维码之后，可以手机微信或者支付宝进行支付</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/payOrder/getQrCode</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data32" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data33" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                            "code":
                                                        0,
                                                            "message":
                                                        "success",
                                                            "result":
                                                        "https://qr.alipay.com/bax09817f4zet5xfillz806c"
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A15">2.14支付之后通知支付（扫码支付）</a></h5>
                                        <p>调用者得到回调之后，需要通知支付来表明已经接收到回调(否则在一定时间内会定时回调notifyUrl)。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/payOrder/callBack</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data32" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data34" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                           "code":
                                                    0,
                                                           "message":
                                                    "success",
                                                           "result":
                                                    null
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                    <div>
                                        <h5><a id="A16">2.15SIM叠加包创建订单（扫码支付）</a></h5>
                                        <p>用户可以选用相同套餐的一批卡号，选择对应的叠加包作为一组数据，同时可以传多组数据进行办理，办理之后返回订单号码和订单明细表。</p>
                                        <p>调用地址：http://openapi.jimisim.com/gateway.do/open/payOrder/buyOverlayPackage</p>
                                        <p>参数：</p>
                                        <p><Table width="648" height="230" :columns="columns8" :data="data35" size="large"></Table></p>
                                        <p><Table width="648" height="230" :columns="columns9" :data="data36" size="large"></Table></p>
                                        <p>
                                            <pre>
                                                <code>
                                                    {
                                                             "code": 0,
                                                             "message":
                                                    "success",
                                                             "result": {
                                                                       "orderCode":
                                                    "SIM486213773145669632",
                                                                       "totalAmount":
                                                    65.0,
                                                                       "items": [{
                                                                                "simNo":
                                                    "1000000359006",
                                                                                "iccid":
                                                    null,
                                                                                "productId":
                                                    34,
                                                                                "productName":
                                                    "45",
                                                                                "price":
                                                    45.0
                                                                       },
                                                                       {
                                                                                "simNo":
                                                    "1440198807721",
                                                                                "iccid":
                                                    null,
                                                                                "productId":
                                                    89,
                                                                                "productName":
                                                    "测试",
                                                                                "price":
                                                    10.0
                                                                       },
                                                                       {
                                                                                "simNo":
                                                    "1440293568251",
                                                                                "iccid":
                                                    null,
                                                                                "productId":
                                                    89,
                                                                                "productName":
                                                    "测试",
                                                                                "price":
                                                    10.0
                                                                       }]
                                                             }
                                                    }
                                                </code>
                                            </pre>
                                        </p>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </Card>
                </Content>
            </Layout>
        </div>

        <!-- <Contact></Contact>
        <Footer></Footer>
        <Sidebar></Sidebar> -->

    </div>
</template>

<script>

// import Contact from "../../components/Contact.vue"
// import Footer from "../../components/Footer.vue"
// import Sidebar from "../../components/Sidebar.vue"

    export default {
        name: "apiWord",
        data (){
            return {
                // id: "",
                columns1: [
                    { title: '属性名称', key: 'name'},
                    { title: '描述', key: 'describe' },
                    { title: '值', key: 'val' }
                ],
                data1: [
                    { name: 'code', describe: "0-正常，非0-错误编号", val: '' },
                    { name: 'message', describe: "提示", val: '' },
                    { name: 'result', describe: "数据结果", val: '' }
                ],
                columns2: [
                    { title: '错误码', key: 'name'},
                    { title: '错误说明', key: 'describe' }
                ],
                data2: [
                    { name: '0', describe: "正常" },
                    { name: '1001', describe: "系统繁忙" },
                    { name: '1002', describe: "服务器异常" },
                    { name: '1003', describe: "参数验证不合法" },
                    { name: '1004', describe: "appkey 不存在" },
                    { name: '1005', describe: "非法访问,token异常" },
                    { name: '1006', describe: "token无效" },
                    { name: '1007', describe: "非法访问,请求频率过高" },
                    { name: '1008', describe: "验证失败，无法获取token" },
                    { name: '1009', describe: "token已经过期" },
                    { name: '1010', describe: "appkey和project_code不能为空" }
                ],
                columns3: [
                    { title: '错误码', key: 'name'},
                    { title: '错误说明', key: 'describe' }
                ],
                data3: [
                    { name: '0', describe: "正常" },
                    { name: '2001', describe: "系统繁忙" },
                    { name: '2002', describe: "处理异常" },
                    { name: '2003', describe: "参数验证不合法" },
                    { name: '2004', describe: "账户不存在" },
                    { name: '2005', describe: "密码错误" },
                    { name: '2006', describe: "SIM卡不存在" },
                    { name: '2007', describe: "SIM卡不存在或者SIM卡关联的套餐异常" },
                    { name: '2008', describe: "余额不足" },
                    { name: '2009', describe: "短信发送条数超过限制,请购买短信包" },
                    { name: '2010', describe: "短信发送失败" },
                    { name: '2011', describe: "停开机状态错误" },
                    { name: '2012', describe: "卡号长度超过1000，批量停开机无法办理" },
                    { name: '2013', describe: "套餐不存在" },
                    { name: '2014', describe: "一次性续费不能超过1000张SIM" },
                    { name: '2015', describe: "存在卡号发送短信失败" },
                    { name: '2016', describe: "一次最多查询1000张SIM卡信息" },
                    { name: '2017', describe: "一次最多发送10条信息" },
                    { name: '2018', describe: "此卡不属于该用户，无法操作" },
                    { name: '2019', describe: "获取订单失败" },
                    { name: '2020', describe: "该SIM套餐未绑定该叠加包" },
                    { name: '2021', describe: "续费卡号[%s]不存在" },
                    { name: '2022', describe: "支付类型不支持，只支持0=微信，1=支付宝" },
                    { name: '2023', describe: "卡号%s套餐和同组其他的卡不一样，无法办理叠加包" },
                    { name: '2024', describe: "叠加包内容格式错误，无法转换" },
                    { name: '2025', describe: "套餐id=%d和叠加包id=%d未关联" }
                ],
                columns4: [
                    { title: '接口名称', key: 'name'},
                    { title: '接口说明', key: 'describe' }
                ],
                data4: [
                    { name: 'jimi.openapi.auth.accessToken', describe: "Token获取" },
                    { name: 'jimi.openapi.sim.querySimInfo', describe: "单卡查询" },
                    { name: 'jimi.openapi.sim.querySimInfoList', describe: "批量卡查询" },
                    { name: 'jimi.openapi.sim.sendSms', describe: "短信发送" },
                    { name: 'openapi.sim.queryPackageBySimNo', describe: "查询卡套餐" },
                    { name: 'jimi.openapi.sim.batchChangeState', describe: "批量停开机" },
                    { name: 'jimi.openapi.sim.changeState', describe: "单卡停开机" },
                    { name: 'jimi.openapi.order.reNew', describe: "Sim卡续费" },
                    { name: 'jimi.openapi.order.queryOrderDetail', describe: "查询续费订单结果" },
                    { name: 'jimi.openapi.order.buyOverlayPackage', describe: "SIM卡叠加包续费" }
                ],
                columns5: [
                    { title: '参数', key: 'parameter'},
                    { title: '接口名称', key: 'name'},
                    { title: '备注', key: 'remarks' }
                ],
                data5: [
                    { parameter: 'app_key', name: '接入平台的app参数', remarks: "平台提供" },
                    { parameter: 'project_code', name: '项目编号', remarks: "jimi.sim.open" },
                    { parameter: 'method', name: '接口方法名称', remarks: "" },
                    { parameter: 'token', name: 'Token验证', remarks: "获取Token不需要发送，其他接口调用必须发送" },
                    { parameter: 'sign', name: '参数验证，确保在传输过程中未被篡改', remarks: "" },
                ],
                columns6: [
                    { title: '加密源（可进行对比校验）', key: 'encryption'},
                    { title: '加密结果', key: 'result'}
                ],
                data6: [
                    { encryption: '34b509dd6fac4dddaa2571144e596998accountadminapp_key19CFDB01BE354F8AB1FCC0C65A54AFC5methodjimi.openapi.auth.accessTokenpassword888888project_codejimi.sim.open34b509dd6fac4dddaa2571144e596998', result: '19E7FA4ACDC7240B7BCEABA7D4465A8E' }
                ],
                 columns7: [
                    { title: '平台参数', key: 'parameter'},
                    { title: '描述', key: 'describe' }
                ],
                data7: [
                    { parameter: 'app_key', describe: "平台提供" },
                    { parameter: 'app_secret', describe: "平台提供" },
                    { parameter: 'project_code', describe: "jimi.sim.open" }
                ],
                columns8: [
                    { title: '输入参数', key: 'input'},
                    { title: '说明', key: 'describe'},
                    { title: '值', key: 'val' }
                ],
                data8: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.auth.accessToken" },
                    { input: 'sign', describe: '参数验证', val: "" },
                ],
                columns9: [
                    { title: '输出参数', key: 'output'},
                    { title: '说明', key: 'describe'},
                    { title: '值', key: 'val' }
                ],
                data9: [
                    { output: 'result', describe: '返回token', val: "" }
                ],
                data10: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.querySimInfo" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'sim_no', describe: 'simNo 或者 iccid 或者 msisdn', val: "" }
                ],
                data11: [
                    { output: 'code', describe: '错误码', 
                        val: `0:正确；
                            2006: SIM卡不存在；
                            2018: 此卡不属于该用户，无法操作。
                        `
                    },
                    { output: 'groupNo', describe: '集团号', val: "" },
                    { output: 'Iccid', describe: '卡iccid', val: "" },
                    { output: 'msisdn', describe: 'msisdn', val: "" },
                    { output: 'simNo', describe: '卡号', val: "" },
                    { output: 'primaryCyc', describe: '初始周期', val: "" },
                    { output: 'simType', describe: '卡类型', val: "" },
                    { output: 'state', describe: '卡状态', val: "(0 =停机 1=开机 -1= 未激活 )" },
                    { output: 'terminalstatus', describe: '设备状态', val: "0=离线，1=在线" },
                    { output: 'importTime', describe: '导入时间', val: "" },
                    { output: 'bootTime', describe: '开机时间', val: "" },
                    { output: 'actcTime', describe: '开卡时间', val: "" },
                    { output: 'activateTime', describe: '激活时间', val: "" },
                    { output: 'lactTime', describe: '最晚激活时间', val: "" },
                    { output: 'stopTime', describe: '停机时间', val: "" },
                    { output: 'deliTime', describe: '出库时间', val: "" },
                    { output: 'dueTime', describe: '过期时间', val: "" },
                    { output: 'decMark', describe: '备注', val: "" },
                    { output: 'unit', describe: '(年,月,日)', val: "Y 年， M月， D日" },
                    { output: 'cardType', describe: '卡商类型', val: "" },
                    { output: 'useredFlow', describe: '已使用流量', val: "" },
                    { output: 'remainderFlow', describe: '剩余流量', val: "" }
                ],
                data12: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.querySimInfoList" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simno_array', describe: 'simNo 或者 iccid 或者 msisdn', val: "必须用逗号隔开，不能超过1000" }
                ],
                data13: [
                    { output: 'code', describe: '错误码', val: "0:成功;   2016：一次最多查询10张SIM卡信息" },
                    { output: 'result', describe: '返回结果参照2.2（获取单卡信息）', val: "result 是数组结构数据;   注意：如果查询4个号，只返回3个号，则没有返回的SIM卡不属于该用户或者下级用户，所以无法返回" }
                ],
                data14: [
                    { output: 'code', describe: '错误码', val: "0:成功；2006：SIM卡不存在；2013：套餐不存在；2018：此卡不属于该用户，无法操作" },
                    { output: 'packageDetail', describe: '套餐信息', val: "SIM卡对应绑定一种套餐" },
                    { output: 'flowPackageDetails', describe: '套餐绑定可选叠加包', val: "套餐绑定多种可选叠加包，数组形式" },
                    { output: 'id', describe: '套餐id', val: "" },
                    { output: 'productId', describe: '产品id', val: "" },
                    { output: 'simType', describe: '运营商', val: "CMCC-中国移动；UNICOM-中国联通；SCCMCC-四川移动" },
                    { output: 'packageType', describe: '套餐类型', val: "1.套餐 2.流量包" },
                    { output: 'facePrice', describe: '面额', val: "" },
                    { output: 'flowType', describe: '流量类型', val: "1.总共 2.每月" },
                    { output: 'totalFlow', describe: '总共流量', val: "套餐总流量" },
                    { output: 'unit', describe: '单位', val: "M" },
                    { output: 'period', describe: '有效期', val: "" },
                    { output: 'isRecharge', describe: '', val: "0不可续费 1可续费" },
                    { output: 'introduction', describe: '介绍', val: "" },
                    { output: 'proxyPrice', describe: '代理价格', val: "" },
                    { output: 'postpaid', describe: '是否支持后付费', val: "0-不支持 1-支持" },
                    { output: 'postpaidLimit', describe: '后付费最高设置', val: "流量M" },
                    { output: 'productCode', describe: '产品编号', val: "" },
                    { output: 'productType', describe: '产品类型', val: "0 SIM, 1 设备, 2 UI皮肤 3 电话套餐 ,4 短信套餐,5 充值卡" },
                    { output: 'productName', describe: '产品名称', val: "" },
                    { output: 'proxyTopPrice', describe: '最高代理价格', val: "" },
                    { output: 'remark', describe: '介绍', val: "" },
                    { output: 'commNumber', describe: '分钟数/短信条数', val: "" },
                ],
                data15: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.auth.accessToken" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNos', describe: '批量simNo(iccid、msidn都可以)', val: "必须用逗号隔开，不能超过10张" },
                    { input: 'content', describe: '发送内容', val: "" }
                ],
                data16: [
                    { output: 'simNo', describe: '卡号', val: "" },
                    { output: 'cause', describe: '失败原因', val: "" },
                    { output: 'code', describe: 'code错误码', val: "0=成功；2015=存在卡号发送短信失败；2017=一次最多发送10条信息" },
                    { output: 'failCode', describe: '单卡失败错误码', val: "2008=余额不足；2009=短信发送条数超过限制,请购买短信包；2010=短信发送失败" }
                ],
                data17: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.batchChangeState" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNos', describe: '批量simNo', val: "必须用逗号隔开，不能超过1000" },
                    { input: 'state', describe: '停复机代号', val: "是停机，1=是开机" }
                ],
                data18: [
                    { output: 'code', describe: '', val: "0:提交成功；2011: 停开机状态错误；2012:卡号长度超过1000，批量停开机无法办理；注意：成功只代表提交成功，一定能够停复机，能否停复机取决于运营商处理结果" }
                ],
                data19: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.batchChangeState" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNo', describe: '卡号', val: "开机SIM卡号" },
                    { input: 'state', describe: '停复机代号', val: "是停机，1=是开机" }
                ],
                data20: [
                    { output: 'code', describe: '', val: "0:成功提交；2002: 处理异常；2011: 停开机状态错误；2016: SIM卡不存在；2018: 此卡不属于该用户，无法操作；注意：成功只代表提交成功，一定能够停复机，能否停复机取决于运营商处理结果" }
                ],
                data21: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.queryPackageBySimNo" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNo', describe: 'simNo 或者 iccid 或者 msisdn', val: "" }
                ],
                data22: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.order.reNew" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNos', describe: '批量SIM卡号', val: "必须用逗号隔开，不能超过1000" }
                ],
                data23: [
                    { output: 'code', describe: '错误码', val: "2014=次性续费不能超过1000张SIM；0=正常" },
                    { output: 'result', describe: '充值订单唯一id', val: "" }
                ],
                data24: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.order.queryOrderDetail" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'orderNo', describe: '订单id', val: "续费返回的订单id" }
                ],
                data25: [
                    { output: 'code', describe: '错误码', val: "2019=取订单失败；0=正常" },
                    { output: 'orderCode', describe: '订单编号', val: "" },
                    { output: 'orderType', describe: '订单类型', val: "0=SIM卡续费；1=设备；2=UI皮肤；3=电话套餐；4=短信套餐；5=充值卡；6=流量卡短信" },
                    { output: 'userId', describe: '操作用户id', val: "" },
                    { output: 'amount', describe: '充值总金额', val: "单位元" },
                    { output: 'status', describe: '状态', val: "0=未支付；1=已支付" },
                    { output: 'payMethod', describe: '支付方式', val: "0=微信；1=支付宝；2=记账支付；3=openapi记账支付" },
                    { output: 'orderPatform', describe: '平台', val: "" },
                    { output: 'orerTime', describe: '订单生成时间', val: "" },
                    { output: 'payTime', describe: '支付时间', val: "" },
                    { output: 'businessCode', describe: '业务标识', val: "" },
                    { output: 'productId', describe: '套餐的商品id', val: "" },
                    { output: 'userId', describe: '操作用户id', val: "" },
                    { output: 'simNo', describe: '充值卡号', val: "" },
                    { output: 'simType', describe: '充值卡类型', val: "CMCC-中国移动；UNICOM-中国联通；SCCMCC-四川移动" },
                    { output: 'productName', describe: '绑定的套餐名称', val: "" },
                    { output: 'productPrice', describe: '套餐价格', val: "单位元" },
                    { output: 'productCount', describe: '续费的数量', val: "" },
                    { output: 'facePrice', describe: '面额', val: "单位元" },
                ],
                data26: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.order.buyOverlayPackage" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNo', describe: 'Sim卡号', val: "只能单个sim卡" },
                    { input: 'packageId', describe: '叠加包id', val: "" }
                ],
                data27: [
                    { output: 'code', describe: '错误码', val: "2006=SIM卡不存在；2018=此卡不属于该用户，无法操作；2013=套餐不存在；2020=该SIM套餐未绑定该叠加包 ；0=正常" },
                    { output: 'result', describe: '充值订单唯一id', val: "和套餐续费返回数据一致" }
                ],
                data28: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.sim.queryOverlayPackage" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'packageIds', describe: '套餐id', val: "逗号隔开" }
                ],
                data29: [
                    { output: 'code', describe: '错误码', val: "0=正常" },
                    { output: 'result', describe: '一个套餐对应多个叠加包，packageDetail为套餐数据，flowPackageDetails为数组，多个叠加包信息', val: "" },
                    { output: 'packageDetail', describe: '套餐信息', val: "SIM卡对应绑定一种套餐" },
                    { output: 'flowPackageDetails', describe: '套餐绑定可选叠加包', val: "套餐绑定多种可选叠加包，数组形式" },
                    { output: 'id', describe: '套餐id', val: "" },
                    { output: 'productId', describe: '产品id', val: "" },
                    { output: 'simType', describe: '充值卡类型', val: "CMCC-中国移动；UNICOM-中国联通；SCCMCC-四川移动" },
                    { output: 'packageType', describe: '套餐类型', val: "1.套餐 2.流量包" },
                    { output: 'facePrice', describe: '面额', val: "" },
                    { output: 'flowType', describe: '流量类型', val: "1.总共 2.每月" },
                    { output: 'totalFlow', describe: '总共流量', val: "套餐总流量" },
                    { output: 'unit', describe: '单位', val: "M" },
                    { output: 'period', describe: '有效期', val: "" },
                    { output: 'isRecharge', describe: '', val: "0不可续费； 1可续费" },
                    { output: 'introduction', describe: '介绍', val: "" },
                    { output: 'proxyPrice', describe: '代理价格', val: "" },
                    { output: 'postpaid', describe: '是否支持后付费', val: "0-不支持； 1-支持" },
                    { output: 'postpaidLimit', describe: '后付费最高设置', val: "流量M" },
                    { output: 'productCode', describe: '产品编号', val: "" },
                    { output: 'productType', describe: '产品类型', val: "0 SIM； 1 设备； 2 UI皮肤； 3 电话套餐；4 短信套餐；5 充值卡" },
                    { output: 'productName', describe: '产品名称', val: "" },
                    { output: 'proxyTopPrice', describe: '最高代理价格', val: "" },
                    { output: 'remark', describe: '介绍', val: "" },
                    { output: 'commNumber', describe: '分钟数/短信条数', val: "" }
                ],
                data30: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.payOrder.reNew" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'simNos', describe: '批量Sim卡号', val: "逗号隔开" },
                    { input: 'payType', describe: '支付类型', val: "0=微信；1=支付宝" },
                    { input: 'notifyUrl', describe: '回调地址', val: "当支付完成之后，执行调用者的业务逻辑" }
                ],
                data31: [
                    { output: 'code', describe: '错误码', val: "0=正常；2014=续费不能超过1000张SIM；2021=卡号1,卡号2…卡号n不存在；2022=类型不支持，只支持0=微信，1=支付宝；2002=处理异常" },
                    { output: 'result', describe: '返回订单号、总额、订单每一项的详情', val: "" },
                    { output: 'orderCode', describe: '订单号', val: "" },
                    { output: 'totalAmount', describe: '支付总额', val: "Double类型" },
                    { output: 'simNo', describe: 'Sim卡号', val: "" },
                    { output: 'Iccid', describe: 'Iccid唯一码', val: "" },
                    { output: 'productId', describe: '套餐的productid', val: "" },
                    { output: 'productName', describe: '套餐名称', val: "" },
                    { output: 'price', describe: '该张卡的续费价格', val: "" }
                ],
                data32: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.payOrder.getQrCode" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'orderCode', describe: '订单号', val: "详见SIM卡续费创建订单（扫码支付）" },
                ],
                data33: [
                    { output: 'code', describe: '错误码', val: "0=正常；2022=类型不支持，只支持0=微信，1=支付宝；2002=处理异常" },
                    { output: 'result', describe: '返回二维码', val: "" }
                ],
                data34: [
                    { output: 'code', describe: '错误码', val: "0=正常" },
                    { output: 'result', describe: '无', val: "" }
                ],
                data35: [
                    { input: 'app_key', describe: '接入平台的app参数', val: "平台提供" },
                    { input: 'project_code', describe: '项目编号', val: "jimi.sim.open" },
                    { input: 'method', describe: '方法名称', val: "jimi.openapi.payOrder.getQrCode" },
                    { input: 'sign', describe: '参数验证', val: "" },
                    { input: 'token', describe: 'Token验证', val: "" },
                    { input: 'overlayData', describe: 'SIM卡套餐和叠加包关联关系', val: `Json格式，范例：
                            [{
                                     "overlayPakcageId": 34,
                                     "packageId": 27,
                                     "simNos":
                            "1000000359006"
                            },
                            {
                                     "overlayPakcageId": 54,
                                     "packageId": 24,
                                     "simNos":"1440198807721,1440293568251"
                            }]
                            overlayPakcageId：叠加包id
                            packageId:套餐id
                            simNos:批量办理卡号，逗号隔开` },
                    { input: 'payType', describe: '支付方式', val: "0=微信 1=支付宝" },
                    { input: 'notifyUrl', describe: '回调地址', val: "支付完成后回调系统逻辑" },
                ],
                data36: [
                    { output: 'code', describe: '错误码', val: "0=正常；2024=叠加包内容格式错误，无法转换；2022=类型不支持，只支持0=微信，1=支付宝；2025=套餐id=%d和叠加包id=%d未关联；2023=卡号%s套餐和同组其他的卡不一样，无法办理叠加包；2021=续费卡号[%s]不存在；2014=次性续费不能超过1000张SIM；2002=处理异常" },
                    { output: 'result', describe: '无', val: "" },
                    { output: 'orderCode', describe: '订单号', val: "" },
                    { output: 'totalAmount', describe: '支付金额', val: "Double类型" },
                    { output: 'items', describe: '支付明细', val: "JSONObject类型" },
                    { output: 'simNo', describe: '卡号', val: "批量用逗号隔开" },
                    { output: 'iccid', describe: 'Iccid唯一值', val: "" },
                    { output: 'productId', describe: '产品id', val: "" },
                    { output: 'productName', describe: '叠加包名称', val: "" },
                    { output: 'price', describe: '叠加包价格', val: "" },
                ]




            }
        },
        created(){
            this.$nextTick(()=>{this.goScroll()})
        },
        mounted() {
            let that = this
            that.$nextTick(function(){
                window.addEventListener("scroll", that.handleScroll)
            })
            // this.goScroll()
        },
        methods: {
            scroll(selector) {
                var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
                document.body.scrollTop = anchor.offsetTop; // chrome
                document.documentElement.scrollTop = anchor.offsetTop; // firefox  
            },
            goScroll(){
                let selector = sessionStorage.getItem("ids")
                var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
                // console.log(selector)
                if(selector){
                    // toElement.scrollIntoView()
                    document.body.scrollTop = anchor.offsetTop; // chrome
                    document.documentElement.scrollTop = anchor.offsetTop; // firefox  
                    // sessionStorage.removeItem("ids")//删除指定key本地存储的值。
                } 
            }
        },
        destroyed(){
            sessionStorage.setItem("ids","");
        }
    }
</script>

<style scoped>
.layout{
    width: 1180px;
    margin: 0 auto;
    padding-top: 88px;
    /* margin-top: 88px; */
}
.bigtitle{
    width: 100%;
    height:77px;
    /* background:rgba(14,15,53,1); */
    font-size:23px;
    font-weight:400;
    /* color:rgba(255,255,255,1); */
    text-align: center;
    line-height: 77px;
}
.layout >>> .ivu-menu{
    font-size:20px;
    font-weight:400;
    /* color:rgba(255,255,255,1); */
}
/* .layout >>> .ivu-menu-dark{
    background: rgba(39,43,90,1);
} */
.layout >>> .ivu-breadcrumb{
    margin: 20px 30px;
    font-size:20px;
    font-weight:400;
    color:rgba(51,51,51,1);
}
.layout >>> .ivu-layout-sider{
    background: #fff;
}
.layout >>> .ivu-menu-item{
    font-size:18px;
    font-weight:400;
}
.shutdown-con h3{
    width: 100%;
    height: 30px;
    margin-bottom: 127px;
    font-size:30px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height: 30px;
}
.shutdown-con>div{
    margin-bottom: 150px;
}
.shutdown-con>div>div{
    margin-bottom: 120px;
}
.shutdown-con h4{
    margin-bottom: 100px;
    font-size:20px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con h5{
    margin-bottom: 30px;
    font-size:18px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con p{
    margin: 15px auto;
    font-size:16px;
    font-weight:500;
    color:rgba(51,51,51,1);
}
.shutdown-con img{
    width: 300px;
}
.overflow >>> .ivu-menu{
    height: 120vh;
    /* overflow-y: scroll; */
}
pre{
    width: 518px;
    height: 233px;
    border: 1px solid rgba(223,223,223,1);
    overflow: scroll;
    white-space:pre-line;
    display: block;
    position: unset;
}
code{
    display: block;
}
.sel a {
    display: block;
    width: 100%;
    text-decoration:none;
    color: #000;
}
.shutdown-con a{
    display: block;
    width: 100%;
    text-decoration:none;
    color:rgba(51,51,51,1);
}
</style>