const router = require('express').Router();
const {
getThoughts,
getSingleThought,
createThought,
deleteThought,
 
} = require('../../thoughtController');

// /api/students
router.route('/').get(getThoughts).post(createThought);

// /api/students/:studentId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/students/:studentId/assignments


module.exports = router;
