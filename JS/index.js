<<<<<<< HEAD
const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
  
  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
=======
const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
  
  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
>>>>>>> 6c5f9345a6b9c28f5de093c2ad0f7d2fd8345bc9
  date.textContent = currentYear