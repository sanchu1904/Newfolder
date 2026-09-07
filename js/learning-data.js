// =============================================================================
// SkillPrep Learning Curriculum & Progress Management Engine
// =============================================================================

const LEARNING_SUBJECTS = [
    {
        id: 'python',
        title: 'Python Programming',
        icon: '🐍',
        color: '#3b82f6',
        description: 'Master Python fundamentals from variables to OOP and file handling for coding interviews.',
        topics: [
            {
                id: 'python_variables',
                title: 'Variables & Identifiers',
                estimatedTime: '8 min',
                summary: 'Understanding variable declaration, naming rules, dynamic typing, and memory references.',
                content: `
                    <h4>1. What is a Variable?</h4>
                    <p>In Python, a variable is a reserved memory location to store values. Unlike C or Java, Python has <strong>dynamic typing</strong>, meaning you don't need to declare the data type explicitly.</p>
                    
                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code># Variable assignment in Python
age = 21            # Integer
student_name = "Ananya" # String
gpa = 8.85          # Float
is_placed = True    # Boolean

# Multiple assignment
x, y, z = 10, 20, 30
print(f"Name: {student_name}, Age: {age}, GPA: {gpa}")</code></pre>
                    </div>

                    <h4>2. Variable Naming Rules (PEP 8)</h4>
                    <ul>
                        <li>Must begin with a letter (<code>a-z</code>, <code>A-Z</code>) or an underscore (<code>_</code>).</li>
                        <li>Cannot start with a digit (e.g., <code>2variable</code> is invalid).</li>
                        <li>Can only contain alphanumeric characters and underscores.</li>
                        <li>Variable names are case-sensitive (<code>Age</code> and <code>age</code> are different).</li>
                        <li>Cannot use Python reserved keywords (e.g., <code>if</code>, <code>class</code>, <code>def</code>, <code>return</code>).</li>
                    </ul>

                    <div class="tip-callout">
                        <strong>💡 Placement Tip:</strong> In Python, variables are references to objects in memory. Using the <code>id()</code> function shows the memory address of the object.
                    </div>
                `
            },
            {
                id: 'python_datatypes',
                title: 'Data Types & Type Casting',
                estimatedTime: '12 min',
                summary: 'Built-in types including numeric, sequence, mapping, boolean, and type conversion techniques.',
                content: `
                    <h4>1. Built-in Data Types in Python</h4>
                    <p>Python provides several standard built-in data types categorized into:</p>
                    <ul>
                        <li><strong>Numeric Types:</strong> <code>int</code> (e.g. 10), <code>float</code> (e.g. 3.14), <code>complex</code> (e.g. 2 + 3j).</li>
                        <li><strong>Sequence Types:</strong> <code>str</code>, <code>list</code>, <code>tuple</code>, <code>range</code>.</li>
                        <li><strong>Mapping Type:</strong> <code>dict</code> (Key-Value pairs).</li>
                        <li><strong>Set Types:</strong> <code>set</code>, <code>frozenset</code>.</li>
                        <li><strong>Boolean Type:</strong> <code>bool</code> (<code>True</code> or <code>False</code>).</li>
                        <li><strong>Binary Types:</strong> <code>bytes</code>, <code>bytearray</code>.</li>
                    </ul>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code># Type identification
num = 42
text = "SkillPrep"
scores = [85, 92, 78]

print(type(num))     # &lt;class 'int'&gt;
print(type(text))    # &lt;class 'str'&gt;
print(type(scores))  # &lt;class 'list'&gt;

# Explicit Type Casting
val_str = "100"
val_int = int(val_str)   # String to Integer
val_float = float(val_int) # Integer to Float (100.0)
print(val_int + 50)     # Output: 150</code></pre>
                    </div>

                    <div class="tip-callout">
                        <strong>💡 Key Concept:</strong> Mutability matters! Numbers, Strings, and Tuples are <em>immutable</em> (cannot be modified in-place), while Lists, Sets, and Dictionaries are <em>mutable</em>.
                    </div>
                `
            },
            {
                id: 'python_operators',
                title: 'Operators & Expressions',
                estimatedTime: '10 min',
                summary: 'Arithmetic, comparison, logical, bitwise, assignment, identity, and membership operators.',
                content: `
                    <h4>1. Categories of Python Operators</h4>
                    <p>Operators perform operations on variables and values. Essential operator types include:</p>
                    <ul>
                        <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> (float division), <code>//</code> (floor division), <code>%</code> (modulus), <code>**</code> (exponentiation).</li>
                        <li><strong>Comparison:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>.</li>
                        <li><strong>Logical:</strong> <code>and</code>, <code>or</code>, <code>not</code>.</li>
                        <li><strong>Identity:</strong> <code>is</code>, <code>is not</code> (checks if both variables point to the same object).</li>
                        <li><strong>Membership:</strong> <code>in</code>, <code>not in</code> (checks presence in a sequence).</li>
                    </ul>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code># Floor division and Exponentiation
print(17 // 3)   # 5 (Quotient without decimal)
print(17 % 3)    # 2 (Remainder)
print(2 ** 5)    # 32 (2 to the power 5)

# Identity vs Equality
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)    # True (values are equal)
print(a is b)    # False (different memory addresses)

# Membership testing
skills = ["Python", "Java", "SQL"]
print("Python" in skills) # True</code></pre>
                    </div>
                `
            },
            {
                id: 'python_conditionals',
                title: 'Conditional Statements',
                estimatedTime: '10 min',
                summary: 'Decision making using if, elif, else, ternary expressions, and nested branching.',
                content: `
                    <h4>1. Decision Making in Python</h4>
                    <p>Conditional statements control the flow of execution based on boolean conditions. Indentation (4 spaces) defines the code blocks.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>marks = 85

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
else:
    grade = "C"

print(f"Student Grade: {grade}")

# Ternary Conditional Expression (Single line if-else)
status = "Eligible" if marks >= 60 else "Not Eligible"
print(f"Placement Status: {status}")</code></pre>
                    </div>

                    <div class="tip-callout">
                        <strong>💡 Common Interview Gotcha:</strong> In Python, truthy and falsy values are evaluated in conditions. <code>0</code>, <code>""</code> (empty string), <code>[]</code> (empty list), <code>{}</code> (empty dict), <code>None</code>, and <code>False</code> all evaluate to <code>False</code>.
                    </div>
                `
            },
            {
                id: 'python_loops',
                title: 'Loops (For, While, Break & Continue)',
                estimatedTime: '15 min',
                summary: 'Iterating over sequences with for loops, condition-based while loops, break, continue, and pass statements.',
                content: `
                    <h4>1. For Loops and the range() Function</h4>
                    <p>The <code>for</code> loop iterates over items of any sequence (such as a list or string). The <code>range(start, stop, step)</code> function generates arithmetic progressions.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code># Iterate over a range
for i in range(1, 6):
    print(f"Step {i}")

# Iterate with index using enumerate()
languages = ["Python", "C++", "Java", "JavaScript"]
for index, lang in enumerate(languages, start=1):
    print(f"{index}. {lang}")

# While loop with break and continue
count = 0
while count < 10:
    count += 1
    if count == 3:
        continue # Skip number 3
    if count == 7:
        break    # Terminate loop at 7
    print(count, end=" ") # Output: 1 2 4 5 6</code></pre>
                    </div>
                `
            },
            {
                id: 'python_functions',
                title: 'Functions & Lambda Expressions',
                estimatedTime: '15 min',
                summary: 'Defining functions, positional/keyword arguments, default values, *args, **kwargs, and anonymous lambda functions.',
                content: `
                    <h4>1. Function Definition and Arguments</h4>
                    <p>Functions are reusable blocks of organized code defined using the <code>def</code> keyword.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code># Function with default argument and type annotations
def calculate_placement_score(aptitude: int, coding: int, weight: float = 1.0) -> float:
    total = (aptitude * 0.4 + coding * 0.6) * weight
    return round(total, 2)

score = calculate_placement_score(85, 90)
print(f"Calculated Score: {score}")

# Variable-length arguments (*args and **kwargs)
def print_student_info(*courses, **details):
    print("Enrolled Courses:", courses)
    print("Student Details:", details)

print_student_info("DSA", "Python", name="Ananya", roll=101)

# Anonymous Lambda Functions
square = lambda x: x ** 2
print(square(9)) # Output: 81

# Lambda with map & filter
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda n: n % 2 == 0, numbers))
print("Evens:", evens) # [2, 4, 6]</code></pre>
                    </div>
                `
            },
            {
                id: 'python_lists',
                title: 'Lists & List Comprehensions',
                estimatedTime: '14 min',
                summary: 'List indexing, slicing, methods (append, extend, pop, sort), and pythonic list comprehensions.',
                content: `
                    <h4>1. List Operations & Slicing</h4>
                    <p>Lists are ordered, mutable, and allow duplicate elements.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>numbers = [10, 20, 30, 40, 50, 60]

# List Slicing: [start:stop:step]
print(numbers[1:4])   # [20, 30, 40]
print(numbers[::-1])  # [60, 50, 40, 30, 20, 10] (Reversed list)

# Essential Methods
numbers.append(70)    # Add to end
numbers.insert(0, 5)  # Insert at index 0
removed = numbers.pop() # Remove and return last item

# List Comprehensions (Clean & Fast)
squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print("Even squares:", squares) # [4, 16, 36, 64, 100]</code></pre>
                    </div>
                `
            },
            {
                id: 'python_dictionaries',
                title: 'Dictionaries & Sets',
                estimatedTime: '14 min',
                summary: 'Hash-map key-value lookups with dict, set operations (union, intersection, difference), and dictionary comprehension.',
                content: `
                    <h4>1. Dictionaries (Key-Value Mappings)</h4>
                    <p>Dictionaries store data in key-value pairs with O(1) average lookup time.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>student = {
    "name": "Ananya Kumar",
    "skills": ["Python", "React", "SQL"],
    "solved_problems": 48
}

# Safe access with .get()
print(student.get("cgpa", 8.5)) # Returns default 8.5 if key missing

# Iterating keys and values
for key, value in student.items():
    print(f"{key}: {value}")

# Sets (Unique unordered elements)
skills_a = {"Python", "SQL", "Git"}
skills_b = {"SQL", "Docker", "AWS"}
print(skills_a & skills_b) # Intersection: {'SQL'}
print(skills_a | skills_b) # Union: {'Python', 'SQL', 'Git', 'Docker', 'AWS'}</code></pre>
                    </div>
                `
            },
            {
                id: 'python_oop',
                title: 'Object-Oriented Programming (OOP)',
                estimatedTime: '18 min',
                summary: 'Classes, Objects, __init__ constructor, Encapsulation, Inheritance, Polymorphism, and Method Overriding.',
                content: `
                    <h4>1. Core OOP Principles in Python</h4>
                    <p>Python is an object-oriented language where classes serve as blueprints for objects.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>class Candidate:
    # Class attribute
    platform = "SkillPrep"

    # Constructor
    def __init__(self, name: str, branch: str):
        self.name = name       # Instance attribute
        self.branch = branch
        self.__rating = 1500   # Private attribute (Encapsulation)

    def get_rating(self):
        return self.__rating

    def display_info(self):
        return f"{self.name} ({self.branch}) - Rating: {self.__rating}"

# Inheritance
class Developer(Candidate):
    def __init__(self, name: str, branch: str, primary_language: str):
        super().__init__(name, branch)
        self.primary_language = primary_language

    # Method Overriding (Polymorphism)
    def display_info(self):
        return f"{super().display_info()} | Tech: {self.primary_language}"

dev = Developer("Ananya", "Computer Science", "Python")
print(dev.display_info())</code></pre>
                    </div>
                `
            },
            {
                id: 'python_exceptions',
                title: 'Exception Handling & File Operations',
                estimatedTime: '12 min',
                summary: 'Handling runtime errors with try, except, else, finally, custom exceptions, and context managers (with open).',
                content: `
                    <h4>1. Try-Except Blocks</h4>
                    <p>Exception handling ensures programs gracefully manage unexpected errors without crashing.</p>

                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>python</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError as e:
        print("Error: Cannot divide by zero!")
        return None
    except TypeError:
        print("Error: Both arguments must be numeric.")
        return None
    else:
        print("Division successful!")
        return result
    finally:
        print("Calculation complete.\n")

print(safe_divide(20, 4))
print(safe_divide(10, 0))

# Context Manager for Safe File Handling
# with open('data.txt', 'w') as f:
#     f.write("SkillPrep placement notes.")</code></pre>
                    </div>
                `
            }
        ]
    },
    {
        id: 'aptitude',
        title: 'Quantitative & Logical Aptitude',
        icon: '🧠',
        color: '#f59e0b',
        description: 'Speed math, percentages, time-work, distance, and analytical reasoning shortcuts for campus hiring tests.',
        topics: [
            {
                id: 'apt_number_system',
                title: 'Number Systems & Divisibility',
                estimatedTime: '10 min',
                summary: 'Prime numbers, LCM/HCF properties, divisibility shortcuts (3, 7, 11), unit digit cycles, and remainders.',
                content: `
                    <h4>1. Essential Divisibility Rules</h4>
                    <ul>
                        <li><strong>Divisibility by 3:</strong> Sum of digits is divisible by 3.</li>
                        <li><strong>Divisibility by 4:</strong> Last 2 digits are divisible by 4.</li>
                        <li><strong>Divisibility by 8:</strong> Last 3 digits are divisible by 8.</li>
                        <li><strong>Divisibility by 9:</strong> Sum of digits is divisible by 9.</li>
                        <li><strong>Divisibility by 11:</strong> (Sum of digits at odd positions) - (Sum of digits at even positions) is 0 or multiple of 11.</li>
                    </ul>

                    <h4>2. LCM and HCF Fundamental Formula</h4>
                    <p style="background:var(--surface-light); padding:10px; border-radius:8px; font-weight:700;">
                        Product of Two Numbers = LCM × HCF
                    </p>
                    <p><em>Example:</em> If LCM of two numbers is 180 and HCF is 6, and one number is 30, the other number is <code>(180 × 6) / 30 = 36</code>.</p>
                `
            },
            {
                id: 'apt_percentages',
                title: 'Percentages & Profit/Loss',
                estimatedTime: '12 min',
                summary: 'Fraction-to-percentage conversion, percentage change formula, cost price, selling price, and markup discount.',
                content: `
                    <h4>1. Fraction to Percentage Quick Reference Table</h4>
                    <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
                        <tr style="background:#eef2ff;">
                            <th style="padding:8px; border:1px solid #e2e8f0;">Fraction</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Percentage</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Fraction</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Percentage</th>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/2</td><td style="padding:8px; border:1px solid #e2e8f0;">50%</td>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/6</td><td style="padding:8px; border:1px solid #e2e8f0;">16.67%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/3</td><td style="padding:8px; border:1px solid #e2e8f0;">33.33%</td>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/7</td><td style="padding:8px; border:1px solid #e2e8f0;">14.28%</td>
                        </tr>
                        <tr>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/4</td><td style="padding:8px; border:1px solid #e2e8f0;">25%</td>
                            <td style="padding:8px; border:1px solid #e2e8f0;">1/8</td><td style="padding:8px; border:1px solid #e2e8f0;">12.5%</td>
                        </tr>
                    </table>

                    <h4>2. Profit & Loss Formulas</h4>
                    <ul>
                        <li><strong>Gain %:</strong> <code>(Gain / CP) × 100</code></li>
                        <li><strong>Loss %:</strong> <code>(Loss / CP) × 100</code></li>
                        <li><strong>SP when Gain % is given:</strong> <code>CP × (100 + Gain%) / 100</code></li>
                    </ul>
                `
            },
            {
                id: 'apt_time_work',
                title: 'Time & Work / Pipes & Cisterns',
                estimatedTime: '14 min',
                summary: 'Work efficiency method, LCM approach to solve multi-person jobs, negative work (leak pipes).',
                content: `
                    <h4>1. The LCM Unit Method (Fastest Approach)</h4>
                    <p>Instead of fractions (1/A + 1/B), assume Total Work = LCM of individual days.</p>
                    <div style="background:var(--surface-light); padding:14px; border-radius:10px; margin:10px 0;">
                        <p><strong>Problem:</strong> A can complete a job in 12 days, B in 15 days. How long will they take working together?</p>
                        <p><strong>Step 1:</strong> Total Work = LCM(12, 15) = <strong>60 units</strong>.</p>
                        <p><strong>Step 2:</strong> A's 1-day efficiency = 60 / 12 = <strong>5 units/day</strong>.</p>
                        <p><strong>Step 3:</strong> B's 1-day efficiency = 60 / 15 = <strong>4 units/day</strong>.</p>
                        <p><strong>Step 4:</strong> Combined efficiency = 5 + 4 = <strong>9 units/day</strong>.</p>
                        <p><strong>Step 5:</strong> Total Days = 60 / 9 = <strong>6.67 days (6 days 16 hours)</strong>.</p>
                    </div>
                `
            },
            {
                id: 'apt_speed_distance',
                title: 'Speed, Time & Distance / Trains',
                estimatedTime: '12 min',
                summary: 'Unit conversions (km/h to m/s), relative speed for same/opposite directions, train crossing poles/platforms.',
                content: `
                    <h4>1. Essential Conversions & Formulas</h4>
                    <ul>
                        <li><code>km/h → m/s</code>: Multiply by <strong>5/18</strong> (e.g. 72 km/h × 5/18 = 20 m/s).</li>
                        <li><code>m/s → km/h</code>: Multiply by <strong>18/5</strong>.</li>
                        <li><strong>Average Speed</strong> (for equal distance at speeds x and y): <code>(2xy) / (x + y)</code>.</li>
                    </ul>

                    <h4>2. Relative Speed</h4>
                    <ul>
                        <li><strong>Opposite Directions:</strong> Relative Speed = <code>S1 + S2</code>.</li>
                        <li><strong>Same Direction:</strong> Relative Speed = <code>|S1 - S2|</code>.</li>
                        <li><strong>Train crossing platform of length L2:</strong> Total distance = <code>L1 (train) + L2 (platform)</code>.</li>
                    </ul>
                `
            },
            {
                id: 'apt_logical_reasoning',
                title: 'Logical Reasoning & Blood Relations',
                estimatedTime: '12 min',
                summary: 'Family tree mapping, direction sense test, coding-decoding patterns, and circular seating arrangements.',
                content: `
                    <h4>1. Blood Relation Mapping Symbols</h4>
                    <ul>
                        <li><code>+</code> for Male, <code>-</code> for Female.</li>
                        <li><code>=</code> for Married Couple (e.g., A+ = B-).</li>
                        <li><code>|</code> for Vertical generational gap (Parent to Child).</li>
                        <li><code>-</code> for Siblings.</li>
                    </ul>

                    <h4>2. Direction Sense Rules</h4>
                    <p>Remember standard compass directions: North (Up), South (Down), East (Right), West (Left). In shadow problems at sunrise, shadows point West; at sunset, shadows point East.</p>
                `
            },
            {
                id: 'apt_syllogisms',
                title: 'Syllogisms & Venn Diagrams',
                estimatedTime: '10 min',
                summary: 'Categorical propositions (All, Some, No, Some Not), Venn diagram representations, and conclusion verification.',
                content: `
                    <h4>1. Understanding Syllogism Statements</h4>
                    <ul>
                        <li><strong>All A are B (Universal Positive):</strong> Circle A is completely inside Circle B.</li>
                        <li><strong>No A is B (Universal Negative):</strong> Circle A and Circle B are disjoint.</li>
                        <li><strong>Some A are B (Particular Positive):</strong> Circles A and B overlap.</li>
                        <li><strong>Some A are not B (Particular Negative):</strong> At least some part of A is outside B.</li>
                    </ul>
                    <div class="tip-callout">
                        <strong>💡 Golden Rule:</strong> A conclusion is valid ONLY if it holds true in ALL possible Venn diagrams!
                    </div>
                `
            },
            {
                id: 'apt_data_interpretation',
                title: 'Data Interpretation (DI)',
                estimatedTime: '12 min',
                summary: 'Reading bar charts, line graphs, pie charts (degree vs percentage distribution), and tabular data calculation speed.',
                content: `
                    <h4>1. Pie Chart Degree to Percentage Conversion</h4>
                    <p>Total angle around a center = 360° = 100%.</p>
                    <ul>
                        <li><code>1% = 3.6°</code></li>
                        <li><code>1° = (100 / 360)% = 5/18%</code></li>
                        <li><em>Example:</em> An angle of 72° represents <code>72 / 3.6 = 20%</code>.</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'technical',
        title: 'Technical Core (CS & Engineering)',
        icon: '💻',
        color: '#10b981',
        description: 'Data Structures, Algorithms, DBMS, SQL queries, OS fundamentals, and Computer Networks.',
        topics: [
            {
                id: 'tech_ds_arrays_linkedlists',
                title: 'Arrays & Linked Lists',
                estimatedTime: '14 min',
                summary: 'Memory layouts, contiguous allocation, singly/doubly/circular linked lists, fast-slow pointer technique.',
                content: `
                    <h4>1. Array vs Linked List Comparison</h4>
                    <table style="width:100%; border-collapse:collapse; margin-bottom:14px;">
                        <tr style="background:#ecfdf5;">
                            <th style="padding:8px; border:1px solid #e2e8f0;">Operation</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Array</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Singly Linked List</th>
                        </tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Access (Index)</td><td style="padding:8px; border:1px solid #e2e8f0;"><strong>O(1)</strong></td><td style="padding:8px; border:1px solid #e2e8f0;">O(n)</td></tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Insert at Head</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n)</td><td style="padding:8px; border:1px solid #e2e8f0;"><strong>O(1)</strong></td></tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Insert at Tail</td><td style="padding:8px; border:1px solid #e2e8f0;">O(1) amortized</td><td style="padding:8px; border:1px solid #e2e8f0;">O(1) with tail pointer</td></tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Memory Allocation</td><td style="padding:8px; border:1px solid #e2e8f0;">Contiguous</td><td style="padding:8px; border:1px solid #e2e8f0;">Dynamic heap nodes</td></tr>
                    </table>
                `
            },
            {
                id: 'tech_stacks_queues',
                title: 'Stacks & Queues',
                estimatedTime: '12 min',
                summary: 'LIFO stack, FIFO queue, circular queues, monotonic stacks, and applications in expression evaluation.',
                content: `
                    <h4>1. Stack (LIFO - Last In First Out)</h4>
                    <p>Primary operations: <code>push()</code>, <code>pop()</code>, <code>peek()</code> in <strong>O(1)</strong> time. Used in recursion call stacks, undo/redo, and balanced parenthesis matching.</p>

                    <h4>2. Queue (FIFO - First In First Out)</h4>
                    <p>Primary operations: <code>enqueue()</code>, <code>dequeue()</code> in <strong>O(1)</strong> time. Used in CPU task scheduling, Breadth-First Search (BFS), and buffer caching.</p>
                `
            },
            {
                id: 'tech_trees_graphs',
                title: 'Trees & Graph Traversals',
                estimatedTime: '16 min',
                summary: 'Binary search trees (BST), Tree traversals (Inorder, Preorder, Postorder), BFS and DFS graph search.',
                content: `
                    <h4>1. Binary Tree Traversals</h4>
                    <ul>
                        <li><strong>Inorder (Left → Root → Right):</strong> Yields sorted elements for a Binary Search Tree (BST).</li>
                        <li><strong>Preorder (Root → Left → Right):</strong> Useful for creating clones / serialization.</li>
                        <li><strong>Postorder (Left → Right → Root):</strong> Useful for tree deletion and bottom-up evaluation.</li>
                    </ul>

                    <h4>2. Graph BFS vs DFS</h4>
                    <ul>
                        <li><strong>BFS (Breadth First Search):</strong> Uses a Queue. Finds the shortest path in unweighted graphs.</li>
                        <li><strong>DFS (Depth First Search):</strong> Uses a Stack (or recursion). Used in topological sorting and cycle detection.</li>
                    </ul>
                `
            },
            {
                id: 'tech_algorithms_sorting',
                title: 'Sorting & Searching Algorithms',
                estimatedTime: '14 min',
                summary: 'Time complexity analysis, Binary Search (O(log n)), Merge Sort, Quick Sort, and Heap Sort.',
                content: `
                    <h4>1. Algorithm Time & Space Complexities</h4>
                    <table style="width:100%; border-collapse:collapse;">
                        <tr style="background:#f1f5f9;">
                            <th style="padding:8px; border:1px solid #e2e8f0;">Algorithm</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Best Case</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Average Case</th>
                            <th style="padding:8px; border:1px solid #e2e8f0;">Worst Case</th>
                        </tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Binary Search</td><td style="padding:8px; border:1px solid #e2e8f0;">O(1)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(log n)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(log n)</td></tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Merge Sort</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n log n)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n log n)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n log n)</td></tr>
                        <tr><td style="padding:8px; border:1px solid #e2e8f0;">Quick Sort</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n log n)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n log n)</td><td style="padding:8px; border:1px solid #e2e8f0;">O(n²)</td></tr>
                    </table>
                `
            },
            {
                id: 'tech_dbms_sql',
                title: 'DBMS, SQL Queries & Normalization',
                estimatedTime: '16 min',
                summary: 'ACID properties, SQL JOINs (INNER, LEFT, RIGHT), GROUP BY / HAVING, 1NF, 2NF, 3NF, and indexing.',
                content: `
                    <h4>1. ACID Properties of Transactions</h4>
                    <ul>
                        <li><strong>Atomicity:</strong> All operations succeed or the entire transaction is rolled back.</li>
                        <li><strong>Consistency:</strong> Database transitions from one valid state to another.</li>
                        <li><strong>Isolation:</strong> Concurrent transactions do not interfere with each other.</li>
                        <li><strong>Durability:</strong> Once committed, data persists even after system crashes.</li>
                    </ul>

                    <h4>2. Essential SQL Query Patterns</h4>
                    <div class="code-block-wrapper">
                        <div class="code-block-header"><span>sql</span><button class="btn-copy-code" onclick="copyCode(this)">Copy</button></div>
                        <pre><code>-- Find 2nd highest salary
SELECT MAX(salary) AS SecondHighest
FROM Employees
WHERE salary < (SELECT MAX(salary) FROM Employees);

-- Count candidates per branch with average score > 80
SELECT branch, COUNT(*) AS student_count, AVG(score) AS avg_score
FROM Candidates
GROUP BY branch
HAVING AVG(score) > 80;</code></pre>
                    </div>
                `
            },
            {
                id: 'tech_os_networking',
                title: 'Operating Systems & Computer Networks',
                estimatedTime: '15 min',
                summary: 'Process vs Thread, Deadlocks (4 Coffman conditions), OSI 7 Layers, TCP vs UDP, and HTTP/HTTPS handshake.',
                content: `
                    <h4>1. Process vs Thread</h4>
                    <p>A <strong>Process</strong> is an executing program with its own dedicated address space in memory. A <strong>Thread</strong> is a lightweight execution unit within a process sharing the same memory space.</p>

                    <h4>2. 4 Coffman Conditions for Deadlock</h4>
                    <ol>
                        <li>Mutual Exclusion</li>
                        <li>Hold and Wait</li>
                        <li>No Preemption</li>
                        <li>Circular Wait</li>
                    </ol>

                    <h4>3. TCP vs UDP</h4>
                    <ul>
                        <li><strong>TCP (Transmission Control Protocol):</strong> Connection-oriented, reliable, guaranteed order, 3-way handshake (SYN, SYN-ACK, ACK).</li>
                        <li><strong>UDP (User Datagram Protocol):</strong> Connectionless, faster, no retransmissions (ideal for video streaming & gaming).</li>
                    </ul>
                `
            }
        ]
    },
    {
        id: 'communication',
        title: 'Professional & Verbal Communication',
        icon: '🗣',
        color: '#8b5cf6',
        description: 'Interview speaking skills, email etiquette, group discussion frameworks, and non-verbal mastery.',
        topics: [
            {
                id: 'comm_email_etiquette',
                title: 'Professional Email Etiquette',
                estimatedTime: '10 min',
                summary: 'Clear subject lines, formal greetings, concise email structure, attachments, and corporate follow-up etiquette.',
                content: `
                    <h4>1. Structure of a High-Impact Professional Email</h4>
                    <ul>
                        <li><strong>Subject Line:</strong> Specific and actionable (e.g. <code>Application for Software Engineer - Ananya Kumar</code>).</li>
                        <li><strong>Salutation:</strong> <code>Dear Hiring Team / Dear Mr. Sharma,</code> (Avoid informal "Hey").</li>
                        <li><strong>Opening:</strong> State the purpose clearly in the first sentence.</li>
                        <li><strong>Body:</strong> 2-3 concise paragraphs or bullet points.</li>
                        <li><strong>Sign-off:</strong> <code>Warm regards, [Your Name] | [LinkedIn / Phone]</code>.</li>
                    </ul>
                `
            },
            {
                id: 'comm_self_intro',
                title: 'Self-Introduction & Elevator Pitch',
                estimatedTime: '12 min',
                summary: 'Answering "Tell Me About Yourself" using the Present-Past-Future framework and 60-second pitch.',
                content: `
                    <h4>1. The 3-Step Present-Past-Future Formula</h4>
                    <ul>
                        <li><strong>Present (30%):</strong> Who you are right now (e.g., Final year Computer Science student passionate about backend engineering & algorithms).</li>
                        <li><strong>Past (40%):</strong> Notable projects, internships, problem-solving streak, and technical stack.</li>
                        <li><strong>Future (30%):</strong> Why you are eager to join this specific company and how your skills create value.</li>
                    </ul>
                `
            },
            {
                id: 'comm_group_discussions',
                title: 'Group Discussion (GD) Strategies',
                estimatedTime: '12 min',
                summary: 'Initiating, summarizing, handling interruptions, PREP framework (Point, Reason, Example, Point).',
                content: `
                    <h4>1. The PREP Framework for Structuring Arguments</h4>
                    <ul>
                        <li><strong>P - Point:</strong> State your core perspective clearly.</li>
                        <li><strong>R - Reason:</strong> Explain why this perspective holds true with logical reasoning.</li>
                        <li><strong>E - Example:</strong> Provide a real-world statistic, case study, or company example.</li>
                        <li><strong>P - Point:</strong> Reiterate your stance to conclude powerfully.</li>
                    </ul>
                `
            },
            {
                id: 'comm_hr_interviews',
                title: 'HR Behavioral Questions (STAR Method)',
                estimatedTime: '14 min',
                summary: 'Mastering situational questions ("Tell me about a conflict / failure") using Situation, Task, Action, Result.',
                content: `
                    <h4>1. The STAR Method Explained</h4>
                    <ul>
                        <li><strong>Situation:</strong> Set the context of the challenge you faced.</li>
                        <li><strong>Task:</strong> Explain what responsibility or goal you needed to accomplish.</li>
                        <li><strong>Action:</strong> Detail the specific steps <em>you</em> took (focus on your contribution).</li>
                        <li><strong>Result:</strong> Share the tangible, measurable outcome (e.g., improved load time by 35%).</li>
                    </ul>
                `
            },
            {
                id: 'comm_body_language',
                title: 'Non-Verbal Communication & Listening',
                estimatedTime: '10 min',
                summary: 'Eye contact, confident posture, voice modulation, pacing, and active listening cues in online/offline interviews.',
                content: `
                    <h4>1. Non-Verbal Checklist for Interviews</h4>
                    <ul>
                        <li><strong>Camera Eye Contact:</strong> In video interviews, look directly at the webcam when speaking, not just the screen.</li>
                        <li><strong>Active Listening:</strong> Nod occasionally, avoid interrupting, and take a 1-second pause before answering thoughtful questions.</li>
                        <li><strong>Tone & Modulation:</strong> Keep a steady, confident pace (130-150 words per minute) avoiding monotone delivery.</li>
                    </ul>
                `
            }
        ]
    }
];

// =============================================================================
// Progress Storage & Calculation Methods (W3Schools Style)
// =============================================================================

const STORAGE_KEY = 'skillprep_learning_progress';

function getLearningState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            return JSON.parse(raw);
        }
    } catch (e) {
        console.error('Failed to parse learning state', e);
    }

    // Default state with initial progress sample matching user specification
    const defaultState = {
        completedTopics: [
            // Python sample completed topics (4/10 = 40% or initial sample)
            'python_variables',
            'python_datatypes',
            'python_operators',
            'python_conditionals',
            // Aptitude sample completed topics (2/7 = 29%)
            'apt_number_system',
            'apt_percentages',
            // Technical sample (3/6 = 50%)
            'tech_ds_arrays_linkedlists',
            'tech_stacks_queues',
            'tech_algorithms_sorting',
            // Communication sample (3/5 = 60%)
            'comm_email_etiquette',
            'comm_self_intro',
            'comm_group_discussions'
        ],
        lastStudied: {
            subjectId: 'python',
            topicId: 'python_loops'
        }
    };
    saveLearningState(defaultState);
    return defaultState;
}

function saveLearningState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save learning state', e);
    }
}

function isTopicCompleted(topicId) {
    const state = getLearningState();
    return state.completedTopics.includes(topicId);
}

function toggleTopicCompletion(topicId) {
    const state = getLearningState();
    const index = state.completedTopics.indexOf(topicId);
    let nowCompleted = false;

    if (index > -1) {
        state.completedTopics.splice(index, 1);
        nowCompleted = false;
    } else {
        state.completedTopics.push(topicId);
        nowCompleted = true;
    }

    saveLearningState(state);
    return nowCompleted;
}

function setTopicCompleted(topicId, completed = true) {
    const state = getLearningState();
    const index = state.completedTopics.indexOf(topicId);
    if (completed && index === -1) {
        state.completedTopics.push(topicId);
    } else if (!completed && index > -1) {
        state.completedTopics.splice(index, 1);
    }
    saveLearningState(state);
}

function setLastStudied(subjectId, topicId) {
    const state = getLearningState();
    state.lastStudied = { subjectId, topicId };
    saveLearningState(state);
}

function getLastStudied() {
    const state = getLearningState();
    return state.lastStudied || { subjectId: 'python', topicId: 'python_variables' };
}

// Calculate Subject Progress (Percentage and Counts)
function getSubjectProgress(subjectId) {
    const subject = LEARNING_SUBJECTS.find(s => s.id === subjectId);
    if (!subject) return { completed: 0, total: 0, percentage: 0 };

    const state = getLearningState();
    const total = subject.topics.length;
    const completed = subject.topics.filter(t => state.completedTopics.includes(t.id)).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
        subjectId: subject.id,
        title: subject.title,
        icon: subject.icon,
        completed: completed,
        total: total,
        percentage: percentage
    };
}

// Calculate Overall Learning Progress Across All Subjects
function getOverallLearningProgress() {
    const state = getLearningState();
    let totalTopics = 0;
    let totalCompleted = 0;

    LEARNING_SUBJECTS.forEach(subject => {
        totalTopics += subject.topics.length;
        totalCompleted += subject.topics.filter(t => state.completedTopics.includes(t.id)).length;
    });

    const percentage = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;

    return {
        totalCompleted,
        totalTopics,
        percentage
    };
}
