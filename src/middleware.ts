import createMiddleware from "next-intl/middleware";

import { routing } from "@/intl/routing";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default createMiddleware(routing);
