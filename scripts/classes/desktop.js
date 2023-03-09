class Desktop {
    static mainDesktop = null
    static mainTaskbar = null
    static container = null

    static createContainer() {
        const container = document.createElement("div")
        container.style.position = "absolute"
        container.style.left = "0px"
        container.style.top = "0px"
        container.style.width = "100%"
        container.style.height = "100%"
        document.body.append(container)
        Desktop.container = container
        return container
    }
    static createTaskbarButton(icon, func) {
        if (!Desktop.mainTaskbar) throw new Error("Taskbar is not created yet")
        const button = document.createElement('button')
        button.style.width = "52px"
        button.style.height = "52px"
        button.style.backgroundColor = "transparent"
        button.style.borderRadius = "0px"
        button.style.borderWidth = "0px"
        button.style.display = "flex"
        button.style.flexWrap = "wrap"
        button.style.alignContent = "center"
        button.style.justifyContent = "center"
        button.style.alignItems = "center"
        button.onclick = func
        const bicon = document.createElement('img')
        bicon.style.width = "48px"
        bicon.style.height = "48px"
        bicon.src = icon
        button.append(bicon)
        Desktop.mainTaskbar.append(button)
        return button
    }
    static setMainDesktop(desktop) {
        const container = Desktop.container
        container.innerHTML = `<img src="${String(desktop.backgroundUrl).replace(/\\/gmi, "\\\\").replace(/["'`<>]/gmi, "")}" draggable=false style="object-fit: cover; width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;">`
        const taskbar = document.createElement("div")
        Desktop.mainTaskbar = taskbar
        taskbar.style = "display:flex; flex-direction:row;backdrop-filter: blur(6px); overflow-y: hidden; border-top-right-radius: 12px; border-top-left-radius: 12px; position: absolute; left: 0px; bottom: 0px; width: 100%; height: 52px; background-color: rgba(100%, 100%, 100%, 45%);"
        taskbar.append(Desktop.createTaskbarButton("assets/icons/odoc.png", Desktop.displayStartMenu))
        taskbar.append(Desktop.createTaskbarButton("assets/icons/webframe2.png", () => {
            Machine.launchProcess("webframe2")
        }))
        container.append(taskbar)
    }
    static displayStartMenu() {

    }

    constructor(url) {
        this.backgroundUrl = url
    }
}