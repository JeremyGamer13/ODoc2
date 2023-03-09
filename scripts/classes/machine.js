class Machine {
    static _programs = {}
    static _processes = []

    static launchProcess(id) {
        if (Machine._programs[id] == null) throw new Error("Program " + id + " is not registered")
        const instance = Machine._programs[id].launch()
        Machine._processes.push(instance)
    }
    static registerProgram(id, Class) {
        if (Machine._programs[id] != null) throw new Error("Program " + id + " is already registered")
        Machine._programs[id] = Class
    }
}