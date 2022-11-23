const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createThought,
deleteThought,
 
} = require('../../thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/students/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);



module.exports = router;
