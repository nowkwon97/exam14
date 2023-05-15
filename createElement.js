function createElement(tagName, props) {
  let propsString = "";
  for (let key in props) {
    propsString += ` ${key}="${props[key]}"`;
  }
  return `<${tagName}${propsString}></${tagName}>`;
}

console.log(createElement('div', {class: 'training', id: 'typescript'}));