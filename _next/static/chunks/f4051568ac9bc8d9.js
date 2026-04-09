;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "88ea299f-6c7b-b38b-4032-54e87434fa80")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 413308, e => {
    "use strict";
    var a, t, n = e.i(816941),
        i = e.i(840171),
        r = e.i(940948),
        s = e.i(649725),
        u = e.i(836271),
        l = e.i(391265),
        o = e.i(813753),
        d = ((a = {}).FREE = "free", a.PRO = "pro", a.VIP = "vip", a),
        c = ((t = {}).FREE = "free", t.LEVEL_1 = "level_1", t.LEVEL_2 = "level_2", t.LEVEL_3 = "level_3", t.LEVEL_4 = "level_4", t.LEVEL_5 = "level_5", t.UNLIMITED = "unlimited", t);
    let g = {
            application: ["agent", "application"],
            profile: ["agent", "profile"],
            walletTransactions: ["agent", "wallet", "transactions"],
            catalog: ["agent", "catalog"],
            pages: ["agent", "pages"],
            pageDetail: e => ["agent", "pages", e],
            bankAccount: ["agent", "bankAccount"],
            branding: ["agent", "branding"],
            pageCatalog: ["agent", "page-catalog"],
            availablePagesForCatalog: ["agent", "page-catalog", "available"],
            catalogTags: ["agent", "page-catalog", "tags"],
            agentPricing: ["agent", "pricing"],
            agentPricingPage: ["agent", "pricing-page"],
            pagesStatistics: ["agent", "pages", "statistics"],
            pricing: ["agent", "pricing"],
            adminAgents: ["agent", "admin", "agents"],
            adminPricing: ["admin", "agents", "dealer-pricing"],
            adminPricingMatrix: ["admin", "agents", "dealer-pricing", "matrix"],
            adminPricingEntry: e => ["admin", "agents", "dealer-pricing", e],
            userFeatures: e => ["agent", "users", e, "features"],
            slotCatalog: ["page-slot-catalog"],
            modHandoffs: ["agent", "mod-handoffs"],
            modHandoffDetail: e => ["agent", "mod-handoffs", e]
        },
        p = {
            applyForAgent: async e => (await s.default.post("/agent/applications", e)).data.data,
            getApplication: async () => (await s.default.get("/agent/applications")).data.data,
            getProfile: async () => (await s.default.get("/agent/profile")).data.data,
            getWalletTransactions: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (await s.default.get("/agent/wallet/txns", {
                    params: e
                })).data.data
            },
            createTopupOrder: async e => {
                let a = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                    t = await s.default.post("/billing/agent-topup/orders", e, {
                        headers: {
                            "Idempotency-Key": a
                        }
                    });
                return t.data.data || t.data
            },
            getCatalog: async () => (await s.default.get("/agent/catalog")).data.data,
            createPage: async e => (await s.default.post("/agent/pages", e)).data.data,
            createCatalogTemplatePage: async e => (await s.default.post("/agent/catalog-template-pages", e)).data.data,
            addCatalogTemplatePageToCatalog: async (e, a) => (await s.default.post("/agent/catalog-template-pages/".concat(e, "/add-to-catalog"), a)).data.data,
            getPages: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (await s.default.get("/agent/pages", {
                    params: e
                })).data.data
            },
            getPageDetail: async e => (await s.default.get("/agent/pages/".concat(e))).data.data,
            handoffPage: async (e, a) => (await s.default.post("/agent/pages/".concat(e, "/handoff"), a)).data.data,
            getModHandoffs: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = await s.default.get("/agent/mod-handoffs", {
                        params: e
                    });
                return (e => {
                    var a, t, n, i, r, s, u, l;
                    if (Array.isArray(e)) return {
                        data: e,
                        total: e.length,
                        page: 1,
                        limit: e.length || 10,
                        totalPages: 1
                    };
                    if (e && Array.isArray(e.data)) {
                        let r = e.data.length || 10;
                        return {
                            data: e.data,
                            total: null != (a = e.total) ? a : e.data.length,
                            page: null != (t = e.page) ? t : 1,
                            limit: null != (n = e.limit) ? n : r,
                            totalPages: null != (i = e.totalPages) ? i : 1
                        }
                    }
                    if (e && Array.isArray(e.items)) {
                        let a = e.items.length || 10;
                        return {
                            data: e.items,
                            total: null != (r = e.total) ? r : e.items.length,
                            page: null != (s = e.page) ? s : 1,
                            limit: null != (u = e.limit) ? u : a,
                            totalPages: null != (l = e.totalPages) ? l : 1
                        }
                    }
                    return {
                        data: [],
                        total: 0,
                        page: 1,
                        limit: 10,
                        totalPages: 0
                    }
                })(a.data.data || a.data)
            },
            getModHandoffDetail: async e => {
                let a = await s.default.get("/agent/mod-handoffs/".concat(e)),
                    t = a.data.data || a.data;
                return {
                    dealerPage: (null == t ? void 0 : t.dealerPage) || (null == t ? void 0 : t.request) || t,
                    page: null == t ? void 0 : t.page
                }
            },
            approveModHandoff: async e => {
                let a = await s.default.post("/agent/mod-handoffs/".concat(e, "/approve"));
                return a.data.data || a.data
            },
            rejectModHandoff: async e => {
                let a = await s.default.post("/agent/mod-handoffs/".concat(e, "/reject"));
                return a.data.data || a.data
            },
            revokePage: async e => (await s.default.post("/agent/pages/".concat(e, "/revoke"))).data,
            clonePage: async (e, a) => (await s.default.post("/agent/pages/".concat(e, "/clone"), a)).data.data,
            deletePage: async e => {
                await s.default.delete("/agent/pages/".concat(e))
            },
            updatePageDomain: async (e, a) => (await s.default.patch("/agent/pages/".concat(e, "/domain"), {
                domain: a
            })).data.data,
            updatePageTitle: async (e, a) => (await s.default.patch("/agent/pages/".concat(e, "/title"), {
                title: a
            })).data.data,
            getPagesStatistics: async () => (await s.default.get("/agent/pages/statistics")).data.data,
            updateBankAccount: async e => (await s.default.patch("/agent/bank-account", e)).data.data,
            getBankAccount: async () => (await s.default.get("/agent/bank-account")).data.data,
            updateBranding: async e => (await s.default.patch("/agent/branding", e)).data.data,
            getBranding: async () => (await s.default.get("/agent/branding")).data.data,
            verifyCustomDomain: async () => (await s.default.post("/agent/branding/verify-domain")).data.data,
            checkDomainAvailability: async e => (await s.default.post("/agent/branding/check-domain", {
                domain: e
            })).data.data,
            initiateAgentDomainVerification: async e => (await s.default.post("/agent/domain/initiate-verification", {
                domain: e
            })).data.data,
            verifyAgentDomainOwnership: async e => (await s.default.post("/agent/domain/verify-ownership", {
                domain: e
            })).data.data,
            getAgentDomainVerificationStatus: async e => (await s.default.get("/agent/domain/verification-status", {
                params: {
                    domain: e
                }
            })).data.data,
            getPageDomainVerificationStatus: async (e, a) => (await s.default.get("/pages/".concat(e, "/domain/verification-status"), {
                params: {
                    domain: a
                }
            })).data.data,
            initiatePageDomainVerification: async (e, a) => (await s.default.post("/pages/".concat(e, "/domain/initiate-verification"), {
                domain: a
            })).data.data,
            verifyPageDomainOwnership: async (e, a) => (await s.default.post("/pages/".concat(e, "/domain/verify-ownership"), {
                domain: a
            })).data.data,
            lookupAgentByDomain: async e => (await s.default.get("/public/agent/lookup-by-domain?domain=".concat(e))).data.data,
            getPageCatalog: async e => {
                let a = (await s.default.get("/agent/page-catalog", {
                    params: e
                })).data.data;
                return {
                    data: a.items || [],
                    total: a.total || 0,
                    page: a.page || 1,
                    limit: a.limit || 12,
                    totalPages: a.totalPages || 1
                }
            },
            addPageToCatalog: async e => (await s.default.post("/agent/page-catalog", e)).data.data,
            updateCatalogPage: async (e, a) => (await s.default.patch("/agent/page-catalog/".concat(e), a)).data.data,
            removePageFromCatalog: async e => {
                await s.default.delete("/agent/page-catalog/".concat(e))
            },
            reorderPageCatalog: async e => {
                await s.default.put("/agent/page-catalog/reorder", e)
            },
            getPublicPageCatalog: async (e, a) => (await s.default.get("/public/agent/".concat(e, "/page-catalog"), {
                params: a
            })).data.data,
            updateAgentPricing: async e => (await s.default.patch("/agent/pricing", e)).data.data,
            getAgentPricing: async () => (await s.default.get("/agent/pricing")).data.data,
            getPublicAgentPricing: async e => (await s.default.get("/public/agent/pricing", {
                params: {
                    agentId: e
                }
            })).data.data,
            updatePricingPage: async e => (await s.default.patch("/agent/pricing-page", e)).data.data,
            getPricingPage: async () => (await s.default.get("/agent/pricing-page")).data.data,
            deactivatePricingPage: async () => {
                await s.default.delete("/agent/pricing-page")
            },
            getPublicPricingPage: async e => (await s.default.get("/public/agent/pricing", {
                params: {
                    agentId: e
                }
            })).data.data,
            getAgents: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (await s.default.get("/admin/agents", {
                    params: e
                })).data.data
            },
            updateAgentLevel: async (e, a) => (await s.default.patch("/admin/agents/".concat(e, "/level"), a)).data.data,
            getAdminPricingMatrix: async () => (await s.default.get("/admin/agents/dealer-pricing/matrix")).data.data,
            getAgentPricingMatrix: async () => (await s.default.get("/agent/pricing-matrix")).data.data,
            createPricingEntry: async e => (await s.default.post("/admin/agents/dealer-pricing", e)).data.data,
            getPricingEntry: async e => (await s.default.get("/admin/agents/dealer-pricing/".concat(e))).data.data,
            updatePricingEntry: async (e, a) => (await s.default.patch("/admin/agents/dealer-pricing/".concat(e), a)).data.data,
            deletePricingEntry: async e => (await s.default.post("/admin/agents/dealer-pricing/".concat(e, "/delete"))).data.data,
            getUserFeatures: async e => {
                let a = await s.default.get("/agent/users/".concat(e, "/features"));
                return a.data.data || a.data
            },
            purchaseFeaturesForUser: async (e, a) => {
                let t = await s.default.post("/agent/users/".concat(e, "/features/purchase"), a);
                return t.data.data || t.data
            },
            upgradeUserTier: async (e, a) => {
                let t = await s.default.post("/agent/users/".concat(e, "/plan/upgrade"), a);
                return t.data.data || t.data
            },
            purchaseSlotsForUser: async (e, a) => {
                let t = await s.default.post("/agent/users/".concat(e, "/slots/purchase"), a);
                return t.data.data || t.data
            }
        };
    e.s(["AGENT_QUERY_KEYS", 0, g, "DealerLevel", () => c, "DealerTier", () => d, "agentAPI", 0, p, "useAddPageToCatalog", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.addPageToCatalog,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pageCatalog
                }), e.invalidateQueries({
                    queryKey: g.availablePagesForCatalog
                })
            }
        })
    }, "useApplyForAgent", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.applyForAgent,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.application
                })
            }
        })
    }, "useApproveAgentModHandoff", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => p.approveModHandoff(e),
            onSuccess: (a, t) => {
                e.invalidateQueries({
                    queryKey: g.modHandoffs
                }), e.invalidateQueries({
                    queryKey: g.modHandoffDetail(t)
                }), e.invalidateQueries({
                    queryKey: g.pages
                })
            }
        })
    }, "useCloneDealerPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: t
                } = e;
                return p.clonePage(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.profile
                })
            }
        })
    }, "useCreateAgentPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.createPage,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.profile
                })
            }
        })
    }, "useCreateAgentTopupOrder", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.createTopupOrder,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.profile
                }), e.invalidateQueries({
                    queryKey: g.walletTransactions
                })
            }
        })
    }, "useCreateCatalogTemplatePage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.createCatalogTemplatePage,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.profile
                })
            }
        })
    }, "useCreatePricingEntry", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.createPricingEntry,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.adminPricingMatrix
                }), e.invalidateQueries({
                    queryKey: g.adminPricing
                })
            }
        })
    }, "useDeactivatePricingPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.deactivatePricingPage,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.agentPricingPage
                })
            }
        })
    }, "useDeleteDealerPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => p.deletePage(e),
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.profile
                }), e.invalidateQueries({
                    queryKey: g.pagesStatistics
                })
            }
        })
    }, "useDeletePricingEntry", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.deletePricingEntry,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.adminPricingMatrix
                }), e.invalidateQueries({
                    queryKey: g.adminPricing
                })
            }
        })
    }, "useGetAdminPricingMatrix", 0, () => (0, n.useQuery)({
        queryKey: g.adminPricingMatrix,
        queryFn: p.getAdminPricingMatrix,
        staleTime: 3e5
    }), "useGetAgentApplication", 0, () => {
        let e = (0, l.useSelector)(o.selectAuth),
            a = (0, u.isAdmin)(e);
        return (0, n.useQuery)({
            queryKey: g.application,
            queryFn: p.getApplication,
            staleTime: 3e5,
            enabled: !a && null !== e
        })
    }, "useGetAgentBranding", 0, () => (0, n.useQuery)({
        queryKey: g.branding,
        queryFn: p.getBranding,
        staleTime: 3e5
    }), "useGetAgentModHandoffDetail", 0, function(e) {
        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, n.useQuery)({
            queryKey: g.modHandoffDetail(e),
            queryFn: () => p.getModHandoffDetail(e),
            enabled: a && !!e,
            staleTime: 6e4
        })
    }, "useGetAgentModHandoffs", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, n.useQuery)({
            queryKey: [...g.modHandoffs, e],
            queryFn: () => p.getModHandoffs(e),
            enabled: a,
            staleTime: 6e4
        })
    }, "useGetAgentPageDetail", 0, e => (0, n.useQuery)({
        queryKey: g.pageDetail(e),
        queryFn: () => p.getPageDetail(e),
        staleTime: 3e5,
        enabled: !!e
    }), "useGetAgentPages", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.useQuery)({
            queryKey: [...g.pages, e],
            queryFn: () => p.getPages(e),
            staleTime: 12e4,
            placeholderData: e => e
        })
    }, "useGetAgentPricingMatrix", 0, () => (0, n.useQuery)({
        queryKey: g.pricing,
        queryFn: p.getAgentPricingMatrix,
        staleTime: 6e5
    }), "useGetAgentProfile", 0, () => (0, n.useQuery)({
        queryKey: g.profile,
        queryFn: p.getProfile,
        staleTime: 12e4
    }), "useGetPageCatalog", 0, e => (0, n.useQuery)({
        queryKey: [...g.pageCatalog, e],
        queryFn: () => p.getPageCatalog(e),
        staleTime: 12e4
    }), "useGetPricingPage", 0, () => (0, n.useQuery)({
        queryKey: g.agentPricingPage,
        queryFn: p.getPricingPage,
        staleTime: 3e5
    }), "useGetUserFeatures", 0, e => (0, n.useQuery)({
        queryKey: g.userFeatures(e),
        queryFn: () => p.getUserFeatures(e),
        staleTime: 12e4,
        enabled: !!e
    }), "useGetWalletTransactions", 0, function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.useQuery)({
            queryKey: [...g.walletTransactions, e],
            queryFn: () => p.getWalletTransactions(e),
            staleTime: 3e5
        })
    }, "useHandoffPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: t
                } = e;
                return p.handoffPage(a, t)
            },
            onSuccess: (a, t) => {
                let {
                    id: n
                } = t;
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.pageDetail(n)
                })
            }
        })
    }, "usePurchaseFeaturesForUser", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    userId: a,
                    data: t
                } = e;
                return p.purchaseFeaturesForUser(a, t)
            },
            onSuccess: (a, t) => {
                let {
                    userId: n
                } = t;
                e.invalidateQueries({
                    queryKey: g.userFeatures(n)
                }), e.invalidateQueries({
                    queryKey: g.walletTransactions
                }), e.invalidateQueries({
                    queryKey: g.profile
                })
            }
        })
    }, "usePurchaseSlotsForUser", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    userId: a,
                    data: t
                } = e;
                return p.purchaseSlotsForUser(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.walletTransactions
                }), e.invalidateQueries({
                    queryKey: g.profile
                }), e.invalidateQueries({
                    queryKey: g.slotCatalog
                })
            }
        })
    }, "useRejectAgentModHandoff", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => p.rejectModHandoff(e),
            onSuccess: (a, t) => {
                e.invalidateQueries({
                    queryKey: g.modHandoffs
                }), e.invalidateQueries({
                    queryKey: g.modHandoffDetail(t)
                }), e.invalidateQueries({
                    queryKey: g.pages
                })
            }
        })
    }, "useRemovePageFromCatalog", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.removePageFromCatalog,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pageCatalog
                }), e.invalidateQueries({
                    queryKey: g.availablePagesForCatalog
                })
            }
        })
    }, "useRevokePage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => p.revokePage(e),
            onSuccess: (a, t) => {
                e.invalidateQueries({
                    queryKey: g.pages
                }), e.invalidateQueries({
                    queryKey: g.pageDetail(t)
                })
            }
        })
    }, "useUpdateAgentBranding", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.updateBranding,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.branding
                })
            }
        })
    }, "useUpdateAgentLevel", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    agentId: a,
                    data: t
                } = e;
                return p.updateAgentLevel(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.adminAgents
                })
            }
        })
    }, "useUpdateCatalogPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: t
                } = e;
                return p.updateCatalogPage(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.pageCatalog
                })
            }
        })
    }, "useUpdatePageTitle", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    pageId: a,
                    title: t
                } = e;
                return p.updatePageTitle(a, t)
            },
            onSuccess: (a, t) => {
                let {
                    pageId: n
                } = t;
                e.invalidateQueries({
                    queryKey: g.pageDetail(n)
                }), e.invalidateQueries({
                    queryKey: g.pages
                })
            }
        })
    }, "useUpdatePricingEntry", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: t
                } = e;
                return p.updatePricingEntry(a, t)
            },
            onSuccess: (a, t) => {
                let {
                    id: n
                } = t;
                e.invalidateQueries({
                    queryKey: g.adminPricingMatrix
                }), e.invalidateQueries({
                    queryKey: g.adminPricing
                }), e.invalidateQueries({
                    queryKey: g.adminPricingEntry(n)
                })
            }
        })
    }, "useUpdatePricingPage", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.updatePricingPage,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.agentPricingPage
                })
            }
        })
    }, "useUpgradeUserTier", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: e => {
                let {
                    userId: a,
                    data: t
                } = e;
                return p.upgradeUserTier(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.walletTransactions
                }), e.invalidateQueries({
                    queryKey: g.profile
                }), e.invalidateQueries({
                    queryKey: g.pages
                })
            }
        })
    }, "useVerifyAgentDomainOwnership", 0, () => {
        let e = (0, r.useQueryClient)();
        return (0, i.useMutation)({
            mutationFn: p.verifyAgentDomainOwnership,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: g.branding
                })
            }
        })
    }])
}, 600923, e => {
    "use strict";
    let a = ["referralCode", "referral_code", "ref"],
        t = e => "".concat(e.toLocaleString("vi-VN"), " VND"),
        n = async e => {
            try {
                return await navigator.clipboard.writeText(e), !0
            } catch (e) {
                return !1
            }
        };
    e.s(["copyToClipboard", 0, n, "formatCurrency", 0, t, "formatDate", 0, e => ("string" == typeof e ? new Date(e) : e).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }), "getReferralCodeFromCookie", 0, () => {
        try {
            let e = document.cookie.split(";");
            for (let t of a) {
                let a = e.find(e => e.trim().startsWith("".concat(t, "=")));
                if (a) {
                    let e = a.split("=")[1];
                    return decodeURIComponent(e)
                }
            }
            return null
        } catch (e) {
            return null
        }
    }, "getStatusColor", 0, e => {
        switch (e.toLowerCase()) {
            case "pending":
                return "yellow";
            case "approved":
                return "green";
            case "paid":
                return "blue";
            case "rejected":
                return "red";
            default:
                return "gray"
        }
    }, "getStatusText", 0, e => {
        switch (e.toLowerCase()) {
            case "pending":
                return "Chờ xử lý";
            case "approved":
                return "Đã duyệt";
            case "paid":
                return "Đã thanh toán";
            case "rejected":
                return "Từ chối";
            default:
                return "Không xác định"
        }
    }, "removeReferralCodeCookie", 0, () => {
        try {
            a.forEach(e => {
                document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
            })
        } catch (e) {}
    }, "validateBankAccountObject", 0, e => {
        let a = [];
        if (e.bankCode && "" !== e.bankCode.trim() || a.push("Mã ngân hàng không được để trống"), e.bankName && "" !== e.bankName.trim() || a.push("Tên ngân hàng không được để trống"), e.accountNumber && "" !== e.accountNumber.trim()) {
            var t;
            let n = (t = e.accountNumber).length >= 3 && t.length <= 30 ? {
                isValid: !0
            } : {
                isValid: !1,
                error: "Số tài khoản phải có từ 8-20 chữ số"
            };
            n.isValid || a.push(n.error || "Số tài khoản không hợp lệ")
        } else a.push("Số tài khoản không được để trống");
        return e.accountName && "" !== e.accountName.trim() || a.push("Tên chủ tài khoản không được để trống"), {
            isValid: 0 === a.length,
            errors: a
        }
    }, "validateWithdrawalAmount", 0, function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e4;
        return e <= 0 ? {
            isValid: !1,
            error: "Số tiền rút phải lớn hơn 0"
        } : e < a ? {
            isValid: !1,
            error: "Số tiền rút tối thiểu là ".concat(t(a))
        } : {
            isValid: !0
        }
    }])
}, 155575, e => {
    "use strict";
    var a = e.i(483632),
        t = e.i(251570),
        n = e.i(489198),
        i = e.i(170905),
        r = e.i(87065);
    let s = (0, n.chakra)("div", {
            base: {
                display: "inline-flex",
                gap: "var(--group-gap, 0.5rem)",
                isolation: "isolate",
                position: "relative",
                "& [data-group-item]": {
                    _focusVisible: {
                        zIndex: 1
                    }
                }
            },
            variants: {
                orientation: {
                    horizontal: {
                        flexDirection: "row"
                    },
                    vertical: {
                        flexDirection: "column"
                    }
                },
                attached: {
                    true: {
                        gap: "0!"
                    }
                },
                grow: {
                    true: {
                        display: "flex",
                        "& > *": {
                            flex: 1
                        }
                    }
                },
                stacking: {
                    "first-on-top": {
                        "& > [data-group-item]": {
                            zIndex: "calc(var(--group-count) - var(--group-index))"
                        }
                    },
                    "last-on-top": {
                        "& > [data-group-item]": {
                            zIndex: "var(--group-index)"
                        }
                    }
                }
            },
            compoundVariants: [{
                orientation: "horizontal",
                attached: !0,
                css: {
                    "& > *[data-first]": {
                        borderEndRadius: "0!",
                        marginEnd: "-1px"
                    },
                    "& > *[data-between]": {
                        borderRadius: "0!",
                        marginEnd: "-1px"
                    },
                    "& > *[data-last]": {
                        borderStartRadius: "0!"
                    }
                }
            }, {
                orientation: "vertical",
                attached: !0,
                css: {
                    "& > *[data-first]": {
                        borderBottomRadius: "0!",
                        marginBottom: "-1px"
                    },
                    "& > *[data-between]": {
                        borderRadius: "0!",
                        marginBottom: "-1px"
                    },
                    "& > *[data-last]": {
                        borderTopRadius: "0!"
                    }
                }
            }],
            defaultVariants: {
                orientation: "horizontal"
            }
        }),
        u = (0, t.memo)((0, t.forwardRef)(function(e, n) {
            let {
                align: u = "center",
                justify: l = "flex-start",
                children: o,
                wrap: d,
                skip: c,
                ...g
            } = e, p = (0, t.useMemo)(() => {
                let e = t.Children.toArray(o).filter(t.isValidElement);
                if (1 === e.length) return e;
                let a = e.filter(e => !(null == c ? void 0 : c(e))),
                    n = a.length;
                return 1 === a.length ? e : e.map(e => {
                    var r;
                    let s = e.props;
                    if (null == c ? void 0 : c(e)) return e;
                    let u = a.indexOf(e);
                    return (0, t.cloneElement)(e, { ...s,
                        "data-group-item": "",
                        "data-first": (0, i.dataAttr)(0 === u),
                        "data-last": (0, i.dataAttr)(u === n - 1),
                        "data-between": (0, i.dataAttr)(u > 0 && u < n - 1),
                        style: {
                            "--group-count": n,
                            "--group-index": u,
                            ...null != (r = null == s ? void 0 : s.style) ? r : {}
                        }
                    })
                })
            }, [o, c]);
            return (0, a.jsx)(s, {
                ref: n,
                alignItems: u,
                justifyContent: l,
                flexWrap: d,
                ...g,
                className: (0, r.cx)("chakra-group", e.className),
                children: p
            })
        }));
    u.displayName = "Group", e.s(["Group", () => u])
}, 71839, e => {
    "use strict";
    var a = e.i(840171),
        t = e.i(816941),
        n = e.i(940948),
        i = e.i(649725),
        r = e.i(391265),
        s = e.i(813753),
        u = e.i(836271);
    let l = ["billExport", "userRequests"],
        o = ["billExport", "adminRequests"],
        d = ["billExport", "pendingRequests"],
        c = async e => {
            let a = await i.default.post("/bill-export-requests", e);
            return a.data.data || a.data
        },
        g = async e => {
            let a = new URLSearchParams;
            (null == e ? void 0 : e.page) && a.append("page", e.page.toString()), (null == e ? void 0 : e.limit) && a.append("limit", e.limit.toString()), (null == e ? void 0 : e.status) && a.append("status", e.status);
            let t = await i.default.get("/bill-export-requests?".concat(a));
            return t.data.data || t.data
        },
        p = async e => {
            let a = new URLSearchParams;
            (null == e ? void 0 : e.page) && a.append("page", e.page.toString()), (null == e ? void 0 : e.limit) && a.append("limit", e.limit.toString()), (null == e ? void 0 : e.status) && a.append("status", e.status), (null == e ? void 0 : e.userId) && a.append("userId", e.userId.toString());
            let t = await i.default.get("/admin/bill-export-requests?".concat(a));
            return t.data.data || t.data
        },
        y = async () => {
            let e = await i.default.get("/admin/bill-export-requests/pending");
            return e.data.data || e.data
        },
        m = async (e, a) => {
            let t = await i.default.patch("/admin/bill-export-requests/".concat(e), a);
            return t.data.data || t.data
        };
    e.s(["useCreateBillExportRequest", 0, () => {
        let e = (0, n.useQueryClient)();
        return (0, a.useMutation)({
            mutationFn: c,
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: l
                })
            }
        })
    }, "useGetAllBillExportRequests", 0, e => (0, t.useQuery)({
        queryKey: [...o, e],
        queryFn: () => p(e),
        staleTime: 3e5
    }), "useGetBillExportRequests", 0, e => {
        let a = (0, r.useSelector)(s.selectAuth),
            n = (0, u.isAdmin)(a);
        return (0, t.useQuery)({
            queryKey: [...l, e],
            queryFn: () => g(e),
            staleTime: 3e5,
            enabled: !n
        })
    }, "useGetPendingBillExportRequests", 0, () => (0, t.useQuery)({
        queryKey: d,
        queryFn: y,
        staleTime: 12e4
    }), "useUpdateBillExportRequest", 0, () => {
        let e = (0, n.useQueryClient)();
        return (0, a.useMutation)({
            mutationFn: e => {
                let {
                    id: a,
                    data: t
                } = e;
                return m(a, t)
            },
            onSuccess: () => {
                e.invalidateQueries({
                    queryKey: o
                }), e.invalidateQueries({
                    queryKey: d
                }), e.invalidateQueries({
                    queryKey: l
                })
            }
        })
    }])
}, 253985, e => {
    "use strict";
    var a = e.i(483632),
        t = e.i(688526),
        n = e.i(564668),
        i = e.i(299846),
        r = e.i(215669),
        s = e.i(197258),
        u = e.i(196377),
        l = e.i(878262),
        o = e.i(791089),
        d = e.i(118190),
        c = e.i(251570),
        g = e.i(156594),
        p = e.i(84723),
        y = e.i(391265);
    e.i(308972);
    var m = e.i(445979),
        f = e.i(219847),
        h = e.i(80541),
        v = e.i(332386),
        P = e.i(334863),
        b = e.i(22797),
        w = e.i(813753),
        x = e.i(836271),
        C = e.i(833707);
    e.s(["default", 0, e => {
        var q;
        let {
            showAgentOption: F = !0,
            showAdminOption: Q = !0,
            customActions: k = [],
            className: A = ""
        } = e, K = (0, y.useSelector)(w.selectAuth), S = (0, b.useLogout)(), T = (0, C.useRouter)(), E = (0, C.usePathname)(), M = (0, x.canAccessAdmin)(K), D = (0, x.canAccessAgent)(K), {
            t: _
        } = (0, m.useTranslation)(), [j, R] = (0, c.useState)(!1), [B, U] = (0, c.useState)(!1), [V, L] = (0, c.useState)(!1), [N, H] = (0, c.useState)(!1), G = async () => {
            try {
                await S.mutateAsync(), P.toaster.create({
                    title: _("account.menu.logoutSuccess"),
                    type: "success"
                })
            } catch (e) {
                P.toaster.create({
                    title: _("account.menu.logoutError"),
                    description: _("account.menu.logoutErrorDesc"),
                    type: "error"
                })
            }
        }, O = {
            icon: p.FiLock,
            title: _("account.menu.changePassword.title"),
            desc: _("account.menu.changePassword.desc"),
            bg: {
                base: "#F3E8FF",
                _dark: "purple.900"
            },
            color: {
                base: "#8B5CF6",
                _dark: "purple.200"
            },
            onClick: () => L(!0)
        }, I = {
            icon: p.FiLayout,
            title: _("account.menu.admin.title"),
            desc: _("account.menu.admin.desc"),
            bg: {
                base: "#F3E8FF",
                _dark: "purple.900"
            },
            color: {
                base: "#8B5CF6",
                _dark: "purple.200"
            },
            onClick: () => T.push("/admin"),
            isAdmin: !0
        }, z = {
            icon: g.BiBuildings,
            title: _("account.menu.agent.title"),
            desc: _("account.menu.agent.desc"),
            bg: {
                base: "#E0F2FE",
                _dark: "cyan.900"
            },
            color: {
                base: "#0284C7",
                _dark: "cyan.200"
            },
            onClick: () => T.push("/agent"),
            isAgent: !0
        }, W = {
            icon: p.FiUser,
            title: _("account.menu.dashboard.title"),
            desc: _("account.menu.dashboard.desc"),
            bg: {
                base: "#E0E7FF",
                _dark: "indigo.900"
            },
            color: {
                base: "#3B49DF",
                _dark: "indigo.200"
            },
            onClick: () => T.push((null == E ? void 0 : E.includes("/invite")) ? "/invite/manager" : "/wedding/manager")
        }, Y = {
            icon: g.BiBuildings,
            title: _("account.menu.agent.titleRegister"),
            desc: _("account.menu.agent.descRegister"),
            bg: {
                base: "#E0F2FE",
                _dark: "cyan.900"
            },
            color: {
                base: "#0284C7",
                _dark: "cyan.200"
            },
            onClick: () => R(!0)
        }, J = {
            icon: p.FiDownload,
            title: _("account.menu.billExport.title"),
            desc: _("account.menu.billExport.desc"),
            bg: {
                base: "#F0F9FF",
                _dark: "cyan.900"
            },
            color: {
                base: "#0284C7",
                _dark: "cyan.200"
            },
            onClick: () => U(!0)
        }, X = {
            icon: p.FiHome,
            title: _("account.menu.home.title", "Trang chủ"),
            desc: _("account.menu.home.desc", "Quay về trang chủ"),
            bg: {
                base: "#FEF3C7",
                _dark: "yellow.900"
            },
            color: {
                base: "#D97706",
                _dark: "yellow.200"
            },
            onClick: () => T.push("/")
        }, Z = [];
        return Z = Q && M ? [I, X, O] : F && D ? [z, X, O] : [W, X, Y, O, J, ...k], (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsxs)(u.Popover.Root, {
                open: N,
                onOpenChange: e => H(e.open),
                children: [(0, a.jsx)(u.Popover.Trigger, {
                    asChild: !0,
                    children: (0, a.jsx)(n.Box, {
                        as: "button",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        w: "9",
                        h: "9",
                        borderRadius: "full",
                        bg: {
                            base: "gray.50",
                            _dark: "gray.800"
                        },
                        borderWidth: "1px",
                        borderColor: {
                            base: "gray.200",
                            _dark: "gray.700"
                        },
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        overflow: "hidden",
                        _hover: {
                            borderColor: {
                                base: "rose.300",
                                _dark: "rose.500"
                            },
                            transform: "translateY(-1px)",
                            shadow: "sm"
                        },
                        "aria-label": "Account Menu",
                        children: (0, a.jsx)(t.Avatar.Root, {
                            size: "sm",
                            color: "rose.400",
                            children: (0, a.jsx)(t.Avatar.Fallback, {})
                        })
                    })
                }), (0, a.jsx)(l.Portal, {
                    children: (0, a.jsx)(u.Popover.Positioner, {
                        children: (0, a.jsxs)(u.Popover.Content, {
                            className: "!w-[280px] rounded-xl shadow-xl overflow-hidden focus:outline-none ".concat(A),
                            bg: {
                                base: "white/80",
                                _dark: "gray.800/80"
                            },
                            borderColor: {
                                base: "gray.200",
                                _dark: "gray.700"
                            },
                            backdropFilter: "blur(10px)",
                            children: [(0, a.jsxs)(n.Box, {
                                className: "py-4 px-4 text-center ",
                                children: [(0, a.jsx)(o.Text, {
                                    className: "font-medium",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: _("account.menu.greeting")
                                }), (0, a.jsx)(o.Text, {
                                    className: "font-bold",
                                    color: {
                                        base: "gray.700",
                                        _dark: "gray.300"
                                    },
                                    children: (e => {
                                        if (!e) return _("account.menu.account");
                                        let a = e.split("@")[0];
                                        return a.length > 20 ? a.substring(0, 20) + "..." : a
                                    })(null == K || null == (q = K.user) ? void 0 : q.email)
                                })]
                            }), (0, a.jsx)(d.VStack, {
                                align: "stretch",
                                px: 4,
                                py: 2,
                                children: Z.map((e, t) => (0, a.jsx)(n.Box, {
                                    className: "px-2 py-2 rounded-md",
                                    onClick: () => {
                                        e.onClick ? e.onClick() : P.toaster.create({
                                            title: _("account.menu.featureNotImplemented"),
                                            type: "info"
                                        }), H(!1)
                                    },
                                    _hover: {
                                        bg: {
                                            base: "gray.100",
                                            _dark: "gray.700"
                                        },
                                        cursor: "pointer"
                                    },
                                    children: (0, a.jsxs)(r.HStack, {
                                        children: [(0, a.jsx)(n.Box, {
                                            bg: e.bg,
                                            borderWidth: "1px",
                                            borderColor: e.bg,
                                            className: "rounded-[10px] p-[6px] mr-[10px] flex items-center justify-center",
                                            children: (0, a.jsx)(s.Icon, {
                                                as: e.icon,
                                                boxSize: 4.5,
                                                color: e.color
                                            })
                                        }), (0, a.jsxs)(n.Box, {
                                            className: "",
                                            children: [(0, a.jsx)(o.Text, {
                                                fontWeight: "bold",
                                                fontSize: {
                                                    base: "13px",
                                                    md: "15px"
                                                },
                                                color: {
                                                    base: "gray.900",
                                                    _dark: "white"
                                                },
                                                children: e.title
                                            }), (0, a.jsx)(o.Text, {
                                                fontSize: "13px",
                                                color: {
                                                    base: "gray.500",
                                                    _dark: "gray.400"
                                                },
                                                children: e.desc
                                            })]
                                        })]
                                    })
                                }, t))
                            }), (0, a.jsx)(n.Box, {
                                className: "px-4 py-3",
                                children: (0, a.jsxs)(i.Button, {
                                    w: "full",
                                    bg: {
                                        base: "red.50",
                                        _dark: "red.900"
                                    },
                                    colorScheme: "red",
                                    variant: "outline",
                                    borderRadius: "xl",
                                    fontWeight: "bold",
                                    color: {
                                        base: "red.500",
                                        _dark: "red.200"
                                    },
                                    borderColor: {
                                        base: "red.500",
                                        _dark: "red.800"
                                    },
                                    onClick: () => {
                                        G(), H(!1)
                                    },
                                    _hover: {
                                        bg: {
                                            base: "red.100",
                                            _dark: "red.800"
                                        },
                                        transform: "scale(1.02)"
                                    },
                                    transition: "all 0.2s ease-in-out",
                                    children: [(0, a.jsx)(p.FiLogOut, {}), _("account.menu.logout")]
                                })
                            })]
                        })
                    })
                })]
            }), (0, a.jsx)(h.default, {
                isOpen: B,
                onClose: () => U(!1)
            }), (0, a.jsx)(v.default, {
                isOpen: V,
                onClose: () => L(!1)
            }), (0, a.jsx)(f.default, {
                isOpen: j,
                onClose: () => R(!1)
            })]
        })
    }])
}]);

//# debugId=88ea299f-6c7b-b38b-4032-54e87434fa80
//# sourceMappingURL=01d49afeb8181ee6.js.map