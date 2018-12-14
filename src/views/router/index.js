import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../Login.vue'
import NotFound from '../404.vue'
import Home from '../Home.vue'
import Main from '../Main.vue'
import Table from '../nav1/Table.vue'
import Form from '../nav1/Form.vue'
import user from '../nav1/user.vue'
import Page4 from '../nav2/Page4.vue'
import Page5 from '../nav2/Page5.vue'
import Page6 from '../nav3/Page6.vue'
import Page7 from '../nav3/Page7.vue'
import echarts from '../charts/echarts.vue'
import Dbdata from '../nav4/dbdata.vue'
import Ywdata from '../nav4/ywdata.vue'
import Khdata from '../nav4/khdata.vue'
import Dydata from '../nav5/dydata.vue'
import Dkdata from '../nav5/dkdata.vue'
import Orglist from '../system/orglist.vue'
import Ygdata from '../system/ygdata.vue'
import Jsdata from '../system/jsdata.vue'
import Upload from '../upload/upload.vue'
import BasicInfo from '../pledgeInfo/basicInfo.vue'
import CollateralInfo from '../pledgeInfo/collateralInfo.vue'
import ContractMark from '../pledgeInfo/contractMark.vue'
import MatterInfo from '../pledgeInfo/matterInfo.vue'
import OtherDebt from '../pledgeInfo/otherDebt.vue' 
import PersonBasis from '../personalGuarantee/personBasis.vue' 
import PerBasiInfos from '../personalGuarantee/perBasiInfos.vue'
import OtherRepayment from '../personalGuarantee/otherRepayment.vue'
import PercollateralInfo from '../personalGuarantee/percollateralInfo.vue'
import Person from '../personalGuarantee/Person.vue'
import CreditBasic from '../creditInfo/creditBasic.vue'
import AllCredit from '../creditInfo/allCredit.vue'


Vue.use(VueRouter)

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '报表',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: '报表' }
        ]
    },{
        path: '/',
        component: Home,
        name: '通知消息',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '通知信息维护' },
            { path: '/page7', component: Page7, name: '通知信息查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '抵质押合同信息记录',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/contractMark', component: ContractMark, name: '基础信息' },
            { path: '/basicInfo', component: BasicInfo, name: '基本信息' },
            { path: '/otherDebt', component: OtherDebt, name: '其他债务人信息' },
            { path: '/collateralInfo', component: CollateralInfo, name: '抵押物信息' },
            { path: '/matterInfo', component: MatterInfo, name: '质押信息' }
        ]
    },
    {
        path: '/',
        component: Home, 
        name: '个人担保账户信息记录',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/personBasis', component: PersonBasis, name: '基础信息' },
            { path: '/perBasiInfos', component: PerBasiInfos, name: '基本信息' },
            { path: '/otherRepayment', component: OtherRepayment, name: '相关还款责任人信息' },
            { path: '/percollateralInfo', component: PercollateralInfo, name: '抵质押物信息' },
            { path: '/person', component: Person, name: '在保责任信息' }
        ]
    },
    {
        path: '/',
        component: Home, 
        name: '企业授信协议信息记录',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/creditBasic', component: CreditBasic, name: '基础信息' },
            { path: '/allCredit', component: AllCredit, name: '共同授信人信息' },
            { path: '/otherRepayment', component: OtherRepayment, name: '额度信息查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '采集数据查询 ',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/khdata', component: Khdata, name: '客户信息查询' },
            { path: '/ywdata', component: Ywdata, name: '业务信息查询' },
            { path: '/dbdata', component: Dbdata, name: '担保信息查询' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '业务数据补录 ',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/dydata', component: Dydata, name: '抵质押人信息补录' },
            { path: '/dkdata', component: Dkdata, name: '垫款原业务号补录' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '文件上传 ',
        iconCls: 'el-icon-upload2',
        leaf: false,//只有一个节点
        children: [
            { path: '/upload', component: Upload, name: '文件上传' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理 ',
        iconCls: 'fa fa-address-card',
        leaf: false,//只有一个节点
        children: [
            { path: '/orglist', component: Orglist, name: '机构管理' },
            { path: '/ygdata', component: Ygdata, name: '员工管理' },
            { path: '/jsdata', component: Jsdata, name: '角色管理' }
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航',
    //     iconCls: 'el-icon-message',//图标样式classt
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden:  false},
    //         { path: '/table', component: Table, name: '人员管理' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/page4', component: Page4, name: '页面4' },
    //         { path: '/page5', component: Page5, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '*',
    //     hidden: true,
    //     redirect: { path: '/404' }
    // }
];

let router =  new VueRouter({
    routes
  })

  router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
      sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user) ;
    if (!user && to.path != '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  })

export default router;