const subnav = document.querySelectorAll(".subnav");
const hasSubnav = document.querySelectorAll(".has-subnav");
const overflow = document.querySelector(".overflow");
const headerList = document.querySelector(".accordion__list");

const mobileHeader = document.querySelector(".accordion");
const burger = document.querySelector(".burger");
const mobileHeaderItems = document.querySelectorAll(
  ".mobile-header__list-item"
);
const subNavItems = document.querySelectorAll(".mobile-subnav-item");

// MOBILE VERSION
burger.addEventListener("click", () => {
  burger.classList.toggle("opened");
  headerList.classList.toggle("accordion__list--opened");
  mobileHeader.classList.toggle("accordion--opened");

  if (burger.classList.contains("opened")) {
    overflow.style.display = "block";
  } else {
    overflow.style.display = "none";
  }
});


const initAccordion = () => {
  const accordion = document.querySelectorAll(".accordion");

  const closeList = (list) => {
    const openedChildLists = list.querySelectorAll(".accordion__list--opened");
    openedChildLists.forEach((childList) => {
      childList.classList.remove("accordion__list--opened");
    });
    list.classList.remove("accordion__list--opened");
  };

  const openList = (list) => {
    const parentItem = list.parentElement;
    const parentItemList = parentItem.parentElement;

    for (let item of parentItemList.children) {
      const list = item.querySelector(".accordion__list");

      if (list) {
        closeList(list);
      }
    }

    list.classList.add("accordion__list--opened");
  };

  accordion.forEach((currentAccordion) => {
    const openBtn = currentAccordion.querySelectorAll(".accordion__open");
    openBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const parentItem = e.target.parentElement;
        const list = parentItem.querySelector(".accordion__list");
        const isListOpened = list.classList.contains("accordion__list--opened");

        if (isListOpened === true) {
          closeList(list);
          btn.scrollIntoView(0, 0)

        } else {
          openList(list);
          btn.scrollIntoView(top)

        }
      });
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
});

// HOVER HEADER LIST
function hover(e) {
  e.forEach((element) => {
    element.addEventListener("mouseover", () => {
      overflow.style.display = "block";
    });
  });
  e.forEach((element) => {
    element.addEventListener("mouseout", () => {
      overflow.style.display = "none";
    });
  });
}

hover(hasSubnav);
hover(subnav);
