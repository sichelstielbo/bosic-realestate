import express from "express";
import jwtCheck from "../config/auth0Config.js";
import { bookVisit, cancelBooking, createUser, getAllBookings, getAllFavorites, toFav } from "../controllers/userCntrl.js";
const router = express.Router()

router.post("/register", jwtCheck, createUser);
//Created a post request to the endpoint of "register", when the endpoint is reached, the createUser function will execute
router.post("/bookVisit/:id", jwtCheck, bookVisit)
router.post("/allBookings", getAllBookings)
router.post("/removeBooking/:id", jwtCheck, cancelBooking)
router.post("/toFav/:rid", jwtCheck, toFav)
router.post("/allFav/", jwtCheck, getAllFavorites)
export { router as userRoute }