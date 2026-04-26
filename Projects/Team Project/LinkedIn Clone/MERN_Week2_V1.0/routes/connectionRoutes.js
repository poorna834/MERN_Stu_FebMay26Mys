const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const connection = require('../controllers/connectionController');

router.post('/request/:userId', auth, connection.sendRequest);
router.get('/requests', auth, connection.pendingRequests);
router.put('/accept/:requestId', auth, connection.acceptRequest);
router.put('/reject/:requestId', auth, connection.rejectRequest);
router.get('/', auth, connection.myConnections);

module.exports = router;