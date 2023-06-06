import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(commit) => commit.indexOf('git subrepo ') === 0],
    rules: {
        'type-enum': [
            RuleConfigSeverity.Error,
            'always',

            // Types are explained here: https://github.com/pvdlg/conventional-commit-types
            ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
        ],
    },
};

// eslint-disable-next-line import/no-default-export
export default Configuration;
