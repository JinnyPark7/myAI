import { FOOTER_MESSAGE } from "@/configuration/ui";
import Link from "next/link";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex pt-2 text-gray-500">
      {/* Left Pane - Terms of Service */}
      <div className="flex-grow text-left">
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>
      </div>

      {/* Center Pane - Customized AI Message with Logo */}
      <div className="flex-grow text-center">
        <div className="flex flex-col items-center">
          {/* Custom logo image */}
          <img src="/logo.png" alt="JINAI Logo" width="150" className="mb-2" />
          {/* Customized AI message */}
          <p>Customized AI by Jinny</p>
        </div>
      </div>

      {/* Right Pane - AI Provider Information */}
      <div className="flex-grow text-right">
        {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
        <a
          href="http://www.ringel.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by ringel.AI
        </a>
      </div>
    </div>
  );
}
