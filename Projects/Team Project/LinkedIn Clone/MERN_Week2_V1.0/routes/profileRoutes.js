const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const profile = require('../controllers/profileController');

router.get('/me', auth, profile.myProfile);
router.put('/', auth, profile.updateProfile);
router.get('/:id', auth, profile.getProfile);

module.exports = router;