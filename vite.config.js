import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'Real-Estate',
      short_name: 'Real-Estate',
      description: 'app for real estate',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})


// import { VitePWA } from 'vite-plugin-pwa';
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), VitePWA({
//     registerType: 'prompt',
//     injectRegister: false,

//     pwaAssets: {
//       disabled: false,
//       config: true,
//     },

//     manifest: {
//       name: 'Real-Estate',
//       short_name: 'Real-Estate',
//       description: 'app for real estate',
//       theme_color: '#ffffff',
//       icons: [
//         {
//           src: '/icons/icon-72x72.png',
//           sizes: '72x72',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-96x96.png',
//           sizes: '96x96',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-128x128.png',
//           sizes: '128x128',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-144x144.png',
//           sizes: '144x144',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-152x152.png',
//           sizes: '152x152',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-192x192.png',
//           sizes: '192x192',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-384x384.png',
//           sizes: '384x384',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-512x512.png',
//           sizes: '512x512',
//           type: 'image/png',
//         },
//         {
//           src: '/icons/icon-512x512-maskable.png',
//           sizes: '512x512',
//           type: 'image/png',
//           purpose: 'maskable',
//         },
//       ],
//     },

//     workbox: {
//       globPatterns: ['**/*.{js,css,html,svg,png,ico}'],

//       //todo---> creating a problem so dont uncomment we can see later .
      
//       // runtimeCaching: [
//       //     {
//       //       urlPattern: /^https:\/\/your-api-domain\.com\/.*$/, // Example API caching
//       //       handler: 'NetworkFirst', // Tries the network first, then falls back to cache
//       //       options: {
//       //         cacheName: 'api-cache',
//       //         expiration: {
//       //           maxEntries: 50,
//       //           maxAgeSeconds: 86400, // Cache for 1 day
//       //         },
//       //       },
//       //     },
//       //     {
//       //       urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, // Cache images
//       //       handler: 'CacheFirst',
//       //       options: {
//       //         cacheName: 'image-cache',
//       //         expiration: {
//       //           maxEntries: 100,
//       //           maxAgeSeconds: 604800, // Cache for 7 days
//       //         },
//       //       },
//       //     },
//       //   ],

//       cleanupOutdatedCaches: true,
//       clientsClaim: true,
//       skipWaiting: true, 
//     },

//     devOptions: {
//       enabled: false,
//       navigateFallback: 'index.html',
//       suppressWarnings: true,
//       type: 'module',
//     },
//   })],
// })