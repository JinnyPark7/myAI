import { AI_NAME, OWNER_NAME } from "@/configuration/identity";
import Image from 'next/image';

export const CHAT_HEADER: string = `Ask to JINAI`;
export const MESSAGE_PLACEHOLDER: string = `[MESSAGE PLACEHOLDER]`;
export const CLEAR_BUTTON_TEXT: string = `Clear`;
export const PAGE_TITLE: string = `JINAI`;
export const PAGE_DESCRIPTION: string = `Chat with 'JINAI', 'Jinny Park''s AI assistant.`;

export const FOOTER_MESSAGE = (
  <div style={{ textAlign: "center", padding: "10px" }}>
    <Image src="/logo.png" alt="JINAI Logo" width={150} height={50} />
    <p>Customized AI by Jinny</p>
  </div>
);

export const EMPTY_CITATION_MESSAGE = "Unspecified source";
