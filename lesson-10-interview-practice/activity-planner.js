function activityPlanner(activities) {

  activities.sort((a, b) => {
    if (a.finish == b.finish) {
      return a.start - b.start;
    }

    return a.finish - b.finish;
  });

  let lastFinishTime = 0;
  let counter = 0;

  for (const activity of activities) {
    if (activity.start > lastFinishTime) {
      counter++;
      lastFinishTime = activity.finish;
    }
  }

  return counter;
}

const activities = [
  {
    start: 2,
    finish: 5
  },
  {
    start: 1,
    finish: 5
  },

  {
    start: 6, finish: 7
  }

]

console.log(activityPlanner(activities)); //2