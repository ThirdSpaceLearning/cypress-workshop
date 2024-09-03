# Cypress Workshop

## Quick start

* Clone the repo
* Recommended: `Node.js v18.x`
* **Install**: `yarn`
* **Start**: `yarn start-dashboard`
* **Open browser**:  http://localhost:4200/


## Cypress
* **Cypress E2E**: `yarn start-dashboard-e2e`
* **Open Cypress E2E**: `yarn open-dashboard-e2e`
Note that this last command is currently bugged and you'll need to kill the process.
You can do so by running the following commands:
* `lsof -i :4200`
* `kill -9 [PID]`

## Node Version

Ensure that you're running at least Node 18 - this is a requirement for the project to run.

If currently running another version it is advised to use [NVM](https://github.com/nvm-sh/nvm) to manage the Node versions in your machine.

## Tech Stack

* Nx
* React
* Axios and React Query
* DummyJson API
* Material UI

