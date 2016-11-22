{
  "env": {
    "node": true
  },
  "rules": {
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-dangle": [2, "never"],
    "comma-style": [2, "first", { exceptions: {ArrayExpression: true, ObjectExpression: true} }],
    "complexity": [2, 6],
    "curly": 2,
    "eqeqeq": [2, "allow-null"],
    "max-statements": [2, 30],
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-use-before-define": 2,
    "radix": 2,
    "semi": 2,
    "space-infix-ops": 2,
    "strict": 0
  },
  "globals": {
    "AnalysisView": true,
    "PollingView": true,
    "Prism": true,
    "Spinner": true,
    "Timer": true,
    "moment": true
  }
}