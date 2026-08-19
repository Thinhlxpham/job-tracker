Job Tracker

This is a full-stack web app for tracking job applications — log the roles you've applied to, monitor their status (applied, interview, rejected, offer), and manage everything from a simple dashboard.

Tech Stack

Client

React 19 + Vite
React Router
Tailwind CSS
MUI (Material UI) components
lucide-react icons

Server

Node.js + Express 5
SQLite (via sqlite / sqlite3)
express-session for auth sessions
bcrypt for password hashing
validator for input validation

Features
User signup / login / logout with session-based authentication
Passwords hashed with bcrypt; email validated on signup
Create, view, update, and delete job applications
Track company, position, status, date applied, and notes for each job
Status options: applied, interview, reject, offer
API Endpoints

Auth — /

Method	Endpoint	Description
POST	/login	Log in a user
POST	/signup	Register a new user
POST	/logout	Log out the current user
GET	/me	Get the current session user

Jobs — /jobs

Method	Endpoint	Description
GET	/jobs	Get all job applications
GET	/jobs/:id	Get a single job
POST	/jobs	Create a new job
PUT	/jobs/:id	Update a job
DELETE	/jobs/:id	Delete a job
Getting Started
Prerequisites
Node.js (v18+ recommended)
npm or pnpm
1. Clone the repository
bash
git clone https://github.com/Thinhlxpham/job-tracker.git
cd job-tracker
2. Set up the server
bash
cd server
npm install

Create a .env file in server/ with:

JOB_SESSION_SECRET=your-secret-key

Start the server:

bash
npm run dev

The server runs on http://localhost:5000. A SQLite database (database.db) is created automatically on first run.

3. Set up the client
bash
cd ../client
npm install
npm run dev

The client runs on http://localhost:5173 (Vite's default) and is configured to talk to the API at http://localhost:5000.

Notes
The server uses express-session for auth — cookies are httpOnly, sameSite: lax, and not marked secure (suitable for local development over HTTP; update this before deploying over HTTPS).
CORS is currently locked to http://localhost:5173 as the allowed origin — update this in server/server.js if you deploy the client elsewhere.

And enjoy my product 🥰
