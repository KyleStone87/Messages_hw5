const message = prompt('Choose an option:\r'+
'1: Show messages\r'+
'2: Add a message\r'+
'3: Delete a message\r'+
'0: Quit')

const messages = [
'message 01',
'message 02',
'message 03',
'message 04',
'message 05',
]
var displayMessage="The current messages are: <ol>"
// Display the result
const output = document.getElementById("output")
function messageDisplay(){
    for (var i=0; i<messages.length;i++){
        displayMessage += "<li>"+messages[i]+"</li>"
    }
    displayMessage += "</ol"
    return output.innerHTML = displayMessage
}

switch (message){
    case "1":
        // alert('Your input is: ' + message)
        messageDisplay()
        break
    case "2":
        // have the user enter a message
        messages.push(prompt('Please enter a new message'))
        messageDisplay()
        break
    case "3":
        messages.splice(prompt("Enter the message index between 1 and "+messages.length)-1,1)
        messageDisplay()
        break
    case "0":
        // alert('Your input is: ' + message)
        output.innerHTML = 'Good Bye'
        break
    default:
        output.innerHTML = 'Please refresh and select a correct command'
}