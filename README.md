# Oddle Front-end Challenge - PHAM VAN THANG (TIM) 💻

# [Deployed GitHub Amplify Site](https://submission.d2r9px4lxtkhku.amplifyapp.com)

## Deployment
Any pushed made to the `submission` branch will be deployed to the `Amplify host`
***

## Features

- PAGE `Search`

  - Debounce when searching

  - Synchronize users searching with URL, so user can copy/paste the url and it will always show the same contents under the same browser, and including page number as well  

  - List user from GitHub API, number of user found
  
  - Pagination

  - Notification when user not found

  - User can like/dislike when clicking on the heart icon and add them to favorite list

- PAGE `User Detail`

  - Display specific user's information, including name, contact info, lists of repositories, list of followers & list of following users 

  - HOME icon to back to home page

- PAGE `Favorites`

  - Displays the information of the user who liked, including name, contact information, total number of followers and total number of followers...

  - Synchronize data with local storage

- `Dark Mode`

  - Change the color of background color, text, icons, etc. when switching mode

  - Synchronize with local storage even on web page refresh 

***

## Local Development Setup

Perform the following steps to get started:

- Step 1: Install node version 16 or latest (https://nodejs.org/en/download/)

- Step 2: Install all package in Dependencies with `yarn install`

- Step 3: run server with `yarn start`


### Project Folder Strucutre

```
├─ .env
├─ .eslintrc
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ jest.config.js
├─ package.json
├─ public
│  ├─ index.html
│  └─ manifest.json
├─ src
│  ├─ App.tsx
│  ├─ Assets
│  │  ├─ icon
│  │  │  ├─ git_hub_logo.svg
│  │  │  └─ index.ts
│  │  ├─ images
│  │  └─ styles
│  │     ├─ _constant.css
│  │     ├─ _customs.css
│  │     ├─ _font.css
│  │     ├─ _variants.css
│  │     └─ styles.css
│  ├─ Components
│  │  ├─ Common
│  │  │  ├─ ErrorBoundary
│  │  │  │  └─ index.tsx
│  │  │  ├─ Loading
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.md
│  │  │  └─ index.ts
│  │  └─ Layout
│  │     ├─ Base
│  │     │  ├─ Components
│  │     │  │  └─ NavBar
│  │     │  │     └─ index.tsx
│  │     │  ├─ contants.tsx
│  │     │  ├─ index.tsx
│  │     │  └─ styled.ts
│  │     ├─ Favorite
│  │     │  └─ index.tsx
│  │     ├─ GridColumn
│  │     │  └─ index.tsx
│  │     ├─ Main
│  │     │  ├─ components
│  │     │  │  ├─ BottomNavigation
│  │     │  │  │  └─ index.tsx
│  │     │  │  ├─ SearchBar
│  │     │  │  │  ├─ constants.ts
│  │     │  │  │  └─ index.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ index.tsx
│  │     │  └─ styled.ts
│  │     ├─ Theme
│  │     │  └─ index.tsx
│  │     ├─ UserDetail
│  │     │  └─ index.tsx
│  │     └─ index.ts
│  ├─ Config
│  │  ├─ index.ts
│  │  ├─ pagination.ts
│  │  ├─ persist.ts
│  │  └─ themeColor.ts
│  ├─ Constant
│  │  ├─ environments.ts
│  │  ├─ httpStatus.ts
│  │  └─ index.ts
│  ├─ Helpers
│  │  ├─ formatNumber.ts
│  │  ├─ getUsersInfo.ts
│  │  ├─ index.ts
│  │  └─ localStorage.ts
│  ├─ Hooks
│  │  ├─ index.ts
│  │  ├─ useAppDispatch.ts
│  │  ├─ useAppSelector.ts
│  │  ├─ useDebounce.tsx
│  │  └─ useSyncParams.ts
│  ├─ Pages
│  │  ├─ Favorites
│  │  │  ├─ Components
│  │  │  │  └─ NotFoundFavorites
│  │  │  │     └─ index.tsx
│  │  │  └─ index.tsx
│  │  ├─ NotFound
│  │  │  └─ index.tsx
│  │  ├─ SearchPage
│  │  │  ├─ Components
│  │  │  │  ├─ Description
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ ListUsers
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ NotFoundUser
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ UserInfo
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ styled.ts
│  │  │  │  ├─ contanst.ts
│  │  │  │  └─ index.ts
│  │  │  └─ index.tsx
│  │  ├─ UserDetail
│  │  │  ├─ Components
│  │  │  │  ├─ Followers
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Followings
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Repositories
│  │  │  │  │  ├─ Info.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Tab
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ Tabs
│  │  │  │  │  ├─ config.ts
│  │  │  │  │  ├─ contants.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ UserBrief
│  │  │  │     └─ index.tsx
│  │  │  └─ index.tsx
│  │  └─ index.ts
│  ├─ Reducers
│  │  ├─ FavoritesSlice
│  │  │  └─ index.ts
│  │  ├─ ThemeSlice
│  │  │  └─ index.ts
│  │  ├─ UsersSlice
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ Routers
│  │  ├─ PrivateRoute.tsx
│  │  ├─ PublicRoute.tsx
│  │  ├─ config.ts
│  │  ├─ constants.ts
│  │  └─ index.tsx
│  ├─ Schemas
│  ├─ Services
│  │  ├─ getFollowers
│  │  │  └─ index.ts
│  │  ├─ getFollowings
│  │  │  └─ index.ts
│  │  ├─ getRepositories
│  │  │  └─ index.ts
│  │  ├─ getUserByName
│  │  │  └─ index.ts
│  │  ├─ getUsers
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ Store
│  │  └─ index.ts
│  ├─ Types
│  │  ├─ React.ts
│  │  ├─ Repository.ts
│  │  ├─ RouterConfigModel.ts
│  │  ├─ ThemeMode.ts
│  │  ├─ Users.ts
│  │  └─ index.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ react-app.d.ts
│  └─ setupTests.ts
├─ tsconfig.json
└─ yarn.lock

```


`Pages`: Contains all the pages of the application.

`Components`: Contains all the components of the application.

`Store`: Contains all the config store of the application.

The rest are self explanatory.
***

## Libraries Used

Some of the libraries used in this project are listed below:


* [react-redux](https://github.com/reduxjs/react-redux)
* [react-toolkit](https://github.com/reduxjs/react-redux)
* [redux-persist](https://github.com/rt2zz/redux-persist) 
* [MUI](https://mui.com/)
* [react-router](https://github.com/eslint/eslint)
* [react-error-boundary](https://github.com/prettier/prettier)
* [ESLint](https://github.com/eslint/eslint)
* [Prettier](https://github.com/prettier/prettier)

The other packages can be found in the `package.json` file.


***

## Code Style Configuration

### ESLint configuration

-ESLint config can be found in the `.eslintrc` file


### Prettierrc configuration

Prettierrc config can be found in the `.prettierrc` file
