const min = 1_000 * 60;
/**
 * Variables for debub
 */
// const min = 2000;

const c25k = [
    {
        week: '1',
        steps: [
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min },
            { pace: 'Walk', time: min * 1.5 },
        ],
    },
    {
        week: '2',
        steps: [
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 2 },
        ],
    },
    {
        week: '3',
        steps: [
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min * 3 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 1.5 },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min * 3 },
            { pace: 'Walk', time: min * 3 },
        ],
    },
    {
        week: '4',
        steps: [
            { pace: 'Run', time: min * 3 },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min * 5 },
            { pace: 'Walk', time: min * 2.5 },
            { pace: 'Run', time: min * 3 },
            { pace: 'Walk', time: min * 1.5 },
            { pace: 'Run', time: min * 5 },
        ],
    },
    {
        week: '5.1',
        steps: [
            { pace: 'Run', time: min * 5 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 5 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 5 },
        ],
    },
    {
        week: '5.2',
        steps: [
            { pace: 'Run', time: min * 8 },
            { pace: 'Walk', time: min * 5 },
            { pace: 'Run', time: min * 8 },
        ],
    },
    {
        week: '5.3',
        steps: [{ pace: 'Run', time: min * 25 }],
    },
    {
        week: '6.1',
        steps: [
            { pace: 'Run', time: min * 5 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 8 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 5 },
        ],
    },
    {
        week: '6.2',
        steps: [
            { pace: 'Run', time: min * 10 },
            { pace: 'Walk', time: min * 3 },
            { pace: 'Run', time: min * 10 },
        ],
    },
    {
        week: '6.3',
        steps: [{ pace: 'Run', time: min * 25 }],
    },
    {
        week: '7',
        steps: [{ pace: 'Run', time: min * 25 }],
    },
    {
        week: '8',
        steps: [{ pace: 'Run', time: min * 28 }],
    },
    {
        week: '9',
        steps: [{ pace: 'Run', time: min * 30 }],
    },
];

export default c25k;
