google.maps.__gjsload__('geometry', function(_) {
    var Hpa = function(a, b) {
            return Math.abs(_.mj(b - a, -180, 180))
        },
        Ipa = function(a, b, c, d, e) {
            if (!d) {
                c = Hpa(a.lng(), c) / Hpa(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.Uf(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.Uf(b.lat())), _.Vf(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.Zl(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.Uf(a.lat());
            a = _.Uf(a.lng());
            d = _.Uf(b.lat());
            b = _.Uf(b.lng());
            c = _.Uf(c);
            return _.mj(_.Vf(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        Jpa = function(a, b) {
            a = new _.Vj(a, !1);
            b = new _.Vj(b, !1);
            return a.equals(b)
        },
        Kpa = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.ij(a); f < g; ++f) e = b ? b(a[f]) : a[f], PB.TC(e[0] - d[0], c), PB.TC(e[1] - d[1], c), d = e;
            return c.join("")
        },
        QB = {
            containsLocation: function(a, b) {
                a = _.dk(a);
                const c = _.mj(a.lng(), -180, 180),
                    d = !!b.get("geodesic"),
                    e = b.get("latLngs");
                var f = b.get("map");
                f = !d && f ? f.getProjection() : null;
                let g = !1;
                for (let k = 0, m = e.getLength(); k < m; ++k) {
                    const p = e.getAt(k);
                    for (let t = 0, v = p.getLength(); t < v; ++t) {
                        const w = p.getAt(t),
                            y = p.getAt((t + 1) % v);
                        var h = _.mj(w.lng(), -180, 180);
                        const z = _.mj(y.lng(), -180, 180),
                            B = Math.max(h, z);
                        h = Math.min(h, z);
                        (B - h > 180 ? c >= B || c < h : c < B && c >= h) && Ipa(w, y, c, d, f) < a.lat() && (g = !g)
                    }
                }
                return g || QB.isLocationOnEdge(a, b)
            }
        };
    _.Ea("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", QB.containsLocation);
    QB.isLocationOnEdge = function(a, b, c) {
        a = _.dk(a);
        c = c || 1E-9;
        const d = _.mj(a.lng(), -180, 180),
            e = b instanceof _.po,
            f = !!b.get("geodesic"),
            g = b.get("latLngs");
        b = b.get("map");
        b = !f && b ? b.getProjection() : null;
        for (let t = 0, v = g.getLength(); t < v; ++t) {
            const w = g.getAt(t),
                y = w.getLength(),
                z = e ? y : y - 1;
            for (let B = 0; B < z; ++B) {
                var h = w.getAt(B);
                const C = w.getAt((B + 1) % y);
                if (Jpa(h, a) || Jpa(C, a)) return !0;
                var k = _.mj(h.lng(), -180, 180),
                    m = _.mj(C.lng(), -180, 180);
                const H = Math.max(k, m),
                    N = Math.min(k, m);
                if (k = Math.abs(_.mj(k - m, -180, 180)) <= 1E-9 &&
                    (Math.abs(_.mj(k - d, -180, 180)) <= c || Math.abs(_.mj(m - d, -180, 180)) <= c)) {
                    k = a.lat();
                    m = Math.min(h.lat(), C.lat()) - c;
                    var p = Math.max(h.lat(), C.lat()) + c;
                    k = k >= m && k <= p
                }
                if (k) return !0;
                if (H - N > 180 ? d + c >= H || d - c <= N : d + c >= N && d - c <= H)
                    if (h = Ipa(h, C, d, f, b), Math.abs(h - a.lat()) < c) return !0
            }
        }
        return !1
    };
    _.Ea("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", QB.isLocationOnEdge);
    var PB = {
        decodePath: function(a) {
            const b = _.ij(a),
                c = Array(Math.floor(a.length / 2));
            let d = 0,
                e = 0,
                f = 0,
                g;
            for (g = 0; d < b; ++g) {
                let h = 1,
                    k = 0,
                    m;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                e += h & 1 ? ~(h >> 1) : h >> 1;
                h = 1;
                k = 0;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                f += h & 1 ? ~(h >> 1) : h >> 1;
                c[g] = new _.Vj(e * 1E-5, f * 1E-5, !0)
            }
            c.length = g;
            return c
        }
    };
    _.Ea("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", PB.decodePath);
    PB.encodePath = function(a) {
        a instanceof _.Tm && (a = a.getArray());
        a = (0, _.el)(a);
        return Kpa(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    _.Ea("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", PB.encodePath);
    PB.TC = function(a, b) {
        for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
        b.push(String.fromCharCode(a + 63))
    };
    var Lpa = {
        encoding: PB,
        spherical: _.Aq,
        poly: QB
    };
    _.qa.google.maps.geometry = Lpa;
    _.sk("geometry", Lpa);
});