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
      <div className="brief-grid">
        <div className="mini-info">
          <b>Aim</b>
          <span>{practical.aim}</span>
        </div>
        <div className="mini-info">
          <b>Files</b>
          <span>{practical.files.join(", ")}</span>
        </div>
      </div>
      <div className="steps-panel">
        <h3>Execution Steps</h3>
        <ol>
          {executionSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
      {practical.blocks.map((item) => <CodeBlock key={item.label} {...item} />)}
      {practical.commandBlocks.map((item) => <CodeBlock key={item.label} {...item} />)}
      <div className="mini-info">
        <b>Expected Output</b>
        <span>{practical.expected}</span>
      </div>
    </div>
  );
}

export default function ProgramCard({ program }) {
  const tabs = ["questions", "git", "docker", "kubernetes", "q4", ...(program.q5 ? ["q5"] : [])];
  const [active, setActive] = useState("questions");

  const renderCommands = (title, items) => (
    <CodeBlock
      label={title}
      language="bash"
      code={items.map((item, index) => `${index + 1}. ${item.command}\n# ${item.usage}\n${item.example}`).join("\n\n")}
    />
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
