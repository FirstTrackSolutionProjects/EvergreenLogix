const hasMultipleBoxes = (boxes = []) =>
  boxes.length > 1 || boxes.some(box => Number(box.quantity) > 1);

export default hasMultipleBoxes;
