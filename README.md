# 313Space (React + Vite)

A Detroit MySpace. Profiles for the city's people, places, and things, each with a Top 8, a song, a mood, and a comment wall. Visitors can also create their own page.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/ (drag to Netlify Drop, or push to GitHub Pages)
```

## Project layout
```
src/
  data.js                    <- PROFILES + THEMES (Person B lives here)
  App.jsx                    <- hash routing, sidebar, custom profiles
  components/Profile.jsx     <- profile page (Top 8 editor, comments, themes)
  components/CreateProfile.jsx <- "make your own page" form
  useLocalStorage.js         <- tiny persistence hook
  style.css / extra.css      <- themes are CSS variables (.theme-*)
```

Routes: `#<profile-id>` shows a profile, `#create` shows the create form.
Everything user-made (comments, friends, Top 8 edits, new profiles) saves to `localStorage`.

## 2-hour split

**Person A: code/UX**
- [ ] 0:00 `npm install && npm run dev`, confirm profiles render
- [x] Editable Top 8 (done: "Edit Top 8" button)
- [x] "Create your own profile" form (done: `#create`)
- [ ] 0:30 Polish: tiled backgrounds, more themes, hit counter flair
- [ ] 1:00 Autoplay song embed, drag-to-reorder Top 8
- [ ] 1:30 Mobile pass + bug fixes

**Person B: content/demo**
- [ ] 0:00 Fill in `src/data.js` with 12-20 profiles (venues, neighborhoods, bands, food, defunct spots)
- [ ] 0:40 Real song embeds (set `song.youtube`)
- [ ] 1:10 Era-accurate 2006 comments on every profile
- [ ] 1:30 Write the pitch + rehearse the demo
- [ ] 1:45 `npm run build` and deploy `dist/`

## Demo flow (90 seconds)
1. Land on Spirit of Detroit (everyone's first friend).
2. Click into the Top 8, then jump to the Coney rivalry.
3. Switch themes live, edit a Top 8.
4. Create a profile for a team member (`#create`).
5. Leave a comment and show it saved.

## Stretch goals
- AI-generated wall comments in 2006 speak
- "Who viewed your profile"
- Share-a-profile link
