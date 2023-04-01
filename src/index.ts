const form = document.querySelector("[data-form]");
const output = document.querySelector("[data-output]");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target instanceof Element) {
    const value = e.target?.querySelector<HTMLInputElement>('[name="search"]')
      ?.value;
    const button = e.target?.querySelector<HTMLButtonElement>(
      '[type="submit"]'
    );

    if (value?.length) {
      if (button) button.disabled = true;
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
        .then((response) => response.json())
        .then((data) => {
          if (button) button.disabled = false;
          console.log(data);

          if (output) {
            output.innerHTML = JSON.stringify(data, null, 2).trim();
          }
        });
    }
  }
});
