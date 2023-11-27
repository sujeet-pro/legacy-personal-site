export function getClassNameWithPrefix(classlist: DOMTokenList, prefix: string): string {
    for (let i = 0; i <= classlist.length; i += 1) {
        const className = classlist[i]
        if (className && className.startsWith(prefix)) {
            return className
        }
    }
    return ''
}

export function removeClassNameWithPrefix(classlist: DOMTokenList, prefix: string) {
    const classNamesToRemove: string[] = []
    for (let i = 0; i <= classlist.length; i += 1) {
        const className = classlist[i]
        if (className && className.startsWith(prefix)) {
            classNamesToRemove.push(className)
        }
    }
    classlist.remove(...classNamesToRemove)
}

export function getNextTheme(currentTheme: string) {
    if (currentTheme === "theme-light") return "theme-dark"
    return "theme-light"
}