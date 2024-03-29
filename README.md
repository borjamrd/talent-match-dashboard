# Talent Match Dashboard- Repository Installation Guide

![Image Alt text](/public/dashboard.png "Dashboard"))

## Installing Repository

To install the repository, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:borjamrd/talent-match-dashboard.git
   ```

2. Navigate into the cloned repository directory:

   ```bash
   cd talent-match-dashboard
   ```

3. Install dependencies using npm:

   ```bash
   npm install
   ```

4. Start local project:

   ```bash
   npm run dev
   ```

5. Login with test credentials
   Regular user:
   username: johndoe
   password: johndoe

   Admin user:
   username: TalentAdmin
   password: talentadmin

## Achievements

### 1. Login Credentials and OAuth

- [x] Set up login credentials for users.
- [x] Implement OAuth for secure authentication.

### 2. Rewards Table

- [x] Design and implement a rewards table to manage user rewards.
- [x] Define schema and functionalities related to rewards.

### 3. Penalties Table

- [x] Create a penalties table to track penalties imposed on users.
- [x] Define schema and functionalities related to penalties.

### 4. MongoDB Database Connection

- [x] Set up a MongoDB database connection.
- [x] Ensure proper configuration and integration with the repository.

### 5. Display tabla with scoring information

- [ ] Karma penalty scoring and action
- [ ] Karma reward scoring and actions

## Next actions 🚀

- [ ] Implement middleware authentication to restrict access to certain routes.
- [ ] Ensure only authenticated users can access protected routes.
- [ ] Make Triage and Rewards only available for admin users.

## URLs of Interest

1. [Official OAuth Documentation](https://oauth.net/)
2. [MongoDB Documentation](https://docs.mongodb.com/)
3. [Express.js Middleware Documentation](https://expressjs.com/en/guide/using-middleware.html)
4. [Node.js Documentation](https://nodejs.org/en/docs/)
   This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
