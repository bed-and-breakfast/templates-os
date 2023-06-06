const Configuration = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(commit) => commit.indexOf('git subrepo ') === 0],
    rules: {
        'type-enum': [
            2,
            'always',

            // Types are explained here: https://github.com/pvdlg/conventional-commit-types
            ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
        ],
    },
};

module.exports = Configuration;
