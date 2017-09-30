/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 material design 风格的背景样式
    http://thezinx.com/wallpapers/25-material-design-wallpapers/
    @param colorPalette {?Array.<Array.<String, String>>}
           用于搭配浅色字体的背景色若干组，每组各含深色和浅色，均为颜色的色值字符串。
           例如： [ ['#F44336', '#D32F2F'], ['#E91E63', '#C2185B'] ]
    */
    initBackground: function initBackground(colorPalette) {

        var _colorPalette = void 0;

        if (!Array.isArray(colorPalette)) {
            // 未提供有效的色值数组时，使用从material design的调色板内选取的默认数组
            // https://material.io/guidelines/style/color.html#color-color-palette
            _colorPalette = [['#F44336', '#D32F2F'], // red
            ['#E91E63', '#C2185B'], // pink
            ['#9C27B0', '#7B1FA2'], // purple

            ['#673AB7', '#512DA8'], // deep purple
            ['#3F51B5', '#303F9F'], // indigo
            ['#2196F3', '#1976D2'], // blue

            ['#039BE5', '#0277BD'], // light blue
            ['#0097A7', '#006064'], // cyan
            ['#009688', '#00796B'], // teal

            ['#43A047', '#2E7D32'], // green
            ['#689F38', '#33691E'], // light green
            ['#AFB42B', '#827717'], // lime

            ['#FF5722', '#E64A19'], // orange
            ['#795548', '#5D4037'], // brown
            ['#757575', '#424242'], // gray

            ['#607D8B', '#455A64']];
        } else {
            _colorPalette = colorPalette;
        }

        var paletteLength = _colorPalette.length;

        // 对已用配色的统计。当目标元素的个数小于调色板数组长度时，禁止产生相同的配色
        var usedPaletteIndexes = [];

        this.each(function () {

            var $backgroundContainer = $(this);

            var paletteIndex = Math.floor(Math.random() * paletteLength);
            if (usedPaletteIndexes.length < paletteLength + 1) {
                while (true) {
                    if (usedPaletteIndexes.indexOf(paletteIndex) === -1) {
                        usedPaletteIndexes.push(paletteIndex);
                        break;
                    } else {
                        paletteIndex = Math.floor(Math.random() * paletteLength);
                    }
                }
            }

            // 生成背景色块的容器元素，设置其背景颜色为指定配色，旋转 0 | 180 度
            var wrapRotateAngle = Math.floor(Math.random() * 2) * 180;
            var wrapHTML = '<div class="jm-bg-wrap"\n                                 style="transform: rotate(' + wrapRotateAngle + 'deg);\n                                        background-color: ' + _colorPalette[paletteIndex][0] + ';">\n                            </div>';
            var $mdBgWrap = $(wrapHTML);

            // 生成一定数量范围内的背景色块元素，设置一定范围内的宽度，设置2种盒阴影之一，设置其背景颜色为指定配色，旋转 1 - 360 度
            var blocksHTML = '';
            var blocksCount = Math.floor(Math.random() * 2 + 2);
            for (var i = 0; i < blocksCount; i++) {
                var shadowStrength = Math.random() < .5 ? 'light' : 'strong';
                var width = Math.floor(Math.random() * 200 + 100);
                var rotateAngle = Math.floor(Math.random() * 180 + 1);
                blocksHTML += '<div class="jm-bg-block jm-shadow-' + shadowStrength + '"\n                                    style="width: ' + width + 'px;\n                                           transform: rotate(' + rotateAngle + 'deg);\n                                           background-color: ' + _colorPalette[paletteIndex][1] + '">\n                               </div>';
            }

            // append色块容器后，使其显示
            $mdBgWrap.html(blocksHTML);
            $backgroundContainer.append($mdBgWrap);
            $mdBgWrap.show();
        });
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 angular material 风格的按钮
    https://material.angularjs.org/latest/demo/button
    目标元素可配置的属性：
        - data-text 按钮内容文字。不提供时，按钮内容为一个.icon元素，需在样式表内自行设置背景url
        - data-tooltip-content 浮动提示条的内容文字。不提供时，不显示浮动提示条
        - data-tooltip-position 浮动提示条的位置。不提供时默认为'top'
    */
    initButton: function initButton() {
        this.each(function () {
            var $button = $(this).data('animating', false);

            /*
            拼接按钮内容HTML
            - 如有有效的data-text属性则按钮内容为字符
            - 否则内容为一个icon，在样式表内自行定义。这时给按钮元素添加_round类
            */
            var textContent = $button.data('text');
            var buttonContentHTML = '';
            if (typeof textContent === 'string' && /\S/.test(textContent)) {
                buttonContentHTML = '<span class="content">' + textContent + '</span>';
            } else {
                buttonContentHTML = '<span class="icon-wrap"><i class="icon"></i></span>';
                $button.addClass('_round');
            }

            /*
            拼接浮动提示条HTML
            - 如有有效的data-tooltip-content属性则追加一个浮动提示条元素
            - 如有data-tooltip-position属性则按其设置提示条位置，默认为top
            */
            var tooltipHTML = '';
            var tooltipContent = $button.data('tooltipContent');
            if (typeof tooltipContent === 'string') {
                var tooltipPosition = $button.data('tooltipPosition') || 'top';
                tooltipHTML = '\n                    <p class="jm-tooltip to-show-at-' + tooltipPosition + '">\n                        ' + tooltipContent + '\n                    </p>';
                $button.addClass('show-tooltip');
            }

            var buttonHTML = '\n                ' + buttonContentHTML + '\n                <div class="ripple-container"><span class="ripple"></span></div>\n                ' + tooltipHTML;

            $button.html(buttonHTML);

            $('body').on('mousedown', '.jm-button:not(._disabled)', function (evt) {
                var $this = $(this);
                if ($this.data('animating') === false) {
                    $this.data('clicked', true);
                    var $ripple = $this.find('.ripple');
                    var _x = evt.offsetX;
                    var _y = evt.offsetY;
                    var _width = $this.innerWidth();
                    var _height = $this.innerHeight();
                    // 根据事件坐标和按钮水平中点的距离，获取波纹的直径
                    var offsetToHorizontalCenter = _width / 2 - _x;
                    var offsetToVerticalCenter = _height / 2 - _y;
                    var sideLength = _width + Math.abs(offsetToHorizontalCenter) * 2 + _width / 10;
                    $ripple.css({
                        width: sideLength,
                        height: sideLength,
                        left: (_width - sideLength) / 2 - offsetToHorizontalCenter,
                        top: (_height - sideLength) / 2 - offsetToVerticalCenter
                    });
                    $this.addClass('mousedown');
                }
            }).on('mouseup mouseout', '.jm-button:not(._disabled)', function () {
                var $this = $(this);
                if ($this.data('animating') === false && $this.data('clicked') === true) {

                    // 设置timeout，避免mousedown事件持续时间过短导致的闪烁
                    setTimeout(function () {

                        $this.data({
                            animating: true,
                            clicked: false
                        });
                        $this.removeClass('mousedown').addClass('mouseup');
                        setTimeout(function () {
                            $this.removeClass('mouseup');
                            $this.data('animating', false);
                        }, 550);
                    }, 250);
                }
            });

            // 浮动提示条
            $('body').on('mouseenter', '.show-tooltip', function (evt) {
                $(this).children('.jm-tooltip').addClass('show');
            }).on('mouseleave', '.show-tooltip', function (evt) {
                $(this).children('.jm-tooltip').removeClass('show');
            });
        });
    }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function noop() {}

/**
生成 angular material 风格的模态对话框
https://material.angularjs.org/latest/demo/dialog
@param options {Object}
    - dialogType {?String} 对话框类型，可为'alert'、'confirm'或'prompt'。不提供时为'alert'
    - title {?String} 对话框标题文字。不提供时为'unnamed dialog'
    - content {?String} 对话框内容文字。不提供时为'default content'
    - confirmButtonText {?String} 确认按钮的内容文字。不提供时为'confirm'
    - cancelButtonText {?String} 取消按钮的内容文字。不提供时为'cancel'
    - onConfirm {?Function} 确认按钮的点击回调。不提供时为一个空方法
    - onCancel {?Function} 取消按钮的点击回调。不提供时为一个空方法
    - promptDataArr {?Array.<Object>} prompt框的数据对象数组。当dialogType为prompt时必须提供
    - onDialogReady (?Function) 对话框DOM就绪时的回调，可在内部进行样式、监听等的处理。不提供时为一个空方法
*/
$.showJmDialog = function (options) {

    var dialogType = options.dialogType ? options.dialogType : 'alert';

    var title = options.title || 'unnamed dialog';
    var content = options.content || 'default content';
    var confirmButtonText = options.confirmButtonText || 'confirm';
    var cancelButtonText = options.cancelButtonText || 'cancel';
    var onConfirm = typeof options.onConfirm === 'function' ? options.onConfirm : noop;
    var onCancel = typeof options.onCancel === 'function' ? options.onCancel : noop;
    var onDialogReady = typeof options.onDialogReady === 'function' ? options.onDialogReady : noop;
    var promptDataArr = options.promptDataArr;

    var jmDialogHTML = void 0;

    switch (dialogType) {
        case 'alert':
            jmDialogHTML = '\n                <div class="jm-dialog-wrap">\n                    <div class="jm-dialog">\n                        <h1 class="dialog-title">' + title + '</h1>\n                        <p class="dialog-content">' + content + '</p>\n                        <div class="buttons">\n                            <button id="jm-dialog-confirm" class="jm-button _flat _primary full-width" data-animating="false">\n                                <span class="content">' + confirmButtonText + '</span>\n                                <div class="ripple-container"><span class="ripple"></span></div>\n                            </button>\n                         </div>\n                    </div>\n                </div>';
            break;
        case 'confirm':
            jmDialogHTML = '\n                <div class="jm-dialog-wrap">\n                    <div class="jm-dialog">\n                        <h1 class="dialog-title">' + title + '</h1>\n                        <p class="dialog-content">' + content + '</p>\n                        <div class="buttons">\n                            <button id="jm-dialog-cancel" class="jm-button _flat" data-animating="false">\n                                <span class="content">' + cancelButtonText + '</span>\n                                <div class="ripple-container"><span class="ripple"></span></div>\n                            </button>\n                            <button id="jm-dialog-confirm" class="jm-button _flat _primary" data-animating="false">\n                                <span class="content">' + confirmButtonText + '</span>\n                                <div class="ripple-container"><span class="ripple"></span></div>\n                            </button>\n                         </div>\n                    </div>\n                </div>';
            break;
        case 'prompt':
            // 选择了prompt类型但未提供promptDataArr数组时抛出
            if (!Array.isArray(promptDataArr)) {
                throw new TypeError('Expecting parameter "options.promptDataArr" as {Array.<Object>}');
            }
            jmDialogHTML = '\n                <div class="jm-dialog-wrap">\n                    <div class="jm-dialog">\n                        <h1 class="dialog-title">' + title + '</h1>\n                        <p class="dialog-content">' + content + '</p>\n                        ' + promptDataArr.map(function (item, index) {
                return '<input id="jm-prompt-input-' + (index + 1) + '"\n                                           class="prompt-input"\n                                           placeholder="' + item.name + '"\n                                           value="' + item.value + '"\n                                           spellcheck="false" />';
            }).join('') + '\n                        <div class="buttons">\n                            <button id="jm-dialog-cancel" class="jm-button _flat" data-animating="false">\n                                <span class="content">' + cancelButtonText + '</span>\n                                <div class="ripple-container"><span class="ripple"></span></div>\n                            </button>\n                            <button id="jm-dialog-confirm" class="jm-button _flat _primary" data-animating="false">\n                                <span class="content">' + confirmButtonText + '</span>\n                                <div class="ripple-container"><span class="ripple"></span></div>\n                            </button>\n                         </div>\n                    </div>\n                </div>';
    }

    var $body = $('body').append($(jmDialogHTML));
    var $wrap = $('.jm-dialog-wrap');
    var $dialog = $wrap.children('.jm-dialog');

    $body.addClass('no-scroll');
    $dialog.css('transform-origin', '0 0');

    $dialog.on('click', function (evt) {
        var $buttonClicked = $(evt.target).closest('.jm-button');
        if (!$buttonClicked.is('._disabled')) {
            var type = $buttonClicked.attr('id');
            // 未点击二按钮之一时无操作
            switch (type) {
                case 'jm-dialog-confirm':
                    onConfirm();
                    break;
                case 'jm-dialog-cancel':
                    onCancel();
                    break;
                default:
                    return;
            }
            $wrap.removeClass('show');
            setTimeout(function () {
                $body.removeClass('no-scroll');
                $wrap.remove();
            }, 250);
        }
    });

    // 热键
    $(window).on('keyup', function (evt) {
        if ($dialog.length !== 0) {
            // esc - 为alert框时点击确认按钮；否则点击取消按钮
            if (evt.keyCode === 27) {
                if (dialogType === 'alert') {
                    $('#jm-dialog-confirm').click();
                } else {
                    $('#jm-dialog-cancel').click();
                }
            }
            //
            if (evt.keyCode === 13) {
                $('#jm-dialog-confirm').click();
            }
        }
    });

    // 为propmt框时，只在所有.prompt-input框内容有效时允许点击confirm按钮
    if (dialogType === 'prompt') {
        var $confirmButton = $('#jm-dialog-confirm').addClass('_disabled');
        var $dialogInputs = $('.prompt-input');
        $dialogInputs.on('input', function () {
            var allValid = true;
            $dialogInputs.each(function () {
                if (!/\S/.test($(this).val())) {
                    allValid = false;
                    return;
                }
                $confirmButton.toggleClass('_disabled', !allValid);
            });
        });
    }

    onDialogReady();

    setTimeout(function () {
        $wrap.addClass('show');
    }, 250);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 design.google.com 旧站风格的footer
    https://web.archive.org/web/20170516175305/https://design.google.com
    @param options {Object}
        - siteInfo {Object} 站点信息相关
            - siteNameWords {Array.<String>} 站名的单词组成的数组，以'·'和'¬'分隔
            - siteAuthorName {String} 站点作者的名字
            - siteAuthorHomepage {String} 站点作者个人主页的链接
            - siteSourceLink {String} 站点源码仓库的链接
        - socialInfo {?Object} 社交信息相关，按如下顺序展示。不提供任一项则不显示其
            - wechatQrLink {String} 微信二维码链接
            - email {String} 邮箱地址
            - zhihuLink {String} 知乎链接
            - githubLink {String} GitHub链接
    */
    initFooter: function initFooter(options) {
        var _options$siteInfo = options.siteInfo,
            siteInfo = _options$siteInfo === undefined ? {} : _options$siteInfo,
            _options$socialInfo = options.socialInfo,
            socialInfo = _options$socialInfo === undefined ? null : _options$socialInfo;

        /*
        参数检查
        */

        if (!Array.isArray(siteInfo.siteNameWords)) {
            throw new TypeError('Expecting parameter "siteInfo.siteNameWords" as {Array.<String>}');
        }
        if (typeof siteInfo.siteAuthorName !== 'string') {
            throw new TypeError('Expecting parameter "siteInfo.siteAuthorName" as {String}');
        }
        if (typeof siteInfo.siteAuthorHomepage !== 'string') {
            throw new TypeError('Expecting parameter "siteInfo.siteAuthorHomepage" as {String}');
        }
        if (typeof siteInfo.siteSourceLink !== 'string') {
            throw new TypeError('Expecting parameter "siteInfo.siteSourceLink" as {String}');
        }

        var $footer = $(this).hide();

        // 根据socialInfo对象的完整程度拼接footer上半部的HTML
        var footerHTML = '\n            <div class="_top-wrap">\n                <div class="_top jm-responsive-wrap">\n                    <div class="social">\n                        <ul class="link-container">';
        if (typeof socialInfo.wechatQrLink === 'string') {
            footerHTML += '\n                <li class="link wechat">\n                    <img class="hover-content" src="' + socialInfo.wechatQrLink + '" />\n                </li>';
        }
        if (typeof socialInfo.email === 'string') {
            footerHTML += '\n                <li class="link mail">\n                    <a href="mailto:' + socialInfo.email + '"></a>\n                    <div class="hover-content">Email me!</div>\n                </li>';
        }
        if (typeof socialInfo.zhihuLink === 'string') {
            footerHTML += '\n                <li class="link zhihu">\n                    <a href="' + socialInfo.zhihuLink + '" target="_blank"></a>\n                </li>';
        }
        if (typeof socialInfo.githubLink === 'string') {
            footerHTML += '\n                <li class="link github">\n                    <a href="' + socialInfo.githubLink + '" target="_blank"></a>\n                </li>';
        }

        // 根据siteInfo对象拼接footer下半部的HTML
        footerHTML += '\n                    </ul>\n                </div>\n            </div>\n            </div>\n            <div class="_bottom-wrap">\n            <div class="_bottom jm-responsive-wrap">\n                <h3 class="logo">\n                    ' + siteInfo.siteNameWords.map(function (item) {
            return '<span class="jm-single-word">' + item + '</span>';
        }).join('') + '\n                </h3>\n                <p class="info">\n                    Made with\n                    <span class="heart-wrap">\n                        <svg class="heart" width="14px" height="14px" viewBox="0 0 24 24">\n                            <path fill="#ff5252" d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"></path>\n                        </svg>\n                    </span>\n                    by <a href="' + siteInfo.siteAuthorHomepage + '" target="_blank" class="info-link">' + siteInfo.siteAuthorName + '</a>.\n                </p>\n                <a href="' + siteInfo.siteSourceLink + '" target="_blank" class="jm-button source _warn _flat" data-text="view source"></a>\n            </div>\n            </div>';

        $footer.html(footerHTML).show();
    }
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 design.google.com 旧站风格的header
    https://web.archive.org/web/20170516175305/https://design.google.com
    @param options {Object}
        - siteNameWords {Array.<String>} 站名的单词组成的数组，以'·'和'¬'分隔
        - navContents {Array.<String>} 导航按钮的名称数组
        - activeNavIndex {?Number} 当前活动的导航按钮索引。不提供时为0
    */
    initHeader: function initHeader(options) {

        var COLOR_PALLETE = ['silver', 'gray', 'yellow', 'red', 'blue', 'green'];

        this.each(function () {
            var siteNameWords = options.siteNameWords,
                navContents = options.navContents,
                _options$activeNavInd = options.activeNavIndex,
                activeNavIndex = _options$activeNavInd === undefined ? 0 : _options$activeNavInd;

            /*
            参数检查
            */

            if (typeof siteNameWords[0] !== 'string') {
                throw new TypeError('Expecting parameter "siteNameWords" as {Array.<String>}');
            }
            if (typeof navContents[0] !== 'string') {
                throw new TypeError('Expecting parameter "navContents" as {Array.<String>}');
            }

            /*
            初始化
            */
            var jmHeaderHTML = '\n            <div class="jm-header-wrap-without-shadow">\n                <div class="jm-header-content jm-responsive-wrap">\n                    <nav class="jm-nav">\n                        <a class="site-title">\n                            ' + siteNameWords.map(function (item) {
                return '<span class="jm-single-word">' + item + '</span>';
            }).join('') + '\n                        </a>\n                        <ul class="nav-buttons">\n                            ' + navContents.map(function (item, index) {
                var activeStatus = index === activeNavIndex ? 'active' : '';
                return '<li class="nav-button ' + activeStatus + '">' + item + '</li>';
            }).join('') + '\n                            <li class="nav-indicator"></li>\n                        </ul>\n                    </nav>\n                    <div class="banner">\n                        <h1 class="page-title">\n                            <span class="jm-single-word">' + navContents[activeNavIndex] + '</span>\n                        </h1>\n                    </div>\n                </div>\n                <div class="ripple"></div>\n            </div>\n            <div class="shadow"></div>';

            var $window = $(window).scrollTop(0);
            var $body = $('body');

            // header 元素主体
            var $fullHeader = $(this).hide().html(jmHeaderHTML);

            // 不含阴影的元素部分
            var $header = $fullHeader.children('.jm-header-wrap-without-shadow').attr('data-theme', COLOR_PALLETE[activeNavIndex]);

            // 波纹元素
            var $ripple = $header.find('.ripple');
            // 导航按钮容器
            var $buttonsWrap = $header.find('.nav-buttons');
            // 所有导航按钮
            var $buttons = $buttonsWrap.find('.nav-button');
            // 按钮底部提示条
            var $buttonIndicator = $header.find('.nav-indicator');
            // 波纹元素容器
            var $banner = $header.find('.banner');
            // 页面大标题
            var $pageTitle = $banner.find('.jm-single-word');

            // 主内容容器
            var $mainWrap = $('.jm-main-wrap');

            // .nav-buttons显示多于一行时，隐藏掉按钮底部提示条，并调整.jm-main-wrap的上外边距
            $(function () {
                var isMobile = $body.is('#mobile');

                setTimeout(function () {
                    var navLineHeight = isMobile ? 50 : 64;
                    var navHeight = +$buttonsWrap.height();
                    if (navHeight > navLineHeight) {
                        $buttonIndicator.addClass('hidden');
                    }
                    if (isMobile) {
                        $mainWrap.css('marginTop', navLineHeight + navHeight);
                    }
                }, 0);

                $window.on('scroll', function (evt) {
                    // 桌面端
                    if (!isMobile) {
                        var scTp = document.documentElement.scrollTop;
                        // 主体的滚动距离大于一定值时渐隐标题
                        if (scTp > 30) {
                            $pageTitle.addClass('hidden');
                        } else {
                            $pageTitle.removeClass('hidden');
                        }
                        $banner.css('height', 192 - scTp < 0 ? 0 : 192 - scTp);
                    }
                });

                /*
                波纹动画
                */
                var rippling = false;
                var $buttonClicked = null;
                var headerHeight = $('.jm-header').height() - 12;
                $body.on('mousedown', '.nav-button:not(.active)', function (evt) {
                    if (rippling === false) {
                        rippling = true;
                        var $targetBtn = $(this);
                        $buttonClicked = $targetBtn.addClass('clicking');
                        $ripple.css({
                            // 直接从鼠标系事件中取得相对于页面的坐标
                            left: evt.pageX - 50,
                            // top 值要减掉窗口的垂直滚动偏移
                            // IDEA 是documentElement不是body！！！所以$.animate()也坏掉了
                            top: evt.pageY - 50 - document.documentElement.scrollTop
                        }).addClass('noneToCircle');
                    }
                }).on('mouseup', function (evt) {
                    // IDEA 根据事件目标的话，只能判断 mousedown，无法判断 mouseup，因为后者的目标永远是波纹元素。
                    // 所以以波纹元素是否已有动画类为标准，决定如何处理
                    if ($ripple.hasClass('noneToCircle')) {
                        /*
                        波纹元素的扩大
                        */
                        $('.jm-main-wrap').jmScrollInto(function () {
                            $ripple.removeClass('noneToCircle').addClass('toFullscreen');
                            setTimeout(function () {
                                // 移除波纹元素的动画类
                                $ripple.removeClass('noneToCircle toFullscreen');
                                rippling = false;
                            }, 670);
                        }, headerHeight);
                        // 主题配色
                        changeColorTheme($buttonClicked);
                        // 改变标题文字
                        $pageTitle.text($buttonClicked.text());
                        // 按钮提示条动画
                        indicate($buttonClicked);
                    }
                });

                $fullHeader.show();
            });

            /*
            按钮提示条动画
            */
            function indicate($targetBtn) {
                var startX = void 0;
                var endX = void 0;
                var $currentBtn = $buttons.filter('.active').removeClass('active clicking');
                var targetIsAtRight = $buttons.index($targetBtn) > $buttons.index($currentBtn) ? true : false;
                // 根据目标按钮和当前活动按钮的相对位置，求得提示条的目标起始点坐标
                if (targetIsAtRight) {
                    startX = $currentBtn.position().left;
                    endX = $targetBtn.position().left + $targetBtn.innerWidth();
                } else {
                    startX = $targetBtn.position().left;
                    endX = $currentBtn.position().left + $currentBtn.innerWidth();
                }

                $buttonIndicator.css({
                    left: startX,
                    right: endX,
                    width: endX - startX
                });

                $buttons.removeClass('clicking');
                $targetBtn.addClass('active');

                // 动画结束时如果目标按钮在右侧，则left为终点坐标，反之为起点坐标
                $buttonIndicator.animate({
                    width: 0,
                    left: [targetIsAtRight ? endX : startX]
                }, function () {
                    $buttonIndicator.css({
                        left: 0,
                        width: 0,
                        right: 'auto'
                    });
                });
            }

            function changeColorTheme($ele) {
                var colorCount = COLOR_PALLETE.length;
                var colorIndex = $buttons.index($ele) % (colorCount - 1);
                $header.attr('data-theme', COLOR_PALLETE[colorIndex]);
            }
        });
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 angular material 风格的text input元素
    https://material.angularjs.org/latest/demo/input
    目标元素可配置的属性：
        - data-label 输入框标题。不提供时从'Input 1'开始计数
        - data-value 实际内容文字。不提供时为''
        - data-maxLength 最大字符数。不提供时为20
        - data-validator 验证内容的正则。不提供时为'.*'
        - data-errorMsg 内容未通过正则验证时的提示。不提供时为'Validation failed.'
        - data-theme 主题配色。可为'dark'或'light'，不提供时为'light'
    */
    initInput: function initInput(options) {

        var inputEleCounter = 1;

        this.each(function () {

            var $input = $(this);

            var label = $input.data('label') || 'Input ' + inputEleCounter;
            var value = $input.data('value') || '';
            var maxLength = $input.data('maxLength') || 20;
            var regExpStr = $input.data('validator') || '.*';
            var errorMsg = $input.data('errorMsg') || 'Validation failed.';
            var theme = $input.data('theme') || 'light';

            var inputHTML = '\n                <div class="jm-input-content">\n                    <label class="placeholder" for="jm-input-' + inputEleCounter + '">' + label + '</label>\n                    <input id="jm-input-' + inputEleCounter + '" class="_input" maxlength="' + maxLength + '" value="' + value + '" spellcheck="false" />\n                    <p class="error">' + errorMsg + '</p>\n                    <p class="char-counter">\n                        <span class="current"></span>/<span class="maximum"></span>\n                    </p>\n                </div>';

            $input.toggleClass('_dark', theme === 'dark').html(inputHTML);

            var $_input = $input.find('._input');
            var val = $_input.val();
            // 若input子元素的value非空，则添加non-empty类
            $input.toggleClass('non-empty', /\S/.test(val));
            var currentCharCount = val.length;
            var maxCharCount = $_input.attr('maxLength');
            $input.find('.current').text(currentCharCount);
            $input.find('.maximum').text(maxCharCount);
            // ‘未点击’状态的标识。在输入框产生初次blur后修改
            $input.data('edited', false);
            $_input.one('blur', function () {
                $input.data('edited', true);
            });

            $_input.on('focus', function () {
                var $this = $(this);
                var $wrap = $this.parents('.jm-input');
                $wrap.addClass('focused');
                $wrap.toggleClass('non-empty', $this.val() !== '');
            }).on('blur', function () {
                var $this = $(this);
                var $wrap = $this.parents('.jm-input');
                $wrap.removeClass('focused');
                $wrap.toggleClass('non-empty', $this.val() !== '');
                validate(this);
            }).on('keyup', function () {
                validate(this);
            });

            function validate(inputEle) {
                var $this = $(inputEle);
                var $wrap = $this.parents('.jm-input');
                // 若edited为true，进行正则验证
                if ($wrap.data('edited') === true) {
                    var regExp = new RegExp(regExpStr);
                    $wrap.toggleClass('invalid', !regExp.test($this.val()));
                }
                // 字数验证
                var currentCount = $this.val().length;
                var currentCharCounter = $wrap.find('.current');
                currentCharCounter.text(currentCount);
            }

            ++inputEleCounter;
        });
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 angular material 风格的单选按钮组
    https://material.angularjs.org/latest/demo/radioButton
    @param options {Object}
        - labels {?Array.<Object>} 可选对象的数组。不提供时使用一个默认的示例数组
          请注意这里未做类型检查，数组内checked值为true的对象应不多于一个
            - name {String} 按钮元素的标题文字
            - checked {?Boolean} 是否为已选中状态
            - warn {?Boolean} 是否为'warn'的红色配色
            - disabled {?Boolean} 是否为禁用状态
    */
    initRadio: function initRadio(options) {

        var $radioWrap = $(this);

        var labels = options.labels || [{
            name: 'label 1'
        }, {
            name: 'label 2',
            checked: true
        }, {
            name: 'label 3',
            warn: true
        }, {
            name: 'label 4',
            disabled: true
        }];

        var radiosHTML = '\n            ' + labels.map(function (item, index) {
            var isChecked = item.checked === true ? 'true' : '';
            var warnClass = item.warn === true ? '_warn' : '_primary';
            var disableClass = item.disabled === true ? '_disabled' : '';
            return '<label class="jm-radio ' + warnClass + ' ' + disableClass + '" data-checked="' + isChecked + '">\n                    <span class="shadow"></span>\n                    <span class="_outer">\n                        <span class="_inner"></span>\n                    </span>\n                    <span class="text">' + item.name + '</span>\n                </label>';
        }).join('');

        $radioWrap.html(radiosHTML).on('click', '.jm-radio:not(._disabled)', function () {
            var $this = $(this);
            if ($this.data('animating') !== true) {
                $this.data('animating', true);
                var $shadow = $this.find('.shadow');
                $this.siblings().attr('data-checked', 'false').end().attr('data-checked', 'true');
                $shadow.addClass('clicked');
                setTimeout(function () {
                    $shadow.removeClass('clicked');
                    $this.data('animating', false);
                }, 300);
            }
        });
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 命令相关
var ACTIONS = [{
    abbr: 'undo',
    fullName: 'undo',
    action: function action() {
        return execute('bold');
    },
    followingSeparator: true
}, {
    abbr: 'redo',
    fullName: 'redo',
    action: function action() {
        return execute('redo');
    }
}, {
    abbr: 'b',
    fullName: 'bold',
    action: function action() {
        return execute('bold');
    },
    followingSeparator: true
}, {
    abbr: 'i',
    fullName: 'italic',
    action: function action() {
        return execute('italic');
    }
}, {
    abbr: 'u',
    fullName: 'underline',
    action: function action() {
        return execute('underline');
    }
}, {
    abbr: 's',
    fullName: 'strikethrough',
    action: function action() {
        return execute('strikeThrough');
    }
}, {
    // IDEA
    abbr: 'hl',
    fullName: 'highlight',
    action: function action() {
        return highlightSpan();
    },
    followingSeparator: true
}, {
    abbr: 'h',
    fullName: 'header',
    action: function action() {
        return execute('formatBlock', '<H1>');
    },
    textContentHTML: 'H<sub>1</sub>',
    followingSeparator: true
}, {
    abbr: 'p',
    fullName: 'paragraph',
    action: function action() {
        return execute('formatBlock', '<P>');
    },
    textContentHTML: '&#182'
}, {
    abbr: 'q',
    fullName: 'quote',
    action: function action() {
        return execute('formatBlock', '<BLOCKQUOTE>');
    }
}, {
    abbr: 'code',
    fullName: 'code',
    action: function action() {
        return execute('formatBlock', '<PRE>');
    }
}, {
    abbr: 'ul',
    fullName: 'unordered list',
    action: function action() {
        return execute('insertUnorderedList');
    }
}, {
    abbr: 'ol',
    fullName: 'ordered list',
    action: function action() {
        return execute('insertOrderedList');
    }
}, {
    abbr: 'link',
    fullName: 'link',
    action: function action() {
        return addLink();
    },
    followingSeparator: true
}, {
    abbr: 'image',
    fullName: 'image',
    action: function action() {
        return addImage();
    }
}, {
    abbr: 'hr',
    fullName: 'horizontal line',
    action: function action() {
        return execute('insertHorizontalRule');
    }
}, {
    abbr: 'clear',
    fullName: 'clear format',
    action: function action() {
        return execute('removeFormat');
    },
    followingSeparator: true
}];

// 执行document.execCommand的相应命令
function execute(commandName) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    document.execCommand(commandName, false, value);
}

// 使编辑区适应其内容的高度
function responseToContentHeight() {
    var editAreaEle = document.querySelector('.jm-edit-area');
    editAreaEle.style['height'] = editAreaEle.scrollHeight;
}

// 移动光标至编辑区的末尾
// IDEA
// https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
function moveCursorToEditAreaEnd() {
    var editAreaEle = document.querySelector('.jm-edit-area');
    if (!document.createRange) {
        throw new Error('Get a proper browser please.');
    }
    var range = document.createRange();
    range.selectNodeContents(editAreaEle);
    range.collapse(false);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

// 将当前选中内容包装在<code>标签内。无选择内容时不操作
function highlightSpan() {
    var selectedText = document.getSelection().toString();
    if (/\S/.test(selectedText)) {
        execute('insertHTML', '<code>' + selectedText + '</code>');
    }
}

// 在编辑区末尾插入链接
function addLink() {
    $.showJmDialog({
        dialogType: 'prompt',
        title: 'Set link attributes.',
        content: 'Enter the text and URL for target <a> tag.',
        promptDataArr: [{
            name: 'Text',
            value: ''
        }, {
            name: 'URL',
            value: 'https://'
        }],
        onConfirm: function onConfirm() {
            var anchorText = $('#jm-prompt-input-1').val();
            var anchorURL = $('#jm-prompt-input-2').val();
            moveCursorToEditAreaEnd();
            execute('insertHTML', '<a href="' + anchorURL + '" target="_blank">' + anchorText + '</a>');
            responseToContentHeight();
        }
    });
}

// 在编辑区末尾插入图片
function addImage() {
    getOriginBase64URL(function (originBase64URL) {
        getCompressedBase64URL(originBase64URL, function (compressedBase64URL) {
            $.showJmDialog({
                dialogType: 'prompt',
                title: 'Set image attribute.',
                content: 'Enter the alternative text for target <img> tag.',
                promptDataArr: [{
                    name: 'Alternative Text',
                    value: ''
                }],
                onConfirm: function onConfirm() {
                    var alt = $('#jm-prompt-input-1').val();
                    moveCursorToEditAreaEnd();
                    execute('insertHTML', '<img src="' + compressedBase64URL + '" alt="' + alt + '" />');
                }
            });
        });
    });
    // 触发file input交互，取得目标图片的base64 URL
    function getOriginBase64URL(cb) {
        var $jmRteFileInput = $('<input class="jm-rte-file-input" type="file" accept="image/*" />');
        $('body').append($jmRteFileInput);
        $jmRteFileInput.on('change', function () {
            var selectedImage = $jmRteFileInput[0].files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                $jmRteFileInput.remove();
                cb(e.target.result);
            };
            reader.readAsDataURL(selectedImage);
        });
        $jmRteFileInput.click();
    }
    // 目标图片宽度大于700时，压缩其base64 URL
    function getCompressedBase64URL(originBase64URL, cb) {
        var agentImage = new Image();
        agentImage.src = originBase64URL;
        agentImage.onload = function () {
            var originWidth = this.width;
            if (originWidth > 700) {
                var originHeight = this.height;
                var scale = originWidth / originHeight;
                var agentCanvas = document.createElement('canvas');
                agentCanvas.setAttribute('width', 700);
                agentCanvas.setAttribute('height', 700 * scale);
                var ctx = agentCanvas.getContext('2d');
                ctx.drawImage(this, 0, 0, 700, 700 * scale);
                var compressedBase64URL = agentCanvas.toDataURL('image/jpeg');
                cb(compressedBase64URL);
            } else {
                cb(originBase64URL);
            }
        };
    }
}

$.fn.extend({
    /**
    生成 angular material 风格的富文本编辑器
    https://material.angularjs.org/latest/demo/input
    @param options {Object}
        - id {String} 当前编辑内容的唯一标识，用于在localStorage内存取
                      注意在内容提交成功后，需使用localStorage.removeItem(`jmRteDraft-${id}`)手动删除草稿
        - contentHTML {?String} 编辑区域的HTML字符串。不提供时用空字符串占位
        - maxLength {?Number} 编辑区域的最大字符数。不提供时为500
    */
    initRte: function initRte(options) {

        // 参数检查
        if (typeof options.id !== 'string' || !/\S/.test(options.id)) {
            throw new TypeError('Expecting parameter "options.id" as non-empty {String}');
        }

        var id = options.id;
        var contentHTML = typeof options.contentHTML === 'string' ? options.contentHTML : '';
        var maxLength = typeof options.maxLength === 'number' ? options.maxLength : 500;

        var $rte = $(this);

        var rteHTML = '<ul class="actions">';

        ACTIONS.forEach(function (action) {
            // 已有该行为的对应图标时，使用图标；否则用字符串标识之
            rteHTML += (action.followingSeparator === true ? '<div class="separator"></div>' : '') + '\n                <li data-action-abbr="' + action.abbr + '" class="action show-tooltip">\n                    ' + (action.textContentHTML || '<span class="icon-wrap"><i class="icon"></i></span>') + '\n                    <p class="jm-tooltip to-show-at-top">' + action.fullName + '</p>\n                </li>';
        });

        rteHTML += '</ul>\n            <div maxlength="10" class="jm-edit-area jm-article" contenteditable="true" spellcheck="false">' + contentHTML + '</div>\n            <p class="char-counter"><span class="current">0</span>/<span class="maximum">' + maxLength + '</span></p>';

        $rte.attr('data-id', id).html(rteHTML)
        // IDEA 在可编辑区域获得焦点时，execCommand才起作用。否则返回false；而li元素上的mousedown事件会夺取焦点
        // https://stackoverflow.com/questions/12525087/why-doesnt-the-document-execcommand-work-when-i-click-on-a-div
        .on('mousedown', '.action', function (evt) {
            evt.preventDefault();
        }).on('click', '.action', function (evt) {
            var $this = $(this);
            var targetActionAbbr = $this.data('actionAbbr');
            var actionObj = ACTIONS.find(function (item) {
                return item.abbr === targetActionAbbr;
            });
            actionObj.action();
        });

        var $editArea = $('.jm-edit-area');
        var $currentLength = $rte.find('.current').text($editArea.text().length);

        // 初始化编辑器高度
        responseToContentHeight();

        // 取得相应草稿在localStorage中的键名
        var targetDraftName = 'jmRteDraft-' + id;

        $editArea
        // 编辑区首次获得焦点时，检查localStorage中是否有草稿
        .one('focus', function () {
            var currentDraft = localStorage.getItem(targetDraftName);
            if (currentDraft !== null) {
                $.showJmDialog({
                    dialogType: 'confirm',
                    title: 'A draft was found in local storage.',
                    content: 'Would you like to restore it?',
                    confirmButtonText: 'restore',
                    onConfirm: function onConfirm() {
                        $editArea.html(currentDraft);
                        responseToContentHeight();
                        moveCursorToEditAreaEnd();
                    }
                });
            }
        })
        // 监听输入事件，立即根据输入内容改变元素高度、检查是否超出字数限制
        .on('input', function () {
            responseToContentHeight();
            var currentLength = $editArea.text().length;
            $currentLength.html(currentLength);
            $rte.toggleClass('exceeded', currentLength > maxLength);
        })
        // 监听输入事件，若编辑器的实际内容非空，则debounce后保存至localStorage
        .on('input', $.jmDebounce(function () {
            if (/\S/.test($editArea.text())) {
                localStorage.setItem(targetDraftName, $editArea.html());
            }
        }, 500))
        // IDEA tab的效果在down时产生
        // tab和shift+tab监听
        .on('keydown', function (e) {
            if (e.keyCode === 9) {
                e.preventDefault();
                if (e.shiftKey !== true) {
                    execute('indent');
                } else {
                    execute('outdent');
                }
            }
        });
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$.fn.extend({
    /**
    生成 angular material 风格的标签
    https://material.angularjs.org/latest/demo/chips
    @param options {Object}
        - tagGroupName {?String} 标签组名称。不提供时为'tags'
        - tagsArr {?Array.<String>} 已有的标签内容文字组成的数组。不提供时为空数组
        - maxLengthEachTag {?Number} 单个标签的最大字符数。不提供时为15
        - maxTagCount {?Number} 最大标签总数。不提供时为3
        - tagInputPlaceholder {?String} 标签输入框的占位字符串，不宜过长。不提供时为'Enter a tag...'
    */
    initTag: function initTag(options) {

        var tagEleCounter = 1;

        this.each(function () {

            var $tagsContainer = $(this);

            var tagGroupName = options.tagGroupName || 'tags';
            var tagsArr = options.tagsArr || [];
            var maxLengthEachTag = options.maxLengthEachTag || 15;
            var maxTagCount = options.maxTagCount || 3;
            var tagInputPlaceholder = options.tagInputPlaceholder || 'Enter a tag...';

            var tagHTML = '\n                <div class="jm-tag-content">\n                    ' + tagsArr.map(function (item) {
                return '<span class="tag">\n                                    <span class="tag-text">' + item + '</span>\n                                    <i class="btn-remove"></i>\n                                </span>';
            }).join('') + '\n                    <input id="jm-tag-' + tagEleCounter + '" class="_input" maxlength="' + maxLengthEachTag + '" placeholder="' + tagInputPlaceholder + '"/>\n                    <label class="placeholder" for="jm-tag-' + tagEleCounter + '">' + tagGroupName + '</label>\n                    <p class="error"></p>\n                    <h5 class="char-counter">\n                        <span class="current">0</span>/<span class="maximum">' + maxLengthEachTag + '</span>\n                    </h5>\n                </div>';

            $tagsContainer
            // ‘未点击’状态的标识。在输入框产生初次blur后修改
            .data('edited', false)
            // 初始化主容器的tagsData数组
            .data('tagsData', tagsArr).html(tagHTML);

            var $_input = $tagsContainer.find('._input');
            var $error = $tagsContainer.find('.error');
            var $currentCharCount = $tagsContainer.find('.current');

            $_input.on('focus', function () {
                $tagsContainer.addClass('focused');
            }).one('blur', function () {
                $tagsContainer.data('edited', true);
            }).on('blur', function () {
                $tagsContainer.removeClass('focused');
            }).on('keyup', function (evt) {
                var tags = $tagsContainer.data('tagsData');
                var originVal = $_input.val();
                // 字数统计
                $currentCharCount.text(originVal.length);
                // 回车键
                if (evt.keyCode === 13) {
                    var val = originVal.trim();
                    if (val !== '') {
                        // 标签数量验证
                        if (tags.length === maxTagCount) {
                            switchErrorDisplay(true, 'Maximum tags reached.');
                            return;
                        }
                        // 同名标签验证。不区分大小写
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var c = _step.value;

                                if (c.toLowerCase() === val.toLowerCase()) {
                                    switchErrorDisplay(true, 'Tag already exists.');
                                    return;
                                }
                            }
                            // 验证通过，添加标签，初始化输入框相关
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        $_input.before($('<span class="tag"><span class="tag-text">' + val + '</span><i class="btn-remove"></i></span>'));
                        switchErrorDisplay(false, '');
                        $_input.val('');
                        $currentCharCount.text('0');
                        // 将该项推入主容器的tagsData数组
                        $tagsContainer.data('tagsData').push(val);
                    }
                }
            });

            $tagsContainer.on('click', '.btn-remove', function (evt) {
                var $targetTag = $(this).parents('.tag');
                // 删除该标签元素
                var targetTagText = $targetTag.children('.tag-text').text();
                $targetTag.remove();
                // 将该项移出主容器的tagsData数组
                var tagsData = $tagsContainer.data('tagsData');
                tagsData.splice(tagsData.indexOf(targetTagText), 1);
            });

            function switchErrorDisplay(bool, str) {
                if (bool === true) {
                    $error.closest('.tag').addClass('invalid');
                    $error.text(str).addClass('show');
                } else {
                    $error.removeClass('show');
                    $error.closest('.tag').removeClass('invalid');
                }
            }

            ++tagEleCounter;
        });
    }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
生成 angular material 风格的toast提示
https://material.angularjs.org/latest/demo/toast
@param options {Object}
    - content {?String} 内容文字。不提供时为'default toast'
    - duration {?Number} 持续时间。不提供时为3000
*/
$.showJmToast = function (options) {

    $('.jm-toast').remove();

    var content = options.content || 'default toast';
    var duration = options.duration || 3000;

    var toastHTML = '<div class="jm-toast">' + content + '</div>';

    var $toast = $(toastHTML);

    $('body').append($toast);

    setTimeout(function () {
        $toast.addClass('show');
        setTimeout(function () {
            $toast.removeClass('show');
            setTimeout(function () {
                $toast.remove();
            }, 400);
        }, duration);
    }, 10);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 判断是否移动端
$(function () {
    if (/Android|iPhone|Windows Phone|iPad/i.test(window.navigator.userAgent)) {
        document.querySelector('body').setAttribute('id', 'mobile');
    }
});

/**
强制一个函数在某个连续时间段内只执行一次，哪怕它本来会被调用多次。
类似于 vue 1 中的 debounce 过滤器： https://v1.vuejs.org/api/#debounce
@param fn {Function} 要控制执行次数的函数
@param delay {?Number} 延迟的毫秒数。不提供时为500
@return {Function} 返回经过处理的该函数
*/
$.jmDebounce = function (fn) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    // 定时器，用来 setTimeout
    var timer = void 0;
    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {
        // 保存函数调用时的上下文和参数，传递给 fn
        var context = this;
        var args = arguments;
        // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
        clearTimeout(timer);
        // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
        // 再过 delay 毫秒就执行 fn
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
};

/**
延迟调用指定函数。一般用于在按钮等元素产生的动画结束后
@param fn {Function} 延迟结束后执行的函数
@param timeout {?Number} 延迟的毫秒数。不提供时为400
*/
$.jmDelay = function (fn) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;

    setTimeout(fn, timeout);
};

$.fn.extend({
    /**
    【在使用了本套组件的header的页面中】动画滚动页面至目标元素位置
    @param cb {?Function} 滚动完成的回调。不提供时为一个空函数
    @param amendment {?Number} 滚动高度的修正像素数。不提供时为.jm-header元素的实际高度
    */
    jmScrollInto: function jmScrollInto(cb, amendment) {
        var $target = $(this);
        var _body = document.documentElement;
        var jmHeaderHeight = $('.jm-header').height();

        var _cb = typeof cb === 'function' ? cb : function () {};
        var _amendment = typeof amendment === 'number' ? amendment : jmHeaderHeight;

        // // 目标元素为body时，目标高度再减12，即.jm-shadow的高度
        _amendment = $target.is('body') ? jmHeaderHeight - 12 : _amendment;

        var targetBodyScrollTop = $target.offset().top - _amendment;
        var tId = setInterval(function () {
            var currentBodyScrollTop = _body.scrollTop;
            var diff = targetBodyScrollTop - currentBodyScrollTop;
            switch (true) {
                case diff > 0:
                    currentBodyScrollTop += Math.ceil(diff / 5);
                    break;
                case diff < 0:
                    currentBodyScrollTop -= Math.ceil(diff / -5);
                    break;
                default:
                    clearIntervalAndCallback(tId);
            }
            _body.scrollTop = currentBodyScrollTop;
            // 如果页面滚动到了底部，也停止interval
            if (_body.scrollHeight - _body.scrollTop === _body.clientHeight) {
                clearIntervalAndCallback(tId);
            }
        }, 10);
        function clearIntervalAndCallback(n) {
            clearInterval(n);
            _cb();
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(15)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./jqueryMaterial.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./jqueryMaterial.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

__webpack_require__(10);

__webpack_require__(4);

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(9);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(8);

__webpack_require__(0);

__webpack_require__(7);

__webpack_require__(3);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\nul, ol {\n  list-style: none; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400; }\n\nhtml {\n  height: 100%;\n  min-height: 750px; }\n\nbody {\n  background: #fff;\n  position: relative;\n  height: 100%;\n  font-family: \"Roboto Mono\", \"Helvetica Neue\", \"PingFang SC\", \"Microsoft YaHei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased; }\n  body:not(#mobile) .jm-responsive-wrap {\n    width: 1680px;\n    min-width: 800px;\n    margin-left: auto;\n    margin-right: auto; }\n    @media (max-width: 1280px) {\n      body:not(#mobile) .jm-responsive-wrap {\n        width: 800px; } }\n    @media (min-width: 1280px) and (max-width: 1600px) {\n      body:not(#mobile) .jm-responsive-wrap {\n        width: 1280px; } }\n    @media (min-width: 1600px) and (max-width: 1900px) {\n      body:not(#mobile) .jm-responsive-wrap {\n        width: 1440px; } }\n    @media (min-width: 1900px) {\n      body:not(#mobile) .jm-responsive-wrap {\n        width: 1680px; } }\n  body.no-scroll {\n    overflow: hidden; }\n    body.no-scroll:not(#mobile) {\n      padding-right: 15px; }\n      body.no-scroll:not(#mobile) .jm-header-content {\n        transform: translateX(-7.5px); }\n\n.jm-main-wrap {\n  position: relative;\n  width: 100%;\n  min-height: 100%;\n  margin-top: 256px;\n  background-color: #fafafa;\n  z-index: 99;\n  animation: wrapPopIn .5s;\n  padding: 18px 8px 0;\n  box-sizing: border-box; }\n\n@keyframes wrapPopIn {\n  from {\n    opacity: 0;\n    transform: translateY(50px); }\n  to {\n    opacity: 1;\n    transition: translateY(0); } }\n\n.jm-main {\n  position: relative;\n  min-height: 100%;\n  min-width: 300px;\n  z-index: 99;\n  padding: 8px;\n  box-sizing: border-box;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 4px; }\n\n.jm-row-label {\n  font-size: 14px;\n  line-height: 30px;\n  color: rgba(0, 0, 0, 0.46);\n  background: #f7f7f7;\n  text-indent: 6px;\n  text-transform: capitalize; }\n\n.jm-row {\n  position: relative;\n  min-height: 70px;\n  height: auto;\n  text-align: center;\n  background: #f7f7f7;\n  margin-bottom: 24px; }\n  .jm-row.dark {\n    background: #303030; }\n  .jm-row.flexed {\n    display: flex;\n    justify-content: space-between; }\n\n.jm-single-word {\n  display: inline-block;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .jm-single-word::after {\n    content: '\\B7';\n    opacity: .4; }\n  .jm-single-word:last-of-type:after {\n    content: '\\AC'; }\n  .jm-single-word.hidden {\n    opacity: 0; }\n\n.jm-article {\n  text-align: left;\n  font-family: \"Roboto\";\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 14px;\n  line-height: 20px;\n  margin: 4px 0 16px; }\n  .jm-article b {\n    font-weight: 500; }\n  .jm-article u {\n    text-decoration: none;\n    border-bottom: 0.15em solid rgba(0, 0, 0, 0.87);\n    padding-bottom: .1em; }\n  .jm-article strike {\n    text-decoration: strike-through; }\n  .jm-article code {\n    background-color: rgba(0, 0, 0, 0.1);\n    font-family: \"Roboto Mono\";\n    margin: 0 .3em;\n    padding: 0 .3em; }\n  .jm-article h1 {\n    font-family: \"Roboto Mono\";\n    font-size: 24px;\n    line-height: 32px;\n    color: rgba(0, 0, 0, 0.87);\n    margin: 24px 0; }\n  .jm-article p {\n    font-family: \"Roboto\";\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 14px;\n    line-height: 20px;\n    margin: 4px 0 16px; }\n  .jm-article blockquote {\n    border-left: 4px solid #cfd8e6;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n    color: #6b7a8c;\n    font-size: 14px;\n    line-height: 20px;\n    margin: 4px 0 16px; }\n  .jm-article pre {\n    width: auto;\n    color: #000;\n    font-family: 'Roboto Mono';\n    font-size: 12px;\n    line-height: 20px;\n    background-color: #f2f2f2;\n    padding: 8px 12px;\n    margin-bottom: 30px;\n    overflow-x: scroll; }\n  .jm-article li {\n    font-size: 14px;\n    font-family: \"Roboto\"; }\n  .jm-article ul {\n    padding-left: 18px;\n    box-sizing: border-box; }\n    .jm-article ul li {\n      list-style-type: disc; }\n  .jm-article ol {\n    padding-left: 18px;\n    box-sizing: border-box; }\n    .jm-article ol li {\n      list-style-type: decimal; }\n  .jm-article a {\n    color: #039be5; }\n  .jm-article img {\n    display: block; }\n\nbody#mobile {\n  overflow-x: hidden; }\n  body#mobile .jm-header .jm-nav {\n    height: auto;\n    line-height: 50px; }\n  body#mobile .jm-header .site-title {\n    display: block;\n    height: 50px;\n    line-height: 50px;\n    padding-left: 17px; }\n  body#mobile .jm-header .nav-buttons {\n    position: relative;\n    line-height: 50px;\n    white-space: normal;\n    margin-left: 7px;\n    max-width: none; }\n  body#mobile .jm-header .nav-button {\n    height: 50px;\n    line-height: 50px; }\n  body#mobile .jm-header .banner {\n    display: none; }\n  body#mobile .jm-footer .link-container {\n    float: none;\n    text-align: center; }\n  body#mobile .jm-footer .source,\n  body#mobile .jm-footer .logo {\n    display: none; }\n  body#mobile .jm-footer .info-link {\n    border-bottom-color: #000;\n    padding: 4px 0; }\n  body#mobile .jm-rte .actions {\n    height: 120px; }\n  body#mobile .jm-rte .action {\n    border-bottom-color: transparent; }\n  body#mobile .jm-rte .separator:nth-of-type(3),\n  body#mobile .jm-rte .separator:nth-of-type(4) {\n    clear: both; }\n  body#mobile .jm-rte .separator:nth-of-type(2),\n  body#mobile .jm-rte .separator:nth-of-type(5) {\n    display: none; }\n  body#mobile .jm-toast {\n    width: calc(100% - 16px); }\n\n/*\n配色\n*/\n.jm-header-wrap-without-shadow[data-theme=silver] nav, .jm-header-wrap-without-shadow[data-theme=silver] {\n  background-color: #f1f3f4; }\n\n.jm-header-wrap-without-shadow[data-theme=gray] nav, .jm-header-wrap-without-shadow[data-theme=gray] {\n  background-color: #3c5a64; }\n\n.jm-header-wrap-without-shadow[data-theme=yellow] nav, .jm-header-wrap-without-shadow[data-theme=yellow] {\n  background-color: #fbbc05; }\n\n.jm-header-wrap-without-shadow[data-theme=red] nav, .jm-header-wrap-without-shadow[data-theme=red] {\n  background-color: #ea4335; }\n\n.jm-header-wrap-without-shadow[data-theme=blue] nav, .jm-header-wrap-without-shadow[data-theme=blue] {\n  background-color: #4285f4; }\n\n.jm-header-wrap-without-shadow[data-theme=green] nav, .jm-header-wrap-without-shadow[data-theme=green] {\n  background-color: #34a853; }\n\n.jm-header-wrap-without-shadow[data-theme=red] h1, .jm-header-wrap-without-shadow[data-theme=red] li, .jm-header-wrap-without-shadow[data-theme=red] a, .jm-header-wrap-without-shadow[data-theme=blue] h1, .jm-header-wrap-without-shadow[data-theme=blue] li, .jm-header-wrap-without-shadow[data-theme=blue] a, .jm-header-wrap-without-shadow[data-theme=green] h1, .jm-header-wrap-without-shadow[data-theme=green] li, .jm-header-wrap-without-shadow[data-theme=green] a, .jm-header-wrap-without-shadow[data-theme=gray] h1, .jm-header-wrap-without-shadow[data-theme=gray] li, .jm-header-wrap-without-shadow[data-theme=gray] a {\n  color: #fff; }\n\n.jm-header-wrap-without-shadow[data-theme=red] .nav-button.active, .jm-header-wrap-without-shadow[data-theme=blue] .nav-button.active, .jm-header-wrap-without-shadow[data-theme=green] .nav-button.active, .jm-header-wrap-without-shadow[data-theme=gray] .nav-button.active {\n  border-color: #fff; }\n\n.jm-header-wrap-without-shadow[data-theme=red] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=red] .nav-button:not(.active):hover, .jm-header-wrap-without-shadow[data-theme=blue] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=blue] .nav-button:not(.active):hover, .jm-header-wrap-without-shadow[data-theme=green] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=green] .nav-button:not(.active):hover, .jm-header-wrap-without-shadow[data-theme=gray] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=gray] .nav-button:not(.active):hover {\n  border-color: rgba(255, 255, 255, 0.5); }\n\n.jm-header-wrap-without-shadow[data-theme=red] .nav-indicator, .jm-header-wrap-without-shadow[data-theme=blue] .nav-indicator, .jm-header-wrap-without-shadow[data-theme=green] .nav-indicator, .jm-header-wrap-without-shadow[data-theme=gray] .nav-indicator {\n  background-color: #fff; }\n\n.jm-header-wrap-without-shadow[data-theme=silver] h1, .jm-header-wrap-without-shadow[data-theme=silver] li, .jm-header-wrap-without-shadow[data-theme=silver] a, .jm-header-wrap-without-shadow[data-theme=yellow] h1, .jm-header-wrap-without-shadow[data-theme=yellow] li, .jm-header-wrap-without-shadow[data-theme=yellow] a {\n  color: rgba(0, 0, 0, 0.7) !important; }\n\n.jm-header-wrap-without-shadow[data-theme=silver] .nav-button.active, .jm-header-wrap-without-shadow[data-theme=yellow] .nav-button.active {\n  border-color: rgba(0, 0, 0, 0.7) !important; }\n\n.jm-header-wrap-without-shadow[data-theme=silver] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=silver] .nav-button:not(.active):hover, .jm-header-wrap-without-shadow[data-theme=yellow] .nav-button.clicking, .jm-header-wrap-without-shadow[data-theme=yellow] .nav-button:not(.active):hover {\n  border-color: rgba(0, 0, 0, 0.3) !important; }\n\n.jm-header-wrap-without-shadow[data-theme=silver] .nav-indicator, .jm-header-wrap-without-shadow[data-theme=yellow] .nav-indicator {\n  background-color: rgba(0, 0, 0, 0.7) !important; }\n\n.ripple {\n  position: absolute;\n  display: none;\n  width: 100px;\n  height: 100px;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 102; }\n  .ripple.noneToCircle {\n    display: block;\n    animation: noneToCircle 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes noneToCircle {\n  from {\n    transform: scale(0); }\n  to {\n    transform: scale(1); } }\n  .ripple.toFullscreen {\n    display: block;\n    animation: toFullscreen .7s ease-out !important; }\n\n@keyframes toFullscreen {\n  to {\n    transform: scale(18);\n    opacity: 0; } }\n\n/*\nz-index 计数\n103 .shadow\n102 .ripple\n101 .jm-header .jm-nav\n100 .banner\n99 .jm-main-wrap\n*/\n.jm-header {\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  top: 0;\n  background-color: #f1f3f4;\n  user-select: none;\n  z-index: 101;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .jm-header li, .jm-header a {\n    color: #fff; }\n  .jm-header .jm-header-wrap-without-shadow {\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .jm-header .jm-header-wrap-without-shadow .jm-header-content {\n      margin: 0 auto; }\n      .jm-header .jm-header-wrap-without-shadow .jm-header-content .jm-nav {\n        position: relative;\n        width: 100%;\n        height: 64px;\n        line-height: 64px;\n        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n        z-index: 101; }\n        .jm-header .jm-header-wrap-without-shadow .jm-header-content .jm-nav .site-title {\n          display: inline-block;\n          font-size: 20px;\n          line-height: 64px;\n          height: 64px;\n          padding-left: 20px;\n          cursor: default; }\n      .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-buttons {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 14px;\n        white-space: nowrap;\n        letter-spacing: .25px;\n        font-family: \"Roboto Mono\";\n        font-weight: 500;\n        max-width: 500px;\n        animation: fadeIn 1s cubic-bezier(0.25, 0.8, 0.25, 1); }\n        .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-buttons .nav-button {\n          position: relative;\n          display: inline-block;\n          box-sizing: border-box;\n          height: 64px;\n          line-height: 64px;\n          padding: 0 10px;\n          border-bottom: 2px solid transparent;\n          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n          cursor: pointer;\n          text-transform: uppercase; }\n          .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-buttons .nav-button.active {\n            border-color: #fff; }\n          .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-buttons .nav-button.clicking, .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-buttons .nav-button:not(.active):hover {\n            border-color: rgba(255, 255, 255, 0.5); }\n      .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-indicator {\n        position: absolute;\n        height: 2px;\n        bottom: 0;\n        transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }\n        .jm-header .jm-header-wrap-without-shadow .jm-header-content .nav-indicator.hidden {\n          display: none; }\n      .jm-header .jm-header-wrap-without-shadow .jm-header-content .banner {\n        width: 100%;\n        height: 192px;\n        z-index: 100; }\n        .jm-header .jm-header-wrap-without-shadow .jm-header-content .banner .page-title {\n          position: absolute;\n          display: block;\n          bottom: 80px;\n          color: #fff;\n          height: 56px;\n          padding-left: 20px;\n          font-size: 56px;\n          font-weight: 300;\n          line-height: 56px;\n          text-transform: capitalize;\n          animation: popIn 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);\n          cursor: default; }\n  .jm-header .shadow {\n    position: relative;\n    width: 100%;\n    height: 12px;\n    background: #fafafa url(" + __webpack_require__(22) + ") repeat-x;\n    background-size: 1px 12px;\n    z-index: 103; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes popIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px); }\n  to {\n    opacity: 1;\n    transform: translateY(0); } }\n\n.jm-footer {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  z-index: 80;\n  user-select: none;\n  clear: left; }\n  .jm-footer ._top-wrap {\n    position: relative;\n    height: 230px;\n    line-height: 230px;\n    background-color: #fafafa; }\n    .jm-footer ._top-wrap ._top {\n      position: relative;\n      height: 100%; }\n      .jm-footer ._top-wrap ._top .social {\n        position: absolute;\n        width: 100%;\n        bottom: 0;\n        right: 0;\n        height: 72px;\n        line-height: 72px; }\n        .jm-footer ._top-wrap ._top .social .link-container {\n          position: relative;\n          text-align: right;\n          top: 50%;\n          transform: translateY(-50%); }\n        .jm-footer ._top-wrap ._top .social .link {\n          position: relative;\n          display: inline-block;\n          width: 24px;\n          height: 24px;\n          margin: 0 10px;\n          background-repeat: no-repeat;\n          background-position: 0 0;\n          background-size: 24px 24px;\n          opacity: .6;\n          transition: opacity .4s ease;\n          cursor: pointer; }\n          .jm-footer ._top-wrap ._top .social .link > a {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%; }\n          .jm-footer ._top-wrap ._top .social .link.github {\n            background-image: url(" + __webpack_require__(18) + "); }\n          .jm-footer ._top-wrap ._top .social .link.zhihu {\n            background-image: url(" + __webpack_require__(20) + "); }\n          .jm-footer ._top-wrap ._top .social .link.wechat {\n            background-image: url(" + __webpack_require__(19) + "); }\n            .jm-footer ._top-wrap ._top .social .link.wechat .hover-content {\n              position: absolute;\n              width: 160px;\n              height: 160px;\n              left: -68px;\n              top: -170px;\n              box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n              transform: scale(0);\n              opacity: 0;\n              transform-origin: bottom;\n              transition: all .2s ease; }\n          .jm-footer ._top-wrap ._top .social .link.mail {\n            opacity: .5;\n            background-image: url(" + __webpack_require__(17) + "); }\n            .jm-footer ._top-wrap ._top .social .link.mail .hover-content {\n              position: absolute;\n              background: #fff;\n              white-space: nowrap;\n              height: 24px;\n              line-height: 24px;\n              padding: 0 12px;\n              left: 50%;\n              margin-left: -44px;\n              top: -36px;\n              font-size: 12px;\n              box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n              transform: scale(0);\n              opacity: 0;\n              transform-origin: bottom;\n              transition: all .2s ease; }\n          .jm-footer ._top-wrap ._top .social .link:hover {\n            opacity: 1 !important; }\n            .jm-footer ._top-wrap ._top .social .link:hover .hover-content {\n              opacity: 1;\n              transform: scale(1); }\n  .jm-footer ._bottom-wrap {\n    position: relative;\n    height: 144px;\n    line-height: 144px; }\n    .jm-footer ._bottom-wrap ._bottom {\n      position: relative; }\n      .jm-footer ._bottom-wrap ._bottom .logo {\n        font-family: 'Roboto Mono';\n        font-size: 22px;\n        height: 144px;\n        line-height: 144px;\n        color: #106cc8;\n        cursor: default;\n        float: left; }\n      .jm-footer ._bottom-wrap ._bottom .info {\n        position: absolute;\n        width: 100%;\n        height: 144px;\n        line-height: 144px;\n        text-align: center;\n        font-size: 12px;\n        color: #000;\n        cursor: default; }\n        .jm-footer ._bottom-wrap ._bottom .info .heart-wrap {\n          position: relative;\n          display: inline-block;\n          width: 14px;\n          height: 24px;\n          line-height: 24px;\n          vertical-align: middle; }\n          .jm-footer ._bottom-wrap ._bottom .info .heart-wrap .heart {\n            position: absolute;\n            left: 0;\n            top: 4px; }\n        .jm-footer ._bottom-wrap ._bottom .info .info-link {\n          cursor: pointer;\n          padding: 8px 0;\n          font-weight: lighter;\n          border-bottom: 2px solid transparent;\n          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n          .jm-footer ._bottom-wrap ._bottom .info .info-link:hover {\n            border-bottom-color: #000;\n            padding: 4px 0; }\n      .jm-footer ._bottom-wrap ._bottom .source {\n        float: right;\n        height: 36px;\n        line-height: 36px;\n        margin: 0;\n        top: 54px; }\n\n/*\n***** 常规 ****\n*/\n.jm-button {\n  display: inline-block;\n  position: relative;\n  margin: 16px 8px;\n  padding: 0 6px;\n  min-width: 88px;\n  height: 36px;\n  line-height: 36px;\n  cursor: pointer;\n  text-transform: uppercase;\n  text-align: center;\n  border-radius: 2px;\n  border: 0 solid #212121;\n  color: #212121;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  background-color: #fff;\n  letter-spacing: .01em;\n  user-select: none;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 90; }\n  .jm-button .content {\n    display: block;\n    min-width: 80px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-family: \"Roboto\";\n    font-weight: 500;\n    font-size: 14px; }\n  .jm-button .ripple-container {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: transparent;\n    transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);\n    overflow: hidden; }\n    .jm-button .ripple-container .ripple {\n      display: none;\n      position: absolute;\n      width: 0;\n      height: 0;\n      top: 0;\n      left: 0;\n      background-color: rgba(0, 0, 0, 0.15);\n      border-radius: 50%;\n      transition: all 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .jm-button.mousedown {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4); }\n    .jm-button.mousedown .ripple-container {\n      background-color: rgba(33, 33, 33, 0.05); }\n    .jm-button.mousedown .ripple {\n      display: block;\n      animation: rippling 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes rippling {\n  0% {\n    transform: scale(0.5);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n  .jm-button.mouseup {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); }\n    .jm-button.mouseup .ripple-container {\n      animation: _container 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .jm-button.mouseup .ripple {\n      display: none;\n      animation: _ripple 0.55s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@keyframes _container {\n  0% {\n    background-color: rgba(33, 33, 33, 0.05); }\n  100% {\n    background-color: transparent; } }\n\n@keyframes _ripple {\n  0% {\n    display: block;\n    opacity: 1; }\n  100% {\n    display: none;\n    opacity: 0; } }\n  .jm-button:hover {\n    background-color: rgba(255, 255, 255, 0.7); }\n  .jm-button:not(._round)._small {\n    height: 30px !important;\n    line-height: 30px !important; }\n    .jm-button:not(._round)._small .content {\n      font-size: 12px !important; }\n  .jm-button._primary {\n    background-color: #106cc8;\n    color: #fff; }\n    .jm-button._primary:hover {\n      background-color: #0760b0; }\n  .jm-button._warn {\n    background-color: #ff5252;\n    color: #fff; }\n    .jm-button._warn:hover {\n      background-color: #d50000; }\n  .jm-button._disabled {\n    background-color: rgba(0, 0, 0, 0.12) !important;\n    color: rgba(0, 0, 0, 0.38) !important;\n    box-shadow: none !important;\n    cursor: default !important; }\n\n/*\n***** 圆形 ****\n*/\n.jm-button._round {\n  width: 56px;\n  min-width: 0;\n  height: 56px;\n  line-height: 56px;\n  padding: 0;\n  border-radius: 50%; }\n  .jm-button._round .icon-wrap {\n    display: block;\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    overflow: hidden; }\n    .jm-button._round .icon-wrap .icon {\n      display: block;\n      position: absolute;\n      width: 24px;\n      height: 24px;\n      top: -24px;\n      left: 0;\n      border-bottom: 24px solid transparent;\n      filter: drop-shadow(rgba(0, 0, 0, 0.87) 0 24px); }\n  .jm-button._round .ripple-container {\n    border-radius: 50%; }\n  .jm-button._round._small {\n    width: 40px;\n    height: 40px;\n    line-height: 40px; }\n  .jm-button._round._primary .icon {\n    filter: drop-shadow(rgba(255, 255, 255, 0.87) 0 24px) !important; }\n  .jm-button._round._warn .icon {\n    filter: drop-shadow(#fff 0 24px) !important; }\n  .jm-button._round._disabled {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26) !important; }\n    .jm-button._round._disabled .icon {\n      filter: drop-shadow(rgba(0, 0, 0, 0.38) 0 24px) !important; }\n  .jm-button._round._flat {\n    display: none !important; }\n\n/*\n***** 扁平 ****\n*/\n.jm-button._flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .jm-button._flat:hover {\n    background-color: rgba(158, 158, 158, 0.2); }\n  .jm-button._flat._primary {\n    color: #106cc8; }\n    .jm-button._flat._primary.mousedown .ripple {\n      background-color: rgba(16, 108, 200, 0.1); }\n  .jm-button._flat._warn {\n    color: #ff5252; }\n    .jm-button._flat._warn.mousedown .ripple {\n      background-color: rgba(255, 82, 82, 0.1); }\n  .jm-button._flat._disabled {\n    background-color: transparent !important;\n    cursor: default;\n    color: rgba(0, 0, 0, 0.38); }\n\n/*\n***** 提示条 ****\n*/\n.jm-tooltip {\n  display: block;\n  position: absolute;\n  width: 58px;\n  top: 50%;\n  left: 50%;\n  color: rgba(255, 255, 255, 0.87);\n  background: #616161;\n  border-radius: 4px;\n  line-height: 22px;\n  height: 22px;\n  font-size: 12px;\n  padding: 0 4px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 89;\n  transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);\n  text-transform: capitalize;\n  transform: scale(0);\n  font-weight: 500;\n  transition-delay: 0; }\n  .jm-tooltip.show {\n    transform: scale(1);\n    transition-delay: .3s;\n    opacity: .9; }\n  .jm-tooltip.to-show-at-top {\n    margin-left: -33px;\n    margin-top: -63px;\n    transform-origin: bottom; }\n  .jm-tooltip.to-show-at-right {\n    margin-left: 42px;\n    margin-top: -9px;\n    transform-origin: left; }\n  .jm-tooltip.to-show-at-bottom {\n    margin-left: -33px;\n    margin-top: 38px;\n    transform-origin: top; }\n  .jm-tooltip.to-show-at-left {\n    margin-left: -105px;\n    margin-top: -11px;\n    transform-origin: right; }\n\n.jm-input {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 172px;\n  min-height: 94px;\n  height: auto;\n  margin: 0 12px;\n  padding: 26px 0 30px; }\n  .jm-input .jm-input-content {\n    position: relative;\n    height: 26px;\n    z-index: 1; }\n    .jm-input .jm-input-content ._input {\n      display: block;\n      position: relative;\n      width: 100%;\n      height: 26px;\n      line-height: 26px;\n      background: transparent;\n      color: rgba(0, 0, 0, 0.87);\n      padding: 2px 2px 1px 2px;\n      border: 0;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      font-size: 16px; }\n    .jm-input .jm-input-content:after, .jm-input .jm-input-content:before {\n      content: '';\n      position: absolute;\n      width: 0;\n      height: 2px;\n      bottom: -4px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      background-color: #106cc8;\n      z-index: 2; }\n    .jm-input .jm-input-content:after {\n      right: 50%; }\n    .jm-input .jm-input-content:before {\n      left: 50%; }\n    .jm-input .jm-input-content .placeholder {\n      position: absolute;\n      cursor: text;\n      color: rgba(0, 0, 0, 0.54);\n      top: 5px;\n      left: 3px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      text-transform: capitalize;\n      transform-origin: left; }\n    .jm-input .jm-input-content .error {\n      position: absolute;\n      left: 3px;\n      bottom: -24px;\n      line-height: 14px;\n      font-size: 12px;\n      color: #dd2c00;\n      opacity: 0;\n      transform: translateY(-10px);\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .jm-input .jm-input-content .char-counter {\n      position: absolute;\n      font-size: 12px;\n      line-height: 14px;\n      color: rgba(0, 0, 0, 0.54);\n      bottom: -24px;\n      right: 3px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      user-select: none;\n      cursor: default; }\n      .jm-input .jm-input-content .char-counter .current {\n        margin-right: .5em; }\n      .jm-input .jm-input-content .char-counter .maximum {\n        margin-left: .5em; }\n  .jm-input.focused .placeholder {\n    transform: scale(0.8) translateY(-30px);\n    color: #106cc8;\n    cursor: default; }\n  .jm-input.focused .jm-input-content:before {\n    width: calc(50% + 4px); }\n  .jm-input.focused .jm-input-content:after {\n    width: 50%; }\n  .jm-input.non-empty .placeholder {\n    transform: scale(0.8) translateY(-30px);\n    color: #106cc8;\n    cursor: default; }\n  .jm-input.invalid .error {\n    transform: translateY(0);\n    opacity: 1; }\n  .jm-input.invalid .char-counter,\n  .jm-input.invalid .placeholder {\n    color: #dd2c00 !important; }\n  .jm-input.invalid ._input {\n    border-bottom-color: #dd2c00 !important; }\n  .jm-input.invalid:after, .jm-input.invalid:before {\n    background-color: #dd2c00 !important; }\n  .jm-input._dark .placeholder {\n    color: rgba(255, 255, 255, 0.7); }\n  .jm-input._dark .char-counter,\n  .jm-input._dark ._input {\n    color: #fff;\n    border-bottom-color: rgba(255, 255, 255, 0.12); }\n  .jm-input._dark .jm-input-content:after,\n  .jm-input._dark .jm-input-content:before {\n    background-color: #ffeb3b; }\n  .jm-input._dark.focused .placeholder {\n    color: #ffeb3b; }\n\n.jm-dialog-wrap {\n  position: absolute;\n  top: -300px;\n  left: 0;\n  width: 100%;\n  height: 1000%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 200;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .jm-dialog-wrap .jm-dialog {\n    position: fixed;\n    width: 80%;\n    min-width: 240px;\n    max-width: 440px;\n    top: 50%;\n    left: 50%;\n    transform: scale(1) translateX(-50%) translateY(-50%);\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n    padding: 24px 24px 6px;\n    opacity: 0;\n    box-sizing: border-box;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transform: scale(0) translateX(-50%) translateY(-50%); }\n  .jm-dialog-wrap.show {\n    opacity: 1; }\n    .jm-dialog-wrap.show .jm-dialog {\n      opacity: 1;\n      transform: scale(1) translateX(-50%) translateY(-50%); }\n  .jm-dialog-wrap .dialog-title {\n    font-family: \"Roboto\";\n    font-weight: 500;\n    font-size: 20px;\n    letter-spacing: .005em;\n    margin-bottom: 12px;\n    line-height: 30px;\n    color: rgba(0, 0, 0, 0.87); }\n  .jm-dialog-wrap .dialog-content {\n    font-family: \"Roboto\";\n    font-size: 16px;\n    line-height: 24px;\n    letter-spacing: .01em;\n    margin: 12px 0;\n    color: rgba(0, 0, 0, 0.87); }\n  .jm-dialog-wrap .prompt-input {\n    display: block;\n    width: 100%;\n    border: 0;\n    background: #fff;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    font-family: \"Roboto\";\n    font-size: 16px;\n    line-height: 26px;\n    margin: 18px 0;\n    padding-bottom: 1px; }\n    .jm-dialog-wrap .prompt-input:focus {\n      padding-bottom: 0;\n      border-bottom: 2px solid #106cc8; }\n    .jm-dialog-wrap .prompt-input.invalid {\n      border-bottom-color: #dd2c00 !important; }\n  .jm-dialog-wrap .buttons {\n    display: flex;\n    position: relative;\n    text-align: center;\n    width: 100%;\n    height: 52px;\n    left: 0;\n    bottom: 0; }\n  .jm-dialog-wrap .jm-button {\n    display: inline-block;\n    margin: 8px 0;\n    min-width: 88px;\n    flex-grow: 1; }\n\n.jm-toast {\n  position: fixed;\n  display: block;\n  background: #323232;\n  min-width: 288px;\n  line-height: 48px;\n  height: 48px;\n  bottom: 0;\n  color: #fafafa;\n  font-size: 14px;\n  left: 50%;\n  padding: 0 18px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  text-align: left;\n  transform: translateX(-50%) translateY(100%);\n  z-index: 300;\n  box-sizing: border-box;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .jm-toast.show {\n    transform: translateX(-50%) translateY(0);\n    opacity: 1; }\n\n.jm-radio-group {\n  position: relative;\n  line-height: 70px; }\n  .jm-radio-group .jm-radio {\n    position: relative;\n    display: inline-block;\n    min-width: 60px;\n    height: 20px;\n    line-height: 20px;\n    margin: 0 10px;\n    cursor: pointer; }\n    .jm-radio-group .jm-radio ._outer {\n      display: block;\n      position: relative;\n      float: left;\n      width: 20px;\n      height: 20px;\n      box-sizing: border-box;\n      border: 2px solid rgba(0, 0, 0, 0.54);\n      border-radius: 50%;\n      margin-right: 12px;\n      transition: all .28s ease;\n      z-index: 9; }\n      .jm-radio-group .jm-radio ._outer ._inner {\n        display: block;\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        left: 3px;\n        top: 3px;\n        transform: scale(0);\n        border-radius: 50%;\n        transition: all .28s ease; }\n    .jm-radio-group .jm-radio .shadow {\n      position: absolute;\n      width: 40px;\n      height: 40px;\n      left: -10px;\n      top: -10px;\n      border-radius: 50%;\n      transform: scale(0);\n      z-index: 8; }\n      .jm-radio-group .jm-radio .shadow.clicked {\n        animation: ripple-out .5s ease; }\n\n@keyframes ripple-out {\n  0% {\n    transform: scale(0);\n    opacity: 0; }\n  30% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(1);\n    opacity: 0; } }\n    .jm-radio-group .jm-radio .label {\n      float: left;\n      user-select: none;\n      color: rgba(0, 0, 0, 0.87);\n      font-size: 14px; }\n    .jm-radio-group .jm-radio .text {\n      text-transform: capitalize; }\n    .jm-radio-group .jm-radio._primary .shadow {\n      background-color: #bdd5ed; }\n    .jm-radio-group .jm-radio._primary[data-checked=true] ._inner {\n      background: rgba(16, 108, 200, 0.87);\n      transform: scale(1); }\n    .jm-radio-group .jm-radio._primary[data-checked=true] ._outer {\n      border-color: rgba(16, 108, 200, 0.87); }\n    .jm-radio-group .jm-radio._warn .shadow {\n      background-color: #fbcece; }\n    .jm-radio-group .jm-radio._warn[data-checked=true] ._inner {\n      background: rgba(255, 82, 82, 0.87);\n      transform: scale(1); }\n    .jm-radio-group .jm-radio._warn[data-checked=true] ._outer {\n      border-color: rgba(255, 82, 82, 0.87); }\n    .jm-radio-group .jm-radio._disabled {\n      cursor: default !important; }\n      .jm-radio-group .jm-radio._disabled ._outer {\n        border-color: rgba(0, 0, 0, 0.38) !important; }\n      .jm-radio-group .jm-radio._disabled .text {\n        color: rgba(0, 0, 0, 0.38) !important; }\n\n.jm-tag {\n  position: relative;\n  padding: 26px 0 30px;\n  box-sizing: border-box;\n  min-width: 172px;\n  min-height: 94px;\n  height: auto;\n  margin: 0 12px;\n  text-align: left; }\n  .jm-tag .jm-tag-content {\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n    width: 100%;\n    line-height: 32px;\n    background: transparent;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    color: rgba(0, 0, 0, 0.87);\n    padding-bottom: 4px; }\n    .jm-tag .jm-tag-content .tag {\n      position: relative;\n      background-color: #e0e0e0;\n      border-radius: 16px;\n      color: #424242;\n      padding: 0 22px 0 12px;\n      margin-right: 6px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      font-weight: 500; }\n      .jm-tag .jm-tag-content .tag .tag-text {\n        display: block;\n        text-align: center;\n        min-width: 32px;\n        line-height: 32px;\n        padding-right: 3px;\n        text-transform: capitalize; }\n      .jm-tag .jm-tag-content .tag .btn-remove {\n        position: absolute;\n        top: 50%;\n        margin-top: -12px;\n        right: 3px;\n        display: block;\n        width: 24px;\n        height: 24px;\n        opacity: 0.6;\n        background: url(" + __webpack_require__(21) + ") no-repeat;\n        background-size: 24px 24px;\n        cursor: pointer; }\n    .jm-tag .jm-tag-content ._input {\n      flex-grow: 1;\n      border: 0;\n      font-size: 16px;\n      line-height: 32px;\n      background: transparent; }\n    .jm-tag .jm-tag-content:after, .jm-tag .jm-tag-content:before {\n      content: '';\n      position: absolute;\n      bottom: -1px;\n      height: 2px;\n      width: 0;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      background-color: #106cc8; }\n    .jm-tag .jm-tag-content:after {\n      right: 50%; }\n    .jm-tag .jm-tag-content:before {\n      left: 50%; }\n    .jm-tag .jm-tag-content .placeholder {\n      position: absolute;\n      opacity: 0;\n      color: rgba(0, 0, 0, 0.54);\n      top: 0px;\n      left: 0px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transform-origin: left;\n      cursor: text;\n      opacity: 1;\n      transform: scale(0.8) translateY(-33px);\n      color: #106cc8;\n      cursor: default; }\n    .jm-tag .jm-tag-content .error {\n      position: absolute;\n      line-height: 14px;\n      font-size: 12px;\n      color: #dd2c00;\n      bottom: -20px;\n      left: 6px;\n      opacity: 0;\n      transform: translateY(-10px);\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n      .jm-tag .jm-tag-content .error.show {\n        transform: translateY(0);\n        opacity: 1; }\n    .jm-tag .jm-tag-content .char-counter {\n      position: absolute;\n      font-size: 12px;\n      line-height: 14px;\n      color: rgba(0, 0, 0, 0.54);\n      bottom: -20px;\n      right: 6px;\n      font-weight: normal;\n      user-select: none;\n      cursor: default;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n      .jm-tag .jm-tag-content .char-counter .current {\n        margin-right: .5em; }\n      .jm-tag .jm-tag-content .char-counter .maximum {\n        margin-left: .5em; }\n  .jm-tag.focused .placeholder {\n    opacity: 1;\n    transform: scale(0.8) translateY(-33px);\n    color: #106cc8;\n    cursor: default; }\n  .jm-tag.focused .jm-tag-content:after,\n  .jm-tag.focused .jm-tag-content:before {\n    width: 50%; }\n  .jm-tag.invalid .error {\n    transform: translateY(0);\n    opacity: 1; }\n  .jm-tag.invalid .char-counter,\n  .jm-tag.invalid .placeholder {\n    color: #dd2c00 !important; }\n  .jm-tag.invalid .jm-tag-content {\n    border-bottom-color: #dd2c00 !important; }\n  .jm-tag.invalid .jm-tag-content:after,\n  .jm-tag.invalid .jm-tag-content:before {\n    background-color: #dd2c00 !important; }\n\n.jm-bg-wrap {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 1 !important;\n  background-color: #3F51B5; }\n  .jm-bg-wrap .jm-bg-block {\n    position: absolute;\n    height: 300%;\n    width: 30%;\n    background-color: #303F9F;\n    transform: rotate(7deg);\n    top: -100%;\n    z-index: 1 !important; }\n    .jm-bg-wrap .jm-bg-block.jm-shadow-light {\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n    .jm-bg-wrap .jm-bg-block.jm-shadow-strong {\n      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n\n.jm-article {\n  text-align: left;\n  font-family: \"Roboto\";\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 14px;\n  line-height: 20px;\n  margin: 4px 0 16px; }\n  .jm-article b {\n    font-weight: 500; }\n  .jm-article u {\n    text-decoration: none;\n    border-bottom: 0.15em solid rgba(0, 0, 0, 0.87);\n    padding-bottom: .1em; }\n  .jm-article strike {\n    text-decoration: strike-through; }\n  .jm-article code {\n    background-color: rgba(0, 0, 0, 0.1);\n    font-family: \"Roboto Mono\";\n    margin: 0 .3em;\n    padding: 0 .3em; }\n  .jm-article h1 {\n    font-family: \"Roboto Mono\";\n    font-size: 24px;\n    line-height: 32px;\n    color: rgba(0, 0, 0, 0.87);\n    margin: 24px 0; }\n  .jm-article p {\n    font-family: \"Roboto\";\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 14px;\n    line-height: 20px;\n    margin: 4px 0 16px; }\n  .jm-article blockquote {\n    border-left: 4px solid #cfd8e6;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-family: \"Roboto\";\n    color: #6b7a8c;\n    font-size: 14px;\n    line-height: 20px;\n    margin: 4px 0 16px; }\n  .jm-article pre {\n    width: auto;\n    color: #000;\n    font-family: 'Roboto Mono';\n    font-size: 12px;\n    line-height: 20px;\n    background-color: #f2f2f2;\n    padding: 8px 12px;\n    margin-bottom: 30px;\n    overflow-x: scroll; }\n  .jm-article li {\n    font-size: 14px;\n    font-family: \"Roboto\"; }\n  .jm-article ul {\n    padding-left: 18px;\n    box-sizing: border-box; }\n    .jm-article ul li {\n      list-style-type: disc; }\n  .jm-article ol {\n    padding-left: 18px;\n    box-sizing: border-box; }\n    .jm-article ol li {\n      list-style-type: decimal; }\n  .jm-article a {\n    color: #039be5; }\n  .jm-article img {\n    display: block; }\n\n.jm-rte {\n  position: relative;\n  width: 100%;\n  background: #fff;\n  box-sizing: border-box;\n  border: 1px solid #e7eaf1; }\n  .jm-rte .actions {\n    position: relative;\n    width: 100%;\n    height: auto;\n    line-height: 40px;\n    height: 40px;\n    padding: 0 10px;\n    background: #fff;\n    box-sizing: border-box;\n    border-bottom: 1px solid #e7eaf1; }\n    .jm-rte .actions .action {\n      display: block;\n      box-sizing: border-box;\n      float: left;\n      position: relative;\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n      vertical-align: top;\n      transition: all .1s ease;\n      cursor: pointer;\n      font-style: normal;\n      font-size: 20px;\n      line-height: 40px;\n      text-align: center;\n      color: #106cc8;\n      font-family: \"Roboto\";\n      font-weight: 500;\n      border-bottom: 1px solid #e7eaf1; }\n      .jm-rte .actions .action .icon-wrap {\n        position: absolute;\n        width: 24px;\n        height: 24px;\n        overflow: hidden;\n        left: 8px;\n        top: 8px; }\n        .jm-rte .actions .action .icon-wrap .icon {\n          position: absolute;\n          display: block;\n          width: 24px;\n          height: 24px;\n          top: -24px;\n          left: 0;\n          filter: drop-shadow(#106cc8 0 24px);\n          border-bottom: 24px solid transparent;\n          background: center no-repeat;\n          background-size: 24px 24px; }\n      .jm-rte .actions .action .jm-tooltip {\n        top: 35px;\n        text-transform: capitalize;\n        width: auto !important;\n        white-space: nowrap;\n        transform: scale(0) translateX(-50%);\n        padding: 0 8px; }\n        .jm-rte .actions .action .jm-tooltip.show {\n          transform: scale(1) translateX(-50%); }\n        .jm-rte .actions .action .jm-tooltip.to-show-at-top {\n          margin-left: 0;\n          transform-origin: 0 100% !important; }\n      .jm-rte .actions .action sub {\n        font-size: small; }\n      .jm-rte .actions .action:hover {\n        background: #f6f7f8; }\n      .jm-rte .actions .action[data-action-abbr=\"b\"] .icon {\n        background-image: url(" + __webpack_require__(24) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"i\"] .icon {\n        background-image: url(" + __webpack_require__(26) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"u\"] .icon {\n        background-image: url(" + __webpack_require__(30) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"s\"] .icon {\n        background-image: url(" + __webpack_require__(35) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"hl\"] .icon {\n        background-image: url(" + __webpack_require__(37) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"p\"] .icon,\n      .jm-rte .actions .action[data-action-abbr=\"h\"] .icon {\n        user-select: none; }\n      .jm-rte .actions .action[data-action-abbr=\"p\"] {\n        font-size: 22px; }\n      .jm-rte .actions .action[data-action-abbr=\"q\"] .icon {\n        background-image: url(" + __webpack_require__(29) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"ol\"] .icon {\n        background-image: url(" + __webpack_require__(28) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"ul\"] .icon {\n        background-image: url(" + __webpack_require__(27) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"code\"] .icon {\n        background-image: url(" + __webpack_require__(23) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"hr\"] .icon {\n        background-image: url(" + __webpack_require__(34) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"link\"] .icon {\n        background-image: url(" + __webpack_require__(31) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"image\"] .icon {\n        background-image: url(" + __webpack_require__(32) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"undo\"] .icon {\n        background-image: url(" + __webpack_require__(36) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"redo\"] .icon {\n        background-image: url(" + __webpack_require__(33) + "); }\n      .jm-rte .actions .action[data-action-abbr=\"clear\"] .icon {\n        background-image: url(" + __webpack_require__(25) + "); }\n    .jm-rte .actions .separator {\n      display: block;\n      float: left;\n      position: relative;\n      height: 40px;\n      width: 1px;\n      background-color: #e7eaf1; }\n  .jm-rte .jm-edit-area {\n    overflow: hidden;\n    clear: both;\n    position: relative;\n    min-height: 15em;\n    margin: 15px 15px 25px;\n    background: #fff;\n    font-size: 16px;\n    line-height: 24px;\n    box-sizing: border-box;\n    color: #333333;\n    padding-bottom: 10px;\n    transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n    .jm-rte .jm-edit-area:after, .jm-rte .jm-edit-area:before {\n      content: '';\n      position: absolute;\n      width: 0;\n      height: 2px;\n      bottom: 4px;\n      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      background-color: #106cc8; }\n    .jm-rte .jm-edit-area:after {\n      right: 50%; }\n    .jm-rte .jm-edit-area:before {\n      left: 50%; }\n    .jm-rte .jm-edit-area:focus:after, .jm-rte .jm-edit-area:focus:before {\n      width: calc(50%); }\n  .jm-rte .char-counter {\n    position: absolute;\n    font-size: 12px;\n    line-height: 14px;\n    color: rgba(0, 0, 0, 0.54);\n    bottom: 8px;\n    right: 15px;\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    user-select: none;\n    cursor: default; }\n    .jm-rte .char-counter .current {\n      margin-right: .5em; }\n    .jm-rte .char-counter .maximum {\n      margin-left: .5em; }\n  .jm-rte.exceeded .char-counter {\n    color: #dd2c00 !important; }\n  .jm-rte.exceeded .jm-edit-area:after, .jm-rte.exceeded .jm-edit-area:before {\n    width: calc(50%) !important;\n    background: #dd2c00 !important; }\n\n.jm-rte-file-input {\n  display: none; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAA00lEQVR4Ae2VQQqCQBRAHwi2sRvYJfIgeZPsIuacJA9Sl8gDDOZWsMXwoR/DZEMbw/c3IsOb31skC2Zlg8EyfTk9hhSFYYocg8JGiywK97Kkmy24c3BPPhFkNIwfJSNnMgiJAApuQc2VPUBI1JIDkFAxeCUPjiQA7Gj9IjcDlTtI7g6quchFnF4uUujVCxwSX+L6f7riPWZDBhJf4gJbDCNTWKSno5QNvBvOFOn4Om6ESOJL3GiRxJe48SKZVfTfov5Xf7UmWlSjSKM+R5aalMWy8gQI5H3N1MjoMQAAAABJRU5ErkJggg=="

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC50lEQVRYR+2WUU7bQBCGZ0zeHFQ4QcNbxFqinIBwgpYTlJ6g6QlIT9BwAsINcoOGEwDKbuCt7g0iJX6zM2gs2xo7a7NOkXjpSiiSmZ395p+d2UF454XvfD60Auj1egf7+/snRDTIwAdEFCJiyL9Jktw9Pz+HbYJyAuj3+729vb0rRPwCAAevHDAjookx5tYFpBGAI/Z9/xciXro4kzasCABcGGMemvbWAiilPgHADSLy77+sodb6us6BFYAPR8TfDnI7gW02m+vFYjG0GW8BZLLfI2LPybujERF9M8ZMquZbAEqpKSJ+zg15YxRFU9/3+QKOEPFj05lEdJskyYirIQgCErZLIjqv3okSgFLqEhFvKpfpVG4KgmAQx3FYLTfb9yAIZgBwJvzNtNbn0n8JwLIBiKgE4Kh4ambzF8fxkYQvALjWO53OH8sB51prjqT1UkpxkyqljFNkjCnKugAIgmAEAFcV+R+NMTuXoS2lALDUWh/m50iAar4gSZKLp6enaevQxQal1AMinkgf6/X6MAzDJX9rBJCGu0JUqyrzU6RVAsiSSe201k5vRRNcTWqLniABWJIP0tlbABwfH489z/su/crUNqYAAHaugPxA2x2QfgsApdQEEb9K0qYe7nIn6kpbKttYhlwycRyfth0yRPSlts7fieivMaZ4Z6QC/ALeVyMjogfOWVsIm6IZgL0RydZJRI8AMAaAYV7DPOV4njeZz+d3dfJnz/gZEfE+62ta24rZaeYgVYGIxlEU/fR9fyYbCcNFUTTIG0kOYys3i5ql6EuNSOStuIwsved53M+5S6YlSkQ/jDGsztaqPL9b/69GbwXIBpI0ap7rjDFHWXp4Al42zXi2xyencB5IeIOEAACGGa1WK74X6arKL9Kw9Z5kqlmnIasCubMKhJSztjnVzBO1hzcC5Ep0u10eJvkvb9OuAFwto9dmCafHJlNjzJ2yaULKFGD2Vw/OJXUCqKv7t/j+H+AFauioME6ufsIAAAAASUVORK5CYII="

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3ElEQVRYR+1WQW7aUBCdsdk5UukJSnbAt9T0BCEnKCy7arLIqouGE7ScoHTdRemqUjclJyicIFT6H9iV3CCRbLGxPdVYNv18m9gOldjES/gz8+bNzJtBOPCHB44PTwAKGWi1Wl3Lsk4R8UQvFxHNiGgyn8+v9ynjTgBCiHMA+ICIjYcCENEKEYdSys+PAZIB0Gg06kdHR18BoFvR4cTzvN5qtbqrYrcFgIM7jvPLpLusQy6L7/tnVUBsAWi320PLst5rAe+J6A4RX+SBIKLfSYmepf8T0UgpdVEW9AaAEOIEEW90Q8/znnM2QogZIr40nE6llJ08OwA4k1JOyoDYAMjJHgoAjKWUvWaz2ajVan+MCfmmlOImLvx0BjJZcocDAJdgawQ1utmGp6Se/DblkgHAWCk1KowO8E8JXdelMgY5b6ZhGP6wLMsHgI4+tmW0YsOA67qMfNNMZcAQUR8ROXtu3JSFjCkzGUVRf7FYjM0/dQDcNKdlAvObMAzfWZZ1WWVkiWiolOrrMfQeuELETyUBDIioq03GNIqimTHCQES3iMi9cKWxO5BSfkzjbAAkCshN92AZ2CkADHWw2rSMEPFt6jwMwx7TLoTYSi4IguPlcsmxttcx6z8isgzv/LjunJEuThxovV5PHMe5MZpw6Pv+wJR2ItqMaWYXCCG2sjCREBHX/UvJUuU+46ZUSh1nGEhf54mSRusb27a/7wOAbaWUcfK561gIMUbE13lBwjC8tG17LwYA4F5KGY9tLgBNE+KOdV23wyLDBkEQjEzprcoGEV0rpeJ1nwHA2m7bNgvGuVJqlue8qE+KABHRRSrVhSdZnrNkATG4SsqZ+Iq3aEYHilCb//OtaNv2zyp2fD/4vt/RD5ZHMZAG5VuAN9+ugyVnhF+ZZd0LgAaEdz+Lk3m08EUVHyY8VXrt9y7BLuqTieFpWaVyy2+T875u3gn/hYEqfWC+fQJwcAb+ApxrXDAfRyy9AAAAAElFTkSuQmCC"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChUlEQVRYR+2X0XHaQBCGbyXeYCZ0EPkNuJsxrsBJB04FgQpMKrCpILiCkApiV2BcQZjhFnhD6SCZkd6ENrOaO+YsSxgbhPMQPUqn3W/39v7dA/HGD7yxf1EKoJT6IIS4jKKoH4bh76pACwHa7faF7/s/iOgOES+qcs52CwGklCEAvCeiL4g4OiqAlLILAD/ZKRGdIeJ0FwD+z/O8d7us5TWz2eyhMAOdTmfked6lMTR5zmCSJP3lchkqpXjt+XPr7XetdZb9J1tg07+rISHER6315CAApvLv2fl6vf7k+76t/uxdmqY3nufdunBRFE35lDgAQ631dVEArv3CDEgpxwDwOV/9SikyBrNoS4zbLXgdQKvVCmq12oqIfsVx3HXP/lEApJQ9AAiiKBrlhecoANuK7j/A0TJgROi0YDu4MbEyTgHgUWMyJ2a09zE0RfjtBQKULSWiEBFP9gYwIpFF6j5EFLA2mHfDIkAWnr0ByiKXUg4A4CvrAyIGZeuqBChUxzxIlQBceKemD6y01jeVSHGRUSvP5htXf5OIxojYP0oGlFLc1a54/4UQE1uMnI35fD5wIQ6+BUEQNBuNxoqjtg5ttzTHr4+IYwtxcAAbPTtIkuSEpx6GqtfrnIlMrHhmWCwW2XxgAVgXhBBDC2dGvCuzfU0A6PL60omIP7pzoRDiQWu90QcXwt0KdyJixUTEMzeIfM2UAhgH95bUjlyuAQM4IaJbROwZ6KydCyEY9tzINkf7RwjxZLK2U9OjmTDvnIi+Wwf5CBiCneXH9txUfRfHcW/bxWYDUOQ8juPBa25FUsppmqbXtj629ZcNgOmEHJVN7U73gZc2r/z6f/dyum9ku/7/FyEf9zARBJsjAAAAAElFTkSuQmCC"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAa0lEQVR4AeWSsREDIQwEtwlRhO3vP0JFPLgeHJDdnEfBh2y8F2hHnM5FJ1AayRtLshiE6F8WHUsw9kT0m8BDMFlMotZ10rzuaHtS63qo6s8HWkaLFXpo5ErXyKWukS25dRM5sXz+Pt+Ls/kBnolC6l7shJkAAAAASUVORK5CYII="

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAYCAQAAAB68uRSAAAAKElEQVR4AWNhcGdgYGH4CyL+wVkI4g8W4jcuiT9YDPgHJ/7DiP9AAgBhORhg+gPD+AAAAABJRU5ErkJggg=="

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAZklEQVR4Ae2SSwqDQBQEy9NkkbskinodeXhrPzCupEfCdMT11Lpq1c0DKkEgGmbC64mFFydvNhLh9Q85PftvIn2V7hLpX4QYron0lhJjnijo/gc+MTpKvO4TryvJhyvrSiZzlcpNDhsQO00UpCeTAAAAAElFTkSuQmCC"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAcklEQVR4AWMYhuA/EvzNcJYhkKAGDJhIjIYGMJzL8A/IfsvATlgDDMwH80yI17AAzNMh1kkLwE46SpqnnzBIkRpK04kPpWaGG2BeKPGelgfzVhOvQQHM20Gsk1oYboF5Tfg1YIaTCPEaPjOsATqLZDAKAFiLbjQmEpa/AAAAAElFTkSuQmCC"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAiklEQVR4AeXQMQ4BYRSF0SOZZiZiE/T2IFFYhFpnK1NYhVHJiELMRqxC9Dzd35FXSny3Ps31vy2dNNiLjwMAR2HQqHQ5ULsUcsgACgETD+FuDADfyFoILeRIpfM0hTzZAHmSbi7kCXZCnpRDr1myFUKrzpGRm/AyI0dWQjhDlgAKGYRePo3ewm/3Bt8VYXmuiBuMAAAAAElFTkSuQmCC"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAWklEQVR4AWMYtuA/KhxIDQjAz/AZqPADAw+xvigAm9xPrHImhjtA5X8ZlInV4A02fwvxwboTrMGdWOXqDP+Aym8wMBKrYQrY/BxilfOBA/QjA88QShKEwSgAAGTcR7tvmpGfAAAAAElFTkSuQmCC"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAK0lEQVR4AWMYNoCRwRsIGYlWD1T8Hwi9gaz/uCEFGhBOohYYDaXRUBohAACmQ2a1MYSMMQAAAABJRU5ErkJggg=="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAO0lEQVR4AWMYNuA/EJKqBUbjhpRqGIyh9I80LQsZKknxdB3DHJJCCSow4IBCJzUANRDwNCUaoAIjBgAAuhFpzbm35OEAAAAASUVORK5CYII="

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAKElEQVR4AWOgNRgF/xEQnT+qAQU4gKUPYPBxggNgBQ7ofJqbT2swCgA1+1+pSf/3aAAAAABJRU5ErkJggg=="

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAdElEQVR4Ae3LMWqDcABH4Q8UvUN7RkmP4AHqFsidTEDSSTyIdPvVpeDyJ2RJHfq9+Tm6iN5eL/Li4X/4Fp/2BrEquolZ5VdtEaOiDxFnFahdRHSKWl8iZsPWImLSKPPuLrsmbx5onVytW6NO40+l3PPDkf0AN5Jo0cv28yoAAAAASUVORK5CYII="

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAi0lEQVR4Ae3RPWrDQBSF0WMtzyBso0UFDNmTf7aSIkVwVEiovGnEKwbhJrjz+ZrbzGvG22sN7hZZQ+3FzUnjU8Toaw21RxFnlEH82NvZstN7iINyF3vPHMVVWYx1PU1AZzL/48FN9J4ZxEU5iYejzpbO4Lc9eRYx+V5D7UnEh8bB1bz5cbOL3iu9/QGK0F5cKivlMAAAAABJRU5ErkJggg=="

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAfklEQVR4AWMYvCCQ4SXDfzzwFYM/inqQcgLwJaqG/4QhdTSMavjEEMzwlbCGM3BWCFA8gZCGbQzMDCvBrF6ozAJ8Gu4zCAHZnAynGQ4xsEBluBiu4tLwncEIypNikECS02L4il1DMs60nECFYH1FUPkLVA3+DC8JKPcdtJkfAOP7FYNmtpD9AAAAAElFTkSuQmCC"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAk0lEQVR4Ae3MMQrCQBBA0X+MNBaCaK94Ab1CLrRJZZW19QI2HkCxEqzTewxdrNSMMCDCzPZa5E21s/zh13oBjzkNLTc6Ei0NMz4qBGPCEXGzZwTUiA1K7rp8cCISWHPmpZvEFrFBqZ9PIgVfAzZ0CGKDsV6/ssTb5YKDXl/g1YgPpvqIeBWSC4asuFBgBcRM72+8ARARVZR1fjceAAAAAElFTkSuQmCC"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAGElEQVR4AWMgDEbBKPiPG1KqAROMglEAAAoWG+UEvH49AAAAAElFTkSuQmCC"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAvUlEQVR4Ae3LM0IHcBTA8W+2pnyF5lxjSzxAxpatJdcF6hKZc3ZbtpZs62W7/vr8+IQyMCaONpbZYYByHHmHDVOcP1j7+PGmFmkbIYsEGuS/gT2vMuGYc7axBFEjI+G8ykoaVjEB4UL+5fLhDUMy0os3P+38/fX1gVfoE8mmNAahK+sFqcxcrhhu5cpAAa8KkYY2tEGUSZzDq4xYkJYOEomigmOJ3HmDE0ucP1qFvMOUFNpY54gJqvBC4wsuANIxbMcgWLgzAAAAAElFTkSuQmCC"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAjklEQVR4Ae3LMWrCABSA4e8eoVAQcRXEOzjaG8XRRQyI3kC8gCC46SzuHqNNt6Sv0KWFvKVDoUP+f/78XX2lXxY/yFTlrvbh1c3KJAdfxMhZdD4ZZiDsvQuhcbG2ULlqhFB7yUAIra3Cd4WNVmjMc3DQbaYW3gwyEMqUtMIxBznZCWGcgZw8eVh69k/q+wSQ/FWQ7uyTVAAAAABJRU5ErkJggg=="

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAaUlEQVR4AWMYMPAfCKmtwZhBGqcGWQYDdOX6DO8ZbiFrQVF+h+Edgy6qoBDDOaCZxxgY0VUDRU4BZc4yCALZaFp2MuhhtcGIYQ9QlkqBiR0Obw0NWJU34AunBvzKCWtpIDU2GIaDBvoDAIBJhpI4SuBbAAAAAElFTkSuQmCC"

/***/ })
/******/ ]);