export default function TodoList({$app, initailState}) {

    this.state = initailState

    const $target = document.createElement("ul")
    $target.className = "todoList"
    $app.appendChild($target)

    this.$target = $target

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const htmlString = `${this.state.map((d) => `<li>${d}</li>`).join('')}`
        $target.innerHTML = htmlString
    }

    this.render()
}