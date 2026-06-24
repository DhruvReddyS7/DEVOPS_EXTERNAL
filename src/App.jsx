import { Search, TerminalSquare, Wrench } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import CodeBlock from "./components/CodeBlock.jsx";
import ProgramCard from "./components/ProgramCard.jsx";
import { installations } from "./data/installations.js";
import { programs } from "./data/programs.js";

const topics = ["All", "Docker", "Jenkins", "Kubernetes", "Selenium"];

function InstallationCommands() {
  const [active, setActive] = useState(installations[0].name);
  const selected = installations.find((item) => item.name === active) ?? installations[0];
  const installText = `${selected.check}\n\n${selected.install}\n\n${selected.verify}`;

  return (
    <section id="install" className="install-screen">
      <div className="install-layout">
        <aside className="install-menu">
          <div className="panel-title">Installation</div>
          {installations.map((item) => (
            <button key={item.name} className={active === item.name ? "active" : ""} onClick={() => setActive(item.name)}>
              {item.name}
            </button>
          ))}
        </aside>
        <div className="install-output">
          <div className="answer-title">
            <div>
              <span>Tool Setup</span>
              <h2>{selected.name}</h2>
            </div>
            <Wrench size={24} />
          </div>
          <CodeBlock label="Check + Install + Verify" language="bash" code={installText} />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");
  const [view, setView] = useState("sets");
  const [selectedId, setSelectedId] = useState(1);

  const filtered = useMemo(() => {
    const value = search.trim().toLowerCase();
    return programs.filter((program) => {
      const topicMatch = topic === "All" || program.topics.includes(topic) || program.title.includes(topic);
      const text = [
        program.title,
        program.questions.join(" "),
        program.topics.join(" "),
        program.q4?.aim,
        program.q5?.aim
      ].join(" ").toLowerCase();
      return topicMatch && (!value || text.includes(value));
    });
  }, [search, topic]);

  useEffect(() => {
    if (filtered.length > 0 && !filtered.some((program) => program.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  const selectedProgram = filtered.find((program) => program.id === selectedId) ?? filtered[0] ?? programs[0];

  return (
    <div className="app-shell">
      <header className="exam-topbar">
        <button className="brand-btn" onClick={() => setView("sets")}>
          <TerminalSquare size={20} />
          <span>devops-lab:~$</span>
        </button>
        <label className="exam-search">
          <Search size={18} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="grep set docker jenkins kubernetes selenium"
          />
        </label>
        <div className="view-tabs">
          <button className={view === "sets" ? "active" : ""} onClick={() => setView("sets")}>sets</button>
          <button className={view === "install" ? "active" : ""} onClick={() => setView("install")}>install</button>
        </div>
      </header>

      <main id="top" className="exam-main">
        {view === "sets" ? (
          <div className="workbench">
            <aside className="set-panel">
              <div className="panel-title">/sets</div>
              <div className="topic-tabs">
                {topics.map((item) => (
                  <button key={item} className={topic === item ? "active" : ""} onClick={() => setTopic(item)}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="result-count">{filtered.length}/27 sets</div>
              <div className="set-list">
                {filtered.map((program) => (
                  <button
                    key={program.id}
                    className={program.id === selectedProgram.id ? "active" : ""}
                    onClick={() => setSelectedId(program.id)}
                  >
                    <b>Set {program.id}</b>
                    <span>{program.title.replace(`Set ${program.id}: `, "")}</span>
                  </button>
                ))}
              </div>
            </aside>

            <section className="answer-panel">
              {filtered.length === 0 ? (
                <div className="empty-state">No sets found. Try Docker, Jenkins, Kubernetes, Selenium, or a set number.</div>
              ) : (
                <ProgramCard key={selectedProgram.id} program={selectedProgram} />
              )}
            </section>
          </div>
        ) : (
          <InstallationCommands />
        )}
      </main>
    </div>
  );
}
