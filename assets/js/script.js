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

/* Implement next/prev pagination keybindings for chapter pages */

const serialChapterNextChapterLink = document.querySelector("#next-chapter-link")
const serialChapterPrevChapterLink = document.querySelector("#prev-chapter-link")

if (serialChapterNextChapterLink) {
  window.addEventListener("keydown", (event) => {
    event.preventDefault()

    switch (event.code) {
    case "ArrowRight":
      serialChapterNextChapterLink.click()
      break;
    }
  })
}

if (serialChapterPrevChapterLink) {
  window.addEventListener("keydown", (event) => {
    event.preventDefault()

    switch (event.code) {
    case "ArrowLeft":
      serialChapterPrevChapterLink.click()
      break;
    }
  })
}
