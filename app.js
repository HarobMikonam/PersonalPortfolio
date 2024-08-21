import Home from '.home.js'
import AboutMe from '.aboutme.js'
import Projects from '.projects.js'
import ContactMe from '.contactme.js'

import utils from '.utils.js'


// The only available routes a user can call, any other than these the user will be redirected to Home

const routes = {

    '/' : Home,
    '/about-me': AboutMe,
    '/projects': Projects,
    '/contact-me': ContactMe
};

