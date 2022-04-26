


function open_faq() {
  // get the data

    console.log('opening faq')
    questions = get_faq()
    toggleElement('accordionFlushExample')
    console.log(questions)


  for (let i = 0; i < questions.length; i++) {
    headingNode = document.getElementById("flush-heading"+String(i+1))
    textButton = headingNode.firstElementChild
    console.log(textButton)
    textButton.innerHTML = questions[i]['question']
    console.log(questions[i]['question'])

    answerNode = document.getElementById("flush-collapse"+String(i+1))
    answerButton = answerNode.firstElementChild
    answerButton.innerHTML = questions[i]['answer']


  }}

function toggleElement(el) {

  let answer = document.getElementById(el)
  if (answer.style.display === "none") {
    answer.style.display = "inline"
  }
  else {
      answer.style.display = "none";
    }

}

function get_faq() {
  let questions = new Array()

  let question1 = {question: 'Who is this for?',
                  answer: 'answer coming soon!'}

  questions.push(question1)

  let question2 = {question: 'Can associations make money?',
                  answer: 'answer coming soon!'}
  questions.push(question2)

  let question3 = {question: 'How much money?',
                  answer: 'answer coming soon!'}
  questions.push(question3)


  return questions
}
