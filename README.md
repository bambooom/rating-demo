# Rating demo website

Follow tutorial from [here](https://www.bilibili.com/video/BV1Dk4y1s7er/)

Using [Nuxt.js](https://nuxt.com/docs/getting-started/installation) + Vercel + Upstash + TiDB Cloud Serverless + TailwindCSS

## Init via Nuxt 3 Minimal Starter

```
pnpm dlx nuxi init <project-name>
```

May need to set proxy if failed to fetch from registry, see https://github.com/nuxt/nuxt/issues/15101.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Directory

`server` includes logic about database

## upstash.com

free plan has 10k commands daily for redis, much more than vercel
