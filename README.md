# FocusQuest

FocusQuest is a lightweight ADHD-friendly task board built with Next.js. Create quick "quests," push them through Backlog → Doing → Done, and keep your progress synced locally so you can stay on target.

## Features
- Create quests with a title and optional description
- Organize quests across Backlog, Doing, and Done columns
- Move quests forward with Start and Complete buttons
- Delete individual quests when they are no longer needed
- Clear all quests with a single action (with confirmation)
- Persist quests automatically to `localStorage`

## Requirements
- Node.js 18.17.0 or newer (Node 20 LTS recommended)
- npm 9+ (or another compatible package manager)

## Getting Started

You can start from scratch or clone the repository.

### Option A – Create locally
```bash
npx create-next-app@latest focusquest --typescript
```
Then copy the files from this repo over the generated project.

### Option B – Clone from GitHub
```bash
git clone https://github.com/YOUR_USER/focusquest.git
cd focusquest
```

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

### Build and run in production mode
```bash
npm run build
npm start
```

## Deployment

FocusQuest is ready to deploy on [Vercel](https://vercel.com/):
1. Push your project to GitHub (or another supported Git provider).
2. Import the repository into Vercel.
3. Accept the default build settings (`npm install`, `npm run build`).
4. Deploy and enjoy automatic previews for pull requests.

## License

This project is released under the MIT License. See [LICENSE](./LICENSE) for details.

## Quickstart

Once you have cloned the repository:

```bash
cd focusquest
npm install
npm run dev
npm run build
npm start
```
