import React, { useState, useEffect } from 'react';
import $ from 'jquery';

function KeyMapper({leftClickHandler, rightClickHandler, escapeHandler}) {
  function handleKeyDown(event) {
    event.preventDefault();
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        leftClickHandler();
        break;
      case "ArrowRight":
      case "ArrowDown":
      case "PageDown":
        rightClickHandler();
        break;
      default:
        escapeHandler();
        break;
    }
  }
  useEffect(() => {
    $('#keymap').focus();
  }, []);
  return (
    <div tabIndex={0} onKeyDown={(e) => handleKeyDown(e)} id="keymap"></div>
  );
}

export { KeyMapper };