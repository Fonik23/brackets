module.exports = function check(str, bracketsConfig) {
  const config = Object.fromEntries(bracketsConfig.map(([key , value]) => [value, key]));
  const openBrackets = Object.values(config);
  let stack = [];
  console.log(config)
  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];
    const top = stack[stack.length - 1];
    if (openBrackets.includes(current)) {
      if (top && current === config[current] && current === top) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      
      if (config[current] === top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
