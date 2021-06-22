'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Todolist = app.model.define('todolist', {
    // 在这里定义模型属性
    task_id: {
      type: INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    task_name: STRING(255),
    is_done: BOOLEAN,
    checked: BOOLEAN
  },
  {
    // 强制表名称等于模型名称，默认是 Sequelize 会自动将模型名复数并将其用作表名；
    freezeTableName: true,
    // 禁用时间戳，即不会在表中每次自动添加 createdAt 和 updatedAt 字段
    timestamps: false
  });

  return Todolist;
};