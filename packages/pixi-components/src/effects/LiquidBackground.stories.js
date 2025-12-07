import { LiquidBackground } from './LiquidBackground';
import { PixiDecorator } from '../utils/PixiDecorator';
const meta = {
    title: 'Pixi/Effects/LiquidBackground',
    component: LiquidBackground,
    decorators: [
        PixiDecorator({
            width: 800,
            height: 600,
            backgroundColor: 0x000000,
        }),
    ],
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        primaryColor: { control: 'color' },
        secondaryColor: { control: 'color' },
        accentColor: { control: 'color' },
        speed: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
        blobCount: { control: { type: 'range', min: 1, max: 10, step: 1 } },
    },
};
export default meta;
export const Default = {
    args: {
        primaryColor: 0xccff00,
        secondaryColor: 0xff10f0,
        accentColor: 0x9d00ff,
        speed: 1,
        blobCount: 5,
        width: 800,
        height: 600,
    },
};
export const AcidGreen = {
    args: {
        primaryColor: 0xccff00,
        secondaryColor: 0x99cc00,
        accentColor: 0x66ff00,
        speed: 0.8,
        blobCount: 4,
        width: 800,
        height: 600,
    },
};
export const HotPink = {
    args: {
        primaryColor: 0xff10f0,
        secondaryColor: 0xff00aa,
        accentColor: 0xff0066,
        speed: 1.2,
        blobCount: 6,
        width: 800,
        height: 600,
    },
};
export const Cyberpunk = {
    args: {
        primaryColor: 0x00ffff,
        secondaryColor: 0xff10f0,
        accentColor: 0xccff00,
        speed: 1,
        blobCount: 5,
        width: 800,
        height: 600,
    },
};
export const SlowDrift = {
    args: {
        primaryColor: 0xccff00,
        secondaryColor: 0xff10f0,
        accentColor: 0x9d00ff,
        speed: 0.3,
        blobCount: 3,
        width: 800,
        height: 600,
    },
};
export const Chaotic = {
    args: {
        primaryColor: 0xccff00,
        secondaryColor: 0xff10f0,
        accentColor: 0x00ffff,
        speed: 2.5,
        blobCount: 8,
        width: 800,
        height: 600,
    },
};
//# sourceMappingURL=LiquidBackground.stories.js.map