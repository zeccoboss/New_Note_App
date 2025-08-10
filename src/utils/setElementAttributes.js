class setElementAttributes {
  constructor(element) {
    this.element = element
    this.elementClass
  }
  
  showElement() {
    console.log(this.element)
    return this.element;
  }
  
  setId(id) {
    this.element.id = id
  }
  
  addClass(classNameOne, classNameTwo, classNameThree, classNameFour, classNameFive) {
    this.element.classList.add(
      classNameOne,
      !classNameTwo ? classNameTwo = classNameOne : classNameTwo,
      !classNameThree ? classNameThree = classNameOne : classNameThree,
      !classNameFour ? classNameFour = classNameOne : classNameFour,
      !classNameFive ? classNameFive = classNameOne : classNameFive,
    );
  }
  
  removeClass(className) {
    this.element.classList.removeClass(className);
  }
  
  setPlaceHolder(placeholder) {
    this.element.placeholder = placeholder;
  }
  
  setColumns(columns) {
    this.element.cols = columns;
  }
  
  setRows(rows) {
    this.element.rows = rows;
  }
  
  setValue(value) {
    this.element.value = value;
  }
  
  clearValue(id) {
    this.element.value = '';
  }
}

export default setElementAttributes;