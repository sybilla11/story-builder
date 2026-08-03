import type { Story } from "../../../types/story";

const STORY_EASTER: Story = {
  frames: [
    {
      title: "The Great Egg Hunt",
      body: "<p><b>Every hunt begins with a single overturned basket.</b></p><p>It's Easter morning, and the garden is scattered with hidden eggs — except one basket has been knocked clean over, its eggs gone, and a trail of grass bent flat leads off toward the hedge.</p><p>Ready to find out where they went?</p>",
      img: "/img/easter/bunny-forest.png",
      colors: { bg: "#E1C060", text: "#5C4A12" },
      buttons: [{ text: "Begin", linkindex: 1 }],
    },
    {
      title: "THE BENT GRASS",
      body: "<p>The trail splits at the old hedge. One path presses low and straight, like something small and fast crawled through. The other veers upward, into the branches of the apple tree overhead.</p><p><b>Which way do you go?</b></p>",
      colors: { bg: "#F2A6B0", text: "#5C1A26" },
      buttons: [
        { text: "Follow it low", linkindex: 2 },
        { text: "Follow it up", linkindex: 3 },
      ],
    },
    {
      title: "Through the Hedge",
      body: "<p>You get down on your knees and push through the gap in the hedge. On the other side, the grass opens into a small clearing you've never noticed before, ringed with clover and, oddly, warmer than it should be for an early spring morning.</p><p>In the middle sits a single, enormous egg, painted in patterns that shift when you're not looking directly at them.</p><p><b>Do you touch it?</b></p>",
      colors: { bg: "#B7E4C7", text: "#1C4A32" },
      buttons: [
        { text: "Yes", linkindex: 4 },
        { text: "No", linkindex: 5 },
      ],
    },
    {
      title: "Up in the Apple Tree",
      body: "<p>You climb, and the branches seem to arrange themselves helpfully underfoot. Near the top, wedged in a fork of the tree, you find the missing eggs, unbroken, tucked into a nest that is definitely not a bird's.</p><p>Something rustles on the branch just above your head, and doesn't come down.</p><p><b>You decide not to look too closely at what built that nest.</b></p>",
      img: "/img/easter/bunny-basket.png",
      colors: { bg: "#D6F5D6", text: "#1C4A1C" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "A Warm Surprise",
      body: "<p>The moment your hand touches the shell, it splits open on its own, and a soft light spills out along with the smell of fresh mint and sugar. There's no chick inside, no yolk — only a hollow filled edge to edge with tiny chocolate eggs, still slightly warm.</p><p>By the time you carry them back, your basket is fuller than it was before anything went missing.</p>",
      img: "/img/easter/bunny-forest.png",
      colors: { bg: "#F7D9A0", text: "#5C3F0A" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "The Clearing Waits",
      body: "<p>You decide a shifting egg in a clearing that shouldn't exist is not worth touching, and back away carefully. But the clover under your feet has grown thicker while you watched, and a narrow path now leads onward through it that wasn't there a moment ago.</p><p><b>Do you follow the new path?</b></p>",
      colors: { bg: "#EAD1DC", text: "#4A1C36" },
      buttons: [
        { text: "Yes", linkindex: 6 },
        { text: "No", linkindex: 7 },
      ],
    },
    {
      title: "The Rabbit's Table",
      body: "<p>The path opens onto a low table set for breakfast, laid with more painted eggs than you could count, and a chair pulled out as if it's been waiting for you specifically.</p><p>A rabbit considerably larger than any rabbit has a right to be nods at the empty seat. <b>“You found it faster than most,”</b> it says, pouring something warm into a second cup.</p><p><b>You stay for breakfast, and never quite explain to anyone how your basket got so full.</b></p>",
      img: "/img/easter/bunny-basket.png",
      colors: { bg: "#F9E79F", text: "#5C4A0A" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "Back Through the Clover",
      body: "<p>You turn back the way you came, and the clearing folds quietly shut behind you, clover closing over the path like it was never there. Ahead, the garden looks ordinary again — almost.</p><p>A soft thumping sound moves through the grass just out of sight, keeping pace with you.</p><p><b>Do you turn to see what it is?</b></p>",
      colors: { bg: "#C9E4DE", text: "#1C3E3A" },
      buttons: [
        { text: "Yes", linkindex: 8 },
        { text: "No", linkindex: 9 },
      ],
    },
    {
      title: "A Quick Glimpse",
      body: "<p>You spin around just in time to catch a flash of white fur and a basket handle disappearing behind the garden shed — gone before you can be sure you saw it at all.</p><p>When you check the shed, there's nothing there but your neighbor's missing eggs, neatly returned.</p>",
      img: "/img/easter/bunny-forest.png",
      colors: { bg: "#F7D9A0", text: "#5C3F0A" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "Pretending Not to Notice",
      body: "<p>You decide it's easier not to look, and keep walking toward the house instead. The thumping sound follows you all the way to the porch steps, then stops, as though satisfied you made the polite choice.</p><p>On the top step sits one last egg you definitely didn't hide there yourself.</p><p><b>Do you pick it up?</b></p>",
      colors: { bg: "#F2A6B0", text: "#5C1A26" },
      buttons: [
        { text: "Yes", linkindex: 10 },
        { text: "No", linkindex: 11 },
      ],
    },
    {
      title: "The Last Egg",
      body: "<p>It's warm in your hand, and lighter than an egg has any right to be. When you crack it open at breakfast, there's no chocolate and no toy — just a small folded note that reads, <b>“Well spotted. See you next spring.”</b></p><p>You keep the note in your pocket all day and tell absolutely no one about it.</p>",
      img: "/img/easter/bunny-basket.png",
      colors: { bg: "#B7E4C7", text: "#1C4A32" },
      buttons: [{ text: "Start Over", linkindex: 0 }],
    },
    {
      title: "Just an Egg",
      body: "<p>You decide it's just an egg, same as any other, and carry it inside to add to the basket without a second thought. It sits there for the rest of the day, ordinary and unremarkable.</p><p>Only later, alone, do you notice it's still faintly warm.</p><p><b>Happy Easter.</b></p>",
      img: "/img/easter/bunny-forest.png",
      colors: { bg: "#EAD1DC", text: "#4A1C36" },
      buttons: [],
    },
  ],
};

export default STORY_EASTER;
