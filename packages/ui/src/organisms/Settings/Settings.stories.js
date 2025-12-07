import { Settings } from './Settings';
const defaultSettings = {
    rounds: 5,
    timeLimit: 60,
    drinkingMode: false,
    djMode: false,
    contentFilter: 'adult',
};
const meta = {
    title: 'Organisms/Host/Settings',
    component: Settings,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    args: {
        settings: defaultSettings,
        isOpen: true,
    },
};
export const WithSpotify = {
    args: {
        settings: { ...defaultSettings, djMode: true },
        spotifyConnected: true,
        isOpen: true,
    },
};
export const FamilyMode = {
    args: {
        settings: { ...defaultSettings, contentFilter: 'family', drinkingMode: false },
        isOpen: true,
    },
};
export const SpicyParty = {
    args: {
        settings: {
            rounds: 8,
            timeLimit: 45,
            drinkingMode: true,
            djMode: true,
            contentFilter: 'spicy',
        },
        spotifyConnected: true,
        isOpen: true,
    },
};
//# sourceMappingURL=Settings.stories.js.map