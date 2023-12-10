# Netflix Clone using Next.js

- Create .env file with following Values

```.env
DATABASE_URL=mongodb://localhost:27017/netflix?directConnection=true
NEXTAUTH_JWT_SECRET=NEXT_JWT_SECRET
NEXTAUTH_SECRET=NEXT-SECRET

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

- run the following in terminal

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
