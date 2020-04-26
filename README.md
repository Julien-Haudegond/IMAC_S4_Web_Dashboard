# IMAC_S4_Web_Dashboard (Festiv)

*IMAC Semester 4 project*

Frontend [application](https://julien-haudegond.github.io/IMAC_S4_Web_Dashboard/) based on this [API](https://data.culture.gouv.fr/explore/dataset/panorama-des-festivals/api/). Built with Hyperapp framework and Parcel.

![Festiv-HomeScreen](images/Festiv_HomeScreen.png)

Authors:
- Thomas GESLIN
- Julien HAUDEGOND
- Cyrielle LASSARRE
- Océane RIOSSET
- Sarah VEYSSET

## Table of contents

* [**How To**](#how-to)
    + [**Install Node Libraries**](#install-node-libraries)
    + [**Run Server**](#run-server)
    + [**For Developpers**](#for-developpers)
        - [**Check JS Syntax with Eslint**](#check-js-syntax-with-eslint)
        - [**Cleaning**](#cleaning)
        - [**Building for GitHub Pages**](#building-for-github-pages)
* [**Ressources**](#ressources)

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

#### Building for GitHub Pages

```bash
npm run build # delete 'docs' folder, build the app inside a new 'docs' folder and copy the '404.html' inside the 'docs' folder
```

## Ressources

### Other Hyperapp Projects made by IMAC Students

- [Pokedash](https://github.com/Nathanael-ROVERE/Dashboard-S4)
- [OUAIBE](https://github.com/mmmaxou/OUAIBE)

### Setup

- [Basic setup: Parcel & Hyperapp](https://www.codementor.io/@chriswahlfeldt/getting-started-with-hyperapp-lk2u2fb85)
- [Basic setup: Parcel & Hyperapp](https://blog.daftcode.pl/hyperapp-parcel-71823bd93f1c)
- [Setup a 'run clean'](https://medium.com/@codejamninja/1000-ways-to-npm-clean-1a514525a13c)
- [Hyperapp-router](https://github.com/jorgebucaran/hyperapp-router)
- [Example of Hyperapp router application](https://dev.to/thobyv/hyperapp--hyperapp-router-create-a-movie-shopping-cart-web-app-47d)

### Solving dev problems

- [Solving Runtime Regenerator error with Babel.js](https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined/53736090#53736090)
- [Chart.js: Find every instance](https://stackoverflow.com/questions/36608208/how-to-retrieve-chartjs-instance-after-initialization)

### Building & Deploying

- [Building application with Parcel for Github Pages](https://www.sitepoint.com/parcel-hyperapp-github-pages/)
- [Dealing with routing 'problem' on Github Pages](https://github.com/rafrex/spa-github-pages)
