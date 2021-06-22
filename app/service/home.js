'use strict';

const { Service } = require('egg');

// 在继承于 Controller, Service 基类的实例中，可以通过 this.app 访问到 Application 对象。
class HomeService extends Service {
  // 获取所有事项
  async findAll() {
    // ctx - 当前请求的 Context 实例
    const todolist = this.ctx.model.models.todolist;
    return await todolist.findAll();
  }
  // 添加一个事项
  async addOne(taskname) {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.create( {task_name: taskname, is_done: false, checked: false} );
  }
  
  // 删除一个事项
  async deleteOne(id) {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.destroy({
      where: {
        task_id: id
      }
    });
  }
  // 完成一个待办事项
  async completeOne(id) {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.update({ is_done: true }, {
       where: {
         task_id: id
       }
     });
  }
  // 删除所选择的待办事项
   async deleteSelected() {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.destroy({
      where: {
        checked: true
      }
    });
  }
  // 全选
  async selectAll() {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.update({ checked: true }, {
      where: {
        checked: false
      }
    });
  }
  // 取消全选
  async cancelSelectAll() {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.update({ checked: false },{
      where: { 
        checked: true
      }
    });
  }
  // 选择一个事项
  async selectOne(id) {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.update({ checked: true }, {
      where: {
        task_id: id
      }
    });
  }
  // 取消选择一个事项
  async cancelSelectOne(id) {
    const todolist = this.ctx.model.models.todolist;
    return await todolist.update({ checked: false }, {
      where: {
        task_id: id
      }
    });
  }
}
module.exports = HomeService;
