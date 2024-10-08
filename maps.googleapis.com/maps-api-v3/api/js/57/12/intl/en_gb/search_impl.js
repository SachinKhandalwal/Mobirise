google.maps.__gjsload__('search_impl', function(_) {
    var Mtb = function(a, b) {
            _.G(a.Hg, 3, b)
        },
        Qtb = function(a, b, c) {
            const d = _.NK(new Ntb);
            c.Vq = (0, _.Ca)(d.load, d);
            c.clickable = a.get("clickable") != 0;
            _.jWa(c, _.DR(b));
            const e = [];
            e.push(_.Ak(c, "click", (0, _.Ca)(Otb, null, a)));
            _.Kb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.Ak(c, f, (0, _.Ca)(Ptb, null, a, f)))
            });
            e.push(_.Ak(a, "clickable_changed", function() {
                a.Eg.clickable = a.get("clickable") != 0
            }));
            a.Fg = e
        },
        Otb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() == 0)) {
                f.location = _.U(e.Hg,
                    2) ? new _.Vj(_.vu(_.K(e.Hg, 2, _.Au).Hg, 1), _.vu(_.K(e.Hg, 2, _.Au).Hg, 2)) : null;
                f.fields = {};
                const g = _.Ii(e.Hg, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.gs(e.Hg, 3, _.RR, h);
                    f.fields[k.getKey()] = k.getValue()
                }
            }
            _.Ok(a, "click", b, c, d, f)
        },
        Ptb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.Ok(a, b, c, d, e, h, g)
        },
        Rtb = function() {},
        Stb = class extends _.R {
            constructor() {
                super()
            }
            Pi() {
                return _.aj(this.Hg, 2)
            }
        },
        Ttb = [_.L, , , _.Bp, _.xXa];
    var Utb = class extends _.R {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Hg, 1, -1)
        }
        getLocation() {
            return _.Ui(this.Hg, 2, _.Au)
        }
    };
    var Ntb = class {
        constructor() {
            var a = _.Go,
                b = _.Fo;
            this.Fg = _.cj;
            this.Eg = _.dr(_.ty, a, _.OA + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new Utb(g);
                b(g)
            }
            var d = new Stb;
            _.G(d.Hg, 1, a.layerId.split("|")[0]);
            _.G(d.Hg, 2, a.featureId);
            Mtb(d, this.Fg.Eg().Eg());
            for (var e in a.parameters) {
                var f = _.Xi(d.Hg, 4, _.RR);
                _.G(f.Hg, 1, e);
                _.G(f.Hg, 2, a.parameters[e])
            }
            a = _.Ri(d.yi(), Ttb, 1);
            this.Eg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    Rtb.prototype.fF = function(a) {
        if (_.In[15]) {
            var b = a.Ig;
            const c = a.Ig = a.getMap();
            b && a.Eg && (a.Gg ? (b = b.__gm.Vj, b.set(b.get().Cn(a.Eg))) : a.Eg && _.GWa(a.Eg, b) && (_.Kb(a.Fg || [], _.Ck), a.Fg = null));
            if (c) {
                b = new _.Cx;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.Vx(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.Nx(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.Nx(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.dpa(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.Ix(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.jA(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.Ama(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.Wx(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Ioa(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.lB(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Xla(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Eg = b;
                a.Gg = a.get("renderOnBaseMap");
                a.Gg ? (a = c.__gm.Vj, a.set(a.get().El(b))) : Qtb(a, c, b);
                _.Ll(c, "Lg");
                _.Jl(c, 148282)
            }
        }
    };
    _.sk("search_impl", new Rtb);
});