import type { Story } from "../../../types/story";

const STORY_CHRISTMAS: Story = {
  frames: [
    {
      title: "A Christmas Eve Adventure",
      body: "<p><b>The house is quiet, but the clock will not stop ticking.</b></p><p>It is Christmas Eve, and something under the tree is missing — a small, unwrapped box that was there this morning and is gone now. Outside, snow keeps falling, erasing the only tracks that might explain it.</p><p>Are you curious enough to find out where it went?</p>",
      img: "/img/christmas/baubles.jpg",
      colors: { bg: "#146B3A", text: "#8FECB6" },
      buttons: [{ text: "Begin", linkindex: 1 }],
    },
    {
      title: "THE MISSING GIFT",
      body: "<p>You kneel by the tree. In the dust on the floorboards, there are two sets of prints: one small and bare, the other small and booted, both leading toward the hallway.</p><p>One set climbs toward the attic stairs. The other slips out through the kitchen, toward the cold.</p><p><b>Which do you follow?</b></p>",
      colors: { bg: "#BB2528", text: "#F8E9C1" },
      buttons: [
        { text: "Follow it upstairs", linkindex: 2 },
        { text: "Follow it outside", linkindex: 3 },
      ],
    },
    {
      title: "The Dusty Attic",
      body: "<p>The attic stairs creak in a way that makes you feel every year the house has stood. Boxes of ornaments line the walls, and at the far end, a single candle is already lit, though no one else should be home.</p><p>Beside it sits an old wooden sleigh, small enough to fit in your palm, wound round with a ribbon you don't recognize.</p><p><b>Do you pick it up?</b></p>",
      colors: { bg: "#E1C060", text: "#5C4A12" },
      buttons: [
        { text: "Yes", linkindex: 4 },
        { text: "No", linkindex: 5 },
      ],
    },
    {
      title: "A Familiar Face",
      body: "<p>The back door is unlatched, and the cold bites at your ankles as you step into the yard. The bootprints stop dead in the middle of the snow, as if whoever made them simply lifted off the ground.</p><p>You look up. Something red and impossibly fast crosses the moon.</p><p><b>This will make a very strange story to tell in the morning.</b></p>",
      img: "/img/christmas/sleigh-moon.jpg",
      colors: { bg: "#ECF7FB", text: "#1F3A4D" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "A Small Kindness",
      body: "<p>The moment your fingers close around the little sleigh, the candle gutters out, and a voice — warm, amused, unmistakably not yours — says, <b>“Careful with that. It's not finished yet.”</b></p><p>When you turn around, the attic is empty, but a fresh present now sits under the tree downstairs, wrapped better than you ever could manage.</p><p>You decide not to ask questions you don't want the answers to.</p>",
      img: "/img/christmas/lantern.jpg",
      colors: { bg: "#EA4630", text: "#2C0B08" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "The Workshop Door",
      body: "<p>You leave the little sleigh where it lies and back toward the stairs — but the attic has gotten longer than it should be, and at the end of it is a door that was not there before, painted candy-cane red and trimmed in frost.</p><p>Laughter and the clatter of tools drift from the other side.</p><p><b>Do you open it?</b></p>",
      colors: { bg: "#71A6D1", text: "#0F2A44" },
      buttons: [
        { text: "Yes", linkindex: 6 },
        { text: "No", linkindex: 7 },
      ],
    },
    {
      title: "Santa's Workshop",
      body: "<p>The door swings open onto a workshop far too large for any attic — benches of half-built toys stretch farther than the eye can follow, and small, quick hands work at every one of them.</p><p>An elf glances up, entirely unsurprised to see you. <b>“You're just in time to help wrap the last of them.”</b></p><p>You spend what feels like an hour, and is probably closer to a lifetime, tying ribbons by candlelight.</p><p><b>It is, without question, the best Christmas Eve you will ever have.</b></p>",
      img: "/img/christmas/ornament.jpg",
      colors: { bg: "#EA4630", text: "#2C0B08" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "The Long Way Down",
      body: "<p>You decide some doors are better left shut on Christmas Eve, and back away instead. The stairs behind you have multiplied, spiraling down farther than the house should allow, lit by strings of small warm lights that were not lit when you came up.</p><p>At the bottom, you can already smell cocoa.</p><p><b>Do you follow the smell?</b></p>",
      colors: { bg: "#61B65F", text: "#1C3E1A" },
      buttons: [
        { text: "Yes", linkindex: 8 },
        { text: "No", linkindex: 9 },
      ],
    },
    {
      title: "Cocoa and Quiet",
      body: "<p>The kitchen is warm and smells of cinnamon. A single mug waits on the counter, steam curling off the top, though no one else is awake in the house.</p><p>You drink it slowly, and by the time it's finished, you can't quite remember what you were looking for in the first place — only that the tree, when you check on it, has one more gift beneath it than it should.</p>",
      img: "/img/christmas/lantern.jpg",
      colors: { bg: "#EA4630", text: "#2C0B08" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "The Long Walk Home",
      body: "<p>You decide the smell of cocoa can wait until morning like a reasonable person, and turn back toward your own room instead. The stairs seem shorter going the right way, and by the time you reach the landing, the attic door is just an attic door again.</p><p>You climb into bed, certain you imagined most of it.</p><p>But sleep is slow in coming, and somewhere below, you're almost sure you hear sleigh bells.</p><p><b>Do you get up to look?</b></p>",
      colors: { bg: "#146B3A", text: "#EAF6EC" },
      buttons: [
        { text: "Yes", linkindex: 10 },
        { text: "No", linkindex: 11 },
      ],
    },
    {
      title: "One Glimpse",
      body: "<p>You slip out of bed and creep to the window just in time to see a shape crossing the rooftops against the moon, too far and too fast to be certain of anything at all.</p><p>By the time you blink, it's gone, and the sky is only sky again.</p><p><b>You will spend every Christmas Eve after this one watching that same window, just in case.</b></p>",
      img: "/img/christmas/sleigh-moon.jpg",
      colors: { bg: "#EA4630", text: "#2C0B08" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "The Morning After",
      body: "<p>You decide that some mysteries are better left for morning, and pull the blanket up instead. Whatever you heard fades into the ordinary hum of a house settling in for the night.</p><p>When you wake, the missing gift is back under the tree, wrapped in paper you don't recognize, tagged only: <b>“Thank you for not looking.”</b></p><p><b>Merry Christmas.</b></p>",
      img: "/img/christmas/baubles.jpg",
      colors: { bg: "#F8B229", text: "#5C3F0A" },
      buttons: [],
    },
  ],
};

export default STORY_CHRISTMAS;
