module.exports = {
  extends: ['expo'],
  ignorePatterns: ['node_modules/', '.expo/', '.tools/'],
  overrides: [
    {
      files: ['metro.config.js', 'babel.config.js', '.eslintrc.js'],
      env: { node: true },
    },
  ],
};
