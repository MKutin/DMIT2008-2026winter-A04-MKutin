/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// 1. selecting topic and new topic form
let topicList = document.querySelector(".topics-list");
let newTopicForm = document.querySelector(".new-topic-form");

// 5, create a function addTopicPage that eil take a name 
const addTopicToPage = (topicName, topicListElement) => {
    let newTopicElement = `<li class="list-group-item">
        ${topicName}
        </li>`
        topicListElement.innerHTML += newTopicElement
}
// 2. adding event listener, stop default 
newTopicForm = addEventListener(
    "submit",
    (event) => {

        event.preventDefault()

        // 3. grab input element & extract/store value
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)

        // 4. va;idatioon - check for empty, use bootstrap 
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        } else {
            topicInput.classList.remove("is-invalid")
        }
        // 6b. don't forget to call the function inside the event listener
        addTopicToPage(newTopic, topicList)
    }
)