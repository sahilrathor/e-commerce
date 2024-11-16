import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },
})

// export default {
//   server: {
//     host: '0.0.0.0',  // Binds the server to all network interfaces
//     port: 3000,       // You can change the port if needed
//     strictPort: true, // Ensures that Vite doesn't automatically pick another port
//   },
// };