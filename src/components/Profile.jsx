import { useState } from "react";
import { THEMES } from "../data.js";
import { useLocalStorage } from "../useLocalStorage.js";

function Player({ song }) {
  if (!song || !song.youtube) {
    return (
      <div className="player">
        🎵 Now playing: <b>{song?.title || "nothing"}</b> – {song?.artist || ""}
      </div>
    );
  }
  return (
    <div className="player">
      🎵 Now playing: <b>{song.title}</b> – {song.artist}
      <iframe
        width="100%"
        height="80"
        src={`https://www.youtube.com/embed/${encodeURIComponent(song.youtube)}`}
        allow="autoplay; encrypted-media"
        frameBorder="0"
        title={song.title}
      />
    </div>
  );
}

function Top8({ items, all, editing, onChange }) {
  const byId = (id) => all.find((x) => x.id === id);
  return (
    <div className="top8">
      {items.map((item, i) => {
        const linked = byId(item);
        const label = linked ? linked.name : item;
        const icon = linked ? linked.avatar : "👤";
        const inner = (
          <>
            <div className="t8-avatar">{icon}</div>
            <div className="t8-name">{label}</div>
          </>
        );
        return (
          <div className="t8-item" key={i}>
            <span className="t8-rank">{i + 1}</span>
            {linked && !editing ? <a href={"#" + linked.id}>{inner}</a> : inner}
            {editing && (
              <div className="t8-edit">
                <select value={item} onChange={(e) => onChange(i, e.target.value)}>
                  {!linked && <option value={item}>{item}</option>}
                  {all.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Profile({ profile: p, all }) {
  const [theme, setTheme] = useState(p.theme);

  // Profile views: random starting number, +1 per visit (persisted)
  const [views] = useState(() => {
    let v = null;
    try { v = JSON.parse(localStorage.getItem("views:" + p.id)); } catch {}
    v = (v ?? 1000 + Math.floor(Math.random() * 9000)) + 1;
    try { localStorage.setItem("views:" + p.id, JSON.stringify(v)); } catch {}
    return v;
  });

  const [friends, setFriends] = useLocalStorage("friends", []);
  const isFriend = friends.includes(p.id);

  const [top8, setTop8] = useLocalStorage("top8:" + p.id, p.top8);
  const [editing, setEditing] = useState(false);

  const [myComments, setMyComments] = useLocalStorage("comments:" + p.id, []);
  const allComments = [...myComments, ...p.comments];
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addFriend = () => {
    if (!isFriend) setFriends([...friends, p.id]);
  };

  const changeTop8 = (i, value) => {
    const next = [...top8];
    next[i] = value;
    setTop8(next);
  };

  const submitComment = (e) => {
    e.preventDefault();
    setMyComments([
      { from: name.trim(), text: text.trim(), when: new Date().toLocaleDateString() },
      ...myComments,
    ]);
    setName("");
    setText("");
  };

  return (
    <main id="profile" className={"theme-" + theme}>
      <div className="p-header">
        <div className="p-avatar">{p.avatar}</div>
        <div>
          <h1 className="glitter">{p.name}</h1>
          <div className="p-tag">"{p.tagline}"</div>
          <div className="p-meta">{p.type} · {p.location}</div>
          <div className="p-meta">Mood: {p.mood}</div>
          <div className="p-meta">Profile views: <b>{views.toLocaleString()}</b></div>
        </div>
      </div>

      <div className="marquee"><span>★ {p.tagline} ★ thanks for the add!! ★ write on my wall!! ★</span></div>

      <div className="actions">
        <button onClick={addFriend}>{isFriend ? "✔ Friends!" : "➕ Add to Friends"}</button>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} title="Change theme">
          {THEMES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <Player song={p.song} />

      <div className="grid">
        <section className="box"><h2>About me</h2><p>{p.about}</p></section>
        <section className="box"><h2>Who I'd like to meet</h2><p>{p.meet}</p></section>
      </div>

      <section className="box">
        <h2>{p.name}'s Top 8</h2>
        <Top8 items={top8} all={all.filter((x) => x.id !== p.id)} editing={editing} onChange={changeTop8} />
        <div className="t8-tools">
          <button onClick={() => setEditing(!editing)}>{editing ? "✔ Done" : "✏️ Edit Top 8"}</button>
          {editing && <button onClick={() => setTop8(p.top8)}>Reset</button>}
        </div>
      </section>

      <section className="box">
        <h2>Comments</h2>
        <div id="comments">
          {allComments.length === 0 && <p className="muted">No comments yet. Be the first!</p>}
          {allComments.map((c, i) => (
            <div className="comment" key={i}>
              <div className="c-from">{c.from}</div>
              <div className="c-text">{c.text}</div>
              <div className="c-when">{c.when}</div>
            </div>
          ))}
        </div>
        <form id="comment-form" onSubmit={submitComment}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your screen name" maxLength={30} required />
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Leave a comment (glitter text not included)" maxLength={240} required />
          <button type="submit">Post Comment</button>
        </form>
      </section>
    </main>
  );
}
