import { DisplayMessage } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { preprocessLaTeX, renderCitations } from "@/utilities/formatting";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function Formatting({ message }: { message: DisplayMessage }) {
  const processedContent = preprocessLaTeX(message.content);

  const components = {
    code: ({ children, className = "", ...rest }: CodeBlockProps) => {
      const match = className.match(/language-(\w+)/);
      return match ? (
        <SyntaxHighlighter
          {...rest}
          PreTag="div"
          className="rounded-xl"
          language={match[1]}
        >
          {String(children).trim()}
        </SyntaxHighlighter>
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
    p: ({ children }: { children: React.ReactNode }) => {
      return renderCitations(children, message.citations);
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={components}
      className="gap-3 flex flex-col"
    >
      {processedContent}
    </ReactMarkdown>
  );
}
