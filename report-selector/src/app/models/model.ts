export interface ReportCategory {
    id: number;
    name: string;
    code: string;
    orderNo: number;
}

export interface ReportViewType {
    id: number;
    name: string;
    code: string;
    orderNo: number;
}

export interface ReportCategoryView {
    reportCategoryId: number;
    reportViewTypeId: number;
    orderNo: number;
}

export interface Lookup {
    id: number;
    desc: string;
}

export const reportCategory: ReportCategory[] = [];
reportCategory.push({id: 1, name: "Category-1", code: "C1", orderNo: 1});
reportCategory.push({id: 2, name: "Category-2", code: "C2", orderNo: 2});
reportCategory.push({id: 3, name: "Category-3", code: "C3", orderNo: 3});
reportCategory.push({id: 4, name: "Category-4", code: "C4", orderNo: 4});

export const reportViewType: ReportViewType[] = [];
reportViewType.push({id: 1,     name: "Yearly Performance",         code: "YRP",        orderNo: 1      });
reportViewType.push({id: 2,     name: "Monthly Performance",        code: "MNP",        orderNo: 2      });
reportViewType.push({id: 3,     name: "Asset Allocation",           code: "AALC",       orderNo: 3      });
reportViewType.push({id: 4,     name: "Equity Allocation",          code: "EQALC",      orderNo: 4      });
reportViewType.push({id: 5,     name: "Weekly Performance",         code: "WKYP",       orderNo: 5      });
reportViewType.push({id: 6,     name: "Quaterly Performance",       code: "QTRP",       orderNo: 6      });
reportViewType.push({id: 7,     name: "Over All Allocation",        code: "OVERALC",    orderNo: 7      });
reportViewType.push({id: 8,     name: "Tax Liabilities Allocation", code: "TAXLB",      orderNo: 8      });
reportViewType.push({id: 9,     name: "Long Term Allocation",       code: "LONGALC",    orderNo: 9      });
reportViewType.push({id: 10,    name: "Short Term Allocation",      code: "SHORTALC",   orderNo: 10     });

export const reportCategoryView: ReportCategoryView[] = [];
reportCategoryView.push({reportCategoryId:1,    reportViewTypeId: 1,    orderNo: 1});
reportCategoryView.push({reportCategoryId:1,    reportViewTypeId: 2,    orderNo: 3});
reportCategoryView.push({reportCategoryId:1,    reportViewTypeId: 3,    orderNo: 2});
reportCategoryView.push({reportCategoryId:1,    reportViewTypeId: 4,    orderNo: 5});
reportCategoryView.push({reportCategoryId:1,    reportViewTypeId: 5,    orderNo: 4});

reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 6,    orderNo: 1});
reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 7,    orderNo: 2});
reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 8,    orderNo: 3});
reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 9,    orderNo: 4});
reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 10,    orderNo: 5});
reportCategoryView.push({reportCategoryId:2,    reportViewTypeId: 1,    orderNo: 6});

reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 2,    orderNo: 7});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 3,    orderNo: 6});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 4,    orderNo: 5});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 5,    orderNo: 4});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 6,    orderNo: 1});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 7,    orderNo: 2});
reportCategoryView.push({reportCategoryId:3,    reportViewTypeId: 8,    orderNo: 3});

reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 1,    orderNo: 8});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 2,    orderNo: 7});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 3,    orderNo: 6});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 4,    orderNo: 5});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 5,    orderNo: 4});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 8,    orderNo: 3});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 9,    orderNo: 2});
reportCategoryView.push({reportCategoryId:4,    reportViewTypeId: 10,    orderNo: 1});



