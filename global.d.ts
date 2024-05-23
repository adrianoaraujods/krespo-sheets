/* eslint-disable no-unused-vars */
import Messages from "@/locales/en-US";

import type { MessageKeys as IntlMessagesKeys, NestedKeyOf } from "next-intl";

declare global {
  type IntlMessages = typeof Messages;
  type MessageKeys = MessageKeys<IntlMessages, NestedKeyOf<IntlMessages>>;
}
