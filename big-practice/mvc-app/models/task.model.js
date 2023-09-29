import Observable from './observable.js';

class TaskModel extends Observable {
  constructor() {
    super();
    this.tasks = {
      todos: [

      ],
      inprogresss: [
        { id: 1, title: 'Banh Beo', createAt: '9am', updateAt: '10gio', status: 'inprogress' },
        { id: 2, title: 'Banh Loc', createAt: 9, updateAt: '10gio', status: 'inprogress' },
        { id: 3, title: 'Banh Nam', createAt: 9, updateAt: '10gio', status: 'inprogress' }
      ],
      dones: [
        { id: 1, title: 'Banh Beo', createAt: 888, updateAt: '10gio', status: 'done' },
        { id: 2, title: 'Banh Loc', createAt: 8, updateAt: '10gio', status: 'done' },
        { id: 3, title: 'Banh Nam', createAt: 8, updateAt: '10gio', status: 'done' }
      ]
    }
  }


  getItem(dataId, dataStatus) {
    for (const key in this.tasks) {
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

  addItem(inputTitle, createAt, updateAt, status) {
    for (const key in this.tasks) {
      if (status.value + 's' == key) {
        const dataList = this.tasks[key];
        let dataId = dataList.length + 1;
        if (dataList.length == 0) {
          dataList.push(
            {
              id: dataId,
              title: inputTitle.value,
              createAt: createAt.textContent,
              updateAt: updateAt.textContent,
              status: status.value,
            }
          );
        } else {
          for (let index = 0; index < dataList.length; index++) {
            const element = dataList[index];
            if (dataId != element.id) {
              dataList.push(
                {
                  id: dataId,
                  title: inputTitle.value,
                  createAt: createAt.textContent,
                  updateAt: updateAt.textContent,
                  status: status.value,
                }
              );
              console.log(dataList);
              break;
            }
          }
        }



      }
    }
    this.notify(this.tasks);
  }


}

export { TaskModel };

// dataList.push(
//   {
//     id: dataId,
//     title: inputTitle.value,
//     createAt: createAt.textContent,
//     updateAt: updateAt.textContent,
//     status: status.value,
//   }
// );