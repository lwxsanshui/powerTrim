/*!
  Copyright (c) 2021 lwx_sanshui.
  Licensed under the MIT License (MIT)
*/
(function () {
    'use strict';
    const noWidthChars = ' \b\n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u200c\u200d\u200e\u200f\u2028\u2029\u3000';
    function powerTrim () {
        let keyword = arguments[0];
        let maxLen = arguments[1] || 0;
        if(typeof keyword === 'string') {
            let len = keyword.length;
            //去除首部空白字符
            for (let i = 0; i < len; i++) {
                if (noWidthChars.indexOf(keyword.charAt(i)) === -1) {
                    keyword = keyword.substring(i);
                    break;
                }
            }
            //去除尾部空白字符
            for (let i = keyword.length - 1; i >= 0; i--) {
                if (noWidthChars.indexOf(keyword.charAt(i)) === -1) {
                    keyword = keyword.substring(0, i + 1);
                    break;
                }
            }
            //如果传了第二个参数，则截取
            if (maxLen && typeof maxLen === 'number') {
                keyword = keyword.slice(0,maxLen);
            }

            //如果字符串完全由不可见字符组成，返回''
            return noWidthChars.indexOf(keyword.charAt(0)) === -1 ? keyword : '';
        }else {
            return keyword;
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        powerTrim.default = powerTrim;
        module.exports = powerTrim;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        // register as 'powerTrim', consistent with npm package name
        define('powerTrim', [], function () {
            return powerTrim;
        });
    } else {
        window.powerTrim = powerTrim;
    }
}());
