### 大麦网
一个基于node环境下使用了gulp+webpack工具同时应用了用了MVC结构的spa应用框架，在其中开发大麦网项目

主要结构：rmvc 分为路由,数据,视图以及控制层的spa结构   
当浏览器请求页面的时候路由器根据地址栏的hash值变化来 调用控制层去得到数据 并控制视图层的页面的渲染 由于这个过程中 视图层和数据层没有交互 所以这个结构并不是完整的mvc结构 也可以叫做mvp结构

数据渲染方式 bsr：前端发送ajax请求来获取数据 并且自己渲染到页面上  前后端分离

接口加密 使用的是mock数据 json-server 

自适应布局 采用了淘宝弹性布局方案 flexble.js
handlebars模板引擎

### 项目目录结构

* src (开发目录)
* config（配置目录）
* gulpfile-dev.js （开发环境所需gulp启动文件）
* gulpfile-build.js （生产环境所需gulp启动文件）


### 主要功能的实现

### 开发中遇到的问题 

* 给导航条的加上fixed定位 想要实现在滚动的时候导航条固定在页面上方
* 给导航条的加上fixed定位 想要实现在滚动的时候导航条固定在页面上方 但是一直加不上 不去作用 百度才知道 是由于父元素有transform属性 解决办法是 把父元素的tranform属性去掉 或者给父元素设置成display：inline  但由于父元素应用了better-scroll框架 所以不能改他的样式  最后写了两个导航条 通过scrolly值来判断显隐
