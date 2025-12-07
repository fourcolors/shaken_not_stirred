import { VotingVersus } from './VotingVersus';
const answerA = {
    playerId: '1',
    playerName: 'Alice',
    avatarShape: 'cube',
    avatarColor: '#CCFF00',
    answer: 'Dancing in the rain with my cat',
};
const answerB = {
    playerId: '2',
    playerName: 'Bob',
    avatarShape: 'pyramid',
    avatarColor: '#FF10F0',
    answer: 'Eating pizza on a rollercoaster',
};
const meta = {
    title: 'Organisms/Game/VotingVersus',
    component: VotingVersus,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Voting = {
    args: {
        prompt: 'What would you do with a million dollars?',
        answerA,
        answerB,
        timeRemaining: 15,
        totalTime: 20,
    },
};
export const VotingEnding = {
    args: {
        prompt: 'What would you do with a million dollars?',
        answerA,
        answerB,
        timeRemaining: 3,
        totalTime: 20,
    },
};
export const RevealWinnerA = {
    args: {
        prompt: 'What would you do with a million dollars?',
        answerA,
        answerB,
        timeRemaining: 0,
        totalTime: 20,
        votesA: 5,
        votesB: 3,
        showVotes: true,
        winnerId: '1',
    },
};
export const RevealWinnerB = {
    args: {
        prompt: 'What would you do with a million dollars?',
        answerA,
        answerB,
        timeRemaining: 0,
        totalTime: 20,
        votesA: 2,
        votesB: 6,
        showVotes: true,
        winnerId: '2',
    },
};
export const Tie = {
    args: {
        prompt: 'What would you do with a million dollars?',
        answerA,
        answerB,
        timeRemaining: 0,
        totalTime: 20,
        votesA: 4,
        votesB: 4,
        showVotes: true,
    },
};
//# sourceMappingURL=VotingVersus.stories.js.map