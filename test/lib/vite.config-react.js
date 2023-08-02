import react from '@vitejs/plugin-react'
import nightwatchPlugin from '../../index.mjs'

export default {
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {},
  plugins: [
    react(),
    nightwatchPlugin({
      componentType: 'react'
    })
  ]
};
