import axios from 'axios';

let base = '';

// 抵质押合同基础段 信息查询
export const getContractList = params => { return axios.get(`${base}/pledgeInfo/contractList`, { params: params }); };

// 抵质押合同基本 信息查询
export const getBasicInfoList = params => { return axios.get(`${base}/pledgeInfo/basicInfoList`, { params: params }); };
getCollateralList

// 抵质押合同 抵押物 质押物查询
export const getCollateralList = params => { return axios.get(`${base}/pledgeInfo/collateralList`, { params: params }); };
