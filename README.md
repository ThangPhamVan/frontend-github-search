# Oddle Front-end Challenge - PHAM VAN THANG (TIM) 💻

# [Deployed Amplify Site](https://submission.d2r9px4lxtkhku.amplifyapp.com)

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

```
oddle
├─ .env
├─ .eslintrc
├─ .git
│  ├─ AUTO_MERGE
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ MERGE_HEAD
│  ├─ MERGE_MODE
│  ├─ MERGE_MSG
│  ├─ ORIG_HEAD
│  ├─ REBASE_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ master
│  │     │  └─ submission
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ master
│  │           └─ submission
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ f83fc3269d54a8d9adca06af94c6eec0d4e495
│  │  ├─ 02
│  │  │  ├─ 6eef55f1ff8e8c9f8e231c62a9502fe7b9b8e3
│  │  │  ├─ 7b0bdffdfe3fd95706d55cf153e61e27c4ef7f
│  │  │  └─ a401c1f436abad0026ec7f5cb8e9b075914fa2
│  │  ├─ 03
│  │  │  └─ c84c8793b473d9e8314f9d85e8178bcea91fd6
│  │  ├─ 04
│  │  │  ├─ 35f1608ede3cdebed388b29b2e169ace35bfdb
│  │  │  ├─ 6e196bccb90c4065d604b7a38bb116e05381b8
│  │  │  └─ e5f43029b85a09a1df7b133ea82859070013a1
│  │  ├─ 05
│  │  │  └─ 2fe82d23e5793776eae2ee3e1a482d5734cc79
│  │  ├─ 06
│  │  │  ├─ 18d51bd80197931c3b779bcc696bdc90d4953a
│  │  │  ├─ 827279fa3b75f0fd2420642752cfe0283d12f0
│  │  │  ├─ c8d47f9ba749bb6a936d324810631f1159dd46
│  │  │  └─ ec01074e5182d12a585b3b8070c3ba7f507a2e
│  │  ├─ 07
│  │  │  ├─ 8a5a6b1d1d138929c6fada8a7516ecf6080e30
│  │  │  └─ bb8aeaa296bb8b11188403d547555d13a72fe9
│  │  ├─ 08
│  │  │  └─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  ├─ 09
│  │  │  ├─ 34087273733272355650de64d079b82a8fe955
│  │  │  └─ b3bc0395cc6ba8ca7721dcd8f479140b5b3fd0
│  │  ├─ 0a
│  │  │  └─ 45db4461787adcc4e91b4efd357d871a19e81d
│  │  ├─ 0b
│  │  │  ├─ 0406902be1d069590b5dc2e20637286dcaaa55
│  │  │  ├─ 1ea84ae30b109d4340a085dac7e6e0c8796be0
│  │  │  ├─ 38ba8281437955ff7597fa85c1284930f235cb
│  │  │  └─ 5d98ab710681178315fb8173e09652281e7ac9
│  │  ├─ 0c
│  │  │  ├─ 509cc310d07835ea7474e4fa71ad3eec0681ba
│  │  │  └─ 91dbcd1321f2ca685936943e22a36822d3e5eb
│  │  ├─ 0d
│  │  │  └─ f16d72b2dc574bb8c4696b9ad3e2be26d6fb48
│  │  ├─ 10
│  │  │  └─ ac56c664da7d90ca9715a9fdc661a560995134
│  │  ├─ 11
│  │  │  ├─ 355849d73d76d0ed3c4738c7dbd9239f4ec753
│  │  │  ├─ 3c4a039478aba47ce6f433dff1f12132a0ddd9
│  │  │  └─ 85d096ae30af37b289fe7507dc281f888e85de
│  │  ├─ 12
│  │  │  └─ 8629cbae0fff18be24bd9b6449e1eeac5fda5f
│  │  ├─ 13
│  │  │  ├─ 4cc2afe74dd63694f3f192942d5582cee5bf50
│  │  │  ├─ c881918874abb27f5b781c73745241d87e48dc
│  │  │  └─ f66599a6961148ee5d18648cd711f6f294d8f5
│  │  ├─ 16
│  │  │  └─ 0f334f9c0cb0752ed937afd2e0bf5f2ca41c91
│  │  ├─ 17
│  │  │  ├─ a9ac0b231ad194ce8d59470428a5e642d55612
│  │  │  ├─ a9af873992d4be6209ea2090d1317e7ba43c80
│  │  │  ├─ de7bb198a9252174ff51ed92a304bb40c0796e
│  │  │  └─ f9ac3605ffbc940995bd84e878da49cf4ac9cc
│  │  ├─ 18
│  │  │  └─ 8c5407e8a72bb0bed0cb99fe31efe5724f9ed5
│  │  ├─ 19
│  │  │  └─ c315a4fcecc1983ef3bfa4e4efbba05c5a6d9a
│  │  ├─ 1a
│  │  │  └─ 4e8f7c497778f3e1302da6b7307c34058f8928
│  │  ├─ 1c
│  │  │  ├─ 39986aa7c5bd31a541c5d9a75ce2874d6a8279
│  │  │  └─ b8d199efd7273911ea0bc1d6743b4418ef1091
│  │  ├─ 1e
│  │  │  ├─ 570c6187c507b1f6136b1fe8d719b2a6e5c6c1
│  │  │  └─ 9db94ee9f42dc1eea2ec658a63ac1535b7b8a9
│  │  ├─ 1f
│  │  │  ├─ 3264c9a29030ee59e638ca9926a101dfc2580c
│  │  │  ├─ ac0e973a9780eef1f9fbb88a55e0667ed2b123
│  │  │  └─ dff9b31f4190b379a117a17851307dd47437cf
│  │  ├─ 21
│  │  │  └─ dbf8702499da9bbdfa3c1b1d066b827b5453ea
│  │  ├─ 22
│  │  │  ├─ 2e55485734544331110e0879938681725a5ffe
│  │  │  ├─ ac36a488fd3b7808bb3cc89b9942a01bf78e91
│  │  │  └─ e3663cda07e68c1c31e294c0326a07af1fe484
│  │  ├─ 24
│  │  │  └─ 66578fd3d9898b01212cfbdf66e30e720ec311
│  │  ├─ 25
│  │  │  └─ ac4fb570d8a8d70c0e2877c83fe69f9969aba9
│  │  ├─ 26
│  │  │  ├─ 2c867a58fcf395ec188c6a3611f97413d39a88
│  │  │  ├─ 8de04badfbc6f3dacdcf20a998f3af1cbca488
│  │  │  └─ 9533f6a1e94d76d7065654b3b70f1f83892a25
│  │  ├─ 27
│  │  │  └─ a4c5927ca29a27d30c25c1c61ea79ee8c89c67
│  │  ├─ 28
│  │  │  └─ 8895dd3f4e996af9893582ffc3043b37c56ec3
│  │  ├─ 29
│  │  │  └─ b0f81a43a5cfb0ab889d38f68abdcaaa5088b9
│  │  ├─ 2a
│  │  │  └─ 2fe39ccaf29d02c103fb822ae276ef08a1f35d
│  │  ├─ 2b
│  │  │  └─ 310c58a5d9f7f86276347ee79ae5190bce626f
│  │  ├─ 2c
│  │  │  └─ c9e7c0f5dcac4798ad31de7321bbfba48e51bf
│  │  ├─ 2e
│  │  │  ├─ eab268ac480cebd941a5567c270de974b6078e
│  │  │  └─ fd8a2958ed615f3881f731fb9fea871e24826d
│  │  ├─ 2f
│  │  │  ├─ 4b80a5efaed3711845924a64fc38ebcab5b634
│  │  │  └─ 839b335be9cc70a561cee5022d9e15c024a13b
│  │  ├─ 30
│  │  │  ├─ 98483ce88e81863f5847ee833eb46539fb9e46
│  │  │  └─ dc0cb0201ca5dfd90028a2c24a12d26b6a00c6
│  │  ├─ 31
│  │  │  ├─ 63d3cbf470cbc5d4da1757be9f32ce9d8aab99
│  │  │  ├─ 9f0bc8843c30a9189bb039b482edaa3b75fede
│  │  │  └─ fa97febbf3dd2ffa91d4fde55b72ed65a00308
│  │  ├─ 32
│  │  │  ├─ 73a8a0f084dac31522d2842591d6614e4cd6ba
│  │  │  ├─ 7959f935d5b76a36ac13f1d4dfe9a99abb4ad9
│  │  │  └─ bbf61688eb09954854be54c3e81d8ea1c73065
│  │  ├─ 33
│  │  │  └─ bf7c7f4c92f77c0a55214a3bd69472b63679b8
│  │  ├─ 34
│  │  │  ├─ 7ff9a2eb361df243234db2915af17a4947a833
│  │  │  └─ ce92a7d5fdf633ebc037a8354fd4b0d0fea551
│  │  ├─ 35
│  │  │  └─ b12c3f9b6b64ca364e6a7aa710ab9334c24a90
│  │  ├─ 36
│  │  │  └─ b6b884cf94e49a33f9cb37046f2377f4995cd6
│  │  ├─ 37
│  │  │  └─ 65f0210b36b7875a5b6b53d21061b49cac67f5
│  │  ├─ 39
│  │  │  ├─ 225da617424935abd750ff361f2f5d57fe3478
│  │  │  └─ 90a3dc68c72c7efdc4084874f8e94480235fa0
│  │  ├─ 3a
│  │  │  ├─ 513270535d9eafaa55f35014e17deca0c6e0ff
│  │  │  └─ a3efd30bacdcb55fd6d0f798a05c95971510c2
│  │  ├─ 3c
│  │  │  ├─ 9d820de9c311cc0222612c766f8b0903771fe2
│  │  │  ├─ b17237917773ed4ffb41f7539d7d7910fd632a
│  │  │  └─ cb1d05aa8bad011df7cfabd49b9d4ca8b64fdb
│  │  ├─ 3d
│  │  │  └─ cbbdc7c5007a10e66662744a164df8429b39c4
│  │  ├─ 3e
│  │  │  ├─ 6d2fae43b3c181d0413aabeb57e7b28b1ed916
│  │  │  ├─ 84b2f84718e6d9d1a1f27b226e4735edc05c10
│  │  │  ├─ 9666b6ecb62328ea20d8a62e0f168137865752
│  │  │  └─ c0bdbc6960eb71715e07bf6af29a3d008deca2
│  │  ├─ 3f
│  │  │  └─ cbe130e26a19d36a4836fd6d031c8b12892a5d
│  │  ├─ 40
│  │  │  └─ b13f7a34cc7bf5aecf5e81aad87de3b1177b81
│  │  ├─ 42
│  │  │  ├─ 47494d5f2a58d09171b347ec47a1e5f6dfc50b
│  │  │  ├─ b4ce748780a960403c72f245a96506bd157685
│  │  │  └─ da4ba6a2cb8d8c52b3d635aade612d8053987b
│  │  ├─ 43
│  │  │  └─ ca33751a054a4627380623050318a2b309fc81
│  │  ├─ 44
│  │  │  ├─ 06f5dcea5fca5365362bb6774ab00b2b95a141
│  │  │  └─ e1a9064edea26660ee20a4151bf4e40a7bbdac
│  │  ├─ 45
│  │  │  ├─ 0374b26d70548eabcf84762dfb0bcebdfa2d00
│  │  │  └─ 744d83a9e09b57980663a15ac82889351e85c0
│  │  ├─ 46
│  │  │  ├─ 10496b4e2d3b1744d0a00d18dc9fa8cc5e95c5
│  │  │  └─ 460c48b190d678db35f3f88a8fa1dc04d7120c
│  │  ├─ 48
│  │  │  ├─ 3e9384991d0fd266d7c86f756a767606392ebf
│  │  │  ├─ 4720f89b0b642f641c4ebc318390c95b1fdb06
│  │  │  ├─ 61667bae2c8d1feffa2e1b5528d9682c87164f
│  │  │  ├─ f4174bd51fc1ac1efbcb8afc3c617c5f8f1b6a
│  │  │  └─ fda519ebc9ced25aa72e39ba84cdb641e60278
│  │  ├─ 49
│  │  │  ├─ 5212888f0b4cdf6635aa8270b14ee54f5d484c
│  │  │  └─ be7f8dfbbbc042ea76c6c6580ff0591511e156
│  │  ├─ 4b
│  │  │  └─ df1e05db4a35356e4b6d222f4ae7a3eaf662a4
│  │  ├─ 4c
│  │  │  └─ ada922eb9652d87064c368cef77fa4b1df6bb6
│  │  ├─ 4d
│  │  │  ├─ 1cb633ac4eb7035a3e2895310ffb08dc10e611
│  │  │  ├─ 58c14ee9255eaad2b89ead9a6fabe05095a554
│  │  │  └─ 61746c025975f1a3213134fedaa4de93291f30
│  │  ├─ 4f
│  │  │  ├─ a27a2f8b0484060a1680d72f73a8b37110fb26
│  │  │  └─ de6b8d00116e0940c4ebe526703c177af86250
│  │  ├─ 50
│  │  │  ├─ 155c34b07b0e8ccec068371d277ee3861e7128
│  │  │  ├─ a1ce89bc15694181f5f067ac57df5bb58ff7fb
│  │  │  ├─ ca0920cf1f2c5a3280382f6f330e169989b0c7
│  │  │  └─ fac34172e19aa5105709fb52fb9cc05587257b
│  │  ├─ 51
│  │  │  └─ db34bc6cfcf568b05899088268f4fb0b4f50b6
│  │  ├─ 54
│  │  │  └─ e97fc601ad6579949c81f668060a2455fdc7b6
│  │  ├─ 55
│  │  │  └─ 984c387ff0efd9876bb76c7094c5400b65457f
│  │  ├─ 58
│  │  │  └─ 53572205db51080e112acc25dfdf5fe760ac6d
│  │  ├─ 59
│  │  │  └─ 13c46a50cae3816f716d68383e908e20e98cca
│  │  ├─ 5a
│  │  │  └─ 6f18c3ce38801dd4fee84723714a5ecfa01205
│  │  ├─ 5c
│  │  │  └─ 9ea4529641881f07ab609606f0504418be5af5
│  │  ├─ 5e
│  │  │  └─ 9541f5c058e0d625d55a803694b2fb5abcb001
│  │  ├─ 5f
│  │  │  ├─ 112bf5352541ec321696140b2cd72e93675b58
│  │  │  ├─ e1fc00d9de9b2936c2069d1e91928875e761c1
│  │  │  └─ e86114eda735e886b010fc4cd30b5070c049cf
│  │  ├─ 63
│  │  │  ├─ 6e4d854411d94d8ecae6152b6672bb1580e824
│  │  │  └─ 87ff2b75e80063a0010534eb53de934afda64d
│  │  ├─ 64
│  │  │  └─ 31bc5fc6b2c932dfe5d0418fc667b86c18b9fc
│  │  ├─ 66
│  │  │  └─ da2bbdcf6c2cbaf414f47c95ae627808d6016e
│  │  ├─ 67
│  │  │  ├─ 09d8cf4c64648f58146dcc6d8290eb3566dfbd
│  │  │  ├─ 1729712cbfc2057c5b8645124276093cf50cfc
│  │  │  ├─ 68117b5d7acea8bd187ca25e17d0f6b524fc81
│  │  │  └─ e3cf015c45e0bbda0eb120b6c0269e761b91fd
│  │  ├─ 68
│  │  │  ├─ 1dfd0fe201e32dfc52ac40b48c3acb1d9585f7
│  │  │  ├─ 3d282c756dff5bace3c66812eb271b8ab23c72
│  │  │  └─ 87d0b319907ed26c4793a2030754511163127c
│  │  ├─ 69
│  │  │  └─ 1c8a585c10e114e9538f8c385f73532f828b24
│  │  ├─ 6c
│  │  │  ├─ 1be1cb69ae8c7eeccfd3b2b24675937415d882
│  │  │  └─ 4d3f7718cc25da840cf59c8414630c243adb18
│  │  ├─ 6d
│  │  │  ├─ 032774f2480c305a49845117eca0e9cda9e6d5
│  │  │  └─ 4be4d9c95bbf11b18a9bef97528a3da0a91925
│  │  ├─ 6e
│  │  │  └─ dbc67dd996c428c8f83a600ca6ca44aef07b9b
│  │  ├─ 70
│  │  │  └─ 6919a0b4d0bebe6c5a70db9a3dc476c7bcf92a
│  │  ├─ 72
│  │  │  └─ 0447996a1aa7ac3f43e87e13df778382dce607
│  │  ├─ 73
│  │  │  ├─ 324d73dad7d18088b6459eafee182a2682d0dd
│  │  │  └─ f239151f178d52739155763cdfbe1df361c896
│  │  ├─ 74
│  │  │  ├─ 21fdc72c836c4192fecaecb8ce655b3d6ec14c
│  │  │  ├─ 700fad92f34b2530291576049d419d46ceae70
│  │  │  ├─ b1a275a0ea7df518f17bcea5375abf003abe55
│  │  │  └─ e428b039a3f790932fcd09b4f70faba6d23192
│  │  ├─ 76
│  │  │  └─ b381bd7f7c8d2ef857348cbc22edd0c7a6a15a
│  │  ├─ 78
│  │  │  ├─ 2acf4f62a0799da19a62453837299d280b6101
│  │  │  ├─ c7fd4a7e7392029df85115de722d7c4824176d
│  │  │  └─ da16da545b5d0f4b69240a49058787e3d490d3
│  │  ├─ 79
│  │  │  └─ 9ff766ad487f3c75957f714647042d118a70cf
│  │  ├─ 7b
│  │  │  └─ 1f54ecf901d53667f9f000dc5cdfc85376afc0
│  │  ├─ 7c
│  │  │  ├─ 1291aedb86e6f7bd1b2bab0d3506766ebd3df8
│  │  │  ├─ 804b7aa0de1d47538950fcfbccfaa63956b623
│  │  │  ├─ a1b708bf420e5ac0b14cdf0633f544f423718c
│  │  │  └─ fb81d83cad5f7cf01964ed3f7bdf13e8fbe8d4
│  │  ├─ 7d
│  │  │  └─ 04158d521e0ed27336e12413a25bb605237442
│  │  ├─ 7e
│  │  │  ├─ 0e266b525496cc1f6542683bd563da0b62296f
│  │  │  └─ e239291164510b91e61b211df60e147a72de31
│  │  ├─ 7f
│  │  │  ├─ 3223873b7105ebc7e6f355e88816043a0476fa
│  │  │  ├─ abe4a6ce1bb4c47c55ac869100662e25a2abb9
│  │  │  └─ da4d4c6653a3e6281a272d1887b0a9d7169574
│  │  ├─ 81
│  │  │  └─ 7855b54e4d425df01fafcf915f25e95b3b4cc7
│  │  ├─ 82
│  │  │  └─ 9c8dbb1c42ad1c31fd69a632e16f12b7e6e095
│  │  ├─ 84
│  │  │  ├─ 6d143229e17733cf020f9b7716382395afed11
│  │  │  └─ 71ed42830b1162c836bf7b4c2d20f6baae7734
│  │  ├─ 85
│  │  │  └─ 521a3c65e2253585e9d57d07cc6b9f9ca58df1
│  │  ├─ 86
│  │  │  └─ 88be5c344102f6e8b25e9c157780638efe8b4a
│  │  ├─ 87
│  │  │  └─ 3cd221e871ab4340a846cc41edcee39b211f15
│  │  ├─ 89
│  │  │  ├─ efe57880c63d96b7bd82c959faad12dae22bfd
│  │  │  └─ f2f30c1332c0f12e266a5b26c539d00c311328
│  │  ├─ 8a
│  │  │  ├─ 3011415e29dcb70b7f39c753881ce33aeebc52
│  │  │  └─ fa39d01a9c3a58b3bf13bbc62bbe1748152042
│  │  ├─ 8b
│  │  │  ├─ 10e975a044aea0bbc91224b004e8bba51f755b
│  │  │  ├─ 43ef250e3d702ffe07072c276d6cfd838b34c1
│  │  │  └─ a144f85d7fe88714f3bb41f8fccdbaea1b3c6f
│  │  ├─ 8c
│  │  │  ├─ 9ad32010df17c18ea6f65968a0cc93f10f475b
│  │  │  └─ f5b0ca1133e35e611e92454c54d23542d05808
│  │  ├─ 8d
│  │  │  └─ 337a3dcc437e729607131bcf7b4782abca549e
│  │  ├─ 8f
│  │  │  ├─ 8a8613f12f2fff68edd2fddd058081d6ffe557
│  │  │  └─ 9a42b5eb603c234b8bc4c1153b9e43d2612ec3
│  │  ├─ 90
│  │  │  ├─ c3a18238cc38f9490a90b1f79839fc6e7e7b57
│  │  │  ├─ d287ed22256b672e6d4bccba6b8edccf794f63
│  │  │  └─ f9ce0f4bb49ee434b2a46fff940c96a87ca285
│  │  ├─ 91
│  │  │  └─ e7d1f2200baac3f1b68e7552fb76ae74c1d553
│  │  ├─ 92
│  │  │  ├─ 0287d1267791f71db690586519d4557ecf1faa
│  │  │  ├─ 09cf7815bcc7aa532572ee2e3f5bc963a9211f
│  │  │  └─ b157bc2166a448ca880dc844db80acd16d85ff
│  │  ├─ 93
│  │  │  └─ c4d161821f27a3a282ded26677ca42aebd5b8d
│  │  ├─ 94
│  │  │  ├─ 7b0b218d8edaebbcecb0d7ff7fa610e07a3145
│  │  │  └─ cd17a6b2b0498a33b6bec4f26b6ca9097b32d3
│  │  ├─ 95
│  │  │  └─ 9fe64d2d2bec05d42f32509b0eb33404dd0217
│  │  ├─ 96
│  │  │  └─ 272adf0fbdcf1c7d261b81dd9e0ed5740e9083
│  │  ├─ 97
│  │  │  └─ a5d8289aca4aa46d45d2038348ccd5732a36d1
│  │  ├─ 98
│  │  │  ├─ 5279c8eb9ef8a01be9c36d71075f5bcb3c1267
│  │  │  └─ b77f0d1894130006d6fb3271f821be50fe9b29
│  │  ├─ 99
│  │  │  ├─ 307a37e2925ef82d25d316663f50a1d1fb4e79
│  │  │  ├─ 5fb315cfbf9e73905b043f6d3aa7c8a9a89759
│  │  │  ├─ 6fe1d3123aad1e6cc0fa2c5ac7e15c8d3afa30
│  │  │  └─ e6b74fcb8fa07d6280441f16dafe3db2f542f4
│  │  ├─ 9a
│  │  │  ├─ 54718c34f5a6528dee445adaac5bc6a8e59ee4
│  │  │  ├─ 70d4f194a1c2ae10e808dea2e8525929169017
│  │  │  ├─ 7e220bb4640d3c16c29b640b1a38fe051cf35e
│  │  │  └─ 925643883993f579cce8f70e98fc12bafc80db
│  │  ├─ 9b
│  │  │  ├─ 3182b2627e6dcaf871ff4bdf240b67874cc441
│  │  │  └─ bf864c7f57419e157934c5529ff8700b59b0e6
│  │  ├─ 9e
│  │  │  ├─ a6255869924f8bcff7f5f10ab3ed89680e2383
│  │  │  └─ fd77dcb1848f4dd08c5fd1af673be5218d9d21
│  │  ├─ a0
│  │  │  ├─ 13c61987787dacda72439e277839f4f298dba3
│  │  │  ├─ 662be3fce08081670164175430e36c70fbc79a
│  │  │  └─ 968496f342fb7df6c652be7ebbdbd78a463c78
│  │  ├─ a2
│  │  │  ├─ ae5e3ad0a1bc4b27b8a43b983d8c595b06ba2d
│  │  │  └─ be4dc97d827ea623be117ee175d6ebceeb20e8
│  │  ├─ a3
│  │  │  └─ db5d9ff415868cd663ecf0fd2c64bac71c71ed
│  │  ├─ a4
│  │  │  └─ a5f1cc6133d3e8c132a91fd377f810a79320c4
│  │  ├─ a5
│  │  │  ├─ bee2a4dc13b625dbd46691f973bbc06ffb71e5
│  │  │  └─ c0a164b94eed784055c944034d6545be84eb24
│  │  ├─ a6
│  │  │  └─ ea05a83a8065e43abac3391d3143cd1b4561b6
│  │  ├─ a7
│  │  │  └─ 4982b3eed2f6e3c9faf8003b95391990701618
│  │  ├─ a8
│  │  │  ├─ 2fde68d7082335383f9648eca11bb4969fd089
│  │  │  ├─ 8b78fb418b624a0ecea2a18f61c4c72658dda1
│  │  │  └─ a34d183a0260565113c1ef24456b0d68206961
│  │  ├─ a9
│  │  │  ├─ 82a78fb1c742f883beafcdd600502b148233e2
│  │  │  └─ f2cd9c87077ea69dcdc6bebc94e7785df08819
│  │  ├─ aa
│  │  │  └─ 05cdfeeac9ccd0fd99c580f1c7e48622901cfd
│  │  ├─ ad
│  │  │  ├─ 34ceaa0dd1efaee061c6966eb4f460083d8fd9
│  │  │  └─ fe0f8b528f98b48f5718e52154905d1a1c7e64
│  │  ├─ af
│  │  │  ├─ acf2fd7597093dcb28ee9008b13eb23c8e1454
│  │  │  └─ f74a514a08ffe246e633189b8d79d110ca6a2b
│  │  ├─ b0
│  │  │  ├─ 3b9e0539d94b7e1dad336c4f386437a4bb9a3e
│  │  │  ├─ 4c55bcb1c79fe3d7df65c2d15484b63b03a857
│  │  │  └─ 84e1e2c80874619557fbd3f6ba7330d7e5ead2
│  │  ├─ b1
│  │  │  └─ 6dbdaad89eb036383887c27e180a685c60ea39
│  │  ├─ b3
│  │  │  └─ d047517a63d5d0ea908ab32d536f1aea263fdd
│  │  ├─ b4
│  │  │  └─ 1531b28fa3bb7337a586a446fd5a0c8ca14285
│  │  ├─ b6
│  │  │  ├─ 408f2706da29f566929b99f7b0be2d5ecb1464
│  │  │  ├─ 9caeddb9e0fb20972dda286af8386d4a79b892
│  │  │  └─ f85e902f1350048fde46d9e2146205e27786b1
│  │  ├─ b7
│  │  │  └─ 549aa1854c5681b8e9130a864953331922916c
│  │  ├─ b8
│  │  │  ├─ 9240e8273d59e5e6b0887d4fb999a0663ac33c
│  │  │  └─ ec64a46bd8e496f829dc997cd670b86ebb0060
│  │  ├─ b9
│  │  │  └─ f1ee489acc4ff91a780f2825948dae0bf13ad6
│  │  ├─ bc
│  │  │  ├─ 3a7d669051c269044af999c3a81e3848afb2e1
│  │  │  ├─ 69d1c0f5df7a3f6af2b7fc8399e5ef64366573
│  │  │  └─ eb973cef6b09f5e823c364da26b22f6dd143bb
│  │  ├─ bd
│  │  │  └─ 335e67d991674177f39b6040471618b07747be
│  │  ├─ be
│  │  │  ├─ 5ae20cadf56c00faec3d627f55e6e09cf5a96f
│  │  │  └─ 5cbf004b96177d88ed4ab3d408517674fa1144
│  │  ├─ c0
│  │  │  ├─ 501795758a82a60172e21db5f624532d21bb9d
│  │  │  └─ 734296862d5bcae8327c79246922456e1c1557
│  │  ├─ c1
│  │  │  ├─ 1311f27943b13ecdcd24c43d2ee87bf94ff64e
│  │  │  └─ 28392749b270e2e71624aa882c5b05858eec0c
│  │  ├─ c2
│  │  │  └─ 3d2ad9825adc621714d882677f4ac98d5fecdf
│  │  ├─ c6
│  │  │  ├─ 0a80c0a04ae4ff6dd69db77ff373fc56cabf01
│  │  │  ├─ 2e7f0934aa07c8badfa54273e2240a68500d2b
│  │  │  ├─ 5e07dc2ee2698a8c86b22330fb004b85e9db2c
│  │  │  ├─ b9a5ce7fb63504a38295d4891a6a626ec586d3
│  │  │  └─ eef6345d6a64cb5254b7eb56f1fc39d5ea30f0
│  │  ├─ c7
│  │  │  ├─ 18939458c92d9aff77f970654d2ee824cd53c4
│  │  │  ├─ 91f4a3875703eac0fd3261c1c143d176ea520c
│  │  │  └─ a563cd5acb75047d92f0868ce9c50ca0ea34fc
│  │  ├─ c8
│  │  │  └─ 582e2ca9f3a0885b999851ed7317d822a3c07b
│  │  ├─ c9
│  │  │  ├─ 2943fdf5d995c0a645c9493c2a5efce0ba0ef4
│  │  │  └─ f8c0fe602e0499636ab46a3bec78b084a7bfd6
│  │  ├─ ca
│  │  │  ├─ 1c919aad7f6e060fbefdde365f7bcd83c1eaff
│  │  │  ├─ 4469003bb0215ffd394f40994f26a5a50d6bcc
│  │  │  ├─ 8d2c5eda290c783c312d1c2907f2f8df2c98da
│  │  │  ├─ e12831ecc4cc9bbfcf84dc6bf14e7a631a93ce
│  │  │  └─ f47ac4722af07ec5c56a0dd033e1cd3c1f1f67
│  │  ├─ cb
│  │  │  ├─ 53852106cb9c7064a020a8f8b921b2d8b15824
│  │  │  └─ d2f4c9f54b63f3d5fff184833ef6689b7e9673
│  │  ├─ cc
│  │  │  ├─ 6b7738c92b6cca5f9db8119c9a91b7ff16cbf6
│  │  │  ├─ b3aa2e24b4ab6477963c2626abd294101f2b57
│  │  │  ├─ cf460f27be1b38a5ea6444c4fe3c3d6c5335a0
│  │  │  └─ f82feddf0f39ec97894ff87c17e17574d7f173
│  │  ├─ cd
│  │  │  └─ c72d7b7c3df88616719f0978de88d109d5a99c
│  │  ├─ cf
│  │  │  ├─ 52b6439bc95705418ed150c15e64bfe1dbee57
│  │  │  └─ 91c32cc55050724ab0ac9029e1e5a1675f18d9
│  │  ├─ d1
│  │  │  └─ a3f72111b6957394b4ac4b32ca3fd60ed8d302
│  │  ├─ d3
│  │  │  └─ 68deae7e7ad0495fec672b9a683775bb3cbb2a
│  │  ├─ d5
│  │  │  └─ a688db0450af5efa71be790f1e7ffb0a160260
│  │  ├─ d6
│  │  │  ├─ 0a33607dc08c526f741f3cad57c6da14377283
│  │  │  ├─ 282cf15a7d8989ccd9cea2feff6c785c40c740
│  │  │  └─ 6a979740047d783276612c4592c845c267f61b
│  │  ├─ d7
│  │  │  └─ 0d85017a11a5378c79f305283d71a7d28d4237
│  │  ├─ d8
│  │  │  ├─ 30c33a4baa9df491b023e5094c90b94cfc3900
│  │  │  └─ 669fbbad9e1eb9cac9b2e13250a0d39c040d0e
│  │  ├─ de
│  │  │  └─ 3b9529efa4defc3ba2eb290fafb7e7342f1dea
│  │  ├─ df
│  │  │  ├─ 48713b08eb98e5fd87692475452be6e7ab0aad
│  │  │  └─ 767be5bab4430e7c5d8c7a6baa50ab7801f026
│  │  ├─ e0
│  │  │  └─ 0ae31c3347f0effe3310a3279536233ebac6c2
│  │  ├─ e3
│  │  │  ├─ 201d02bf5056abaded2f58f3180b18a8ee076d
│  │  │  └─ f475f7b8bccc600f8e44449d9511eb32a4172c
│  │  ├─ e4
│  │  │  └─ e6ab60332fee13809e89f617e12aad676f1613
│  │  ├─ e5
│  │  │  └─ d556ed54cdde9cd116dd00bcd6666fb70c03a5
│  │  ├─ e6
│  │  │  ├─ 599d986cb39bad704fc626d8a8fd5afe3e751d
│  │  │  ├─ 5f72f450be2cba10fee065eb7e355ef2b4ec51
│  │  │  ├─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  │  └─ d03da89ebebebabffa004af8f8ee9af466a6fc
│  │  ├─ e7
│  │  │  └─ f82c8010b1f3c139207f74c8ffefc8fbe1aae3
│  │  ├─ e8
│  │  │  └─ 056509c3be703935fc3d8622e0095a24a47d93
│  │  ├─ e9
│  │  │  ├─ 3f6aad10a5923c0e90c44fc2e473439b7dcd91
│  │  │  └─ 5372f8a8fc0fba937b54de03329c7f35f7b3c7
│  │  ├─ eb
│  │  │  └─ 735bdb092e2fa141622bbc60672a3fa223cd91
│  │  ├─ ec
│  │  │  └─ 02ab1db78e62cf490f96e371c86160a70a05c7
│  │  ├─ ed
│  │  │  ├─ 64af79aa826aa0c5b98d5f8869a4c4f777dc30
│  │  │  ├─ 8da1362ec6c89c113cd03a52ecafc10ada38df
│  │  │  ├─ ae9b727a279c8d4446c6a7cc07b8bf3f4bef64
│  │  │  └─ f3511f3b5c2b408430ad821f185c0897c1767c
│  │  ├─ ee
│  │  │  ├─ 10177d59a42d785f2ce5f85ecbf7bd27b7547b
│  │  │  └─ 66004e0a7d30e0eefe981faa921a838819468a
│  │  ├─ ef
│  │  │  └─ 94d99786a565474c910b5d8c8e5160a1094316
│  │  ├─ f0
│  │  │  └─ 0874fc0da021eaa45b5427c26ee32367d86584
│  │  ├─ f1
│  │  │  ├─ 1dce2403d60694d954833ea699168c07ff3397
│  │  │  ├─ 993fac32d52ffa05596fe18cb3a42d6dcd7a93
│  │  │  └─ e351e68b6251e8954538f98dfee9c56d62216f
│  │  ├─ f2
│  │  │  ├─ b9923ec47d0400022442d3cc3c2b1fef7a89d3
│  │  │  ├─ c11135869866ed3afbff2466a7c9a6a9e0243d
│  │  │  └─ e2d81e9d3f97479d55dbf0eb10253aa1398a08
│  │  ├─ f3
│  │  │  ├─ 4582982d398c3abab4dbf6b3e860b4f782faca
│  │  │  ├─ 75242d4dd4881aff4476598be7f18905d26174
│  │  │  └─ e830917aa5abaf94f3829d270c39bd64ba7b54
│  │  ├─ f8
│  │  │  ├─ 2ffe79a967e22ad5d0ad738c9ae076ee74eec0
│  │  │  ├─ 96de8aaecdbb295be5de1fc7c07752e40c64c4
│  │  │  └─ e8f483c8ef0ecc73735979821cfe4fba304490
│  │  ├─ f9
│  │  │  ├─ 79245588a69430f6347a788fd66a1400c2d2ab
│  │  │  ├─ c25b05f1b47fe1d1b5254ae276f63dd92d2198
│  │  │  └─ fccedc6b36fcfce980cd2b0ac131fdf0132a63
│  │  ├─ fb
│  │  │  └─ 341f5c429dc269e55dc835289a9fe2bb0698c7
│  │  ├─ fd
│  │  │  └─ f80bf0f96c9c7fe976ad30a3f859580c4a540b
│  │  ├─ fe
│  │  │  └─ e24846f81cb8842ba6c7ac2a9f0b5a7baaf175
│  │  ├─ ff
│  │  │  ├─ 7bb1a55ca8479bd27eb5428e2ecc10dcec0234
│  │  │  ├─ 86e2c4928a32a6f917fd0352ad63e0586153ce
│  │  │  └─ b3e8e5542b3e160d7a8b9bdf4bbf6187f60895
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  ├─ master
│     │  └─ submission
│     ├─ remotes
│     │  └─ origin
│     │     ├─ master
│     │     └─ submission
│     └─ tags
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
│  ├─ Constant
│  │  ├─ environments.ts
│  │  ├─ httpStatus.ts
│  │  └─ index.ts
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
│  │  │  ├─ components
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
│  │  ├─ index.ts
│  │  └─ usersSlice
│  │     └─ index.ts
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
│  │  ├─ index.ts
│  │  └─ users.ts
│  ├─ config
│  │  ├─ index.ts
│  │  ├─ pagination.ts
│  │  ├─ persist.ts
│  │  └─ themeColor.ts
│  ├─ helpers
│  │  ├─ formatNumber.ts
│  │  ├─ getUsersInfo.ts
│  │  ├─ index.ts
│  │  └─ localStorage.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ react-app.d.ts
│  └─ setupTests.ts
├─ tsconfig.json
└─ yarn.lock

```