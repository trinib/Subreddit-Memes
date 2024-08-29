<p align="center">
<h1 align="center">Subreddit Memes<br></h1>
</p>
<p align="center">
    <img src="https://subreddit-memes.vercel.app/api/meme" width="350px"/>
    <h5 align="center">(<a href="https://www.reddit.com/r/ProgrammerHumor/"><i>ProgrammerHumor</i></a>)</h5>
</p>

<br>

### Specify own subreddit endpoints

Endpoint: https://meme-api.com/gimme/<a href="https://www.reddit.com/r/ProgrammerHumor/">{subreddit}</a>

Example: https://meme-api.com/gimme/ProgrammerHumor

Change url in <a href="https://github.com/trinib/Subreddit-Memes/blob/dfbe2edbed9e27cbec0d80294b69a0db5e4b87e2/app/api/meme/route.ts#L8">app/api/meme/route.ts(line 8)</a>

<br>

### Deploy your own instance/service on Vercel
<p align="left">
    <a href="https://vercel.com/new/clone?repository-url=https://github.com/trinib/subreddit-memes">
        <img src="https://vercel.com/button" alt="Deploy with Vercel" width="150px"/>
    </a>
</p>

<br>

### Display on Github readme
```
<img src="https://your-project-name.vercel.app/api/meme" width="350px"/>
```

---

<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
