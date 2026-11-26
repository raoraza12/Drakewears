# Drakewears

Modern luxury streetwear store for Pakistan — oversized drop-shoulder tees, baggy trousers, hoodies and more, with cash on delivery nationwide.

- **Live site:** https://luxe-brand.vercel.app/
- **Frontend:** React + Vite in `client/` (API base defaults to the relative `/api` path; set `VITE_API_URL` to point at a separate backend)
- **Backend:** Node.js/Express + Prisma in `server/` (`npm start` runs `server/server.js`)

## Run locally

```bash
npm run install-all   # install client + server dependencies
npm start             # start the server (server/server.js)
cd client && npm run dev   # start the Vite frontend
```

Set the server environment variables (`DATABASE_URL`, `JWT_SECRET`, Cloudinary keys) in the hosting dashboard or a local `.env` file — never commit `.env` files.
