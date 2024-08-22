//! #1
function createDomElement(tagName, textContent, container) {
  const newElement = document.createElement(tagName);
  newElement.textContent = textContent;
  container.appendChild(newElement);
  return newElement;
}
const container = document.body
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))

//! #2
function setUserInfoCookie(key, value) {
  const encodedValue = encodeURIComponent(value);
  const cookieString = `${key}=${encodedValue}; expires=${new Date(Date.now() + 10000).toUTCString()}; path=/`;
  document.cookie = cookieString;
  console.log(`Cookie with key "${key}" and value "${value}" set successfully.`);
  console.log(cookieString)
}
setUserInfoCookie('language', 'en');

//! #3
function saveUserInfo(key, value) {
  sessionStorage.setItem(key, value)
  console.log(`Saved key: ${key}, value: ${value}`)
}

function getUserInfo(key) {
  const value = sessionStorage.getItem('key')
  console.log(`Retrieved key: ${key}, value: ${value}`)
  return value
}

saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); // Виведе: JohnDoe
