import keyValues from "./keyvalues.js";

export default function configForm(onSubmit) {
  const formElem = document.querySelector("form");

  const submitBtnElem = document.querySelector(
    `#${keyValues.formIds.submitBtn}`
  );
  const loginInElem = document.querySelector(
    `#${keyValues.formIds.userLoginInput}`
  );

  const handle = onSubmit;

  formElem.addEventListener("submit", async function (evt) {
    evt.preventDefault();
    await handle(String(loginInElem.value));
  });
}
