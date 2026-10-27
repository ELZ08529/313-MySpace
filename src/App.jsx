import { useState, useEffect } from "react";
import { PROFILES } from "./data.js";
import Profile from "./components/Profile.jsx";
import CreateProfile from "./components/CreateProfile.jsx";
import { useLocalStorage } from "./useLocalStorage.js";

const getHash = () => window.location.hash.slice(1);

export default function App() {
  const [hash, setHash] = useState(getHash());
  const [custom, setCustom] = useLocalStorage("custom-profiles", []);

  useEffect(() => {
    const onHash = () => {
      setHash(getHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const all = [...PROFILES, ...custom];
  const current = all.find((p) => p.id === hash) || all[0];

  const goRandom = (e) => {
    e.preventDefault();
    window.location.hash = all[Math.floor(Math.random() * all.length)].id;
  };

  const handleCreate = (profile) => {
    setCustom([...custom, profile]);
    window.location.hash = profile.id;
  };

  return (
    <>
      <header className="topbar">
        <div className="logo">313<span>Space</span></div>
        <div className="tagline">a place for friends... in the D</div>
        <nav>
          <a href={"#" + all[0].id}>Home</a>
          <a href="#random" onClick={goRandom}>Random Profile</a>
          <a href="#create">Create Profile</a>
        </nav>
      </header>

      <div className="layout">
        <aside id="sidebar">
          <h3>Browse the D</h3>
          <ul>
            {all.map((p) => (
              <li key={p.id}>
                <a href={"#" + p.id}>{p.avatar} {p.name}</a>
              </li>
            ))}
          </ul>
          <a className="sidebar-cta" href="#create">✨ Make your own page</a>
        </aside>

        {hash === "create" ? (
          <CreateProfile all={all} onCreate={handleCreate} />
        ) : (
          <Profile key={current.id} profile={current} all={all} />
        )}
      </div>

      <footer>© 2006 313Space. Not affiliated with anyone's mom. Best viewed in Internet Explorer 6.</footer>
    </>
  );
}
