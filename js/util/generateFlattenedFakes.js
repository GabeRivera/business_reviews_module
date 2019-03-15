function generateFlattenedFakes(review) {

  const groupOfReviews = [...review, ...review, ...review, ...review];

  const twisted = groupOfReviews.map((x, index) => {
    const newObj = Object.assign({}, x);
    newObj.title = `Good Review ~ ${index}`;
    newObj.content = 'It\'s pretty good indeed!';
    return newObj;
  });
  const twisted2 = groupOfReviews.map((x, index) => {
    const newObj = Object.assign({}, x);
    newObj.title = `Bad Review ~ ${index}`;
    newObj.content = 'It\'s pretty bad!';
    return newObj;
  });
  const twisted3 = groupOfReviews.map((x, index) => {
    const newObj = Object.assign({}, x);
    newObj.title = `Neutral Review ~ ${index}`;
    newObj.content = 'I feel nothing';
    return newObj;
  });

  const twistedAndGrouped = [groupOfReviews, twisted, twisted2, twisted3];

  const flattened = [].concat.apply([], twistedAndGrouped);

  return flattened;
}
export {
  generateFlattenedFakes
};
