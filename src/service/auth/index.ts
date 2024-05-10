import request from "../config";
import { Request } from "@auth-interface";
const auth: Request = {
  sign_in: (data) => request.post("/login", data),
  // auth_verify: (data) => request.post("/auth/verify", data),
  // sign_up: (data) => request.post("/auth/register", data),
  // forgot_password: (data) => request.post("/auth/forgot-password", data),
  // update_password: (data) => request.post("/auth/verify-forgot-password", data),
  // sign_out: () => request.post("/signout"),
  // get_service: (params) =>
  //   request.get("/service/get-all", {
  //     params: params
  //   }),
};

export default auth;
