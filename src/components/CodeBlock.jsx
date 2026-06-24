import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ label, code, language = "text" }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span>{label}</span>
        <span className="language">{language}</span>
        <button className="icon-btn" onClick={copy} title={`Copy ${label}`}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
