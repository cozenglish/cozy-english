/**
 * Language Learning Application
 * A modern, accessible app for learning English grammar and vocabulary with Tajik translations
 * 
 * Features:
 * - 4 main entry points (2 test types, 2 reference types)
 * - Fixed test functionality with bug fixes
 * - Tajik translations in Latin transcription
 * - LocalStorage persistence
 * - Full accessibility support
 * 
 * Bug fixes implemented:
 * 1. Event handling bug - removed reliance on global `event` object
 * 2. Double scoring bug - added scoreCounted flag
 * 3. Fill-in answer normalization - trim, case-insensitive, whitespace collapse
 * 4. Progress tracking fixes
 * 5. Test state persistence
 */

// Application State
const AppState = {
    currentSection: 'home',
    currentTestType: null, // 'grammar' or 'vocabulary'
    currentTestMode: null, // 'overall' or 'topic'
    currentTopicId: null,
    
    testState: {
        active: false,
        questions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        score: 0,
        startTime: null,
        endTime: null,
        paused: false
    },
    
    userProgress: {
        grammarScores: {},
        vocabularyScores: {},
        completedTests: []
    }
};

// DOM Elements Cache
const DOM = {
    // Sections
    sections: {},
    
    // Buttons
    buttons: {},
    
    // Forms and inputs
    inputs: {},
    
    // Containers
    containers: {},
    
    // Initialize all DOM references
    init: function() {
        // Cache all sections
        this.sections = {
            home: document.getElementById('home-section'),
            testSelection: document.getElementById('test-selection-section'),
            test: document.getElementById('test-section'),
            results: document.getElementById('results-section'),
            grammarReference: document.getElementById('grammar-reference-section'),
            grammarTopicDetail: document.getElementById('grammar-topic-detail-section'),
            vocabularyReference: document.getElementById('vocabulary-reference-section'),
            vocabularyTopicDetail: document.getElementById('vocabulary-topic-detail-section')
        };
        
        // Cache buttons
        this.buttons = {
            // Navigation
            navButtons: document.querySelectorAll('.nav-btn'),
            backButtons: document.querySelectorAll('.back-btn'),
            
            // Home action buttons
            grammarTest: document.getElementById('grammar-test-btn'),
            vocabularyTest: document.getElementById('vocabulary-test-btn'),
            grammarReference: document.getElementById('grammar-reference-btn'),
            vocabularyReference: document.getElementById('vocabulary-reference-btn'),
            
            // Test selection
            startOverallTest: document.querySelector('[data-test-type="overall"]'),
            startTopicTest: document.getElementById('start-topic-test'),
            
            // Test controls
            prevQuestion: document.getElementById('prev-question-btn'),
            nextQuestion: document.getElementById('next-question-btn'),
            skipQuestion: document.getElementById('skip-question-btn'),
            pauseTest: document.getElementById('pause-test-btn'),
            
            // Results
            reviewTest: document.getElementById('review-test-btn'),
            newTest: document.getElementById('new-test-btn'),
            exportResults: document.getElementById('export-results-btn'),
            
            // Practice topic
            practiceGrammarTopic: document.getElementById('practice-grammar-topic-btn'),
            practiceVocabularyTopic: document.getElementById('practice-vocabulary-topic-btn'),
            
            // Reset
            resetProgress: document.getElementById('reset-progress-btn')
        };
        
        // Cache inputs
        this.inputs = {
            topicSelect: document.getElementById('topic-select'),
            grammarSearch: document.getElementById('grammar-search'),
            vocabularySearch: document.getElementById('vocabulary-search')
        };
        
        // Cache containers
        this.containers = {
            grammarTopicsGrid: document.getElementById('grammar-topics-grid'),
            vocabularyTopicsGrid: document.getElementById('vocabulary-topics-grid'),
            questionContainer: document.getElementById('question-container'),
            testFeedback: document.getElementById('test-feedback'),
            grammarExamples: document.getElementById('grammar-examples'),
            vocabularyWordsList: document.getElementById('vocabulary-words-list'),
            topicBreakdown: document.getElementById('topic-breakdown')
        };
        
        // Cache progress elements
        this.progress = {
            fill: document.getElementById('progress-fill'),
            text: document.getElementById('progress-text'),
            percent: document.getElementById('progress-percent'),
            indicator: document.getElementById('progress-indicator')
        };
        
        // Cache results elements
        this.results = {
            finalScore: document.getElementById('final-score'),
            correctCount: document.getElementById('correct-count'),
            incorrectCount: document.getElementById('incorrect-count'),
            skippedCount: document.getElementById('skipped-count'),
            timeTaken: document.getElementById('time-taken')
        };
        
        // Cache topic title elements
        this.topicTitles = {
            grammar: document.getElementById('grammar-topic-title'),
            vocabulary: document.getElementById('vocabulary-topic-title'),
            testType: document.getElementById('test-type-title'),
            currentTopicName: document.getElementById('current-topic-name'),
            currentTestType: document.getElementById('current-test-type')
        };
    }
};

// Data Models
const DataStore = {
    grammarTopics: [],
    vocabularyTopics: [],
    
    // Initialize with sample data (full data would be loaded from a separate file)
    init: function() {
        // Grammar Topics Data
        this.grammarTopics = [
            {
                id: 1,
                title: "Personal Pronouns",
                description: "I, you, he, she, it, we, they",
                explanation: "Personal pronouns replace nouns used as subjects of sentences.",
                form: "Subject pronoun + verb: I am, you are, he is, she is, it is, we are, they are",
                keywords: ["I", "you", "he", "she", "it", "we", "they", "subject"],
                commonMistakes: [
                    { 
                        wrong: "Me am a student.", 
                        correct: "I am a student.", 
                        note: "Use 'I' as subject pronoun, not 'me'" 
                    },
                    { 
                        wrong: "Him is my friend.", 
                        correct: "He is my friend.", 
                        note: "Use 'he' as subject pronoun, not 'him'" 
                    }
                ],
                examples: [
                    { en: "I am a student.", tj: "Man talaba hastam." },
                    { en: "You are my friend.", tj: "Tu dusti mani." },
                    { en: "He is a teacher.", tj: "Vay muallim ast." },
                    { en: "She is from Dushanbe.", tj: "Vay az Dushanbe ast." },
                    { en: "It is a book.", tj: "In kitob ast." },
                    { en: "We are learning English.", tj: "Mo zaboni anglisiro meomuzem." },
                    { en: "They are students.", tj: "Onho talabahoyand." },
                    { en: "I and you are friends.", tj: "Man va tu duston hastem." },
                    { en: "He and she are siblings.", tj: "Vay va vay barodaru hohar hastand." },
                    { en: "We all are here.", tj: "Mo hama incho hastem." }
                ],
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        question: "___ am a student.",
                        options: ["I", "Me", "Myself"],
                        answer: "I",
                        explanation: "'I' is the correct subject pronoun."
                    },
                    {
                        id: 2,
                        type: "multiple-choice",
                        question: "___ is my brother.",
                        options: ["He", "Him", "His"],
                        answer: "He",
                        explanation: "'He' is the correct subject pronoun for male subjects."
                    },
                    {
                        id: 3,
                        type: "fill-in",
                        question: "Complete the sentence: ___ are learning English.",
                        answer: "We",
                        explanation: "'We' is the first person plural subject pronoun."
                    }
                ]
            },
            {
                id: 2,
                title: "Verb 'To Be' - Present",
                description: "am, is, are",
                explanation: "The verb 'to be' is used to describe states, qualities, or identities.",
                form: "Subject + am/is/are + complement",
                keywords: ["am", "is", "are", "present", "state", "identity"],
                commonMistakes: [
                    { 
                        wrong: "I is happy.", 
                        correct: "I am happy.", 
                        note: "Use 'am' with 'I'" 
                    },
                    { 
                        wrong: "They is students.", 
                        correct: "They are students.", 
                        note: "Use 'are' with plural subjects" 
                    }
                ],
                examples: [
                    { en: "I am a teacher.", tj: "Man muallim hastam." },
                    { en: "You are my friend.", tj: "Tu dusti mani." },
                    { en: "He is from Tajikistan.", tj: "Vay az Tojikiston ast." },
                    { en: "She is intelligent.", tj: "Vay zebo ast." },
                    { en: "It is cold today.", tj: "Imruz havzo sard ast." },
                    { en: "We are here.", tj: "Mo incho hastem." },
                    { en: "They are at home.", tj: "Onho dar khona hastand." },
                    { en: "The book is on the table.", tj: "Kitob ruyi miz ast." },
                    { en: "My parents are doctors.", tj: "Padaru modaram tabib hastand." },
                    { en: "This is a pen.", tj: "In qalam ast." }
                ],
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        question: "She ___ a doctor.",
                        options: ["am", "is", "are"],
                        answer: "is",
                        explanation: "Use 'is' with third person singular subjects."
                    },
                    {
                        id: 2,
                        type: "multiple-choice",
                        question: "We ___ students.",
                        options: ["am", "is", "are"],
                        answer: "are",
                        explanation: "Use 'are' with first person plural subjects."
                    },
                    {
                        id: 3,
                        type: "fill-in",
                        question: "Complete: I ___ happy today.",
                        answer: "am",
                        explanation: "Use 'am' with the subject 'I'."
                    }
                ]
            }
            // Note: In a full implementation, all 23 grammar topics would be included here
        ];
        
        // Vocabulary Topics Data
        this.vocabularyTopics = [
            {
                id: 1,
                title: "Personal Pronouns",
                description: "I, you, he, she, it, we, they",
                words: [
                    { en: "I", tj: "man", example_en: "I am here.", example_tj: "Man incho hastam." },
                    { en: "you (singular)", tj: "tu / shumo", example_en: "You are kind.", example_tj: "Tu mehru bon hasti." },
                    { en: "he", tj: "vay", example_en: "He is my brother.", example_tj: "Vay barodari man ast." },
                    { en: "she", tj: "vay", example_en: "She is a teacher.", example_tj: "Vay muallim ast." },
                    { en: "it", tj: "in / on", example_en: "It is a book.", example_tj: "In kitob ast." },
                    { en: "we", tj: "mo", example_en: "We are friends.", example_tj: "Mo duston hastem." },
                    { en: "they", tj: "onho", example_en: "They are students.", example_tj: "Onho talabahoyand." },
                    { en: "me", tj: "manro", example_en: "Give it to me.", example_tj: "Onro ba man dihed." },
                    { en: "you (object)", tj: "turo / shumorо", example_en: "I see you.", example_tj: "Man turo mebinam." },
                    { en: "us", tj: "moro", example_en: "Help us please.", example_tj: "Lutfan moro yori kuned." }
                ],
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        question: "What is the Tajik word for 'I'?",
                        options: ["tu", "man", "vay", "mo"],
                        answer: "man",
                        explanation: "'man' means 'I' in Tajik."
                    },
                    {
                        id: 2,
                        type: "multiple-choice",
                        question: "What does 'onho' mean in English?",
                        options: ["we", "they", "you", "he"],
                        answer: "they",
                        explanation: "'onho' is the plural third person pronoun."
                    },
                    {
                        id: 3,
                        type: "fill-in",
                        question: "Translate to English: 'Mo duston hastem.'",
                        answer: "We are friends",
                        explanation: "'mo' = we, 'doston' = friends, 'hastem' = are"
                    }
                ]
            },
            {
                id: 2,
                title: "Verb 'To Be' - Present",
                description: "am, is, are",
                words: [
                    { en: "am", tj: "hastam", example_en: "I am happy.", example_tj: "Man khush hastam." },
                    { en: "is", tj: "ast / hast", example_en: "He is here.", example_tj: "Vay incho ast." },
                    { en: "are", tj: "hasted / hastand", example_en: "You are kind.", example_tj: "Tu mehru bon hasti." },
                    { en: "to be", tj: "budan", example_en: "To be or not to be.", example_tj: "Budan yoki nabudan." },
                    { en: "being", tj: "budan", example_en: "Human being.", example_tj: "Odami budan." },
                    { en: "been", tj: "buda", example_en: "I have been there.", example_tj: "Man oncho budaam." },
                    { en: "exist", tj: "vuqud doshtan", example_en: "Do you exist?", example_tj: "Oyo tu vuqud dori?" },
                    { en: "become", tj: "shudan", example_en: "I want to become a doctor.", example_tj: "Man mekhoham tabib shavam." }
                ],
                questions: [
                    {
                        id: 1,
                        type: "multiple-choice",
                        question: "What is the Tajik translation for 'am'?",
                        options: ["ast", "hastam", "hastand", "budan"],
                        answer: "hastam",
                        explanation: "'hastam' is used with 'I' (man)."
                    },
                    {
                        id: 2,
                        type: "multiple-choice",
                        question: "Which Tajik word means 'are' for plural?",
                        options: ["ast", "hastam", "hastand", "hasti"],
                        answer: "hastand",
                        explanation: "'hastand' is used with 'they' (onho)."
                    },
                    {
                        id: 3,
                        type: "fill-in",
                        question: "Translate: 'She is a teacher.'",
                        answer: "Vay muallim ast",
                        explanation: "'vay' = she, 'muallim' = teacher, 'ast' = is"
                    }
                ]
            }
            // Note: In a full implementation, all 23 vocabulary topics would be included here
        ];
        
        // Add more topics as needed following the same structure
        // For brevity, only 2 topics are shown here
    },
    
    // Get all grammar topics
    getAllGrammarTopics: function() {
        return this.grammarTopics;
    },
    
    // Get all vocabulary topics
    getAllVocabularyTopics: function() {
        return this.vocabularyTopics;
    },
    
    // Get grammar topic by ID
    getGrammarTopic: function(id) {
        return this.grammarTopics.find(topic => topic.id === id);
    },
    
    // Get vocabulary topic by ID
    getVocabularyTopic: function(id) {
        return this.vocabularyTopics.find(topic => topic.id === id);
    },
    
    // Get test questions for a grammar topic
    getGrammarTestQuestions: function(topicId = null, count = 10) {
        let questions = [];
        
        if (topicId) {
            const topic = this.getGrammarTopic(topicId);
            if (topic && topic.questions) {
                questions = [...topic.questions];
            }
        } else {
            // Overall test - get questions from all topics
            this.grammarTopics.forEach(topic => {
                if (topic.questions) {
                    questions = questions.concat(topic.questions);
                }
            });
        }
        
        // Shuffle questions
        questions = this.shuffleArray(questions);
        
        // Limit to count
        if (count && questions.length > count) {
            questions = questions.slice(0, count);
        }
        
        return questions;
    },
    
    // Get test questions for a vocabulary topic
    getVocabularyTestQuestions: function(topicId = null, count = 10) {
        let questions = [];
        
        if (topicId) {
            const topic = this.getVocabularyTopic(topicId);
            if (topic && topic.questions) {
                questions = [...topic.questions];
            }
        } else {
            // Overall test - get questions from all topics
            this.vocabularyTopics.forEach(topic => {
                if (topic.questions) {
                    questions = questions.concat(topic.questions);
                }
            });
        }
        
        // Shuffle questions
        questions = this.shuffleArray(questions);
        
        // Limit to count
        if (count && questions.length > count) {
            questions = questions.slice(0, count);
        }
        
        return questions;
    },
    
    // Utility function to shuffle array
    shuffleArray: function(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
};

// Test Manager
const TestManager = {
    // Initialize a new test
    startTest: function(type, mode, topicId = null) {
        AppState.currentTestType = type;
        AppState.currentTestMode = mode;
        AppState.currentTopicId = topicId;
        
        // Get questions based on test parameters
        let questions = [];
        if (type === 'grammar') {
            questions = DataStore.getGrammarTestQuestions(
                topicId, 
                mode === 'overall' ? 30 : 10
            );
        } else {
            questions = DataStore.getVocabularyTestQuestions(
                topicId,
                mode === 'overall' ? 30 : 10
            );
        }
        
        // Initialize test state
        AppState.testState = {
            active: true,
            questions: questions,
            currentQuestionIndex: 0,
            userAnswers: new Array(questions.length).fill(null),
            score: 0,
            startTime: Date.now(),
            endTime: null,
            paused: false
        };
        
        // Set topic name for display
        if (topicId) {
            const topic = type === 'grammar' 
                ? DataStore.getGrammarTopic(topicId)
                : DataStore.getVocabularyTopic(topicId);
            
            if (topic) {
                DOM.topicTitles.currentTopicName.textContent = topic.title;
            }
        } else {
            DOM.topicTitles.currentTopicName.textContent = 'Overall Test';
        }
        
        // Set test type for display
        DOM.topicTitles.currentTestType.textContent = 
            type === 'grammar' ? 'Grammar' : 'Vocabulary';
        
        // Save test state to localStorage
        this.saveTestState();
        
        // Show test section
        UI.showSection('test');
        
        // Display first question
        this.displayCurrentQuestion();
    },
    
    // Display current question
    displayCurrentQuestion: function() {
        const state = AppState.testState;
        const question = state.questions[state.currentQuestionIndex];
        
        if (!question) return;
        
        // Update progress
        this.updateProgress();
        
        // Clear previous question
        DOM.containers.questionContainer.innerHTML = '';
        DOM.containers.testFeedback.innerHTML = '';
        DOM.containers.testFeedback.className = 'test-feedback';
        DOM.containers.testFeedback.style.display = 'none';
        
        // Create question HTML
        const questionHTML = document.createElement('div');
        
        // Question type badge
        const typeBadge = document.createElement('div');
        typeBadge.className = 'question-type';
        typeBadge.textContent = question.type === 'multiple-choice' ? 'Multiple Choice' : 'Fill in the Blank';
        questionHTML.appendChild(typeBadge);
        
        // Question text
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = question.question;
        questionHTML.appendChild(questionText);
        
        // Options or input based on question type
        if (question.type === 'multiple-choice') {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            
            question.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = option;
                optionBtn.type = 'button';
                optionBtn.setAttribute('data-option-index', index);
                
                // Check if this option was previously selected
                const userAnswer = state.userAnswers[state.currentQuestionIndex];
                if (userAnswer && userAnswer.selectedOption === option) {
                    optionBtn.classList.add('selected');
                    
                    // If answer was already checked, show correct/incorrect
                    if (userAnswer.checked) {
                        if (userAnswer.isCorrect) {
                            optionBtn.classList.add('correct');
                        } else {
                            optionBtn.classList.add('incorrect');
                        }
                    }
                }
                
                // Add click event listener with explicit event parameter
                optionBtn.addEventListener('click', (e) => this.selectOption(option, e));
                optionsContainer.appendChild(optionBtn);
            });
            
            questionHTML.appendChild(optionsContainer);
        } else {
            // Fill-in question
            const fillInContainer = document.createElement('div');
            fillInContainer.className = 'fill-in-container';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'fill-in-input';
            input.placeholder = 'Type your answer here...';
            
            // Restore previous answer if exists
            const userAnswer = state.userAnswers[state.currentQuestionIndex];
            if (userAnswer && userAnswer.answer) {
                input.value = userAnswer.answer;
                
                // If answer was already checked, show correct/incorrect
                if (userAnswer.checked) {
                    if (userAnswer.isCorrect) {
                        input.classList.add('correct');
                    } else {
                        input.classList.add('incorrect');
                    }
                }
            }
            
            input.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    this.submitAnswer(input.value);
                }
            });
            
            const submitBtn = document.createElement('button');
            submitBtn.className = 'btn btn-primary';
            submitBtn.textContent = 'Submit Answer';
            submitBtn.type = 'button';
            submitBtn.addEventListener('click', () => this.submitAnswer(input.value));
            
            fillInContainer.appendChild(input);
            fillInContainer.appendChild(submitBtn);
            questionHTML.appendChild(fillInContainer);
        }
        
        // Add question HTML to container
        DOM.containers.questionContainer.appendChild(questionHTML);
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update progress indicator in header
        this.updateHeaderProgress();
    },
    
    // Select an option for multiple-choice question
    selectOption: function(option, event) {
        const state = AppState.testState;
        const question = state.questions[state.currentQuestionIndex];
        
        // Don't allow selection if answer already checked
        const existingAnswer = state.userAnswers[state.currentQuestionIndex];
        if (existingAnswer && existingAnswer.checked) {
            return;
        }
        
        // Store user's answer
        state.userAnswers[state.currentQuestionIndex] = {
            selectedOption: option,
            checked: false,
            isCorrect: false,
            scoreCounted: false // Flag to prevent double counting - BUG FIX
        };
        
        // Update UI to show selected option
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.textContent === option) {
                btn.classList.add('selected');
            }
        });
        
        // Enable next button
        DOM.buttons.nextQuestion.disabled = false;
        
        // Auto-check answer after selection (optional, could be manual)
        // setTimeout(() => this.checkAnswer(), 500);
        
        // Save state
        this.saveTestState();
    },
    
    // Submit answer for fill-in question
    submitAnswer: function(answer) {
        const state = AppState.testState;
        const question = state.questions[state.currentQuestionIndex];
        
        // Don't allow submission if answer already checked
        const existingAnswer = state.userAnswers[state.currentQuestionIndex];
        if (existingAnswer && existingAnswer.checked) {
            return;
        }
        
        // Normalize answer - BUG FIX: trim, lowercase, collapse whitespace
        const normalizedAnswer = this.normalizeAnswer(answer);
        const normalizedCorrectAnswer = this.normalizeAnswer(question.answer);
        
        // Store user's answer
        state.userAnswers[state.currentQuestionIndex] = {
            answer: answer,
            normalizedAnswer: normalizedAnswer,
            checked: true,
            isCorrect: normalizedAnswer === normalizedCorrectAnswer,
            scoreCounted: false
        };
        
        // Check answer immediately for fill-in questions
        this.checkAnswer();
    },
    
    // Normalize answer for comparison - BUG FIX
    normalizeAnswer: function(answer) {
        if (!answer) return '';
        
        return answer
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, ' ') // Collapse multiple spaces to single space
            .replace(/[.,!?;:]/g, ''); // Remove punctuation
    },
    
    // Check current answer
    checkAnswer: function() {
        const state = AppState.testState;
        const questionIndex = state.currentQuestionIndex;
        const question = state.questions[questionIndex];
        const userAnswer = state.userAnswers[questionIndex];
        
        if (!userAnswer) return;
        
        // Mark as checked
        userAnswer.checked = true;
        
        // Determine if answer is correct
        if (question.type === 'multiple-choice') {
            userAnswer.isCorrect = userAnswer.selectedOption === question.answer;
        } else {
            // For fill-in, compare normalized answers
            const normalizedUserAnswer = this.normalizeAnswer(userAnswer.answer || '');
            const normalizedCorrectAnswer = this.normalizeAnswer(question.answer);
            userAnswer.isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
        }
        
        // Update score if correct and not already counted - BUG FIX
        if (userAnswer.isCorrect && !userAnswer.scoreCounted) {
            state.score++;
            userAnswer.scoreCounted = true;
        }
        
        // Update UI to show correct/incorrect
        this.updateQuestionUI();
        
        // Show feedback
        this.showFeedback(userAnswer.isCorrect, question.explanation);
        
        // Enable next button
        DOM.buttons.nextQuestion.disabled = false;
        
        // Save state
        this.saveTestState();
        
        // Update progress
        this.updateProgress();
        this.updateHeaderProgress();
    },
    
    // Update question UI after checking answer
    updateQuestionUI: function() {
        const state = AppState.testState;
        const question = state.questions[state.currentQuestionIndex];
        const userAnswer = state.userAnswers[state.currentQuestionIndex];
        
        if (!userAnswer || !userAnswer.checked) return;
        
        if (question.type === 'multiple-choice') {
            const optionButtons = document.querySelectorAll('.option-btn');
            optionButtons.forEach(btn => {
                if (btn.textContent === question.answer) {
                    btn.classList.add('correct');
                }
                if (btn.textContent === userAnswer.selectedOption && !userAnswer.isCorrect) {
                    btn.classList.add('incorrect');
                }
                btn.disabled = true;
            });
        } else {
            const input = document.querySelector('.fill-in-input');
            if (input) {
                if (userAnswer.isCorrect) {
                    input.classList.add('correct');
                } else {
                    input.classList.add('incorrect');
                }
                input.disabled = true;
            }
            
            const submitBtn = document.querySelector('.fill-in-container .btn');
            if (submitBtn) {
                submitBtn.disabled = true;
            }
        }
    },
    
    // Show feedback for answer
    showFeedback: function(isCorrect, explanation) {
        DOM.containers.testFeedback.style.display = 'block';
        DOM.containers.testFeedback.className = `test-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        
        const icon = isCorrect ? '✓' : '✗';
        const title = isCorrect ? 'Correct!' : 'Incorrect';
        
        DOM.containers.testFeedback.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 10px;">
                <div style="font-size: 1.5rem;">${icon}</div>
                <div>
                    <strong>${title}</strong>
                    ${explanation ? `<p style="margin-top: 5px;">${explanation}</p>` : ''}
                </div>
            </div>
        `;
        
        // Announce feedback for screen readers
        DOM.containers.testFeedback.setAttribute('aria-live', 'assertive');
    },
    
    // Move to next question
    nextQuestion: function() {
        const state = AppState.testState;
        
        // Check if current question has been answered
        const currentAnswer = state.userAnswers[state.currentQuestionIndex];
        if (!currentAnswer || !currentAnswer.checked) {
            // Optionally auto-check if selection was made
            if (currentAnswer && currentAnswer.selectedOption) {
                this.checkAnswer();
                return;
            }
            return;
        }
        
        // Move to next question
        if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex++;
            this.displayCurrentQuestion();
            
            // Save state
            this.saveTestState();
        } else {
            // End of test
            this.endTest();
        }
    },
    
    // Move to previous question
    previousQuestion: function() {
        const state = AppState.testState;
        
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            this.displayCurrentQuestion();
            
            // Save state
            this.saveTestState();
        }
    },
    
    // Skip current question
    skipQuestion: function() {
        const state = AppState.testState;
        
        // Mark as skipped
        state.userAnswers[state.currentQuestionIndex] = {
            skipped: true,
            checked: true,
            isCorrect: false,
            scoreCounted: false
        };
        
        // Move to next question
        if (state.currentQuestionIndex < state.questions.length - 1) {
            state.currentQuestionIndex++;
            this.displayCurrentQuestion();
        } else {
            this.endTest();
        }
        
        // Save state
        this.saveTestState();
    },
    
    // Update navigation buttons state
    updateNavigationButtons: function() {
        const state = AppState.testState;
        
        // Previous button
        DOM.buttons.prevQuestion.disabled = state.currentQuestionIndex === 0;
        
        // Next button - disabled until current question is answered
        const currentAnswer = state.userAnswers[state.currentQuestionIndex];
        const isAnswered = currentAnswer && currentAnswer.checked;
        DOM.buttons.nextQuestion.disabled = !isAnswered;
        
        // Update next button text for last question
        if (state.currentQuestionIndex === state.questions.length - 1) {
            DOM.buttons.nextQuestion.textContent = 'Finish Test';
            DOM.buttons.nextQuestion.innerHTML = 'Finish Test <i class="fas fa-flag-checkered" aria-hidden="true"></i>';
        } else {
            DOM.buttons.nextQuestion.textContent = 'Next';
            DOM.buttons.nextQuestion.innerHTML = 'Next <i class="fas fa-chevron-right" aria-hidden="true"></i>';
        }
    },
    
    // Update progress display
    updateProgress: function() {
        const state = AppState.testState;
        const totalQuestions = state.questions.length;
        const currentQuestion = state.currentQuestionIndex + 1;
        
        // Calculate progress percentage
        const answeredQuestions = state.userAnswers.filter(a => a && a.checked).length;
        const progressPercent = Math.round((currentQuestion / totalQuestions) * 100);
        
        // Update progress bar
        DOM.progress.fill.style.width = `${progressPercent}%`;
        
        // Update progress text - BUG FIX: Show both current position and answered count
        DOM.progress.text.textContent = 
            `Question ${currentQuestion} of ${totalQuestions} (${answeredQuestions} answered)`;
        DOM.progress.percent.textContent = `${progressPercent}%`;
        
        // Update ARIA attributes
        DOM.progress.fill.parentElement.setAttribute('aria-valuenow', progressPercent);
    },
    
    // Update progress indicator in header
    updateHeaderProgress: function() {
        const state = AppState.testState;
        if (!state.active) return;
        
        const totalQuestions = state.questions.length;
        const answeredQuestions = state.userAnswers.filter(a => a && a.checked).length;
        const score = state.score;
        
        DOM.progress.indicator.innerHTML = `
            <span>Test in progress: ${answeredQuestions}/${totalQuestions} answered • Score: ${score}/${totalQuestions}</span>
        `;
        DOM.progress.indicator.style.display = 'block';
    },
    
    // End test and show results
    endTest: function() {
        const state = AppState.testState;
        
        // Mark end time
        state.endTime = Date.now();
        state.active = false;
        
        // Calculate final score
        const totalQuestions = state.questions.length;
        const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
        const incorrectAnswers = state.userAnswers.filter(a => a && a.checked && !a.isCorrect).length;
        const skippedAnswers = state.userAnswers.filter(a => a && a.skipped).length;
        
        const scorePercentage = totalQuestions > 0 
            ? Math.round((correctAnswers / totalQuestions) * 100) 
            : 0;
        
        // Calculate time taken
        const timeTaken = state.endTime - state.startTime;
        const seconds = Math.floor(timeTaken / 1000);
        
        // Update results display
        DOM.results.finalScore.textContent = scorePercentage;
        DOM.results.correctCount.textContent = correctAnswers;
        DOM.results.incorrectCount.textContent = incorrectAnswers;
        DOM.results.skippedCount.textContent = skippedAnswers;
        DOM.results.timeTaken.textContent = seconds;
        
        // Generate topic breakdown
        this.generateTopicBreakdown();
        
        // Save progress to localStorage
        this.saveUserProgress(scorePercentage);
        
        // Clear test state from localStorage
        localStorage.removeItem('languageLearnerTestState');
        
        // Hide progress indicator
        DOM.progress.indicator.style.display = 'none';
        
        // Show results section
        UI.showSection('results');
    },
    
    // Generate topic performance breakdown
    generateTopicBreakdown: function() {
        const state = AppState.testState;
        const topicBreakdown = {};
        
        // Group questions by topic (simplified - in full app would track topic IDs)
        state.questions.forEach((question, index) => {
            const userAnswer = state.userAnswers[index];
            // This is simplified - in a full implementation, each question would have a topicId
            const topicName = 'Topic ' + Math.floor(index / 5 + 1); // Example grouping
            
            if (!topicBreakdown[topicName]) {
                topicBreakdown[topicName] = {
                    total: 0,
                    correct: 0
                };
            }
            
            topicBreakdown[topicName].total++;
            if (userAnswer && userAnswer.isCorrect) {
                topicBreakdown[topicName].correct++;
            }
        });
        
        // Generate HTML for topic breakdown
        let html = '<h3>Performance by Topic</h3>';
        html += '<div class="breakdown-list">';
        
        for (const [topicName, stats] of Object.entries(topicBreakdown)) {
            const percentage = Math.round((stats.correct / stats.total) * 100);
            
            html += `
                <div class="breakdown-item">
                    <div class="breakdown-topic">
                        <span>${topicName}</span>
                        <span>${stats.correct}/${stats.total}</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="width: ${percentage}%"></div>
                    </div>
                    <div class="breakdown-percentage">${percentage}%</div>
                </div>
            `;
        }
        
        html += '</div>';
        DOM.containers.topicBreakdown.innerHTML = html;
    },
    
    // Save user progress
    saveUserProgress: function(scorePercentage) {
        const progressKey = AppState.currentTestType === 'grammar' 
            ? 'grammarScores' 
            : 'vocabularyScores';
        
        const topicId = AppState.currentTopicId || 'overall';
        
        if (!AppState.userProgress[progressKey][topicId]) {
            AppState.userProgress[progressKey][topicId] = [];
        }
        
        AppState.userProgress[progressKey][topicId].push({
            score: scorePercentage,
            date: new Date().toISOString(),
            mode: AppState.currentTestMode
        });
        
        // Keep only last 10 scores
        if (AppState.userProgress[progressKey][topicId].length > 10) {
            AppState.userProgress[progressKey][topicId].shift();
        }
        
        // Save to localStorage
        localStorage.setItem('languageLearnerUserProgress', 
            JSON.stringify(AppState.userProgress));
    },
    
    // Save test state to localStorage
    saveTestState: function() {
        const saveData = {
            testState: AppState.testState,
            currentTestType: AppState.currentTestType,
            currentTestMode: AppState.currentTestMode,
            currentTopicId: AppState.currentTopicId,
            timestamp: Date.now()
        };
        
        localStorage.setItem('languageLearnerTestState', JSON.stringify(saveData));
    },
    
    // Load test state from localStorage
    loadTestState: function() {
        const savedData = localStorage.getItem('languageLearnerTestState');
        
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                
                // Check if saved state is recent (less than 24 hours old)
                const hoursOld = (Date.now() - data.timestamp) / (1000 * 60 * 60);
                if (hoursOld < 24) {
                    // Restore state
                    AppState.testState = data.testState;
                    AppState.currentTestType = data.currentTestType;
                    AppState.currentTestMode = data.currentTestMode;
                    AppState.currentTopicId = data.currentTopicId;
                    
                    return true;
                }
            } catch (error) {
                console.error('Error loading saved test state:', error);
            }
        }
        
        return false;
    },
    
    // Resume test from saved state
    resumeTest: function() {
        if (this.loadTestState()) {
            // Show test section
            UI.showSection('test');
            
            // Display current question
            this.displayCurrentQuestion();
            
            // Update progress indicator
            this.updateHeaderProgress();
            
            return true;
        }
        
        return false;
    },
    
    // Export results as CSV
    exportResults: function() {
        const state = AppState.testState;
        
        if (!state.questions.length) return;
        
        // Create CSV content
        let csv = 'Question,Your Answer,Correct Answer,Result\n';
        
        state.questions.forEach((question, index) => {
            const userAnswer = state.userAnswers[index];
            let userAnswerText = '';
            let result = '';
            
            if (userAnswer) {
                if (question.type === 'multiple-choice') {
                    userAnswerText = userAnswer.selectedOption || '(skipped)';
                } else {
                    userAnswerText = userAnswer.answer || '(skipped)';
                }
                
                if (userAnswer.skipped) {
                    result = 'Skipped';
                } else if (userAnswer.isCorrect) {
                    result = 'Correct';
                } else {
                    result = 'Incorrect';
                }
            } else {
                userAnswerText = '(not answered)';
                result = 'Not Answered';
            }
            
            // Escape quotes and commas
            const escapeCsv = (text) => {
                if (text.includes(',') || text.includes('"') || text.includes('\n')) {
                    return '"' + text.replace(/"/g, '""') + '"';
                }
                return text;
            };
            
            csv += `${escapeCsv(question.question)},${escapeCsv(userAnswerText)},${escapeCsv(question.answer)},${result}\n`;
        });
        
        // Add summary
        const correctAnswers = state.userAnswers.filter(a => a && a.isCorrect).length;
        const totalQuestions = state.questions.length;
        const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
        
        csv += `\nSummary\n`;
        csv += `Total Questions,${totalQuestions}\n`;
        csv += `Correct Answers,${correctAnswers}\n`;
        csv += `Score,${scorePercentage}%\n`;
        csv += `Date,${new Date().toLocaleDateString()}\n`;
        
        // Create download link
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `language-test-results-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// UI Manager
const UI = {
    // Initialize UI
    init: function() {
        // Initialize DOM cache
        DOM.init();
        
        // Initialize data
        DataStore.init();
        
        // Load user progress
        this.loadUserProgress();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Render initial content
        this.renderHomeStats();
        this.renderGrammarTopics();
        this.renderVocabularyTopics();
        this.populateTopicSelect();
        
        // Check for saved test state
        if (TestManager.resumeTest()) {
            // Test resumed, nothing else to do
        } else {
            // Show home section
            this.showSection('home');
        }
    },
    
    // Load user progress from localStorage
    loadUserProgress: function() {
        const savedProgress = localStorage.getItem('languageLearnerUserProgress');
        
        if (savedProgress) {
            try {
                AppState.userProgress = JSON.parse(savedProgress);
            } catch (error) {
                console.error('Error loading user progress:', error);
            }
        }
    },
    
    // Set up event listeners
    setupEventListeners: function() {
        // Navigation buttons
        DOM.buttons.navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.getAttribute('data-section');
                this.showSection(section);
            });
        });
        
        // Back buttons
        DOM.buttons.backButtons.forEach(btn => {
            btn.addEventListener('click', () => this.goBack());
        });
        
        // Home action buttons
        DOM.buttons.grammarTest.addEventListener('click', () => {
            AppState.currentTestType = 'grammar';
            DOM.topicTitles.testTypeTitle.textContent = 'Grammar Test';
            this.showSection('test-selection');
        });
        
        DOM.buttons.vocabularyTest.addEventListener('click', () => {
            AppState.currentTestType = 'vocabulary';
            DOM.topicTitles.testTypeTitle.textContent = 'Vocabulary Test';
            this.showSection('test-selection');
        });
        
        DOM.buttons.grammarReference.addEventListener('click', () => {
            this.showSection('grammar-reference');
        });
        
        DOM.buttons.vocabularyReference.addEventListener('click', () => {
            this.showSection('vocabulary-reference');
        });
        
        // Test selection
        DOM.buttons.startOverallTest.addEventListener('click', () => {
            TestManager.startTest(AppState.currentTestType, 'overall');
        });
        
        DOM.buttons.startTopicTest.addEventListener('click', () => {
            const topicId = parseInt(DOM.inputs.topicSelect.value);
            if (topicId) {
                TestManager.startTest(AppState.currentTestType, 'topic', topicId);
            }
        });
        
        DOM.inputs.topicSelect.addEventListener('change', () => {
            DOM.buttons.startTopicTest.disabled = !DOM.inputs.topicSelect.value;
        });
        
        // Test controls
        DOM.buttons.prevQuestion.addEventListener('click', () => {
            TestManager.previousQuestion();
        });
        
        DOM.buttons.nextQuestion.addEventListener('click', () => {
            TestManager.nextQuestion();
        });
        
        DOM.buttons.skipQuestion.addEventListener('click', () => {
            TestManager.skipQuestion();
        });
        
        DOM.buttons.pauseTest.addEventListener('click', () => {
            this.togglePauseTest();
        });
        
        // Results actions
        DOM.buttons.reviewTest.addEventListener('click', () => {
            // Go back to test section to review answers
            AppState.testState.currentQuestionIndex = 0;
            UI.showSection('test');
            TestManager.displayCurrentQuestion();
        });
        
        DOM.buttons.newTest.addEventListener('click', () => {
            // Go back to test selection
            this.showSection('test-selection');
        });
        
        DOM.buttons.exportResults.addEventListener('click', () => {
            TestManager.exportResults();
        });
        
        // Practice topic buttons
        DOM.buttons.practiceGrammarTopic.addEventListener('click', () => {
            const topicId = AppState.currentTopicId;
            if (topicId) {
                AppState.currentTestType = 'grammar';
                TestManager.startTest('grammar', 'topic', topicId);
            }
        });
        
        DOM.buttons.practiceVocabularyTopic.addEventListener('click', () => {
            const topicId = AppState.currentTopicId;
            if (topicId) {
                AppState.currentTestType = 'vocabulary';
                TestManager.startTest('vocabulary', 'topic', topicId);
            }
        });
        
        // Search functionality
        DOM.inputs.grammarSearch.addEventListener('input', () => {
            this.filterTopics('grammar', DOM.inputs.grammarSearch.value);
        });
        
        DOM.inputs.vocabularySearch.addEventListener('input', () => {
            this.filterTopics('vocabulary', DOM.inputs.vocabularySearch.value);
        });
        
        // Reset progress
        DOM.buttons.resetProgress.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
                localStorage.removeItem('languageLearnerUserProgress');
                localStorage.removeItem('languageLearnerTestState');
                AppState.userProgress = {
                    grammarScores: {},
                    vocabularyScores: {},
                    completedTests: []
                };
                alert('Progress reset successfully.');
            }
        });
        
        // Keyboard navigation for tests
        document.addEventListener('keydown', (e) => {
            // Only handle keyboard navigation in test section
            if (AppState.testState.active && !AppState.testState.paused) {
                switch (e.key) {
                    case 'ArrowLeft':
                        if (!DOM.buttons.prevQuestion.disabled) {
                            TestManager.previousQuestion();
                        }
                        break;
                    case 'ArrowRight':
                    case 'Enter':
                        if (!DOM.buttons.nextQuestion.disabled) {
                            TestManager.nextQuestion();
                        }
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        // Select multiple choice options by number
                        const optionIndex = parseInt(e.key) - 1;
                        const optionButtons = document.querySelectorAll('.option-btn');
                        if (optionButtons[optionIndex]) {
                            optionButtons[optionIndex].click();
                        }
                        break;
                    case ' ':
                    case 'Spacebar':
                        // Space to skip
                        e.preventDefault();
                        TestManager.skipQuestion();
                        break;
                }
            }
        });
    },
    
    // Show a specific section
    showSection: function(sectionName) {
        // Hide all sections
        Object.values(DOM.sections).forEach(section => {
            if (section) {
                section.classList.remove('active');
                section.setAttribute('hidden', '');
                section.setAttribute('aria-hidden', 'true');
            }
        });
        
        // Show requested section
        const section = DOM.sections[sectionName];
        if (section) {
            section.classList.add('active');
            section.removeAttribute('hidden');
            section.setAttribute('aria-hidden', 'false');
            
            // Update current section
            AppState.currentSection = sectionName;
            
            // Update navigation buttons active state
            DOM.buttons.navButtons.forEach(btn => {
                const btnSection = btn.getAttribute('data-section');
                if (btnSection === sectionName) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Focus on first focusable element
            setTimeout(() => {
                const focusable = section.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (focusable) {
                    focusable.focus();
                }
            }, 100);
        }
    },
    
    // Go back to previous section
    goBack: function() {
        switch (AppState.currentSection) {
            case 'test-selection':
            case 'grammar-reference':
            case 'vocabulary-reference':
                this.showSection('home');
                break;
            case 'grammar-topic-detail':
                this.showSection('grammar-reference');
                break;
            case 'vocabulary-topic-detail':
                this.showSection('vocabulary-reference');
                break;
            case 'test':
                if (confirm('Are you sure you want to leave the test? Your progress will be saved.')) {
                    TestManager.saveTestState();
                    this.showSection('test-selection');
                }
                break;
            case 'results':
                this.showSection('home');
                break;
            default:
                this.showSection('home');
        }
    },
    
    // Toggle test pause state
    togglePauseTest: function() {
        AppState.testState.paused = !AppState.testState.paused;
        
        if (AppState.testState.paused) {
            DOM.buttons.pauseTest.innerHTML = '<i class="fas fa-play" aria-hidden="true"></i> Resume';
            DOM.buttons.pauseTest.setAttribute('aria-label', 'Resume test');
            
            // Disable all test controls
            const testControls = document.querySelectorAll('#test-section button, #test-section input');
            testControls.forEach(control => {
                control.disabled = true;
            });
            
            // Show pause message
            DOM.containers.testFeedback.style.display = 'block';
            DOM.containers.testFeedback.className = 'test-feedback';
            DOM.containers.testFeedback.innerHTML = `
                <div style="text-align: center;">
                    <i class="fas fa-pause" style="font-size: 2rem; margin-bottom: 10px;"></i>
                    <p><strong>Test Paused</strong></p>
                    <p>Click "Resume" to continue</p>
                </div>
            `;
        } else {
            DOM.buttons.pauseTest.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i> Pause';
            DOM.buttons.pauseTest.setAttribute('aria-label', 'Pause test');
            
            // Re-enable test controls
            TestManager.updateNavigationButtons();
            
            // Clear pause message
            DOM.containers.testFeedback.style.display = 'none';
            
            // Restore question UI
            TestManager.displayCurrentQuestion();
        }
    },
    
    // Render home statistics
    renderHomeStats: function() {
        const totalTopics = DataStore.grammarTopics.length + DataStore.vocabularyTopics.length;
        
        // Count total questions
        let totalQuestions = 0;
        DataStore.grammarTopics.forEach(topic => {
            totalQuestions += topic.questions ? topic.questions.length : 0;
        });
        DataStore.vocabularyTopics.forEach(topic => {
            totalQuestions += topic.questions ? topic.questions.length : 0;
        });
        
        // Count Tajik examples
        let tajikExamples = 0;
        DataStore.grammarTopics.forEach(topic => {
            tajikExamples += topic.examples ? topic.examples.length : 0;
        });
        DataStore.vocabularyTopics.forEach(topic => {
            tajikExamples += topic.words ? topic.words.length : 0;
        });
        
        // Update DOM
        document.getElementById('total-topics').textContent = totalTopics;
        document.getElementById('total-questions').textContent = totalQuestions + '+';
        document.getElementById('tajik-examples').textContent = tajikExamples + '+';
    },
    
    // Render grammar topics grid
    renderGrammarTopics: function() {
        const topics = DataStore.getAllGrammarTopics();
        const grid = DOM.containers.grammarTopicsGrid;
        
        if (!grid) return;
        
        grid.innerHTML = '';
        
        topics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.setAttribute('data-topic-id', topic.id);
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Open ${topic.title} grammar topic`);
            
            card.innerHTML = `
                <div class="topic-card-header">
                    <div class="topic-card-id">${topic.id}</div>
                    <div>
                        <h3 class="topic-card-title">${topic.title}</h3>
                        <p class="topic-card-description">${topic.description}</p>
                    </div>
                </div>
                <div class="topic-card-stats">
                    <span><i class="fas fa-question-circle" aria-hidden="true"></i> ${topic.questions ? topic.questions.length : 0} questions</span>
                    <span><i class="fas fa-comment" aria-hidden="true"></i> ${topic.examples ? topic.examples.length : 0} examples</span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                this.showGrammarTopicDetail(topic.id);
            });
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showGrammarTopicDetail(topic.id);
                }
            });
            
            grid.appendChild(card);
        });
    },
    
    // Render vocabulary topics grid
    renderVocabularyTopics: function() {
        const topics = DataStore.getAllVocabularyTopics();
        const grid = DOM.containers.vocabularyTopicsGrid;
        
        if (!grid) return;
        
        grid.innerHTML = '';
        
        topics.forEach(topic => {
            const card = document.createElement('div');
            card.className = 'topic-card';
            card.setAttribute('data-topic-id', topic.id);
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `Open ${topic.title} vocabulary topic`);
            
            card.innerHTML = `
                <div class="topic-card-header">
                    <div class="topic-card-id">${topic.id}</div>
                    <div>
                        <h3 class="topic-card-title">${topic.title}</h3>
                        <p class="topic-card-description">${topic.description}</p>
                    </div>
                </div>
                <div class="topic-card-stats">
                    <span><i class="fas fa-question-circle" aria-hidden="true"></i> ${topic.questions ? topic.questions.length : 0} questions</span>
                    <span><i class="fas fa-list" aria-hidden="true"></i> ${topic.words ? topic.words.length : 0} words</span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                this.showVocabularyTopicDetail(topic.id);
            });
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.showVocabularyTopicDetail(topic.id);
                }
            });
            
            grid.appendChild(card);
        });
    },
    
    // Show grammar topic detail
    showGrammarTopicDetail: function(topicId) {
        const topic = DataStore.getGrammarTopic(topicId);
        
        if (!topic) return;
        
        // Update current topic ID
        AppState.currentTopicId = topicId;
        
        // Update title
        DOM.topicTitles.grammar.textContent = topic.title;
        
        // Update explanation
        document.getElementById('grammar-explanation').textContent = topic.explanation;
        document.getElementById('grammar-form').textContent = topic.form;
        
        // Update keywords
        const keywordsList = document.getElementById('grammar-keywords');
        keywordsList.innerHTML = '';
        
        if (topic.keywords && topic.keywords.length > 0) {
            topic.keywords.forEach(keyword => {
                const li = document.createElement('li');
                li.textContent = keyword;
                keywordsList.appendChild(li);
            });
        } else {
            keywordsList.innerHTML = '<li>No specific keywords for this topic</li>';
        }
        
        // Update common mistakes
        const mistakesContainer = document.getElementById('grammar-mistakes');
        mistakesContainer.innerHTML = '';
        
        if (topic.commonMistakes && topic.commonMistakes.length > 0) {
            topic.commonMistakes.forEach(mistake => {
                const mistakeDiv = document.createElement('div');
                mistakeDiv.className = 'mistake-item';
                mistakeDiv.innerHTML = `
                    <p><strong>Incorrect:</strong> ${mistake.wrong}</p>
                    <p><strong>Correct:</strong> ${mistake.correct}</p>
                    <p><em>${mistake.note}</em></p>
                    <hr>
                `;
                mistakesContainer.appendChild(mistakeDiv);
            });
        } else {
            mistakesContainer.innerHTML = '<p>No common mistakes recorded for this topic.</p>';
        }
        
        // Update examples
        const examplesContainer = document.getElementById('grammar-examples');
        examplesContainer.innerHTML = '';
        
        if (topic.examples && topic.examples.length > 0) {
            topic.examples.forEach(example => {
                const exampleDiv = document.createElement('div');
                exampleDiv.className = 'example-item';
                exampleDiv.setAttribute('data-language', 'tj');
                exampleDiv.setAttribute('data-tj', example.tj);
                exampleDiv.innerHTML = `
                    <div class="example-english">${example.en}</div>
                    <div class="example-tajik">${example.tj}</div>
                `;
                examplesContainer.appendChild(exampleDiv);
            });
        } else {
            examplesContainer.innerHTML = '<p>No examples available for this topic.</p>';
        }
        
        // Show detail section
        this.showSection('grammar-topic-detail');
    },
    
    // Show vocabulary topic detail
    showVocabularyTopicDetail: function(topicId) {
        const topic = DataStore.getVocabularyTopic(topicId);
        
        if (!topic) return;
        
        // Update current topic ID
        AppState.currentTopicId = topicId;
        
        // Update title
        DOM.topicTitles.vocabulary.textContent = topic.title;
        
        // Update words list
        const wordsContainer = document.getElementById('vocabulary-words-list');
        wordsContainer.innerHTML = '';
        
        if (topic.words && topic.words.length > 0) {
            topic.words.forEach(word => {
                const wordDiv = document.createElement('div');
                wordDiv.className = 'vocabulary-item';
                wordDiv.setAttribute('data-language', 'tj');
                wordDiv.setAttribute('data-tj', word.tj);
                
                let exampleHTML = '';
                if (word.example_en && word.example_tj) {
                    exampleHTML = `
                        <div class="word-example">
                            <div>${word.example_en}</div>
                            <div>${word.example_tj}</div>
                        </div>
                    `;
                }
                
                wordDiv.innerHTML = `
                    <div class="word-pair">
                        <span class="word-english">${word.en}</span>
                        <span class="word-tajik">${word.tj}</span>
                    </div>
                    ${exampleHTML}
                `;
                
                wordsContainer.appendChild(wordDiv);
            });
        } else {
            wordsContainer.innerHTML = '<p>No words available for this topic.</p>';
        }
        
        // Show detail section
        this.showSection('vocabulary-topic-detail');
    },
    
    // Populate topic select dropdown
    populateTopicSelect: function() {
        const select = DOM.inputs.topicSelect;
        
        if (!select) return;
        
        // Clear existing options (keep first placeholder)
        while (select.options.length > 1) {
            select.remove(1);
        }
        
        // Get topics based on current test type
        let topics = [];
        if (AppState.currentTestType === 'grammar') {
            topics = DataStore.getAllGrammarTopics();
        } else {
            topics = DataStore.getAllVocabularyTopics();
        }
        
        // Add topic options
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic.id;
            option.textContent = `${topic.id}. ${topic.title}`;
            select.appendChild(option);
        });
    },
    
    // Filter topics based on search query
    filterTopics: function(type, query) {
        const gridId = type === 'grammar' ? 'grammar-topics-grid' : 'vocabulary-topics-grid';
        const grid = document.getElementById(gridId);
        
        if (!grid) return;
        
        const cards = grid.querySelectorAll('.topic-card');
        const normalizedQuery = query.toLowerCase().trim();
        
        cards.forEach(card => {
            const title = card.querySelector('.topic-card-title').textContent.toLowerCase();
            const description = card.querySelector('.topic-card-description').textContent.toLowerCase();
            
            if (normalizedQuery === '' || title.includes(normalizedQuery) || description.includes(normalizedQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    UI.init();
});