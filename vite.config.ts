import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import react from '@vitejs/plugin-react'

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    // https://vitejs.dev/config/
    return defineConfig({
        plugins: [react(), tsconfigPaths()],
    })
}
