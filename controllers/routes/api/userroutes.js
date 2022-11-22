const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getSingleUser)
  .delete(deleteUser);

module.exports = router;
