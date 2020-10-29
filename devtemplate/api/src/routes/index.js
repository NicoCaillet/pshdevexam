const { Router } = require('express');
// import all routers;
const playersRouter = require('./players.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/players', playersRouter);

module.exports = router;
