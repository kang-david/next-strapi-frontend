const dev = process.env.NODE_ENV !== 'production'

export const server = dev
  ? 'http://localhost:1337'
  : 'https://next-strapi-backend-nr4i6.ondigitalocean.app'
