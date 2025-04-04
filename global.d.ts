import messages from "@/public/locales/en-US";
import { formats } from "@/intl/request";
import { routing } from "@/intl/routing";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}
