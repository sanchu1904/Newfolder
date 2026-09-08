// Complete question database for all modules

const QUESTIONS = {
    programming: [
        {
            question: "What is the primary purpose of a variable in programming?",
            options: [
                "To store data values",
                "To create loops",
                "To define functions",
                "To manage memory allocation"
            ],
            correct: 0
        },
        {
            question: "Which of the following is a valid data type in most programming languages?",
            options: [
                "String",
                "Process",
                "Command",
                "Interface"
            ],
            correct: 0
        },
        {
            question: "What does a function in programming do?",
            options: [
                "Performs a specific task or calculation",
                "Stores permanent data",
                "Creates visual elements",
                "Manages user accounts"
            ],
            correct: 0
        },
        {
            question: "What is a loop in programming?",
            options: [
                "A way to repeat code multiple times",
                "A type of variable",
                "A method to store data",
                "A way to define classes"
            ],
            correct: 0
        },
        {
            question: "Which statement is used to make decisions in programming?",
            options: [
                "If-else statement",
                "While loop",
                "For loop",
                "Function declaration"
            ],
            correct: 0
        },
        {
            question: "What is an array in programming?",
            options: [
                "A collection of elements stored in a single variable",
                "A mathematical operation",
                "A type of function",
                "A memory allocation technique"
            ],
            correct: 0
        },
        {
            question: "What does DRY principle stand for?",
            options: [
                "Don't Repeat Yourself",
                "Data Retrieval Yield",
                "Dynamic Resource Yielding",
                "Database Replication Yielding"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of error handling?",
            options: [
                "To manage exceptions and prevent program crashes",
                "To increase code speed",
                "To reduce code length",
                "To improve graphics quality"
            ],
            correct: 0
        },
        {
            question: "Which concept allows code to be organized into reusable blocks?",
            options: [
                "Modularity",
                "Recursion",
                "Compilation",
                "Serialization"
            ],
            correct: 0
        },
        {
            question: "What is object-oriented programming (OOP)?",
            options: [
                "A programming paradigm based on objects and classes",
                "A method to write code faster",
                "A way to manage files",
                "A technique for database design"
            ],
            correct: 0
        },
        {
            question: "What is version control used for?",
            options: [
                "To track changes in code and manage project history",
                "To execute programs faster",
                "To compress files",
                "To encrypt data"
            ],
            correct: 0
        },
        {
            question: "What is a comment in programming?",
            options: [
                "Text that explains code but is not executed",
                "A way to execute code",
                "A variable declaration",
                "A type of loop"
            ],
            correct: 0
        }
    ],

    aptitude: [
        {
            question: "If a train travels at 60 km/h for 2 hours, how far does it travel?",
            options: [
                "120 km",
                "100 km",
                "80 km",
                "150 km"
            ],
            correct: 0
        },
        {
            question: "What is 25% of 200?",
            options: [
                "50",
                "75",
                "100",
                "125"
            ],
            correct: 0
        },
        {
            question: "If A = 5 and B = 3, what is A² - B²?",
            options: [
                "16",
                "18",
                "20",
                "24"
            ],
            correct: 0
        },
        {
            question: "A book costs $10. After a 20% discount, what is the new price?",
            options: [
                "$8",
                "$8.50",
                "$9",
                "$9.50"
            ],
            correct: 0
        },
        {
            question: "In a series 2, 4, 6, 8, ?, what is the next number?",
            options: [
                "10",
                "11",
                "12",
                "13"
            ],
            correct: 0
        },
        {
            question: "If 5 workers can complete a job in 10 days, how many days will 10 workers take?",
            options: [
                "5 days",
                "10 days",
                "15 days",
                "20 days"
            ],
            correct: 0
        },
        {
            question: "What is the average of 10, 20, 30, and 40?",
            options: [
                "25",
                "30",
                "35",
                "40"
            ],
            correct: 0
        },
        {
            question: "Which number is largest? 0.5, 0.05, 0.55, 0.055",
            options: [
                "0.55",
                "0.5",
                "0.055",
                "0.05"
            ],
            correct: 0
        },
        {
            question: "If x + 5 = 12, what is x?",
            options: [
                "7",
                "8",
                "9",
                "10"
            ],
            correct: 0
        },
        {
            question: "In a sequence 1, 1, 2, 3, 5, 8, ?, what is the next number?",
            options: [
                "13",
                "12",
                "11",
                "10"
            ],
            correct: 0
        }
    ],

    'technical-practice': [
        {
            question: "What is the time complexity of binary search?",
            options: [
                "O(log n)",
                "O(n)",
                "O(n²)",
                "O(2ⁿ)"
            ],
            correct: 0
        },
        {
            question: "Which data structure uses LIFO (Last In First Out)?",
            options: [
                "Stack",
                "Queue",
                "Array",
                "Hash table"
            ],
            correct: 0
        },
        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Application Process Indicator",
                "Advanced Programming Interface",
                "Application Protocol Interface"
            ],
            correct: 0
        },
        {
            question: "Which sorting algorithm has the best average-case time complexity?",
            options: [
                "Quick Sort",
                "Bubble Sort",
                "Selection Sort",
                "Insertion Sort"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of a database index?",
            options: [
                "To speed up data retrieval",
                "To encrypt data",
                "To compress data",
                "To backup data"
            ],
            correct: 0
        },
        {
            question: "What is a REST API?",
            options: [
                "An API that uses HTTP requests to perform CRUD operations",
                "A database management system",
                "A type of programming language",
                "A security protocol"
            ],
            correct: 0
        },
        {
            question: "What is recursion in programming?",
            options: [
                "A function calling itself to solve a problem",
                "A type of loop",
                "A variable declaration",
                "A memory allocation method"
            ],
            correct: 0
        },
        {
            question: "Which of the following is NOT an OOP concept?",
            options: [
                "Iteration",
                "Encapsulation",
                "Inheritance",
                "Polymorphism"
            ],
            correct: 0
        },
        {
            question: "What is the difference between == and === in JavaScript?",
            options: [
                "=== checks type and value, == only checks value",
                "== checks type and value, === only checks value",
                "There is no difference",
                "=== is faster than =="
            ],
            correct: 0
        },
        {
            question: "What is a middleware in web development?",
            options: [
                "Software that processes requests before they reach the main handler",
                "A type of database",
                "A front-end framework",
                "A security certificate"
            ],
            correct: 0
        },
        {
            question: "What is caching used for?",
            options: [
                "To temporarily store data for faster access",
                "To permanently store data",
                "To encrypt data",
                "To backup data"
            ],
            correct: 0
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Sequential Query Language",
                "Standard Query Language",
                "System Query Language"
            ],
            correct: 0
        },
        {
            question: "What is a database transaction?",
            options: [
                "A series of operations that must all succeed or all fail together",
                "A single database operation",
                "A backup procedure",
                "A user account"
            ],
            correct: 0
        },
        {
            question: "Which design pattern is used to create objects without specifying classes?",
            options: [
                "Factory Pattern",
                "Singleton Pattern",
                "Observer Pattern",
                "Strategy Pattern"
            ],
            correct: 0
        },
        {
            question: "What is version control primarily used for?",
            options: [
                "Managing code changes and collaboration",
                "Improving code speed",
                "Reducing code size",
                "Creating backups only"
            ],
            correct: 0
        }
    ],

    communication: [
        {
            question: "What is the most important element in effective communication?",
            options: [
                "Clear understanding of the message",
                "Using complex vocabulary",
                "Long written documents",
                "Formal language"
            ],
            correct: 0
        },
        {
            question: "What does active listening involve?",
            options: [
                "Fully concentrating on what the speaker is saying",
                "Planning your response while listening",
                "Checking your phone while listening",
                "Interrupting to share your ideas"
            ],
            correct: 0
        },
        {
            question: "Which of the following is a barrier to effective communication?",
            options: [
                "Lack of attention",
                "Clear language",
                "Feedback",
                "Empathy"
            ],
            correct: 0
        },
        {
            question: "What is the role of non-verbal communication?",
            options: [
                "To reinforce and emphasize spoken messages",
                "To replace verbal communication",
                "To confuse the audience",
                "To shorten meetings"
            ],
            correct: 0
        },
        {
            question: "How should you handle a conflict in a professional setting?",
            options: [
                "Address it calmly and seek to understand both perspectives",
                "Avoid discussing it",
                "Take it personally",
                "Escalate immediately"
            ],
            correct: 0
        },
        {
            question: "What is the purpose of feedback in communication?",
            options: [
                "To help improve understanding and performance",
                "To criticize someone",
                "To show authority",
                "To end a conversation"
            ],
            correct: 0
        },
        {
            question: "Which communication style is most effective in teams?",
            options: [
                "Open, respectful, and collaborative",
                "Authoritarian",
                "Passive",
                "Aggressive"
            ],
            correct: 0
        },
        {
            question: "What is the benefit of asking clarifying questions?",
            options: [
                "To ensure you understand the message correctly",
                "To show you're not listening",
                "To waste time",
                "To argue with the speaker"
            ],
            correct: 0
        }
    ],

    'general-knowledge': [
        {
            question: "What is the capital of France?",
            options: [
                "Paris",
                "Lyon",
                "Marseille",
                "Toulouse"
            ],
            correct: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Mars",
                "Venus",
                "Jupiter",
                "Saturn"
            ],
            correct: 0
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: [
                "William Shakespeare",
                "Jane Austen",
                "Charles Dickens",
                "Mark Twain"
            ],
            correct: 0
        },
        {
            question: "What is the largest ocean on Earth?",
            options: [
                "Pacific Ocean",
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean"
            ],
            correct: 0
        },
        {
            question: "In what year did World War II end?",
            options: [
                "1945",
                "1944",
                "1946",
                "1943"
            ],
            correct: 0
        },
        {
            question: "What is the primary ingredient in guacamole?",
            options: [
                "Avocado",
                "Tomato",
                "Pepper",
                "Onion"
            ],
            correct: 0
        },
        {
            question: "Which element has the chemical symbol 'Au'?",
            options: [
                "Gold",
                "Silver",
                "Aluminum",
                "Argon"
            ],
            correct: 0
        },
        {
            question: "What is the smallest prime number?",
            options: [
                "2",
                "1",
                "3",
                "5"
            ],
            correct: 0
        },
        {
            question: "How many continents are there?",
            options: [
                "7",
                "5",
                "6",
                "8"
            ],
            correct: 0
        },
        {
            question: "What is the speed of light?",
            options: [
                "299,792 km/s",
                "150,000 km/s",
                "200,000 km/s",
                "100,000 km/s"
            ],
            correct: 0
        },
        {
            question: "Who invented the telephone?",
            options: [
                "Alexander Graham Bell",
                "Thomas Edison",
                "Nikola Tesla",
                "Albert Einstein"
            ],
            correct: 0
        },
        {
            question: "What is the currency of Japan?",
            options: [
                "Japanese Yen",
                "Japanese Dollar",
                "Japanese Pound",
                "Japanese Euro"
            ],
            correct: 0
        }
    ],

    ethics: [
        {
            question: "What should you do if you notice a colleague taking credit for your work?",
            options: [
                "Discuss it professionally with them first, then escalate if needed",
                "Publicly expose them in a meeting",
                "Quit your job",
                "Post about it on social media"
            ],
            correct: 0
        },
        {
            question: "What is the right approach when you make a mistake at work?",
            options: [
                "Acknowledge it, inform your supervisor, and work on a solution",
                "Hide it and hope no one notices",
                "Blame someone else",
                "Resign immediately"
            ],
            correct: 0
        },
        {
            question: "How should you handle confidential company information?",
            options: [
                "Keep it confidential and only share with authorized people",
                "Share it with friends and family",
                "Post it on social media",
                "Use it for personal advantage"
            ],
            correct: 0
        },
        {
            question: "What is the ethical way to compete with colleagues?",
            options: [
                "Compete fairly and focus on your own growth",
                "Spread rumors about them",
                "Sabotage their work",
                "Manipulate the scoring system"
            ],
            correct: 0
        },
        {
            question: "What should you do if asked to do something unethical?",
            options: [
                "Politely refuse and report it to appropriate channels",
                "Do it without questioning",
                "Tell everyone about it immediately",
                "Blackmail the person asking"
            ],
            correct: 0
        },
        {
            question: "How should you treat colleagues from different backgrounds?",
            options: [
                "With equal respect and dignity",
                "With suspicion",
                "With preferential treatment",
                "With indifference"
            ],
            correct: 0
        },
        {
            question: "What is the importance of honesty in professional relationships?",
            options: [
                "It builds trust and credibility",
                "It makes you vulnerable",
                "It's overrated",
                "It doesn't matter"
            ],
            correct: 0
        },
        {
            question: "How should you respond to discrimination in the workplace?",
            options: [
                "Report it to HR and support the affected person",
                "Ignore it",
                "Participate in it",
                "Keep it secret"
            ],
            correct: 0
        },
        {
            question: "What is the right way to handle feedback?",
            options: [
                "Listen openly and use it constructively",
                "Take it personally and get defensive",
                "Ignore it completely",
                "Retaliate against the person giving feedback"
            ],
            correct: 0
        },
        {
            question: "How should you balance personal interests with company interests?",
            options: [
                "Prioritize company interests while maintaining personal integrity",
                "Always prioritize personal interests",
                "Ignore company interests",
                "Create conflicts between the two"
            ],
            correct: 0
        }
    ],

    values: [
        {
            question: "Which value is most important for a successful team?",
            options: [
                "Trust and accountability",
                "Individual recognition only",
                "Competition over collaboration",
                "Minimal communication"
            ],
            correct: 0
        },
        {
            question: "What does integrity mean in a professional context?",
            options: [
                "Acting ethically and honestly in all situations",
                "Being dishonest when beneficial",
                "Following rules only when watched",
                "Prioritizing profit over principles"
            ],
            correct: 0
        },
        {
            question: "How should continuous learning be valued?",
            options: [
                "As essential for personal and professional growth",
                "As a waste of time",
                "Only when required by management",
                "Not at all"
            ],
            correct: 0
        },
        {
            question: "What is the value of respecting diversity?",
            options: [
                "It brings different perspectives and improves innovation",
                "It's legally required but not important",
                "It creates conflict",
                "It reduces efficiency"
            ],
            correct: 0
        },
        {
            question: "How should failure be viewed?",
            options: [
                "As a learning opportunity to grow and improve",
                "As something to hide",
                "As a personal weakness",
                "As a reason to quit"
            ],
            correct: 0
        },
        {
            question: "What does responsibility mean?",
            options: [
                "Being accountable for your actions and decisions",
                "Blaming others for mistakes",
                "Avoiding difficult tasks",
                "Delegating everything"
            ],
            correct: 0
        },
        {
            question: "How should you value time in professional settings?",
            options: [
                "Highly - being punctual and respecting others' time",
                "Not important",
                "Only for important people",
                "Flexible and irrelevant"
            ],
            correct: 0
        },
        {
            question: "What is the value of empathy in leadership?",
            options: [
                "It helps understand team members' needs and builds loyalty",
                "It makes leaders weak",
                "It's not relevant",
                "It reduces productivity"
            ],
            correct: 0
        }
    ]
};

// Helper to retrieve custom questions added by admin
function getCustomQuestions() {
    try {
        return JSON.parse(localStorage.getItem('skillprep_custom_questions') || '[]');
    } catch (e) {
        return [];
    }
}

function saveCustomQuestionToDB(qData) {
    try {
        const list = getCustomQuestions();
        const newQuestion = {
            id: 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            category: qData.category,
            topic: qData.topic || 'General',
            question: qData.question,
            options: qData.options,
            correct: parseInt(qData.correct),
            createdAt: new Date().toISOString()
        };
        list.push(newQuestion);
        localStorage.setItem('skillprep_custom_questions', JSON.stringify(list));
        return newQuestion;
    } catch (e) {
        console.error('Failed to save question:', e);
        return null;
    }
}

function deleteCustomQuestion(questionId) {
    try {
        const list = getCustomQuestions().filter(q => q.id !== questionId);
        localStorage.setItem('skillprep_custom_questions', JSON.stringify(list));
        return true;
    } catch (e) {
        return false;
    }
}

function getQuestionsByModule(module) {
    const base = QUESTIONS[module] || [];
    const customList = getCustomQuestions();
    
    const modNorm = (module || '').toLowerCase().trim();
    const filteredCustom = customList.filter(q => {
        const catNorm = (q.category || '').toLowerCase().trim();
        if (catNorm === modNorm) return true;
        if (catNorm === 'aptitude' && modNorm === 'aptitude') return true;
        if (catNorm === 'technical' && (modNorm === 'technical' || modNorm === 'technical-practice')) return true;
        if (catNorm === 'coding' && (modNorm === 'coding' || modNorm === 'programming')) return true;
        if (catNorm === 'communication' && modNorm === 'communication') return true;
        return false;
    });

    return [...base, ...filteredCustom];
}

function getQuestionsByTopic(category, topic) {
    const allForCat = getQuestionsByModule(category);
    if (!topic || topic === 'all') return allForCat;
    const topNorm = topic.toLowerCase().trim();
    return allForCat.filter(q => (q.topic || '').toLowerCase().trim() === topNorm);
}