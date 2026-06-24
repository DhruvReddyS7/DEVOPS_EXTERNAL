import { Boxes, Container, FileQuestion, GitBranch, PlayCircle, Server } from "lucide-react";
import { useState } from "react";
import CodeBlock from "./CodeBlock.jsx";

const tabInfo = {
  questions: { label: "Questions", icon: FileQuestion },
  git: { label: "Q1 Git", icon: GitBranch },
  docker: { label: "Q2 Docker", icon: Container },
  kubernetes: { label: "Q3 K8s", icon: Boxes },
  q4: { label: "Q4 Practical", icon: PlayCircle },
  q5: { label: "Q5 Practical", icon: Server }
};

function buildExecutionSteps(practical) {
  const hasFiles = practical.files.some((file) => !file.toLowerCase().includes("no source"));
  const fileList = practical.files.join(", ");
  return [
    "Open Ubuntu terminal and create a fresh folder for this program.",
    hasFiles ? `Create these file(s) exactly with the same names: ${fileList}.` : "No program file is required for this task.",
    hasFiles ? "Copy the source code shown below into the matching file names." : "Copy the command block shown below directly into terminal/Jenkins as required.",
    ...practical.steps,
    "Run the command block in the same order from top to bottom.",
    "Compare the terminal/Jenkins/browser output with the expected output shown at the end."
  ];
}

function Practical({ practical }) {
  if (!practical) return null;
  const executionSteps = buildExecutionSteps(practical);
  return (
    <div className="answer-flow">
      <div className="practical-summary">
        <div className="aim-card">
          <span className="summary-label">Aim</span>
          <p>{practical.aim}</p>
        </div>
        <div className="files-card">
          <span className="summary-label">Files Required</span>
          <div className="file-chips">
            {practical.files.map((file) => <code key={file}>{file}</code>)}
          </div>
        </div>
      </div>

      <details className="steps-panel" open>
        <summary>
          <span>Execution Steps</span>
          <small>{executionSteps.length} steps</small>
        </summary>
        <ol>
          {executionSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </details>

      {practical.blocks.length > 0 && (
        <section className="practical-section">
          <h3>Source Files</h3>
          <div className="answer-flow">
            {practical.blocks.map((item) => <CodeBlock key={item.label} {...item} />)}
          </div>
        </section>
      )}

      <section className="practical-section">
        <h3>Run Commands</h3>
        <div className="answer-flow">
          {practical.commandBlocks.map((item) => <CodeBlock key={item.label} {...item} />)}
        </div>
      </section>

      <div className="output-card">
        <span className="summary-label">Expected Output</span>
        <p>{practical.expected}</p>
      </div>
    </div>
  );
}

export default function ProgramCard({ program }) {
  const tabs = ["questions", "git", "docker", "kubernetes", "q4", ...(program.q5 ? ["q5"] : [])];
  const [active, setActive] = useState("questions");
  const ActiveIcon = tabInfo[active].icon;

  const renderCommands = (title, items) => (
    <div className="command-table-wrap">
      <div className="table-title">{title}</div>
      <table className="command-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Command</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.command}>
              <td>{index + 1}</td>
              <td><code>{item.command}</code></td>
              <td>{item.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <article id={`set-${program.id}`} className="program-card">
      <div className="terminal-path">
        <span><i className="live-dot" />~/devops-lab/set-{String(program.id).padStart(2, "0")}</span>
        <span>{program.q5 ? "Q1-Q5" : "Q1-Q4"}</span>
      </div>
      <div className="program-head">
        <div className="set-tile">Set {program.id}</div>
        <div>
          <h2>{program.title.replace(`Set ${program.id}: `, "")}</h2>
          <div className="program-meta">
            {program.topics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map((tab) => {
          const Icon = tabInfo[tab].icon;
          return (
            <button key={tab} className={active === tab ? "active" : ""} onClick={() => setActive(tab)}>
              <Icon className="tab-icon" size={16} />
              <span>{tabInfo[tab].label}</span>
            </button>
          );
        })}
      </div>

      <div className="content-heading">
        <div>
          <span className="section-kicker">active section</span>
          <h3><ActiveIcon size={18} /> {tabInfo[active].label}</h3>
        </div>
        <span className="section-chip">{program.title.split(": ")[0]}</span>
      </div>

      <div className="tab-content">
        {active === "questions" && (
          <div className="question-list">
            {program.questions.map((question, index) => (
              <div className="question" key={question}><b>Q{index + 1}</b><span>{question}</span></div>
            ))}
          </div>
        )}
        {active === "git" && renderCommands("Q1 Git Commands", program.git)}
        {active === "docker" && renderCommands("Q2 Docker Commands", program.docker)}
        {active === "kubernetes" && renderCommands("Q3 Kubernetes Commands", program.kubernetes)}
        {active === "q4" && <Practical practical={program.q4} />}
        {active === "q5" && <Practical practical={program.q5} />}
      </div>
    </article>
  );
}
