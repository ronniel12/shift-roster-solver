# shift-roster-solver

create a fullstack running and functioning app fro m end to end that solves employee scheduling problem. it should have an embedded database in the app to retrieve user input data.this data from the database will be used to solve  and autogenerate the roster according to constraints.constraints are according to finnish labor laws.it would be better to build a ui for the frontend where in a user will input data like employees names,skillsets,position,contracts and requests for day offs(calendar picker).it should also have an input of shifts,shift names,shift start and end times.locations or tasks within the shift,required skill to perform the task. in addition to the labow law constraints is that an employee should only have a maximum of 5 consecutive working days,an employee can only have at most 1 task per shift. additionally, every shift should have 1 supervisory position.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/shift-roster-solver.git
cd shift-roster-solver
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
