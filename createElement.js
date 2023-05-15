/**
 * ? 엘리먼트를 생성하는 함수
 * @param {string} tagName 
 * @param {object} props 
 * @returns {string}
 * * 첫번째 매개변수 tagName은 문자열이여야 한다.
 * * 두번째 매개변수 props는 객체여야 한다.
 * * 리턴값은 문자열이다.
 * 
 * * 아래의 함수의 안정성을 위해 타입스크립트로 작성해보자.
 */

function createElement(tagName, props) {
  let propsString = "";
  for (let key in props) {
    propsString += ` ${key}="${props[key]}"`;
  }
  return `<${tagName}${propsString}></${tagName}>`;
}

console.log(createElement('div', {class: 'training', id: 'typescript'}));