module.exports =  {
  "extends": "@istanbuljs/nyc-config-typescript",
  // "all": true,
    "reporter": [
      "html", 'lcov', 'text-summary'
    ],
    "exclude": ["src/grammar", "test", "test-browser", "node_modules", "dist"]
  // "check-coverage": true
}