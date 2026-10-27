import { useState } from "react";
import { THEMES } from "../data.js";

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "profile";

export default function CreateProfile({ all, onCreate }) {
  const [f, setF] = useState({
    name: "",
    avatar: "😎",
    type: "Person",
    location: "Detroit, MI",
    mood: "🔥 hyped",
    theme: "classic",
    tagline: "",
    about: "",
    meet: "",
    songTitle: "",
    songArtist: "",
    songYoutube: "",
  });
  const [top8, setTop8] = useState(Array(8).fill(""));

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const setSlot = (i) => (e) => {
    const next = [...top8];
    next[i] = e.target.value;
    setTop8(next);
  };

  const submit = (e) => {
    e.preventDefault();
    // Typed names that match an existing profile become clickable links.
    const resolved = top8
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => all.find((p) => p.name.toLowerCase() === t.toLowerCase())?.id || t);

    onCreate({
      id: slug(f.name) + "-" + Date.now().toString(36),
      name: f.name.trim(),
      type: f.type,
      location: f.location,
      mood: f.mood,
      theme: f.theme,
      tagline: f.tagline,
      avatar: f.avatar || "😎",
      about: f.about,
      meet: f.meet,
      song: { title: f.songTitle || "Add your song here", artist: f.songArtist, youtube: f.songYoutube.trim() },
      top8: resolved,
      comments: [],
    });
  };

  return (
    <main id="profile" className={"theme-" + f.theme}>
      <h1 className="glitter">Create your 313Space page</h1>
      <p className="muted">Pick a theme, write something dramatic, rank your friends. No pressure.</p>

      <form className="create-form" onSubmit={submit}>
        <div className="row">
          <label>Name<input value={f.name} onChange={set("name")} required maxLength={40} placeholder="xXMotorCityXx" /></label>
          <label>Avatar emoji<input value={f.avatar} onChange={set("avatar")} maxLength={4} /></label>
        </div>
        <div className="row">
          <label>Type<input value={f.type} onChange={set("type")} placeholder="Person / Band / Venue..." /></label>
          <label>Location<input value={f.location} onChange={set("location")} /></label>
        </div>
        <div className="row">
          <label>Mood<input value={f.mood} onChange={set("mood")} /></label>
          <label>
            Theme
            <select value={f.theme} onChange={set("theme")}>
              {THEMES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
        </div>
        <label>Tagline<input value={f.tagline} onChange={set("tagline")} maxLength={80} /></label>
        <label>About me<textarea value={f.about} onChange={set("about")} rows={3} /></label>
        <label>Who I'd like to meet<textarea value={f.meet} onChange={set("meet")} rows={2} /></label>

        <div className="row">
          <label>Song title<input value={f.songTitle} onChange={set("songTitle")} /></label>
          <label>Artist<input value={f.songArtist} onChange={set("songArtist")} /></label>
          <label>YouTube ID (optional)<input value={f.songYoutube} onChange={set("songYoutube")} /></label>
        </div>

        <label>
          My Top 8 (type a name, or pick a Detroit profile)
          <div className="t8-inputs">
            {top8.map((v, i) => (
              <input key={i} list="profile-names" value={v} onChange={setSlot(i)} placeholder={`#${i + 1}`} />
            ))}
          </div>
          <datalist id="profile-names">
            {all.map((p) => <option key={p.id} value={p.name} />)}
          </datalist>
        </label>

        <button className="big-btn" type="submit">🚀 Make my page</button>
      </form>
    </main>
  );
}
