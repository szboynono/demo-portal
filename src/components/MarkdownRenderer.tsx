import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Markdown.css';

interface MarkdownRendererProps {
  markdownContent: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownContent }) => {
  return (
    <div className='markdown-body'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;