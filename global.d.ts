/* eslint-disable no-unused-vars */
import Messages from "@/public/locales/en-US";

import type { MessageKeys as IntlMessagesKeys, NestedKeyOf } from "next-intl";

declare global {
  type IntlMessages = typeof Messages;
  type MessageKeys = IntlMessagesKeys<IntlMessages, NestedKeyOf<IntlMessages>>;
}
