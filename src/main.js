// container where fetched data get displayed
const userChoiceContainer = document.querySelector(".user-choice-container");

// buttons' container
const buttonsContainer = document.querySelector(".container-btns");

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

// function for displaying data
const displayData = (data, target) => {
  let element;

  if (target === "username-btn") {
    data.forEach((el) => {
      element = `<p>{ ${el.name} } <br> ${el.username}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } else if (target === "email-btn") {
    data.forEach((el) => {
      element = `<p>{ ${el.name} } <br> ${el.email}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } else if (target === "phone-btn") {
    data.forEach((el) => {
      element = `<p>{ ${el.name} } <br> ${el.phone}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } else if (target === "address-btn") {
    data.forEach((el) => {
      element = `<p>{ ${el.name} } <br> ${el.address.street} <br> ${el.address.suite} <br> ${el.address.city} <br> ${el.address.zipcode}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  } else {
    data.forEach((el) => {
      element = `<p>{ ${el.name} } alias ${el.username} lives in ${el.address.street}, ${el.address.suite}, ${el.address.city}, ${el.address.zipcode}, and can be reached from distance here, ${el.phone}, and here, ${el.email}</p>`;
      userChoiceContainer.insertAdjacentHTML("beforeend", element);
    });
  }
};

// endpoint
const url = "https://jsonplaceholder.typicode.com/users";

// function for fetching data
const fetchData = async (e) => {
  const notAButton = e.target.classList.contains("container-btns");
  if (notAButton) return;

  userChoiceContainer.innerHTML = "";

  try {
    const res = await fetch(url);
    if (!res.ok) {
      displayError();
      return;
    }

    const data = await res.json();
    const target = e.target.getAttribute("class");
    userChoiceContainer.scrollIntoView();
    displayData(data, target);
    showClearButtons();
  } catch {
    displayError();
  }
};
buttonsContainer.addEventListener("click", fetchData);

// top-anchor element behaviour
const topAnchor = document.querySelector(".go-top");

const goToTheTop = () => {
  document.body.scrollIntoView();
};
topAnchor.addEventListener("click", goToTheTop);
