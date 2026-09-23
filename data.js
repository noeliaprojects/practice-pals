const situations = [
  {
    "id": "doctor",
    "title": "At the doctor",
    "emoji": "🩺",
    "level": "Listening & Speaking",
    "description": "Health problems and advice",
    "voiceProfiles": {
      "doctor": {
        "pitch": 0.86,
        "rate": 0.82
      },
      "patient": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "headache",
        "word": "headache",
        "imageKey": "headache"
      },
      {
        "id": "sore-throat",
        "word": "sore throat",
        "imageKey": "soreThroat"
      },
      {
        "id": "dizzy",
        "word": "dizzy",
        "imageKey": "dizzy"
      },
      {
        "id": "temperature",
        "word": "temperature",
        "imageKey": "temperature"
      },
      {
        "id": "sick",
        "word": "sick",
        "imageKey": "sick"
      },
      {
        "id": "stomach-ache",
        "word": "stomach ache",
        "imageKey": "stomachAche"
      },
      {
        "id": "cold",
        "word": "cold",
        "imageKey": "cold"
      },
      {
        "id": "earache",
        "word": "earache",
        "imageKey": "earache"
      },
      {
        "id": "cough",
        "word": "cough",
        "imageKey": "cough"
      }
    ],
    "conversation": [
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Hello, what's the matter with you today?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "I've got a sore throat and a cough."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Do you feel sick?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "A little. I feel very tired."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "Have you got a temperature?"
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "Yes, I think so."
      },
      {
        "speaker": "Doctor",
        "role": "doctor",
        "text": "You should rest and drink water."
      },
      {
        "speaker": "Patient",
        "role": "patient",
        "text": "OK, thank you, doctor."
      }
    ],
    "fixedExpressions": [
      {
        "id": "matter-today",
        "left": "What's the matter",
        "right": "with you today?"
      },
      {
        "id": "got-sore-throat",
        "left": "I've got",
        "right": "a sore throat and a cough."
      },
      {
        "id": "feel-sick",
        "left": "Do you feel",
        "right": "sick?"
      },
      {
        "id": "a-little",
        "left": "A",
        "right": "little."
      },
      {
        "id": "got-temperature",
        "left": "Have you got",
        "right": "a temperature?"
      },
      {
        "id": "think-so",
        "left": "Yes,",
        "right": "I think so."
      },
      {
        "id": "should-rest",
        "left": "You should",
        "right": "rest and drink water."
      },
      {
        "id": "thank-doctor",
        "left": "Thank you,",
        "right": "doctor."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Hello, what's the matter with you today?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "I've got a sore throat and a cough."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Do you feel sick?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "A little. I feel very tired."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "Have you got a temperature?"
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "Yes, I think so."
          },
          {
            "speaker": "Doctor",
            "role": "doctor",
            "text": "You should rest and drink water."
          },
          {
            "speaker": "Patient",
            "role": "patient",
            "text": "OK, thank you, doctor."
          }
        ],
        "gaps": [
          {
            "id": "matter",
            "lineIndex": 0,
            "before": "Hello, what's the",
            "answer": "matter",
            "after": "with you today?"
          },
          {
            "id": "sore-throat",
            "lineIndex": 1,
            "before": "I've got a",
            "answer": "sore throat",
            "after": "and a cough."
          },
          {
            "id": "sick",
            "lineIndex": 2,
            "before": "Do you feel",
            "answer": "sick",
            "after": "?"
          },
          {
            "id": "temperature",
            "lineIndex": 4,
            "before": "Have you got a",
            "answer": "temperature",
            "after": "?"
          },
          {
            "id": "rest-water",
            "lineIndex": 6,
            "before": "You should",
            "answer": "rest",
            "after": "and drink water."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the health problem and the advice. Then record your new doctor role-play.",
      "conversation": [
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Hello, what's the matter with you today?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "I've got a sore throat and a cough."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Do you feel sick?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "A little. I feel very tired."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "Have you got a temperature?"
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "Yes, I think so."
        },
        {
          "speaker": "Doctor",
          "role": "doctor",
          "text": "You should rest and drink water."
        },
        {
          "speaker": "Patient",
          "role": "patient",
          "text": "OK, thank you, doctor."
        }
      ],
      "gaps": [
        {
          "id": "problem",
          "lineIndex": 1,
          "before": "I've got",
          "answer": "a sore throat and a cough",
          "after": ".",
          "options": [
            "a sore throat and a cough",
            "a headache",
            "a stomach ache",
            "a cold",
            "an earache",
            "a cough"
          ]
        },
        {
          "id": "feeling",
          "lineIndex": 3,
          "before": "A little. I feel",
          "answer": "very tired",
          "after": ".",
          "options": [
            "very tired",
            "sick",
            "dizzy",
            "cold"
          ]
        },
        {
          "id": "advice",
          "lineIndex": 6,
          "before": "You should",
          "answer": "rest and drink water",
          "after": ".",
          "options": [
            "rest and drink water",
            "rest",
            "drink water",
            "stay at home",
            "go to bed"
          ]
        }
      ]
    }
  },
  {
    "id": "canteen",
    "title": "At the school canteen",
    "emoji": "🍽️",
    "level": "Listening & Speaking",
    "description": "Food and drinks at school",
    "voiceProfiles": {
      "assistant": {
        "pitch": 0.94,
        "rate": 0.84
      },
      "student": {
        "pitch": 1.17,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "pancakes",
        "word": "pancakes",
        "imageKey": "pancakes"
      },
      {
        "id": "tuna",
        "word": "tuna",
        "imageKey": "tuna"
      },
      {
        "id": "strawberries",
        "word": "strawberries",
        "imageKey": "strawberries"
      },
      {
        "id": "pasta",
        "word": "pasta",
        "imageKey": "pasta"
      },
      {
        "id": "rice",
        "word": "rice",
        "imageKey": "rice"
      },
      {
        "id": "tomato-sauce",
        "word": "tomato sauce",
        "imageKey": "tomatoSauce"
      },
      {
        "id": "chocolate",
        "word": "chocolate",
        "imageKey": "chocolate"
      },
      {
        "id": "cheese",
        "word": "cheese",
        "imageKey": "cheese"
      },
      {
        "id": "lettuce",
        "word": "lettuce",
        "imageKey": "lettuce"
      }
    ],
    "conversation": [
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Hello, what would you like?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Could I have pasta with tomato sauce, please?"
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Sure. Would you like some cheese on it?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Yes, please."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "What would you like to drink?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "I'd like some water, please."
      },
      {
        "speaker": "Canteen assistant",
        "role": "assistant",
        "text": "Here you are. Enjoy your lunch."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you very much."
      }
    ],
    "fixedExpressions": [
      {
        "id": "what-like",
        "left": "What would you",
        "right": "like?"
      },
      {
        "id": "could-have",
        "left": "Could I have",
        "right": "pasta with tomato sauce, please?"
      },
      {
        "id": "would-like-cheese",
        "left": "Would you like",
        "right": "some cheese on it?"
      },
      {
        "id": "yes-please",
        "left": "Yes,",
        "right": "please."
      },
      {
        "id": "like-drink",
        "left": "What would you like",
        "right": "to drink?"
      },
      {
        "id": "id-like-water",
        "left": "I'd like",
        "right": "some water, please."
      },
      {
        "id": "enjoy-lunch",
        "left": "Enjoy",
        "right": "your lunch."
      },
      {
        "id": "thank-you",
        "left": "Thank you",
        "right": "very much."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Hello, what would you like?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Could I have pasta with tomato sauce, please?"
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Sure. Would you like some cheese on it?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Yes, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "What would you like to drink?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "I'd like some water, please."
          },
          {
            "speaker": "Canteen assistant",
            "role": "assistant",
            "text": "Here you are. Enjoy your lunch."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you very much."
          }
        ],
        "gaps": [
          {
            "id": "like",
            "lineIndex": 0,
            "before": "Hello, what would you",
            "answer": "like",
            "after": "?"
          },
          {
            "id": "pasta",
            "lineIndex": 1,
            "before": "Could I have",
            "answer": "pasta with tomato sauce",
            "after": ", please?"
          },
          {
            "id": "cheese",
            "lineIndex": 2,
            "before": "Sure. Would you like some",
            "answer": "cheese",
            "after": "on it?"
          },
          {
            "id": "drink",
            "lineIndex": 4,
            "before": "What would you like to",
            "answer": "drink",
            "after": "?"
          },
          {
            "id": "water",
            "lineIndex": 5,
            "before": "I'd like some",
            "answer": "water",
            "after": ", please."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the order and the drink. Then record your new canteen role-play.",
      "conversation": [
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Hello, what would you like?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Could I have pasta with tomato sauce, please?"
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Sure. Would you like some cheese on it?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Yes, please."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "What would you like to drink?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "I'd like some water, please."
        },
        {
          "speaker": "Canteen assistant",
          "role": "assistant",
          "text": "Here you are. Enjoy your lunch."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you very much."
        }
      ],
      "gaps": [
        {
          "id": "food",
          "lineIndex": 1,
          "before": "Could I have",
          "answer": "pasta with tomato sauce",
          "after": ", please?",
          "options": [
            "pasta with tomato sauce",
            "rice",
            "pancakes",
            "a tuna sandwich",
            "strawberries"
          ]
        },
        {
          "id": "extra",
          "lineIndex": 2,
          "before": "Sure. Would you like some",
          "answer": "cheese",
          "after": "on it?",
          "options": [
            "cheese",
            "lettuce",
            "chocolate",
            "tomato sauce"
          ]
        },
        {
          "id": "drink",
          "lineIndex": 5,
          "before": "I'd like some",
          "answer": "water",
          "after": ", please.",
          "options": [
            "water",
            "milk",
            "apple juice"
          ]
        }
      ]
    }
  },
  {
    "id": "table",
    "title": "At the table",
    "emoji": "🍞",
    "level": "Listening & Speaking",
    "description": "Polite requests at the table",
    "voiceProfiles": {
      "person_a": {
        "pitch": 0.92,
        "rate": 0.84
      },
      "person_b": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "toast",
        "word": "toast",
        "imageKey": "toast"
      },
      {
        "id": "jam",
        "word": "jam",
        "imageKey": "jam"
      },
      {
        "id": "apple-juice",
        "word": "apple juice",
        "imageKey": "appleJuice"
      },
      {
        "id": "milk",
        "word": "milk",
        "imageKey": "milk"
      },
      {
        "id": "water",
        "word": "water",
        "imageKey": "water"
      },
      {
        "id": "pass",
        "word": "pass",
        "imageKey": "pass"
      },
      {
        "id": "full",
        "word": "full",
        "imageKey": "full"
      },
      {
        "id": "butter",
        "word": "butter",
        "imageKey": "butter"
      },
      {
        "id": "potatoes",
        "word": "potatoes",
        "imageKey": "potatoes"
      }
    ],
    "conversation": [
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Can you pass the potatoes, please?"
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Yes, here you are."
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Thank you. Would you like some more toast?"
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Yes, please. Just a little."
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Can I have some water, please?"
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Yes, of course."
      },
      {
        "speaker": "Person A",
        "role": "person_a",
        "text": "Are you full?"
      },
      {
        "speaker": "Person B",
        "role": "person_b",
        "text": "Yes, I'm full. Thanks for dinner."
      }
    ],
    "fixedExpressions": [
      {
        "id": "pass-potatoes",
        "left": "Can you pass",
        "right": "the potatoes, please?"
      },
      {
        "id": "here-you-are",
        "left": "Here",
        "right": "you are."
      },
      {
        "id": "would-like-toast",
        "left": "Would you like",
        "right": "some more toast?"
      },
      {
        "id": "just-little",
        "left": "Just",
        "right": "a little."
      },
      {
        "id": "can-have-water",
        "left": "Can I have",
        "right": "some water, please?"
      },
      {
        "id": "of-course",
        "left": "Yes,",
        "right": "of course."
      },
      {
        "id": "are-full",
        "left": "Are you",
        "right": "full?"
      },
      {
        "id": "thanks-dinner",
        "left": "Thanks",
        "right": "for dinner."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Can you pass the potatoes, please?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, here you are."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Thank you. Would you like some more toast?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, please. Just a little."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Can I have some water, please?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, of course."
          },
          {
            "speaker": "Person A",
            "role": "person_a",
            "text": "Are you full?"
          },
          {
            "speaker": "Person B",
            "role": "person_b",
            "text": "Yes, I'm full. Thanks for dinner."
          }
        ],
        "gaps": [
          {
            "id": "potatoes",
            "lineIndex": 0,
            "before": "Can you pass the",
            "answer": "potatoes",
            "after": ", please?"
          },
          {
            "id": "toast",
            "lineIndex": 2,
            "before": "Thank you. Would you like some more",
            "answer": "toast",
            "after": "?"
          },
          {
            "id": "little",
            "lineIndex": 3,
            "before": "Yes, please. Just a",
            "answer": "little",
            "after": "."
          },
          {
            "id": "water",
            "lineIndex": 4,
            "before": "Can I have some",
            "answer": "water",
            "after": ", please?"
          },
          {
            "id": "full",
            "lineIndex": 7,
            "before": "Yes, I'm",
            "answer": "full",
            "after": ". Thanks for dinner."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the food and drink at the table. Then record your new dialogue.",
      "conversation": [
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Can you pass the potatoes, please?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, here you are."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Thank you. Would you like some more toast?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, please. Just a little."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Can I have some water, please?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, of course."
        },
        {
          "speaker": "Person A",
          "role": "person_a",
          "text": "Are you full?"
        },
        {
          "speaker": "Person B",
          "role": "person_b",
          "text": "Yes, I'm full. Thanks for dinner."
        }
      ],
      "gaps": [
        {
          "id": "pass",
          "lineIndex": 0,
          "before": "Can you pass the",
          "answer": "potatoes",
          "after": ", please?",
          "options": [
            "potatoes",
            "jam",
            "milk",
            "butter"
          ]
        },
        {
          "id": "more",
          "lineIndex": 2,
          "before": "Thank you. Would you like some more",
          "answer": "toast",
          "after": "?",
          "options": [
            "toast",
            "potatoes",
            "jam"
          ]
        },
        {
          "id": "drink",
          "lineIndex": 4,
          "before": "Can I have some",
          "answer": "water",
          "after": ", please?",
          "options": [
            "water",
            "milk",
            "apple juice"
          ]
        }
      ]
    }
  },
  {
    "id": "cooking",
    "title": "Cooking together",
    "emoji": "🥣",
    "level": "Listening & Speaking",
    "description": "Cooking actions and instructions",
    "voiceProfiles": {
      "teacher": {
        "pitch": 0.9,
        "rate": 0.82
      },
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "add",
        "word": "add",
        "imageKey": "add"
      },
      {
        "id": "mix",
        "word": "mix",
        "imageKey": "mix"
      },
      {
        "id": "weigh",
        "word": "weigh",
        "imageKey": "weigh"
      },
      {
        "id": "taste",
        "word": "taste",
        "imageKey": "taste"
      },
      {
        "id": "fry",
        "word": "fry",
        "imageKey": "fry"
      },
      {
        "id": "stir",
        "word": "stir",
        "imageKey": "stir"
      },
      {
        "id": "pour",
        "word": "pour",
        "imageKey": "pour"
      }
    ],
    "conversation": [
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Today, we are making pancakes."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Great! What do we need?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "We need flour, milk and eggs."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Should I mix them?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, mix them in the bowl."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I pour the milk?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, pour it slowly."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Should I fry them now?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, fry them carefully."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can I taste one now?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes, taste it carefully."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "It tastes delicious!"
      }
    ],
    "fixedExpressions": [
      {
        "id": "making-pancakes",
        "left": "We are making",
        "right": "pancakes."
      },
      {
        "id": "what-need",
        "left": "What do we",
        "right": "need?"
      },
      {
        "id": "need-ingredients",
        "left": "We need",
        "right": "flour, milk and eggs."
      },
      {
        "id": "should-mix",
        "left": "Should I",
        "right": "mix them?"
      },
      {
        "id": "mix-bowl",
        "left": "Mix them",
        "right": "in the bowl."
      },
      {
        "id": "pour-milk",
        "left": "Can I pour",
        "right": "the milk?"
      },
      {
        "id": "pour-slowly",
        "left": "Pour it",
        "right": "slowly."
      },
      {
        "id": "should-fry",
        "left": "Should I",
        "right": "fry them now?"
      },
      {
        "id": "fry-carefully",
        "left": "Fry them",
        "right": "carefully."
      },
      {
        "id": "can-taste",
        "left": "Can I taste",
        "right": "one now?"
      },
      {
        "id": "taste-carefully",
        "left": "Taste it",
        "right": "carefully."
      },
      {
        "id": "tastes-delicious",
        "left": "It tastes",
        "right": "delicious!"
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Today, we are making pancakes."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Great! What do we need?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "We need flour, milk and eggs."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I mix them?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, mix them in the bowl."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I pour the milk?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, pour it slowly."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Should I fry them now?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, fry them carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can I taste one now?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes, taste it carefully."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "It tastes delicious!"
          }
        ],
        "gaps": [
          {
            "id": "pancakes",
            "lineIndex": 0,
            "before": "Today, we are making",
            "answer": "pancakes",
            "after": "."
          },
          {
            "id": "need",
            "lineIndex": 1,
            "before": "Great! What do we",
            "answer": "need",
            "after": "?"
          },
          {
            "id": "mix",
            "lineIndex": 3,
            "before": "Should I",
            "answer": "mix",
            "after": "them?"
          },
          {
            "id": "pour",
            "lineIndex": 5,
            "before": "Can I",
            "answer": "pour",
            "after": "the milk?"
          },
          {
            "id": "fry",
            "lineIndex": 7,
            "before": "Should I",
            "answer": "fry",
            "after": "them now?"
          },
          {
            "id": "taste",
            "lineIndex": 9,
            "before": "Can I",
            "answer": "taste",
            "after": "one now?"
          },
          {
            "id": "delicious",
            "lineIndex": 11,
            "before": "It tastes",
            "answer": "delicious",
            "after": "!"
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change some cooking actions. Then record your new cooking dialogue.",
      "conversation": [
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Today, we are making pancakes."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Great! What do we need?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "We need flour, milk and eggs."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I mix them?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, mix them in the bowl."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I pour the milk?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, pour it slowly."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Should I fry them now?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, fry them carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can I taste one now?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes, taste it carefully."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "It tastes delicious!"
        }
      ],
      "gaps": [
        {
          "id": "action1",
          "lineIndex": 3,
          "before": "Should I",
          "answer": "mix",
          "after": "them?",
          "options": [
            "mix",
            "stir",
            "weigh"
          ]
        },
        {
          "id": "action2",
          "lineIndex": 5,
          "before": "Can I",
          "answer": "pour",
          "after": "the milk?",
          "options": [
            "pour",
            "add",
            "stir"
          ]
        },
        {
          "id": "action3",
          "lineIndex": 7,
          "before": "Should I",
          "answer": "fry",
          "after": "them now?",
          "options": [
            "fry",
            "taste",
            "mix"
          ]
        },
        {
          "id": "action4",
          "lineIndex": 9,
          "before": "Can I",
          "answer": "taste",
          "after": "one now?",
          "options": [
            "taste",
            "mix",
            "weigh"
          ]
        }
      ]
    }
  },
  {
    "id": "animals",
    "title": "Talking about animals",
    "emoji": "🐼",
    "level": "Listening & Speaking",
    "description": "Opinions about animals",
    "voiceProfiles": {
      "friend_a": {
        "pitch": 1.12,
        "rate": 0.87
      },
      "friend_b": {
        "pitch": 1.24,
        "rate": 0.89
      }
    },
    "wordBank": [
      {
        "id": "hippo",
        "word": "hippo",
        "imageKey": "hippo"
      },
      {
        "id": "whale",
        "word": "whale",
        "imageKey": "whale"
      },
      {
        "id": "kangaroo",
        "word": "kangaroo",
        "imageKey": "kangaroo"
      },
      {
        "id": "parrot",
        "word": "parrot",
        "imageKey": "parrot"
      },
      {
        "id": "lion",
        "word": "lion",
        "imageKey": "lion"
      },
      {
        "id": "dolphin",
        "word": "dolphin",
        "imageKey": "dolphin"
      },
      {
        "id": "shark",
        "word": "shark",
        "imageKey": "shark"
      },
      {
        "id": "tiger",
        "word": "tiger",
        "imageKey": "tiger"
      },
      {
        "id": "panda",
        "word": "panda",
        "imageKey": "panda"
      },
      {
        "id": "penguin",
        "word": "penguin",
        "imageKey": "penguin"
      },
      {
        "id": "dangerous",
        "word": "dangerous",
        "imageKey": "dangerous"
      },
      {
        "id": "colourful",
        "word": "colourful",
        "imageKey": "colourful"
      },
      {
        "id": "intelligent",
        "word": "intelligent",
        "imageKey": "intelligent"
      },
      {
        "id": "pretty",
        "word": "pretty",
        "imageKey": "pretty"
      }
    ],
    "conversation": [
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "I like dolphins."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Why do you like dolphins?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Because they are intelligent and beautiful."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Are dolphins more dangerous than sharks?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "No, sharks are more dangerous."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Are whales bigger than dolphins?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Yes, they are much bigger."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Animals are amazing."
      }
    ],
    "fixedExpressions": [
      {
        "id": "like-dolphins",
        "left": "I like",
        "right": "dolphins."
      },
      {
        "id": "why-like",
        "left": "Why do you like",
        "right": "dolphins?"
      },
      {
        "id": "because-intelligent",
        "left": "Because they are",
        "right": "intelligent and beautiful."
      },
      {
        "id": "more-dangerous",
        "left": "Are dolphins more dangerous",
        "right": "than sharks?"
      },
      {
        "id": "sharks-dangerous",
        "left": "Sharks are",
        "right": "more dangerous."
      },
      {
        "id": "whales-bigger",
        "left": "Are whales bigger",
        "right": "than dolphins?"
      },
      {
        "id": "much-bigger",
        "left": "They are",
        "right": "much bigger."
      },
      {
        "id": "animals-amazing",
        "left": "Animals are",
        "right": "amazing."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "I like dolphins."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Why do you like dolphins?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Because they are intelligent and beautiful."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are dolphins more dangerous than sharks?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "No, sharks are more dangerous."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Are whales bigger than dolphins?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, they are much bigger."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Animals are amazing."
          }
        ],
        "gaps": [
          {
            "id": "dolphins",
            "lineIndex": 0,
            "before": "I like",
            "answer": "dolphins",
            "after": "."
          },
          {
            "id": "why-like",
            "lineIndex": 1,
            "before": "Why do you like",
            "answer": "dolphins",
            "after": "?"
          },
          {
            "id": "intelligent",
            "lineIndex": 2,
            "before": "Because they are",
            "answer": "intelligent and beautiful",
            "after": "."
          },
          {
            "id": "sharks",
            "lineIndex": 3,
            "before": "Are dolphins more dangerous than",
            "answer": "sharks",
            "after": "?"
          },
          {
            "id": "dolphins-bigger",
            "lineIndex": 5,
            "before": "Are whales bigger than",
            "answer": "dolphins",
            "after": "?"
          },
          {
            "id": "bigger",
            "lineIndex": 6,
            "before": "Yes, they are much",
            "answer": "bigger",
            "after": "."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the animal once and repeat it in the dialogue. Then record your new animal dialogue.",
      "conversation": [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "I like dolphins."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Why do you like dolphins?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Because they are intelligent and beautiful."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are dolphins more dangerous than sharks?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "No, sharks are more dangerous."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Are whales bigger than dolphins?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, they are much bigger."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Animals are amazing."
        }
      ],
      "gaps": [
        {
          "id": "animal",
          "lineIndex": 0,
          "before": "I like",
          "answer": "dolphins",
          "after": ".",
          "options": [
            "dolphins",
            "penguins",
            "pandas",
            "kangaroos",
            "parrots"
          ]
        },
        {
          "id": "animal",
          "lineIndex": 1,
          "before": "Why do you like",
          "answer": "dolphins",
          "after": "?",
          "options": [
            "dolphins",
            "penguins",
            "pandas",
            "kangaroos",
            "parrots"
          ]
        },
        {
          "id": "adjective",
          "lineIndex": 2,
          "before": "Because they are",
          "answer": "intelligent and beautiful",
          "after": ".",
          "options": [
            "intelligent and beautiful",
            "funny and pretty",
            "strong and fast",
            "colourful and pretty"
          ]
        },
        {
          "id": "animal",
          "lineIndex": 3,
          "before": "Are",
          "answer": "dolphins",
          "after": "more dangerous than sharks?",
          "options": [
            "dolphins",
            "penguins",
            "pandas",
            "kangaroos",
            "parrots"
          ]
        },
        {
          "id": "dangerous",
          "lineIndex": 4,
          "before": "No,",
          "answer": "sharks",
          "after": "are more dangerous.",
          "options": [
            "sharks",
            "tigers",
            "hippos",
            "lions"
          ]
        },
        {
          "id": "animal",
          "lineIndex": 5,
          "before": "Are whales bigger than",
          "answer": "dolphins",
          "after": "?",
          "options": [
            "dolphins",
            "penguins",
            "pandas",
            "kangaroos",
            "parrots"
          ]
        }
      ]
    }
  },
  {
    "id": "directions",
    "title": "Asking for directions",
    "emoji": "🧭",
    "level": "Listening & Speaking",
    "description": "Directions to a place",
    "voiceProfiles": {
      "visitor": {
        "pitch": 1.12,
        "rate": 0.86
      },
      "helper": {
        "pitch": 0.9,
        "rate": 0.84
      }
    },
    "wordBank": [
      {
        "id": "road",
        "word": "road",
        "imageKey": "road"
      },
      {
        "id": "bridge",
        "word": "bridge",
        "imageKey": "bridge"
      },
      {
        "id": "farm",
        "word": "farm",
        "imageKey": "farm"
      },
      {
        "id": "field",
        "word": "field",
        "imageKey": "field"
      },
      {
        "id": "hospital",
        "word": "hospital",
        "imageKey": "hospital"
      },
      {
        "id": "cafe",
        "word": "café",
        "imageKey": "cafe"
      },
      {
        "id": "cinema",
        "word": "cinema",
        "imageKey": "cinema"
      },
      {
        "id": "supermarket",
        "word": "supermarket",
        "imageKey": "supermarket"
      },
      {
        "id": "go-straight-on",
        "word": "go straight on",
        "imageKey": "goStraightOn"
      },
      {
        "id": "turn-left",
        "word": "turn left",
        "imageKey": "turnLeft"
      },
      {
        "id": "turn-right",
        "word": "turn right",
        "imageKey": "turnRight"
      },
      {
        "id": "go-past",
        "word": "go past",
        "imageKey": "goPast"
      },
      {
        "id": "near",
        "word": "near",
        "imageKey": "near"
      },
      {
        "id": "far",
        "word": "far",
        "imageKey": "far"
      }
    ],
    "conversation": [
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Excuse me, where's the café?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "It's near the hospital."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "How do I get there?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Go straight on, then turn right."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Do I go past the cinema?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "Yes, then turn left."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Is it far away?"
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "No, it's only two minutes from here."
      },
      {
        "speaker": "Visitor",
        "role": "visitor",
        "text": "Thank you very much."
      },
      {
        "speaker": "Helper",
        "role": "helper",
        "text": "You're welcome."
      }
    ],
    "fixedExpressions": [
      {
        "id": "excuse-me",
        "left": "Excuse",
        "right": "me."
      },
      {
        "id": "wheres-cafe",
        "left": "Where's",
        "right": "the café?"
      },
      {
        "id": "near-hospital",
        "left": "It's near",
        "right": "the hospital."
      },
      {
        "id": "get-there",
        "left": "How do I",
        "right": "get there?"
      },
      {
        "id": "straight-right",
        "left": "Go straight on,",
        "right": "then turn right."
      },
      {
        "id": "past-cinema",
        "left": "Go past",
        "right": "the cinema."
      },
      {
        "id": "turn-left",
        "left": "Then turn",
        "right": "left."
      },
      {
        "id": "far-away",
        "left": "Is it",
        "right": "far away?"
      },
      {
        "id": "two-minutes",
        "left": "It's only",
        "right": "two minutes from here."
      },
      {
        "id": "welcome",
        "left": "You're",
        "right": "welcome."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Excuse me, where's the café?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "It's near the hospital."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "How do I get there?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Go straight on, then turn right."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Do I go past the cinema?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "Yes, then turn left."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Is it far away?"
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "No, it's only two minutes from here."
          },
          {
            "speaker": "Visitor",
            "role": "visitor",
            "text": "Thank you very much."
          },
          {
            "speaker": "Helper",
            "role": "helper",
            "text": "You're welcome."
          }
        ],
        "gaps": [
          {
            "id": "cafe",
            "lineIndex": 0,
            "before": "Excuse me, where's the",
            "answer": "café",
            "after": "?"
          },
          {
            "id": "hospital",
            "lineIndex": 1,
            "before": "It's near the",
            "answer": "hospital",
            "after": "."
          },
          {
            "id": "straight",
            "lineIndex": 3,
            "before": "Go",
            "answer": "straight on",
            "after": ", then turn right."
          },
          {
            "id": "cinema",
            "lineIndex": 4,
            "before": "Do I go past the",
            "answer": "cinema",
            "after": "?"
          },
          {
            "id": "minutes",
            "lineIndex": 7,
            "before": "No, it's only two",
            "answer": "minutes",
            "after": "from here."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the place and the directions. Then record your new directions dialogue.",
      "conversation": [
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Excuse me, where's the café?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "It's near the hospital."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "How do I get there?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Go straight on, then turn right."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Do I go past the cinema?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "Yes, then turn left."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Is it far away?"
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "No, it's only two minutes from here."
        },
        {
          "speaker": "Visitor",
          "role": "visitor",
          "text": "Thank you very much."
        },
        {
          "speaker": "Helper",
          "role": "helper",
          "text": "You're welcome."
        }
      ],
      "gaps": [
        {
          "id": "place",
          "lineIndex": 0,
          "before": "Excuse me, where's the",
          "answer": "café",
          "after": "?",
          "options": [
            "café",
            "supermarket",
            "cinema",
            "hospital",
            "farm"
          ]
        },
        {
          "id": "near",
          "lineIndex": 1,
          "before": "It's near the",
          "answer": "hospital",
          "after": ".",
          "options": [
            "hospital",
            "school",
            "bridge",
            "field",
            "road"
          ]
        },
        {
          "id": "turn",
          "lineIndex": 3,
          "before": "Go straight on, then",
          "answer": "turn right",
          "after": ".",
          "options": [
            "turn right",
            "turn left",
            "go past the cinema",
            "cross the bridge"
          ]
        }
      ]
    }
  },
  {
    "id": "holiday",
    "title": "Going on holiday",
    "emoji": "🏖️",
    "level": "Listening & Speaking",
    "description": "Holiday plans and packing",
    "voiceProfiles": {
      "friend_a": {
        "pitch": 1.12,
        "rate": 0.87
      },
      "friend_b": {
        "pitch": 1.24,
        "rate": 0.89
      }
    },
    "wordBank": [
      {
        "id": "water-park",
        "word": "go to a water park",
        "imageKey": "waterPark"
      },
      {
        "id": "funfair",
        "word": "go to a funfair",
        "imageKey": "funfair"
      },
      {
        "id": "museum",
        "word": "go to a museum",
        "imageKey": "museum"
      },
      {
        "id": "safari-park",
        "word": "visit a safari park",
        "imageKey": "safariPark"
      },
      {
        "id": "aquarium",
        "word": "go to an aquarium",
        "imageKey": "aquarium"
      },
      {
        "id": "castle",
        "word": "visit a castle",
        "imageKey": "castle"
      },
      {
        "id": "flip-flops",
        "word": "flip flops",
        "imageKey": "flipFlops"
      },
      {
        "id": "suitcase",
        "word": "suitcase",
        "imageKey": "suitcase"
      },
      {
        "id": "swimsuit",
        "word": "swimsuit",
        "imageKey": "swimsuit"
      },
      {
        "id": "sun-hat",
        "word": "sun hat",
        "imageKey": "sunHat"
      }
    ],
    "conversation": [
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "We're going to a water park this weekend."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Do we need swimsuits?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Yes, we do, and we need sun hats."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "How about flip flops?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "Good idea. They go in the suitcase."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Great! What time are we leaving?"
      },
      {
        "speaker": "Friend A",
        "role": "friend_a",
        "text": "At nine o'clock."
      },
      {
        "speaker": "Friend B",
        "role": "friend_b",
        "text": "Perfect. I'm ready."
      }
    ],
    "fixedExpressions": [
      {
        "id": "going-waterpark",
        "left": "We're going to",
        "right": "a water park this weekend."
      },
      {
        "id": "need-swimsuits",
        "left": "Do we need",
        "right": "swimsuits?"
      },
      {
        "id": "yes-we-do",
        "left": "Yes,",
        "right": "we do."
      },
      {
        "id": "need-sun-hats",
        "left": "We need",
        "right": "sun hats."
      },
      {
        "id": "flip-flops",
        "left": "How about",
        "right": "flip flops?"
      },
      {
        "id": "good-idea",
        "left": "Good",
        "right": "idea."
      },
      {
        "id": "suitcase",
        "left": "They go in",
        "right": "the suitcase."
      },
      {
        "id": "what-time",
        "left": "What time are",
        "right": "we leaving?"
      },
      {
        "id": "nine-clock",
        "left": "At",
        "right": "nine o'clock."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "We're going to a water park this weekend."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Do we need swimsuits?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Yes, we do, and we need sun hats."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "How about flip flops?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "Good idea. They go in the suitcase."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Great! What time are we leaving?"
          },
          {
            "speaker": "Friend A",
            "role": "friend_a",
            "text": "At nine o'clock."
          },
          {
            "speaker": "Friend B",
            "role": "friend_b",
            "text": "Perfect. I'm ready."
          }
        ],
        "gaps": [
          {
            "id": "water-park",
            "lineIndex": 0,
            "before": "We're going to a",
            "answer": "water park",
            "after": "this weekend."
          },
          {
            "id": "swimsuits",
            "lineIndex": 1,
            "before": "Do we need",
            "answer": "swimsuits",
            "after": "?"
          },
          {
            "id": "sun-hats",
            "lineIndex": 2,
            "before": "Yes, we do, and we need",
            "answer": "sun hats",
            "after": "."
          },
          {
            "id": "flip-flops",
            "lineIndex": 3,
            "before": "How about",
            "answer": "flip flops",
            "after": "?"
          },
          {
            "id": "suitcase",
            "lineIndex": 4,
            "before": "Good idea. They go in the",
            "answer": "suitcase",
            "after": "."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "",
      "conversation": [
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "We're going to a water park this weekend."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Do we need swimsuits?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Yes, we do, and we need sun hats."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "How about flip flops?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "Good idea. They go in the suitcase."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Great! What time are we leaving?"
        },
        {
          "speaker": "Friend A",
          "role": "friend_a",
          "text": "At nine o'clock."
        },
        {
          "speaker": "Friend B",
          "role": "friend_b",
          "text": "Perfect. I'm ready."
        }
      ],
      "gaps": [
        {
          "id": "place",
          "label": "Place",
          "lineIndex": 0,
          "before": "We're going to a ",
          "answer": "water park",
          "after": " this weekend.",
          "options": [
            "water park",
            "museum",
            "funfair",
            "safari park",
            "castle",
            "aquarium"
          ]
        },
        {
          "id": "clothes",
          "label": "Clothes",
          "lineIndex": 1,
          "before": "Do we need ",
          "answer": "swimsuits",
          "after": "?",
          "options": [
            "swimsuits",
            "sun hats",
            "flip flops"
          ]
        },
        {
          "id": "clothes",
          "label": "Clothes",
          "lineIndex": 2,
          "before": "Yes, we do, and we need ",
          "answer": "sun hats",
          "after": ".",
          "options": [
            "swimsuits",
            "sun hats",
            "flip flops"
          ]
        },
        {
          "id": "clothes",
          "label": "Clothes",
          "lineIndex": 3,
          "before": "How about ",
          "answer": "flip flops",
          "after": "?",
          "options": [
            "swimsuits",
            "sun hats",
            "flip flops"
          ]
        },
        {
          "id": "time",
          "label": "Time",
          "lineIndex": 6,
          "before": "At ",
          "answer": "nine o'clock",
          "after": ".",
          "options": [
            "eight o'clock",
            "nine o'clock",
            "ten o'clock",
            "eleven o'clock"
          ]
        }
      ]
    }
  },
  {
    "id": "school-help",
    "title": "At school",
    "emoji": "🎒",
    "level": "Listening & Speaking",
    "description": "Classroom help and instructions",
    "voiceProfiles": {
      "teacher": {
        "pitch": 0.88,
        "rate": 0.82
      },
      "student": {
        "pitch": 1.18,
        "rate": 0.88
      }
    },
    "wordBank": [
      {
        "id": "teacher",
        "word": "teacher",
        "imageKey": "teacher"
      },
      {
        "id": "page",
        "word": "page",
        "imageKey": "page"
      },
      {
        "id": "instructions",
        "word": "instructions",
        "imageKey": "instructions"
      },
      {
        "id": "repeat",
        "word": "repeat",
        "imageKey": "repeat"
      },
      {
        "id": "understand",
        "word": "understand",
        "imageKey": "understand"
      },
      {
        "id": "word",
        "word": "word",
        "imageKey": "word"
      },
      {
        "id": "example",
        "word": "example",
        "imageKey": "example"
      },
      {
        "id": "answer",
        "word": "answer",
        "imageKey": "answer"
      }
    ],
    "conversation": [
      {
        "speaker": "Student",
        "role": "student",
        "text": "Excuse me, teacher."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes? What do you need?"
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "What page are we on?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "We're on page ten, exercise two."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can you repeat the instructions, please?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Sure. Read the text and choose an answer."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Can you show me the first example?"
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Yes. Look at this sentence."
      },
      {
        "speaker": "Student",
        "role": "student",
        "text": "Thank you. I understand now."
      },
      {
        "speaker": "Teacher",
        "role": "teacher",
        "text": "Great. Try the next one."
      }
    ],
    "fixedExpressions": [
      {
        "id": "excuse-teacher",
        "left": "Excuse me,",
        "right": "teacher."
      },
      {
        "id": "what-need",
        "left": "What do you",
        "right": "need?"
      },
      {
        "id": "what-page",
        "left": "What page",
        "right": "are we on?"
      },
      {
        "id": "page-exercise",
        "left": "We're on page ten,",
        "right": "exercise two."
      },
      {
        "id": "repeat-instructions",
        "left": "Can you repeat",
        "right": "the instructions, please?"
      },
      {
        "id": "read-answer",
        "left": "Read the text",
        "right": "and choose an answer."
      },
      {
        "id": "show-example",
        "left": "Can you show me",
        "right": "the first example?"
      },
      {
        "id": "look-sentence",
        "left": "Look at",
        "right": "this sentence."
      },
      {
        "id": "understand-now",
        "left": "I understand",
        "right": "now."
      },
      {
        "id": "try-next",
        "left": "Try",
        "right": "the next one."
      }
    ],
    "missingScenarios": [
      {
        "id": "model-conversation",
        "conversation": [
          {
            "speaker": "Student",
            "role": "student",
            "text": "Excuse me, teacher."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes? What do you need?"
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "What page are we on?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "We're on page ten, exercise two."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you repeat the instructions, please?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Sure. Read the text and choose an answer."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Can you show me the first example?"
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Yes. Look at this sentence."
          },
          {
            "speaker": "Student",
            "role": "student",
            "text": "Thank you. I understand now."
          },
          {
            "speaker": "Teacher",
            "role": "teacher",
            "text": "Great. Try the next one."
          }
        ],
        "gaps": [
          {
            "id": "teacher",
            "lineIndex": 0,
            "before": "Excuse me,",
            "answer": "teacher",
            "after": "."
          },
          {
            "id": "need",
            "lineIndex": 1,
            "before": "Yes? What do you",
            "answer": "need",
            "after": "?"
          },
          {
            "id": "page",
            "lineIndex": 2,
            "before": "What",
            "answer": "page",
            "after": "are we on?"
          },
          {
            "id": "page-ten",
            "lineIndex": 3,
            "before": "We're on",
            "answer": "page ten",
            "after": ", exercise two."
          },
          {
            "id": "instructions",
            "lineIndex": 4,
            "before": "Can you repeat the",
            "answer": "instructions",
            "after": ", please?"
          },
          {
            "id": "answer",
            "lineIndex": 5,
            "before": "Sure. Read the text and choose an",
            "answer": "answer",
            "after": "."
          },
          {
            "id": "example",
            "lineIndex": 6,
            "before": "Can you show me the first",
            "answer": "example",
            "after": "?"
          },
          {
            "id": "sentence",
            "lineIndex": 7,
            "before": "Yes. Look at this",
            "answer": "sentence",
            "after": "."
          },
          {
            "id": "now",
            "lineIndex": 8,
            "before": "Thank you. I understand",
            "answer": "now",
            "after": "."
          }
        ]
      }
    ],
    "optionalChallenge": {
      "title": "Optional Challenge",
      "subtitle": "Create your dialogue",
      "intro": "Change the page number, the exercise number and part of the classroom task. Then record your new school dialogue.",
      "conversation": [
        {
          "speaker": "Student",
          "role": "student",
          "text": "Excuse me, teacher."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes? What do you need?"
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "What page are we on?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "We're on page ten, exercise two."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can you repeat the instructions, please?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Sure. Read the text and choose an answer."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Can you show me the first example?"
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Yes. Look at this sentence."
        },
        {
          "speaker": "Student",
          "role": "student",
          "text": "Thank you. I understand now."
        },
        {
          "speaker": "Teacher",
          "role": "teacher",
          "text": "Great. Try the next one."
        }
      ],
      "gaps": [
        {
          "id": "page-number",
          "lineIndex": 3,
          "order": 1,
          "before": "We're on page ",
          "answer": "ten",
          "after": ", exercise ",
          "options": [
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve"
          ]
        },
        {
          "id": "exercise-number",
          "lineIndex": 3,
          "order": 2,
          "before": "",
          "answer": "two",
          "after": ".",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ]
        },
        {
          "id": "task-text",
          "lineIndex": 5,
          "order": 1,
          "before": "Sure. Read the ",
          "answer": "text",
          "after": " and choose the correct ",
          "options": [
            "text",
            "question",
            "dialogue",
            "sentence"
          ]
        },
        {
          "id": "task-answer",
          "lineIndex": 5,
          "order": 2,
          "before": "",
          "answer": "answer",
          "after": ".",
          "options": [
            "answer",
            "picture",
            "word",
            "sentence"
          ]
        },
        {
          "id": "example-item",
          "lineIndex": 6,
          "before": "Can you show me the first ",
          "answer": "example",
          "after": "?",
          "options": [
            "example",
            "question",
            "answer",
            "sentence"
          ]
        }
      ]
    }
  }
];
