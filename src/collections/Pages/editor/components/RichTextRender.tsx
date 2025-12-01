

// RichTextWrapper.tsx
// import React from "react";

// interface RichTextWrapperProps {
//   content: string; // HTML string
// }

// export const RichTextWrapper: React.FC<RichTextWrapperProps> = ({ content }) => {
//   return (
//     <div
//       className="prose dark:prose-invert max-w-none"
//       dangerouslySetInnerHTML={{ __html: content }}
//     />
//   );
// };

// RichTextRender.tsx
import React from 'react';

interface RichTextRendererProps {
  content: any; // JSON venant de Puck
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  if (!content || !content.root?.children) return null;

  const renderNode = (node: any, index: number) => {
    switch (node.type) {
      case 'paragraph':
        return <p key={index}>{node.children.map((c: any) => c.text).join('')}</p>;
      case 'heading':
        return <h3 key={index}>{node.children.map((c: any) => c.text).join('')}</h3>;
      case 'list-item':
        return <li key={index}>{node.children.map((c: any) => c.text).join('')}</li>;
      default:
        return null;
    }
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.root.children.map(renderNode)}
    </div>
  );
};
