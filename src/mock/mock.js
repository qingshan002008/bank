import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
import { Message } from './data/message';
import {Contracts} from './data/contracts'
import {BasicInfos} from './data/basicInfos'
import {CollateralInfos} from './data/collateralInfos'

let _Users = Users;

let _Message = Message;

let _Contracts = Contracts ;

let _BasicInfos = BasicInfos;

let _CollateralInfos = CollateralInfos;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {username, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, name, addr, age, birth, sex } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let { name, addr, age, birth, sex } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

// 通知公告开始
mock.onGet('/message/listpage').reply(config => {
  let {page, title} = config.params;
  let mockMessages = _Message.filter(message => {
    if (title && message.title.indexOf(title) == -1) return false;
    return true;
  });
  let total = mockMessages.length;
  mockMessages = mockMessages.filter((m, index) => index < 20 * page && index >= 20 * (page - 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        total: total,
        messages: mockMessages
      }]);
    }, 1000);
  });
});



//通知公告结束
// 抵质押合同基础段信息查询开始
mock.onGet('/pledgeInfo/contractList').reply(config => {
  let {page, name} = config.params;
  let mockContracts = _Contracts.filter(contracts => {
    if (name && contracts.name.indexOf(name) == -1) return false;
    return true;
  });
  let total = mockContracts.length;
  mockContracts = mockContracts.filter((c, index) => index < 10 * page && index >= 10 * (page - 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        total: total,
        contracts: mockContracts
      }]);
    }, 1000);
  });
});
mock.onGet('/pledgeInfo/basicInfoList').reply(config => {
  let {page, startDate,endDate} = config.params;
  let mockBasicInfos = _BasicInfos.filter(basicInfos => {
    if (startDate && basicInfos.startDate < startDate  ) {
      return false;
    }
    if (endDate && basicInfos.endDate > endDate  ) {
      return false;
    } 
      return true;
  });
  let total = mockBasicInfos.length;
  mockBasicInfos = mockBasicInfos.filter((c, index) => index < 10 * page && index >= 10 * (page - 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        total: total,
        basicInfos: mockBasicInfos
      }]);
    }, 1000);
  });
});
mock.onGet('/pledgeInfo/collateralList').reply(config => {
  let {page, name} = config.params;
  let mockCollateralInfos = _CollateralInfos.filter(collateralInfo => {
    if (name && collateralInfo.name.indexOf(name) == -1) return false;
    return true;
  });
  let total = mockCollateralInfos.length;
  mockCollateralInfos = mockCollateralInfos.filter((c, index) => index < 10 * page && index >= 10 * (page - 1));
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        total: total,
        collateralInfos: mockCollateralInfos
      }]);
    }, 1000);
  });
});
//抵质押合同基础段信息查询结束
  }
};