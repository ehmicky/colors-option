/* eslint-disable import/unambiguous */
// eslint-disable-next-line no-empty-function
const colorsOption = function () {}

// We do not use `export default` because Babel transpiles it in a way that
// requires CommonJS users to `require(...).default` instead of `require(...)`.
module.exports = colorsOption
/* eslint-enable import/unambiguous */
