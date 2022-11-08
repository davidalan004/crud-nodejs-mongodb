const {Router} = require('express');
const router = Router();

const {
    renderSigninForm, 
    renderSignupForm, 
    // renderLogoutForm, 
    signup,
    signin, 
    logout
} = require('../controllers/users.controller')

router.get('/users/signup', renderSignupForm)

router.post('/users/signup', signup)

router.get('/users/signin', renderSigninForm)

router.post('/users/signin', signin)

// router.get('/users/logout', renderLogoutForm)

router.get('/users/logout', logout)


module.exports =  router;