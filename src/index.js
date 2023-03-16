module.exports = function reverse (n) {
  const num = Math.abs(n)
  const nString = String(num);
 
  return Number(nString.split("").reverse().join(""))
}
