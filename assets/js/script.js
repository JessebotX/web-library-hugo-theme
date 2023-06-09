/**
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2023 Jesse
 *
 * Permission to use, copy, modify, and/or distribute this software for
 * any purpose with or without fee is hereby granted, provided that the
 * above copyright notice and this permission notice appear in all
 * copies.
 *
 * THE SOFTWARE IS PROVIDED AS IS AND ISC DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
 * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const bodyElement = document.querySelector("body")

const main = () => {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light")
  }

  if (localStorage.getItem("theme") == "dark") {
    bodyElement.classList.add("global-dark-mode")
  }

  document.querySelector("#nav-color-theme-button").addEventListener("click", (event) => {
    bodyElement.classList.toggle("global-dark-mode")

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark")
      bodyElement.classList.add("global-dark-mode")
    } else {
      localStorage.setItem("theme", "light")
      bodyElement.classList.remove("global-dark-mode")
    }
  })

  setupPaginationButton(document.querySelector("#next-chapter-link"), "ArrowRight")
  setupPaginationButton(document.querySelector("#prev-chapter-link"), "ArrowLeft")
}

const setupPaginationButton = (buttonElement, keybindCode) => {
  if (buttonElement) {
    window.addEventListener("keydown", (event) => {
      event.preventDefault()

      switch (event.code) {
      case keybindCode:
        buttonElement.click()
        break;
      }
    })
  }
}

main()
