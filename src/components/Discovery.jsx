import { useMemo, useState } from "react";

const TAGS = {
  spirit: ["history", "downtown", "sports", "culture", "city", "landmarks", "photography"],
  lafayette: ["food", "cheap food", "late night", "coney", "hot dogs", "local food", "restaurants"],
  american: ["food", "cheap food", "late night", "coney", "hot dogs", "local food", "restaurants"],
  belleisle: ["nature", "outdoors", "parks", "biking", "walking", "sunsets", "relax", "photography"],
  packard: ["art", "street art", "graffiti", "photography", "architecture", "history", "urban exploration", "emo"],
  easternmarket: ["food", "produce", "art", "murals", "shopping", "community", "markets", "local food", "plants"],
  faygo: ["music", "pop culture", "nostalgia", "local brands", "detroit culture"],
  mcs: ["music", "techno", "architecture", "history", "transportation", "downtown", "culture"]
};

export default function Discovery({ all }) {
  const [interests, setInterests] = useState("techno, street art, and cheap local food");
  const [searched, setSearched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [aiNotes, setAiNotes] = useState("");

  const results = useMemo(() => {
    const terms = interests.toLowerCase().split(/[^a-z0-9]+/).filter((x) => x.length > 2);
    return all.map((p) => {
      const haystack = [p.name, p.type, p.location, p.mood, p.tagline, p.about, ...(TAGS[p.id] || [])].join(" ").toLowerCase();
      const matches = terms.filter((term) => haystack.includes(term));
      return { ...p, score: matches.length, matched: matches };
    }).filter((p) => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 4);
  }, [all, interests]);

  const prompt = `You are a Detroit culture guide helping people discover local culture through 313Space, a nostalgic MySpace-inspired Detroit community prototype. Based on this visitor's interests: "${interests.trim()}", suggest 3-5 Detroit places, cultural scenes, or community resources. Prioritize relevant, real Detroit connections; explain why each fits; clearly flag anything that needs fact-checking; do not invent opening hours, prices, or events. Connect your suggestions to these 313Space profiles when relevant: ${all.map((p) => `${p.name} (${p.type}, ${p.location})`).join("; ")}. Keep the answer friendly, concise, and useful for a newcomer.`;

  async function copyPrompt() {
    // Open synchronously from the click so popup blockers are less likely to stop it.
    window.open("https://chatgpt.com/", "_blank", "noopener,noreferrer");
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setAiNotes("");
    } catch {
      setAiNotes(prompt);
      setCopied(false);
    }
  }

  return (
    <main id="profile" className="theme-classic discovery-page">
      <div className="discovery-kicker">✦ MOTOR CITY MEETS MYSPACE ✦</div>
      <h1>Detroit Discovery</h1>
      <p className="discovery-intro">Find your corner of the D. Tell us what you're into and explore Detroit profiles that match your vibe.</p>
      <form className="discovery-form" onSubmit={(e) => { e.preventDefault(); setSearched(true); }}>
        <label htmlFor="discovery-interests">What are you into?</label>
        <textarea id="discovery-interests" rows="3" value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g. techno, murals, cheap eats, parks..." required />
        <button type="submit">✨ Find My Detroit</button>
      </form>
      <div className="discovery-note"><strong>Prototype mode:</strong> the profile matches below use local keyword matching, not a live AI model. Use the ChatGPT handoff to get an actual AI-generated set of ideas.</div>
      {searched && <section className="discovery-results">
        <h2>Your Detroit matches</h2>
        {results.length ? results.map((p) => <article className="discovery-result" key={p.id}>
          <div className="discovery-avatar">{p.avatar}</div>
          <div><h3><a href={`#${p.id}`}>{p.name}</a></h3><div className="p-meta">{p.type} · {p.location}</div><p>{p.tagline}</p><small>Matched interests: {p.matched.join(", ")}</small></div>
        </article>) : <p>No direct profile matches yet. Try “food, art, music, parks, history, or techno.”</p>}
      </section>}
      <section className="box discovery-ai">
        <h2>🤖 Ask AI for a deeper Detroit guide</h2>
        <p>Copy a prompt tailored to your interests and our Detroit profile list, then paste it into ChatGPT in the new tab. Review suggestions and fact-check local details before relying on them.</p>
        <button type="button" onClick={copyPrompt}> {copied ? "✓ Prompt copied — paste into ChatGPT" : "Copy prompt & open ChatGPT"}</button>
        {aiNotes && <div className="prompt-fallback"><label htmlFor="ai-prompt">Copy this prompt manually, then paste it into ChatGPT:</label><textarea id="ai-prompt" rows="7" value={aiNotes} readOnly onFocus={(e) => e.target.select()} /></div>}
      </section>
      <p className="discovery-footnote">313Space is a community-discovery prototype. Profile matches are suggestions, not endorsements or verified real-time listings.</p>
    </main>
  );
}
