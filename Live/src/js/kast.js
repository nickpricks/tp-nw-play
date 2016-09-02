/*! Kast v1.2 Build 12000 - Extraordinary SHOUTcast HTML5 Radio Player for jQuery - Material Design | © Manar Kamel (manarkamel.github.io) */
!function (a, b, c, d) {
    function e(d, e) {
        this.opt = a.extend({}, g, e);
        var f = function () {
            var a = new Audio;
            return !(!a.canPlayType || !(a.canPlayType("audio/mpeg;").replace(/^no$/, "") || a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") || a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") || a.canPlayType("audio/aac;").replace(/^no$/, "")))
        };
        if (!(this.opt.host && f && b.DOMParser && c.implementation.createHTMLDocument))throw a.data(c.body, "plugin_kast", null), Error("Kast couldn't load");
        e.language && (this.opt.language = a.extend({}, g.language, e.language)), "object" == typeof e.colors && (this.opt.colors = a.extend({}, g.colors, e.colors)), "minimized" !== this.opt.startTemplate || this.opt.statusBar && this.opt.minimizeMaximize || (this.opt.played = !1);
        var h = this.opt, i = "https:" === c.location.protocol ? "https" : "http";
        h.direct && "https" === i && (h.protocol = i), this.host = h.protocol + "://" + h.host + ":" + h.port + "/", this.hostCORS = [i + "://localhost/" + this.host, i + "://localhost/" + this.host];
        var j = h.sid, k = h.directStreamURL || (j > 1 ? this.host + "stream/" + j + "/;" : this.host + ";");
        this.audio = c.createElement("audio"), this.audio.src = k + "?_=" + Math.random(), this.audio.load(), this.mobile = !1, this.mobileMedium = !1, this.mobileUltra = !1;
        var l = h.mobileCare, m = l[1] || "599px";
        l && b.matchMedia && b.matchMedia("(max-width: " + m + ")").matches && (this.mobile = !0, h.autoPlay = !1, h.startTemplate = "minimized", h.offlineCheck = !1, ("medium" === l[0] || "high" === l[0] || "very high" === l[0] || "ultra" === l[0]) && (this.mobileMedium = !0, "all" === h.autoUpdate && (h.autoUpdate = !0), "dynamic" === h.theme && (h.theme = "light"), "dynamic" === h.colors && (h.colors = !1)), ("high" === l[0] || "very high" === l[0] || "ultra" === l[0]) && (h.artwork = h.played = !1), ("very high" === l[0] || "ultra" === l[0]) && (h.autoUpdate = h.minimizeMaximize = !1), "ultra" === l[0] && (this.mobileUltra = !0, h.statusBar = h.serverInfo = h.currentArtist = h.currentTrack = !1)), this.init()
    }

    function f(a) {
        var b = c.implementation.createHTMLDocument("html");
        return b.documentElement.innerHTML = a, b
    }

    var g = {
        host: "",
        port: 80,
        protocol: "http",
        version: 2,
        sid: 1,
        statsPath: "stats",
        playedPath: "played",
        directStreamURL: !1,
        ui: "colored",
        theme: "light",
        colors: {primary: "cyan", accent: "yellow"},
        startTemplate: "maximized",
        position: "right",
        container: "body",
        autoPlay: !1,
        autoUpdate: !0,
        artwork: !0,
        statusBar: !0,
        minimizeMaximize: !0,
        muteUnmute: !0,
        startMuted: !1,
        serverInfo: !1,
        played: !0,
        currentTrack: !0,
        currentArtist: !0,
        playedTracks: !0,
        playedArtists: !0,
        offlineCheck: !0,
        language: {
            offlineText: "Temporarily Offline",
            playedText: "Played",
            unknownTrackText: "Unknown Track",
            unknownArtistText: "Unknown Artist"
        },
        mobileCare: !0,
        irrelevantWords: ["feat.", "ft.", "Feat.", "Ft."],
        overHTTPS: !1,
        direct: !1,
        betaProxies: !1,
        continuous: !0
    }, h = function (a) {
        this.canvas = c.createElement("canvas"), this.context = this.canvas.getContext("2d"), c.body.appendChild(this.canvas), this.width = this.canvas.width = a.width, this.height = this.canvas.height = a.height, this.context.drawImage(a, 0, 0, this.width, this.height)
    }, i = function () {
    };
    if (h.prototype = {
            clear: function () {
                this.context.clearRect(0, 0, this.width, this.height)
            }, update: function (a) {
                this.context.putImageData(a, 0, 0)
            }, getPixelCount: function () {
                return this.width * this.height
            }, getImageData: function () {
                return this.context.getImageData(0, 0, this.width, this.height)
            }, removeCanvas: function () {
                this.canvas.parentNode.removeChild(this.canvas)
            }
        }, i.prototype.getPalette = function (a, b) {
            for (var c, d, e, f, g, i = new h(a), j = i.getImageData(), l = j.data, m = i.getPixelCount(), n = [], o = 0; m > o; o += 10)c = 4 * o, d = l[c + 0], e = l[c + 1], f = l[c + 2], g = l[c + 3], g >= 125 && (d > 250 && e > 250 && f > 250 || n.push([d, e, f]));
            var p = k.quantize(n, b), q = p ? p.palette() : null;
            return i.removeCanvas(), q
        }, !j)var j = {
        map: function (a, b) {
            var c = {};
            return b ? a.map(function (a, d) {
                return c.index = d, b.call(c, a)
            }) : a.slice()
        }, naturalOrder: function (a, b) {
            return b > a ? -1 : a > b ? 1 : 0
        }, sum: function (a, b) {
            var c = {};
            return a.reduce(b ? function (a, d, e) {
                return c.index = e, a + b.call(c, d)
            } : function (a, b) {
                return a + b
            }, 0)
        }, max: function (a, b) {
            return Math.max.apply(null, b ? j.map(a, b) : a)
        }
    };
    var k = function () {
        function a(a, b, c) {
            return (a << 2 * k) + (b << k) + c
        }

        function b(a) {
            function b() {
                c.sort(a), e = !0
            }

            var c = [], e = !1;
            return {
                push: function (a) {
                    c.push(a), e = !1
                }, peek: function (a) {
                    return e || b(), a === d && (a = c.length - 1), c[a]
                }, pop: function () {
                    return e || b(), c.pop()
                }, size: function () {
                    return c.length
                }, map: function (a) {
                    return c.map(a)
                }, debug: function () {
                    return e || b(), c
                }
            }
        }

        function c(a, b, c, d, e, f, g) {
            var h = this;
            h.r1 = a, h.r2 = b, h.g1 = c, h.g2 = d, h.b1 = e, h.b2 = f, h.histo = g
        }

        function e() {
            this.vboxes = new b(function (a, b) {
                return j.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume())
            })
        }

        function f(b) {
            var c, d, e, f, g = 1 << 3 * k, h = new Array(g);
            return b.forEach(function (b) {
                d = b[0] >> l, e = b[1] >> l, f = b[2] >> l, c = a(d, e, f), h[c] = (h[c] || 0) + 1
            }), h
        }

        function g(a, b) {
            var d, e, f, g = 1e6, h = 0, i = 1e6, j = 0, k = 1e6, m = 0;
            return a.forEach(function (a) {
                d = a[0] >> l, e = a[1] >> l, f = a[2] >> l, g > d ? g = d : d > h && (h = d), i > e ? i = e : e > j && (j = e), k > f ? k = f : f > m && (m = f)
            }), new c(g, h, i, j, k, m, b)
        }

        function h(b, c) {
            function d(a) {
                var b, d, e, f, g, h = a + "1", j = a + "2", k = 0;
                for (i = c[h]; i <= c[j]; i++)if (p[i] > o / 2) {
                    for (e = c.copy(), f = c.copy(), b = i - c[h], d = c[j] - i, g = d >= b ? Math.min(c[j] - 1, ~~(i + d / 2)) : Math.max(c[h], ~~(i - 1 - b / 2)); !p[g];)g++;
                    for (k = q[g]; !k && p[g - 1];)k = q[--g];
                    return e[j] = g, f[h] = e[j] + 1, [e, f]
                }
            }

            if (c.count()) {
                var e = c.r2 - c.r1 + 1, f = c.g2 - c.g1 + 1, g = c.b2 - c.b1 + 1, h = j.max([e, f, g]);
                if (1 == c.count())return [c.copy()];
                var i, k, l, m, n, o = 0, p = [], q = [];
                if (h == e)for (i = c.r1; i <= c.r2; i++) {
                    for (m = 0, k = c.g1; k <= c.g2; k++)for (l = c.b1; l <= c.b2; l++)n = a(i, k, l), m += b[n] || 0;
                    o += m, p[i] = o
                } else if (h == f)for (i = c.g1; i <= c.g2; i++) {
                    for (m = 0, k = c.r1; k <= c.r2; k++)for (l = c.b1; l <= c.b2; l++)n = a(k, i, l), m += b[n] || 0;
                    o += m, p[i] = o
                } else for (i = c.b1; i <= c.b2; i++) {
                    for (m = 0, k = c.r1; k <= c.r2; k++)for (l = c.g1; l <= c.g2; l++)n = a(k, l, i), m += b[n] || 0;
                    o += m, p[i] = o
                }
                return p.forEach(function (a, b) {
                    q[b] = o - a
                }), d(h == e ? "r" : h == f ? "g" : "b")
            }
        }

        function i(a, c) {
            function d(a, b) {
                for (var c, d = 1, e = 0; m > e;)if (c = a.pop(), c.count()) {
                    var f = h(i, c), g = f[0], j = f[1];
                    if (!g)return;
                    if (a.push(g), j && (a.push(j), d++), d >= b)return;
                    if (e++ > m)return
                } else a.push(c), e++
            }

            if (!a.length || 2 > c || c > 256)return !1;
            var i = f(a), k = 0;
            i.forEach(function () {
                k++
            });
            var l = g(a, i), o = new b(function (a, b) {
                return j.naturalOrder(a.count(), b.count())
            });
            o.push(l), d(o, n * c);
            for (var p = new b(function (a, b) {
                return j.naturalOrder(a.count() * a.volume(), b.count() * b.volume())
            }); o.size();)p.push(o.pop());
            d(p, c - p.size());
            for (var q = new e; p.size();)q.push(p.pop());
            return q
        }

        var k = 5, l = 8 - k, m = 1e3, n = .75;
        return c.prototype = {
            volume: function (a) {
                var b = this;
                return (!b._volume || a) && (b._volume = (b.r2 - b.r1 + 1) * (b.g2 - b.g1 + 1) * (b.b2 - b.b1 + 1)), b._volume
            }, count: function (b) {
                var c = this, d = c.histo;
                if (!c._count_set || b) {
                    var e, f, g, h = 0;
                    for (e = c.r1; e <= c.r2; e++)for (f = c.g1; f <= c.g2; f++)for (g = c.b1; g <= c.b2; g++)index = a(e, f, g), h += d[index] || 0;
                    c._count = h, c._count_set = !0
                }
                return c._count
            }, copy: function () {
                var a = this;
                return new c(a.r1, a.r2, a.g1, a.g2, a.b1, a.b2, a.histo)
            }, avg: function (b) {
                var c = this, d = c.histo;
                if (!c._avg || b) {
                    var e, f, g, h, i, j = 0, l = 1 << 8 - k, m = 0, n = 0, o = 0;
                    for (f = c.r1; f <= c.r2; f++)for (g = c.g1; g <= c.g2; g++)for (h = c.b1; h <= c.b2; h++)i = a(f, g, h), e = d[i] || 0, j += e, m += e * (f + .5) * l, n += e * (g + .5) * l, o += e * (h + .5) * l;
                    j ? c._avg = [~~(m / j), ~~(n / j), ~~(o / j)] : c._avg = [~~(l * (c.r1 + c.r2 + 1) / 2), ~~(l * (c.g1 + c.g2 + 1) / 2), ~~(l * (c.b1 + c.b2 + 1) / 2)]
                }
                return c._avg
            }, contains: function (a) {
                var b = this, c = a[0] >> l;
                return gval = a[1] >> l, bval = a[2] >> l, c >= b.r1 && c <= b.r2 && gval >= b.g1 && gval <= b.g2 && bval >= b.b1 && bval <= b.b2
            }
        }, e.prototype = {
            push: function (a) {
                this.vboxes.push({vbox: a, color: a.avg()})
            }, palette: function () {
                return this.vboxes.map(function (a) {
                    return a.color
                })
            }, size: function () {
                return this.vboxes.size()
            }, map: function (a) {
                for (var b = this.vboxes, c = 0; c < b.size(); c++)if (b.peek(c).vbox.contains(a))return b.peek(c).color;
                return this.nearest(a)
            }, nearest: function (a) {
                for (var b, c, e, f = this.vboxes, g = 0; g < f.size(); g++)c = Math.sqrt(Math.pow(a[0] - f.peek(g).color[0], 2) + Math.pow(a[1] - f.peek(g).color[1], 2) + Math.pow(a[2] - f.peek(g).color[2], 2)), (b > c || b === d) && (b = c, e = f.peek(g).color);
                return e
            }, forcebw: function () {
                var a = this.vboxes;
                a.sort(function (a, b) {
                    return j.naturalOrder(j.sum(a.color), j.sum(b.color))
                });
                var b = a[0].color;
                b[0] < 5 && b[1] < 5 && b[2] < 5 && (a[0].color = [0, 0, 0]);
                var c = a.length - 1, d = a[c].color;
                d[0] > 251 && d[1] > 251 && d[2] > 251 && (a[c].color = [255, 255, 255])
            }
        }, {quantize: i}
    }(), l = function (a) {
        if (!a)return null;
        var b, c, d, e, f = /^rgba?[\s+]?\(\s*(([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*,?(?:\s*([\d.]+))?\s*\)?\s*/im, g = a.match(f);
        return g ? (b = parseInt(g[1], 10), c = parseInt(g[2], 10), d = parseInt(g[3], 10), e = (299 * b + 587 * c + 114 * d) / 1e3, e >= 146 ? "dark" : "light") : null
    }, m = new i, n = function (a, b, d, e) {
        for (var f, g = b.length, h = c.createDocumentFragment(), i = 0; g > i; i++) {
            if (a.direct)f = d[b[i]]; else if (2 === a.version)f = d.getElementsByTagName(b[i].toUpperCase())[0].textContent; else {
                var j = d.body.textContent.split(",");
                "currentlisteners" === b[i] ? f = j[0] : "streamstatus" === b[i] ? f = j[1] : "peaklisteners" === b[i] ? f = j[2] : "maxlisteners" === b[i] ? f = j[3] : "uniquelisteners" === b[i] ? f = j[4] : "bitrate" === b[i] ? f = j[5] : "songtitle" === b[i] && (f = j[6])
            }
            i === g - 1 ? h.appendChild(c.createTextNode(f)) : h.appendChild(c.createTextNode(f + " - "))
        }
        e.appendChild(h)
    }, o = function (a) {
        var c;
        c = b.XMLHttpRequest ? new XMLHttpRequest : new XDomainRequest;
        try {
            if (c.open("GET", a.url, !0), a.arraybuffer) {
                if ("string" != typeof c.responseType)return void(a.error && a.error());
                c.responseType = "arraybuffer"
            }
            c.timeout = a.timeout || 3e3
        } catch (d) {
            return void(a.error && a.error())
        }
        c.onload = function () {
            if (4 === c.readyState)if (200 === c.status) {
                var b = a.arraybuffer ? c.response : c.responseText;
                a.load(b, c)
            } else a.error && a.error()
        }, a.error && (c.onerror = a.error), c.ontimeout = c.onerror, setTimeout(function () {
            c.send()
        }, 0), b.kastXHR = c
    }, p = function (a) {
        return a.replace(/(\[.*?\]|\(.*?\))/g, "").replace(/[|&^'`;:$%@"#<>+,]/g, "")
    }, q = c.documentElement.classList;
    e.prototype = {
        init: function () {
            var a = this, b = a.opt, d = c.querySelector(b.container), e = b.colors, f = "object" == typeof e ? "kast-primary-" + e.primary.replace(" ", "") : "", g = "object" == typeof e ? "kast-accent-" + e.accent.replace(" ", "") : "", h = "string" == typeof e ? "kast-colors-" + e : "", i = a.mobile && a.mobileUltra ? "kast-ultra" : "", j = b.statusBar && b.muteUnmute && b.minimizeMaximize ? "" : "kast-not-full-statusbar", k = b.played ? " kast-played " : " kast-current ", l = "body" !== b.container ? "kast-custom-container" : "", m = d.offsetWidth < 380 ? "kast-thin-container" : "", o = "dynamic" === b.theme ? "kast-light" : "", p = "", q = "";
            if (b.statusBar) {
                var r = b.muteUnmute ? '<i id="kast-volume" class="kast-mdi kast-mdi-volume-high"></i>' : "", s = b.minimizeMaximize ? '<i id="kast-minmax" class="kast-mdi kast-mdi-chevron-down"></i>' : "";
                p = '<div id="kast-bar"><p class="kast-offline-status">' + b.language.offlineText + '</p><p id="kast-server"></p>' + r + s + "</div>"
            }
            b.played && (q = '<div id="kast-bottom" class="kast-clearfix"><p>' + b.language.playedText + '</p><ul id="kast-playedlist" class="kast-clearfix"></ul></div>');
            var t = b.continuous ? "kast-paused kast-continuous " : "kast-stopped ", u = "";
            u += '<div id="kast" class="kast-recss kast-' + b.theme + " kast-" + b.ui + " " + f + " " + g + " " + h + " kast-" + b.startTemplate + " kast-" + b.position + " " + i + " " + j + k + " " + l + " " + o + " " + m + '">', u += '<div id="kast-wrapper">', u += p, u += '<div id="kast-top" class="kast-default-art">', u += '<div class="kast-album-wrapper"><i class="kast-mdi kast-mdi-album"></i></div>', u += '<div id="kast-top-content" class="kast-top-content">', u += '<div id="kast-nowplaying"><p id="kast-np-title"></p><p id="kast-np-artist"></p></div>', u += '<div id="kast-linear"></div>', u += "</div>", u += '<div id="kast-play" class="' + t + '">', u += '<i class="kast-mdi kast-mdi-play"></i>', u += '<i class="kast-mdi kast-mdi-pause"></i>', u += '<i class="kast-mdi kast-mdi-stop"></i>', u += "</div></div>" + q + "</div></div>", d.insertAdjacentHTML("beforeend", u), (b.statusBar || b.currentTrack || b.currentArtist) && this.stats(function (d) {
                var e = b.serverInfo;
                if (e && b.statusBar) {
                    var f = c.getElementById("kast-server");
                    "string" == typeof e ? f.textContent = e : n(b, e, d, f)
                }
                a.stats(d)
            }), b.played && (Array.isArray && Array.isArray(b.artwork) ? a.played(!1, !0) : a.played());
            var v = b.autoUpdate;
            return "all" === v ? a.autoUpdate("all") : v && a.autoUpdate(!0), c.getElementById("kast-play").onclick = function () {
                -1 === this.className.indexOf("playing") ? a.play(!b.continuous) : b.continuous ? a.pause() : a.stop()
            }, b.statusBar && (b.muteUnmute && (c.getElementById("kast-volume").onclick = function () {
                -1 !== this.className.indexOf("high") ? a.mute() : a.unmute()
            }), b.minimizeMaximize && (c.getElementById("kast-minmax").onclick = function () {
                -1 !== kast.className.indexOf("minimized") ? a.maximize() : a.minimize()
            })), b.autoPlay && a.play(), b.startMuted && a.mute(), this
        }, play: function (b) {
            var d = c.getElementById("kast"), e = c.getElementById("kast-play");
            if (q) {
                var f = e.classList;
                f.remove("kast-paused"), f.remove("kast-stopped"), f.add("kast-playing")
            } else a(e).removeClass("kast-paused kast-stopped").addClass("kast-playing");
            var g = this.opt.offlineCheck && "false" === d.getAttribute("data-offline");
            return (b || g) && (this.audio.load(), g && d.removeAttribute("data-offline")), this.audio.play(), this
        }, pause: function () {
            var b = c.getElementById("kast-play");
            if (q) {
                var d = b.classList;
                d.remove("kast-playing"), d.remove("kast-stopped"), d.add("kast-paused"), d.add("kast-continuous")
            } else a(b).removeClass("kast-playing kast-stopped").addClass("kast-paused kast-continuous");
            return this.audio.pause(), this
        }, stop: function () {
            var b = c.getElementById("kast-play");
            if (q) {
                var d = b.classList;
                d.remove("kast-playing"), d.remove("kast-paused"), d.remove("kast-continuous"), d.add("kast-stopped")
            } else a(b).removeClass("kast-playing kast-paused kast-continuous").addClass("kast-stopped");
            return this.audio.pause(), this
        }, mute: function () {
            return c.getElementById("kast-volume").className = "kast-mdi kast-mdi-volume-off", this.audio.muted = !0, this
        }, unmute: function () {
            return c.getElementById("kast-volume").className = "kast-mdi kast-mdi-volume-high", this.audio.muted = !1, this
        }, minimize: function () {
            var b = c.getElementById("kast");
            if (q) {
                var d = b.classList;
                d.remove("kast-maximized"), d.add("kast-minimized")
            } else a(b).removeClass("kast-maximized").addClass("kast-minimized");
            return this
        }, maximize: function () {
            var b = c.getElementById("kast");
            if (q) {
                var d = b.classList;
                d.remove("kast-minimized"), d.add("kast-maximized")
            } else a(b).removeClass("kast-minimized").addClass("kast-maximized");
            return this
        }, stats: function (d) {
            var e = this, g = e.opt, h = c.getElementById("kast"), i = c.getElementById("kast-np-title"), j = c.getElementById("kast-np-artist"), k = c.getElementById("kast-top"), n = c.getElementById("kast-bar"), p = c.getElementById("kast-top-content"), r = c.getElementById("kast-play"), s = function (d) {
                var f, s, t, u = g.language.unknownTrackText, v = g.language.unknownArtistText;
                try {
                    f = (g.direct ? d.songtitle : 2 === g.version ? d.getElementsByTagName("SONGTITLE")[0].textContent : d.body.textContent.split(",")[6]) || v + " - " + u
                } catch (w) {
                    f = v + " - " + u
                }
                s = "string" == typeof g.currentTrack ? g.currentTrack : f.split(" - ")[1] || f || u, t = "string" == typeof g.currentArtist ? g.currentArtist : f.split(" - ")[0] || v, g.currentTrack && (i.textContent = s), g.currentArtist && (j.textContent = t), g.artwork && e.artwork(t, s, function (d) {
                    if (d) {
                        var e = d[0], f = d[1] || e;
                        k.style.backgroundImage = "url(" + e + ")", k.removeAttribute("class"), "dynamic" !== g.theme && "dynamic" !== g.colors || !b.Blob || o({
                            url: f,
                            arraybuffer: !0,
                            load: function (d, e) {
                                b.URL = b.URL || b.webkitURL;
                                var f = c.createElement("img"), i = e.getResponseHeader("content-type"), j = new Uint8Array(d), k = new Blob([j], {type: i});
                                f.src = b.URL.createObjectURL(k), f.onload = function () {
                                    var c = m.getPalette(f, 5), d = "rgb(" + c[0] + ")", e = "rgb(" + c[1] + ")", i = l(d) || "light", j = "kast-primary-" + i, k = l(e) || "dark", o = "kast-accent-" + k;
                                    if ("dynamic" === g.colors) {
                                        var s = g.continuous ? "kast-paused " : "kast-stopped ", t = r.className;
                                        -1 !== t.indexOf("playing") ? r.className = "kast-playing " + o : r.className = s + o, g.continuous && (r.className += " kast-continuous "), p.className = "kast-top-content " + j, g.statusBar && (n.className = j), r.style.backgroundColor = e, "colored" === g.ui && (p.style.backgroundColor = d)
                                    }
                                    if ("dynamic" === g.theme)if ("light" === i)if (q) {
                                        var u = h.classList;
                                        u.remove("kast-dark"), u.add("kast-light")
                                    } else a(h).removeClass("kast-dark").addClass("kast-light"); else if (q) {
                                        var u = h.classList;
                                        u.remove("kast-light"), u.add("kast-dark")
                                    } else a(h).removeClass("kast-light").addClass("kast-dark");
                                    b.URL.revokeObjectURL(f.src), f = null
                                }
                            }
                        })
                    } else {
                        if (q) {
                            var i = h.classList, j = r.classList;
                            j.remove("kast-accent-light"), j.remove("kast-accent-dark"), "dark" === g.theme ? (i.remove("kast-light"), i.add("kast-dark")) : (i.remove("kast-dark"), i.add("kast-light"))
                        } else a(r).removeClass("kast-accent-light kast-accent-dark"), "dark" === g.theme ? a(h).removeClass("kast-light").addClass("kast-dark") : a(h).removeClass("kast-dark").addClass("kast-light");
                        k.className = "kast-default-art", g.statusBar && n.removeAttribute("class"), r.removeAttribute("style"), k.removeAttribute("style"), p.removeAttribute("style"), p.className = "kast-top-content"
                    }
                })
            };
            if ("object" == typeof d)s(d); else {
                var t = function (b, i) {
                    var j = b + g.statsPath + "?sid=" + g.sid, k = 1 === g.version ? "#" : "?_=";
                    1 === g.version && (j = b + "7.html"), o({
                        url: j + k + Math.random(), timeout: 8e3, load: function (a) {
                            var b = 1 === g.version ? f(a) : (new DOMParser).parseFromString(a, "text/xml");
                            "function" == typeof d ? d(b) : s(b)
                        }, error: function () {
                            if (i) {
                                var b = h.hasAttribute("data-offline"), d = c.getElementById("kast-np-title");
                                g.offlineCheck && g.autoUpdate && !b && (q ? h.classList.add("kast-offline") : a(h).addClass("kast-offline"), h.setAttribute("data-offline", "true")), d.hasChildNodes() || s("error")
                            } else t(e.hostCORS[g.betaProxies ? 3 : 1], !0)
                        }
                    })
                }, u = function () {
                    a.ajax({
                        url: e.host + g.statsPath + "?sid=" + g.sid + "&json=1&_=" + Math.random(),
                        dataType: "jsonp",
                        timeout: 8e3,
                        success: function (a) {
                            "function" == typeof d ? d(a) : s(a)
                        },
                        error: function () {
                            var b = h.hasAttribute("data-offline"), d = c.getElementById("kast-np-title");
                            g.offlineCheck && g.autoUpdate && !b && (q ? h.classList.add("kast-offline") : a(h).addClass("kast-offline"), h.setAttribute("data-offline", "true")), d.hasChildNodes() || s("error")
                        }
                    })
                };
                g.direct ? u() : t(e.hostCORS[g.betaProxies ? 2 : 0], !1)
            }
            return this
        }, played: function (b, d) {
            var e = this, g = e.opt, h = c.getElementById("kast-playedlist"), i = function (a) {
                for (; h.firstChild;)h.removeChild(h.firstChild);
                var b, f, i = c.createDocumentFragment(), j = g.language.unknownTrackText, k = g.language.unknownArtistText;
                try {
                    b = g.direct ? a : 2 === g.version ? a.getElementsByTagName("SONG") : a.getElementsByTagName("table")[2].getElementsByTagName("tr"), f = b.length
                } catch (l) {
                    f = 3
                }
                for (var m = function (a, b, f, h) {
                    var i, l, m;
                    try {
                        m = (g.direct ? b[a].title : 2 === g.version ? b[a].getElementsByTagName("TITLE")[0].textContent : b[a].getElementsByTagName("td")[1].textContent) || k + " - " + j
                    } catch (n) {
                        m = k + " - " + j
                    }
                    g.playedTracks && (i = m.split(" - ")[1] || m || j), g.playedArtists && (l = m.split(" - ")[0] || k);
                    var o = c.createElement("li"), p = c.createElement("div"), q = c.createElement("i"), r = c.createElement("div"), s = c.createElement("p"), t = c.createElement("p");
                    p.className = "kast-p-art", q.className = "kast-mdi kast-mdi-album", r.className = "kast-p-info", s.className = "kast-p-title", s.textContent = i, t.className = "kast-p-artist", t.textContent = l, o.appendChild(p), o.appendChild(r), p.appendChild(q), r.appendChild(s), r.appendChild(t), g.artwork && !d ? e.artwork(l, i, function (a) {
                        a ? p.style.backgroundImage = "url(" + a[1] + ")" : p.className = "kast-p-art kast-p-default-art"
                    }) : p.className = "kast-p-art kast-p-default-art", h.appendChild(o)
                }, n = 2 === g.version ? 1 : 2, o = n; f > o; o++)m(o, b, f, i);
                h.appendChild(i)
            }, j = function (a, c) {
                var d = a + g.playedPath + "?sid=" + g.sid + "&type=xml", k = 1 === g.version ? "#" : "&_=";
                1 === g.version && (d = a + g.playedPath + ".html"), o({
                    url: d + k + Math.random(),
                    timeout: 8e3,
                    load: function (a) {
                        var c = 1 === g.version ? f(a) : (new DOMParser).parseFromString(a, "text/xml");
                        b ? b(c) : i(c)
                    },
                    error: function (a) {
                        c ? h.hasChildNodes() || i("error") : j(e.hostCORS[g.betaProxies ? 3 : 1], !0)
                    }
                })
            }, k = function () {
                a.ajax({
                    url: e.host + g.playedPath + "?sid=" + g.sid + "&type=json",
                    timeout: 8e3,
                    dataType: "jsonp",
                    success: function (a) {
                        b ? b(a) : i(a)
                    },
                    error: function () {
                        h.hasChildNodes() || i("error")
                    }
                })
            };
            return g.direct ? k() : j(e.hostCORS[g.betaProxies ? 2 : 0], !1), this
        }, autoUpdate: function (b) {
            var d, e = this, f = e.opt, g = c.getElementById("kast"), h = c.getElementById("kast-server"), i = c.getElementById("kast-play");
            if (q && (d = g.classList), !b)return clearInterval(g.getAttribute("data-interval")), void g.removeAttribute("data-interval");
            var j = function () {
                e.stats(function (c) {
                    var j = -1 !== i.className.indexOf("playing");
                    if (f.offlineCheck) {
                        var k = f.direct ? c.streamstatus : 2 === f.version ? c.getElementsByTagName("STREAMSTATUS")[0].textContent : c.body.textContent.split(",")[1], l = g.hasAttribute("data-offline");
                        c && 1 == k ? l && (q ? d.remove("kast-offline") : a(g).removeClass("kast-offline"), g.setAttribute("data-offline", "false")) : l || (q ? d.add("kast-offline") : a(g).addClass("kast-offline"), g.setAttribute("data-offline", "true"))
                    }
                    if (j && e.play(), "all" === b) {
                        var m = f.serverInfo, o = f.statusBar;
                        "string" != typeof m && o && (h.textContent = "", n(f, m, c, h))
                    }
                    var p = "string" == typeof f.currentTrack && "string" == typeof f.currentArtist;
                    if (!p || f.played) {
                        var r = f.direct ? c.songtitle : 2 === f.version ? c.getElementsByTagName("SONGTITLE")[0].textContent : c.body.textContent.split(",")[6], s = g.getAttribute("data-current");
                        if (!s)return g.setAttribute("data-current", r);
                        if (s !== r) {
                            if (p || e.stats(c), f.played) {
                                var t = Array.isArray && Array.isArray(f.artwork);
                                t ? e.played(!1, !0) : e.played()
                            }
                            g.setAttribute("data-current", r)
                        }
                    }
                })
            }, k = function (a, b) {
                if (!g.hasAttribute("data-interval")) {
                    var c = setInterval(a, b);
                    g.setAttribute("data-interval", c)
                }
            }, l = 8e3;
            return e.mobile && (l = e.mobileMedium ? 16e3 : 12e3), k(j, l), this
        }, artwork: function (a, b, c) {
            var d = this, e = this.opt;
            if (Array.isArray && Array.isArray(e.artwork))return c(e.artwork);
            if (a === e.language.unknownArtistText)return c(null);
            var f = p(a), g = p(b), h = function (a) {
                var b = null;
                if (a.tracks && a.tracks.items[0]) {
                    var c, e = a.tracks.items[0].album.images || "", f = e[2].url || "";
                    c = d.mobileMedium ? e[1].url || "" : e[0].url || "", c && f && (b = [c, f])
                } else if (a.artists && a.artists.items[0] && a.artists.items[0].images[0]) {
                    var g = a.artists.items[0].images || "", c = null, f = null;
                    4 === a.artists.items[0].images.length ? (c = d.mobileMedium ? g[2].url || "" : g[1].url || "", f = g[3].url || "") : (c = d.mobileMedium ? g[1].url || "" : g[0].url || "", f = g[2].url || ""), c && f && (b = [c, f])
                }
                return b
            }, i = function (a, b, d) {
                var e = "https://api.spotify.com/v1/search?q=artist:" + a + "%20track:" + b + "&limit=1&type=track", f = "https://api.spotify.com/v1/search?q=artist:" + a + "&limit=1&type=artist", g = d ? f : e;
                o({
                    url: g, load: function (e) {
                        var f = JSON.parse(e), g = h(f);
                        g ? c(g) : d ? c(null) : i(a, b, !0)
                    }, error: function () {
                        c(null)
                    }
                })
            }, j = e.irrelevantWords;
            if (j) {
                for (var k = j.length, l = 0; k > l; l++)f = f.replace(j[l], ""), g = g.replace(j[l], "");
                i(f, g)
            } else i(f, g);
            return this
        }, destroy: function () {
            b.kastXHR && b.kastXHR.abort(), this.autoUpdate(!1), this.audio.pause(), a.data(c.body, "plugin_kast", null);
            var d = c.getElementById("kast");
            return d && d.parentNode.removeChild(d), this
        }
    }, a.kast = function (b, d) {
        var f = c.body;
        if (a.data(f, "plugin_kast"))"function" == typeof e.prototype[b] && a.data(f, "plugin_kast")[b](d); else {
            if ("destroy" === b)return;
            a.data(f, "plugin_kast", new e(this, b))
        }
    }
}(jQuery, window, document), $(".card-content").click(function () {
    $(".card-content").removeClass("active"), $(this).addClass("active"), $.kast("destroy")
}), $("#radio-1").click(function () {
    $.kast({
        host: "50.7.70.66",
        port: 8485,
        colors: "dynamic",
        theme: "dynamic",
        autoPlay: true,
        ui: "transparent",
        serverInfo: ["servergenre", "servertitle"],
        //mobileCare: ["ultra", "4069px"],
        continuous: false
    })
}), $("#radio-2").click(function () {
    $.kast({
        host: "198.105.220.12",
        port: 3204,
        colors: "dynamic",
        theme: "dynamic",
        ui: "transparent",
        serverInfo: ["servergenre", "servertitle"],
        //mobileCare: ["ultra", "4069px"],
        autoPlay: !0,
        continuous: !1
    })
}), $("#radio-4").click(function () {
    $.kast({
        host: "91.250.77.9",
        port: 30710,
        version: 1,
        colors: {primary: "grey", accent: "light blue"},
        theme: "light",
        ui: "transparent",
        played: !1
    })
}), $("#radio-3").click(function () {
    $.kast({host: "64.40.111.77", port: 8e3, colors: "dynamic", theme: "dynamic"})
});


/*****,
$("#demo-1").click(function () {
    $.kast({host: "94.23.66.173", colors: "dynamic", theme: "dynamic", mobileCare: !1})
}), $("#demo-2").click(function () {
    $.kast({
        host: "192.99.8.170",
        port: 8098,
        colors: "dynamic",
        theme: "dynamic",
        ui: "transparent",
        serverInfo: ["servergenre", "servertitle"],
        autoPlay: !0,
        continuous: !1
    })
}), $("#demo-4").click(function () {
    $.kast({
        host: "176.31.111.65",
        port: 3764,
        version: 1,
        artwork: ["images/video-games-music.jpg", "images/video-games-music-optional-64x64.jpg"],
        colors: "dynamic",
        theme: "dark",
        autoPlay: !0,
        played: !1
    })
}), $("#demo-5").click(function () {
    $.kast({
        host: "50.7.96.138",
        port: 8235,
        artwork: !0,
        colors: "dynamic",
        theme: "dynamic",
        ui: "transparent",
        autoPlay: !0
    })
}), $("#demo-6").click(function () {
    $.kast({
        host: "80.86.106.136",
        port: 8090,
        version: 1,
        colors: {primary: "blue grey"},
        theme: "dynamic",
        continuous: !1
    })
}), $("#demo-7").click(function () {
    $.kast({
        host: "91.250.77.9",
        port: 30710,
        version: 1,
        colors: {primary: "grey", accent: "light blue"},
        theme: "light",
        ui: "transparent",
        played: !1
    })
}), $("#demo-8").click(function () {
    $.kast({
        host: "204.12.193.98",
        port: 8415,
        colors: "dynamic",
        theme: "dynamic",
        startTemplate: "minimized",
        statusBar: !1
    })
}), $("#demo-9").click(function () {
    $.kast({
        host: "206.190.136.212",
        port: 9402,
        colors: "dynamic",
        theme: "dynamic",
        mobileCare: ["ultra", "4069px"],
        continuous: !1
    })
});
* */