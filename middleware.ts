import createMiddleware from "next-intl/middleware";

import { middlewareConfig } from "@/lib/intl";

export default createMiddleware(middlewareConfig);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
