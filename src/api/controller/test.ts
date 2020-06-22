// import { Router } from "express";
// import { livestreamService } from "../service/livestream";
// import { pipeResponse } from "../middleware/response"

// export const roomRoute = Router();

// roomRoute.get(
//     "/",
//     (req, resp, next) => {
//         Promise
//             .resolve()
//             .then(() => livestreamService.getAllRooms())
//             .then(pipeResponse(next))
//             .catch(next)
//     }