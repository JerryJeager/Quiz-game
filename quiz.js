const quiz = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {
                ans: `&lt; javascript &gt;`,
                correct: false
            },
            {
                ans: `&lt; scripting &gt;`,
                correct: false
            },
            {
                ans: `&lt; js &gt;`,
                correct: false
            },
            {
                ans: `&lt; script &gt;`,
                correct: true
            }
        ]
    },
    {
        question: `What is the correct JavaScript syntax to change the content of the HTML element below?
        
        
        <p id="demo">This is a demonstration.</p>`,
        answers: [
            {
                ans: `document.getElementByName("p").innerHTML = "Hello World!`,
                correct: false
            },
            {
                ans: `#demo.innerHTML = "Hello World!`,
                correct: false
            },
            {
                ans: `document.getElement("p").innerHTML = "Hello World!`,
                correct: false
            },
            {
                ans: `document.getElementById("demo).innerHTML = "Hello World!`,
                correct: true
            }
        ]
    },
    {
        question: "where is the correct place to insert a JavaScript",
        answers: [
            {
                ans: `Both the &lt; head &gt; section and the &lt; body &gt; section are correct`,
                correct: true
            },
            {
                ans: `The &lt; head &gt; section`,
                correct: false
            },
            {
                ans: `The &lt; body &gt; section`,
                correct: false
            }
        ]
    },
    {
        question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
        answers: [
            {
                ans: `&lt; script src="xxx.js" &gt;`,
                correct: true
            },
            {
                ans: `&lt; script href="xxx.js" &gt;`,
                correct: false
            },
            {
                ans: `&lt; script name="xxx.js" &gt;`,
                correct: false
            }
        ]
    },
    {
        question: `The external JavaScript file must contain the &lt; script &gt; tag`,
        answers: [
            {
                ans: "True",
                correct: false
            },
            {
                ans: "False",
                correct: true
            }
        ]
    },
    {
        question: `How do you write "Hello World" in an alert box?`,
        answers: [
            {
                ans: `msgBox("Hello World)`,
                correct: false
            },
            {
                ans: `alertBox("Hello World")`,
                correct: false
            },
            {
                ans: `alert("Hello World")`,
                correct: true
            },
            {
                ans: `msg("Hello World")`,
                correct: false
            }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            {
                ans: `function myFunction()`,
                correct: true
            },
            {
                ans: `function = myFunction()`,
                correct: false
            },
            {
                ans: `function:myFunction()`,
                correct: false
            }
        ]
    },
    {
        question: `How do you call a function named "myFunction"?`,
        answers: [
            {
                ans: `myFunction()`,
                correct: true
            },
            {
                ans: `call function myFunction()`,
                correct: false
            },
            {
                ans: `call myFunction()`,
                correct: false
            }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {
                ans: `if i == 5 then`,
                correct: false
            },
            {
                ans: `if i = 5`,
                correct: false
            },
            {
                ans: `if i = 5 then`,
                correct: false
            },
            {
                ans: `if(i == 5)`,
                correct: true
            }
        ]
    },
    {
        question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
        answers: [
            {
                ans: `if(i != 5)`,
                correct: true
            },
            {
                ans: `if(i &lt;  &gt; 5)`,
                correct: false
            },
            {
                ans: `if i &lt;  &gt; 5`,
                correct: false
            },
            {
                ans: `if i =! 5 then`,
                correct: false
            }
        ]
    },
    {
        question: "How does a WHILE loop start?",
        answers: [
            {
                ans: `while(i &lt; = 10; i++)`,
                correct: false
            },
            {
                ans: `while i = 1 to 10`,
                correct: false
            },
            {
                ans: `while(i &lt; = 10)`,
                correct: true
            }
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {
                ans: `for i = 1 to  5`,
                correct: false
            },
            {
                ans: `for(i = 0; i &lt; = 5)`,
                correct: false
            },
            {
                ans: `for(i = 0; i &lt; = 5; i++)`,
                correct: true
            },
            {
                ans: `for(i &lt; = 5; i++)`,
                correct: false
            }
        ]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: [
            {
                ans: `&lt; !--This is a comment-- &gt;`,
                correct: false
            },
            {
                ans: `'This is a comment`,
                correct: false
            },
            {
                ans: `//This is a comment`,
                correct: true
            }
        ]
    },
    {
        question: "How to insert a comment that has more than one line?",
        answers: [
            {
                ans: `&lt; !--This comment has<br>more than oen line-- &gt;`,
                correct: false
            },
            {
                ans: `//This comment has<br> more than one line`,
                correct: false
            },
            {
                ans: `/*This comment<br> has more<br>one line*/`,
                correct: true
            }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            {
                ans: `var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
                correct: false
            },
            {
                ans: `var colors = ["red", "green", "blue"]`,
                correct: true
            },
            {
                ans: `var colors = "red", "green", "blue"`,
                correct: false
            },
            {
                ans: `var colors = (1:"red", 2:"green", 3:"blue")`,
                correct: false
            }
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: [
            {
                ans: `Math.round(7.25)`,
                correct: true
            },
            {
                ans: `round(7.25)`,
                correct: false
            },
            {
                ans: `rnd(7.25)`,
                correct: false
            },
            {
                ans: `Math.rnd(7.25)`,
                correct: false
            }
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            {
                ans: `Math.max(x, y)`,
                correct: true
            },
            {
                ans: `Math.ceil(x, 7)`,
                correct: false
            },
            {
                ans: `ceil(x, y)`,
                correct: false
            },
            {
                ans: `top(x, y)`,
                correct: false
            }
        ]
    },
    {
        question: `What is the correct JavaScript syntax for opening a new window called "jerry`,
        answers: [
            {
                ans: `jerry = window.open("https://github.com/JerryJeager")`,
                correct: true
            },
            {
                ans: `jerry = window.new("https://github.com/JerryJeager)`,
                correct: false
            }
        ]
    },
    {
        question: "JavaScript is not the same as Java",
        answers: [
            {
                ans: `False`,
                correct: false
            },
            {
                ans: `True`,
                correct: true
            }
        ]
    },
    {
        question: "How can you detect the client's browser name",
        answers: [
            {
                ans: `navigator.appName`,
                correct: true
            },
            {
                ans: `browser.name`,
                correct: false
            },
            {
                ans: `client.navName`,
                correct: false
            }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            {
                ans: `onclick`,
                correct: true
            },
            {
                ans: `onmouseover`,
                correct: false
            },
            {
                ans: `onchange`,
                correct: false
            },
            {
                ans: `onmouseclick`,
                correct: false
            }
        ]
    },
    {
        question: "How do you declare a JavaScript Variable?",
        answers: [
            {
                ans: `variable carName`,
                correct: false
            },
            {
                ans: `string carName`,
                correct: false
            },
            {
                ans: `var carName`,
                correct: true
            },
            {
                ans: `v carName`,
                correct: false
            }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable",
        answers: [
            {
                ans: `==`,
                correct: false
            },
            {
                ans: `X`,
                correct: false
            },
            {
                ans: `=`,
                correct: true
            },
            {
                ans: `*`,
                correct: false
            }
        ]
    },
    {
        question: `What will the following code return: Boolean(10 > 9)`,
        answers: [
            {
                ans: `NaN`,
                correct: false
            },
            {
                ans: `true`,
                correct: true
            },
            {
                ans: `false`,
                correct: false
            }
        ]
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: [
            {
                ans: `Yes`,
                correct: true
            },
            {
                ans: `No`,
                correct: false
            }
        ]
    },
    {
        question: "What language processor does Javascript use to convert source code to executable program",
        answers: [
            {
                ans: `compiler`,
                correct: false
            },
            {
                ans: `assembler`,
                correct: false
            },
            {
                ans: `interpreter`,
                correct: true
            }
        ]
    },
    {
        question: "API stands for? ",
        answers: [
            {
                ans: `Applicable Programming Interface`,
                correct: false
            },
            {
                ans: `Automated Programming Iteration`,
                correct: false
            },
            {
                ans: `Application Programming Interface`,
                correct: true
            }
        ]
    },
    {
        question: `Add number 5 to the front of the following array:  const jerryArray = ["Jaeger", "Rumbling", 18]`,
        answers: [
            {
                ans: `jerryArray = [5, "Jaeger", "Rumbling", "18"]`,
                correct: false
            },
            {
                ans: `jerryArray.push(5)`,
                correct: false
            },
            {
                ans: `jerryArray.shift(5)`,
                correct: false
            },
            {
                ans: `jerryArray.unshift(5)`,
                correct: true
            }
        ]
    },
    {
        question: `Given a class "Male", create a new class "Jerry" that should inherit the properties of the "Male" class`,
        answers: [
            {
                ans: `class Jerry : Male{}`,
                correct: false
            },
            {
                ans: `class Jerry inherits Male{}`,
                correct: false
            },
            {
                ans: `class Jerry extends Male{}`,
                correct: true
            },
            {
                ans: `class Jerry from Male{}`,
                correct: false
            }
        ]
    },
    {
        question: "what is the syntax for an anonymous arrow function",
        answers: [
            {
                ans: `function() - &gt; {}`,
                correct: false
            },
            {
                ans: `() - &gt; {}`,
                correct: false
            },
            {
                ans: `() += {}`,
                correct: false
            },
            {
                ans: `() = &gt; {}`,
                correct: true
            }
        ]
    }
]


export {quiz}