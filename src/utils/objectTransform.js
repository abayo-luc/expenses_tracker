export default data =>
  data.reduce((prev, current) => {
    return {
      ...prev,
      [current._id]: current,
    };
  }, {});
