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
      inprogress: [
        { id: 0, title: 'Banh Beo', createAt: '9am', updateAt: '10gio', status: 'todo' },
        { id: 1, title: 'Banh Loc', createAt: 9, updateAt: '10gio', status: 'todo' },
        { id: 2, title: 'Banh Nam', createAt: 9, updateAt: '10gio', status: 'todo' }
      ],
      dones: [
        { id: 0, title: 'Banh Beo', createAt: 888, updateAt: '10gio', status: 'todo' },
        { id: 1, title: 'Banh Loc', createAt: 8, updateAt: '10gio', status: 'todo' },
        { id: 2, title: 'Banh Nam', createAt: 8, updateAt: '10gio', status: 'todo' }
      ]
    }
  }

}

export { TaskModel };
