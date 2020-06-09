import React, { useEffect, useState } from "react";

const CheckList = () => {
  const [checklistData, setChecklistData] = useState([
    {
      id: 1,
      title: "Task 1",
      due_date: new Date(2018, 12, 30),
      complete: false,
    },
    {
      id: 2,
      title: "Task 2",
      due_date: new Date(2018, 10, 28),
      complete: false,
    },
    {
      id: 3,
      title: "Task 3",
      due_date: new Date(2018, 9, 15),
      complete: false,
    },
    {
      id: 4,
      title: "Task 4",
      due_date: new Date(2018, 10, 30),
      complete: true,
    },
    {
      id: 5,
      title: "Task 5",
      due_date: new Date(2018, 9, 27),
      complete: false,
    },
    {
      id: 6,
      title: "Task 6",
      due_date: new Date(2018, 12, 1),
      complete: true,
    },
    {
      id: 7,
      title: "Task 7",
      due_date: new Date(2018, 10, 30),
      complete: false,
    },
  ]);

  // let uncompletedCheckList = checklistData.filter((task) => !task.completed);

  const completedCheckList = (checklistData, isCompleted) => {
    return checklistData.filter((task) => task.complete === isCompleted);
  };

  const updateCheckList = (id) => {
    const data = checklistData.map((task) => {
      if (task.id === id) {
        task.complete = true;
      }

      return task;
    });

    setChecklistData(data);
  };

  const compare = (a, b) => {
    return a.due_date.getTime() - b.due_date.getTime();
  };

  // uncompletedCheckList.sort(compare);

  // console.log(uncompletedCheckList);
  return (
    <div>
      <div>
        {/* <h4>Completed check list</h4> */}
        <ul>
          {completedCheckList(checklistData, false) &&
            completedCheckList(checklistData, false)
              .sort(compare)
              .map((task) => (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    onClick={(e) => updateCheckList(task.id)}
                  />
                  {task.title}
                </li>
              ))}
        </ul>
      </div>
      <div>
        <h4>Completed</h4>
        <ul>
          {completedCheckList(checklistData, true) &&
            completedCheckList(checklistData, true).map((task) => (
              <li key={task.id}>
                <input type="checkbox" checked disabled />
                {task.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
