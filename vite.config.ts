import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(() => ({
  plugins: [
    {
      name: 'local-dev-domain',
      configureServer(server) {
        server.httpServer?.once('listening', () => {
          console.log('\n  ➜  Dev domain:  http://cv-landing.test\n')
        })
      },
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["cv-landing.test"],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/utils/test-utils.tsx'],
    exclude: ['node_modules/**', '.bun-cache/**', 'dist/**'],
  },
}));
