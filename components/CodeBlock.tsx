"use client";

import React, { useState } from 'react';

type Props = {
  children: any;
};

export default function CodeBlock({ children }: Props) {
  // MDX biasanya membungkus kode sebagai: <pre><code className="language-...">...</code></pre>
  const codeChild = Array.isArray(children) ? children[0] : children;
  const codeString = (codeChild && codeChild.props && codeChild.props.children) || '';
  const className = (codeChild && codeChild.props && codeChild.props.className) || '';
  const language = className.replace(/language-/, '') || '';

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="relative my-6">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="text-xs bg-white/80 dark:bg-slate-800/80 backdrop-blur px-2 py-1 rounded-md border hover:brightness-95"
          aria-label="Copy code"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <pre className="rounded-md overflow-auto p-4 bg-slate-900 text-slate-100 text-sm" data-language={language}>
        <code className={className}>{codeString}</code>
      </pre>
    </div>
  );
}
