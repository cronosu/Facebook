import { auth } from "./app/api/auth/[...nextauth]/route";
 
export default auth((req) => {

})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/accueil"],
}