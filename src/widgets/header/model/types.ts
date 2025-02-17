import { ContactType } from "@/shared/types/types"

export type DesktopContacts = {
  type: ContactType,
  hidden: boolean,
  value: string;
}