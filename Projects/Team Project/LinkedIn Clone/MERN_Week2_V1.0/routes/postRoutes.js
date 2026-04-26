const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const post = require('../controllers/postController');

router.post('/', auth, post.createPost);
router.get('/feed', auth, post.feed);
router.post('/:id/like', auth, post.likePost);
router.post('/:id/comment', auth, post.commentPost);

module.exports = router;