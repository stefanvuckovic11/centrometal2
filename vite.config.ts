import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        fs: {
            allow: [
                process.cwd(),
                `${process.cwd()}/.angular/cache`
            ]
        }
    }
});
