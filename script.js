// Cozy English Academy - Interactive English Learning Website
// Author: Farangis Rajabova

// Data for all grammar topics and questions
const grammarTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "___ am a student.", options: ["I", "He", "She"], answer: "I" },
            { type: "multiple-choice", question: "___ is my brother.", options: ["I", "He", "We"], answer: "He" },
            { type: "multiple-choice", question: "___ are good friends.", options: ["She", "He", "We"], answer: "We" },
            { type: "multiple-choice", question: "___ is a doctor.", options: ["She", "We", "They"], answer: "She" },
            { type: "multiple-choice", question: "___ are from London.", options: ["He", "They", "I"], answer: "They" },
            { type: "multiple-choice", question: "___ is a cat.", options: ["It", "They", "We"], answer: "It" },
            { type: "multiple-choice", question: "___ is my teacher.", options: ["She", "They", "It"], answer: "She" },
            { type: "multiple-choice", question: "___ are students.", options: ["He", "She", "They"], answer: "They" },
            { type: "fill-blank", question: "My sister ___ apples every day.", answer: "likes" },
            { type: "fill-blank", question: "Muhammad said ___ is tired after work.", answer: "he" }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "She gave ___ a book.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "I saw ___ yesterday.", options: ["he", "him", "his"], answer: "him" },
            { type: "multiple-choice", question: "Can you help ___?", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "He called ___ last night.", options: ["she", "her", "hers"], answer: "her" },
            { type: "multiple-choice", question: "I don't know ___", options: ["they", "them", "their"], answer: "them" },
            { type: "multiple-choice", question: "The teacher asked ___ a question.", options: ["I", "me", "my"], answer: "me" },
            { type: "multiple-choice", question: "Muhammad told ___ the story.", options: ["we", "us", "our"], answer: "us" },
            { type: "multiple-choice", question: "She likes ___", options: ["he", "him", "his"], answer: "him" },
            { type: "fill-blank", question: "Please give ___ the pen when you finish.", answer: "me" },
            { type: "fill-blank", question: "I will call ___ tomorrow at 5 PM.", answer: "you" }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "This is ___ book.", options: ["I", "my", "me"], answer: "my" },
            { type: "multiple-choice", question: "That is ___ car.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "___ name is Sarah.", options: ["Her", "She", "Hers"], answer: "Her" },
            { type: "multiple-choice", question: "This is ___ house.", options: ["we", "our", "us"], answer: "our" },
            { type: "multiple-choice", question: "___ teacher is very good.", options: ["They", "Their", "Them"], answer: "Their" },
            { type: "multiple-choice", question: "Is this ___ pen?", options: ["you", "your", "yours"], answer: "your" },
            { type: "multiple-choice", question: "Muhammad forgot ___ bag.", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The dog ate ___ food.", options: ["it", "its", "it's"], answer: "its" },
            { type: "fill-blank", question: "I really like ___ new phone.", answer: "my" },
            { type: "fill-blank", question: "She lost ___ keys somewhere in the house.", answer: "her" }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "This book is ___", options: ["my", "mine", "I"], answer: "mine" },
            { type: "multiple-choice", question: "Is this pen ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "multiple-choice", question: "That car is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "The red house is ___", options: ["they", "their", "theirs"], answer: "theirs" },
            { type: "multiple-choice", question: "These shoes are ___", options: ["our", "ours", "us"], answer: "ours" },
            { type: "multiple-choice", question: "The idea was ___", options: ["she", "her", "hers"], answer: "hers" },
            { type: "multiple-choice", question: "Muhammad said the bag is ___", options: ["he", "his", "him"], answer: "his" },
            { type: "multiple-choice", question: "Is this umbrella ___?", options: ["your", "yours", "you"], answer: "yours" },
            { type: "fill-blank", question: "This phone is not yours, it's ___.", answer: "mine" },
            { type: "fill-blank", question: "The victory was not ours, it was ___.", answer: "theirs" }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "I cut ___ while cooking.", options: ["me", "myself", "my"], answer: "myself" },
            { type: "multiple-choice", question: "She bought ___ a new dress.", options: ["her", "herself", "hers"], answer: "herself" },
            { type: "multiple-choice", question: "They enjoyed ___ at the party.", options: ["them", "themselves", "theirs"], answer: "themselves" },
            { type: "multiple-choice", question: "He taught ___ to play guitar.", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "We organized the event ___", options: ["our", "ourselves", "us"], answer: "ourselves" },
            { type: "multiple-choice", question: "The cat cleaned ___", options: ["it", "itself", "its"], answer: "itself" },
            { type: "multiple-choice", question: "Muhammad fixed the car ___", options: ["him", "himself", "his"], answer: "himself" },
            { type: "multiple-choice", question: "You should do it ___", options: ["you", "yourself", "yours"], answer: "yourself" },
            { type: "fill-blank", question: "I made this cake all by ___.", answer: "myself" },
            { type: "fill-blank", question: "She spoke to ___ in the mirror every morning.", answer: "herself" }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "I have ___ apples.", options: ["one", "first", "ones"], answer: "one" },
            { type: "multiple-choice", question: "There are ___ days in a week.", options: ["seven", "seventh", "sevens"], answer: "seven" },
            { type: "multiple-choice", question: "She has ___ brothers.", options: ["two", "second", "twos"], answer: "two" },
            { type: "multiple-choice", question: "Muhammad is ___ years old.", options: ["twenty", "twentieth", "twenties"], answer: "twenty" },
            { type: "multiple-choice", question: "There are ___ students in the class.", options: ["thirty", "thirtieth", "thirty's"], answer: "thirty" },
            { type: "multiple-choice", question: "I need ___ eggs for the recipe.", options: ["three", "third", "threes"], answer: "three" },
            { type: "multiple-choice", question: "The book has ___ pages.", options: ["one hundred", "hundredth", "hundreds"], answer: "one hundred" },
            { type: "multiple-choice", question: "We walked for ___ minutes.", options: ["fifteen", "fifteenth", "fifteens"], answer: "fifteen" },
            { type: "fill-blank", question: "There are exactly ___ months in a year.", answer: "twelve" },
            { type: "fill-blank", question: "I bought ___ oranges from the market.", answer: "five" }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "January is the ___ month.", options: ["one", "first", "ones"], answer: "first" },
            { type: "multiple-choice", question: "My birthday is on the ___ of May.", options: ["five", "fifth", "fives"], answer: "fifth" },
            { type: "multiple-choice", question: "This is my ___ time in London.", options: ["two", "second", "twos"], answer: "second" },
            { type: "multiple-choice", question: "She finished in ___ place.", options: ["three", "third", "threes"], answer: "third" },
            { type: "multiple-choice", question: "Muhammad lives on the ___ floor.", options: ["ten", "tenth", "tenths"], answer: "tenth" },
            { type: "multiple-choice", question: "Today is the ___ of June.", options: ["eight", "eighth", "eighths"], answer: "eighth" },
            { type: "multiple-choice", question: "This is our ___ anniversary.", options: ["four", "fourth", "fourths"], answer: "fourth" },
            { type: "multiple-choice", question: "He came in ___ in the race.", options: ["seven", "seventh", "sevenths"], answer: "seventh" },
            { type: "fill-blank", question: "It's my ___ visit to Paris, and I'm very excited.", answer: "first" },
            { type: "fill-blank", question: "Her office is on the ___ floor of the building.", answer: "third" }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "___ is my book (near me).", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ are my keys (near me).", options: ["This", "That", "These"], answer: "These" },
            { type: "multiple-choice", question: "___ is your bag over there.", options: ["This", "That", "These"], answer: "That" },
            { type: "multiple-choice", question: "___ are my friends over there.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "multiple-choice", question: "Look at ___ beautiful flowers!", options: ["this", "that", "these"], answer: "these" },
            { type: "multiple-choice", question: "___ car is very fast.", options: ["This", "That", "Those"], answer: "That" },
            { type: "multiple-choice", question: "Muhammad said, '___ is my sister.' (pointing nearby)", options: ["This", "That", "These"], answer: "This" },
            { type: "multiple-choice", question: "___ books on the shelf are old.", options: ["This", "That", "Those"], answer: "Those" },
            { type: "fill-blank", question: "___ house right here is where I live.", answer: "This" },
            { type: "fill-blank", question: "Look at ___ mountains far away - they're very high.", answer: "those" }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "He ___ my brother.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "We ___ friends.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "She ___ a doctor.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "They ___ from London.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "It ___ a cat.", options: ["am", "is", "are"], answer: "is" },
            { type: "multiple-choice", question: "You ___ my teacher.", options: ["am", "is", "are"], answer: "are" },
            { type: "multiple-choice", question: "Muhammad ___ a good student.", options: ["am", "is", "are"], answer: "is" },
            { type: "fill-blank", question: "I ___ very happy today.", answer: "am" },
            { type: "fill-blank", question: "They ___ at school right now.", answer: "are" }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "I ___ at home yesterday.", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "They ___ in London last week.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "She ___ tired after work.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "We ___ happy to see you.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "He ___ at the party last night.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "You ___ late for class.", options: ["was", "were", "are"], answer: "were" },
            { type: "multiple-choice", question: "Muhammad ___ sick yesterday.", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "The children ___ excited about the trip.", options: ["was", "were", "are"], answer: "were" },
            { type: "fill-blank", question: "It ___ very cold yesterday.", answer: "was" },
            { type: "fill-blank", question: "We ___ at the cinema last night.", answer: "were" }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "I ___ at home tomorrow.", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "They ___ in Paris next month.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "She ___ a doctor in the future.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "We ___ happy to help you.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "He ___ here soon.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "You ___ surprised by the news.", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Muhammad ___ at the meeting tomorrow.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "The weather ___ nice next week.", options: ["will be", "was", "is"], answer: "will be" },
            { type: "fill-blank", question: "I ___ ready in five minutes.", answer: "will be" },
            { type: "fill-blank", question: "They ___ here at exactly 5 PM.", answer: "will be" }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "I ___ English every day.", options: ["study", "studies", "studying"], answer: "study" },
            { type: "multiple-choice", question: "He ___ to work by bus.", options: ["go", "goes", "going"], answer: "goes" },
            { type: "multiple-choice", question: "We ___ TV in the evening.", options: ["watch", "watches", "watching"], answer: "watch" },
            { type: "multiple-choice", question: "She ___ in an office.", options: ["work", "works", "working"], answer: "works" },
            { type: "multiple-choice", question: "They ___ in London.", options: ["live", "lives", "living"], answer: "live" },
            { type: "multiple-choice", question: "Muhammad ___ coffee every morning.", options: ["drink", "drinks", "drinking"], answer: "drinks" },
            { type: "multiple-choice", question: "I usually ___ at 7 AM.", options: ["wake up", "wakes up", "waking up"], answer: "wake up" },
            { type: "multiple-choice", question: "My parents ___ in a small town.", options: ["live", "lives", "living"], answer: "live" },
            { type: "fill-blank", question: "She always ___ to music while studying.", answer: "listens" },
            { type: "fill-blank", question: "We ___ football every Saturday.", answer: "play" }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "I ___ TV yesterday.", options: ["watch", "watched", "watching"], answer: "watched" },
            { type: "multiple-choice", question: "She ___ her homework last night.", options: ["finish", "finished", "finishing"], answer: "finished" },
            { type: "multiple-choice", question: "We ___ to the park on Sunday.", options: ["walk", "walked", "walking"], answer: "walked" },
            { type: "multiple-choice", question: "He ___ the dishes after dinner.", options: ["wash", "washed", "washing"], answer: "washed" },
            { type: "multiple-choice", question: "They ___ football yesterday.", options: ["play", "played", "playing"], answer: "played" },
            { type: "multiple-choice", question: "Muhammad ___ his room yesterday.", options: ["clean", "cleaned", "cleaning"], answer: "cleaned" },
            { type: "multiple-choice", question: "I ___ my grandmother last week.", options: ["visit", "visited", "visiting"], answer: "visited" },
            { type: "multiple-choice", question: "She ___ to music all evening.", options: ["listen", "listened", "listening"], answer: "listened" },
            { type: "fill-blank", question: "We ___ for the test all night.", answer: "studied" },
            { type: "fill-blank", question: "He ___ his car last weekend.", answer: "washed" }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "I ___ you tomorrow.", options: ["call", "will call", "called"], answer: "will call" },
            { type: "multiple-choice", question: "She ___ to the party next week.", options: ["come", "will come", "came"], answer: "will come" },
            { type: "multiple-choice", question: "We ___ dinner at 7 PM.", options: ["have", "will have", "had"], answer: "will have" },
            { type: "multiple-choice", question: "They ___ their homework tonight.", options: ["do", "will do", "did"], answer: "will do" },
            { type: "multiple-choice", question: "He ___ a new car next year.", options: ["buy", "will buy", "bought"], answer: "will buy" },
            { type: "multiple-choice", question: "Muhammad ___ to London next month.", options: ["travel", "will travel", "traveled"], answer: "will travel" },
            { type: "multiple-choice", question: "I ___ you with your project.", options: ["help", "will help", "helped"], answer: "will help" },
            { type: "multiple-choice", question: "The meeting ___ at 3 PM.", options: ["start", "will start", "started"], answer: "will start" },
            { type: "fill-blank", question: "She ___ the report by tomorrow evening.", answer: "will finish" },
            { type: "fill-blank", question: "We ___ early tomorrow morning.", answer: "will leave" }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "___ a book on the table.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ three chairs in the room.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a cat in the garden.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ many people at the party.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a problem with the computer.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ some milk in the fridge.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "multiple-choice", question: "___ two apples on the plate.", options: ["There is", "There are", "There"], answer: "There are" },
            { type: "multiple-choice", question: "___ a letter for you.", options: ["There is", "There are", "There"], answer: "There is" },
            { type: "fill-blank", question: "___ a pen in my bag if you need one.", answer: "There is" },
            { type: "fill-blank", question: "___ many students in the classroom today.", answer: "There are" }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "___ a party last night.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ many people at the concert.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a big tree in the garden.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ three cats in the house.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a problem with the car.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ some coffee in the cup.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "multiple-choice", question: "___ two books on the table.", options: ["There was", "There were", "There is"], answer: "There were" },
            { type: "multiple-choice", question: "___ a beautiful sunset yesterday.", options: ["There was", "There were", "There is"], answer: "There was" },
            { type: "fill-blank", question: "___ a good film on TV last night.", answer: "There was" },
            { type: "fill-blank", question: "___ many students in the classroom yesterday.", answer: "There were" }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "The book is ___ the table.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The cat is ___ the box.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The ball is ___ the bed.", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "She is standing ___ the door.", options: ["behind", "on", "in"], answer: "behind" },
            { type: "multiple-choice", question: "The school is ___ the hospital.", options: ["next to", "in", "on"], answer: "next to" },
            { type: "multiple-choice", question: "Muhammad is ___ the classroom.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The keys are ___ the drawer.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The picture is ___ the wall.", options: ["on", "in", "at"], answer: "on" },
            { type: "fill-blank", question: "The cat is sleeping ___ the tree.", answer: "under" },
            { type: "fill-blank", question: "He is sitting right ___ me in the classroom.", answer: "next to" }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "I go to work ___ the morning.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "We have class ___ Monday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "The meeting starts ___ 9 o'clock.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "My birthday is ___ July.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "I'll see you ___ Friday.", options: ["in", "on", "at"], answer: "on" },
            { type: "multiple-choice", question: "Muhammad studies ___ the evening.", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "The shop closes ___ 6 PM.", options: ["in", "on", "at"], answer: "at" },
            { type: "multiple-choice", question: "We go on holiday ___ summer.", options: ["in", "on", "at"], answer: "in" },
            { type: "fill-blank", question: "I usually wake up ___ 7 AM every morning.", answer: "at" },
            { type: "fill-blank", question: "She was born ___ 1990 in London.", answer: "in" }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "I ___ swim when I was five.", options: ["can", "could", "am able to"], answer: "could" },
            { type: "multiple-choice", question: "She ___ speak three languages.", options: ["can", "could", "was able to"], answer: "can" },
            { type: "multiple-choice", question: "___ you help me with this?", options: ["Can", "Could", "Are able to"], answer: "Can" },
            { type: "multiple-choice", question: "They ___ come to the party yesterday.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ I borrow your pen?", options: ["Can", "Could", "Am able to"], answer: "Can" },
            { type: "multiple-choice", question: "Muhammad ___ play the piano very well.", options: ["can", "could", "is able to"], answer: "can" },
            { type: "multiple-choice", question: "We ___ finish the project on time.", options: ["can", "could", "were able to"], answer: "were able to" },
            { type: "multiple-choice", question: "___ you open the window, please?", options: ["Can", "Could", "Are able to"], answer: "Could" },
            { type: "fill-blank", question: "I ___ speak French fluently.", answer: "can" },
            { type: "fill-blank", question: "He ___ solve the difficult problem.", answer: "was able to" }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "You ___ wear a seatbelt in the car.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "I ___ go to the bank today.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "multiple-choice", question: "You ___ see that movie, it's great!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "Students ___ do their homework.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "We ___ be quiet in the library.", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Muhammad ___ study for his exam.", options: ["must", "has to", "should"], answer: "has to" },
            { type: "multiple-choice", question: "You ___ try this cake, it's delicious!", options: ["must", "have to", "should"], answer: "should" },
            { type: "multiple-choice", question: "I ___ wake up early tomorrow.", options: ["must", "have to", "should"], answer: "have to" },
            { type: "fill-blank", question: "You ___ drive on the left in the UK.", answer: "must" },
            { type: "fill-blank", question: "We ___ finish this report by today.", answer: "have to" }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "I ___ play football when I was young.", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "She ___ have long hair.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "We ___ live in London.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "He ___ smoke, but he quit last year.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "They ___ go to that school.", options: ["used to", "use to", "are used to"], answer: "used to" },
            { type: "multiple-choice", question: "Muhammad ___ drink coffee, but now he prefers tea.", options: ["used to", "use to", "is used to"], answer: "used to" },
            { type: "multiple-choice", question: "There ___ be a park here.", options: ["used to", "use to", "was used to"], answer: "used to" },
            { type: "multiple-choice", question: "I ___ like vegetables, but now I love them.", options: ["didn't use to", "didn't used to", "wasn't used to"], answer: "didn't use to" },
            { type: "fill-blank", question: "I ___ walk to school when I was a child.", answer: "used to" },
            { type: "fill-blank", question: "She ___ live in Paris before moving to London.", answer: "used to" }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "I ___ buy milk because we already had some.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "She ___ go to the bank because she had enough cash.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "We ___ hurry because the train was late.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "He ___ worry about the test because it was easy.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "They ___ cook because we ordered pizza.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Muhammad ___ study so hard for the easy exam.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "You ___ bring an umbrella because it didn't rain.", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "I ___ call him because he called me first.", options: ["needn't have", "didn't need to", "needn't to"], answer: "didn't need to" },
            { type: "fill-blank", question: "She ___ buy tickets; they were already free.", answer: "needn't have" },
            { type: "fill-blank", question: "We ___ rush; we had plenty of time.", answer: "didn't need to" }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "___ is your name?", options: ["Who", "What", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ do you live?", options: ["Who", "What", "Where"], answer: "Where" },
            { type: "multiple-choice", question: "___ old are you?", options: ["How", "What", "When"], answer: "How" },
            { type: "multiple-choice", question: "___ is your birthday?", options: ["When", "What", "Where"], answer: "When" },
            { type: "multiple-choice", question: "___ is that man?", options: ["Who", "What", "Where"], answer: "Who" },
            { type: "multiple-choice", question: "___ do you study English?", options: ["Why", "What", "When"], answer: "Why" },
            { type: "multiple-choice", question: "___ is your favorite color?", options: ["What", "Who", "Where"], answer: "What" },
            { type: "multiple-choice", question: "___ does Muhammad work?", options: ["Where", "What", "When"], answer: "Where" },
            { type: "fill-blank", question: "___ time does the movie start?", answer: "What" },
            { type: "fill-blank", question: "___ are you going after class?", answer: "Where" }
        ]
    }
];

// Vocabulary data - DIRECTLY LINKED TO GRAMMAR TOPICS - TRANSLATION-BASED
const vocabularyTopics = [
    {
        id: 1,
        title: "Personal Pronouns",
        description: "I, you, he, she, it, we, they",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «я»:", options: ["I", "He", "We"], answer: "I" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «он»:", options: ["He", "She", "They"], answer: "He" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «она»:", options: ["She", "He", "They"], answer: "She" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мы»:", options: ["We", "You", "They"], answer: "We" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «они»:", options: ["They", "We", "You"], answer: "They" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «оно»:", options: ["It", "He", "She"], answer: "It" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты мой друг.»", options: ["You are my friend.", "I am your friend.", "He is my friend."], answer: "You are my friend." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вы студенты.»", options: ["You are students.", "We are students.", "They are students."], answer: "You are students." },
            { type: "fill-blank", question: "Переведите на английский: Он сейчас дома.", answer: "He is at home now." },
            { type: "fill-blank", question: "Переведите на английский: Мы хорошие друзья.", answer: "We are good friends." }
        ]
    },
    {
        id: 2,
        title: "Object Pronouns",
        description: "me, you, him, her, it, us, them",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «меня»:", options: ["me", "my", "I"], answer: "me" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["him", "his", "he"], answer: "him" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "she"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «нас»:", options: ["us", "our", "we"], answer: "us" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["them", "their", "they"], answer: "them" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она видит меня.»", options: ["She sees me.", "She sees you.", "She sees him."], answer: "She sees me." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я помогаю им.»", options: ["I help them.", "I help us.", "I help you."], answer: "I help them." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он звонит тебе.»", options: ["He calls you.", "He calls me.", "He calls her."], answer: "He calls you." },
            { type: "fill-blank", question: "Переведите на английский: Она дала мне книгу.", answer: "She gave me a book." },
            { type: "fill-blank", question: "Переведите на английский: Я видел его вчера.", answer: "I saw him yesterday." }
        ]
    },
    {
        id: 3,
        title: "Possessive Adjectives",
        description: "my, your, his, her, its, our, their",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["my", "your", "our"], answer: "my" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["your", "my", "our"], answer: "your" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "her", "their"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["her", "his", "their"], answer: "her" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["our", "your", "their"], answer: "our" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["their", "our", "your"], answer: "their" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой дом.»", options: ["This is my house.", "This is your house.", "This is his house."], answer: "This is my house." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это их машина.»", options: ["That is their car.", "That is our car.", "That is his car."], answer: "That is their car." },
            { type: "fill-blank", question: "Переведите на английский: Это его книга.", answer: "This is his book." },
            { type: "fill-blank", question: "Переведите на английский: Наш учитель очень добрый.", answer: "Our teacher is very kind." }
        ]
    },
    {
        id: 4,
        title: "Possessive Pronouns",
        description: "mine, yours, his, hers, its, ours, theirs",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «мой»:", options: ["mine", "my", "me"], answer: "mine" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «твой»:", options: ["yours", "your", "you"], answer: "yours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «его»:", options: ["his", "him", "he"], answer: "his" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «её»:", options: ["hers", "her", "she"], answer: "hers" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «наш»:", options: ["ours", "our", "us"], answer: "ours" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «их»:", options: ["theirs", "their", "they"], answer: "theirs" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эта книга моя.»", options: ["This book is mine.", "This book is yours.", "This book is his."], answer: "This book is mine." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти туфли наши.»", options: ["These shoes are ours.", "These shoes are yours.", "These shoes are theirs."], answer: "These shoes are ours." },
            { type: "fill-blank", question: "Переведите на английский: Эта сумка её.", answer: "This bag is hers." },
            { type: "fill-blank", question: "Переведите на английский: Эта победа их.", answer: "This victory is theirs." }
        ]
    },
    {
        id: 5,
        title: "Reflexive Pronouns",
        description: "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам»:", options: ["myself", "yourself", "himself"], answer: "myself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (ты):", options: ["yourself", "myself", "himself"], answer: "yourself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сам» (он):", options: ["himself", "herself", "itself"], answer: "himself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сама»:", options: ["herself", "himself", "itself"], answer: "herself" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сами»:", options: ["themselves", "ourselves", "yourselves"], answer: "themselves" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я сделал это сам.»", options: ["I did it myself.", "I did it for myself.", "I did it alone."], answer: "I did it myself." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она купила себе платье.»", options: ["She bought herself a dress.", "She bought a dress herself.", "She bought a dress for him."], answer: "She bought herself a dress." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они организовали вечеринку сами.»", options: ["They organized the party themselves.", "They organized the party for themselves.", "They organized the party together."], answer: "They organized the party themselves." },
            { type: "fill-blank", question: "Переведите на английский: Я приготовил этот торт сам.", answer: "I made this cake myself." },
            { type: "fill-blank", question: "Переведите на английский: Она разговаривала сама с собой.", answer: "She was talking to herself." }
        ]
    },
    {
        id: 6,
        title: "Cardinal Numbers",
        description: "one, two, three, ten, twenty, hundred",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «один»:", options: ["one", "first", "once"], answer: "one" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «два»:", options: ["two", "second", "twice"], answer: "two" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десять»:", options: ["ten", "tenth", "dozen"], answer: "ten" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «двадцать»:", options: ["twenty", "twentieth", "twelve"], answer: "twenty" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «сто»:", options: ["hundred", "hundredth", "century"], answer: "hundred" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У меня три яблока.»", options: ["I have three apples.", "I have third apple.", "I have thirty apples."], answer: "I have three apples." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В неделе семь дней.»", options: ["There are seven days in a week.", "It's the seventh day of the week.", "There are seventy days in a week."], answer: "There are seven days in a week." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему пятнадцать лет.»", options: ["He is fifteen years old.", "It's his fiftieth year.", "He is fifty years old."], answer: "He is fifteen years old." },
            { type: "fill-blank", question: "Переведите на английский: У меня пять карандашей.", answer: "I have five pencils." },
            { type: "fill-blank", question: "Переведите на английский: В классе тридцать студентов.", answer: "There are thirty students in the class." }
        ]
    },
    {
        id: 7,
        title: "Ordinal Numbers",
        description: "first, second, third, fifth, tenth",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «первый»:", options: ["first", "one", "primary"], answer: "first" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «второй»:", options: ["second", "two", "secondary"], answer: "second" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «третий»:", options: ["third", "three", "triple"], answer: "third" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «пятый»:", options: ["fifth", "five", "fifteen"], answer: "fifth" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «десятый»:", options: ["tenth", "ten", "dozen"], answer: "tenth" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это мой первый визит.»", options: ["This is my first visit.", "This is my one visit.", "This is my main visit."], answer: "This is my first visit." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она живёт на восьмом этаже.»", options: ["She lives on the eighth floor.", "She lives on the eight floor.", "She lives on floor eight."], answer: "She lives on the eighth floor." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Сегодня пятое мая.»", options: ["Today is the fifth of May.", "Today is five May.", "Today is May fifth."], answer: "Today is the fifth of May." },
            { type: "fill-blank", question: "Переведите на английский: Это её третий день в школе.", answer: "This is her third day at school." },
            { type: "fill-blank", question: "Переведите на английский: Мой офис на втором этаже.", answer: "My office is on the second floor." }
        ]
    },
    {
        id: 8,
        title: "Demonstrative Pronouns",
        description: "This, That, These, Those",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «этот»:", options: ["this", "that", "these"], answer: "this" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «тот»:", options: ["that", "this", "it"], answer: "that" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «эти»:", options: ["these", "those", "this"], answer: "these" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «те»:", options: ["those", "these", "that"], answer: "those" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Это моя книга.»", options: ["This is my book.", "That is my book.", "These are my books."], answer: "This is my book." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Та машина быстрая.»", options: ["That car is fast.", "This car is fast.", "Those cars are fast."], answer: "That car is fast." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Эти цветы красивые.»", options: ["These flowers are beautiful.", "Those flowers are beautiful.", "This flower is beautiful."], answer: "These flowers are beautiful." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Те горы высокие.»", options: ["Those mountains are high.", "These mountains are high.", "That mountain is high."], answer: "Those mountains are high." },
            { type: "fill-blank", question: "Переведите на английский: Этот дом мой.", answer: "This house is mine." },
            { type: "fill-blank", question: "Переведите на английский: Те книги интересные.", answer: "Those books are interesting." }
        ]
    },
    {
        id: 9,
        title: "Verb 'To Be' - Present",
        description: "am, is, are",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... студент»:", options: ["am", "is", "are"], answer: "am" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... мой брат»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... друзья»:", options: ["are", "am", "is"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... доктор»:", options: ["is", "am", "are"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... из Лондона»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... кот»:", options: ["is", "are", "am"], answer: "is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... хороший учитель»:", options: ["are", "is", "am"], answer: "are" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... счастлив сегодня»:", options: ["am", "is", "are"], answer: "am" },
            { type: "fill-blank", question: "Переведите на английский: Она сейчас в школе.", answer: "She is at school now." },
            { type: "fill-blank", question: "Переведите на английский: Они счастливы сегодня.", answer: "They are happy today." }
        ]
    },
    {
        id: 10,
        title: "Verb 'To Be' - Past",
        description: "was, were",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома вчера»:", options: ["was", "were", "am"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Лондоне»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... уставшей»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... счастливы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... на вечеринке»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... опоздали»:", options: ["were", "was", "are"], answer: "were" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Оно ... холодно вчера»:", options: ["was", "were", "is"], answer: "was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Дети ... взволнованы»:", options: ["were", "was", "are"], answer: "were" },
            { type: "fill-blank", question: "Переведите на английский: Вчера было холодно.", answer: "It was cold yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Мы были в кино вчера вечером.", answer: "We were at the cinema yesterday evening." }
        ]
    },
    {
        id: 11,
        title: "Verb 'To Be' - Future",
        description: "will be",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... дома завтра»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они ... в Париже»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она ... врачом»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мы ... рады помочь»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он ... здесь скоро»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Вы ... удивлены»:", options: ["will be", "were", "are"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Погода ... хорошей»:", options: ["will be", "was", "is"], answer: "will be" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я ... готов через пять минут»:", options: ["will be", "was", "am"], answer: "will be" },
            { type: "fill-blank", question: "Переведите на английский: Я буду готов через пять минут.", answer: "I will be ready in five minutes." },
            { type: "fill-blank", question: "Переведите на английский: Они будут здесь в 5 часов.", answer: "They will be here at 5 o'clock." }
        ]
    },
    {
        id: 12,
        title: "Present Simple Tense",
        description: "I work, he works, they live, she studies",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я работаю.»", options: ["I work", "I worked", "I will work"], answer: "I work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Он работает.»", options: ["He works", "He worked", "He will work"], answer: "He works" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Они живут.»", options: ["They live", "They lived", "They will live"], answer: "They live" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Она учится.»", options: ["She studies", "She studied", "She will study"], answer: "She studies" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я учу английский каждый день.»", options: ["I study English every day.", "I studied English every day.", "I will study English every day."], answer: "I study English every day." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он ездит на работу на автобусе.»", options: ["He goes to work by bus.", "He went to work by bus.", "He will go to work by bus."], answer: "He goes to work by bus." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы смотрим телевизор вечером.»", options: ["We watch TV in the evening.", "We watched TV in the evening.", "We will watch TV in the evening."], answer: "We watch TV in the evening." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она работает в офисе.»", options: ["She works in an office.", "She worked in an office.", "She will work in an office."], answer: "She works in an office." },
            { type: "fill-blank", question: "Переведите на английский: Он живёт в Лондоне.", answer: "He lives in London." },
            { type: "fill-blank", question: "Переведите на английский: Мы играем в футбол по субботам.", answer: "We play football on Saturdays." }
        ]
    },
    {
        id: 13,
        title: "Past Simple Tense (Regular Verbs)",
        description: "worked, played, cleaned, visited",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «работал»:", options: ["worked", "work", "will work"], answer: "worked" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «играл»:", options: ["played", "play", "will play"], answer: "played" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «убирал»:", options: ["cleaned", "clean", "will clean"], answer: "cleaned" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «посещал»:", options: ["visited", "visit", "will visit"], answer: "visited" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я смотрел телевизор вчера.»", options: ["I watched TV yesterday.", "I watch TV yesterday.", "I will watch TV yesterday."], answer: "I watched TV yesterday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она закончила домашнее задание.»", options: ["She finished her homework.", "She finishes her homework.", "She will finish her homework."], answer: "She finished her homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы ходили в парк.»", options: ["We walked to the park.", "We walk to the park.", "We will walk to the park."], answer: "We walked to the park." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он помыл посуду.»", options: ["He washed the dishes.", "He washes the dishes.", "He will wash the dishes."], answer: "He washed the dishes." },
            { type: "fill-blank", question: "Переведите на английский: Они играли в футбол вчера.", answer: "They played football yesterday." },
            { type: "fill-blank", question: "Переведите на английский: Я посетил бабушку на прошлой неделе.", answer: "I visited my grandmother last week." }
        ]
    },
    {
        id: 14,
        title: "Future Simple Tense (will)",
        description: "will work, will play, will study",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду работать»:", options: ["will work", "work", "worked"], answer: "will work" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду играть»:", options: ["will play", "play", "played"], answer: "will play" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «буду учиться»:", options: ["will study", "study", "studied"], answer: "will study" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я позвоню тебе завтра.»", options: ["I will call you tomorrow.", "I call you tomorrow.", "I called you tomorrow."], answer: "I will call you tomorrow." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Она придёт на вечеринку.»", options: ["She will come to the party.", "She comes to the party.", "She came to the party."], answer: "She will come to the party." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы поужинаем в 7 вечера.»", options: ["We will have dinner at 7 PM.", "We have dinner at 7 PM.", "We had dinner at 7 PM."], answer: "We will have dinner at 7 PM." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они сделают домашнее задание.»", options: ["They will do their homework.", "They do their homework.", "They did their homework."], answer: "They will do their homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он купит новую машину.»", options: ["He will buy a new car.", "He buys a new car.", "He bought a new car."], answer: "He will buy a new car." },
            { type: "fill-blank", question: "Переведите на английский: Она закончит отчёт завтра.", answer: "She will finish the report tomorrow." },
            { type: "fill-blank", question: "Переведите на английский: Мы уедем рано утром.", answer: "We will leave early in the morning." }
        ]
    },
    {
        id: 15,
        title: "There is / There are",
        description: "There is a book, There are books",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для единственного числа):", options: ["There is", "There are", "There was"], answer: "There is" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Есть ...» (для множественного числа):", options: ["There are", "There is", "There were"], answer: "There are" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «На столе есть книга.»", options: ["There is a book on the table.", "There was a book on the table.", "There will be a book on the table."], answer: "There is a book on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть три стула.»", options: ["There are three chairs.", "There were three chairs.", "There will be three chairs."], answer: "There are three chairs." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «В саду есть кот.»", options: ["There is a cat in the garden.", "There was a cat in the garden.", "There will be a cat in the garden."], answer: "There is a cat in the garden." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть много людей.»", options: ["There are many people.", "There were many people.", "There will be many people."], answer: "There are many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть проблема.»", options: ["There is a problem.", "There was a problem.", "There will be a problem."], answer: "There is a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Есть два яблока.»", options: ["There are two apples.", "There were two apples.", "There will be two apples."], answer: "There are two apples." },
            { type: "fill-blank", question: "Переведите на английский: В моей сумке есть ручка.", answer: "There is a pen in my bag." },
            { type: "fill-blank", question: "Переведите на английский: В классе много студентов.", answer: "There are many students in the classroom." }
        ]
    },
    {
        id: 16,
        title: "There was / There were",
        description: "There was a house, There were cars",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Был ...» (единственное число):", options: ["There was", "There is", "There will be"], answer: "There was" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Были ...» (множественное число):", options: ["There were", "There are", "There will be"], answer: "There were" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Вчера вечером была вечеринка.»", options: ["There was a party last night.", "There is a party last night.", "There will be a party last night."], answer: "There was a party last night." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было много людей.»", options: ["There were many people.", "There are many people.", "There will be many people."], answer: "There were many people." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Было большое дерево.»", options: ["There was a big tree.", "There is a big tree.", "There will be a big tree."], answer: "There was a big tree." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были три кошки.»", options: ["There were three cats.", "There are three cats.", "There will be three cats."], answer: "There were three cats." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Была проблема.»", options: ["There was a problem.", "There is a problem.", "There will be a problem."], answer: "There was a problem." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Были две книги.»", options: ["There were two books.", "There are two books.", "There will be two books."], answer: "There were two books." },
            { type: "fill-blank", question: "Переведите на английский: Вчера был хороший фильм по телевизору.", answer: "There was a good film on TV yesterday." },
            { type: "fill-blank", question: "Переведите на английский: В классе вчера было много студентов.", answer: "There were many students in the classroom yesterday." }
        ]
    },
    {
        id: 17,
        title: "Prepositions of Place",
        description: "in, on, under, behind, next to",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «в»:", options: ["in", "on", "under"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «на»:", options: ["on", "in", "under"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «под»:", options: ["under", "on", "in"], answer: "under" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «за»:", options: ["behind", "in front of", "next to"], answer: "behind" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «рядом с»:", options: ["next to", "in front of", "behind"], answer: "next to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Книга на столе.»", options: ["The book is on the table.", "The book is in the table.", "The book is under the table."], answer: "The book is on the table." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Кот в коробке.»", options: ["The cat is in the box.", "The cat is on the box.", "The cat is under the box."], answer: "The cat is in the box." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мяч под кроватью.»", options: ["The ball is under the bed.", "The ball is on the bed.", "The ball is in the bed."], answer: "The ball is under the bed." },
            { type: "fill-blank", question: "Переведите на английский: Кошка спит под деревом.", answer: "The cat is sleeping under the tree." },
            { type: "fill-blank", question: "Переведите на английский: Он сидит рядом со мной.", answer: "He is sitting next to me." }
        ]
    },
    {
        id: 18,
        title: "Prepositions of Time",
        description: "in, on, at, morning, night, Monday",
        questions: [
            { type: "multiple-choice", question: "Выберите правильный предлог для времени: «... утру»:", options: ["in", "on", "at"], answer: "in" },
            { type: "multiple-choice", question: "Выберите правильный предлог для дней недели: «... понедельник»:", options: ["on", "in", "at"], answer: "on" },
            { type: "multiple-choice", question: "Выберите правильный предлог для точного времени: «... 9 часов»:", options: ["at", "in", "on"], answer: "at" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я хожу на работу утром.»", options: ["I go to work in the morning.", "I go to work on the morning.", "I go to work at the morning."], answer: "I go to work in the morning." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У нас занятия в понедельник.»", options: ["We have class on Monday.", "We have class in Monday.", "We have class at Monday."], answer: "We have class on Monday." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Встреча начинается в 9 часов.»", options: ["The meeting starts at 9 o'clock.", "The meeting starts in 9 o'clock.", "The meeting starts on 9 o'clock."], answer: "The meeting starts at 9 o'clock." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мой день рождения в июле.»", options: ["My birthday is in July.", "My birthday is on July.", "My birthday is at July."], answer: "My birthday is in July." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Увидимся в пятницу.»", options: ["I'll see you on Friday.", "I'll see you in Friday.", "I'll see you at Friday."], answer: "I'll see you on Friday." },
            { type: "fill-blank", question: "Переведите на английский: Обычно я просыпаюсь в 7 утра.", answer: "I usually wake up at 7 AM." },
            { type: "fill-blank", question: "Переведите на английский: Она родилась в 1990 году.", answer: "She was born in 1990." }
        ]
    },
    {
        id: 19,
        title: "Modal Verbs: Can / Could / Be able to",
        description: "ability and permission",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я могу ...»:", options: ["can", "could", "will be able to"], answer: "can" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я мог ...»:", options: ["could", "can", "was able to"], answer: "could" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Я смог ...»:", options: ["was able to", "could", "can"], answer: "was able to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умею плавать.»", options: ["I can swim.", "I could swim.", "I will be able to swim."], answer: "I can swim." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я умел плавать, когда мне было пять.»", options: ["I could swim when I was five.", "I can swim when I was five.", "I will be able to swim when I was five."], answer: "I could swim when I was five." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты можешь помочь мне?»", options: ["Can you help me?", "Could you help me?", "Will you be able to help me?"], answer: "Can you help me?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они смогли прийти.»", options: ["They were able to come.", "They can come.", "They could come."], answer: "They were able to come." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Можно я возьму твою ручку?»", options: ["Can I borrow your pen?", "Could I borrow your pen?", "May I borrow your pen?"], answer: "Can I borrow your pen?" },
            { type: "fill-blank", question: "Переведите на английский: Я могу говорить по-французски.", answer: "I can speak French." },
            { type: "fill-blank", question: "Переведите на английский: Он смог решить проблему.", answer: "He was able to solve the problem." }
        ]
    },
    {
        id: 20,
        title: "Modal Verbs: Must / Have to / Should",
        description: "obligation, necessity, advice",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Ты должен ...» (обязательство):", options: ["must", "have to", "should"], answer: "must" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Мне нужно ...»:", options: ["have to", "must", "should"], answer: "have to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «Тебе следует ...»:", options: ["should", "must", "have to"], answer: "should" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ты должен пристегнуться.»", options: ["You must wear a seatbelt.", "You have to wear a seatbelt.", "You should wear a seatbelt."], answer: "You must wear a seatbelt." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне нужно сходить в банк.»", options: ["I have to go to the bank.", "I must go to the bank.", "I should go to the bank."], answer: "I have to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе стоит посмотреть этот фильм.»", options: ["You should see that movie.", "You must see that movie.", "You have to see that movie."], answer: "You should see that movie." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Студенты должны делать домашнее задание.»", options: ["Students must do homework.", "Students have to do homework.", "Students should do homework."], answer: "Students must do homework." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы должны быть тихими.»", options: ["We must be quiet.", "We have to be quiet.", "We should be quiet."], answer: "We must be quiet." },
            { type: "fill-blank", question: "Переведите на английский: Вы должны ехать слева в Великобритании.", answer: "You must drive on the left in the UK." },
            { type: "fill-blank", question: "Переведите на английский: Нам нужно закончить этот отчёт сегодня.", answer: "We have to finish this report today." }
        ]
    },
    {
        id: 21,
        title: "Used to",
        description: "past habits and states",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «раньше ...»:", options: ["used to", "use to", "am used to"], answer: "used to" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Я раньше играл в футбол.»", options: ["I used to play football.", "I use to play football.", "I am used to playing football."], answer: "I used to play football." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «У неё раньше были длинные волосы.»", options: ["She used to have long hair.", "She use to have long hair.", "She is used to having long hair."], answer: "She used to have long hair." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мы раньше жили в Лондоне.»", options: ["We used to live in London.", "We use to live in London.", "We are used to living in London."], answer: "We used to live in London." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Он раньше курил.»", options: ["He used to smoke.", "He use to smoke.", "He is used to smoking."], answer: "He used to smoke." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Они раньше ходили в ту школу.»", options: ["They used to go to that school.", "They use to go to that school.", "They are used to going to that school."], answer: "They used to go to that school." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше здесь был парк.»", options: ["There used to be a park here.", "There use to be a park here.", "There is used to being a park here."], answer: "There used to be a park here." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Раньше мне не нравились овощи.»", options: ["I didn't use to like vegetables.", "I didn't used to like vegetables.", "I wasn't used to liking vegetables."], answer: "I didn't use to like vegetables." },
            { type: "fill-blank", question: "Переведите на английский: Я раньше ходил в школу пешком.", answer: "I used to walk to school." },
            { type: "fill-blank", question: "Переведите на английский: Она раньше жила в Париже.", answer: "She used to live in Paris." }
        ]
    },
    {
        id: 22,
        title: "Needn't have vs Didn't need to",
        description: "unnecessary actions in the past",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...»:", options: ["didn't need to", "needn't have", "needn't to"], answer: "didn't need to" },
            { type: "multiple-choice", question: "Выберите правильное английское значение: «не нужно было ...» (но сделал):", options: ["needn't have", "didn't need to", "needn't to"], answer: "needn't have" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Мне не нужно было покупать молоко.»", options: ["I didn't need to buy milk.", "I needn't have bought milk.", "I needn't to buy milk."], answer: "I didn't need to buy milk." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ей не нужно было идти в банк.»", options: ["She didn't need to go to the bank.", "She needn't have gone to the bank.", "She needn't to go to the bank."], answer: "She didn't need to go to the bank." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Нам не нужно было спешить.»", options: ["We didn't need to hurry.", "We needn't have hurried.", "We needn't to hurry."], answer: "We didn't need to hurry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Ему не нужно было волноваться.»", options: ["He didn't need to worry.", "He needn't have worried.", "He needn't to worry."], answer: "He didn't need to worry." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Им не нужно было готовить.»", options: ["They didn't need to cook.", "They needn't have cooked.", "They needn't to cook."], answer: "They didn't need to cook." },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Тебе не нужно было брать зонт.»", options: ["You didn't need to bring an umbrella.", "You needn't have brought an umbrella.", "You needn't to bring an umbrella."], answer: "You didn't need to bring an umbrella." },
            { type: "fill-blank", question: "Переведите на английский: Ей не нужно было покупать билеты.", answer: "She didn't need to buy tickets." },
            { type: "fill-blank", question: "Переведите на английский: Нам не нужно было спешить.", answer: "We didn't need to hurry." }
        ]
    },
    {
        id: 23,
        title: "WH-Questions",
        description: "who, what, where, when, why, how",
        questions: [
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «что»:", options: ["what", "who", "where"], answer: "what" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «где»:", options: ["where", "when", "why"], answer: "where" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «когда»:", options: ["when", "where", "why"], answer: "when" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «кто»:", options: ["who", "what", "which"], answer: "who" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «почему»:", options: ["why", "when", "how"], answer: "why" },
            { type: "multiple-choice", question: "Выберите правильное английское значение слова «как»:", options: ["how", "what", "which"], answer: "how" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Как тебя зовут?»", options: ["What is your name?", "Who are you?", "Where are you?"], answer: "What is your name?" },
            { type: "multiple-choice", question: "Выберите правильный перевод: «Где ты живёшь?»", options: ["Where do you live?", "When do you live?", "Why do you live?"], answer: "Where do you live?" },
            { type: "fill-blank", question: "Переведите на английский: Сколько тебе лет?", answer: "How old are you?" },
            { type: "fill-blank", question: "Переведите на английский: Когда начинается фильм?", answer: "When does the film start?" }
        ]
    }
];

// Application state
const state = {
    currentPage: 'home',
    currentTest: null,
    currentTopic: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    testType: null, // 'grammar' or 'vocabulary'
    testMode: null, // 'overall' or 'topic'
    score: 0
};

// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    grammarMenu: document.getElementById('grammar-menu'),
    vocabularyMenu: document.getElementById('vocabulary-menu'),
    topicSelection: document.getElementById('topic-selection'),
    testSection: document.getElementById('test-section'),
    resultsSection: document.getElementById('results-section')
};

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the requested page
    pages[pageId].classList.add('active');
    state.currentPage = pageId;
    
    // Update the current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function setupEventListeners() {
    // Home page buttons
    document.getElementById('grammar-btn').addEventListener('click', () => {
        showPage('grammarMenu');
    });
    
    document.getElementById('vocabulary-btn').addEventListener('click', () => {
        showPage('vocabularyMenu');
    });
    
    // Grammar menu buttons
    document.getElementById('overall-grammar-test').addEventListener('click', () => {
        startOverallTest('grammar');
    });
    
    document.getElementById('grammar-topics').addEventListener('click', () => {
        showTopicSelection('grammar');
    });
    
    // Vocabulary menu buttons
    document.getElementById('overall-vocabulary-test').addEventListener('click', () => {
        startOverallTest('vocabulary');
    });
    
    document.getElementById('vocabulary-topics').addEventListener('click', () => {
        showTopicSelection('vocabulary');
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (state.currentPage === 'grammarMenu' || state.currentPage === 'vocabularyMenu') {
                showPage('home');
            } else if (state.currentPage === 'topicSelection') {
                if (state.testType === 'grammar') {
                    showPage('grammarMenu');
                } else {
                    showPage('vocabularyMenu');
                }
            } else if (state.currentPage === 'testSection') {
                if (state.testMode === 'overall') {
                    if (state.testType === 'grammar') {
                        showPage('grammarMenu');
                    } else {
                        showPage('vocabularyMenu');
                    }
                } else {
                    showPage('topicSelection');
                }
            } else if (state.currentPage === 'resultsSection') {
                showPage('home');
            }
        });
    });
    
    // Test navigation buttons
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishTest);
    document.getElementById('submit-blank-btn').addEventListener('click', submitBlankAnswer);
    
    // Results buttons
    document.getElementById('retry-btn').addEventListener('click', retryTest);
    document.getElementById('new-test-btn').addEventListener('click', () => {
        if (state.testType === 'grammar') {
            showPage('grammarMenu');
        } else {
            showPage('vocabularyMenu');
        }
    });
    document.getElementById('home-results-btn').addEventListener('click', () => {
        showPage('home');
    });
    
    // Fill in the blank input
    document.getElementById('fill-blank-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitBlankAnswer();
        }
    });
}

// Test functions
function startOverallTest(type) {
    state.testType = type;
    state.testMode = 'overall';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    // Get 30 random questions
    let allQuestions = [];
    
    if (type === 'grammar') {
        grammarTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    } else {
        vocabularyTopics.forEach(topic => {
            allQuestions = allQuestions.concat(topic.questions.map(q => ({
                ...q,
                topic: topic.title
            })));
        });
    }
    
    // Shuffle and get first 30 questions
    allQuestions = shuffleArray(allQuestions).slice(0, 30);
    state.currentTest = allQuestions;
    
    // Update test UI
    document.getElementById('test-topic').textContent = `Overall ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Test`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function showTopicSelection(type) {
    state.testType = type;
    
    const topicsContainer = document.getElementById('topics-container');
    topicsContainer.innerHTML = '';
    
    const topics = type === 'grammar' ? grammarTopics : vocabularyTopics;
    document.getElementById('topic-selection-title').textContent = `Select a ${type === 'grammar' ? 'Grammar' : 'Vocabulary'} Topic`;
    
    topics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = 'topic-card';
        topicCard.innerHTML = `
            <div class="topic-number">${topic.id}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-info">
                <span><i class="fas fa-question-circle"></i> 10 questions</span>
                <span><i class="fas fa-clock"></i> 5-10 min</span>
            </div>
        `;
        
        topicCard.addEventListener('click', () => {
            startTopicTest(topic.id);
        });
        
        topicsContainer.appendChild(topicCard);
    });
    
    showPage('topicSelection');
}

function startTopicTest(topicId) {
    state.testMode = 'topic';
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.score = 0;
    
    const topics = state.testType === 'grammar' ? grammarTopics : vocabularyTopics;
    const topic = topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    state.currentTopic = topic;
    state.currentTest = [...topic.questions]; // Create a copy
    
    // Update test UI
    document.getElementById('test-topic').textContent = `${topic.title} - ${state.testType === 'grammar' ? 'Grammar' : 'Vocabulary'}`;
    document.getElementById('total-questions').textContent = state.currentTest.length;
    
    showPage('testSection');
    renderQuestion();
}

function renderQuestion() {
    if (!state.currentTest || state.currentTest.length === 0) return;
    
    const question = state.currentTest[state.currentQuestionIndex];
    const questionType = question.type;
    
    // Update progress
    const progressPercentage = ((state.currentQuestionIndex + 1) / state.currentTest.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
    document.getElementById('current-question').textContent = state.currentQuestionIndex + 1;
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-type').textContent = questionType === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank';
    
    // Clear previous feedback
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    
    // Show/hide appropriate containers
    if (questionType === 'multiple-choice') {
        document.getElementById('options-container').style.display = 'grid';
        document.getElementById('fill-blank-container').style.display = 'none';
        
        // Render options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option;
            optionBtn.dataset.value = option;
            
            // Check if this option was previously selected
            if (state.userAnswers[state.currentQuestionIndex] && 
                state.userAnswers[state.currentQuestionIndex].selected === option) {
                optionBtn.classList.add('selected');
                
                // Show feedback if answer was checked
                if (state.userAnswers[state.currentQuestionIndex].checked) {
                    showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                }
            }
            
            optionBtn.addEventListener('click', () => {
                selectOption(option);
            });
            
            optionsContainer.appendChild(optionBtn);
        });
    } else {
        document.getElementById('options-container').style.display = 'none';
        document.getElementById('fill-blank-container').style.display = 'block';
        
        // Clear the input and enable it
        const fillBlankInput = document.getElementById('fill-blank-input');
        fillBlankInput.value = '';
        fillBlankInput.disabled = false;
        fillBlankInput.focus();
        
        document.getElementById('submit-blank-btn').disabled = false;
        
        // Check if this question was previously answered
        if (state.userAnswers[state.currentQuestionIndex]) {
            fillBlankInput.value = state.userAnswers[state.currentQuestionIndex].selected || '';
            
            if (state.userAnswers[state.currentQuestionIndex].checked) {
                showFeedback(state.userAnswers[state.currentQuestionIndex].isCorrect, question.answer);
                fillBlankInput.disabled = true;
                document.getElementById('submit-blank-btn').disabled = true;
            }
        }
    }
    
    // Update navigation buttons
    document.getElementById('prev-btn').disabled = state.currentQuestionIndex === 0;
    
    // Next button should be enabled only if current question is answered
    const isAnswered = state.userAnswers[state.currentQuestionIndex] && 
                      state.userAnswers[state.currentQuestionIndex].checked;
    document.getElementById('next-btn').disabled = !isAnswered && state.currentQuestionIndex < state.currentTest.length - 1;
    
    // Update score display
    updateScoreDisplay();
}

function selectOption(option) {
    // Remove selected class from all options
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: option,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Auto-check the answer for learning purposes
    checkAnswer();
}

function submitBlankAnswer() {
    const input = document.getElementById('fill-blank-input');
    const answer = input.value.trim();
    
    if (!answer) {
        // Show error message
        const feedbackEl = document.getElementById('feedback');
        feedbackEl.textContent = 'Please enter an answer.';
        feedbackEl.className = 'feedback incorrect';
        feedbackEl.style.display = 'block';
        return;
    }
    
    // Store the answer
    state.userAnswers[state.currentQuestionIndex] = {
        selected: answer,
        checked: false,
        isCorrect: false
    };
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
    
    // Check the answer
    checkAnswer();
}

function checkAnswer() {
    const question = state.currentTest[state.currentQuestionIndex];
    const userAnswer = state.userAnswers[state.currentQuestionIndex];
    
    if (!userAnswer) return;
    
    // For fill-in-the-blank, check if answer is correct (case insensitive)
    const isCorrect = userAnswer.selected.toLowerCase() === question.answer.toLowerCase();
    userAnswer.isCorrect = isCorrect;
    userAnswer.checked = true;
    
    // Show feedback
    showFeedback(isCorrect, question.answer);
    
    // Update score
    if (isCorrect) {
        state.score++;
    }
    
    // Update UI based on question type
    if (question.type === 'multiple-choice') {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.value === question.answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.value === userAnswer.selected && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        document.getElementById('fill-blank-input').disabled = true;
        document.getElementById('submit-blank-btn').disabled = true;
    }
    
    updateScoreDisplay();
}

function showFeedback(isCorrect, correctAnswer) {
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.style.display = 'block';
    
    if (isCorrect) {
        feedbackEl.textContent = 'Correct! Well done.';
        feedbackEl.className = 'feedback correct';
    } else {
        feedbackEl.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        feedbackEl.className = 'feedback incorrect';
    }
}

function updateScoreDisplay() {
    const totalAnswered = state.userAnswers.filter(a => a && a.checked).length;
    const currentScore = totalAnswered > 0 ? Math.round((state.score / totalAnswered) * 100) : 0;
    document.getElementById('current-score').textContent = currentScore;
}

function nextQuestion() {
    if (state.currentQuestionIndex < state.currentTest.length - 1) {
        state.currentQuestionIndex++;
        renderQuestion();
    } else {
        finishTest();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderQuestion();
    }
}

function finishTest() {
    // Calculate final score
    const totalQuestions = state.currentTest.length;
    const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Determine grade
    let grade = '';
    if (scorePercentage >= 90) {
        grade = 'Excellent';
    } else if (scorePercentage >= 70) {
        grade = 'Good';
    } else {
        grade = 'Try Again';
    }
    
    // Update results UI
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('total-answers').textContent = totalQuestions;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${scorePercentage}%`;
    document.getElementById('score-grade').textContent = grade;
    
    // Set the circular progress
    const circle = document.querySelector('.score-circle-fill');
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (scorePercentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // Update test completed message
    const testName = state.testMode === 'overall' 
        ? `Overall ${state.testType} Test` 
        : `${state.currentTopic.title} ${state.testType} Test`;
    document.getElementById('test-completed-message').textContent = `You've completed the ${testName}`;
    
    // Generate breakdown
    const breakdownContent = document.getElementById('breakdown-content');
    breakdownContent.innerHTML = '';
    
    state.currentTest.forEach((question, index) => {
        const userAnswer = state.userAnswers[index];
        const isCorrect = userAnswer && userAnswer.isCorrect;
        const answerText = userAnswer ? userAnswer.selected : 'Not answered';
        
        const item = document.createElement('div');
        item.className = 'breakdown-item';
        item.innerHTML = `
            <div class="breakdown-question">Q${index + 1}: ${question.question.substring(0, 50)}...</div>
            <div class="breakdown-result ${isCorrect ? 'correct' : 'incorrect'}">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </div>
        `;
        
        breakdownContent.appendChild(item);
    });
    
    showPage('resultsSection');
}

function retryTest() {
    if (state.testMode === 'overall') {
        startOverallTest(state.testType);
    } else {
        startTopicTest(state.currentTopic.id);
    }
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the application
function init() {
    setupEventListeners();
    showPage('home');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
