'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  success(data = null) {
    const ctx = this.ctx;
    // 响应数据的格式
    ctx.body = {
      error: 0,
      msg: '操作成功！',
      data,
    };
  }
}

module.exports = BaseController;