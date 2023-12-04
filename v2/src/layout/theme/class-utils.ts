function getClassNameWithPrefix(classlist: DOMTokenList, prefix: string): string {
  for (let i = 0; i <= classlist.length; i += 1) {
    const className = classlist[i]
    if (className && className.startsWith(prefix)) {
      return className
    }
  }
  return ""
}

function removeClassNameWithPrefix(classlist: DOMTokenList, prefix: string) {
  const classNamesToRemove: string[] = []
  for (let i = 0; i <= classlist.length; i += 1) {
    const className = classlist[i]
    if (className && className.startsWith(prefix)) {
      classNamesToRemove.push(className)
    }
  }
  classlist.remove(...classNamesToRemove)
}



function getNextTheme(currentTheme: string) {
  return currentTheme === "theme-light" ? "theme-dark" : "theme-light"
}



export function changeTheme() {
  const classsList = document.documentElement.classList
  const currentTheme = getClassNameWithPrefix(classsList, "theme-")
  removeClassNameWithPrefix(classsList, "theme-")
  const nextTheme = getNextTheme(currentTheme)
  localStorage.setItem("theme", nextTheme)
  document.documentElement.classList.add(nextTheme)
}