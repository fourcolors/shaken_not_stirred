import { defineConfig } from 'tsup';
export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: {
        // Use build-specific tsconfig without path aliases
        compilerOptions: {
            baseUrl: '.',
            paths: {},
        },
    },
    clean: true,
    external: ['@shaken/game-logic', '@shaken/types', 'react', 'valtio', 'yjs'],
});
//# sourceMappingURL=tsup.config.js.map