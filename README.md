# Media Carry - Backend Repo (Node)

### What is this repository for?

Media Carry backend API

> See .env files to set variables that need to be defined

### Tech Stack

We're using Express, Node & MongoDB for this :

- [ ] MongoDB (version): 4.4.1
- [ ] Node (version): v14.17.6

### How do I get set up?

1.  Summary of set up

- [ ] Clone Repo
- [ ] Install Dependencies
- [ ] Setup Database
- [ ] Run Project

3. Install Dependencies
   **npm install**

4. Configuration

   - Set MONGO_URL
   - Set MONGO_PASSWORD
   - Set BASE_URL

5. Run Project

   **Local**: **npm run start**

6. Deployment instructions
   - Replace Environment Variables values w.r.t Environment Infrastructure
   - **_See .env files to set variables that need to be defined_**
   - Node Version: v14.17.6
   - MongoDB Version: 4.4.1
   - NPM Version: 7.22.0

### Code added for Subscriber and Email send.

1- **libs folder**
Here in this folder you can get the email serivce which you can call from anywhere in the actions of this repo.

2- **modules folder**
In this section there are 3 files:

- users -> actions -> auth (In this file you will get the crud operation for subscribing email, email servie and crud service is used in this action for code reuseability.)
- users -> routes -> route (in this file **subscriber route** is defined with middleware and vidator)
- users -> schema (in this file **user** schema is defined)
- users -> validator (in this file **express validations** is defined)

3- **service folder**
In this folder there is **crud service** where we use reuseable function code for auth and crud operations.

4- **config folder**

- In this folder there is **db folder** in which we have setup mongo db connection.
- There is **data_constraint** for global constraints and **messages** for error messages file too.
