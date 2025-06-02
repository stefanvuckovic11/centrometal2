import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        fs: {
            allow: [
                process.cwd(),
                `${process.cwd()}/.angular/cache`
            ]
        },
        proxy: {
            '/products': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/products/, '')
            }
        }
    }
});
