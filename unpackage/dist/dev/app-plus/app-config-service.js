
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabbar/index/index","pages/tabbar/learn/learn","pages/tabbar/home/home","pages/login/login","pages/bind-phone/bind-phone","pages/forget/forget","pages/setting/setting","pages/my-coupon/my-coupon","pages/user-safe/user-safe","pages/user-info/user-info","pages/order-list/order-list","pages/search/search","pages/search-result/search-result","pages/course/course","pages/column/column","pages/test-list/test-list","pages/test-detail/test-detail","pages/my-test/my-test","pages/bbs/bbs","pages/add-post/add-post","pages/post-detail/post-detail","pages/my-post/my-post","pages/book-list/book-list","pages/book-detail/book-detail","pages/book/book","pages/msg-list/msg-list","pages/fava-list/fava-list","pages/list/list","pages/create-order/create-order","pages/h5pay/h5pay","pages/live/live","pages/webview/webview","pages/my-book/my-book"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uniapp在线教育","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF","background":"#FFFFFF"},"tabBar":{"color":"#BBBAC7","selectedColor":"#2C2C2C","borderStyle":"black","list":[{"iconPath":"/static/tabbar/index1.png","pagePath":"pages/tabbar/index/index","selectedIconPath":"/static/tabbar/index1_selected.png","text":"首页"},{"iconPath":"/static/tabbar/learn.png","pagePath":"pages/tabbar/learn/learn","selectedIconPath":"/static/tabbar/learn_selected.png","text":"学习"},{"iconPath":"/static/tabbar/home.png","pagePath":"pages/tabbar/home/home","selectedIconPath":"/static/tabbar/home_selected.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uniapp在线教育","compilerVersion":"3.3.13","entryPagePath":"pages/tabbar/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabbar/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"titleNView":false}},{"path":"/pages/tabbar/learn/learn","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"学习进度","enablePullDownRefresh":false}},{"path":"/pages/tabbar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#5ccc84","navigationBarTextStyle":"white","titleNView":{"titleText":"我的","titleAlign":"left","buttons":[{"type":"menu"}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/bind-phone/bind-phone","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/forget/forget","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":false}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"我的设置","enablePullDownRefresh":false}},{"path":"/pages/my-coupon/my-coupon","meta":{},"window":{"navigationBarTitleText":"我的优惠券","enablePullDownRefresh":true}},{"path":"/pages/user-safe/user-safe","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/user-info/user-info","meta":{},"window":{"navigationBarTitleText":"编辑资料","enablePullDownRefresh":false}},{"path":"/pages/order-list/order-list","meta":{},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"searchInput":{"align":"left","autoFocus":true,"backgroundColor":"#F6F9FB","borderRadius":"50px","placeholder":"输入搜索关键词"},"buttons":[{"text":"搜索","fontSize":"15px"}]}}},{"path":"/pages/search-result/search-result","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"titleNView":{"searchInput":{"align":"left","backgroundColor":"#F6F9FB","borderRadius":"50px","placeholder":"输入搜索关键词","disabled":true}}}},{"path":"/pages/course/course","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/column/column","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/test-list/test-list","meta":{},"window":{"navigationBarTitleText":"考场列表","enablePullDownRefresh":true}},{"path":"/pages/test-detail/test-detail","meta":{},"window":{"navigationBarTitleText":"开始考试","enablePullDownRefresh":false}},{"path":"/pages/my-test/my-test","meta":{},"window":{"navigationBarTitleText":"我的考试记录","enablePullDownRefresh":true}},{"path":"/pages/bbs/bbs","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":true,"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F5F4","placeholder":"输入搜索帖子","placeholderColor":"#999999","borderRadius":"3px","disabled":false},"buttons":[{"fontSrc":"/static/iconfont.ttf","text":"","fontSize":"20px","float":"right"}]}}},{"path":"/pages/add-post/add-post","meta":{},"window":{"navigationBarTitleText":"新增帖子","enablePullDownRefresh":false,"titleNView":{"buttons":[{"text":"发布","fontSize":"14px"}]}}},{"path":"/pages/post-detail/post-detail","meta":{},"window":{"navigationBarTitleText":"帖子详情","enablePullDownRefresh":false}},{"path":"/pages/my-post/my-post","meta":{},"window":{"navigationBarTitleText":"我的帖子","enablePullDownRefresh":true}},{"path":"/pages/book-list/book-list","meta":{},"window":{"navigationBarTitleText":"电子书列表","enablePullDownRefresh":true}},{"path":"/pages/book-detail/book-detail","meta":{},"window":{"navigationBarTitleText":"电子书详情","enablePullDownRefresh":false}},{"path":"/pages/book/book","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/msg-list/msg-list","meta":{},"window":{"navigationBarTitleText":"消息列表","enablePullDownRefresh":true}},{"path":"/pages/fava-list/fava-list","meta":{},"window":{"navigationBarTitleText":"收藏列表","enablePullDownRefresh":true}},{"path":"/pages/list/list","meta":{},"window":{"navigationBarTitleText":"列表页","enablePullDownRefresh":true}},{"path":"/pages/create-order/create-order","meta":{},"window":{"navigationBarTitleText":"创建订单","enablePullDownRefresh":false}},{"path":"/pages/h5pay/h5pay","meta":{},"window":{"navigationBarTitleText":"微信H5支付","enablePullDownRefresh":false}},{"path":"/pages/live/live","meta":{},"window":{"navigationBarTitleText":"直播详情页","enablePullDownRefresh":false}},{"path":"/pages/webview/webview","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/my-book/my-book","meta":{},"window":{"navigationBarTitleText":"我的电子书","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
