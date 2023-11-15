const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const requireAuth=require('../middleware/requireAuth')

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)

// Get all workouts
router.get("/", getWorkouts);

// Get a single workout
router.get("/:id", getSingleWorkout);

// Post a single workout
router.post("/", createWorkout);

// DElete  workout
router.delete("/:id", deleteWorkout);

// Update a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
