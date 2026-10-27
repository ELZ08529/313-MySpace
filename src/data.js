// Add profiles here. This is the main thing teammate B fills in.
// theme: classic | emo | techno | motown | coney
// top8: array of profile ids (clickable) or plain strings (not clickable)
// song.youtube: YouTube video id for the autoplay embed (leave "" to hide player)

export const PROFILES = [
  {
    id: "spirit",
    name: "Spirit of Detroit",
    type: "Statue",
    location: "Downtown, Detroit",
    mood: "🗿 dramatic",
    theme: "classic",
    tagline: "Hold my family. Hold my torch. Hold my whole city.",
    avatar: "🗿",
    about: "Big bronze guy. Been here forever. I'm everyone's first friend. Yes, I'm also holding a family. No, it's not heavy. Enjoys: standing, being photographed, sports jerseys.",
    meet: "Anyone who wants to hang out downtown. Bring a jersey.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["lafayette", "american", "belleisle", "packard", "easternmarket", "faygo", "mcs", "Hot Dog Guy"],
    comments: [
      { from: "xXCorktownKidXx", text: "omg u r my #1!!! add me back plz 💀", when: "Oct 12, 2006" },
      { from: "~*MotorCityAngel*~", text: "nice jersey!! rawr", when: "Sep 30, 2006" }
    ]
  },
  {
    id: "lafayette",
    name: "Lafayette Coney Island",
    type: "Restaurant",
    location: "Lafayette Blvd",
    mood: "🌭 hungry",
    theme: "coney",
    tagline: "Chili. Onions. Mustard. Drama.",
    avatar: "🌭",
    about: "Coney dog. Loose-meat chili. Yelling in the best way. We are NOT beefing with the place next door. (We are beefing with the place next door.)",
    meet: "People who know what 'one with everything' means.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["spirit", "american", "faygo", "Napkins", "Late-Night Crowd", "Extra Onions", "Mustard", "Chili"],
    comments: [
      { from: "xXCorktownKidXx", text: "best coney in the D, fight me", when: "Oct 20, 2006" }
    ]
  },
  {
    id: "american",
    name: "American Coney Island",
    type: "Restaurant",
    location: "Lafayette Blvd",
    mood: "😤 competitive",
    theme: "coney",
    tagline: "We were here first. Allegedly.",
    avatar: "🌭",
    about: "Same street, same dogs, different feelings. Ask anybody who is better and watch the argument unfold in real time.",
    meet: "Neutral parties. (There are none.)",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["lafayette", "spirit", "faygo", "Hot Dogs", "Chili", "Onions", "Regulars", "Rivalry"],
    comments: []
  },
  {
    id: "belleisle",
    name: "Belle Isle",
    type: "Island / Park",
    location: "Detroit River",
    mood: "☀️ chill",
    theme: "motown",
    tagline: "an island. in the river. in the city. you're welcome.",
    avatar: "🌴",
    about: "Picnics, bikes, the conservatory, long drives around the loop. Sunsets are free. Skyline views included.",
    meet: "People with frisbees and no plans.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["spirit", "packard", "easternmarket", "Joggers", "Dog Walkers", "Fishing Dads", "Sunsets", "Bridge"],
    comments: []
  },
  {
    id: "packard",
    name: "Packard Plant",
    type: "Ruins",
    location: "East Grand Blvd",
    mood: "🖤 brooding",
    theme: "emo",
    tagline: "nobody understands me except graffiti",
    avatar: "🏚️",
    about: "i was important once. now i'm a vibe. photographers love me. my feelings are made of concrete and cracked windows.",
    meet: "urban explorers, poets, pigeons",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["belleisle", "spirit", "mcs", "Pigeons", "Graffiti", "Photographers", "Echoes", "Rust"],
    comments: [
      { from: "~*MotorCityAngel*~", text: "ur so deep omg", when: "Oct 3, 2006" }
    ]
  },
  {
    id: "easternmarket",
    name: "Eastern Market",
    type: "Market",
    location: "Eastern Market",
    mood: "🥕 busy",
    theme: "motown",
    tagline: "Saturdays are my whole personality",
    avatar: "🥕",
    about: "Produce, flowers, murals, sheds, and strangers carrying way too many tomatoes. Come early. Bring cash. Bring a bag.",
    meet: "Anyone who knows what a good peach looks like.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["belleisle", "spirit", "lafayette", "Flower Stands", "Murals", "Honey", "Peaches", "Saturday Crowd"],
    comments: []
  },
  {
    id: "faygo",
    name: "Faygo Red Pop",
    type: "Beverage",
    location: "your fridge",
    mood: "🥤 fizzy",
    theme: "emo",
    tagline: "red. sweet. loud. detroit.",
    avatar: "🥤",
    about: "Cherry-adjacent, bubbly, and iconic. Goes with everything, including nothing. Enjoys: parties, road trips, being the loudest thing on the table.",
    meet: "Anybody who has ever said 'pop' and meant it.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["lafayette", "american", "spirit", "Rock & Rye", "Vernors", "Ice", "Cups", "Picnics"],
    comments: []
  },
  {
    id: "mcs",
    name: "Michigan Central Station",
    type: "Building",
    location: "Corktown",
    mood: "🚂 nostalgic",
    theme: "techno",
    tagline: "i've seen things. i got windows again.",
    avatar: "🚉",
    about: "Big, tall, dramatic. Went through a rough patch. Now I'm back with new glass and a glow-up. Open to trains, memories, and tourists with cameras.",
    meet: "Anyone who loves a comeback story.",
    song: { title: "Add your song here", artist: "TODO", youtube: "" },
    top8: ["packard", "spirit", "belleisle", "Corktown", "Pigeons", "Photographers", "Trains", "Windows"],
    comments: [
      { from: "xXCorktownKidXx", text: "welcome back!!! looking sharp", when: "Oct 25, 2006" }
    ]
  }
];

export const THEMES = ["classic", "emo", "techno", "motown", "coney"];
