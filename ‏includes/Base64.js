var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(r) {
        var t, e, o, a, h, c, n, d = "",
            C = 0;
        for (r = Base64._utf8_encode(r); C < r.length;) a = (t = r.charCodeAt(C++)) >> 2, h = (3 & t) << 4 | (e = r.charCodeAt(C++)) >> 4, c = (15 & e) << 2 | (o = r.charCodeAt(C++)) >> 6, n = 63 & o, isNaN(e) ? c = n = 64 : isNaN(o) && (n = 64), d = d + this._keyStr.charAt(a) + this._keyStr.charAt(h) + this._keyStr.charAt(c) + this._keyStr.charAt(n);
        return d
    },
    decode: function(r) {
        var t, e, o, a, h, c, n = "",
            d = 0;
        for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length;) t = this._keyStr.indexOf(r.charAt(d++)) << 2 | (a = this._keyStr.indexOf(r.charAt(d++))) >> 4, e = (15 & a) << 4 | (h = this._keyStr.indexOf(r.charAt(d++))) >> 2, o = (3 & h) << 6 | (c = this._keyStr.indexOf(r.charAt(d++))), n += String.fromCharCode(t), 64 != h && (n += String.fromCharCode(e)), 64 != c && (n += String.fromCharCode(o));
        return n = Base64._utf8_decode(n)
    },
    _utf8_encode: function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var t = "", e = 0; e < r.length; e++) {
            var o = r.charCodeAt(e);
            o < 128 ? t += String.fromCharCode(o) : (127 < o && o < 2048 ? t += String.fromCharCode(o >> 6 | 192) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128)), t += String.fromCharCode(63 & o | 128))
        }
        return t
    },
    _utf8_decode: function(r) {
        for (var t = "", e = 0, o = c1 = c2 = 0; e < r.length;)(o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), e++) : 191 < o && o < 224 ? (c2 = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & c2), e += 2) : (c2 = r.charCodeAt(e + 1), c3 = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), e += 3);
        return t
    }
};