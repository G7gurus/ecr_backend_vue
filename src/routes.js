import NotFound from './views/404.vue'
import template from './views/template.vue'
import main from './views/main.vue'
import login from './views/login.vue'
import home from './views/home/index.vue'
import upload from './views/resourceupload/upload.vue'
import upload_step1 from './views/resourceupload/step1.vue'
import upload_step2 from './views/resourceupload/step2.vue'
import resourceimport from './views/resourceupload/import.vue'
import resourceimport_detail from './views/resourceupload/detail.vue'
import review from './views/resourcereview/index.vue'
import reviewdetail from './views/resourcereview/detail.vue'
import reviewrecord from './views/reviewrecord/index.vue'
import reviewstat from './views/reviewstat/index.vue'
import raise from './views/resourceraise/index.vue'
import propose from './views/resourceraise/propose.vue'
import raisedetail from './views/resourceraise/detail.vue'
import raisereview from './views/resourceraise/review.vue'
import raisestat from './views/resourceraise/stat.vue'
import compareappr_list from './views/compareappr/index.vue'
import compareappr_propose from './views/compareappr/propose.vue'
import compareappr_detail from './views/compareappr/detail.vue'
import compareappr_stat from './views/compareappr/stat.vue'
import compareappr_review from './views/compareappr/review.vue'
import wagerreview from './views/resourcewager/review.vue'
import label from './views/labelmng/index.vue'
import special from './views/specialmng/index.vue'
import special_add from './views/specialmng/add.vue'
import special_add_res from './views/specialmng/add_res.vue'
import special_edit from './views/specialmng/edit.vue'
import badword from './views/badword/index.vue'
import resource from './views/resourcemng/index.vue'
import resourcedetail from './views/resourcemng/detail.vue'
import resource_preview from './views/resourcemng/preview.vue'
import stuffdetail from './views/stuffmng/detail.vue'
import stuff from './views/stuffmng/index.vue'
// import stuffpkg from './views/stuffpkgmng/index.vue'
import teachingmaterial_add from './views/teachingmaterialmng/add.vue'
import teachingmaterial_list from './views/teachingmaterialmng/index.vue'
import teachingmaterial_edit from './views/teachingmaterialmng/edit.vue'
// import curriculum from './views/curriculummng/index.vue'
import coursenavigation from './views/coursenavigationmng/index.vue'
import stat_graph from './views/resourcestat/index.vue'
import stat_table from './views/resourcestat/table.vue'
import stat_detail from './views/resourcestat/detail.vue'
import pie from './views/resourcestat/pie.vue'
import map from './views/resourcestat/map.vue'
import pie2 from './views/resourcestat/pie2.vue'
import curve from './views/resourcestat/curve.vue'
import chargelog from './views/charge/chargelog.vue'
import chargestat from './views/charge/chargestat.vue'
import userscore from './views/score/userscore.vue'
import scorelog from './views/score/scorelog.vue'
import scoredetail from './views/score/scoredetail.vue'
import scorestat from './views/score/scorestat.vue'
import scorerule from './views/scorerule/index.vue'
import orderlog from './views/order/orderlog.vue'
import orderstat from './views/order/orderstat.vue'
import orderdetail from './views/order/orderdetail.vue'
import errreport from './views/reportmng/errorreport.vue'
import report from './views/reportmng/report.vue'
import synonym from './views/synonym/index.vue'
import wholeteacher from './views/teachermng/whole.vue'
import famousteacher from './views/teachermng/famous.vue'
import wholeschool from './views/schoolmng/whole.vue'
import famousschool from './views/schoolmng/famous.vue'
import sysdic_type from './views/sysdicmng/type.vue'
import sysdic_item from './views/sysdicmng/item.vue'
import advertisement from './views/advertisement/index.vue'
import operation from './views/operationlogmng/index.vue'
import useract from './views/useractmng/index.vue'


let routes = [
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    {
        path: '/login',
        component: login,
        name: '',
        hidden: true
    },
    {
        path: '/home',
        component: template,
        name: '',
        leaf: true,
        children: [
            {
                path: '/home',
                component: home,
                name: '??????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/upload/step1',
                component: upload,
                name: '????????????',
                children: [
                    {
                        path: '/upload/step1',
                        component: upload_step1,
                        name: '???????????? Step1',
                        hidden: true
                    },
                    {
                        path: '/upload/step2',
                        component: upload_step2,
                        name: '???????????? Step2',
                        hidden: true
                    },
                    {
                        path: '/upload/step3',
                        component: upload_step2,
                        name: '???????????? Step3',
                        hidden: true
                    }
                ]
            },
            {
                path: '/import',
                component: resourceimport,
                name: '??????????????????'
            },
            {
                path: '/import/detail/:id',
                component: resourceimport_detail,
                name: '????????????????????????',
                hidden: true
            },
            { 
                path: '/resource', 
                component: resource, 
                name: '????????????' 
            },
            { 
                path: '/resource/:id', 
                component: resourcedetail, 
                name: '????????????',
                hidden: true
            },
            {
                path: '/resource/preview/:id',
                component: resource_preview,
                name: '??????Preview',
                hidden: true
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/statistics/map',
                component: stat_graph,
                name: '????????????-??????',
                children: [
                    {
                        path: '/statistics/map',
                        component: map,
                        name: '???????????? Map',
                        hidden: true
                    },
                    { 
                        path: '/statistics/pie',
                        component: pie,
                        name: '???????????? PIE',
                        hidden: true
                    },
                    { 
                        path: '/statistics/pie2',
                        component: pie2,
                        name: '???????????? PIE 2',
                        hidden: true
                    },
                    { 
                        path: '/statistics/curve',
                        component: curve,
                        name: '???????????? ?????????',
                        hidden: true
                    }
                ]
            },
            {
                path: '/statistics/table',
                component: stat_table,
                name: '????????????-??????'
            },
            {
                path: '/statistics/detail',
                component: stat_detail,
                name: '????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            { 
                path: '/review',
                component: review,
                name: '??????????????????' 
            },
            {
                path: '/review/:id',
                component: reviewdetail,
                name: '??????????????????',
                hidden: true
            },
            {
                path: '/raisereview',
                component: raisereview,
                name: '??????????????????'
            },
            {
                path: '/compareappr_stat', 
                component: compareappr_review, 
                name: '??????????????????'
            },
            {
                path: '/wagerreview',
                component: wagerreview,
                name: '??????????????????'
            },
            {
                path: '/reviewrecord',
                component: reviewrecord,
                name: '????????????'
            },
            {
                path: '/reviewstat',
                component: reviewstat,
                name: '????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '??????????????????',
        children: [
            {
                path: '/propose',
                component: propose,
                name: '??????????????????'
            },
            { 
                path: '/raise', 
                component: raise, 
                name: '??????????????????' 
            },
            { 
                path: '/raise/:id', 
                component: raisedetail, 
                name: '??????????????????',
                hidden: true
            },
            { 
                path: '/raisestat/:id', 
                component: raisestat, 
                name: '????????????????????????',
                hidden: true
            },
            {
                path: '/compareappr/propose',
                component: compareappr_propose,
                name: '??????????????????'
            },
            { 
                path: '/compareappr', 
                component: compareappr_list, 
                name: '??????????????????' 
            },
            { 
                path: '/compareappr/:id', 
                component: compareappr_detail, 
                name: '??????????????????',
                hidden: true
            },
            { 
                path: '/compareappr_stat/:id', 
                component: compareappr_stat, 
                name: '????????????????????????',
                hidden: true
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '??????????????????',
        children: [
            {
                path: '/school/whole',
                component: wholeschool,
                name: '????????????'
            },
            {
                path: '/school/famous',
                component: famousschool,
                name: '????????????'
            },
            {
                path: '/teacher/whole',
                component: wholeteacher,
                name: '????????????'
            },
            {
                path: '/teacher/famous',
                component: famousteacher,
                name: '????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {   
                path: '/special',
                component: special,
                name: '????????????',
                
            },
            {
                path: '/special_add/:id',
                component: special_add,
                name: '????????????_add',
                hidden: true
            },
            {
                path: '/special_add_res',
                component: special_add_res,
                name: '????????????_add_res',
                hidden: true
            },
            {
                path: '/special_edit/:id',
                component: special_edit,
                name: '????????????_edit',
                hidden: true
            },
            {   
                path: '/badword',
                component: badword,
                name: '???????????????',
                
            },
            {
                path: '/label',
                component: label,
                name: '????????????'
            },
            {
                path: '/sysdic/type',
                component: sysdic_type,
                name: '??????????????????'
            },
            {
                path: '/sysdic/item',
                component: sysdic_item,
                name: '???????????????'
            },
            {
                path: '/teachingmaterial',
                component: teachingmaterial_list,
                name: '??????????????????',
                children: [
                    {
                        path: '/teachingmaterial/add',
                        component: teachingmaterial_add,
                        name: '?????????????????? Add',
                        hidden: true
                    },
                    {
                        path: '/teachingmaterial/edit/:id',
                        component: teachingmaterial_edit,
                        name: '?????????????????? Edit',
                        hidden: true
                    }
                ]
            },
            // {
            //     path: '/curriculum',
            //     component: curriculum,
            //     name: '????????????'
            // },
            {
                path: '/coursenavigation',
                component: coursenavigation,
                name: '??????????????????'
            },
            {
                path: '/adv',
                component: advertisement,
                name: '????????????'
            },
            {
                path: '/erreport', 
                component: errreport, 
                name: '????????????' 
            },
            {
                path: '/report', 
                component: report, 
                name: '????????????' 
            },
            {
                path: '/synonym',
                component: synonym,
                name: '???????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            { 
                path: '/stuff', 
                component: stuff, 
                name: '????????????' 
            },
            {
                path: '/stuff/:id', 
                component: stuffdetail, 
                name: '????????????',
                hidden: true
            },
            // {
            //     path: '/stuffpkg',
            //     component: stuffpkg,
            //     name: '??????????????????'
            // }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/order/log',
                component: orderlog,
                name: '????????????'
            },
            {
                path: '/order/detail/:id',
                component: orderdetail,
                name: '????????????',
                hidden: true
            },
            {
                path: '/order/statistics',
                component: orderstat,
                name: '????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/scorerule',
                component: scorerule,
                name: '??????????????????'
            },
            {
                path: '/score/log',
                component: scorelog,
                name: '??????????????????'
            },
            {
                path: '/score/userscore',
                component: userscore,
                name: '??????????????????'
            },
            {
                path: '/score/scorestat',
                component: scorestat,
                name: '????????????'
            },
            {
                path: '/score/scoredetail/:user',
                component: scoredetail,
                name: '',
                hidden: true
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/charge/log',
                component: chargelog,
                name: '??????????????????'
            },
            {
                path: '/charge/statistics',
                component: chargestat,
                name: '?????????????????????'
            }
        ]
    },
    {
        path: '/',
        component: template,
        name: '????????????',
        children: [
            {
                path: '/operation',
                component: operation,
                name: '??????????????????'
            },
            {
                path: '/useract',
                component: useract,
                name: '??????????????????'
            }
        ]
    }
];

export default routes;