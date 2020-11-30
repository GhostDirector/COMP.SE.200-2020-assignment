module.exports = {
  roots: ["test"],
  moduleFileExtensions: [ 'js', 'jsx'],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  coveragePathIgnorePatterns: [
    "src/.internal/"
  ]
};