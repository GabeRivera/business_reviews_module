function groupByAmount(targetArray, amount) {
    const arr = targetArray;
    const pages = [];
    
    function grabAmountFromArray() {
      if (arr.length <= amount) {
        pages.push(arr);
      }
      else {
        const page = arr.splice(0, amount);
        pages.push(page);
        grabAmountFromArray(arr);
      }
    }
    
    grabAmountFromArray(arr);
    return pages;
}
export { groupByAmount };