module.exports = { 
  presets: [
    [
      "@babel/preset-env",
      {
        "modules": false,
        // "useBuiltIns": "usage",
        // "debug": true,
        // "corejs": { version: "3.16.1", proposals: true }
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true,
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}