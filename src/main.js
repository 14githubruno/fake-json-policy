// container where fetched data get displayed
const userChoiceContainer = document.querySelector(".user-choice-container");

// 5 buttons for fetching and displaying the data
const btnAddress = document.querySelector(".address-btn");
const btnPhoneNum = document.querySelector(".phone-btn");
const btnEmail = document.querySelector(".email-btn");
const btnUsername = document.querySelector(".username-btn");
const btnTotalData = document.querySelector(".total-btn");

// clear-buttons' behaviour: restoring output, showing up if something is fetched, hiding if nothing is fetched
const clearButton = document.querySelector(".clear-button");
const clearButtonMobile = document.querySelector(".clear-button-mobile");

const showClearButtons = () => {
  [clearButton, clearButtonMobile].forEach((clearBtn) => {
    clearBtn.classList.remove("hidden");
  });
};

const hideClearButtons = () => {
  [clearButton, clearButtonMobile].forEach((clearBtn) => {
    clearBtn.classList.add("hidden");
  });
};

[clearButton, clearButtonMobile].forEach((clearBtn) => {
  clearBtn.addEventListener("click", () => {
    hideClearButtons();
    userChoiceContainer.innerHTML = `<p>Data will be displayed here</p>`;
  });
});

// error message
const errorMessage =
  "Our customers seem too greedy right now. Try again to taste their generosity";

// function which stores the error message, if something goes wrong, to be displayed in the output
const displayError = () => {
  const parag = document.createElement("p");
  parag.textContent = errorMessage;
  userChoiceContainer.appendChild(parag);
};

// 5 functions for fetching 5 data types through the 5 buttons
//
// function for fetching emails
const fetchEmail = async () => {
  userChoiceContainer.innerHTML = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!res.ok) {
      displayError();
      return;
    }

    showClearButtons();
    data.forEach((el) => {
      const element = `<p>{ ${el.name} } <br> ${el.email}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } catch {
    displayError();
  }
};
btnEmail.addEventListener("click", fetchEmail);

//
// function for fetching addresses
const fetchAddress = async () => {
  userChoiceContainer.innerHTML = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!res.ok) {
      displayError();
      return;
    }

    showClearButtons();
    data.forEach((el) => {
      const element = `<p>{ ${el.name} } <br> ${el.address.street} <br> ${el.address.suite} <br> ${el.address.city} <br> ${el.address.zipcode}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } catch {
    displayError();
  }
};
btnAddress.addEventListener("click", fetchAddress);

//
// function for fetching phone numbers
const fetchPhoneNumber = async () => {
  userChoiceContainer.innerHTML = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!res.ok) {
      displayError();
      return;
    }

    showClearButtons();
    data.forEach((el) => {
      const element = `<p>{ ${el.name} } <br> ${el.phone}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } catch {
    displayError();
  }
};
btnPhoneNum.addEventListener("click", fetchPhoneNumber);

//
// function for fetching usernames
const fetchUsername = async () => {
  userChoiceContainer.innerHTML = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!res.ok) {
      displayError();
      return;
    }

    showClearButtons();
    data.forEach((el) => {
      const element = `<p>{ ${el.name} } <br> ${el.username}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } catch {
    displayError();
  }
};
btnUsername.addEventListener("click", fetchUsername);

//
// function for fetching all the data
const fetchAllData = async () => {
  userChoiceContainer.innerHTML = "";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (!res.ok) {
      displayError();
      return;
    }

    showClearButtons();
    data.forEach((el) => {
      const element = `<p>{ ${el.name} } alias ${el.username} lives in ${el.address.street}, ${el.address.suite}, ${el.address.city}, ${el.address.zipcode}, and can be reached from distance here, ${el.phone}, and here, ${el.email}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } catch {
    displayError();
  }
};
btnTotalData.addEventListener("click", fetchAllData);

//
// extra behaviour of all 5 buttons, so they allow the output section to scroll into view
[btnUsername, btnEmail, btnPhoneNum, btnAddress, btnTotalData].forEach(
  (btn) => {
    btn.addEventListener("click", () => {
      userChoiceContainer.scrollIntoView();
    });
  }
);

// top-anchor element behaviour
const topAnchor = document.querySelector(".go-top");

const goToTheTop = () => {
  document.body.scrollIntoView();
};
topAnchor.addEventListener("click", goToTheTop);
