import axios from 'axios';

let base = '';

// 个人担保基础段 信息查询
export const getPersonBasicList = params => { return axios.get(`${base}/personalGuarantee/personBasicList`, { params: params }); };

// 个人担保基本 信息查询
export const getPerBasicInfoList = params => { return axios.get(`${base}/personalGuarantee/perBasicInfoList`, { params: params }); };

// 其他还款人
export const getOtherRepayList = params => { return axios.get(`${base}/personalGuarantee/otherRepayList`, { params: params }); };


export const getPersonsList = params => { return axios.get(`${base}/personalGuarantee/personsList`, { params: params }); };
