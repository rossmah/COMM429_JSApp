/* 
Categories: 
- Fantasy (7)
- Contemporary (10)
- Classics (7)
- Romance (6)
*/
const data = [
    {//0
      "text": "You could rattle the stars. You could do anything, if you only dared. And deep down, you know it too, and that's what scares you the most.",
      "author": "Sarah J. Maas",
      "title": "Throne of Glass",
      "series": "Throne of Glass", 
      "link": "https://www.goodreads.com/book/show/76703559-throne-of-glass?from_search=true&from_srp=true&qid=YPMzKsfFj4&rank=1",
      "genre": "Fantasy",
      "cover": "./img/throneOfGlass.jpeg"
    },
    {//1
        "text": "Because sometimes chance and circumstance can seem like the most appalling injustice, but we just have to adapt. That's all we can do",
        "author": "Gavin Extence",
        "title": "The Universe Versus Alex Woods",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/15984268-the-universe-versus-alex-woods?from_search=true&from_srp=true&qid=cwfmarduGk&rank=1",
        "genre": "Contemporary",
        "cover": "./img/alexWoods.jpeg"
      },{//2
        "text": "I can't seem to be a pessimist long enough to overlook the possibility of things being overwhelmingly good.",
        "author": "John Corey Whaley",
        "title": "Where Things Come Back",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/8563789-where-things-come-back?from_search=true&from_srp=true&qid=SpnLRrX2zA&rank=1",
        "genre": "Contemporary",
        "cover": "./img/whereThings.jpeg"
      },{//3
        "text": "Books are my friends, my companions. They make me laugh and cry and find meaning in life.",
        "author": "Christopher Paolini",
        "title": "Eragon",
        "series": "The Inheritance Cycle", 
        "link": "https://www.goodreads.com/book/show/113436.Eragon?from_search=true&from_srp=true&qid=d4FXTD4tXT&rank=1",
        "genre": "Fantasy",
        "cover": "./img/eragon.jpeg"
      },{//4
        "text": "I'm done with those; regrets are an excuse for people who have failed.",
        "author": "Ned Vizzini",
        "title": "It's Kind of a Funny Story",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/248704.It_s_Kind_of_a_Funny_Story?from_search=true&from_srp=true&qid=vgAO6v2d4e&rank=1",
        "genre": "Contemporary",
        "cover": "./img/funnyStory.jpeg"
      },{//5
        "text": "Becoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.",
        "author": "Veronica Roth",
        "title": "Divergent",
        "series": "Divergent", 
        "link": "https://www.goodreads.com/book/show/13335037-divergent?from_search=true&from_srp=true&qid=JSHs6zSB7f&rank=1",
        "genre": "Fantasy",
        "cover": "./img/divergent.jpeg"
      },{//6
        "text": "The moon understands what it means to be human. Uncertain. Alone. Cratered by imperfections.",
        "author": "Tahereh Mafi",
        "title": "Shatter Me",
        "series": "Shatter Me", 
        "link": "https://www.goodreads.com/book/show/10429045-shatter-me?from_search=true&from_srp=true&qid=kCZOgoO6Fc&rank=1",
        "genre": "Fantasy",
        "cover": "./img/shatterMe.jpeg"
      },{//7
        "text": "Eleanor was right. She never looked nice. She looked like art, and art wasn't supposed to look nice; it was supposed to make you feel something.",
        "author": "Rainbow Rowell",
        "title": "Eleanor & Park",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/15745753-eleanor-park?from_search=true&from_srp=true&qid=9u5OhIFTY2&rank=1",
        "genre": "Contemporary",
        "cover": "./img/eleanorAndPark.jpeg"
      },{//8
        "text": "Don't be afraid of death; be afraid of an unlived life. You don't have to live forever, you just have to live.",
        "author": "Natalie Babbit",
        "title": "Tuck Everlasting",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/84981.Tuck_Everlasting?from_search=true&from_srp=true&qid=6MKL0knBGy&rank=1",
        "genre": "Classics",
        "cover": "./img/tuckEverlasting.jpeg"
      },{//9
        "text": "Some walks you have to take alone.",
        "author": "Suzanne Collins",
        "title": "Mockingjay",
        "series": "The Hunger Games", 
        "link": "https://www.goodreads.com/book/show/7260188-mockingjay?from_search=true&from_srp=true&qid=8j1qZ74xOI&rank=1",
        "genre": "Fantasy",
        "cover": "./img/mockingjay.jpeg"
      },{//10
        "text": "That's the thing about pain. It demands to be felt.",
        "author": "John Green",
        "title": "The Fault in Our Stars",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/11870085-the-fault-in-our-stars?from_search=true&from_srp=true&qid=HA6QZmaI6W&rank=1",
        "genre": "Contemporary",
        "cover": "./img/tfios.jpeg"
      },{//11
        "text": "Why would you be given wings if you weren't meant to fly?",
        "author": "Leslye Walton",
        "title": "The Strange and Beautiful Sorrows of Ava Lavender",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/18166936-the-strange-and-beautiful-sorrows-of-ava-lavender?from_search=true&from_srp=true&qid=p07KtlgZvF&rank=1",
        "genre": "Romance",
        "cover": "./img/avaLavender.jpeg"
      },{//12
        "text": "It's just that…I just think that some things are meant to be broken. Imperfect. Chaotic. It's the universe's way of providing contrast, you know? There have to be a few holes in the road. It's how life is.",
        "author": "Sarah Dessen",
        "title": "The Truth About Forever",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/51737.The_Truth_About_Forever?from_search=true&from_srp=true&qid=ADwzLRuhzn&rank=1",
        "genre": "Romance",
        "cover": "./img/theTruthAboutForever.jpeg"
      },{//13
        "text": "The universe is bigger than anything that can fit into your mind.",
        "author": "Ava Dellaira",
        "title": "Love Letters to the Dead",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/18140047-love-letters-to-the-dead?from_search=true&from_srp=true&qid=VY1XOIBEAn&rank=1",
        "genre": "Contemporary",
        "cover": "./img/lettersDead.jpeg"
      },{//14
        "text": "And I wonder if anyone is really happy. I hope they are. I really hope they are.",
        "author": "Stephen Chbosky",
        "title": "The Perks of Being a Wallflower",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/22628.The_Perks_of_Being_a_Wallflower?from_search=true&from_srp=true&qid=7URC19v5tI&rank=1",
        "genre": "Classics",
        "cover": "./img/perks.jpeg"
      },{//15
        "text": "Things were rough all over but it was better that way. That way, you could tell the other guy was human too.",
        "author": "S.E. Hinton",
        "title": "The Outsiders",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/231804.The_Outsiders?from_search=true&from_srp=true&qid=Tzw2QHeRl6&rank=1",
        "genre": "Classics",
        "cover": "./img/outsiders.jpeg"
      },{//16
        "text": "Life, with its rules, its obligations, and its freedoms, is like a sonnet: You're given the form, but you have to write the sonnet yourself.",
        "author": "Madeleine L'Engle",
        "title": "A Wrinkle In Time",
        "series": "Time Quintet", 
        "link": "https://www.goodreads.com/book/show/33574273-a-wrinkle-in-time?from_search=true&from_srp=true&qid=q7OSXGrhyd&rank=1",
        "genre": "Classics",
        "cover": "./img/wrinkle.jpeg"
      },{//17
        "text": "Maybe who we are isn't so much about what we do, but rather what we're capable of when we least expect it",
        "author": "Jodi Picoult",
        "title": "My Sister's Keeper",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/10917.My_Sister_s_Keeper?from_search=true&from_srp=true&qid=qZxaKyt6mb&rank=1",
        "genre": "Contemporary",
        "cover": "./img/sistersKeeper.jpeg"
      },{//18
        "text": "Goodbye, I say, goodbye, as I disappear little by little into the middle of the middle of my own spectacular now.",
        "author": "Tim Tharp",
        "title": "The Spectacular Now",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/3798703-the-spectacular-now?from_search=true&from_srp=true&qid=NZUZ6St4VD&rank=1",
        "genre": "Romance",
        "cover": "./img/spectacularNow.jpeg"
      },{//19
        "text": "The words were on their way, and when they arrived, she would hold them in her hands like clouds, and she would ring them out like the rain.",
        "author": "Markus Zusak",
        "title": "The Book Thief",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/19063.The_Book_Thief?from_search=true&from_srp=true&qid=zb5kWJy5cb&rank=1",
        "genre": "Classics",
        "cover": "./img/bookThief.jpeg"
      },{//20
        "text": "And now that you don't have to be perfect, you can be good.",
        "author": "John Steinbeck",
        "title": "East of Eden",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/4406.East_of_Eden?from_search=true&from_srp=true&qid=s4ttuzNqCr&rank=1",
        "genre": "Classics",
        "cover": "./img/eastOfEden.jpeg"
      },{//21
        "text": "You spend your whole life stuck in the labyrinth, thinking about how you'll escape it one day, and how awesome it will be, and imagining that future keeps you going, but you never do it. You just use the future to escape the present.",
        "author": "John Green",
        "title": "Looking For Alaska",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/99561.Looking_for_Alaska?from_search=true&from_srp=true&qid=Qg40vDCyQg&rank=1",
        "genre": "Contemporary",
        "cover": "./img/lookingForAlaska.jpeg"
      },{//22
        "text": "There's no shame in fear, my father told me, what matters is how we face it.",
        "author": "George R.R. Martin",
        "title": "A Clash of Kings",
        "series": "A Song of Ice and Fire", 
        "link": "https://www.goodreads.com/book/show/10572.A_Clash_of_Kings?from_search=true&from_srp=true&qid=CU60yKOlfx&rank=1",
        "genre": "Fantasy",
        "cover": "./img/clashOfKings.jpeg"
      },{//23
        "text": "I know that the whole point—the only point—is to find the things that matter, and hold on to them, and fight for them, and refuse to let them go.",
        "author": "Lauren Oliver",
        "title": "Delirium",
        "series": "Delirium", 
        "link": "https://www.goodreads.com/book/show/11614718-delirium?from_search=true&from_srp=true&qid=3zdtsJzlMB&rank=1",
        "genre": "Fantasy",
        "cover": "./img/delirium.jpeg"
      },{//24
        "text": "It's a lot easier to be lost than found. It's the reason we're always searching and rarely discovered--so many locks not enough keys.",
        "author": "Sarah Dessen",
        "title": "Lock and Key",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/1295102.Lock_and_Key?from_search=true&from_srp=true&qid=cbl6jvR6JK&rank=1",
        "genre": "Romance",
        "cover": "./img/lockAndKey.jpeg"
      },{//25
        "text": "The sky is everywhere, it begins at your feet.",
        "author": "Jandy Nelson",
        "title": "The Sky Is Everywhere",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/6604794-the-sky-is-everywhere?from_search=true&from_srp=true&qid=aaWcs00sy9&rank=1",
        "genre": "Romance",
        "cover": "./img/skyEverywhere.jpeg"
      },{//26
        "text": "Sometimes it seems like everyone knows who I am except me.",
        "author": "Becky Albertalli",
        "title": "Simon vs. the Homo Sapiens Agenda",
        "series": "Creekwood", 
        "link": "https://www.goodreads.com/book/show/19547856-simon-vs-the-homo-sapiens-agenda?from_search=true&from_srp=true&qid=RsWcTR2SKg&rank=1",
        "genre": "Romance",
        "cover": "./img/simon.jpeg"
      },{//27
        "text": "When people don’t express themselves, they die one piece at a time.",
        "author": "Laurie Halse Anderson",
        "title": "Speak",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/39280444-speak?from_search=true&from_srp=true&qid=q9N5pw9l1u&rank=1",
        "genre": "Contemporary",
        "cover": "./img/speak.jpeg"
      },{//28
        "text": "Always be a little kinder than you have to.",
        "author": "E. Lockhart",
        "title": "We Were Liars",
        "series": "We Were Liars", 
        "link": "https://www.goodreads.com/book/show/16143347-we-were-liars?from_search=true&from_srp=true&qid=sJTdQHQkbZ&rank=1",
        "genre": "Contemporary",
        "cover": "./img/weWereLiars.jpeg"
      },{//29
        "text": "We accept the love we think we deserve.",
        "author": "Stephen Chbosky",
        "title": "The Perks of Being a Wallflower",
        "series": "", 
        "link": "https://www.goodreads.com/book/show/22628.The_Perks_of_Being_a_Wallflower?from_search=true&from_srp=true&qid=drfw4preRF&rank=1",
        "genre": "Classics",
        "cover": "./img/perks.jpeg"
      },

]