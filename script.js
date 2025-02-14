/* 
<!-- MidTerm Exam - DevOps Infrastructure Level 1 -->
<!-- CCTB | Canadian College of Technology and Business -->
<!-- Description: 
    
    H2O Challenge Web Application

    Description: This web application helps users track their daily water intake with a goal of 2 liters.
    The interface is divided into two panels:
    - Left Panel: Displays the challenge title, goal, and a visual representation of the remaining water to be consumed.
    - Right Panel: Allows users to select how many 250ml glasses of water they have drank.
    
    The app is designed to encourage healthy hydration habits in a simple and interactive way.

    Instructor: Washington Valencia
    Course: CCTB - DevOps Infrastructure Level 1
    MidTerm Exam Project 

    Note: This project is adapted from a public project. Original credits go to the respective author(s).
-->
*/
const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 1000}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${1 - (50 * fullCups / 1000)}L`
    }
}
