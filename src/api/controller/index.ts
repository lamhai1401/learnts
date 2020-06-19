import { Router } from "express";
import { baseMiddleWares } from "../middleware/base"
import { responseMiddleWares, pipeResponse } from "../middleware/response"
import { errorMiddleWares } from "../middleware/error"

// import sub route


// export 
export const adminRoute = Router();
adminRoute.use(
    ...baseMiddleWares,
)

// use subrouter here


// append middleware
adminRoute.use(
    ...responseMiddleWares,
    ...errorMiddleWares
)