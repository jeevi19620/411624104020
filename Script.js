let messages = [];

const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const messageContainer = document.getElementById("messageContainer");
const status = document.getElementById("status");
const count = document.getElementById("count");
input.addEventListener("input", function () {
    count.textContent = input.value.length;
});
function displayMessages() {

    messageContainer.innerHTML = "";

    messages.forEach((msg, index) => {

        const p = document.createElement("p");
        p.textContent = msg;
        messageContainer.appendChild(p);

        setTimeout(() => {

            if (messages[index] !== undefined) {
                messages.splice(index, 1);
                displayMessages();
                status.textContent = "Message Expired";
            }

        }, 10000);

    });

}
addBtn.addEventListener("click", function () {

    let message = input.value;

    let promise = new Promise(function (resolve, reject) {

        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });
    promise
        .then(function (result) {

            status.textContent = "Message Added Successfully";

            messages.push(result);

            displayMessages();

            input.value = "";
            count.textContent = "0";

        })

        .catch(function (error) {

            status.textContent = error;

        });

});
clearBtn.addEventListener("click", function () {

    messages = [];

    messageContainer.innerHTML = "";

    status.textContent = "All Messages Cleared";

});