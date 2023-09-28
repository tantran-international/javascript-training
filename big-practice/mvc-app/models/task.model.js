import Observable from './observable.js';

class TaskModel extends Observable {
  constructor() {
    super();
    this.tasks = {
      todos: [
        { id: 0, title: 'TanTran', createAt: 10, updateAt: '10gio', status: 'todo' },
        { id: 1, title: 'Banh Loc', createAt: 10, updateAt: '10gio', status: 'todo' },
        { id: 2, title: 'Banh Nam', createAt: 10, updateAt: '10gio', status: 'todo' }
      ],
      inprogresss: [
        { id: 0, title: 'Banh Beo', createAt: '9am', updateAt: '10gio', status: 'inprogress' },
        { id: 1, title: 'Banh Loc', createAt: 9, updateAt: '10gio', status: 'inprogress' },
        { id: 2, title: 'Banh Nam', createAt: 9, updateAt: '10gio', status: 'inprogress' }
      ],
      dones: [
        { id: 0, title: 'Banh Beo', createAt: 888, updateAt: '10gio', status: 'done' },
        { id: 1, title: 'Banh Loc', createAt: 8, updateAt: '10gio', status: 'done' },
        { id: 2, title: 'Banh Nam', createAt: 8, updateAt: '10gio', status: 'done' }
      ]
    }
  }


  getItem(dataId, dataStatus) {
    for (let key in this.tasks) {
      if (dataStatus == key) {
        const dataList = this.tasks[key];
        for (let index = 0; index < dataList.length; index++) {
          const element = dataList[index];
          if (dataId == dataList[index].id) {
            return dataList[index];
          }
        }
      }
    }
  }
}

export { TaskModel };
