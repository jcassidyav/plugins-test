module.exports = {
  extends: 'semantic-release-npm-github-publish',
  branches: [
    'main',
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
};
