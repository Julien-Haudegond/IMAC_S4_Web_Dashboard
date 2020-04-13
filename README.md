# IMAC_S4_Web_Dashboard

*IMAC Semester 4 project*

Frontend application built with Hyperapp framework.

## Table of contents

* [**How To**](#how-to)
    + [**Install Node Libraries**](#install-node-libraries)
    + [**Run Server**](#run-server)
    + [**For Developpers**](#for-developpers)
        - [**Check JS Syntax with Eslint**](#check-js-syntax-with-eslint)
        - [**Cleaning**](#cleaning)

## How To

### Install Node Libraries

The first thing to do is to install the libraries.
Open a shell inside the root folder.

```bash
npm install
```

Now, you should have a sub-folder *node_modules*.

### Run Server

To make the server run:

```bash
npm run start
```

The server will be opened on *localhost:3000*.
To make it stop, use Ctrl+C.

### For Developpers

#### Check JS Syntax with Eslint

For developers only: To make sure the code is well written, please run this command several times during your development work.

```bash
npm run lint
```

If nothing happens, everything is right. Else, warnings or errors will be written there.

##### VSCode User?

If you are using VSCode, there is a highly convenient [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) which allows to use Eslint and detect every error, everytime, while typing code.
The only thing to do is to open the root folder inside of VSCode, by right-clicking or with a shell:

```bash
code .
```

The errors will appear at the left bottom of the VSCode window and they will be emphasized in the code with a wonderful little red wave.

#### Cleaning

Sometimes, problems may occur because of the cache.
There are two commands you can do in a shell:

```bash
npm run clean # delete 'cache' and 'dist' folders
npm run clean-all # delete 'cache', 'dist' and 'node_modules' folders
```

If you are using **clean-all** option, you will have to install Node libraries again.