"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-autoplay";
exports.ids = ["vendor-chunks/embla-carousel-autoplay"];
exports.modules = {

/***/ "(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Autoplay)\n/* harmony export */ });\nconst defaultOptions = {\n  active: true,\n  breakpoints: {},\n  delay: 4000,\n  jump: false,\n  playOnInit: true,\n  stopOnFocusIn: true,\n  stopOnInteraction: true,\n  stopOnMouseEnter: false,\n  stopOnLastSnap: false,\n  rootNode: null\n};\n\nfunction Autoplay(userOptions = {}) {\n  let options;\n  let emblaApi;\n  let destroyed;\n  let playing = false;\n  let resume = true;\n  let jump = false;\n  let timer = 0;\n  function init(emblaApiInstance, optionsHandler) {\n    emblaApi = emblaApiInstance;\n    const {\n      mergeOptions,\n      optionsAtMedia\n    } = optionsHandler;\n    const optionsBase = mergeOptions(defaultOptions, Autoplay.globalOptions);\n    const allOptions = mergeOptions(optionsBase, userOptions);\n    options = optionsAtMedia(allOptions);\n    if (emblaApi.scrollSnapList().length <= 1) return;\n    jump = options.jump;\n    destroyed = false;\n    const {\n      eventStore,\n      ownerDocument\n    } = emblaApi.internalEngine();\n    const emblaRoot = emblaApi.rootNode();\n    const root = options.rootNode && options.rootNode(emblaRoot) || emblaRoot;\n    const container = emblaApi.containerNode();\n    emblaApi.on('pointerDown', stopTimer);\n    if (!options.stopOnInteraction) {\n      emblaApi.on('pointerUp', startTimer);\n    }\n    if (options.stopOnMouseEnter) {\n      eventStore.add(root, 'mouseenter', () => {\n        resume = false;\n        stopTimer();\n      });\n      if (!options.stopOnInteraction) {\n        eventStore.add(root, 'mouseleave', () => {\n          resume = true;\n          startTimer();\n        });\n      }\n    }\n    if (options.stopOnFocusIn) {\n      emblaApi.on('slideFocusStart', stopTimer);\n      if (!options.stopOnInteraction) {\n        eventStore.add(container, 'focusout', startTimer);\n      }\n    }\n    eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);\n    if (options.playOnInit && !documentIsHidden()) startTimer();\n  }\n  function destroy() {\n    emblaApi.off('pointerDown', stopTimer).off('pointerUp', startTimer).off('slideFocusStart', stopTimer);\n    stopTimer();\n    destroyed = true;\n    playing = false;\n  }\n  function startTimer() {\n    if (destroyed) return;\n    if (!resume) return;\n    if (!playing) emblaApi.emit('autoplay:play');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = ownerWindow.setInterval(next, options.delay);\n    playing = true;\n  }\n  function stopTimer() {\n    if (destroyed) return;\n    if (playing) emblaApi.emit('autoplay:stop');\n    const {\n      ownerWindow\n    } = emblaApi.internalEngine();\n    ownerWindow.clearInterval(timer);\n    timer = 0;\n    playing = false;\n  }\n  function visibilityChange() {\n    if (documentIsHidden()) {\n      resume = playing;\n      return stopTimer();\n    }\n    if (resume) startTimer();\n  }\n  function documentIsHidden() {\n    const {\n      ownerDocument\n    } = emblaApi.internalEngine();\n    return ownerDocument.visibilityState === 'hidden';\n  }\n  function play(jumpOverride) {\n    if (typeof jumpOverride !== 'undefined') jump = jumpOverride;\n    resume = true;\n    startTimer();\n  }\n  function stop() {\n    if (playing) stopTimer();\n  }\n  function reset() {\n    if (playing) play();\n  }\n  function isPlaying() {\n    return playing;\n  }\n  function next() {\n    const {\n      index\n    } = emblaApi.internalEngine();\n    const nextIndex = index.clone().add(1).get();\n    const lastIndex = emblaApi.scrollSnapList().length - 1;\n    const kill = options.stopOnLastSnap && nextIndex === lastIndex;\n    if (kill) stopTimer();\n    if (emblaApi.canScrollNext()) {\n      emblaApi.scrollNext(jump);\n    } else {\n      emblaApi.scrollTo(0, jump);\n    }\n  }\n  const self = {\n    name: 'autoplay',\n    options: userOptions,\n    init,\n    destroy,\n    play,\n    stop,\n    reset,\n    isPlaying\n  };\n  return self;\n}\nAutoplay.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-autoplay.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0I7QUFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYW5kYXJha3UvLi9ub2RlX21vZHVsZXMvZW1ibGEtY2Fyb3VzZWwtYXV0b3BsYXkvZXNtL2VtYmxhLWNhcm91c2VsLWF1dG9wbGF5LmVzbS5qcz83YWI5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICBhY3RpdmU6IHRydWUsXG4gIGJyZWFrcG9pbnRzOiB7fSxcbiAgZGVsYXk6IDQwMDAsXG4gIGp1bXA6IGZhbHNlLFxuICBwbGF5T25Jbml0OiB0cnVlLFxuICBzdG9wT25Gb2N1c0luOiB0cnVlLFxuICBzdG9wT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgc3RvcE9uTW91c2VFbnRlcjogZmFsc2UsXG4gIHN0b3BPbkxhc3RTbmFwOiBmYWxzZSxcbiAgcm9vdE5vZGU6IG51bGxcbn07XG5cbmZ1bmN0aW9uIEF1dG9wbGF5KHVzZXJPcHRpb25zID0ge30pIHtcbiAgbGV0IG9wdGlvbnM7XG4gIGxldCBlbWJsYUFwaTtcbiAgbGV0IGRlc3Ryb3llZDtcbiAgbGV0IHBsYXlpbmcgPSBmYWxzZTtcbiAgbGV0IHJlc3VtZSA9IHRydWU7XG4gIGxldCBqdW1wID0gZmFsc2U7XG4gIGxldCB0aW1lciA9IDA7XG4gIGZ1bmN0aW9uIGluaXQoZW1ibGFBcGlJbnN0YW5jZSwgb3B0aW9uc0hhbmRsZXIpIHtcbiAgICBlbWJsYUFwaSA9IGVtYmxhQXBpSW5zdGFuY2U7XG4gICAgY29uc3Qge1xuICAgICAgbWVyZ2VPcHRpb25zLFxuICAgICAgb3B0aW9uc0F0TWVkaWFcbiAgICB9ID0gb3B0aW9uc0hhbmRsZXI7XG4gICAgY29uc3Qgb3B0aW9uc0Jhc2UgPSBtZXJnZU9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIEF1dG9wbGF5Lmdsb2JhbE9wdGlvbnMpO1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBtZXJnZU9wdGlvbnMob3B0aW9uc0Jhc2UsIHVzZXJPcHRpb25zKTtcbiAgICBvcHRpb25zID0gb3B0aW9uc0F0TWVkaWEoYWxsT3B0aW9ucyk7XG4gICAgaWYgKGVtYmxhQXBpLnNjcm9sbFNuYXBMaXN0KCkubGVuZ3RoIDw9IDEpIHJldHVybjtcbiAgICBqdW1wID0gb3B0aW9ucy5qdW1wO1xuICAgIGRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIGNvbnN0IHtcbiAgICAgIGV2ZW50U3RvcmUsXG4gICAgICBvd25lckRvY3VtZW50XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgY29uc3QgZW1ibGFSb290ID0gZW1ibGFBcGkucm9vdE5vZGUoKTtcbiAgICBjb25zdCByb290ID0gb3B0aW9ucy5yb290Tm9kZSAmJiBvcHRpb25zLnJvb3ROb2RlKGVtYmxhUm9vdCkgfHwgZW1ibGFSb290O1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVtYmxhQXBpLmNvbnRhaW5lck5vZGUoKTtcbiAgICBlbWJsYUFwaS5vbigncG9pbnRlckRvd24nLCBzdG9wVGltZXIpO1xuICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgZW1ibGFBcGkub24oJ3BvaW50ZXJVcCcsIHN0YXJ0VGltZXIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Nb3VzZUVudGVyKSB7XG4gICAgICBldmVudFN0b3JlLmFkZChyb290LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgcmVzdW1lID0gZmFsc2U7XG4gICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgfSk7XG4gICAgICBpZiAoIW9wdGlvbnMuc3RvcE9uSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgZXZlbnRTdG9yZS5hZGQocm9vdCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgcmVzdW1lID0gdHJ1ZTtcbiAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdG9wT25Gb2N1c0luKSB7XG4gICAgICBlbWJsYUFwaS5vbignc2xpZGVGb2N1c1N0YXJ0Jywgc3RvcFRpbWVyKTtcbiAgICAgIGlmICghb3B0aW9ucy5zdG9wT25JbnRlcmFjdGlvbikge1xuICAgICAgICBldmVudFN0b3JlLmFkZChjb250YWluZXIsICdmb2N1c291dCcsIHN0YXJ0VGltZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBldmVudFN0b3JlLmFkZChvd25lckRvY3VtZW50LCAndmlzaWJpbGl0eWNoYW5nZScsIHZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIGlmIChvcHRpb25zLnBsYXlPbkluaXQgJiYgIWRvY3VtZW50SXNIaWRkZW4oKSkgc3RhcnRUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZW1ibGFBcGkub2ZmKCdwb2ludGVyRG93bicsIHN0b3BUaW1lcikub2ZmKCdwb2ludGVyVXAnLCBzdGFydFRpbWVyKS5vZmYoJ3NsaWRlRm9jdXNTdGFydCcsIHN0b3BUaW1lcik7XG4gICAgc3RvcFRpbWVyKCk7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICBpZiAoZGVzdHJveWVkKSByZXR1cm47XG4gICAgaWYgKCFyZXN1bWUpIHJldHVybjtcbiAgICBpZiAoIXBsYXlpbmcpIGVtYmxhQXBpLmVtaXQoJ2F1dG9wbGF5OnBsYXknKTtcbiAgICBjb25zdCB7XG4gICAgICBvd25lcldpbmRvd1xuICAgIH0gPSBlbWJsYUFwaS5pbnRlcm5hbEVuZ2luZSgpO1xuICAgIG93bmVyV2luZG93LmNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgIHRpbWVyID0gb3duZXJXaW5kb3cuc2V0SW50ZXJ2YWwobmV4dCwgb3B0aW9ucy5kZWxheSk7XG4gICAgcGxheWluZyA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgIGlmIChkZXN0cm95ZWQpIHJldHVybjtcbiAgICBpZiAocGxheWluZykgZW1ibGFBcGkuZW1pdCgnYXV0b3BsYXk6c3RvcCcpO1xuICAgIGNvbnN0IHtcbiAgICAgIG93bmVyV2luZG93XG4gICAgfSA9IGVtYmxhQXBpLmludGVybmFsRW5naW5lKCk7XG4gICAgb3duZXJXaW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSAwO1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgfVxuICBmdW5jdGlvbiB2aXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmIChkb2N1bWVudElzSGlkZGVuKCkpIHtcbiAgICAgIHJlc3VtZSA9IHBsYXlpbmc7XG4gICAgICByZXR1cm4gc3RvcFRpbWVyKCk7XG4gICAgfVxuICAgIGlmIChyZXN1bWUpIHN0YXJ0VGltZXIoKTtcbiAgfVxuICBmdW5jdGlvbiBkb2N1bWVudElzSGlkZGVuKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG93bmVyRG9jdW1lbnRcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09ICdoaWRkZW4nO1xuICB9XG4gIGZ1bmN0aW9uIHBsYXkoanVtcE92ZXJyaWRlKSB7XG4gICAgaWYgKHR5cGVvZiBqdW1wT3ZlcnJpZGUgIT09ICd1bmRlZmluZWQnKSBqdW1wID0ganVtcE92ZXJyaWRlO1xuICAgIHJlc3VtZSA9IHRydWU7XG4gICAgc3RhcnRUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaWYgKHBsYXlpbmcpIHN0b3BUaW1lcigpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGlmIChwbGF5aW5nKSBwbGF5KCk7XG4gIH1cbiAgZnVuY3Rpb24gaXNQbGF5aW5nKCkge1xuICAgIHJldHVybiBwbGF5aW5nO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5kZXhcbiAgICB9ID0gZW1ibGFBcGkuaW50ZXJuYWxFbmdpbmUoKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBpbmRleC5jbG9uZSgpLmFkZCgxKS5nZXQoKTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSBlbWJsYUFwaS5zY3JvbGxTbmFwTGlzdCgpLmxlbmd0aCAtIDE7XG4gICAgY29uc3Qga2lsbCA9IG9wdGlvbnMuc3RvcE9uTGFzdFNuYXAgJiYgbmV4dEluZGV4ID09PSBsYXN0SW5kZXg7XG4gICAgaWYgKGtpbGwpIHN0b3BUaW1lcigpO1xuICAgIGlmIChlbWJsYUFwaS5jYW5TY3JvbGxOZXh0KCkpIHtcbiAgICAgIGVtYmxhQXBpLnNjcm9sbE5leHQoanVtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmxhQXBpLnNjcm9sbFRvKDAsIGp1bXApO1xuICAgIH1cbiAgfVxuICBjb25zdCBzZWxmID0ge1xuICAgIG5hbWU6ICdhdXRvcGxheScsXG4gICAgb3B0aW9uczogdXNlck9wdGlvbnMsXG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICAgIHBsYXksXG4gICAgc3RvcCxcbiAgICByZXNldCxcbiAgICBpc1BsYXlpbmdcbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5BdXRvcGxheS5nbG9iYWxPcHRpb25zID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgeyBBdXRvcGxheSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJsYS1jYXJvdXNlbC1hdXRvcGxheS5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js\n");

/***/ })

};
;