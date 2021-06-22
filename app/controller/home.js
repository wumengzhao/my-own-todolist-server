'use strict';

const Controller = require('../core/BaseController');

// 在继承于 Controller, Service 基类的实例中，可以通过 this.app 访问到 Application 对象。
class HomeController extends Controller {
  async findAll() {
    const res = await this.ctx.service.home.findAll();
    this.success(res);
  }
  async addOne() {
    const taskname = this.ctx.query.taskname;
    const res = await this.ctx.service.home.addOne(taskname);
    this.success(res);
  }
  async deleteOne() {
    const id = this.ctx.query.id;
    const res = await this.ctx.service.home.deleteOne(id);
    this.success(res);
  }
  async completeOne() {
    const id = this.ctx.query.id;
    const res = await this.ctx.service.home.completeOne(id);
    this.success(res);
  }
  async deleteSelected() {
    const res = await this.ctx.service.home.deleteSelected();
    this.success(res);
  }
  async selectAll() {
    const res = await this.ctx.service.home.selectAll();
    this.success(res);
  }
  async selectOne() {
    const id = this.ctx.query.id;
    const res = await this.ctx.service.home.selectOne(id);
    this.success(res);
  }
  async cancelSelectOne() {
    const id = this.ctx.query.id;
    const res = await this.ctx.service.home.cancelSelectOne(id);
    this.success(res);
  }
  async cancelSelectAll() {
    const res = await this.ctx.service.home.cancelSelectAll();
    this.success(res);
  }
}

module.exports = HomeController;
