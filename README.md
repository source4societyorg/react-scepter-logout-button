# react-scepter-logout-button

A logout/login button that simply uses a react-router link component combined with a button element to redirect to the given path. It defaults to the login page by default. A SCEPTER style project often "logs the user out" when navigating to the login page and so this button simplifies development in such a project.

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-logout-button.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-logout-button)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-logout-button/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-logout-button)

# Installation

    npm install @source4society/react-scepter-logout-button

or

    yarn add @source4society/react-scepter-logout-button

# Example

`import LogoutButton from '@source4society/react-scepter-logout-button';` in your react component where the button shall be used. Then simply:

    <LogoutButton />

If you wish to change some of the defaults, the prop list is as follows:

    buttonText: String // Changes the label displayed on the button (default: Log Out)
    logoutPath: String // Changes the path to where your logout logic is triggered (default: /login)
    className: String // Custom class name applied to the button (default: '')