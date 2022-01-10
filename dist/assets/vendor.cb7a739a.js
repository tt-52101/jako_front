var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source3, exclude) => {
  var target = {};
  for (var prop in source3)
    if (__hasOwnProp.call(source3, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source3[prop];
  if (source3 != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source3)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source3, prop))
        target[prop] = source3[prop];
    }
  return target;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var canUseDom = canUseDOM;
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$3(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString$3(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN;
  }
  if (isObject$6(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$6(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$6(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject$6(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var cachedScrollbarWidth = null;
var cachedDevicePixelRatio = null;
if (canUseDom) {
  window.addEventListener("resize", function() {
    if (cachedDevicePixelRatio !== window.devicePixelRatio) {
      cachedDevicePixelRatio = window.devicePixelRatio;
      cachedScrollbarWidth = null;
    }
  });
}
function scrollbarWidth() {
  if (cachedScrollbarWidth === null) {
    if (typeof document === "undefined") {
      cachedScrollbarWidth = 0;
      return cachedScrollbarWidth;
    }
    var body = document.body;
    var box = document.createElement("div");
    box.classList.add("simplebar-hide-scrollbar");
    body.appendChild(box);
    var width = box.getBoundingClientRect().right;
    body.removeChild(box);
    cachedScrollbarWidth = width;
  }
  return cachedScrollbarWidth;
}
function getElementWindow(element) {
  if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
    return window;
  }
  return element.ownerDocument.defaultView;
}
function getElementDocument(element) {
  if (!element || !element.ownerDocument) {
    return document;
  }
  return element.ownerDocument;
}
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source3 = arguments[i2] != null ? arguments[i2] : {};
    if (i2 % 2) {
      ownKeys$2(Object(source3), true).forEach(function(key) {
        _defineProperty$2(target, key, source3[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source3));
    } else {
      ownKeys$2(Object(source3)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source3, key));
      });
    }
  }
  return target;
}
var SimpleBar = /* @__PURE__ */ function() {
  function SimpleBar2(element) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$1(this, SimpleBar2);
    this.onScroll = function() {
      var elWindow = getElementWindow(_this.el);
      if (!_this.scrollXTicking) {
        elWindow.requestAnimationFrame(_this.scrollX);
        _this.scrollXTicking = true;
      }
      if (!_this.scrollYTicking) {
        elWindow.requestAnimationFrame(_this.scrollY);
        _this.scrollYTicking = true;
      }
      if (!_this.isScrolling) {
        _this.isScrolling = true;
        _this.el.classList.add(_this.classNames.scrolling);
      }
      _this.onStopScrolling();
    };
    this.scrollX = function() {
      if (_this.axis.x.isOverflowing) {
        _this.positionScrollbar("x");
      }
      _this.scrollXTicking = false;
    };
    this.scrollY = function() {
      if (_this.axis.y.isOverflowing) {
        _this.positionScrollbar("y");
      }
      _this.scrollYTicking = false;
    };
    this.onStopScrolling = function() {
      _this.el.classList.remove(_this.classNames.scrolling);
      _this.isScrolling = false;
    };
    this.onMouseEnter = function() {
      if (!_this.isMouseEntering) {
        _this.el.classList.add(_this.classNames.mouseEntered);
        _this.isMouseEntering = true;
      }
      _this.onMouseEntered();
    };
    this.onMouseEntered = function() {
      _this.el.classList.remove(_this.classNames.mouseEntered);
      _this.isMouseEntering = false;
    };
    this.onMouseMove = function(e2) {
      _this.mouseX = e2.clientX;
      _this.mouseY = e2.clientY;
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseMoveForAxis("x");
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseMoveForAxis("y");
      }
    };
    this.onMouseLeave = function() {
      _this.onMouseMove.cancel();
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        _this.onMouseLeaveForAxis("x");
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        _this.onMouseLeaveForAxis("y");
      }
      _this.mouseX = -1;
      _this.mouseY = -1;
    };
    this.onWindowResize = function() {
      _this.scrollbarWidth = SimpleBar2.getScrollbarWidth();
      _this.hideNativeScrollbar();
    };
    this.onPointerEvent = function(e2) {
      var isWithinTrackXBounds, isWithinTrackYBounds;
      _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
      _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();
      if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
        isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
      }
      if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
        isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
      }
      if (isWithinTrackXBounds || isWithinTrackYBounds) {
        e2.stopPropagation();
        if (e2.type === "pointerdown" && e2.pointerType !== "touch") {
          if (isWithinTrackXBounds) {
            _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();
            if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
              _this.onDragStart(e2, "x");
            } else {
              _this.onTrackClick(e2, "x");
            }
          }
          if (isWithinTrackYBounds) {
            _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();
            if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
              _this.onDragStart(e2, "y");
            } else {
              _this.onTrackClick(e2, "y");
            }
          }
        }
      }
    };
    this.drag = function(e2) {
      var eventOffset;
      var track2 = _this.axis[_this.draggedAxis].track;
      var trackSize = track2.rect[_this.axis[_this.draggedAxis].sizeAttr];
      var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
      var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
      var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
      e2.preventDefault();
      e2.stopPropagation();
      if (_this.draggedAxis === "y") {
        eventOffset = e2.pageY;
      } else {
        eventOffset = e2.pageX;
      }
      var dragPos = eventOffset - track2.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset;
      var dragPerc = dragPos / (trackSize - scrollbar.size);
      var scrollPos = dragPerc * (contentSize - hostSize);
      if (_this.draggedAxis === "x") {
        scrollPos = _this.isRtl && SimpleBar2.getRtlHelpers().isScrollOriginAtZero ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
      }
      _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
    };
    this.onEndDrag = function(e2) {
      var elDocument = getElementDocument(_this.el);
      var elWindow = getElementWindow(_this.el);
      e2.preventDefault();
      e2.stopPropagation();
      _this.el.classList.remove(_this.classNames.dragging);
      elDocument.removeEventListener("mousemove", _this.drag, true);
      elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
      _this.removePreventClickId = elWindow.setTimeout(function() {
        elDocument.removeEventListener("click", _this.preventClick, true);
        elDocument.removeEventListener("dblclick", _this.preventClick, true);
        _this.removePreventClickId = null;
      });
    };
    this.preventClick = function(e2) {
      e2.preventDefault();
      e2.stopPropagation();
    };
    this.el = element;
    this.minScrollbarWidth = 20;
    this.stopScrollDelay = 175;
    this.options = _objectSpread(_objectSpread({}, SimpleBar2.defaultOptions), options);
    this.classNames = _objectSpread({
      contentEl: "simplebar-content",
      contentWrapper: "simplebar-content-wrapper",
      offset: "simplebar-offset",
      mask: "simplebar-mask",
      wrapper: "simplebar-wrapper",
      placeholder: "simplebar-placeholder",
      scrollbar: "simplebar-scrollbar",
      track: "simplebar-track",
      heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
      heightAutoObserverEl: "simplebar-height-auto-observer",
      visible: "simplebar-visible",
      horizontal: "simplebar-horizontal",
      vertical: "simplebar-vertical",
      hover: "simplebar-hover",
      dragging: "simplebar-dragging",
      scrolling: "simplebar-scrolling",
      scrollable: "simplebar-scrollable",
      mouseEntered: "simplebar-mouse-entered"
    }, this.options.classNames);
    this.axis = {
      x: {
        scrollOffsetAttr: "scrollLeft",
        sizeAttr: "width",
        scrollSizeAttr: "scrollWidth",
        offsetSizeAttr: "offsetWidth",
        offsetAttr: "left",
        overflowAttr: "overflowX",
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      },
      y: {
        scrollOffsetAttr: "scrollTop",
        sizeAttr: "height",
        scrollSizeAttr: "scrollHeight",
        offsetSizeAttr: "offsetHeight",
        offsetAttr: "top",
        overflowAttr: "overflowY",
        dragOffset: 0,
        isOverflowing: true,
        isVisible: false,
        forceVisible: false,
        track: {},
        scrollbar: {}
      }
    };
    this.removePreventClickId = null;
    this.isScrolling = false;
    this.isMouseEntering = false;
    if (SimpleBar2.instances.has(this.el)) {
      return;
    }
    if (options.classNames) {
      console.warn("simplebar: classNames option is deprecated. Please override the styles with CSS instead.");
    }
    if (options.autoHide) {
      console.warn("simplebar: autoHide option is deprecated. Please use CSS instead: '.simplebar-scrollbar::before { opacity: 0.5 };' for autoHide: false");
    }
    this.onMouseMove = throttle(this.onMouseMove, 64);
    this.onWindowResize = debounce(this.onWindowResize, 64, {
      leading: true
    });
    this.onStopScrolling = debounce(this.onStopScrolling, this.stopScrollDelay);
    this.onMouseEntered = debounce(this.onMouseEntered, this.stopScrollDelay);
    this.init();
  }
  _createClass$1(SimpleBar2, [{
    key: "init",
    value: function init() {
      SimpleBar2.instances.set(this.el, this);
      if (canUseDom) {
        this.initDOM();
        this.rtlHelpers = SimpleBar2.getRtlHelpers();
        this.scrollbarWidth = SimpleBar2.getScrollbarWidth();
        this.recalculate();
        this.initListeners();
      }
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      var _this2 = this;
      if (Array.prototype.filter.call(this.el.children, function(child) {
        return child.classList.contains(_this2.classNames.wrapper);
      }).length) {
        this.wrapperEl = this.el.querySelector(".".concat(this.classNames.wrapper));
        this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(".".concat(this.classNames.contentWrapper));
        this.contentEl = this.options.contentNode || this.el.querySelector(".".concat(this.classNames.contentEl));
        this.offsetEl = this.el.querySelector(".".concat(this.classNames.offset));
        this.maskEl = this.el.querySelector(".".concat(this.classNames.mask));
        this.placeholderEl = this.findChild(this.wrapperEl, ".".concat(this.classNames.placeholder));
        this.heightAutoObserverWrapperEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl));
        this.heightAutoObserverEl = this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl));
        this.axis.x.track.el = this.findChild(this.el, ".".concat(this.classNames.track, ".").concat(this.classNames.horizontal));
        this.axis.y.track.el = this.findChild(this.el, ".".concat(this.classNames.track, ".").concat(this.classNames.vertical));
      } else {
        this.wrapperEl = document.createElement("div");
        this.contentWrapperEl = document.createElement("div");
        this.offsetEl = document.createElement("div");
        this.maskEl = document.createElement("div");
        this.contentEl = document.createElement("div");
        this.placeholderEl = document.createElement("div");
        this.heightAutoObserverWrapperEl = document.createElement("div");
        this.heightAutoObserverEl = document.createElement("div");
        this.wrapperEl.classList.add(this.classNames.wrapper);
        this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
        this.offsetEl.classList.add(this.classNames.offset);
        this.maskEl.classList.add(this.classNames.mask);
        this.contentEl.classList.add(this.classNames.contentEl);
        this.placeholderEl.classList.add(this.classNames.placeholder);
        this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
        this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
        while (this.el.firstChild) {
          this.contentEl.appendChild(this.el.firstChild);
        }
        this.contentWrapperEl.appendChild(this.contentEl);
        this.offsetEl.appendChild(this.contentWrapperEl);
        this.maskEl.appendChild(this.offsetEl);
        this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
        this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
        this.wrapperEl.appendChild(this.maskEl);
        this.wrapperEl.appendChild(this.placeholderEl);
        this.el.appendChild(this.wrapperEl);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var track2 = document.createElement("div");
        var scrollbar = document.createElement("div");
        track2.classList.add(this.classNames.track);
        scrollbar.classList.add(this.classNames.scrollbar);
        track2.appendChild(scrollbar);
        this.axis.x.track.el = track2.cloneNode(true);
        this.axis.x.track.el.classList.add(this.classNames.horizontal);
        this.axis.y.track.el = track2.cloneNode(true);
        this.axis.y.track.el.classList.add(this.classNames.vertical);
        this.el.appendChild(this.axis.x.track.el);
        this.el.appendChild(this.axis.y.track.el);
      }
      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar));
      this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar));
      if (!this.options.autoHide) {
        this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
        this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
      }
      this.el.setAttribute("data-simplebar", "init");
    }
  }, {
    key: "initListeners",
    value: function initListeners() {
      var _this3 = this;
      var elWindow = getElementWindow(this.el);
      this.el.addEventListener("mouseenter", this.onMouseEnter);
      this.el.addEventListener("pointerdown", this.onPointerEvent, true);
      this.el.addEventListener("mousemove", this.onMouseMove);
      this.el.addEventListener("mouseleave", this.onMouseLeave);
      this.contentWrapperEl.addEventListener("scroll", this.onScroll);
      elWindow.addEventListener("resize", this.onWindowResize);
      if (window.ResizeObserver) {
        var resizeObserverStarted = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
        this.resizeObserver = new resizeObserver(function() {
          if (!resizeObserverStarted)
            return;
          elWindow.requestAnimationFrame(function() {
            _this3.recalculate();
          });
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function() {
          resizeObserverStarted = true;
        });
      }
      this.mutationObserver = new elWindow.MutationObserver(function() {
        elWindow.requestAnimationFrame(function() {
          _this3.recalculate();
        });
      });
      this.mutationObserver.observe(this.contentEl, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }
  }, {
    key: "recalculate",
    value: function recalculate() {
      var elWindow = getElementWindow(this.el);
      this.elStyles = elWindow.getComputedStyle(this.el);
      this.isRtl = this.elStyles.direction === "rtl";
      var contentElOffsetWidth = this.contentEl.offsetWidth;
      var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
      var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1 || contentElOffsetWidth > 0;
      var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
      var elOverflowX = this.elStyles.overflowX;
      var elOverflowY = this.elStyles.overflowY;
      this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft);
      this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
      var contentElScrollHeight = this.contentEl.scrollHeight;
      var contentElScrollWidth = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%";
      this.placeholderEl.style.width = isWidthAuto ? "".concat(contentElOffsetWidth || contentElScrollWidth, "px") : "auto";
      this.placeholderEl.style.height = "".concat(contentElScrollHeight, "px");
      var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = contentElOffsetWidth !== 0 && contentElScrollWidth > contentElOffsetWidth;
      this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight;
      this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
      this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
      this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
      this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
      this.hideNativeScrollbar();
      var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
      var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
      this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
      this.axis.x.scrollbar.size = this.getScrollbarSize("x");
      this.axis.y.scrollbar.size = this.getScrollbarSize("y");
      this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px");
      this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px");
      this.positionScrollbar("x");
      this.positionScrollbar("y");
      this.toggleTrackVisibility("x");
      this.toggleTrackVisibility("y");
    }
  }, {
    key: "getScrollbarSize",
    value: function getScrollbarSize() {
      var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "y";
      if (!this.axis[axis].isOverflowing) {
        return 0;
      }
      var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
      var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
      var scrollbarSize;
      var scrollbarRatio = trackSize / contentSize;
      scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);
      if (this.options.scrollbarMaxSize) {
        scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
      }
      return scrollbarSize;
    }
  }, {
    key: "positionScrollbar",
    value: function positionScrollbar() {
      var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "y";
      if (!this.axis[axis].isOverflowing) {
        return;
      }
      var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
      var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrollbar = this.axis[axis].scrollbar;
      var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      scrollOffset = axis === "x" && this.isRtl && SimpleBar2.getRtlHelpers().isScrollOriginAtZero ? -scrollOffset : scrollOffset;
      var scrollPourcent = scrollOffset / (contentSize - hostSize);
      var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
      handleOffset = axis === "x" && this.isRtl && SimpleBar2.getRtlHelpers().isScrollingToNegative ? -handleOffset + (trackSize - scrollbar.size) : handleOffset;
      scrollbar.el.style.transform = axis === "x" ? "translate3d(".concat(handleOffset, "px, 0, 0)") : "translate3d(0, ".concat(handleOffset, "px, 0)");
    }
  }, {
    key: "toggleTrackVisibility",
    value: function toggleTrackVisibility() {
      var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "y";
      var track2 = this.axis[axis].track.el;
      var scrollbar = this.axis[axis].scrollbar.el;
      if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
        track2.style.visibility = "visible";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
        this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(axis));
      } else {
        track2.style.visibility = "hidden";
        this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
        this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(axis));
      }
      if (this.axis[axis].isOverflowing) {
        scrollbar.style.display = "block";
      } else {
        scrollbar.style.display = "none";
      }
    }
  }, {
    key: "hideNativeScrollbar",
    value: function hideNativeScrollbar() {
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : 0;
      this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : 0;
    }
  }, {
    key: "onMouseMoveForAxis",
    value: function onMouseMoveForAxis() {
      var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "y";
      this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
      this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
      var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);
      if (isWithinScrollbarBoundsX) {
        this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
      } else {
        this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
      }
      if (this.isWithinBounds(this.axis[axis].track.rect)) {
        this.axis[axis].track.el.classList.add(this.classNames.hover);
      } else {
        this.axis[axis].track.el.classList.remove(this.classNames.hover);
      }
    }
  }, {
    key: "onMouseLeaveForAxis",
    value: function onMouseLeaveForAxis() {
      var axis = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "y";
      this.axis[axis].track.el.classList.remove(this.classNames.hover);
      this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
    }
  }, {
    key: "onDragStart",
    value: function onDragStart(e2) {
      var axis = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
      var elDocument = getElementDocument(this.el);
      var elWindow = getElementWindow(this.el);
      var scrollbar = this.axis[axis].scrollbar;
      var eventOffset = axis === "y" ? e2.pageY : e2.pageX;
      this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
      this.draggedAxis = axis;
      this.el.classList.add(this.classNames.dragging);
      elDocument.addEventListener("mousemove", this.drag, true);
      elDocument.addEventListener("mouseup", this.onEndDrag, true);
      if (this.removePreventClickId === null) {
        elDocument.addEventListener("click", this.preventClick, true);
        elDocument.addEventListener("dblclick", this.preventClick, true);
      } else {
        elWindow.clearTimeout(this.removePreventClickId);
        this.removePreventClickId = null;
      }
    }
  }, {
    key: "onTrackClick",
    value: function onTrackClick(e2) {
      var _this4 = this;
      var axis = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
      if (!this.options.clickOnTrack)
        return;
      e2.preventDefault();
      var elWindow = getElementWindow(this.el);
      this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
      var scrollbar = this.axis[axis].scrollbar;
      var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
      var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
      var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
      var t2 = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
      var dir = t2 < 0 ? -1 : 1;
      var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;
      var speed = 40;
      var scrollTo = function scrollTo2() {
        if (dir === -1) {
          if (scrolled > scrollSize) {
            scrolled -= speed;
            _this4.contentWrapperEl[_this4.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo2);
          }
        } else {
          if (scrolled < scrollSize) {
            scrolled += speed;
            _this4.contentWrapperEl[_this4.axis[axis].scrollOffsetAttr] = scrolled;
            elWindow.requestAnimationFrame(scrollTo2);
          }
        }
      };
      scrollTo();
    }
  }, {
    key: "getContentElement",
    value: function getContentElement() {
      return this.contentEl;
    }
  }, {
    key: "getScrollElement",
    value: function getScrollElement() {
      return this.contentWrapperEl;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var elWindow = getElementWindow(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter);
      this.el.removeEventListener("pointerdown", this.onPointerEvent, true);
      this.el.removeEventListener("mousemove", this.onMouseMove);
      this.el.removeEventListener("mouseleave", this.onMouseLeave);
      if (this.contentWrapperEl) {
        this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
      }
      elWindow.removeEventListener("resize", this.onWindowResize);
      if (this.mutationObserver) {
        this.mutationObserver.disconnect();
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      this.onMouseMove.cancel();
      this.onWindowResize.cancel();
      this.onStopScrolling.cancel();
      this.onMouseEntered.cancel();
    }
  }, {
    key: "unMount",
    value: function unMount() {
      this.removeListeners();
      SimpleBar2.instances.delete(this.el);
    }
  }, {
    key: "isWithinBounds",
    value: function isWithinBounds(bbox) {
      return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
    }
  }, {
    key: "findChild",
    value: function findChild(el, query) {
      var matches2 = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
      return Array.prototype.filter.call(el.children, function(child) {
        return matches2.call(child, query);
      })[0];
    }
  }], [{
    key: "getRtlHelpers",
    value: function getRtlHelpers() {
      if (SimpleBar2.rtlHelpers) {
        return SimpleBar2.rtlHelpers;
      }
      var dummyDiv = document.createElement("div");
      dummyDiv.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var scrollbarDummyEl = dummyDiv.firstElementChild;
      var dummyChild = scrollbarDummyEl.firstElementChild;
      document.body.appendChild(scrollbarDummyEl);
      scrollbarDummyEl.scrollLeft = 0;
      var dummyContainerOffset = SimpleBar2.getOffset(scrollbarDummyEl);
      var dummyChildOffset = SimpleBar2.getOffset(dummyChild);
      scrollbarDummyEl.scrollLeft = -999;
      var dummyChildOffsetAfterScroll = SimpleBar2.getOffset(dummyChild);
      document.body.removeChild(scrollbarDummyEl);
      SimpleBar2.rtlHelpers = {
        isScrollOriginAtZero: dummyContainerOffset.left !== dummyChildOffset.left,
        isScrollingToNegative: dummyChildOffset.left !== dummyChildOffsetAfterScroll.left
      };
      return SimpleBar2.rtlHelpers;
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      try {
        if (getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style) {
          return 0;
        } else {
          return scrollbarWidth();
        }
      } catch (e2) {
        return scrollbarWidth();
      }
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect();
      var elDocument = getElementDocument(el);
      var elWindow = getElementWindow(el);
      return {
        top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
        left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
      };
    }
  }]);
  return SimpleBar2;
}();
SimpleBar.defaultOptions = {
  autoHide: true,
  forceVisible: false,
  clickOnTrack: true,
  scrollbarMinSize: 25,
  scrollbarMaxSize: 0
};
SimpleBar.instances = new WeakMap();
var SimpleBar$1 = SimpleBar;
var getOptions = function getOptions2(obj) {
  var options = Array.prototype.reduce.call(obj, function(acc, attribute) {
    var option = attribute.name.match(/data-simplebar-(.+)/);
    if (option) {
      var key = option[1].replace(/\W+(.)/g, function(x, chr) {
        return chr.toUpperCase();
      });
      switch (attribute.value) {
        case "true":
          acc[key] = true;
          break;
        case "false":
          acc[key] = false;
          break;
        case void 0:
          acc[key] = true;
          break;
        default:
          acc[key] = attribute.value;
      }
    }
    return acc;
  }, {});
  return options;
};
SimpleBar$1.initDOMLoadedElements = function() {
  document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
  window.removeEventListener("load", this.initDOMLoadedElements);
  Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function(el) {
    if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar$1.instances.has(el))
      new SimpleBar$1(el, getOptions(el.attributes));
  });
};
SimpleBar$1.removeObserver = function() {
  this.globalObserver.disconnect();
};
SimpleBar$1.initHtmlApi = function() {
  this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this);
  if (typeof MutationObserver !== "undefined") {
    this.globalObserver = new MutationObserver(SimpleBar$1.handleMutations);
    this.globalObserver.observe(document, {
      childList: true,
      subtree: true
    });
  }
  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    window.setTimeout(this.initDOMLoadedElements);
  } else {
    document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
    window.addEventListener("load", this.initDOMLoadedElements);
  }
};
SimpleBar$1.handleMutations = function(mutations) {
  mutations.forEach(function(mutation) {
    Array.prototype.forEach.call(mutation.addedNodes, function(addedNode) {
      if (addedNode.nodeType === 1) {
        if (addedNode.hasAttribute("data-simplebar")) {
          !SimpleBar$1.instances.has(addedNode) && new SimpleBar$1(addedNode, getOptions(addedNode.attributes));
        } else {
          Array.prototype.forEach.call(addedNode.querySelectorAll("[data-simplebar]"), function(el) {
            if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar$1.instances.has(el))
              new SimpleBar$1(el, getOptions(el.attributes));
          });
        }
      }
    });
    Array.prototype.forEach.call(mutation.removedNodes, function(removedNode) {
      if (removedNode.nodeType === 1) {
        if (removedNode.hasAttribute("data-simplebar")) {
          SimpleBar$1.instances.has(removedNode) && SimpleBar$1.instances.get(removedNode).unMount();
        } else {
          Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function(el) {
            SimpleBar$1.instances.has(el) && SimpleBar$1.instances.get(el).unMount();
          });
        }
      }
    });
  });
};
SimpleBar$1.getOptions = getOptions;
SimpleBar$1.default = SimpleBar$1;
if (canUseDom) {
  SimpleBar$1.initHtmlApi();
}
var iconify_min = {};
/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt or license.gpl.txt
* files at https://github.com/iconify/iconify
*
* Licensed under Apache 2.0 or GPL 2.0 at your option.
* If derivative product is not compatible with one of licenses, you can pick one of licenses.
*
* @license Apache 2.0
* @license GPL 2.0
*/
(function(exports) {
  var Iconify = function() {
    function e2(e3, n3, t3) {
      return e3(t3 = { path: n3, exports: {}, require: function(e4, n4) {
        return function() {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
        }(n4 == null && t3.path);
      } }, t3.exports), t3.exports;
    }
    var n2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.fullIcon = n3.iconDefaults = n3.minifyProps = n3.matchName = void 0, n3.matchName = /^[a-z0-9]+(-[a-z0-9]+)*$/, n3.minifyProps = ["width", "height", "top", "left"], n3.iconDefaults = Object.freeze({ left: 0, top: 0, width: 16, height: 16, rotate: 0, vFlip: false, hFlip: false }), n3.fullIcon = function(e4) {
        return Object.assign({}, n3.iconDefaults, e4);
      };
    }), t2 = e2(function(e3, t3) {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.mergeIconData = void 0, t3.mergeIconData = function(e4, t4) {
        var r3 = Object.assign({}, e4);
        for (var o3 in n2.iconDefaults) {
          var i3 = o3;
          if (t4[i3] !== void 0) {
            var a3 = t4[i3];
            if (r3[i3] === void 0) {
              r3[i3] = a3;
              continue;
            }
            switch (i3) {
              case "rotate":
                r3[i3] = (r3[i3] + a3) % 4;
                break;
              case "hFlip":
              case "vFlip":
                r3[i3] = a3 !== r3[i3];
                break;
              default:
                r3[i3] = a3;
            }
          }
        }
        return r3;
      };
    }), r2 = e2(function(e3, r3) {
      Object.defineProperty(r3, "__esModule", { value: true }), r3.parseIconSet = void 0;
      var o3 = Object.keys(n2.iconDefaults);
      function i3(e4, n3, r4, o4) {
        o4 === void 0 && (o4 = 0);
        var a3 = e4.parent;
        if (n3[a3] !== void 0)
          return t2.mergeIconData(n3[a3], e4);
        if (r4[a3] !== void 0) {
          if (o4 > 2)
            return null;
          var c3 = i3(r4[a3], n3, r4, o4 + 1);
          if (c3)
            return t2.mergeIconData(c3, e4);
        }
        return null;
      }
      r3.parseIconSet = function(e4, t3, r4) {
        r4 === void 0 && (r4 = "none");
        var a3 = [];
        if (typeof e4 != "object")
          return r4 !== "none" && a3;
        if (e4.not_found instanceof Array && e4.not_found.forEach(function(e5) {
          t3(e5, null), r4 === "all" && a3.push(e5);
        }), typeof e4.icons != "object")
          return r4 !== "none" && a3;
        var c3 = Object.create(null);
        o3.forEach(function(n3) {
          e4[n3] !== void 0 && typeof e4[n3] != "object" && (c3[n3] = e4[n3]);
        });
        var u3 = e4.icons;
        if (Object.keys(u3).forEach(function(e5) {
          var r5 = u3[e5];
          typeof r5.body == "string" && (t3(e5, Object.freeze(Object.assign({}, n2.iconDefaults, c3, r5))), a3.push(e5));
        }), typeof e4.aliases == "object") {
          var f3 = e4.aliases;
          Object.keys(f3).forEach(function(e5) {
            var r5 = i3(f3[e5], u3, f3, 1);
            r5 && (t3(e5, Object.freeze(Object.assign({}, n2.iconDefaults, c3, r5))), a3.push(e5));
          });
        }
        return r4 === "none" ? a3.length > 0 : a3;
      };
    }), o2 = e2(function(e3, t3) {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.validateIcon = t3.stringToIcon = void 0;
      t3.stringToIcon = function(e4, n3, r3, o3) {
        o3 === void 0 && (o3 = "");
        var i3 = e4.split(":");
        if (e4.slice(0, 1) === "@") {
          if (i3.length < 2 || i3.length > 3)
            return null;
          o3 = i3.shift().slice(1);
        }
        if (i3.length > 3 || !i3.length)
          return null;
        if (i3.length > 1) {
          var a3 = i3.pop(), c3 = i3.pop(), u3 = { provider: i3.length > 0 ? i3[0] : o3, prefix: c3, name: a3 };
          return n3 && !t3.validateIcon(u3) ? null : u3;
        }
        var f3 = i3[0], l2 = f3.split("-");
        if (l2.length > 1) {
          var s3 = { provider: o3, prefix: l2.shift(), name: l2.join("-") };
          return n3 && !t3.validateIcon(s3) ? null : s3;
        }
        if (r3 && o3 === "") {
          var d2 = { provider: o3, prefix: "", name: f3 };
          return n3 && !t3.validateIcon(d2, r3) ? null : d2;
        }
        return null;
      };
      t3.validateIcon = function(e4, t4) {
        return !!e4 && !(e4.provider !== "" && !e4.provider.match(n2.matchName) || !(t4 && e4.prefix === "" || e4.prefix.match(n2.matchName)) || !e4.name.match(n2.matchName));
      };
    }), i2 = e2(function(e3, t3) {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.listIcons = t3.getIcon = t3.iconExists = t3.addIcon = t3.addIconSet = t3.getStorage = t3.newStorage = void 0;
      var o3 = Object.create(null);
      function i3(e4, n3) {
        return { provider: e4, prefix: n3, icons: Object.create(null), missing: Object.create(null) };
      }
      function a3(e4, n3) {
        o3[e4] === void 0 && (o3[e4] = Object.create(null));
        var t4 = o3[e4];
        return t4[n3] === void 0 && (t4[n3] = i3(e4, n3)), t4[n3];
      }
      t3.newStorage = i3, t3.getStorage = a3, t3.addIconSet = function(e4, n3, t4) {
        t4 === void 0 && (t4 = "none");
        var o4 = Date.now();
        return r2.parseIconSet(n3, function(n4, t5) {
          t5 === null ? e4.missing[n4] = o4 : e4.icons[n4] = t5;
        }, t4);
      }, t3.addIcon = function(e4, t4, r3) {
        try {
          if (typeof r3.body == "string")
            return e4.icons[t4] = Object.freeze(n2.fullIcon(r3)), true;
        } catch (e5) {
        }
        return false;
      }, t3.iconExists = function(e4, n3) {
        return e4.icons[n3] !== void 0;
      }, t3.getIcon = function(e4, n3) {
        var t4 = e4.icons[n3];
        return t4 === void 0 ? null : t4;
      }, t3.listIcons = function(e4, n3) {
        var t4 = [];
        return (typeof e4 == "string" ? [e4] : Object.keys(o3)).forEach(function(e5) {
          (typeof e5 == "string" && typeof n3 == "string" ? [n3] : o3[e5] === void 0 ? [] : Object.keys(o3[e5])).forEach(function(n4) {
            var r3 = a3(e5, n4), o4 = Object.keys(r3.icons).map(function(t5) {
              return (e5 !== "" ? "@" + e5 + ":" : "") + n4 + ":" + t5;
            });
            t4 = t4.concat(o4);
          });
        }), t4;
      };
    }), a2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.storageFunctions = n3.addCollection = n3.addIcon = n3.getIconData = n3.allowSimpleNames = void 0;
      var t3 = false;
      function a3(e4) {
        var n4 = typeof e4 == "string" ? o2.stringToIcon(e4, true, t3) : e4;
        return n4 ? i2.getIcon(i2.getStorage(n4.provider, n4.prefix), n4.name) : null;
      }
      function c3(e4, n4) {
        var r3 = o2.stringToIcon(e4, true, t3);
        if (!r3)
          return false;
        var a4 = i2.getStorage(r3.provider, r3.prefix);
        return i2.addIcon(a4, r3.name, n4);
      }
      function u3(e4, n4) {
        if (typeof e4 != "object")
          return false;
        if (typeof n4 != "string" && (n4 = typeof e4.provider == "string" ? e4.provider : ""), t3 && n4 === "" && (typeof e4.prefix != "string" || e4.prefix === "")) {
          var a4 = false;
          return r2.parseIconSet(e4, function(e5, n5) {
            n5 !== null && c3(e5, n5) && (a4 = true);
          }), a4;
        }
        if (typeof e4.prefix != "string" || !o2.validateIcon({ provider: n4, prefix: e4.prefix, name: "a" }))
          return false;
        var u4 = i2.getStorage(n4, e4.prefix);
        return !!i2.addIconSet(u4, e4);
      }
      n3.allowSimpleNames = function(e4) {
        return typeof e4 == "boolean" && (t3 = e4), t3;
      }, n3.getIconData = a3, n3.addIcon = c3, n3.addCollection = u3, n3.storageFunctions = { iconExists: function(e4) {
        return a3(e4) !== null;
      }, getIcon: function(e4) {
        var n4 = a3(e4);
        return n4 ? Object.assign({}, n4) : null;
      }, listIcons: i2.listIcons, addIcon: c3, addCollection: u3 };
    }), c2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.replaceIDs = void 0;
      var t3 = /\sid="(\S+)"/g, r3 = "([^A-Za-z0-9_-])";
      var o3 = "IconifyId-" + Date.now().toString(16) + "-" + (16777216 * Math.random() | 0).toString(16) + "-", i3 = 0;
      n3.replaceIDs = function(e4, n4) {
        n4 === void 0 && (n4 = o3);
        for (var a3, c3 = []; a3 = t3.exec(e4); )
          c3.push(a3[1]);
        return c3.length ? (c3.forEach(function(t4) {
          var o4 = typeof n4 == "function" ? n4() : n4 + i3++;
          e4 = e4.replace(new RegExp(r3 + "(" + (t4.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")") + r3, "g"), "$1" + o4 + "$3");
        }), e4) : e4;
      };
    }), u2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.calculateSize = void 0;
      var t3 = /(-?[0-9.]*[0-9]+[0-9.]*)/g, r3 = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
      n3.calculateSize = function(e4, n4, o3) {
        if (n4 === 1)
          return e4;
        if (o3 = o3 === void 0 ? 100 : o3, typeof e4 == "number")
          return Math.ceil(e4 * n4 * o3) / o3;
        if (typeof e4 != "string")
          return e4;
        var i3 = e4.split(t3);
        if (i3 === null || !i3.length)
          return e4;
        for (var a3 = [], c3 = i3.shift(), u3 = r3.test(c3); ; ) {
          if (u3) {
            var f3 = parseFloat(c3);
            isNaN(f3) ? a3.push(c3) : a3.push(Math.ceil(f3 * n4 * o3) / o3);
          } else
            a3.push(c3);
          if ((c3 = i3.shift()) === void 0)
            return a3.join("");
          u3 = !u3;
        }
      };
    }), f2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.mergeCustomisations = n3.defaults = void 0, n3.defaults = Object.freeze({ inline: false, width: null, height: null, hAlign: "center", vAlign: "middle", slice: false, hFlip: false, vFlip: false, rotate: 0 }), n3.mergeCustomisations = function(e4, n4) {
        var t3 = {};
        for (var r3 in e4) {
          var o3 = r3;
          if (t3[o3] = e4[o3], n4[o3] !== void 0) {
            var i3 = n4[o3];
            switch (o3) {
              case "inline":
              case "slice":
                typeof i3 == "boolean" && (t3[o3] = i3);
                break;
              case "hFlip":
              case "vFlip":
                i3 === true && (t3[o3] = !t3[o3]);
                break;
              case "hAlign":
              case "vAlign":
                typeof i3 == "string" && i3 !== "" && (t3[o3] = i3);
                break;
              case "width":
              case "height":
                (typeof i3 == "string" && i3 !== "" || typeof i3 == "number" && i3 || i3 === null) && (t3[o3] = i3);
                break;
              case "rotate":
                typeof i3 == "number" && (t3[o3] += i3);
            }
          }
        }
        return t3;
      };
    }), l = e2(function(e3, n3) {
      function t3(e4) {
        var n4 = "";
        switch (e4.hAlign) {
          case "left":
            n4 += "xMin";
            break;
          case "right":
            n4 += "xMax";
            break;
          default:
            n4 += "xMid";
        }
        switch (e4.vAlign) {
          case "top":
            n4 += "YMin";
            break;
          case "bottom":
            n4 += "YMax";
            break;
          default:
            n4 += "YMid";
        }
        return n4 += e4.slice ? " slice" : " meet";
      }
      Object.defineProperty(n3, "__esModule", { value: true }), n3.iconToSVG = void 0, n3.iconToSVG = function(e4, n4) {
        var r3, o3, i3 = { left: e4.left, top: e4.top, width: e4.width, height: e4.height }, a3 = e4.body;
        [e4, n4].forEach(function(e5) {
          var n5, t4 = [], r4 = e5.hFlip, o4 = e5.vFlip, c4 = e5.rotate;
          switch (r4 ? o4 ? c4 += 2 : (t4.push("translate(" + (i3.width + i3.left) + " " + (0 - i3.top) + ")"), t4.push("scale(-1 1)"), i3.top = i3.left = 0) : o4 && (t4.push("translate(" + (0 - i3.left) + " " + (i3.height + i3.top) + ")"), t4.push("scale(1 -1)"), i3.top = i3.left = 0), c4 < 0 && (c4 -= 4 * Math.floor(c4 / 4)), c4 %= 4) {
            case 1:
              n5 = i3.height / 2 + i3.top, t4.unshift("rotate(90 " + n5 + " " + n5 + ")");
              break;
            case 2:
              t4.unshift("rotate(180 " + (i3.width / 2 + i3.left) + " " + (i3.height / 2 + i3.top) + ")");
              break;
            case 3:
              n5 = i3.width / 2 + i3.left, t4.unshift("rotate(-90 " + n5 + " " + n5 + ")");
          }
          c4 % 2 == 1 && (i3.left === 0 && i3.top === 0 || (n5 = i3.left, i3.left = i3.top, i3.top = n5), i3.width !== i3.height && (n5 = i3.width, i3.width = i3.height, i3.height = n5)), t4.length && (a3 = '<g transform="' + t4.join(" ") + '">' + a3 + "</g>");
        }), n4.width === null && n4.height === null ? (o3 = "1em", r3 = u2.calculateSize(o3, i3.width / i3.height)) : n4.width !== null && n4.height !== null ? (r3 = n4.width, o3 = n4.height) : n4.height !== null ? (o3 = n4.height, r3 = u2.calculateSize(o3, i3.width / i3.height)) : (r3 = n4.width, o3 = u2.calculateSize(r3, i3.height / i3.width)), r3 === "auto" && (r3 = i3.width), o3 === "auto" && (o3 = i3.height);
        var c3 = { attributes: { width: r3 = typeof r3 == "string" ? r3 : r3 + "", height: o3 = typeof o3 == "string" ? o3 : o3 + "", preserveAspectRatio: t3(n4), viewBox: i3.left + " " + i3.top + " " + i3.width + " " + i3.height }, body: a3 };
        return n4.inline && (c3.inline = true), c3;
      };
    }), s2 = e2(function(e3, t3) {
      Object.defineProperty(t3, "__esModule", { value: true }), t3.builderFunctions = void 0, t3.builderFunctions = { replaceIDs: c2.replaceIDs, calculateSize: u2.calculateSize, buildIcon: function(e4, t4) {
        return l.iconToSVG(n2.fullIcon(e4), f2.mergeCustomisations(f2.defaults, t4));
      } };
    }), d = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.coreModules = void 0, n3.coreModules = {};
    }), v2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.storeCache = n3.loadCache = n3.mock = n3.emptyList = n3.count = n3.config = void 0;
      var t3 = "iconify2", r3 = "iconify", o3 = "iconify-count", a3 = "iconify-version", c3 = 36e5;
      n3.config = { local: true, session: true };
      var u3 = false;
      n3.count = { local: 0, session: 0 }, n3.emptyList = { local: [], session: [] };
      var f3 = typeof window == "undefined" ? {} : window;
      function l2(e4) {
        var t4 = e4 + "Storage";
        try {
          if (f3 && f3[t4] && typeof f3[t4].length == "number")
            return f3[t4];
        } catch (e5) {
        }
        return n3.config[e4] = false, null;
      }
      function s3(e4, t4, r4) {
        try {
          return e4.setItem(o3, r4 + ""), n3.count[t4] = r4, true;
        } catch (e5) {
          return false;
        }
      }
      function d2(e4) {
        var n4 = e4.getItem(o3);
        if (n4) {
          var t4 = parseInt(n4);
          return t4 || 0;
        }
        return 0;
      }
      n3.mock = function(e4) {
        u3 = false, f3 = e4;
      };
      n3.loadCache = function() {
        if (!u3) {
          u3 = true;
          var e4 = Math.floor(Date.now() / c3) - 168;
          for (var o4 in n3.config)
            f4(o4);
        }
        function f4(o5) {
          var c4 = l2(o5);
          if (c4) {
            var u4 = function(n4) {
              var t4 = r3 + n4, o6 = c4.getItem(t4);
              if (typeof o6 != "string")
                return false;
              var a4 = true;
              try {
                var u5 = JSON.parse(o6);
                if (typeof u5 != "object" || typeof u5.cached != "number" || u5.cached < e4 || typeof u5.provider != "string" || typeof u5.data != "object" || typeof u5.data.prefix != "string")
                  a4 = false;
                else {
                  var f6 = u5.provider, l3 = u5.data.prefix, s4 = i2.getStorage(f6, l3);
                  a4 = i2.addIconSet(s4, u5.data);
                }
              } catch (e5) {
                a4 = false;
              }
              return a4 || c4.removeItem(t4), a4;
            };
            try {
              var f5 = c4.getItem(a3);
              if (f5 !== t3)
                return f5 && function(e5) {
                  try {
                    for (var n4 = d2(e5), t4 = 0; t4 < n4; t4++)
                      e5.removeItem(r3 + t4);
                  } catch (e6) {
                  }
                }(c4), void function(e5, n4) {
                  try {
                    e5.setItem(a3, t3);
                  } catch (e6) {
                  }
                  s3(e5, n4, 0);
                }(c4, o5);
              for (var v3 = d2(c4), p3 = v3 - 1; p3 >= 0; p3--)
                u4(p3) || (p3 === v3 - 1 ? v3-- : n3.emptyList[o5].push(p3));
              s3(c4, o5, v3);
            } catch (e5) {
            }
          }
        }
      };
      n3.storeCache = function(e4, t4) {
        function o4(o5) {
          if (!n3.config[o5])
            return false;
          var i3 = l2(o5);
          if (!i3)
            return false;
          var a4 = n3.emptyList[o5].shift();
          if (a4 === void 0 && !s3(i3, o5, (a4 = n3.count[o5]) + 1))
            return false;
          try {
            var u4 = { cached: Math.floor(Date.now() / c3), provider: e4, data: t4 };
            i3.setItem(r3 + a4, JSON.stringify(u4));
          } catch (e5) {
            return false;
          }
          return true;
        }
        u3 || n3.loadCache(), o4("local") || o4("session");
      };
    }), p2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.toggleBrowserCache = void 0, n3.toggleBrowserCache = function(e4, n4) {
        switch (e4) {
          case "local":
          case "session":
            v2.config[e4] = n4;
            break;
          case "all":
            for (var t3 in v2.config)
              v2.config[t3] = n4;
        }
      };
    }), h2 = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.defaultConfig = void 0, n3.defaultConfig = { resources: [], index: 0, timeout: 2e3, rotate: 750, random: false, dataAfterTimeout: false };
    }), g = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.sendQuery = void 0, n3.sendQuery = function(e4, n4, t3, r3, o3) {
        var i3, a3 = e4.resources.length, c3 = e4.random ? Math.floor(Math.random() * a3) : e4.index;
        if (e4.random) {
          var u3 = e4.resources.slice(0);
          for (i3 = []; u3.length > 1; ) {
            var f3 = Math.floor(Math.random() * u3.length);
            i3.push(u3[f3]), u3 = u3.slice(0, f3).concat(u3.slice(f3 + 1));
          }
          i3 = i3.concat(u3);
        } else
          i3 = e4.resources.slice(c3).concat(e4.resources.slice(0, c3));
        var l2 = Date.now(), s3 = "pending", d2 = 0, v3 = void 0, p3 = null, h3 = [], g2 = [];
        function m2() {
          p3 && (clearTimeout(p3), p3 = null);
        }
        function b2() {
          s3 === "pending" && (s3 = "aborted"), m2(), h3.forEach(function(e5) {
            e5.abort && e5.abort(), e5.status === "pending" && (e5.status = "aborted");
          }), h3 = [];
        }
        function y2(e5, n5) {
          n5 && (g2 = []), typeof e5 == "function" && g2.push(e5);
        }
        function I2() {
          return { startTime: l2, payload: n4, status: s3, queriesSent: d2, queriesPending: h3.length, subscribe: y2, abort: b2 };
        }
        function j2() {
          s3 = "failed", g2.forEach(function(e5) {
            e5(void 0, v3);
          });
        }
        function x2() {
          h3 = h3.filter(function(e5) {
            return e5.status === "pending" && (e5.status = "aborted"), e5.abort && e5.abort(), false;
          });
        }
        function O2() {
          if (s3 === "pending") {
            m2();
            var r4 = i3.shift();
            if (r4 !== void 0) {
              var a4 = { getQueryStatus: I2, status: "pending", resource: r4, done: function(n5, t4) {
                !function(n6, t5, r5) {
                  var a5 = t5 === void 0;
                  switch (h3 = h3.filter(function(e5) {
                    return e5 !== n6;
                  }), s3) {
                    case "pending":
                      break;
                    case "failed":
                      if (a5 || !e4.dataAfterTimeout)
                        return;
                      break;
                    default:
                      return;
                  }
                  if (a5)
                    return r5 !== void 0 && (v3 = r5), void (h3.length || (i3.length ? O2() : j2()));
                  if (m2(), x2(), o3 && !e4.random) {
                    var c5 = e4.resources.indexOf(n6.resource);
                    c5 !== -1 && c5 !== e4.index && o3(c5);
                  }
                  s3 = "completed", g2.forEach(function(e5) {
                    e5(t5);
                  });
                }(a4, n5, t4);
              } };
              h3.push(a4), d2++;
              var c4 = typeof e4.rotate == "function" ? e4.rotate(d2, l2) : e4.rotate;
              p3 = setTimeout(O2, c4), t3(r4, n4, a4);
            } else {
              if (h3.length) {
                var u4 = typeof e4.timeout == "function" ? e4.timeout(l2) : e4.timeout;
                if (u4)
                  return void (p3 = setTimeout(function() {
                    m2(), s3 === "pending" && (x2(), j2());
                  }, u4));
              }
              j2();
            }
          }
        }
        return typeof r3 == "function" && g2.push(r3), setTimeout(O2), I2;
      };
    }), m = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.initRedundancy = void 0, n3.initRedundancy = function(e4) {
        var n4 = function(e5) {
          if (!(typeof e5 == "object" && typeof e5.resources == "object" && e5.resources instanceof Array && e5.resources.length))
            throw new Error("Invalid Reduncancy configuration");
          var n5, t4 = Object.create(null);
          for (n5 in h2.defaultConfig)
            e5[n5] !== void 0 ? t4[n5] = e5[n5] : t4[n5] = h2.defaultConfig[n5];
          return t4;
        }(e4), t3 = [];
        function r3() {
          t3 = t3.filter(function(e5) {
            return e5().status === "pending";
          });
        }
        return { query: function(e5, o3, i3) {
          var a3 = g.sendQuery(n4, e5, o3, function(e6, n5) {
            r3(), i3 && i3(e6, n5);
          }, function(e6) {
            n4.index = e6;
          });
          return t3.push(a3), a3;
        }, find: function(e5) {
          var n5 = t3.find(function(n6) {
            return e5(n6);
          });
          return n5 !== void 0 ? n5 : null;
        }, setIndex: function(e5) {
          n4.index = e5;
        }, getIndex: function() {
          return n4.index;
        }, cleanup: r3 };
      };
    }), b = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.sortIcons = void 0, n3.sortIcons = function(e4) {
        var n4 = { loaded: [], missing: [], pending: [] }, t3 = Object.create(null);
        e4.sort(function(e5, n5) {
          return e5.provider !== n5.provider ? e5.provider.localeCompare(n5.provider) : e5.prefix !== n5.prefix ? e5.prefix.localeCompare(n5.prefix) : e5.name.localeCompare(n5.name);
        });
        var r3 = { provider: "", prefix: "", name: "" };
        return e4.forEach(function(e5) {
          if (r3.name !== e5.name || r3.prefix !== e5.prefix || r3.provider !== e5.provider) {
            r3 = e5;
            var o3 = e5.provider, a3 = e5.prefix, c3 = e5.name;
            t3[o3] === void 0 && (t3[o3] = Object.create(null));
            var u3 = t3[o3];
            u3[a3] === void 0 && (u3[a3] = i2.getStorage(o3, a3));
            var f3 = u3[a3], l2 = { provider: o3, prefix: a3, name: c3 };
            (f3.icons[c3] !== void 0 ? n4.loaded : a3 === "" || f3.missing[c3] !== void 0 ? n4.missing : n4.pending).push(l2);
          }
        }), n4;
      };
    }), y = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.storeCallback = n3.updateCallbacks = n3.callbacks = void 0, n3.callbacks = Object.create(null);
      var t3 = Object.create(null);
      function r3(e4, t4) {
        e4.forEach(function(e5) {
          var r4 = e5.provider;
          if (n3.callbacks[r4] !== void 0) {
            var o4 = n3.callbacks[r4], i3 = e5.prefix, a3 = o4[i3];
            a3 && (o4[i3] = a3.filter(function(e6) {
              return e6.id !== t4;
            }));
          }
        });
      }
      n3.updateCallbacks = function(e4, o4) {
        t3[e4] === void 0 && (t3[e4] = Object.create(null));
        var a3 = t3[e4];
        a3[o4] || (a3[o4] = true, setTimeout(function() {
          if (a3[o4] = false, n3.callbacks[e4] !== void 0 && n3.callbacks[e4][o4] !== void 0) {
            var t4 = n3.callbacks[e4][o4].slice(0);
            if (t4.length) {
              var c3 = i2.getStorage(e4, o4), u3 = false;
              t4.forEach(function(n4) {
                var t5 = n4.icons, i3 = t5.pending.length;
                t5.pending = t5.pending.filter(function(n5) {
                  if (n5.prefix !== o4)
                    return true;
                  var r4 = n5.name;
                  if (c3.icons[r4] !== void 0)
                    t5.loaded.push({ provider: e4, prefix: o4, name: r4 });
                  else {
                    if (c3.missing[r4] === void 0)
                      return u3 = true, true;
                    t5.missing.push({ provider: e4, prefix: o4, name: r4 });
                  }
                  return false;
                }), t5.pending.length !== i3 && (u3 || r3([{ provider: e4, prefix: o4 }], n4.id), n4.callback(t5.loaded.slice(0), t5.missing.slice(0), t5.pending.slice(0), n4.abort));
              });
            }
          }
        }));
      };
      var o3 = 0;
      n3.storeCallback = function(e4, t4, i3) {
        var a3 = o3++, c3 = r3.bind(null, i3, a3);
        if (!t4.pending.length)
          return c3;
        var u3 = { id: a3, icons: t4, callback: e4, abort: c3 };
        return i3.forEach(function(e5) {
          var t5 = e5.provider, r4 = e5.prefix;
          n3.callbacks[t5] === void 0 && (n3.callbacks[t5] = Object.create(null));
          var o4 = n3.callbacks[t5];
          o4[r4] === void 0 && (o4[r4] = []), o4[r4].push(u3);
        }), c3;
      };
    }), I = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.getAPIModule = n3.setAPIModule = void 0;
      var t3 = Object.create(null);
      n3.setAPIModule = function(e4, n4) {
        t3[e4] = n4;
      }, n3.getAPIModule = function(e4) {
        return t3[e4] === void 0 ? t3[""] : t3[e4];
      };
    }), j = e2(function(e3, n3) {
      function t3(e4) {
        var n4;
        if (typeof e4.resources == "string")
          n4 = [e4.resources];
        else if (!((n4 = e4.resources) instanceof Array && n4.length))
          return null;
        return { resources: n4, path: e4.path === void 0 ? "/" : e4.path, maxURL: e4.maxURL ? e4.maxURL : 500, rotate: e4.rotate ? e4.rotate : 750, timeout: e4.timeout ? e4.timeout : 5e3, random: e4.random === true, index: e4.index ? e4.index : 0, dataAfterTimeout: e4.dataAfterTimeout !== false };
      }
      Object.defineProperty(n3, "__esModule", { value: true }), n3.getAPIConfig = n3.setAPIConfig = void 0;
      for (var r3 = Object.create(null), o3 = ["https://api.simplesvg.com", "https://api.unisvg.com"], i3 = []; o3.length > 0; )
        o3.length === 1 || Math.random() > 0.5 ? i3.push(o3.shift()) : i3.push(o3.pop());
      r3[""] = t3({ resources: ["https://api.iconify.design"].concat(i3) }), n3.setAPIConfig = function(e4, n4) {
        var o4 = t3(n4);
        return o4 !== null && (r3[e4] = o4, true);
      };
      n3.getAPIConfig = function(e4) {
        return r3[e4];
      };
    }), x = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.getProviders = n3.listToIcons = void 0, n3.listToIcons = function(e4, n4, t3) {
        n4 === void 0 && (n4 = true), t3 === void 0 && (t3 = false);
        var r3 = [];
        return e4.forEach(function(e5) {
          var i3 = typeof e5 == "string" ? o2.stringToIcon(e5, false, t3) : e5;
          n4 && !o2.validateIcon(i3, t3) || r3.push({ provider: i3.provider, prefix: i3.prefix, name: i3.name });
        }), r3;
      }, n3.getProviders = function(e4) {
        var n4 = Object.create(null);
        return e4.forEach(function(e5) {
          n4[e5.provider] = true;
        }), Object.keys(n4);
      };
    }), O = e2(function(e3, n3) {
      function t3() {
      }
      Object.defineProperty(n3, "__esModule", { value: true }), n3.API = n3.getRedundancyCache = void 0;
      var r3 = Object.create(null), o3 = Object.create(null), c3 = Object.create(null), u3 = Object.create(null), f3 = Object.create(null);
      function l2(e4) {
        if (f3[e4] === void 0) {
          var n4 = j.getAPIConfig(e4);
          if (!n4)
            return;
          var t4 = { config: n4, redundancy: m.initRedundancy(n4) };
          f3[e4] = t4;
        }
        return f3[e4];
      }
      n3.getRedundancyCache = l2;
      var s3 = Object.create(null);
      function v3(e4, n4, t4) {
        function a3() {
          var t5 = (e4 === "" ? "" : "@" + e4 + ":") + n4, r4 = Math.floor(Date.now() / 6e4);
          s3[t5] < r4 && (s3[t5] = r4, console.error('Unable to retrieve icons for "' + t5 + '" because API is not configured properly.'));
        }
        o3[e4] === void 0 && (o3[e4] = Object.create(null));
        var f4 = o3[e4];
        u3[e4] === void 0 && (u3[e4] = Object.create(null));
        var v4 = u3[e4];
        r3[e4] === void 0 && (r3[e4] = Object.create(null));
        var p3, h3 = r3[e4];
        f4[n4] === void 0 ? f4[n4] = t4 : f4[n4] = f4[n4].concat(t4).sort(), v4[n4] || (v4[n4] = true, setTimeout(function() {
          v4[n4] = false;
          var t5 = f4[n4];
          delete f4[n4];
          var r4 = I.getAPIModule(e4);
          if (r4) {
            if (p3 === void 0) {
              var o4 = l2(e4);
              if (o4 === void 0)
                return void a3();
              p3 = o4;
            }
            r4.prepare(e4, n4, t5).forEach(function(t6) {
              p3.redundancy.query(t6, r4.send, function(r5, o5) {
                var a4 = i2.getStorage(e4, n4);
                if (typeof r5 != "object") {
                  if (o5 !== 404)
                    return;
                  var u4 = Date.now();
                  t6.icons.forEach(function(e5) {
                    a4.missing[e5] = u4;
                  });
                } else
                  try {
                    var f5 = i2.addIconSet(a4, r5, "all");
                    if (typeof f5 == "boolean")
                      return;
                    var l3 = h3[n4];
                    f5.forEach(function(e5) {
                      delete l3[e5];
                    }), d.coreModules.cache && d.coreModules.cache(e4, r5);
                  } catch (e5) {
                    console.error(e5);
                  }
                !function(e5, n5) {
                  c3[e5] === void 0 && (c3[e5] = Object.create(null));
                  var t7 = c3[e5];
                  t7[n5] || (t7[n5] = true, setTimeout(function() {
                    t7[n5] = false, y.updateCallbacks(e5, n5);
                  }));
                }(e4, n4);
              });
            });
          } else
            a3();
        }));
      }
      n3.API = { isPending: function(e4) {
        return r3[e4.provider] !== void 0 && r3[e4.provider][e4.prefix] !== void 0 && r3[e4.provider][e4.prefix][e4.name] !== void 0;
      }, loadIcons: function(e4, n4) {
        var o4 = x.listToIcons(e4, true, a2.allowSimpleNames()), i3 = b.sortIcons(o4);
        if (!i3.pending.length) {
          var c4 = true;
          return n4 && setTimeout(function() {
            c4 && n4(i3.loaded, i3.missing, i3.pending, t3);
          }), function() {
            c4 = false;
          };
        }
        var u4, f4, l3 = Object.create(null), s4 = [];
        i3.pending.forEach(function(e5) {
          var n5 = e5.provider, t4 = e5.prefix;
          if (t4 !== f4 || n5 !== u4) {
            u4 = n5, f4 = t4, s4.push({ provider: n5, prefix: t4 }), r3[n5] === void 0 && (r3[n5] = Object.create(null));
            var o5 = r3[n5];
            o5[t4] === void 0 && (o5[t4] = Object.create(null)), l3[n5] === void 0 && (l3[n5] = Object.create(null));
            var i4 = l3[n5];
            i4[t4] === void 0 && (i4[t4] = []);
          }
        });
        var d2 = Date.now();
        return i3.pending.forEach(function(e5) {
          var n5 = e5.provider, t4 = e5.prefix, o5 = e5.name, i4 = r3[n5][t4];
          i4[o5] === void 0 && (i4[o5] = d2, l3[n5][t4].push(o5));
        }), s4.forEach(function(e5) {
          var n5 = e5.provider, t4 = e5.prefix;
          l3[n5][t4].length && v3(n5, t4, l3[n5][t4]);
        }), n4 ? y.storeCallback(n4, i3, s4) : t3;
      } };
    }), P = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.APIInternalFunctions = n3.APIFunctions = void 0, n3.APIFunctions = { loadIcons: O.API.loadIcons, addAPIProvider: j.setAPIConfig }, n3.APIInternalFunctions = { getAPI: O.getRedundancyCache, getAPIConfig: j.getAPIConfig, setAPIModule: I.setAPIModule };
    }), w = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.getAPIModule = void 0;
      var t3 = null, r3 = "{prefix}.js?icons={icons}&callback={callback}", o3 = Object.create(null), i3 = Object.create(null);
      function a3() {
        if (t3 === null) {
          var e4 = self, n4 = "Iconify", o4 = ".cb";
          if (e4[n4] === void 0)
            o4 = "", e4[n4 = "IconifyJSONP"] === void 0 && (e4[n4] = Object.create(null)), t3 = e4[n4];
          else {
            var i4 = e4[n4];
            i4.cb === void 0 && (i4.cb = Object.create(null)), t3 = i4.cb;
          }
          r3 = r3.replace("{callback}", n4 + o4 + ".{cb}");
        }
        return t3;
      }
      n3.getAPIModule = function(e4) {
        return { prepare: function(n4, t4, c3) {
          var u3 = [], f3 = o3[n4 + ":" + t4];
          f3 === void 0 && (f3 = function(n5, t5) {
            var c4, u4 = e4(n5);
            if (!u4)
              return 0;
            if (u4.maxURL) {
              var f4 = 0;
              u4.resources.forEach(function(e5) {
                var n6 = e5;
                f4 = Math.max(f4, n6.length);
              }), a3(), c4 = u4.maxURL - f4 - u4.path.length - r3.replace("{provider}", n5).replace("{prefix}", t5).replace("{icons}", "").length - 3;
            } else
              c4 = 0;
            var l3 = n5 + ":" + t5;
            return i3[l3] = u4.path, o3[l3] = c4, c4;
          }(n4, t4));
          var l2 = { provider: n4, prefix: t4, icons: [] }, s3 = 0;
          return c3.forEach(function(e5, r4) {
            (s3 += e5.length + 1) >= f3 && r4 > 0 && (u3.push(l2), l2 = { provider: n4, prefix: t4, icons: [] }, s3 = e5.length), l2.icons.push(e5);
          }), u3.push(l2), u3;
        }, send: function(e5, n4, t4) {
          for (var o4 = n4.provider, c3 = n4.prefix, u3 = n4.icons.join(","), f3 = o4 + ":" + c3, l2 = c3.split("-").shift().slice(0, 3), s3 = a3(), d2 = function(e6) {
            var n5, t5 = 0;
            for (n5 = e6.length - 1; n5 >= 0; n5--)
              t5 += e6.charCodeAt(n5);
            return t5 % 999;
          }(o4 + ":" + e5 + ":" + c3 + ":" + u3); s3[l2 + d2] !== void 0; )
            d2++;
          var v3 = l2 + d2, p3 = i3[f3] + r3.replace("{provider}", o4).replace("{prefix}", c3).replace("{icons}", u3).replace("{cb}", v3);
          s3[v3] = function(e6) {
            delete s3[v3], t4.done(e6);
          };
          var h3 = e5 + p3, g2 = document.createElement("script");
          g2.type = "text/javascript", g2.async = true, g2.src = h3, document.head.appendChild(g2);
        } };
      };
    }), M = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.getAPIModule = n3.setFetch = void 0;
      var t3 = "{prefix}.json?icons={icons}", r3 = Object.create(null), o3 = Object.create(null), i3 = null;
      try {
        i3 = fetch;
      } catch (e4) {
      }
      n3.setFetch = function(e4) {
        i3 = e4;
      };
      n3.getAPIModule = function(e4) {
        return { prepare: function(n4, i4, a3) {
          var c3 = [], u3 = r3[i4];
          u3 === void 0 && (u3 = function(n5, i5) {
            var a4, c4 = e4(n5);
            if (!c4)
              return 0;
            if (c4.maxURL) {
              var u4 = 0;
              c4.resources.forEach(function(e5) {
                var n6 = e5;
                u4 = Math.max(u4, n6.length);
              }), a4 = c4.maxURL - u4 - c4.path.length - t3.replace("{provider}", n5).replace("{prefix}", i5).replace("{icons}", "").length;
            } else
              a4 = 0;
            var f4 = n5 + ":" + i5;
            return o3[f4] = c4.path, r3[f4] = a4, a4;
          }(n4, i4));
          var f3 = { provider: n4, prefix: i4, icons: [] }, l2 = 0;
          return a3.forEach(function(e5, t4) {
            (l2 += e5.length + 1) >= u3 && t4 > 0 && (c3.push(f3), f3 = { provider: n4, prefix: i4, icons: [] }, l2 = e5.length), f3.icons.push(e5);
          }), c3.push(f3), c3;
        }, send: function(e5, n4, r4) {
          var a3 = n4.provider, c3 = n4.prefix, u3 = n4.icons.join(","), f3 = o3[a3 + ":" + c3] + t3.replace("{provider}", a3).replace("{prefix}", c3).replace("{icons}", u3);
          i3 ? i3(e5 + f3).then(function(e6) {
            if (e6.status === 200)
              return e6.json();
            r4.done(void 0, e6.status);
          }).then(function(e6) {
            typeof e6 == "object" && e6 !== null && r4.done(e6);
          }).catch(function(e6) {
            r4.done(void 0, e6.errno);
          }) : r4.done(void 0, 424);
        } };
      };
    }), A = "iconifyFinder" + Date.now(), S = "iconifyData" + Date.now();
    function _2(e3, n3, t3, r3) {
      var o3;
      try {
        o3 = document.createElement("span");
      } catch (e4) {
        return r3 ? "" : null;
      }
      var i3 = l.iconToSVG(t3, f2.mergeCustomisations(f2.defaults, n3)), a3 = e3.element, u3 = e3.finder, s3 = e3.name, d2 = a3 ? a3.getAttribute("class") : "", v3 = u3 ? u3.classFilter(d2 ? d2.split(/\s+/) : []) : [], p3 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="' + ("iconify iconify--" + s3.prefix + (s3.provider === "" ? "" : " iconify--" + s3.provider) + (v3.length ? " " + v3.join(" ") : "")) + '">' + c2.replaceIDs(i3.body) + "</svg>";
      o3.innerHTML = p3;
      var h3 = o3.childNodes[0], g2 = h3.style, m2 = i3.attributes;
      if (Object.keys(m2).forEach(function(e4) {
        h3.setAttribute(e4, m2[e4]);
      }), i3.inline && (g2.verticalAlign = "-0.125em"), a3) {
        for (var b2 = a3.attributes, y2 = 0; y2 < b2.length; y2++) {
          var I2 = b2.item(y2);
          if (I2) {
            var j2 = I2.name;
            if (j2 !== "class" && j2 !== "style" && m2[j2] === void 0)
              try {
                h3.setAttribute(j2, I2.value);
              } catch (e4) {
              }
          }
        }
        for (var x2 = a3.style, O2 = 0; O2 < x2.length; O2++) {
          var P2 = x2[O2];
          g2[P2] = x2[P2];
        }
      }
      if (u3) {
        var w2 = { name: s3, status: "loaded", customisations: n3 };
        h3[S] = w2, h3[A] = u3;
      }
      var M2 = r3 ? o3.innerHTML : h3;
      return a3 && a3.parentNode ? a3.parentNode.replaceChild(h3, a3) : o3.removeChild(h3), M2;
    }
    var E = [];
    function k(e3) {
      for (var n3 = 0; n3 < E.length; n3++) {
        var t3 = E[n3];
        if ((typeof t3.node == "function" ? t3.node() : t3.node) === e3)
          return t3;
      }
    }
    function C(e3, n3) {
      n3 === void 0 && (n3 = false);
      var t3 = k(e3);
      return t3 ? (t3.temporary && (t3.temporary = n3), t3) : (t3 = { node: e3, temporary: n3 }, E.push(t3), t3);
    }
    function F() {
      return E;
    }
    var T = null, D = { childList: true, subtree: true, attributes: true };
    function N(e3) {
      if (e3.observer) {
        var n3 = e3.observer;
        n3.pendingScan || (n3.pendingScan = setTimeout(function() {
          delete n3.pendingScan, T && T(e3);
        }));
      }
    }
    function L(e3, n3) {
      if (e3.observer) {
        var t3 = e3.observer;
        if (!t3.pendingScan)
          for (var r3 = 0; r3 < n3.length; r3++) {
            var o3 = n3[r3];
            if (o3.addedNodes && o3.addedNodes.length > 0 || o3.type === "attributes" && o3.target[A] !== void 0)
              return void (t3.paused || N(e3));
          }
      }
    }
    function z(e3, n3) {
      e3.observer.instance.observe(n3, D);
    }
    function R(e3) {
      var n3 = e3.observer;
      if (!n3 || !n3.instance) {
        var t3 = typeof e3.node == "function" ? e3.node() : e3.node;
        t3 && (n3 || (n3 = { paused: 0 }, e3.observer = n3), n3.instance = new MutationObserver(L.bind(null, e3)), z(e3, t3), n3.paused || N(e3));
      }
    }
    function q() {
      F().forEach(R);
    }
    function U(e3) {
      if (e3.observer) {
        var n3 = e3.observer;
        n3.pendingScan && (clearTimeout(n3.pendingScan), delete n3.pendingScan), n3.instance && (n3.instance.disconnect(), delete n3.instance);
      }
    }
    function V(e3) {
      var n3 = T !== null;
      T !== e3 && (T = e3, n3 && F().forEach(U)), n3 ? q() : function(e4) {
        var n4 = document;
        n4.readyState === "complete" || n4.readyState !== "loading" && !n4.documentElement.doScroll ? e4() : (n4.addEventListener("DOMContentLoaded", e4), window.addEventListener("load", e4));
      }(q);
    }
    function G(e3) {
      (e3 ? [e3] : F()).forEach(function(e4) {
        if (e4.observer) {
          var n3 = e4.observer;
          if (n3.paused++, !(n3.paused > 1) && n3.instance)
            n3.instance.disconnect();
        } else
          e4.observer = { paused: 1 };
      });
    }
    function $(e3) {
      (e3 ? [e3] : F()).forEach(function(e4) {
        if (e4.observer) {
          var n3 = e4.observer;
          if (n3.paused && (n3.paused--, !n3.paused)) {
            var t3 = typeof e4.node == "function" ? e4.node() : e4.node;
            if (!t3)
              return;
            n3.instance ? z(e4, t3) : R(e4);
          }
        } else
          R(e4);
      });
    }
    function B(e3, n3) {
      n3 === void 0 && (n3 = false);
      var t3 = C(e3, n3);
      return R(t3), t3;
    }
    function Q(e3) {
      var n3 = k(e3);
      n3 && (U(n3), function(e4) {
        E = E.filter(function(n4) {
          var t3 = typeof n4.node == "function" ? n4.node() : n4.node;
          return e4 !== t3;
        });
      }(e3));
    }
    var H = [];
    function J(e3) {
      return typeof e3 == "string" && (e3 = o2.stringToIcon(e3)), e3 !== null && o2.validateIcon(e3) ? e3 : null;
    }
    function Y(e3) {
      var n3 = [];
      H.forEach(function(t4) {
        var r3 = t4.find(e3);
        Array.prototype.forEach.call(r3, function(e4) {
          var r4 = e4;
          if (r4[A] === void 0 || r4[A] === t4) {
            var o3 = J(t4.name(r4));
            if (o3 !== null) {
              r4[A] = t4;
              var i3 = { element: r4, finder: t4, name: o3 };
              n3.push(i3);
            }
          }
        });
      });
      var t3 = e3.querySelectorAll("svg.iconify");
      return Array.prototype.forEach.call(t3, function(e4) {
        var t4 = e4, r3 = t4[A], o3 = t4[S];
        if (r3 && o3) {
          var i3 = J(r3.name(t4));
          if (i3 !== null) {
            var a3, c3 = false;
            if (i3.prefix !== o3.name.prefix || i3.name !== o3.name.name ? c3 = true : (a3 = r3.customisations(t4), function(e5, n4) {
              var t5 = Object.keys(e5), r4 = Object.keys(n4);
              if (t5.length !== r4.length)
                return false;
              for (var o4 = 0; o4 < t5.length; o4++) {
                var i4 = t5[o4];
                if (n4[i4] !== e5[i4])
                  return false;
              }
              return true;
            }(o3.customisations, a3) || (c3 = true)), c3) {
              var u3 = { element: t4, finder: r3, name: i3, customisations: a3 };
              n3.push(u3);
            }
          }
        }
      }), n3;
    }
    var Z = false;
    function K() {
      Z || (Z = true, setTimeout(function() {
        Z && (Z = false, W());
      }));
    }
    function W(e3, n3) {
      n3 === void 0 && (n3 = false), Z = false;
      var t3 = Object.create(null);
      if ((e3 ? [e3] : F()).forEach(function(e4) {
        var r4 = typeof e4.node == "function" ? e4.node() : e4.node;
        if (r4 && r4.querySelectorAll) {
          var o3 = false, a3 = false;
          Y(r4).forEach(function(n4) {
            var r5, c3, u3 = n4.element, f3 = n4.name, l2 = f3.provider, s3 = f3.prefix, v3 = f3.name, p3 = u3[S];
            if (p3 !== void 0 && (r5 = p3.name, c3 = f3, r5 !== null && c3 !== null && r5.name === c3.name && r5.prefix === c3.prefix))
              switch (p3.status) {
                case "missing":
                  return;
                case "loading":
                  if (d.coreModules.api && d.coreModules.api.isPending({ provider: l2, prefix: s3, name: v3 }))
                    return void (o3 = true);
              }
            var h3 = i2.getStorage(l2, s3);
            if (h3.icons[v3] === void 0) {
              if (h3.missing[v3])
                return p3 = { name: f3, status: "missing", customisations: {} }, void (u3[S] = p3);
              if (d.coreModules.api && !d.coreModules.api.isPending({ provider: l2, prefix: s3, name: v3 })) {
                t3[l2] === void 0 && (t3[l2] = Object.create(null));
                var g2 = t3[l2];
                g2[s3] === void 0 && (g2[s3] = Object.create(null)), g2[s3][v3] = true;
              }
              p3 = { name: f3, status: "loading", customisations: {} }, u3[S] = p3, o3 = true;
            } else {
              !a3 && e4.observer && (G(e4), a3 = true);
              var m2 = n4.customisations !== void 0 ? n4.customisations : n4.finder.customisations(u3);
              _2(n4, m2, i2.getIcon(h3, v3));
            }
          }), e4.temporary && !o3 ? Q(r4) : n3 && o3 ? B(r4, true) : a3 && e4.observer && $(e4);
        }
      }), d.coreModules.api) {
        var r3 = d.coreModules.api;
        Object.keys(t3).forEach(function(e4) {
          var n4 = t3[e4];
          Object.keys(n4).forEach(function(t4) {
            r3.loadIcons(Object.keys(n4[t4]).map(function(n5) {
              return { provider: e4, prefix: t4, name: n5 };
            }), K);
          });
        });
      }
    }
    var X = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.rotateFromString = void 0, n3.rotateFromString = function(e4) {
        var n4 = e4.replace(/^-?[0-9.]*/, "");
        function t3(e5) {
          for (; e5 < 0; )
            e5 += 4;
          return e5 % 4;
        }
        if (n4 === "") {
          var r3 = parseInt(e4);
          return isNaN(r3) ? 0 : t3(r3);
        }
        if (n4 !== e4) {
          var o3 = 0;
          switch (n4) {
            case "%":
              o3 = 25;
              break;
            case "deg":
              o3 = 90;
          }
          if (o3) {
            var i3 = parseFloat(e4.slice(0, e4.length - n4.length));
            return isNaN(i3) ? 0 : (i3 /= o3) % 1 == 0 ? t3(i3) : 0;
          }
        }
        return 0;
      };
    }), ee = e2(function(e3, n3) {
      Object.defineProperty(n3, "__esModule", { value: true }), n3.alignmentFromString = n3.flipFromString = void 0;
      var t3 = /[\s,]+/;
      n3.flipFromString = function(e4, n4) {
        n4.split(t3).forEach(function(n5) {
          switch (n5.trim()) {
            case "horizontal":
              e4.hFlip = true;
              break;
            case "vertical":
              e4.vFlip = true;
          }
        });
      }, n3.alignmentFromString = function(e4, n4) {
        n4.split(t3).forEach(function(n5) {
          var t4 = n5.trim();
          switch (t4) {
            case "left":
            case "center":
            case "right":
              e4.hAlign = t4;
              break;
            case "top":
            case "middle":
            case "bottom":
              e4.vAlign = t4;
              break;
            case "slice":
            case "crop":
              e4.slice = true;
              break;
            case "meet":
              e4.slice = false;
          }
        });
      };
    });
    function ne(e3, n3) {
      return e3.hasAttribute(n3);
    }
    function te(e3, n3) {
      return e3.getAttribute(n3);
    }
    var re = ["inline", "hFlip", "vFlip"], oe = ["width", "height"], ie = "iconify-inline", ae = { find: function(e3) {
      return e3.querySelectorAll("i.iconify, span.iconify, i.iconify-inline, span.iconify-inline");
    }, name: function(e3) {
      return ne(e3, "data-icon") ? te(e3, "data-icon") : null;
    }, customisations: function(e3, n3) {
      n3 === void 0 && (n3 = { inline: false });
      var t3 = n3, r3 = e3.getAttribute("class");
      if ((r3 ? r3.split(/\s+/) : []).indexOf(ie) !== -1 && (t3.inline = true), ne(e3, "data-rotate")) {
        var o3 = X.rotateFromString(te(e3, "data-rotate"));
        o3 && (t3.rotate = o3);
      }
      return ne(e3, "data-flip") && ee.flipFromString(t3, te(e3, "data-flip")), ne(e3, "data-align") && ee.alignmentFromString(t3, te(e3, "data-align")), re.forEach(function(n4) {
        if (ne(e3, "data-" + n4)) {
          var r4 = function(e4, n5) {
            var t4 = e4.getAttribute(n5);
            return t4 === n5 || t4 === "true" || t4 !== "" && t4 !== "false" && null;
          }(e3, "data-" + n4);
          typeof r4 == "boolean" && (t3[n4] = r4);
        }
      }), oe.forEach(function(n4) {
        if (ne(e3, "data-" + n4)) {
          var r4 = te(e3, "data-" + n4);
          r4 !== "" && (t3[n4] = r4);
        }
      }), t3;
    }, classFilter: function(e3) {
      var n3 = [];
      return e3.forEach(function(e4) {
        e4 !== "iconify" && e4 !== "" && e4.slice(0, 9) !== "iconify--" && n3.push(e4);
      }), n3;
    } };
    function ce(e3, n3, t3) {
      var r3 = a2.getIconData(e3);
      return r3 ? _2({ name: o2.stringToIcon(e3) }, f2.mergeCustomisations(f2.defaults, typeof n3 == "object" ? n3 : {}), r3, t3) : null;
    }
    var ue = { getVersion: function() {
      return "2.0.4";
    }, renderSVG: function(e3, n3) {
      return ce(e3, n3, false);
    }, renderHTML: function(e3, n3) {
      return ce(e3, n3, true);
    }, renderIcon: function(e3, n3) {
      var t3 = a2.getIconData(e3);
      if (!t3)
        return null;
      var r3 = f2.mergeCustomisations(f2.defaults, typeof n3 == "object" ? n3 : {});
      return l.iconToSVG(t3, r3);
    }, scan: function(e3) {
      e3 ? function(e4) {
        var n3 = k(e4);
        n3 ? W(n3) : W({ node: e4, temporary: true }, true);
      }(e3) : W();
    }, observe: function(e3) {
      B(e3);
    }, stopObserving: function(e3) {
      Q(e3);
    }, pauseObserver: function(e3) {
      if (e3) {
        var n3 = k(e3);
        n3 && G(n3);
      } else
        G();
    }, resumeObserver: function(e3) {
      if (e3) {
        var n3 = k(e3);
        n3 && $(n3);
      } else
        $();
    } };
    if (typeof document != "undefined" && typeof window != "undefined") {
      !function() {
        if (document.documentElement)
          return C(document.documentElement);
        E.push({ node: function() {
          return document.documentElement;
        } });
      }(), function(e3) {
        H.indexOf(e3) === -1 && H.push(e3);
      }(ae);
      var fe = window;
      if (fe.IconifyPreload !== void 0) {
        var le = fe.IconifyPreload, se = "Invalid IconifyPreload syntax.";
        typeof le == "object" && le !== null && (le instanceof Array ? le : [le]).forEach(function(e3) {
          try {
            (typeof e3 != "object" || e3 === null || e3 instanceof Array || typeof e3.icons != "object" || typeof e3.prefix != "string" || !a2.storageFunctions.addCollection(e3)) && console.error(se);
          } catch (e4) {
            console.error(se);
          }
        });
      }
      setTimeout(function() {
        V(W), W();
      });
    }
    var de = { enableCache: function(e3, n3) {
      return p2.toggleBrowserCache(e3, n3 !== false);
    }, disableCache: function(e3) {
      return p2.toggleBrowserCache(e3, true);
    } }, ve = { _api: P.APIInternalFunctions };
    [a2.storageFunctions, s2.builderFunctions, ue, de, P.APIFunctions].forEach(function(e3) {
      for (var n3 in e3)
        ve[n3] = e3[n3];
    }), d.coreModules.api = O.API;
    var pe = M.getAPIModule;
    try {
      typeof document != "undefined" && typeof window != "undefined" && (pe = typeof fetch == "function" && typeof Promise == "function" ? M.getAPIModule : w.getAPIModule);
    } catch (se2) {
    }
    if (I.setAPIModule("", pe(j.getAPIConfig)), ve._api.setFetch = function(e3) {
      M.setFetch(e3), pe !== M.getAPIModule && (pe = M.getAPIModule, I.setAPIModule("", pe(j.getAPIConfig)));
    }, typeof document != "undefined" && typeof window != "undefined") {
      d.coreModules.cache = v2.storeCache, v2.loadCache();
      var he = window;
      if (he.IconifyProviders !== void 0) {
        var ge = he.IconifyProviders;
        if (typeof ge == "object" && ge !== null)
          for (var me in ge) {
            var be = "IconifyProviders[" + me + "] is invalid.";
            try {
              var ye = ge[me];
              if (typeof ye != "object" || !ye || ye.resources === void 0)
                continue;
              j.setAPIConfig(me, ye) || console.error(be);
            } catch (e3) {
              console.error(be);
            }
          }
      }
    }
    return ve;
  }();
  try {
    self.Iconify === void 0 && (self.Iconify = Iconify);
  } catch (e2) {
  }
  try {
    exports.__esModule = true, exports.default = Iconify;
  } catch (e2) {
  }
})(iconify_min);
var Module = /* @__PURE__ */ getDefaultExportFromCjs(iconify_min);
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i2 = 0; i2 < list.length; i2++) {
    map[list[i2]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function normalizeStyle(value) {
  if (isArray$5(value)) {
    const res = {};
    for (let i2 = 0; i2 < value.length; i2++) {
      const item = value[i2];
      const normalized = isString$6(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString$6(value)) {
    return value;
  } else if (isObject$5(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString$6(value)) {
    res = value;
  } else if (isArray$5(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      const normalized = normalizeClass(value[i2]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$5(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString$6(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
function looseCompareArrays(a2, b) {
  if (a2.length !== b.length)
    return false;
  let equal = true;
  for (let i2 = 0; equal && i2 < a2.length; i2++) {
    equal = looseEqual(a2[i2], b[i2]);
  }
  return equal;
}
function looseEqual(a2, b) {
  if (a2 === b)
    return true;
  let aValidType = isDate$2(a2);
  let bValidType = isDate$2(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a2.getTime() === b.getTime() : false;
  }
  aValidType = isArray$5(a2);
  bValidType = isArray$5(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a2, b) : false;
  }
  aValidType = isObject$5(a2);
  bValidType = isObject$5(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b[key])) {
        return false;
      }
    }
  }
  return String(a2) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString$1 = (val) => {
  return val == null ? "" : isArray$5(val) || isObject$5(val) && (val.toString === objectToString$2 || !isFunction$5(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$5(val) && !isArray$5(val) && !isPlainObject$4(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend$2 = Object.assign;
const remove = (arr, el) => {
  const i2 = arr.indexOf(el);
  if (i2 > -1) {
    arr.splice(i2, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$1.call(val, key);
const isArray$5 = Array.isArray;
const isMap = (val) => toTypeString$2(val) === "[object Map]";
const isSet = (val) => toTypeString$2(val) === "[object Set]";
const isDate$2 = (val) => val instanceof Date;
const isFunction$5 = (val) => typeof val === "function";
const isString$6 = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$5 = (val) => val !== null && typeof val === "object";
const isPromise$1 = (val) => {
  return isObject$5(val) && isFunction$5(val.then) && isFunction$5(val.catch);
};
const objectToString$2 = Object.prototype.toString;
const toTypeString$2 = (value) => objectToString$2.call(value);
const toRawType = (value) => {
  return toTypeString$2(value).slice(8, -1);
};
const isPlainObject$4 = (val) => toTypeString$2(val) === "[object Object]";
const isIntegerKey = (key) => isString$6(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache2 = Object.create(null);
  return (str) => {
    const hit = cache2[str];
    return hit || (cache2[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i2 = 0; i2 < fns.length; i2++) {
    fns[i2](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n2 = parseFloat(val);
  return isNaN(n2) ? val : n2;
};
let _globalThis$2;
const getGlobalThis$2 = () => {
  return _globalThis$2 || (_globalThis$2 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
let activeEffectScope;
const effectScopeStack = [];
class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }
  run(fn) {
    if (this.active) {
      try {
        this.on();
        return fn();
      } finally {
        this.off();
      }
    }
  }
  on() {
    if (this.active) {
      effectScopeStack.push(this);
      activeEffectScope = this;
    }
  }
  off() {
    if (this.active) {
      effectScopeStack.pop();
      activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
    }
  }
  stop(fromParent) {
    if (this.active) {
      this.effects.forEach((e2) => e2.stop());
      this.cleanups.forEach((cleanup) => cleanup());
      if (this.scopes) {
        this.scopes.forEach((e2) => e2.stop(true));
      }
      if (this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect, scope) {
  scope = scope || activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps }) => {
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].w |= trackOpBit;
    }
  }
};
const finalizeDepMarkers = (effect) => {
  const { deps } = effect;
  if (deps.length) {
    let ptr = 0;
    for (let i2 = 0; i2 < deps.length; i2++) {
      const dep = deps[i2];
      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      }
      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }
    deps.length = ptr;
  }
};
const targetMap = new WeakMap();
let effectTrackDepth = 0;
let trackOpBit = 1;
const maxMarkerBits = 30;
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    recordEffectScope(this, scope);
  }
  run() {
    if (!this.active) {
      return this.fn();
    }
    if (!effectStack.includes(this)) {
      try {
        effectStack.push(activeEffect = this);
        enableTracking();
        trackOpBit = 1 << ++effectTrackDepth;
        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }
        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }
        trackOpBit = 1 << --effectTrackDepth;
        resetTracking();
        effectStack.pop();
        const n2 = effectStack.length;
        activeEffect = n2 > 0 ? effectStack[n2 - 1] : void 0;
      }
    }
  }
  stop() {
    if (this.active) {
      cleanupEffect(this);
      if (this.onStop) {
        this.onStop();
      }
      this.active = false;
    }
  }
}
function cleanupEffect(effect) {
  const { deps } = effect;
  if (deps.length) {
    for (let i2 = 0; i2 < deps.length; i2++) {
      deps[i2].delete(effect);
    }
    deps.length = 0;
  }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  } else {
    shouldTrack2 = !dep.has(activeEffect);
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger$1(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray$5(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray$5(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray$5(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray$5(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const shallowGet = /* @__PURE__ */ createGetter(false, true);
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i2 = 0, l = this.length; i2 < l; i2++) {
        track(arr, "get", i2 + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly2 = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray$5(target);
    if (!isReadonly2 && targetIsArray && hasOwn$1(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject$5(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
const shallowSet = /* @__PURE__ */ createSetter(true);
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray$5(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray$5(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn$1(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger$1(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger$1(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn$1(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger$1(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys$1(target) {
  track(target, "iterate", isArray$5(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys: ownKeys$1
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const shallowReactiveHandlers = /* @__PURE__ */ extend$2({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
});
const toShallow = (value) => value;
const getProto = (v2) => Reflect.getPrototypeOf(v2);
function get$1(target, key, isReadonly2 = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "get", key);
  }
  !isReadonly2 && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap2(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap2(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly2 && track(rawTarget, "has", key);
  }
  !isReadonly2 && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger$1(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger$1(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger$1(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger$1(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger$1(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly2, isShallow) {
  return function forEach3(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap2(value), wrap2(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap2 = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap2(value[0]), wrap2(value[1])] : wrap2(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn$1(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$5(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  def(value, "__v_skip", true);
  return value;
}
const toReactive = (value) => isObject$5(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$5(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (isTracking()) {
    ref2 = toRaw(ref2);
    if (!ref2.dep) {
      ref2.dep = createDep();
    }
    {
      trackEffects(ref2.dep);
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r2) {
  return Boolean(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, _shallow) {
    this._shallow = _shallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this._shallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  const ret = isArray$5(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = toRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key) {
    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }
  get value() {
    return this._object[this._key];
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
}
function toRef(object, key) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key);
}
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2) {
    this._setter = _setter;
    this.dep = void 0;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    trackRefValue(self2);
    if (self2._dirty) {
      self2._dirty = false;
      self2._value = self2.effect.run();
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
}
function computed(getterOrOptions, debugOptions) {
  let getter;
  let setter;
  const onlyGetter = isFunction$5(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter);
  return cRef;
}
Promise.resolve();
function emit$1(instance, event, ...rawArgs) {
  const props = instance.vnode.props || EMPTY_OBJ;
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number: number2, trim: trim2 } = props[modifiersKey] || EMPTY_OBJ;
    if (trim2) {
      args = rawArgs.map((a2) => a2.trim());
    } else if (number2) {
      args = rawArgs.map(toNumber);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.emitsCache;
  const cached = cache2.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction$5(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend$2(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, null);
    return null;
  }
  if (isArray$5(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend$2(normalized, raw);
  }
  cache2.set(comp, normalized);
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn$1(options, key[0].toLowerCase() + key.slice(1)) || hasOwn$1(options, hyphenate(key)) || hasOwn$1(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function pushScopeId(id) {
  currentScopeId = id;
}
function popScopeId() {
  currentScopeId = null;
}
const withScopeId = (_id) => withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx)
    return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const res = fn(...args);
    setCurrentRenderingInstance(prevInstance);
    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function markAttrsAccessed() {
}
function renderComponentRoot(instance) {
  const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render: render2, renderCache, data: data2, setupState, ctx, inheritAttrs } = instance;
  let result;
  let fallthroughAttrs;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      result = normalizeVNode(render2.call(proxyToUse, proxyToUse, renderCache, props, setupState, data2, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render3 = Component;
      if (false)
        ;
      result = normalizeVNode(render3.length > 1 ? render3(props, false ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },
        slots,
        emit
      } : { attrs, slots, emit }) : render3(props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root2 = result;
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root2;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root2 = cloneVNode(root2, fallthroughAttrs);
      }
    }
  }
  if (vnode.dirs) {
    root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    root2.transition = vnode.transition;
  }
  {
    result = root2;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
const filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i2 = 0; i2 < dynamicProps.length; i2++) {
        const key = dynamicProps[i2];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i2 = 0; i2 < nextKeys.length; i2++) {
    const key = nextKeys[i2];
    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}
const isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray$5(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
function provide(key, value) {
  if (!currentInstance)
    ;
  else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance) {
    const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction$5(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else
      ;
  }
}
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
const TransitionHookValidator = [Function, Array];
const BaseTransitionImpl = {
  name: `BaseTransition`,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    let prevTransitionKey;
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      if (!children || !children.length) {
        return;
      }
      const rawProps = toRaw(props);
      const { mode } = rawProps;
      const child = children[0];
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getKeepAliveChild(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      const oldChild = instance.subTree;
      const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      let transitionKeyChanged = false;
      const { getTransitionKey } = innerChild.type;
      if (getTransitionKey) {
        const key = getTransitionKey();
        if (prevTransitionKey === void 0) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      }
      if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in") {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            instance.update();
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el._leaveCb = () => {
              earlyRemove();
              el._leaveCb = void 0;
              delete enterHooks.delayedLeave;
            };
            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }
      return child;
    };
  }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const { leavingVNodes } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook2 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el._leaveCb) {
        el._leaveCb(true);
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        leavingVNode.el._leaveCb();
      }
      callHook2(hook, [el]);
    },
    enter(el) {
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      const done = el._enterCb = (cancelled) => {
        if (called)
          return;
        called = true;
        if (cancelled) {
          callHook2(cancelHook, [el]);
        } else {
          callHook2(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el._enterCb = void 0;
      };
      if (hook) {
        hook(el, done);
        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el._enterCb) {
        el._enterCb(true);
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook2(onBeforeLeave, [el]);
      let called = false;
      const done = el._leaveCb = (cancelled) => {
        if (called)
          return;
        called = true;
        remove2();
        if (cancelled) {
          callHook2(onLeaveCancelled, [el]);
        } else {
          callHook2(onAfterLeave, [el]);
        }
        el._leaveCb = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        onLeave(el, done);
        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone(vnode2) {
      return resolveTransitionHooks(vnode2, props, state, instance);
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
function getTransitionRawChildren(children, keepComment = false) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i2 = 0; i2 < children.length; i2++) {
    const child = children[i2];
    if (child.type === Fragment) {
      if (child.patchFlag & 128)
        keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } else if (keepComment || child.type !== Comment) {
      ret.push(child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i2 = 0; i2 < ret.length; i2++) {
      ret[i2].patchFlag = -2;
    }
  }
  return ret;
}
function defineComponent(options) {
  return isFunction$5(options) ? { setup: options, name: options.name } : options;
}
const isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(type, hook, keepAliveRoot, true);
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      unsetCurrentInstance();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
let shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    expose,
    inheritAttrs,
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = null;
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction$5(methodHandler)) {
        {
          ctx[key] = methodHandler.bind(publicThis);
        }
      }
    }
  }
  if (dataOptions) {
    const data2 = dataOptions.call(publicThis, publicThis);
    if (!isObject$5(data2))
      ;
    else {
      instance.data = reactive(data2);
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction$5(opt) ? opt.bind(publicThis, publicThis) : isFunction$5(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      const set2 = !isFunction$5(opt) && isFunction$5(opt.set) ? opt.set.bind(publicThis) : NOOP;
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v2) => c2.value = v2
      });
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction$5(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook$1(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray$5(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray$5(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
  if (isArray$5(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject$5(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      if (unwrapRef) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v2) => injected.value = v2
        });
      } else {
        ctx[key] = injected;
      }
    } else {
      ctx[key] = injected;
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(isArray$5(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString$6(raw)) {
    const handler = ctx[raw];
    if (isFunction$5(handler)) {
      watch(getter, handler);
    }
  } else if (isFunction$5(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject$5(raw)) {
    if (isArray$5(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction$5(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction$5(handler)) {
        watch(getter, handler, raw);
      }
    }
  } else
    ;
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const { mixins: globalMixins, optionsCache: cache2, config: { optionMergeStrategies } } = instance.appContext;
  const cached = cache2.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m) => mergeOptions$1(resolved, m, optionMergeStrategies, true));
    }
    mergeOptions$1(resolved, base, optionMergeStrategies);
  }
  cache2.set(base, resolved);
  return resolved;
}
function mergeOptions$1(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions$1(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m) => mergeOptions$1(to, m, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose")
      ;
    else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  watch: mergeWatchOptions,
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend$2(isFunction$5(to) ? to.call(this, this) : to, isFunction$5(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray$5(raw)) {
    const res = {};
    for (let i2 = 0; i2 < raw.length; i2++) {
      res[raw[i2]] = raw[i2];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend$2(extend$2(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend$2(Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  def(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const { props, attrs, vnode: { patchFlag } } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if ((optimized || patchFlag > 0) && !(patchFlag & 16)) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
        let key = propsToUpdate[i2];
        const value = rawProps[key];
        if (options) {
          if (hasOwn$1(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || !hasOwn$1(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn$1(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn$1(rawProps, key)) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger$1(instance, "set", "$attrs");
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn$1(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i2 = 0; i2 < needCastKeys.length; i2++) {
      const key = needCastKeys[i2];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn$1(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn$1(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && isFunction$5(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          unsetCurrentInstance();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[0]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache2 = appContext.propsCache;
  const cached = cache2.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction$5(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend$2(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    cache2.set(comp, EMPTY_ARR);
    return EMPTY_ARR;
  }
  if (isArray$5(raw)) {
    for (let i2 = 0; i2 < raw.length; i2++) {
      const normalizedKey = camelize(raw[i2]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray$5(opt) || isFunction$5(opt) ? { type: opt } : opt;
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[0] = booleanIndex > -1;
          prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn$1(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  cache2.set(comp, res);
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$") {
    return true;
  }
  return false;
}
function getType(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ctor === null ? "null" : "";
}
function isSameType(a2, b) {
  return getType(a2) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray$5(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction$5(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
const isInternalKey = (key) => key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value) => isArray$5(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
const normalizeSlot$1 = (key, rawSlot, ctx) => {
  const normalized = withCtx((...args) => {
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key))
      continue;
    const value = rawSlots[key];
    if (isFunction$5(value)) {
      slots[key] = normalizeSlot$1(key, value, ctx);
    } else if (value != null) {
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
const normalizeVNodeSlots = (instance, children) => {
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
const initSlots = (instance, children) => {
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      instance.slots = toRaw(children);
      def(children, "_", type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};
    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }
  def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        extend$2(slots, children);
        if (!optimized && type === 1) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
function withDirectives(vnode, directives) {
  const internalInstance = currentRenderingInstance;
  if (internalInstance === null) {
    return vnode;
  }
  const instance = internalInstance.proxy;
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i2 = 0; i2 < directives.length; i2++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i2];
    if (isFunction$5(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }
    if (dir.deep) {
      traverse(value);
    }
    bindings.push({
      dir,
      instance,
      value,
      oldValue: void 0,
      arg,
      modifiers
    });
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i2 = 0; i2 < bindings.length; i2++) {
    const binding = bindings[i2];
    if (oldBindings) {
      binding.oldValue = oldBindings[i2].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let uid = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject$5(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = new Set();
    let isMounted = false;
    const app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v2) {
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin))
          ;
        else if (plugin && isFunction$5(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction$5(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else
          ;
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          }
        }
        return app;
      },
      component(name, component) {
        if (!component) {
          return context.components[name];
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (!directive) {
          return context.directives[name];
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          const vnode = createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, isSVG);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          return getExposeProxy(vnode.component) || vnode.component.proxy;
        }
      },
      unmount() {
        if (isMounted) {
          render2(null, app._container);
          delete app._container.__vue_app__;
        }
      },
      provide(key, value) {
        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  const target = getGlobalThis$2();
  target.__VUE__ = true;
  const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text$1:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else
          ;
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, isSVG) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    isSVG = isSVG || n2.type === "svg";
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
    if (vnode.el && hostCloneNode !== void 0 && patchFlag === -1) {
      el = vnode.el = hostCloneNode(vnode.el);
    } else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
        hostSetScopeId(el, slotScopeIds[i2]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (vnode === subTree) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    const areChildrenSVG = isSVG && n2.type !== "foreignObject";
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, isSVG);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
            const key = propsToUpdate[i2];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
    for (let i2 = 0; i2 < newChildren.length; i2++) {
      const oldVNode = oldChildren[i2];
      const newVNode = newChildren[i2];
      const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };
  const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
    if (oldProps !== newProps) {
      for (const key in newProps) {
        if (isReservedProp(key))
          continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
        if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true);
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      setupComponent(instance);
    }
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
      }
      return;
    }
    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        updateComponentPreRender(instance, n2, optimized);
        return;
      } else {
        instance.next = n2;
        invalidateJob(instance.update);
        instance.update();
      }
    } else {
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        effect.allowRecurse = false;
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        effect.allowRecurse = true;
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            instance.subTree = renderComponentRoot(instance);
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
          };
          if (isAsyncWrapperVNode) {
            initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
          } else {
            hydrateSubTree();
          }
        } else {
          const subTree = instance.subTree = renderComponentRoot(instance);
          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u: u2, parent, vnode } = instance;
        let originNext = next;
        let vnodeHook;
        effect.allowRecurse = false;
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        effect.allowRecurse = true;
        const nextTree = renderComponentRoot(instance);
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u2) {
          queuePostRenderEffect(u2, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
      }
    };
    const effect = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
    const update = instance.update = effect.run.bind(effect);
    update.id = instance.uid;
    effect.allowRecurse = update.allowRecurse = true;
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(void 0, instance.update);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i2;
    for (i2 = 0; i2 < commonLength; i2++) {
      const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      patch(c1[i2], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    let i2 = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[i2];
      const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      i2++;
    }
    while (i2 <= e1 && i2 <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i2 > e1) {
      if (i2 <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i2 <= e2) {
          patch(null, c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i2++;
        }
      }
    } else if (i2 > e2) {
      while (i2 <= e1) {
        unmount(c1[i2], parentComponent, parentSuspense, true);
        i2++;
      }
    } else {
      const s1 = i2;
      const s2 = i2;
      const keyToNewIndexMap = new Map();
      for (i2 = s2; i2 <= e2; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (nextChild.key != null) {
          keyToNewIndexMap.set(nextChild.key, i2);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i2 = 0; i2 < toBePatched; i2++)
        newIndexToOldIndexMap[i2] = 0;
      for (i2 = s1; i2 <= e1; i2++) {
        const prevChild = c1[i2];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i2 + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i2 = toBePatched - 1; i2 >= 0; i2--) {
        const nextIndex = s2 + i2;
        const nextChild = c2[nextIndex];
        const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
        if (newIndexToOldIndexMap[i2] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i2 !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i2 = 0; i2 < children.length; i2++) {
        move(children[i2], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove3 = () => hostInsert(el, container, anchor);
        const performLeave = () => {
          leave(el, () => {
            remove3();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove3, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
    if (ref2 != null) {
      setRef(ref2, null, parentSuspense, vnode, true);
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    const { bum, scope, update, subTree, um } = instance;
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (update) {
      update.active = false;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;
      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i2 = start; i2 < children.length; i2++) {
      unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    return hostNextSibling(vnode.anchor || vnode.el);
  };
  const render2 = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }
    flushPostFlushCbs();
    container._vnode = vnode;
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray$5(rawRef)) {
    rawRef.forEach((r2, i2) => setRef(r2, oldRawRef && (isArray$5(oldRawRef) ? oldRawRef[i2] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  if (oldRef != null && oldRef !== ref2) {
    if (isString$6(oldRef)) {
      refs[oldRef] = null;
      if (hasOwn$1(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef(oldRef)) {
      oldRef.value = null;
    }
  }
  if (isString$6(ref2)) {
    const doSet = () => {
      {
        refs[ref2] = value;
      }
      if (hasOwn$1(setupState, ref2)) {
        setupState[ref2] = value;
      }
    };
    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (isRef(ref2)) {
    const doSet = () => {
      ref2.value = value;
    };
    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (isFunction$5(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else
    ;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray$5(ch1) && isArray$5(ch2)) {
    for (let i2 = 0; i2 < ch1.length; i2++) {
      const c1 = ch1[i2];
      let c2 = ch2[i2];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
          c2.el = c1.el;
        }
        if (!shallow)
          traverseStaticChildren(c1, c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i2, j, u2, v2, c2;
  const len = arr.length;
  for (i2 = 0; i2 < len; i2++) {
    const arrI = arr[i2];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i2] = j;
        result.push(i2);
        continue;
      }
      u2 = 0;
      v2 = result.length - 1;
      while (u2 < v2) {
        c2 = u2 + v2 >> 1;
        if (arr[result[c2]] < arrI) {
          u2 = c2 + 1;
        } else {
          v2 = c2;
        }
      }
      if (arrI < arr[result[u2]]) {
        if (u2 > 0) {
          p2[i2] = result[u2 - 1];
        }
        result[u2] = i2;
      }
    }
  }
  u2 = result.length;
  v2 = result[u2 - 1];
  while (u2-- > 0) {
    result[u2] = v2;
    v2 = p2[v2];
  }
  return result;
}
const isTeleport = (type) => type.__isTeleport;
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
function resolveDynamicComponent(component) {
  if (isString$6(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
    if (!res && maybeSelfReference) {
      return Component;
    }
    return res;
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const Fragment = Symbol(void 0);
const Text$1 = Symbol(void 0);
const Comment = Symbol(void 0);
const Static = Symbol(void 0);
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key }) => key != null ? key : null;
const normalizeRef = ({ ref: ref2 }) => {
  return ref2 != null ? isString$6(ref2) || isRef(ref2) || isFunction$5(ref2) ? { i: currentRenderingInstance, r: ref2 } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString$6(children) ? 8 : 16;
  }
  if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
const createVNode = _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(type, props, true);
    if (children) {
      normalizeChildren(cloned, children);
    }
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString$6(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject$5(style)) {
      if (isProxy(style) && !isArray$5(style)) {
        style = extend$2({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString$6(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject$5(type) ? 4 : isFunction$5(type) ? 2 : 0;
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend$2({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
  const { props, ref: ref2, patchFlag, children } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray$5(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text$1, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
  const vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray$5(child)) {
    return createVNode(Fragment, null, child.slice());
  } else if (typeof child === "object") {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text$1, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray$5(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction$5(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i2 = 0; i2 < args.length; i2++) {
    const toMerge = args[i2];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function renderList(source3, renderItem, cache2, index) {
  let ret;
  const cached = cache2 && cache2[index];
  if (isArray$5(source3) || isString$6(source3)) {
    ret = new Array(source3.length);
    for (let i2 = 0, l = source3.length; i2 < l; i2++) {
      ret[i2] = renderItem(source3[i2], i2, void 0, cached && cached[i2]);
    }
  } else if (typeof source3 === "number") {
    ret = new Array(source3);
    for (let i2 = 0; i2 < source3; i2++) {
      ret[i2] = renderItem(i2 + 1, i2, void 0, cached && cached[i2]);
    }
  } else if (isObject$5(source3)) {
    if (source3[Symbol.iterator]) {
      ret = Array.from(source3, (item, i2) => renderItem(item, i2, void 0, cached && cached[i2]));
    } else {
      const keys = Object.keys(source3);
      ret = new Array(keys.length);
      for (let i2 = 0, l = keys.length; i2 < l; i2++) {
        const key = keys[i2];
        ret[i2] = renderItem(source3[key], key, i2, cached && cached[i2]);
      }
    }
  } else {
    ret = [];
  }
  if (cache2) {
    cache2[index] = ret;
  }
  return ret;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
  if (currentRenderingInstance.isCE) {
    return createVNode("slot", name === "default" ? null : { name }, fallback && fallback());
  }
  let slot = slots[name];
  if (slot && slot._c) {
    slot._d = false;
  }
  openBlock();
  const validSlotContent = slot && ensureValidVNode(slot(props));
  const rendered = createBlock(Fragment, { key: props.key || `_${name}` }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  if (slot && slot._c) {
    slot._d = true;
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children))
      return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj) {
  const ret = {};
  for (const key in obj) {
    ret[toHandlerKey(key)] = obj[key];
  }
  return ret;
}
const getPublicInstance = (i2) => {
  if (!i2)
    return null;
  if (isStatefulComponent(i2))
    return getExposeProxy(i2) || i2.proxy;
  return getPublicInstance(i2.parent);
};
const publicPropertiesMap = extend$2(Object.create(null), {
  $: (i2) => i2,
  $el: (i2) => i2.vnode.el,
  $data: (i2) => i2.data,
  $props: (i2) => i2.props,
  $attrs: (i2) => i2.attrs,
  $slots: (i2) => i2.slots,
  $refs: (i2) => i2.refs,
  $parent: (i2) => getPublicInstance(i2.parent),
  $root: (i2) => getPublicInstance(i2.root),
  $emit: (i2) => i2.emit,
  $options: (i2) => resolveMergedOptions(i2),
  $forceUpdate: (i2) => () => queueJob(i2.update),
  $nextTick: (i2) => nextTick.bind(i2.proxy),
  $watch: (i2) => instanceWatch.bind(i2)
});
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data: data2, props, accessCache, type, appContext } = instance;
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 0:
            return setupState[key];
          case 1:
            return data2[key];
          case 3:
            return ctx[key];
          case 2:
            return props[key];
        }
      } else if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
        accessCache[key] = 0;
        return setupState[key];
      } else if (data2 !== EMPTY_OBJ && hasOwn$1(data2, key)) {
        accessCache[key] = 1;
        return data2[key];
      } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn$1(normalizedProps, key)) {
        accessCache[key] = 2;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
        accessCache[key] = 3;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 4;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn$1(ctx, key)) {
      accessCache[key] = 3;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, hasOwn$1(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else
      ;
  },
  set({ _: instance }, key, value) {
    const { data: data2, setupState, ctx } = instance;
    if (setupState !== EMPTY_OBJ && hasOwn$1(setupState, key)) {
      setupState[key] = value;
    } else if (data2 !== EMPTY_OBJ && hasOwn$1(data2, key)) {
      data2[key] = value;
    } else if (hasOwn$1(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({ _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
    let normalizedProps;
    return accessCache[key] !== void 0 || data2 !== EMPTY_OBJ && hasOwn$1(data2, key) || setupState !== EMPTY_OBJ && hasOwn$1(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn$1(normalizedProps, key) || hasOwn$1(ctx, key) || hasOwn$1(publicPropertiesMap, key) || hasOwn$1(appContext.config.globalProperties, key);
  }
};
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid$1++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    scope: new EffectScope(true),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    emit: null,
    emitted: null,
    propsDefaults: EMPTY_OBJ,
    inheritAttrs: type.inheritAttrs,
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = { _: instance };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit$1.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance) => {
  currentInstance = instance;
  instance.scope.on();
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  currentInstance = null;
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isInSSRComponentSetup = isSSR;
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isInSSRComponentSetup = false;
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  instance.accessCache = Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  const { setup } = Component;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
    resetTracking();
    unsetCurrentInstance();
    if (isPromise$1(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e2) => {
          handleError(e2, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction$5(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject$5(setupResult)) {
    instance.setupState = proxyRefs(setupResult);
  } else
    ;
  finishComponentSetup(instance, isSSR);
}
let compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template;
      if (template) {
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend$2(extend$2({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
      }
    }
    instance.render = Component.render || NOOP;
  }
  {
    setCurrentInstance(instance);
    pauseTracking();
    applyOptions(instance);
    resetTracking();
    unsetCurrentInstance();
  }
}
function createAttrsProxy(instance) {
  return new Proxy(instance.attrs, {
    get(target, key) {
      track(instance, "get", "$attrs");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    instance.exposed = exposed || {};
  };
  let attrs;
  {
    return {
      get attrs() {
        return attrs || (attrs = createAttrsProxy(instance));
      },
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component) {
  return isFunction$5(Component) ? Component.displayName || Component.name : Component.name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction$5(value) && "__vccOpts" in value;
}
const stack = [];
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11, [
      msg + args.join(""),
      instance && instance.proxy,
      trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
      trace
    ]);
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i2) => {
    logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString$6(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction$5(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
function callWithErrorHandling(fn, instance, type, args) {
  let res;
  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
  return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction$5(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise$1(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i2 = 0; i2 < fn.length; i2++) {
    values.push(callWithAsyncErrorHandling(fn[i2], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
          if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    console.error(err);
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJobId = getId(queue[middle]);
    middleJobId < id ? start = middle + 1 : end = middle;
  }
  return start;
}
function queueJob(job) {
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function invalidateJob(job) {
  const i2 = queue.indexOf(job);
  if (i2 > flushIndex) {
    queue.splice(i2, 1);
  }
}
function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!isArray$5(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    pendingQueue.push(...cb);
  }
  queueFlush();
}
function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
    pendingPreFlushCbs.length = 0;
    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      activePreFlushCbs[preFlushIndex]();
    }
    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null;
    flushPreFlushCbs(seen, parentJob);
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)];
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    activePostFlushCbs.sort((a2, b) => getId(a2) - getId(b));
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  flushPreFlushCbs(seen);
  queue.sort((a2, b) => getId(a2) - getId(b));
  const check = NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (false)
          ;
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs();
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function watchEffect(effect, options) {
  return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
  return doWatch(effect, null, { flush: "post" });
}
const INITIAL_WATCHER_VALUE = {};
function watch(source3, cb, options) {
  return doWatch(source3, cb, options);
}
function doWatch(source3, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
  const instance = currentInstance;
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source3)) {
    getter = () => source3.value;
    forceTrigger = !!source3._shallow;
  } else if (isReactive(source3)) {
    getter = () => source3;
    deep = true;
  } else if (isArray$5(source3)) {
    isMultiSource = true;
    forceTrigger = source3.some(isReactive);
    getter = () => source3.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return traverse(s2);
      } else if (isFunction$5(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else
        ;
    });
  } else if (isFunction$5(source3)) {
    if (cb) {
      getter = () => callWithErrorHandling(source3, instance, 2);
    } else {
      getter = () => {
        if (instance && instance.isUnmounted) {
          return;
        }
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(source3, instance, 3, [onInvalidate]);
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onInvalidate = (fn) => {
    cleanup = effect.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
    };
  };
  if (isInSSRComponentSetup) {
    onInvalidate = NOOP;
    if (!cb) {
      getter();
    } else if (immediate) {
      callWithAsyncErrorHandling(cb, instance, 3, [
        getter(),
        isMultiSource ? [] : void 0,
        onInvalidate
      ]);
    }
    return NOOP;
  }
  let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect.active) {
      return;
    }
    if (cb) {
      const newValue = effect.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue,
          onInvalidate
        ]);
        oldValue = newValue;
      }
    } else {
      effect.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
  } else {
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        job();
      }
    };
  }
  const effect = new ReactiveEffect(getter, scheduler);
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
  } else {
    effect.run();
  }
  return () => {
    effect.stop();
    if (instance && instance.scope) {
      remove(instance.scope.effects, effect);
    }
  };
}
function instanceWatch(source3, value, options) {
  const publicThis = this.proxy;
  const getter = isString$6(source3) ? source3.includes(".") ? createPathGetter(publicThis, source3) : () => publicThis[source3] : source3.bind(publicThis, publicThis);
  let cb;
  if (isFunction$5(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const cur = currentInstance;
  setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  if (cur) {
    setCurrentInstance(cur);
  } else {
    unsetCurrentInstance();
  }
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i2 = 0; i2 < segments.length && cur; i2++) {
      cur = cur[segments[i2]];
    }
    return cur;
  };
}
function traverse(value, seen) {
  if (!isObject$5(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray$5(value)) {
    for (let i2 = 0; i2 < value.length; i2++) {
      traverse(value[i2], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v2) => {
      traverse(v2, seen);
    });
  } else if (isPlainObject$4(value)) {
    for (const key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function h(type, propsOrChildren, children) {
  const l = arguments.length;
  if (l === 2) {
    if (isObject$5(propsOrChildren) && !isArray$5(propsOrChildren)) {
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      }
      return createVNode(type, propsOrChildren);
    } else {
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }
    return createVNode(type, propsOrChildren, children);
  }
}
const version = "3.2.19";
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const staticTemplateCache = new Map();
const nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, isSVG, is2, props) => {
    const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is2 ? { is: is2 } : void 0);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  cloneNode(el) {
    const cloned = el.cloneNode(true);
    if (`_value` in el) {
      cloned._value = el._value;
    }
    return cloned;
  },
  insertStaticContent(content, parent, anchor, isSVG) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    let template = staticTemplateCache.get(content);
    if (!template) {
      const t2 = doc.createElement("template");
      t2.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
      template = t2.content;
      if (isSVG) {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      staticTemplateCache.set(content, template);
    }
    parent.insertBefore(template.cloneNode(true), anchor);
    return [
      before ? before.nextSibling : parent.firstChild,
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
function patchClass(el, value, isSVG) {
  const transitionClasses = el._vtc;
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
function patchStyle(el, prev, next) {
  const style = el.style;
  const currentDisplay = style.display;
  if (!next) {
    el.removeAttribute("style");
  } else if (isString$6(next)) {
    if (prev !== next) {
      style.cssText = next;
    }
  } else {
    for (const key in next) {
      setStyle(style, key, next[key]);
    }
    if (prev && !isString$6(prev)) {
      for (const key in prev) {
        if (next[key] == null) {
          setStyle(style, key, "");
        }
      }
    }
  }
  if ("_vod" in el) {
    style.display = currentDisplay;
  }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray$5(val)) {
    val.forEach((v2) => setStyle(style, name, v2));
  } else {
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
const prefixes = ["Webkit", "Moz", "ms"];
const prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i2 = 0; i2 < prefixes.length; i2++) {
    const prefixed = prefixes[i2] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    const isBoolean2 = isSpecialBooleanAttr(key);
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean2 ? "" : value);
    }
  }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === "innerHTML" || key === "textContent") {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }
    el[key] = value == null ? "" : value;
    return;
  }
  if (key === "value" && el.tagName !== "PROGRESS") {
    el._value = value;
    const newValue = value == null ? "" : value;
    if (el.value !== newValue) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    return;
  }
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      el[key] = includeBooleanAttr(value);
      return;
    } else if (value == null && type === "string") {
      el[key] = "";
      el.removeAttribute(key);
      return;
    } else if (type === "number") {
      try {
        el[key] = 0;
      } catch (_a) {
      }
      el.removeAttribute(key);
      return;
    }
  }
  try {
    el[key] = value;
  } catch (e2) {
  }
}
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== "undefined") {
  if (_getNow() > document.createEvent("Event").timeStamp) {
    _getNow = () => performance.now();
  }
  const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
let cachedNow = 0;
const p = Promise.resolve();
const reset = () => {
  cachedNow = 0;
};
const getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el._vei || (el._vei = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  return [hyphenate(name.slice(2)), options];
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    const timeStamp = e2.timeStamp || _getNow();
    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, invoker.value), instance, 5, [e2]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray$5(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && nativeOnRE.test(key) && isFunction$5(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (nativeOnRE.test(key) && isString$6(value)) {
    return false;
  }
  return key in el;
}
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const setVars = () => setVarsOnVNode(instance.subTree, getter(instance.proxy));
  watchPostEffect(setVars);
  onMounted(() => {
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, { childList: true });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
  } else if (vnode.type === Static) {
    let { el, anchor } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor)
        break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    for (const key in vars) {
      style.setProperty(`--${key}`, vars[key]);
    }
  }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
const Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Transition.props = /* @__PURE__ */ extend$2({}, BaseTransition.props, DOMTransitionPropsValidators);
const callHook = (hook, args = []) => {
  if (isArray$5(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
const hasExplicitCallback = (hook) => {
  return hook ? isArray$5(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
  const finishEnter = (el, isAppear, done) => {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend$2(baseProps, {
    onBeforeEnter(el) {
      callHook(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(() => {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject$5(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n2 = NumberOf(duration);
    return [n2, n2];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
  (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
  const { _vtc } = el;
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el._vtc = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e2) => {
    if (e2.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(TRANSITION + "Delay");
  const transitionDurations = getStyleProperties(TRANSITION + "Duration");
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(ANIMATION + "Delay");
  const animationDurations = getStyleProperties(ANIMATION + "Duration");
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i2) => toMs(d) + toMs(delays[i2])));
}
function toMs(s2) {
  return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
  return document.body.offsetHeight;
}
const getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"];
  return isArray$5(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
const vModelCheckbox = {
  deep: true,
  created(el, _2, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign2 = el._assign;
      if (isArray$5(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign2(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign2(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign2(cloned);
      } else {
        assign2(getCheckboxValue(el, checked));
      }
    });
  },
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, { value, oldValue }, vnode) {
  el._modelValue = value;
  if (isArray$5(value)) {
    el.checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = looseEqual(value, getCheckboxValue(el, true));
  }
}
const vModelRadio = {
  created(el, { value }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el._assign(getValue(el));
    });
  },
  beforeUpdate(el, { value, oldValue }, vnode) {
    el._assign = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
const systemModifiers = ["ctrl", "shift", "alt", "meta"];
const modifierGuards = {
  stop: (e2) => e2.stopPropagation(),
  prevent: (e2) => e2.preventDefault(),
  self: (e2) => e2.target !== e2.currentTarget,
  ctrl: (e2) => !e2.ctrlKey,
  shift: (e2) => !e2.shiftKey,
  alt: (e2) => !e2.altKey,
  meta: (e2) => !e2.metaKey,
  left: (e2) => "button" in e2 && e2.button !== 0,
  middle: (e2) => "button" in e2 && e2.button !== 1,
  right: (e2) => "button" in e2 && e2.button !== 2,
  exact: (e2, modifiers) => systemModifiers.some((m) => e2[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers) => {
  return (event, ...args) => {
    for (let i2 = 0; i2 < modifiers.length; i2++) {
      const guard = modifierGuards[modifiers[i2]];
      if (guard && guard(event, modifiers))
        return;
    }
    return fn(event, ...args);
  };
};
const rendererOptions = extend$2({ patchProp }, nodeOps);
let renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
const render = (...args) => {
  ensureRenderer().render(...args);
};
const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  const { mount } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container)
      return;
    const component = app._component;
    if (!isFunction$5(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    container.innerHTML = "";
    const proxy = mount(container, false, container instanceof SVGElement);
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function normalizeContainer(container) {
  if (isString$6(container)) {
    const res = document.querySelector(container);
    return res;
  }
  return container;
}
/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const hasSymbol$1 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const PolySymbol = (name) => hasSymbol$1 ? Symbol(name) : "_vr_" + name;
const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
const routerKey = /* @__PURE__ */ PolySymbol("r");
const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
  return obj.__esModule || hasSymbol$1 && obj[Symbol.toStringTag] === "Module";
}
const assign$3 = Object.assign;
function applyToParams(fn, params) {
  const newParams = {};
  for (const key in params) {
    const value = params[key];
    newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
  }
  return newParams;
}
let noop$3 = () => {
};
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
function parseURL(parseQuery2, location2, currentLocation = "/") {
  let path, query = {}, searchString = "", hash = "";
  const searchPos = location2.indexOf("?");
  const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
  if (searchPos > -1) {
    path = location2.slice(0, searchPos);
    searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
    query = parseQuery2(searchString);
  }
  if (hashPos > -1) {
    path = path || location2.slice(0, hashPos);
    hash = location2.slice(hashPos, location2.length);
  }
  path = resolveRelativePath(path != null ? path : location2, currentLocation);
  return {
    fullPath: path + (searchString && "?") + searchString + hash,
    path,
    query,
    hash
  };
}
function stringifyURL(stringifyQuery2, location2) {
  let query = location2.query ? stringifyQuery2(location2.query) : "";
  return location2.path + (query && "?") + query + (location2.hash || "");
}
function stripBase(pathname, base) {
  if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
    return pathname;
  return pathname.slice(base.length) || "/";
}
function isSameRouteLocation(stringifyQuery2, a2, b) {
  let aLastIndex = a2.matched.length - 1;
  let bLastIndex = b.matched.length - 1;
  return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a2.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a2.params, b.params) && stringifyQuery2(a2.query) === stringifyQuery2(b.query) && a2.hash === b.hash;
}
function isSameRouteRecord(a2, b) {
  return (a2.aliasOf || a2) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a2, b) {
  if (Object.keys(a2).length !== Object.keys(b).length)
    return false;
  for (let key in a2) {
    if (!isSameRouteLocationParamsValue(a2[key], b[key]))
      return false;
  }
  return true;
}
function isSameRouteLocationParamsValue(a2, b) {
  return Array.isArray(a2) ? isEquivalentArray(a2, b) : Array.isArray(b) ? isEquivalentArray(b, a2) : a2 === b;
}
function isEquivalentArray(a2, b) {
  return Array.isArray(b) ? a2.length === b.length && a2.every((value, i2) => value === b[i2]) : a2.length === 1 && a2[0] === b;
}
function resolveRelativePath(to, from) {
  if (to.startsWith("/"))
    return to;
  if (!to)
    return from;
  const fromSegments = from.split("/");
  const toSegments = to.split("/");
  let position = fromSegments.length - 1;
  let toPosition;
  let segment;
  for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
    segment = toSegments[toPosition];
    if (position === 1 || segment === ".")
      continue;
    if (segment === "..")
      position--;
    else
      break;
  }
  return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
function normalizeBase(base) {
  if (!base) {
    if (isBrowser) {
      const baseEl = document.querySelector("base");
      base = baseEl && baseEl.getAttribute("href") || "/";
      base = base.replace(/^\w+:\/\/[^\/]+/, "");
    } else {
      base = "/";
    }
  }
  if (base[0] !== "/" && base[0] !== "#")
    base = "/" + base;
  return removeTrailingSlash(base);
}
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location2) {
  return base.replace(BEFORE_HASH_RE, "#") + location2;
}
function getElementPosition(el, offset) {
  const docRect = document.documentElement.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return {
    behavior: offset.behavior,
    left: elRect.left - docRect.left - (offset.left || 0),
    top: elRect.top - docRect.top - (offset.top || 0)
  };
}
const computeScrollPosition = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function scrollToPosition(position) {
  let scrollToOptions;
  if ("el" in position) {
    let positionEl = position.el;
    const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
    const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
    if (!el) {
      return;
    }
    scrollToOptions = getElementPosition(el, position);
  } else {
    scrollToOptions = position;
  }
  if ("scrollBehavior" in document.documentElement.style)
    window.scrollTo(scrollToOptions);
  else {
    window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
  }
}
function getScrollKey(path, delta) {
  const position = history.state ? history.state.position - delta : -1;
  return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
  scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
  const scroll = scrollPositions.get(key);
  scrollPositions.delete(key);
  return scroll;
}
let createBaseLocation = () => location.protocol + "//" + location.host;
function createCurrentLocation(base, location2) {
  const { pathname, search, hash } = location2;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/")
      pathFromHash = "/" + pathFromHash;
    return stripBase(pathFromHash, "");
  }
  const path = stripBase(pathname, base);
  return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
  let listeners = [];
  let teardowns = [];
  let pauseState = null;
  const popStateHandler = ({ state }) => {
    const to = createCurrentLocation(base, location);
    const from = currentLocation.value;
    const fromState = historyState.value;
    let delta = 0;
    if (state) {
      currentLocation.value = to;
      historyState.value = state;
      if (pauseState && pauseState === from) {
        pauseState = null;
        return;
      }
      delta = fromState ? state.position - fromState.position : 0;
    } else {
      replace(to);
    }
    listeners.forEach((listener) => {
      listener(currentLocation.value, from, {
        delta,
        type: NavigationType.pop,
        direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
      });
    });
  };
  function pauseListeners() {
    pauseState = currentLocation.value;
  }
  function listen(callback) {
    listeners.push(callback);
    const teardown = () => {
      const index = listeners.indexOf(callback);
      if (index > -1)
        listeners.splice(index, 1);
    };
    teardowns.push(teardown);
    return teardown;
  }
  function beforeUnloadListener() {
    const { history: history2 } = window;
    if (!history2.state)
      return;
    history2.replaceState(assign$3({}, history2.state, { scroll: computeScrollPosition() }), "");
  }
  function destroy() {
    for (const teardown of teardowns)
      teardown();
    teardowns = [];
    window.removeEventListener("popstate", popStateHandler);
    window.removeEventListener("beforeunload", beforeUnloadListener);
  }
  window.addEventListener("popstate", popStateHandler);
  window.addEventListener("beforeunload", beforeUnloadListener);
  return {
    pauseListeners,
    listen,
    destroy
  };
}
function buildState(back, current, forward, replaced = false, computeScroll = false) {
  return {
    back,
    current,
    forward,
    replaced,
    position: window.history.length,
    scroll: computeScroll ? computeScrollPosition() : null
  };
}
function useHistoryStateNavigation(base) {
  const { history: history2, location: location2 } = window;
  let currentLocation = {
    value: createCurrentLocation(base, location2)
  };
  let historyState = { value: history2.state };
  if (!historyState.value) {
    changeLocation(currentLocation.value, {
      back: null,
      current: currentLocation.value,
      forward: null,
      position: history2.length - 1,
      replaced: true,
      scroll: null
    }, true);
  }
  function changeLocation(to, state, replace2) {
    const hashIndex = base.indexOf("#");
    const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
    try {
      history2[replace2 ? "replaceState" : "pushState"](state, "", url);
      historyState.value = state;
    } catch (err) {
      {
        console.error(err);
      }
      location2[replace2 ? "replace" : "assign"](url);
    }
  }
  function replace(to, data2) {
    const state = assign$3({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data2, { position: historyState.value.position });
    changeLocation(to, state, true);
    currentLocation.value = to;
  }
  function push(to, data2) {
    const currentState = assign$3({}, historyState.value, history2.state, {
      forward: to,
      scroll: computeScrollPosition()
    });
    changeLocation(currentState.current, currentState, true);
    const state = assign$3({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data2);
    changeLocation(to, state, false);
    currentLocation.value = to;
  }
  return {
    location: currentLocation,
    state: historyState,
    push,
    replace
  };
}
function createWebHistory(base) {
  base = normalizeBase(base);
  const historyNavigation = useHistoryStateNavigation(base);
  const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
  function go(delta, triggerListeners = true) {
    if (!triggerListeners)
      historyListeners.pauseListeners();
    history.go(delta);
  }
  const routerHistory = assign$3({
    location: "",
    base,
    go,
    createHref: createHref.bind(null, base)
  }, historyNavigation, historyListeners);
  Object.defineProperty(routerHistory, "location", {
    enumerable: true,
    get: () => historyNavigation.location.value
  });
  Object.defineProperty(routerHistory, "state", {
    enumerable: true,
    get: () => historyNavigation.state.value
  });
  return routerHistory;
}
function isRouteLocation(route) {
  return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
  return typeof name === "string" || typeof name === "symbol";
}
const START_LOCATION_NORMALIZED = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
function createRouterError(type, params) {
  {
    return assign$3(new Error(), {
      type,
      [NavigationFailureSymbol]: true
    }, params);
  }
}
function isNavigationFailure(error, type) {
  return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
  sensitive: false,
  strict: false,
  start: true,
  end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
function tokensToParser(segments, extraOptions) {
  const options = assign$3({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
  let score = [];
  let pattern = options.start ? "^" : "";
  const keys = [];
  for (const segment of segments) {
    const segmentScores = segment.length ? [] : [90];
    if (options.strict && !segment.length)
      pattern += "/";
    for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
      const token = segment[tokenIndex];
      let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
      if (token.type === 0) {
        if (!tokenIndex)
          pattern += "/";
        pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
        subSegmentScore += 40;
      } else if (token.type === 1) {
        const { value, repeatable, optional, regexp } = token;
        keys.push({
          name: value,
          repeatable,
          optional
        });
        const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
        if (re2 !== BASE_PARAM_PATTERN) {
          subSegmentScore += 10;
          try {
            new RegExp(`(${re2})`);
          } catch (err) {
            throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
          }
        }
        let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
        if (!tokenIndex)
          subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
        if (optional)
          subPattern += "?";
        pattern += subPattern;
        subSegmentScore += 20;
        if (optional)
          subSegmentScore += -8;
        if (repeatable)
          subSegmentScore += -20;
        if (re2 === ".*")
          subSegmentScore += -50;
      }
      segmentScores.push(subSegmentScore);
    }
    score.push(segmentScores);
  }
  if (options.strict && options.end) {
    const i2 = score.length - 1;
    score[i2][score[i2].length - 1] += 0.7000000000000001;
  }
  if (!options.strict)
    pattern += "/?";
  if (options.end)
    pattern += "$";
  else if (options.strict)
    pattern += "(?:/|$)";
  const re = new RegExp(pattern, options.sensitive ? "" : "i");
  function parse2(path) {
    const match = path.match(re);
    const params = {};
    if (!match)
      return null;
    for (let i2 = 1; i2 < match.length; i2++) {
      const value = match[i2] || "";
      const key = keys[i2 - 1];
      params[key.name] = value && key.repeatable ? value.split("/") : value;
    }
    return params;
  }
  function stringify(params) {
    let path = "";
    let avoidDuplicatedSlash = false;
    for (const segment of segments) {
      if (!avoidDuplicatedSlash || !path.endsWith("/"))
        path += "/";
      avoidDuplicatedSlash = false;
      for (const token of segment) {
        if (token.type === 0) {
          path += token.value;
        } else if (token.type === 1) {
          const { value, repeatable, optional } = token;
          const param = value in params ? params[value] : "";
          if (Array.isArray(param) && !repeatable)
            throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
          const text = Array.isArray(param) ? param.join("/") : param;
          if (!text) {
            if (optional) {
              if (segment.length < 2) {
                if (path.endsWith("/"))
                  path = path.slice(0, -1);
                else
                  avoidDuplicatedSlash = true;
              }
            } else
              throw new Error(`Missing required param "${value}"`);
          }
          path += text;
        }
      }
    }
    return path;
  }
  return {
    re,
    score,
    keys,
    parse: parse2,
    stringify
  };
}
function compareScoreArray(a2, b) {
  let i2 = 0;
  while (i2 < a2.length && i2 < b.length) {
    const diff = b[i2] - a2[i2];
    if (diff)
      return diff;
    i2++;
  }
  if (a2.length < b.length) {
    return a2.length === 1 && a2[0] === 40 + 40 ? -1 : 1;
  } else if (a2.length > b.length) {
    return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
  }
  return 0;
}
function comparePathParserScore(a2, b) {
  let i2 = 0;
  const aScore = a2.score;
  const bScore = b.score;
  while (i2 < aScore.length && i2 < bScore.length) {
    const comp = compareScoreArray(aScore[i2], bScore[i2]);
    if (comp)
      return comp;
    i2++;
  }
  return bScore.length - aScore.length;
}
const ROOT_TOKEN = {
  type: 0,
  value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
  if (!path)
    return [[]];
  if (path === "/")
    return [[ROOT_TOKEN]];
  if (!path.startsWith("/")) {
    throw new Error(`Invalid path "${path}"`);
  }
  function crash(message) {
    throw new Error(`ERR (${state})/"${buffer}": ${message}`);
  }
  let state = 0;
  let previousState = state;
  const tokens = [];
  let segment;
  function finalizeSegment() {
    if (segment)
      tokens.push(segment);
    segment = [];
  }
  let i2 = 0;
  let char;
  let buffer = "";
  let customRe = "";
  function consumeBuffer() {
    if (!buffer)
      return;
    if (state === 0) {
      segment.push({
        type: 0,
        value: buffer
      });
    } else if (state === 1 || state === 2 || state === 3) {
      if (segment.length > 1 && (char === "*" || char === "+"))
        crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
      segment.push({
        type: 1,
        value: buffer,
        regexp: customRe,
        repeatable: char === "*" || char === "+",
        optional: char === "*" || char === "?"
      });
    } else {
      crash("Invalid state to consume buffer");
    }
    buffer = "";
  }
  function addCharToBuffer() {
    buffer += char;
  }
  while (i2 < path.length) {
    char = path[i2++];
    if (char === "\\" && state !== 2) {
      previousState = state;
      state = 4;
      continue;
    }
    switch (state) {
      case 0:
        if (char === "/") {
          if (buffer) {
            consumeBuffer();
          }
          finalizeSegment();
        } else if (char === ":") {
          consumeBuffer();
          state = 1;
        } else {
          addCharToBuffer();
        }
        break;
      case 4:
        addCharToBuffer();
        state = previousState;
        break;
      case 1:
        if (char === "(") {
          state = 2;
        } else if (VALID_PARAM_RE.test(char)) {
          addCharToBuffer();
        } else {
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i2--;
        }
        break;
      case 2:
        if (char === ")") {
          if (customRe[customRe.length - 1] == "\\")
            customRe = customRe.slice(0, -1) + char;
          else
            state = 3;
        } else {
          customRe += char;
        }
        break;
      case 3:
        consumeBuffer();
        state = 0;
        if (char !== "*" && char !== "?" && char !== "+")
          i2--;
        customRe = "";
        break;
      default:
        crash("Unknown state");
        break;
    }
  }
  if (state === 2)
    crash(`Unfinished custom RegExp for param "${buffer}"`);
  consumeBuffer();
  finalizeSegment();
  return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
  const parser = tokensToParser(tokenizePath(record.path), options);
  const matcher = assign$3(parser, {
    record,
    parent,
    children: [],
    alias: []
  });
  if (parent) {
    if (!matcher.record.aliasOf === !parent.record.aliasOf)
      parent.children.push(matcher);
  }
  return matcher;
}
function createRouterMatcher(routes, globalOptions) {
  const matchers = [];
  const matcherMap = new Map();
  globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
  function getRecordMatcher(name) {
    return matcherMap.get(name);
  }
  function addRoute(record, parent, originalRecord) {
    let isRootAdd = !originalRecord;
    let mainNormalizedRecord = normalizeRouteRecord(record);
    mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
    const options = mergeOptions(globalOptions, record);
    const normalizedRecords = [
      mainNormalizedRecord
    ];
    if ("alias" in record) {
      const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
      for (const alias of aliases) {
        normalizedRecords.push(assign$3({}, mainNormalizedRecord, {
          components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
          path: alias,
          aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
        }));
      }
    }
    let matcher;
    let originalMatcher;
    for (const normalizedRecord of normalizedRecords) {
      let { path } = normalizedRecord;
      if (parent && path[0] !== "/") {
        let parentPath = parent.record.path;
        let connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
        normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
      }
      matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
      if (originalRecord) {
        originalRecord.alias.push(matcher);
      } else {
        originalMatcher = originalMatcher || matcher;
        if (originalMatcher !== matcher)
          originalMatcher.alias.push(matcher);
        if (isRootAdd && record.name && !isAliasRecord(matcher))
          removeRoute(record.name);
      }
      if ("children" in mainNormalizedRecord) {
        let children = mainNormalizedRecord.children;
        for (let i2 = 0; i2 < children.length; i2++) {
          addRoute(children[i2], matcher, originalRecord && originalRecord.children[i2]);
        }
      }
      originalRecord = originalRecord || matcher;
      insertMatcher(matcher);
    }
    return originalMatcher ? () => {
      removeRoute(originalMatcher);
    } : noop$3;
  }
  function removeRoute(matcherRef) {
    if (isRouteName(matcherRef)) {
      const matcher = matcherMap.get(matcherRef);
      if (matcher) {
        matcherMap.delete(matcherRef);
        matchers.splice(matchers.indexOf(matcher), 1);
        matcher.children.forEach(removeRoute);
        matcher.alias.forEach(removeRoute);
      }
    } else {
      let index = matchers.indexOf(matcherRef);
      if (index > -1) {
        matchers.splice(index, 1);
        if (matcherRef.record.name)
          matcherMap.delete(matcherRef.record.name);
        matcherRef.children.forEach(removeRoute);
        matcherRef.alias.forEach(removeRoute);
      }
    }
  }
  function getRoutes() {
    return matchers;
  }
  function insertMatcher(matcher) {
    let i2 = 0;
    while (i2 < matchers.length && comparePathParserScore(matcher, matchers[i2]) >= 0)
      i2++;
    matchers.splice(i2, 0, matcher);
    if (matcher.record.name && !isAliasRecord(matcher))
      matcherMap.set(matcher.record.name, matcher);
  }
  function resolve2(location2, currentLocation) {
    let matcher;
    let params = {};
    let path;
    let name;
    if ("name" in location2 && location2.name) {
      matcher = matcherMap.get(location2.name);
      if (!matcher)
        throw createRouterError(1, {
          location: location2
        });
      name = matcher.record.name;
      params = assign$3(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
      path = matcher.stringify(params);
    } else if ("path" in location2) {
      path = location2.path;
      matcher = matchers.find((m) => m.re.test(path));
      if (matcher) {
        params = matcher.parse(path);
        name = matcher.record.name;
      }
    } else {
      matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
      if (!matcher)
        throw createRouterError(1, {
          location: location2,
          currentLocation
        });
      name = matcher.record.name;
      params = assign$3({}, currentLocation.params, location2.params);
      path = matcher.stringify(params);
    }
    const matched = [];
    let parentMatcher = matcher;
    while (parentMatcher) {
      matched.unshift(parentMatcher.record);
      parentMatcher = parentMatcher.parent;
    }
    return {
      name,
      path,
      params,
      matched,
      meta: mergeMetaFields(matched)
    };
  }
  routes.forEach((route) => addRoute(route));
  return { addRoute, resolve: resolve2, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
  let newParams = {};
  for (let key of keys) {
    if (key in params)
      newParams[key] = params[key];
  }
  return newParams;
}
function normalizeRouteRecord(record) {
  return {
    path: record.path,
    redirect: record.redirect,
    name: record.name,
    meta: record.meta || {},
    aliasOf: void 0,
    beforeEnter: record.beforeEnter,
    props: normalizeRecordProps(record),
    children: record.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in record ? record.components || {} : { default: record.component }
  };
}
function normalizeRecordProps(record) {
  const propsObject = {};
  const props = record.props || false;
  if ("component" in record) {
    propsObject.default = props;
  } else {
    for (let name in record.components)
      propsObject[name] = typeof props === "boolean" ? props : props[name];
  }
  return propsObject;
}
function isAliasRecord(record) {
  while (record) {
    if (record.record.aliasOf)
      return true;
    record = record.parent;
  }
  return false;
}
function mergeMetaFields(matched) {
  return matched.reduce((meta, record) => assign$3(meta, record.meta), {});
}
function mergeOptions(defaults2, partialOptions) {
  let options = {};
  for (let key in defaults2) {
    options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
  }
  return options;
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_CARET_RE = /%5E/g;
const ENC_BACKTICK_RE = /%60/g;
const ENC_CURLY_OPEN_RE = /%7B/g;
const ENC_PIPE_RE = /%7C/g;
const ENC_CURLY_CLOSE_RE = /%7D/g;
const ENC_SPACE_RE = /%20/g;
function commonEncode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text) {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
  }
  return "" + text;
}
function parseQuery(search) {
  const query = {};
  if (search === "" || search === "?")
    return query;
  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i2 = 0; i2 < searchParams.length; ++i2) {
    const searchParam = searchParams[i2].replace(PLUS_RE, " ");
    let eqPos = searchParam.indexOf("=");
    let key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    let value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
    if (key in query) {
      let currentValue = query[key];
      if (!Array.isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      currentValue.push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
function stringifyQuery(query) {
  let search = "";
  for (let key in query) {
    const value = query[key];
    key = encodeQueryKey(key);
    if (value == null) {
      if (value !== void 0) {
        search += (search.length ? "&" : "") + key;
      }
      continue;
    }
    let values = Array.isArray(value) ? value.map((v2) => v2 && encodeQueryValue(v2)) : [value && encodeQueryValue(value)];
    values.forEach((value2) => {
      if (value2 !== void 0) {
        search += (search.length ? "&" : "") + key;
        if (value2 != null)
          search += "=" + value2;
      }
    });
  }
  return search;
}
function normalizeQuery(query) {
  const normalizedQuery = {};
  for (let key in query) {
    let value = query[key];
    if (value !== void 0) {
      normalizedQuery[key] = Array.isArray(value) ? value.map((v2) => v2 == null ? null : "" + v2) : value == null ? value : "" + value;
    }
  }
  return normalizedQuery;
}
function useCallbacks() {
  let handlers = [];
  function add2(handler) {
    handlers.push(handler);
    return () => {
      const i2 = handlers.indexOf(handler);
      if (i2 > -1)
        handlers.splice(i2, 1);
    };
  }
  function reset2() {
    handlers = [];
  }
  return {
    add: add2,
    list: () => handlers,
    reset: reset2
  };
}
function guardToPromiseFn(guard, to, from, record, name) {
  const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
  return () => new Promise((resolve2, reject) => {
    const next = (valid) => {
      if (valid === false)
        reject(createRouterError(4, {
          from,
          to
        }));
      else if (valid instanceof Error) {
        reject(valid);
      } else if (isRouteLocation(valid)) {
        reject(createRouterError(2, {
          from: to,
          to: valid
        }));
      } else {
        if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
          enterCallbackArray.push(valid);
        resolve2();
      }
    };
    const guardReturn = guard.call(record && record.instances[name], to, from, next);
    let guardCall = Promise.resolve(guardReturn);
    if (guard.length < 3)
      guardCall = guardCall.then(next);
    guardCall.catch((err) => reject(err));
  });
}
function extractComponentsGuards(matched, guardType, to, from) {
  const guards = [];
  for (const record of matched) {
    for (const name in record.components) {
      let rawComponent = record.components[name];
      if (guardType !== "beforeRouteEnter" && !record.instances[name])
        continue;
      if (isRouteComponent(rawComponent)) {
        let options = rawComponent.__vccOpts || rawComponent;
        const guard = options[guardType];
        guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
      } else {
        let componentPromise = rawComponent();
        guards.push(() => componentPromise.then((resolved) => {
          if (!resolved)
            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
          const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
          record.components[name] = resolvedComponent;
          let options = resolvedComponent.__vccOpts || resolvedComponent;
          const guard = options[guardType];
          return guard && guardToPromiseFn(guard, to, from, record, name)();
        }));
      }
    }
  }
  return guards;
}
function isRouteComponent(component) {
  return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
function useLink(props) {
  const router = inject(routerKey);
  const currentRoute = inject(routeLocationKey);
  const route = computed(() => router.resolve(unref(props.to)));
  const activeRecordIndex = computed(() => {
    let { matched } = route.value;
    let { length } = matched;
    const routeMatched = matched[length - 1];
    let currentMatched = currentRoute.matched;
    if (!routeMatched || !currentMatched.length)
      return -1;
    let index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
    if (index > -1)
      return index;
    let parentRecordPath = getOriginalPath(matched[length - 2]);
    return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index;
  });
  const isActive = computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
  const isExactActive = computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
  function navigate(e2 = {}) {
    if (guardEvent(e2)) {
      return router[unref(props.replace) ? "replace" : "push"](unref(props.to)).catch(noop$3);
    }
    return Promise.resolve();
  }
  return {
    route,
    href: computed(() => route.value.href),
    isActive,
    isExactActive,
    navigate
  };
}
const RouterLinkImpl = /* @__PURE__ */ defineComponent({
  name: "RouterLink",
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink,
  setup(props, { slots }) {
    const link = reactive(useLink(props));
    const { options } = inject(routerKey);
    const elClass = computed(() => ({
      [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
      [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
    }));
    return () => {
      const children = slots.default && slots.default(link);
      return props.custom ? children : h("a", {
        "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        onClick: link.navigate,
        class: elClass.value
      }, children);
    };
  }
});
const RouterLink = RouterLinkImpl;
function guardEvent(e2) {
  if (e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey)
    return;
  if (e2.defaultPrevented)
    return;
  if (e2.button !== void 0 && e2.button !== 0)
    return;
  if (e2.currentTarget && e2.currentTarget.getAttribute) {
    const target = e2.currentTarget.getAttribute("target");
    if (/\b_blank\b/i.test(target))
      return;
  }
  if (e2.preventDefault)
    e2.preventDefault();
  return true;
}
function includesParams(outer, inner) {
  for (let key in inner) {
    let innerValue = inner[key];
    let outerValue = outer[key];
    if (typeof innerValue === "string") {
      if (innerValue !== outerValue)
        return false;
    } else {
      if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i2) => value !== outerValue[i2]))
        return false;
    }
  }
  return true;
}
function getOriginalPath(record) {
  return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /* @__PURE__ */ defineComponent({
  name: "RouterView",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  setup(props, { attrs, slots }) {
    const injectedRoute = inject(routerViewLocationKey);
    const routeToDisplay = computed(() => props.route || injectedRoute.value);
    const depth = inject(viewDepthKey, 0);
    const matchedRouteRef = computed(() => routeToDisplay.value.matched[depth]);
    provide(viewDepthKey, depth + 1);
    provide(matchedRouteKey, matchedRouteRef);
    provide(routerViewLocationKey, routeToDisplay);
    const viewRef = ref();
    watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
      if (to) {
        to.instances[name] = instance;
        if (from && from !== to && instance && instance === oldInstance) {
          if (!to.leaveGuards.size) {
            to.leaveGuards = from.leaveGuards;
          }
          if (!to.updateGuards.size) {
            to.updateGuards = from.updateGuards;
          }
        }
      }
      if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
        (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
      }
    }, { flush: "post" });
    return () => {
      const route = routeToDisplay.value;
      const matchedRoute = matchedRouteRef.value;
      const ViewComponent = matchedRoute && matchedRoute.components[props.name];
      const currentName = props.name;
      if (!ViewComponent) {
        return normalizeSlot(slots.default, { Component: ViewComponent, route });
      }
      const routePropsOption = matchedRoute.props[props.name];
      const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
      const onVnodeUnmounted = (vnode) => {
        if (vnode.component.isUnmounted) {
          matchedRoute.instances[currentName] = null;
        }
      };
      const component = h(ViewComponent, assign$3({}, routeProps, attrs, {
        onVnodeUnmounted,
        ref: viewRef
      }));
      return normalizeSlot(slots.default, { Component: component, route }) || component;
    };
  }
});
function normalizeSlot(slot, data2) {
  if (!slot)
    return null;
  const slotContent = slot(data2);
  return slotContent.length === 1 ? slotContent[0] : slotContent;
}
const RouterView = RouterViewImpl;
function createRouter(options) {
  const matcher = createRouterMatcher(options.routes, options);
  let parseQuery$1 = options.parseQuery || parseQuery;
  let stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
  let routerHistory = options.history;
  const beforeGuards = useCallbacks();
  const beforeResolveGuards = useCallbacks();
  const afterGuards = useCallbacks();
  const currentRoute = shallowRef(START_LOCATION_NORMALIZED);
  let pendingLocation = START_LOCATION_NORMALIZED;
  if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
  const encodeParams = applyToParams.bind(null, encodeParam);
  const decodeParams = applyToParams.bind(null, decode);
  function addRoute(parentOrRoute, route) {
    let parent;
    let record;
    if (isRouteName(parentOrRoute)) {
      parent = matcher.getRecordMatcher(parentOrRoute);
      record = route;
    } else {
      record = parentOrRoute;
    }
    return matcher.addRoute(record, parent);
  }
  function removeRoute(name) {
    let recordMatcher = matcher.getRecordMatcher(name);
    if (recordMatcher) {
      matcher.removeRoute(recordMatcher);
    }
  }
  function getRoutes() {
    return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
  }
  function hasRoute(name) {
    return !!matcher.getRecordMatcher(name);
  }
  function resolve2(rawLocation, currentLocation) {
    currentLocation = assign$3({}, currentLocation || currentRoute.value);
    if (typeof rawLocation === "string") {
      let locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
      let matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
      let href2 = routerHistory.createHref(locationNormalized.fullPath);
      return assign$3(locationNormalized, matchedRoute2, {
        params: decodeParams(matchedRoute2.params),
        hash: decode(locationNormalized.hash),
        redirectedFrom: void 0,
        href: href2
      });
    }
    let matcherLocation;
    if ("path" in rawLocation) {
      matcherLocation = assign$3({}, rawLocation, {
        path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
      });
    } else {
      matcherLocation = assign$3({}, rawLocation, {
        params: encodeParams(rawLocation.params)
      });
      currentLocation.params = encodeParams(currentLocation.params);
    }
    let matchedRoute = matcher.resolve(matcherLocation, currentLocation);
    const hash = rawLocation.hash || "";
    matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
    const fullPath = stringifyURL(stringifyQuery$1, assign$3({}, rawLocation, {
      hash: encodeHash(hash),
      path: matchedRoute.path
    }));
    let href = routerHistory.createHref(fullPath);
    return assign$3({
      fullPath,
      hash,
      query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query
    }, matchedRoute, {
      redirectedFrom: void 0,
      href
    });
  }
  function locationAsObject(to) {
    return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign$3({}, to);
  }
  function checkCanceledNavigation(to, from) {
    if (pendingLocation !== to) {
      return createRouterError(8, {
        from,
        to
      });
    }
  }
  function push(to) {
    return pushWithRedirect(to);
  }
  function replace(to) {
    return push(assign$3(locationAsObject(to), { replace: true }));
  }
  function handleRedirectRecord(to) {
    const lastMatched = to.matched[to.matched.length - 1];
    if (lastMatched && lastMatched.redirect) {
      const { redirect } = lastMatched;
      let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
      if (typeof newTargetLocation === "string") {
        newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
        newTargetLocation.params = {};
      }
      return assign$3({
        query: to.query,
        hash: to.hash,
        params: to.params
      }, newTargetLocation);
    }
  }
  function pushWithRedirect(to, redirectedFrom) {
    const targetLocation = pendingLocation = resolve2(to);
    const from = currentRoute.value;
    const data2 = to.state;
    const force = to.force;
    const replace2 = to.replace === true;
    const shouldRedirect = handleRedirectRecord(targetLocation);
    if (shouldRedirect)
      return pushWithRedirect(assign$3(locationAsObject(shouldRedirect), {
        state: data2,
        force,
        replace: replace2
      }), redirectedFrom || targetLocation);
    const toLocation = targetLocation;
    toLocation.redirectedFrom = redirectedFrom;
    let failure;
    if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
      failure = createRouterError(16, { to: toLocation, from });
      handleScroll(from, from, true, false);
    }
    return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? error : triggerError(error, toLocation, from)).then((failure2) => {
      if (failure2) {
        if (isNavigationFailure(failure2, 2)) {
          return pushWithRedirect(assign$3(locationAsObject(failure2.to), {
            state: data2,
            force,
            replace: replace2
          }), redirectedFrom || toLocation);
        }
      } else {
        failure2 = finalizeNavigation(toLocation, from, true, replace2, data2);
      }
      triggerAfterEach(toLocation, from, failure2);
      return failure2;
    });
  }
  function checkCanceledNavigationAndReject(to, from) {
    const error = checkCanceledNavigation(to, from);
    return error ? Promise.reject(error) : Promise.resolve();
  }
  function navigate(to, from) {
    let guards;
    const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
    guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
    for (const record of leavingRecords) {
      record.leaveGuards.forEach((guard) => {
        guards.push(guardToPromiseFn(guard, to, from));
      });
    }
    const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
    guards.push(canceledNavigationCheck);
    return runGuardQueue(guards).then(() => {
      guards = [];
      for (const guard of beforeGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
      for (const record of updatingRecords) {
        record.updateGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const record of to.matched) {
        if (record.beforeEnter && !from.matched.includes(record)) {
          if (Array.isArray(record.beforeEnter)) {
            for (const beforeEnter of record.beforeEnter)
              guards.push(guardToPromiseFn(beforeEnter, to, from));
          } else {
            guards.push(guardToPromiseFn(record.beforeEnter, to, from));
          }
        }
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      to.matched.forEach((record) => record.enterCallbacks = {});
      guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).then(() => {
      guards = [];
      for (const guard of beforeResolveGuards.list()) {
        guards.push(guardToPromiseFn(guard, to, from));
      }
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards);
    }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
  }
  function triggerAfterEach(to, from, failure) {
    for (const guard of afterGuards.list())
      guard(to, from, failure);
  }
  function finalizeNavigation(toLocation, from, isPush, replace2, data2) {
    const error = checkCanceledNavigation(toLocation, from);
    if (error)
      return error;
    const isFirstNavigation = from === START_LOCATION_NORMALIZED;
    const state = !isBrowser ? {} : history.state;
    if (isPush) {
      if (replace2 || isFirstNavigation)
        routerHistory.replace(toLocation.fullPath, assign$3({
          scroll: isFirstNavigation && state && state.scroll
        }, data2));
      else
        routerHistory.push(toLocation.fullPath, data2);
    }
    currentRoute.value = toLocation;
    handleScroll(toLocation, from, isPush, isFirstNavigation);
    markAsReady();
  }
  let removeHistoryListener;
  function setupListeners() {
    removeHistoryListener = routerHistory.listen((to, _from, info) => {
      let toLocation = resolve2(to);
      const shouldRedirect = handleRedirectRecord(toLocation);
      if (shouldRedirect) {
        pushWithRedirect(assign$3(shouldRedirect, { replace: true }), toLocation).catch(noop$3);
        return;
      }
      pendingLocation = toLocation;
      const from = currentRoute.value;
      if (isBrowser) {
        saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
      }
      navigate(toLocation, from).catch((error) => {
        if (isNavigationFailure(error, 4 | 8)) {
          return error;
        }
        if (isNavigationFailure(error, 2)) {
          pushWithRedirect(error.to, toLocation).then((failure) => {
            if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
              routerHistory.go(-1, false);
            }
          }).catch(noop$3);
          return Promise.reject();
        }
        if (info.delta)
          routerHistory.go(-info.delta, false);
        return triggerError(error, toLocation, from);
      }).then((failure) => {
        failure = failure || finalizeNavigation(toLocation, from, false);
        if (failure) {
          if (info.delta) {
            routerHistory.go(-info.delta, false);
          } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
            routerHistory.go(-1, false);
          }
        }
        triggerAfterEach(toLocation, from, failure);
      }).catch(noop$3);
    });
  }
  let readyHandlers = useCallbacks();
  let errorHandlers = useCallbacks();
  let ready2;
  function triggerError(error, to, from) {
    markAsReady(error);
    const list = errorHandlers.list();
    if (list.length) {
      list.forEach((handler) => handler(error, to, from));
    } else {
      console.error(error);
    }
    return Promise.reject(error);
  }
  function isReady() {
    if (ready2 && currentRoute.value !== START_LOCATION_NORMALIZED)
      return Promise.resolve();
    return new Promise((resolve3, reject) => {
      readyHandlers.add([resolve3, reject]);
    });
  }
  function markAsReady(err) {
    if (ready2)
      return;
    ready2 = true;
    setupListeners();
    readyHandlers.list().forEach(([resolve3, reject]) => err ? reject(err) : resolve3());
    readyHandlers.reset();
  }
  function handleScroll(to, from, isPush, isFirstNavigation) {
    const { scrollBehavior } = options;
    if (!isBrowser || !scrollBehavior)
      return Promise.resolve();
    let scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
    return nextTick().then(() => scrollBehavior(to, from, scrollPosition)).then((position) => position && scrollToPosition(position)).catch((err) => triggerError(err, to, from));
  }
  const go = (delta) => routerHistory.go(delta);
  let started;
  const installedApps = new Set();
  const router = {
    currentRoute,
    addRoute,
    removeRoute,
    hasRoute,
    getRoutes,
    resolve: resolve2,
    options,
    push,
    replace,
    go,
    back: () => go(-1),
    forward: () => go(1),
    beforeEach: beforeGuards.add,
    beforeResolve: beforeResolveGuards.add,
    afterEach: afterGuards.add,
    onError: errorHandlers.add,
    isReady,
    install(app) {
      const router2 = this;
      app.component("RouterLink", RouterLink);
      app.component("RouterView", RouterView);
      app.config.globalProperties.$router = router2;
      Object.defineProperty(app.config.globalProperties, "$route", {
        enumerable: true,
        get: () => unref(currentRoute)
      });
      if (isBrowser && !started && currentRoute.value === START_LOCATION_NORMALIZED) {
        started = true;
        push(routerHistory.location).catch((err) => {
        });
      }
      const reactiveRoute = {};
      for (let key in START_LOCATION_NORMALIZED) {
        reactiveRoute[key] = computed(() => currentRoute.value[key]);
      }
      app.provide(routerKey, router2);
      app.provide(routeLocationKey, reactive(reactiveRoute));
      app.provide(routerViewLocationKey, currentRoute);
      let unmountApp = app.unmount;
      installedApps.add(app);
      app.unmount = function() {
        installedApps.delete(app);
        if (installedApps.size < 1) {
          removeHistoryListener();
          currentRoute.value = START_LOCATION_NORMALIZED;
          started = false;
          ready2 = false;
        }
        unmountApp();
      };
    }
  };
  return router;
}
function runGuardQueue(guards) {
  return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
  const leavingRecords = [];
  const updatingRecords = [];
  const enteringRecords = [];
  const len = Math.max(from.matched.length, to.matched.length);
  for (let i2 = 0; i2 < len; i2++) {
    const recordFrom = from.matched[i2];
    if (recordFrom) {
      if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
        updatingRecords.push(recordFrom);
      else
        leavingRecords.push(recordFrom);
    }
    const recordTo = to.matched[i2];
    if (recordTo) {
      if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
        enteringRecords.push(recordTo);
      }
    }
  }
  return [leavingRecords, updatingRecords, enteringRecords];
}
function useRouter() {
  return inject(routerKey);
}
function useRoute() {
  return inject(routeLocationKey);
}
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a2, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a2, prop, b[prop]);
    }
  return a2;
};
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var createElement$1 = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var getTagKey = (props) => {
  if (props.key !== void 0) {
    return { name: "key", value: props.key };
  }
  if (props.name !== void 0) {
    return { name: "name", value: props.name };
  }
  if (props.property !== void 0) {
    return {
      name: "property",
      value: props.property
    };
  }
};
var injectHead = () => {
  const head = inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      el.removeAttribute(key);
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var insertTags = (tags, document2 = window.document) => {
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i2 = 0, j = headCountEl.previousElementSibling; i2 < headCount; i2++, j = j.previousElementSibling) {
      if (j) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  const newElements = [];
  let title;
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of tags) {
    if (tag.tag === "title") {
      title = tag.props.children;
      continue;
    }
    if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
      continue;
    }
    if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
      continue;
    }
    if (tag.tag === "meta") {
      const key = getTagKey(tag.props);
      if (key) {
        const elementList = [
          ...head.querySelectorAll(`meta[${key.name}="${key.value}"]`)
        ];
        for (const el of elementList) {
          if (!oldElements.includes(el)) {
            oldElements.push(el);
          }
        }
      }
    }
    newElements.push(createElement$1(tag.tag, tag.props, document2));
  }
  oldElements.forEach((el) => {
    if (el.nextSibling && el.nextSibling.nodeType === Node.TEXT_NODE) {
      el.nextSibling.remove();
    }
    el.remove();
  });
  if (title !== void 0) {
    document2.title = title;
  }
  setAttrs(document2.documentElement, htmlAttrs);
  setAttrs(document2.body, bodyAttrs);
  newElements.forEach((el) => {
    head.insertBefore(el, headCountEl);
  });
  headCountEl.setAttribute("content", "" + newElements.length);
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i2 = 0; i2 < deduped.length; i2++) {
                const prev = deduped[i2];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i2;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2) {
      insertTags(head.headTags, document2);
    }
  };
  return head;
};
var IS_BROWSER = typeof window !== "undefined";
var useHead = (obj) => {
  const headObj = ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    watchEffect(() => {
      head.updateDOM();
    });
    onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var isVue2 = false;
/*!
  * pinia v2.0.0-rc.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$3(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  const toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: new Map(),
    state
  });
  return pinia;
}
function addSubscription(subscriptions, callback, detached) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.forEach((callback) => {
    callback(...args);
  });
}
function innerPatch(target, patchToApply) {
  for (const key in patchToApply) {
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$3(targetValue) && isPlainObject$3(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = innerPatch(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const { assign: assign$2 } = Object;
function isComputed(o2) {
  return o2 && o2.effect;
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign$2(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign$2($state, newState);
    });
  };
  return store;
}
const noop$2 = () => {
};
function createSetupStore($id, setup, options = {}, pinia, hot) {
  let scope;
  const buildState2 = options.state;
  const optionsForPlugin = __spreadValues({
    actions: {}
  }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!buildState2 && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      innerPatch(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    isListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop$2;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      let afterCallback = noop$2;
      let onErrorCallback = noop$2;
      function after(callback) {
        afterCallback = callback;
      }
      function onError(callback) {
        onErrorCallback = callback;
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        if (onErrorCallback(error) !== false) {
          throw error;
        }
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          const newRet2 = afterCallback(value);
          return newRet2 === void 0 ? value : newRet2;
        }).catch((error) => {
          if (onErrorCallback(error) !== false) {
            return Promise.reject(error);
          }
        });
      }
      const newRet = afterCallback(ret);
      return newRet === void 0 ? ret : newRet;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const _removeSubscription = addSubscription(subscriptions, callback, options2.detached);
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state, oldState) => {
        if (isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign$2({}, $subscribeOptions, options2)));
      const removeSubscription = () => {
        stopWatcher();
        _removeSubscription();
      };
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign$2({}, partialStore));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!buildState2) {
        if (initialState) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            innerPatch(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign$2(store, setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign$2($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign$2(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && buildState2) {
    (options.hydrate || innerPatch)(store, initialState);
  }
  isListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance2 = getCurrentInstance();
    pinia = pinia || currentInstance2 && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
const isClient = typeof window !== "undefined";
const isString$5 = (val) => typeof val === "string";
const noop$1 = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source3, exclude) => {
  var target = {};
  for (var prop in source3)
    if (__hasOwnProp$8.call(source3, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source3[prop];
  if (source3 != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source3)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source3, prop))
        target[prop] = source3[prop];
    }
  return target;
};
function watchWithFilter(source3, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(source3, createFilterWrapper(eventFilter, cb), watchOptions);
}
function unrefElement(elRef) {
  var _a;
  const plain = unref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$5(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop$1;
  let cleanup = noop$1;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop$1;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, event = "pointerdown" } = options;
  if (!window2)
    return;
  const listener = (event2) => {
    const el = unrefElement(target);
    if (!el)
      return;
    if (el === event2.target || event2.composedPath().includes(el))
      return;
    handler(event2);
  };
  return useEventListener(window2, event, listener, { passive: true });
}
function useMediaQuery(query, options = {}) {
  const { window: window2 = defaultWindow } = options;
  if (!window2)
    return ref(false);
  const mediaQuery = window2.matchMedia(query);
  const matches2 = ref(mediaQuery.matches);
  const handler = (event) => {
    matches2.value = event.matches;
  };
  if ("addEventListener" in mediaQuery)
    mediaQuery.addEventListener("change", handler);
  else
    mediaQuery.addListener(handler);
  tryOnScopeDispose(() => {
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  });
  return matches2;
}
const StorageSerializers = {
  boolean: {
    read: (v2) => v2 === "true",
    write: (v2) => String(v2)
  },
  object: {
    read: (v2) => JSON.parse(v2),
    write: (v2) => JSON.stringify(v2)
  },
  number: {
    read: (v2) => Number.parseFloat(v2),
    write: (v2) => String(v2)
  },
  any: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  },
  string: {
    read: (v2) => v2,
    write: (v2) => String(v2)
  }
};
function useStorage(key, initialValue, storage = ((_a) => (_a = defaultWindow) == null ? void 0 : _a.localStorage)(), options = {}) {
  var _a2;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e2) => {
      console.error(e2);
    }
  } = options;
  const rawInit = unref(initialValue);
  const type = rawInit == null ? "any" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
  const data2 = ref(initialValue);
  const serializer = (_a2 = options.serializer) != null ? _a2 : StorageSerializers[type];
  function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        data2.value = rawInit;
        if (rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
      } else {
        data2.value = serializer.read(rawValue);
      }
    } catch (e2) {
      onError(e2);
    }
  }
  read();
  if (window2 && listenToStorageChanges)
    useEventListener(window2, "storage", read);
  if (storage) {
    watchWithFilter(data2, () => {
      try {
        if (data2.value == null)
          storage.removeItem(key);
        else
          storage.setItem(key, serializer.write(data2.value));
      } catch (e2) {
        onError(e2);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data2;
}
function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useWindowScroll({ window: window2 = defaultWindow } = {}) {
  if (!window2) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window2.pageXOffset);
  const y = ref(window2.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window2.pageXOffset;
    y.value = window2.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}
/*!
  * shared v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
const isNumber$4 = (val) => typeof val === "number" && isFinite(val);
const isRegExp$1 = (val) => toTypeString$1(val) === "[object RegExp]";
const isEmptyObject$1 = (val) => isPlainObject$2(val) && Object.keys(val).length === 0;
const assign$1 = Object.assign;
let _globalThis$1;
const getGlobalThis$1 = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const isArray$4 = Array.isArray;
const isFunction$4 = (val) => typeof val === "function";
const isString$4 = (val) => typeof val === "string";
const isBoolean$3 = (val) => typeof val === "boolean";
const isObject$4 = (val) => val !== null && typeof val === "object";
const objectToString$1 = Object.prototype.toString;
const toTypeString$1 = (value) => objectToString$1.call(value);
const isPlainObject$2 = (val) => toTypeString$1(val) === "[object Object]";
/*!
  * shared v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const generateFormatCacheKey = (locale, key, source3) => friendlyJSONstringify({ l: locale, k: key, s: source3 });
const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
const isNumber$3 = (val) => typeof val === "number" && isFinite(val);
const isDate$1 = (val) => toTypeString(val) === "[object Date]";
const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
const isEmptyObject = (val) => isPlainObject$1(val) && Object.keys(val).length === 0;
function warn(msg, err) {
  if (typeof console !== "undefined") {
    console.warn(`[intlify] ` + msg);
    if (err) {
      console.warn(err.stack);
    }
  }
}
const assign = Object.assign;
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function escapeHtml(rawText) {
  return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const isArray$3 = Array.isArray;
const isFunction$3 = (val) => typeof val === "function";
const isString$3 = (val) => typeof val === "string";
const isBoolean$2 = (val) => typeof val === "boolean";
const isObject$3 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const toDisplayString = (val) => {
  return val == null ? "" : isArray$3(val) || isPlainObject$1(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
};
/*!
  * message-compiler v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const CompileErrorCodes = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
};
function createCompileError(code2, loc, options = {}) {
  const { domain, messages, args } = options;
  const msg = code2;
  const error = new SyntaxError(String(msg));
  error.code = code2;
  if (loc) {
    error.location = loc;
  }
  error.domain = domain;
  return error;
}
/*!
  * devtools-if v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const IntlifyDevToolsHooks = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const pathStateMachine = [];
pathStateMachine[0] = {
  ["w"]: [0],
  ["i"]: [3, 0],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[1] = {
  ["w"]: [1],
  ["."]: [2],
  ["["]: [4],
  ["o"]: [7]
};
pathStateMachine[2] = {
  ["w"]: [2],
  ["i"]: [3, 0],
  ["0"]: [3, 0]
};
pathStateMachine[3] = {
  ["i"]: [3, 0],
  ["0"]: [3, 0],
  ["w"]: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  ["o"]: [7, 1]
};
pathStateMachine[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  ["o"]: 8,
  ["l"]: [4, 0]
};
pathStateMachine[5] = {
  ["'"]: [4, 0],
  ["o"]: 8,
  ["l"]: [5, 0]
};
pathStateMachine[6] = {
  ['"']: [4, 0],
  ["o"]: 8,
  ["l"]: [6, 0]
};
const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral(exp) {
  return literalValueRE.test(exp);
}
function stripQuotes(str) {
  const a2 = str.charCodeAt(0);
  const b = str.charCodeAt(str.length - 1);
  return a2 === b && (a2 === 34 || a2 === 39) ? str.slice(1, -1) : str;
}
function getPathCharType(ch) {
  if (ch === void 0 || ch === null) {
    return "o";
  }
  const code2 = ch.charCodeAt(0);
  switch (code2) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return ch;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function formatSubPath(path) {
  const trimmed = path.trim();
  if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
}
function parse(path) {
  const keys = [];
  let index = -1;
  let mode = 0;
  let subPathDepth = 0;
  let c2;
  let key;
  let newChar;
  let type;
  let transition;
  let action;
  let typeMap;
  const actions = [];
  actions[0] = () => {
    if (key === void 0) {
      key = newChar;
    } else {
      key += newChar;
    }
  };
  actions[1] = () => {
    if (key !== void 0) {
      keys.push(key);
      key = void 0;
    }
  };
  actions[2] = () => {
    actions[0]();
    subPathDepth++;
  };
  actions[3] = () => {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = 4;
      actions[0]();
    } else {
      subPathDepth = 0;
      if (key === void 0) {
        return false;
      }
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[1]();
      }
    }
  };
  function maybeUnescapeQuote() {
    const nextChar = path[index + 1];
    if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
      index++;
      newChar = "\\" + nextChar;
      actions[0]();
      return true;
    }
  }
  while (mode !== null) {
    index++;
    c2 = path[index];
    if (c2 === "\\" && maybeUnescapeQuote()) {
      continue;
    }
    type = getPathCharType(c2);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap["l"] || 8;
    if (transition === 8) {
      return;
    }
    mode = transition[0];
    if (transition[1] !== void 0) {
      action = actions[transition[1]];
      if (action) {
        newChar = c2;
        if (action() === false) {
          return;
        }
      }
    }
    if (mode === 7) {
      return keys;
    }
  }
}
const cache = new Map();
function resolveWithKeyValue(obj, path) {
  return isObject$3(obj) ? obj[path] : null;
}
function resolveValue(obj, path) {
  if (!isObject$3(obj)) {
    return null;
  }
  let hit = cache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      cache.set(path, hit);
    }
  }
  if (!hit) {
    return null;
  }
  const len = hit.length;
  let last = obj;
  let i2 = 0;
  while (i2 < len) {
    const val = last[hit[i2]];
    if (val === void 0) {
      return null;
    }
    last = val;
    i2++;
  }
  return last;
}
const DEFAULT_MODIFIER = (str) => str;
const DEFAULT_MESSAGE = (ctx) => "";
const DEFAULT_MESSAGE_DATA_TYPE = "text";
const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
const DEFAULT_INTERPOLATE = toDisplayString;
function pluralDefault(choice, choicesLength) {
  choice = Math.abs(choice);
  if (choicesLength === 2) {
    return choice ? choice > 1 ? 1 : 0 : 1;
  }
  return choice ? Math.min(choice, 2) : 0;
}
function getPluralIndex(options) {
  const index = isNumber$3(options.pluralIndex) ? options.pluralIndex : -1;
  return options.named && (isNumber$3(options.named.count) || isNumber$3(options.named.n)) ? isNumber$3(options.named.count) ? options.named.count : isNumber$3(options.named.n) ? options.named.n : index : index;
}
function normalizeNamed(pluralIndex, props) {
  if (!props.count) {
    props.count = pluralIndex;
  }
  if (!props.n) {
    props.n = pluralIndex;
  }
}
function createMessageContext(options = {}) {
  const locale = options.locale;
  const pluralIndex = getPluralIndex(options);
  const pluralRule = isObject$3(options.pluralRules) && isString$3(locale) && isFunction$3(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
  const orgPluralRule = isObject$3(options.pluralRules) && isString$3(locale) && isFunction$3(options.pluralRules[locale]) ? pluralDefault : void 0;
  const plural = (messages) => messages[pluralRule(pluralIndex, messages.length, orgPluralRule)];
  const _list = options.list || [];
  const list = (index) => _list[index];
  const _named = options.named || {};
  isNumber$3(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
  const named = (key) => _named[key];
  function message(key) {
    const msg = isFunction$3(options.messages) ? options.messages(key) : isObject$3(options.messages) ? options.messages[key] : false;
    return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
  }
  const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
  const normalize = isPlainObject$1(options.processor) && isFunction$3(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
  const interpolate = isPlainObject$1(options.processor) && isFunction$3(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
  const type = isPlainObject$1(options.processor) && isString$3(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
  const ctx = {
    ["list"]: list,
    ["named"]: named,
    ["plural"]: plural,
    ["linked"]: (key, modifier) => {
      const msg = message(key)(ctx);
      return isString$3(modifier) ? _modifier(modifier)(msg) : msg;
    },
    ["message"]: message,
    ["type"]: type,
    ["interpolate"]: interpolate,
    ["normalize"]: normalize
  };
  return ctx;
}
let devtools = null;
function setDevToolsHook(hook) {
  devtools = hook;
}
function initI18nDevTools(i18n2, version2, meta) {
  devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
    timestamp: Date.now(),
    i18n: i18n2,
    version: version2,
    meta
  });
}
const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
function createDevToolsHook(hook) {
  return (payloads) => devtools && devtools.emit(hook, payloads);
}
const CoreWarnCodes = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
};
function fallbackWithSimple(ctx, fallback, start) {
  return [...new Set([
    start,
    ...isArray$3(fallback) ? fallback : isObject$3(fallback) ? Object.keys(fallback) : isString$3(fallback) ? [fallback] : [start]
  ])];
}
function fallbackWithLocaleChain(ctx, fallback, start) {
  const startLocale = isString$3(start) ? start : DEFAULT_LOCALE;
  const context = ctx;
  if (!context.__localeChainCache) {
    context.__localeChainCache = new Map();
  }
  let chain = context.__localeChainCache.get(startLocale);
  if (!chain) {
    chain = [];
    let block = [start];
    while (isArray$3(block)) {
      block = appendBlockToChain(chain, block, fallback);
    }
    const defaults2 = isArray$3(fallback) || !isPlainObject$1(fallback) ? fallback : fallback["default"] ? fallback["default"] : null;
    block = isString$3(defaults2) ? [defaults2] : defaults2;
    if (isArray$3(block)) {
      appendBlockToChain(chain, block, false);
    }
    context.__localeChainCache.set(startLocale, chain);
  }
  return chain;
}
function appendBlockToChain(chain, block, blocks) {
  let follow = true;
  for (let i2 = 0; i2 < block.length && isBoolean$2(follow); i2++) {
    const locale = block[i2];
    if (isString$3(locale)) {
      follow = appendLocaleToChain(chain, block[i2], blocks);
    }
  }
  return follow;
}
function appendLocaleToChain(chain, locale, blocks) {
  let follow;
  const tokens = locale.split("-");
  do {
    const target = tokens.join("-");
    follow = appendItemToChain(chain, target, blocks);
    tokens.splice(-1, 1);
  } while (tokens.length && follow === true);
  return follow;
}
function appendItemToChain(chain, target, blocks) {
  let follow = false;
  if (!chain.includes(target)) {
    follow = true;
    if (target) {
      follow = target[target.length - 1] !== "!";
      const locale = target.replace(/!/g, "");
      chain.push(locale);
      if ((isArray$3(blocks) || isPlainObject$1(blocks)) && blocks[locale]) {
        follow = blocks[locale];
      }
    }
  }
  return follow;
}
const VERSION$2 = "9.2.0-beta.11";
const NOT_REOSLVED = -1;
const DEFAULT_LOCALE = "en-US";
const MISSING_RESOLVE_VALUE = "";
function getDefaultLinkedModifiers() {
  return {
    upper: (val) => isString$3(val) ? val.toUpperCase() : val,
    lower: (val) => isString$3(val) ? val.toLowerCase() : val,
    capitalize: (val) => isString$3(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
  };
}
let _compiler;
let _resolver;
function registerMessageResolver(resolver) {
  _resolver = resolver;
}
let _fallbacker;
function registerLocaleFallbacker(fallbacker) {
  _fallbacker = fallbacker;
}
let _additionalMeta = null;
const setAdditionalMeta = (meta) => {
  _additionalMeta = meta;
};
const getAdditionalMeta = () => _additionalMeta;
let _cid = 0;
function createCoreContext(options = {}) {
  const version2 = isString$3(options.version) ? options.version : VERSION$2;
  const locale = isString$3(options.locale) ? options.locale : DEFAULT_LOCALE;
  const fallbackLocale = isArray$3(options.fallbackLocale) || isPlainObject$1(options.fallbackLocale) || isString$3(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
  const messages = isPlainObject$1(options.messages) ? options.messages : { [locale]: {} };
  const datetimeFormats = isPlainObject$1(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
  const numberFormats = isPlainObject$1(options.numberFormats) ? options.numberFormats : { [locale]: {} };
  const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
  const pluralRules = options.pluralRules || {};
  const missing = isFunction$3(options.missing) ? options.missing : null;
  const missingWarn = isBoolean$2(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
  const fallbackWarn = isBoolean$2(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
  const fallbackFormat = !!options.fallbackFormat;
  const unresolving = !!options.unresolving;
  const postTranslation = isFunction$3(options.postTranslation) ? options.postTranslation : null;
  const processor = isPlainObject$1(options.processor) ? options.processor : null;
  const warnHtmlMessage = isBoolean$2(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  const escapeParameter = !!options.escapeParameter;
  const messageCompiler = isFunction$3(options.messageCompiler) ? options.messageCompiler : _compiler;
  const messageResolver = isFunction$3(options.messageResolver) ? options.messageResolver : _resolver || resolveWithKeyValue;
  const localeFallbacker = isFunction$3(options.localeFallbacker) ? options.localeFallbacker : _fallbacker || fallbackWithSimple;
  const onWarn = isFunction$3(options.onWarn) ? options.onWarn : warn;
  const internalOptions = options;
  const __datetimeFormatters = isObject$3(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : new Map();
  const __numberFormatters = isObject$3(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : new Map();
  const __meta = isObject$3(internalOptions.__meta) ? internalOptions.__meta : {};
  _cid++;
  const context = {
    version: version2,
    cid: _cid,
    locale,
    fallbackLocale,
    messages,
    modifiers,
    pluralRules,
    missing,
    missingWarn,
    fallbackWarn,
    fallbackFormat,
    unresolving,
    postTranslation,
    processor,
    warnHtmlMessage,
    escapeParameter,
    messageCompiler,
    messageResolver,
    localeFallbacker,
    onWarn,
    __meta
  };
  {
    context.datetimeFormats = datetimeFormats;
    context.numberFormats = numberFormats;
    context.__datetimeFormatters = __datetimeFormatters;
    context.__numberFormatters = __numberFormatters;
  }
  if (__INTLIFY_PROD_DEVTOOLS__) {
    initI18nDevTools(context, version2, __meta);
  }
  return context;
}
function handleMissing(context, key, locale, missingWarn, type) {
  const { missing, onWarn } = context;
  if (missing !== null) {
    const ret = missing(context, locale, key, type);
    return isString$3(ret) ? ret : key;
  } else {
    return key;
  }
}
function updateFallbackLocale(ctx, locale, fallback) {
  const context = ctx;
  context.__localeChainCache = new Map();
  ctx.localeFallbacker(ctx, fallback, locale);
}
let code$1 = CompileErrorCodes.__EXTEND_POINT__;
const inc$1 = () => code$1++;
const CoreErrorCodes = {
  INVALID_ARGUMENT: code$1,
  INVALID_DATE_ARGUMENT: inc$1(),
  INVALID_ISO_DATE_ARGUMENT: inc$1(),
  __EXTEND_POINT__: inc$1()
};
function createCoreError(code2) {
  return createCompileError(code2, null, void 0);
}
const NOOP_MESSAGE_FUNCTION = () => "";
const isMessageFunction = (val) => isFunction$3(val);
function translate(context, ...args) {
  const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages } = context;
  const [key, options] = parseTranslateArgs(...args);
  const missingWarn = isBoolean$2(options.missingWarn) ? options.missingWarn : context.missingWarn;
  const fallbackWarn = isBoolean$2(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const escapeParameter = isBoolean$2(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
  const resolvedMessage = !!options.resolvedMessage;
  const defaultMsgOrKey = isString$3(options.default) || isBoolean$2(options.default) ? !isBoolean$2(options.default) ? options.default : key : fallbackFormat ? key : "";
  const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
  const locale = isString$3(options.locale) ? options.locale : context.locale;
  escapeParameter && escapeParams(options);
  let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
    key,
    locale,
    messages[locale] || {}
  ];
  let cacheBaseKey = key;
  if (!resolvedMessage && !(isString$3(format2) || isMessageFunction(format2))) {
    if (enableDefaultMsg) {
      format2 = defaultMsgOrKey;
      cacheBaseKey = format2;
    }
  }
  if (!resolvedMessage && (!(isString$3(format2) || isMessageFunction(format2)) || !isString$3(targetLocale))) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let occurred = false;
  const errorDetector = () => {
    occurred = true;
  };
  const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
  if (occurred) {
    return format2;
  }
  const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
  const msgContext = createMessageContext(ctxOptions);
  const messaged = evaluateMessage(context, msg, msgContext);
  const ret = postTranslation ? postTranslation(messaged) : messaged;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const payloads = {
      timestamp: Date.now(),
      key: isString$3(key) ? key : isMessageFunction(format2) ? format2.key : "",
      locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
      format: isString$3(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
      message: ret
    };
    payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
    translateDevTools(payloads);
  }
  return ret;
}
function escapeParams(options) {
  if (isArray$3(options.list)) {
    options.list = options.list.map((item) => isString$3(item) ? escapeHtml(item) : item);
  } else if (isObject$3(options.named)) {
    Object.keys(options.named).forEach((key) => {
      if (isString$3(options.named[key])) {
        options.named[key] = escapeHtml(options.named[key]);
      }
    });
  }
}
function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
  const { messages, onWarn, messageResolver: resolveValue2, localeFallbacker } = context;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  let message = {};
  let targetLocale;
  let format2 = null;
  const type = "translate";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    message = messages[targetLocale] || {};
    if ((format2 = resolveValue2(message, key)) === null) {
      format2 = message[key];
    }
    if (isString$3(format2) || isFunction$3(format2))
      break;
    const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
    if (missingRet !== key) {
      format2 = missingRet;
    }
  }
  return [format2, targetLocale, message];
}
function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
  const { messageCompiler, warnHtmlMessage } = context;
  if (isMessageFunction(format2)) {
    const msg2 = format2;
    msg2.locale = msg2.locale || targetLocale;
    msg2.key = msg2.key || key;
    return msg2;
  }
  const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
  msg.locale = targetLocale;
  msg.key = key;
  msg.source = format2;
  return msg;
}
function evaluateMessage(context, msg, msgCtx) {
  const messaged = msg(msgCtx);
  return messaged;
}
function parseTranslateArgs(...args) {
  const [arg1, arg2, arg3] = args;
  const options = {};
  if (!isString$3(arg1) && !isNumber$3(arg1) && !isMessageFunction(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const key = isNumber$3(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
  if (isNumber$3(arg2)) {
    options.plural = arg2;
  } else if (isString$3(arg2)) {
    options.default = arg2;
  } else if (isPlainObject$1(arg2) && !isEmptyObject(arg2)) {
    options.named = arg2;
  } else if (isArray$3(arg2)) {
    options.list = arg2;
  }
  if (isNumber$3(arg3)) {
    options.plural = arg3;
  } else if (isString$3(arg3)) {
    options.default = arg3;
  } else if (isPlainObject$1(arg3)) {
    assign(options, arg3);
  }
  return [key, options];
}
function getCompileOptions(context, locale, key, source3, warnHtmlMessage, errorDetector) {
  return {
    warnHtmlMessage,
    onError: (err) => {
      errorDetector && errorDetector(err);
      {
        throw err;
      }
    },
    onCacheKey: (source4) => generateFormatCacheKey(locale, key, source4)
  };
}
function getMessageContextOptions(context, locale, message, options) {
  const { modifiers, pluralRules, messageResolver: resolveValue2 } = context;
  const resolveMessage = (key) => {
    const val = resolveValue2(message, key);
    if (isString$3(val)) {
      let occurred = false;
      const errorDetector = () => {
        occurred = true;
      };
      const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
      return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
    } else if (isMessageFunction(val)) {
      return val;
    } else {
      return NOOP_MESSAGE_FUNCTION;
    }
  };
  const ctxOptions = {
    locale,
    modifiers,
    pluralRules,
    messages: resolveMessage
  };
  if (context.processor) {
    ctxOptions.processor = context.processor;
  }
  if (options.list) {
    ctxOptions.list = options.list;
  }
  if (options.named) {
    ctxOptions.named = options.named;
  }
  if (isNumber$3(options.plural)) {
    ctxOptions.pluralIndex = options.plural;
  }
  return ctxOptions;
}
function datetime(context, ...args) {
  const { datetimeFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __datetimeFormatters } = context;
  const [key, value, options, overrides] = parseDateTimeArgs(...args);
  const missingWarn = isBoolean$2(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean$2(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$3(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$3(key) || key === "") {
    return new Intl.DateTimeFormat(locale).format(value);
  }
  let datetimeFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "datetime format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    datetimeFormat = datetimeFormats[targetLocale] || {};
    format2 = datetimeFormat[key];
    if (isPlainObject$1(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format2) || !isString$3(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __datetimeFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
    __datetimeFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseDateTimeArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  let value;
  if (isString$3(arg1)) {
    const matches2 = arg1.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!matches2) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
    const dateTime = matches2[3] ? matches2[3].trim().startsWith("T") ? `${matches2[1].trim()}${matches2[3].trim()}` : `${matches2[1].trim()}T${matches2[3].trim()}` : matches2[1].trim();
    value = new Date(dateTime);
    try {
      value.toISOString();
    } catch (e2) {
      throw createCoreError(CoreErrorCodes.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (isDate$1(arg1)) {
    if (isNaN(arg1.getTime())) {
      throw createCoreError(CoreErrorCodes.INVALID_DATE_ARGUMENT);
    }
    value = arg1;
  } else if (isNumber$3(arg1)) {
    value = arg1;
  } else {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  if (isString$3(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$3(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearDateTimeFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__datetimeFormatters.has(id)) {
      continue;
    }
    context.__datetimeFormatters.delete(id);
  }
}
function number(context, ...args) {
  const { numberFormats, unresolving, fallbackLocale, onWarn, localeFallbacker } = context;
  const { __numberFormatters } = context;
  const [key, value, options, overrides] = parseNumberArgs(...args);
  const missingWarn = isBoolean$2(options.missingWarn) ? options.missingWarn : context.missingWarn;
  isBoolean$2(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
  const part = !!options.part;
  const locale = isString$3(options.locale) ? options.locale : context.locale;
  const locales = localeFallbacker(context, fallbackLocale, locale);
  if (!isString$3(key) || key === "") {
    return new Intl.NumberFormat(locale).format(value);
  }
  let numberFormat = {};
  let targetLocale;
  let format2 = null;
  const type = "number format";
  for (let i2 = 0; i2 < locales.length; i2++) {
    targetLocale = locales[i2];
    numberFormat = numberFormats[targetLocale] || {};
    format2 = numberFormat[key];
    if (isPlainObject$1(format2))
      break;
    handleMissing(context, key, targetLocale, missingWarn, type);
  }
  if (!isPlainObject$1(format2) || !isString$3(targetLocale)) {
    return unresolving ? NOT_REOSLVED : key;
  }
  let id = `${targetLocale}__${key}`;
  if (!isEmptyObject(overrides)) {
    id = `${id}__${JSON.stringify(overrides)}`;
  }
  let formatter = __numberFormatters.get(id);
  if (!formatter) {
    formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
    __numberFormatters.set(id, formatter);
  }
  return !part ? formatter.format(value) : formatter.formatToParts(value);
}
function parseNumberArgs(...args) {
  const [arg1, arg2, arg3, arg4] = args;
  let options = {};
  let overrides = {};
  if (!isNumber$3(arg1)) {
    throw createCoreError(CoreErrorCodes.INVALID_ARGUMENT);
  }
  const value = arg1;
  if (isString$3(arg2)) {
    options.key = arg2;
  } else if (isPlainObject$1(arg2)) {
    options = arg2;
  }
  if (isString$3(arg3)) {
    options.locale = arg3;
  } else if (isPlainObject$1(arg3)) {
    overrides = arg3;
  }
  if (isPlainObject$1(arg4)) {
    overrides = arg4;
  }
  return [options.key || "", value, options, overrides];
}
function clearNumberFormat(ctx, locale, format2) {
  const context = ctx;
  for (const key in format2) {
    const id = `${locale}__${key}`;
    if (!context.__numberFormatters.has(id)) {
      continue;
    }
    context.__numberFormatters.delete(id);
  }
}
{
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
/*!
  * vue-i18n v9.2.0-beta.11
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const VERSION$1 = "9.2.0-beta.11";
function initFeatureFlags() {
  if (typeof __INTLIFY_PROD_DEVTOOLS__ !== "boolean") {
    getGlobalThis$1().__INTLIFY_PROD_DEVTOOLS__ = false;
  }
}
CoreWarnCodes.__EXTEND_POINT__;
let code = CompileErrorCodes.__EXTEND_POINT__;
const inc = () => code++;
const I18nErrorCodes = {
  UNEXPECTED_RETURN_TYPE: code,
  INVALID_ARGUMENT: inc(),
  MUST_BE_CALL_SETUP_TOP: inc(),
  NOT_INSLALLED: inc(),
  NOT_AVAILABLE_IN_LEGACY_MODE: inc(),
  REQUIRED_VALUE: inc(),
  INVALID_VALUE: inc(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: inc(),
  NOT_INSLALLED_WITH_PROVIDE: inc(),
  UNEXPECTED_ERROR: inc(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: inc(),
  BRIDGE_SUPPORT_VUE_2_ONLY: inc(),
  __EXTEND_POINT__: inc()
};
function createI18nError(code2, ...args) {
  return createCompileError(code2, null, void 0);
}
const TransrateVNodeSymbol = /* @__PURE__ */ makeSymbol("__transrateVNode");
const DatetimePartsSymbol = /* @__PURE__ */ makeSymbol("__datetimeParts");
const NumberPartsSymbol = /* @__PURE__ */ makeSymbol("__numberParts");
const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
makeSymbol("__intlifyMeta");
const InejctWithOption = /* @__PURE__ */ makeSymbol("__injectWithOption");
function handleFlatJson(obj) {
  if (!isObject$4(obj)) {
    return obj;
  }
  for (const key in obj) {
    if (!hasOwn(obj, key)) {
      continue;
    }
    if (!key.includes(".")) {
      if (isObject$4(obj[key])) {
        handleFlatJson(obj[key]);
      }
    } else {
      const subKeys = key.split(".");
      const lastIndex = subKeys.length - 1;
      let currentObj = obj;
      for (let i2 = 0; i2 < lastIndex; i2++) {
        if (!(subKeys[i2] in currentObj)) {
          currentObj[subKeys[i2]] = {};
        }
        currentObj = currentObj[subKeys[i2]];
      }
      currentObj[subKeys[lastIndex]] = obj[key];
      delete obj[key];
      if (isObject$4(currentObj[subKeys[lastIndex]])) {
        handleFlatJson(currentObj[subKeys[lastIndex]]);
      }
    }
  }
  return obj;
}
function getLocaleMessages(locale, options) {
  const { messages, __i18n, messageResolver, flatJson } = options;
  const ret = isPlainObject$2(messages) ? messages : isArray$4(__i18n) ? {} : { [locale]: {} };
  if (isArray$4(__i18n)) {
    __i18n.forEach((custom) => {
      if ("locale" in custom && "resource" in custom) {
        const { locale: locale2, resource } = custom;
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      } else {
        isString$4(custom) && deepCopy(JSON.parse(custom), ret);
      }
    });
  }
  if (messageResolver == null && flatJson) {
    for (const key in ret) {
      if (hasOwn(ret, key)) {
        handleFlatJson(ret[key]);
      }
    }
  }
  return ret;
}
const isNotObjectOrIsArray = (val) => !isObject$4(val) || isArray$4(val);
function deepCopy(src, des) {
  if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
  for (const key in src) {
    if (hasOwn(src, key)) {
      if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
        des[key] = src[key];
      } else {
        deepCopy(src[key], des[key]);
      }
    }
  }
}
function getComponentOptions(instance) {
  return instance.type;
}
const DEVTOOLS_META = "__INTLIFY_META__";
let composerID = 0;
function defineCoreMissingHandler(missing) {
  return (ctx, locale, key, type) => {
    return missing(locale, key, getCurrentInstance() || void 0, type);
  };
}
const getMetaInfo = () => {
  const instance = getCurrentInstance();
  let meta = null;
  return instance && (meta = getComponentOptions(instance)[DEVTOOLS_META]) ? { [DEVTOOLS_META]: meta } : null;
};
function createComposer(options = {}, VueI18nLegacy) {
  const { __root } = options;
  const _isGlobal = __root === void 0;
  let _inheritLocale = isBoolean$3(options.inheritLocale) ? options.inheritLocale : true;
  const _locale = ref(__root && _inheritLocale ? __root.locale.value : isString$4(options.locale) ? options.locale : DEFAULT_LOCALE);
  const _fallbackLocale = ref(__root && _inheritLocale ? __root.fallbackLocale.value : isString$4(options.fallbackLocale) || isArray$4(options.fallbackLocale) || isPlainObject$2(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value);
  const _messages = ref(getLocaleMessages(_locale.value, options));
  const _datetimeFormats = ref(isPlainObject$2(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
  const _numberFormats = ref(isPlainObject$2(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
  let _missingWarn = __root ? __root.missingWarn : isBoolean$3(options.missingWarn) || isRegExp$1(options.missingWarn) ? options.missingWarn : true;
  let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean$3(options.fallbackWarn) || isRegExp$1(options.fallbackWarn) ? options.fallbackWarn : true;
  let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean$3(options.fallbackRoot) ? options.fallbackRoot : true;
  let _fallbackFormat = !!options.fallbackFormat;
  let _missing = isFunction$4(options.missing) ? options.missing : null;
  let _runtimeMissing = isFunction$4(options.missing) ? defineCoreMissingHandler(options.missing) : null;
  let _postTranslation = isFunction$4(options.postTranslation) ? options.postTranslation : null;
  let _warnHtmlMessage = isBoolean$3(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
  let _escapeParameter = !!options.escapeParameter;
  const _modifiers = __root ? __root.modifiers : isPlainObject$2(options.modifiers) ? options.modifiers : {};
  let _pluralRules = options.pluralRules || __root && __root.pluralRules;
  let _context;
  function getCoreContext() {
    const ctxOptions = {
      version: VERSION$1,
      locale: _locale.value,
      fallbackLocale: _fallbackLocale.value,
      messages: _messages.value,
      modifiers: _modifiers,
      pluralRules: _pluralRules,
      missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
      missingWarn: _missingWarn,
      fallbackWarn: _fallbackWarn,
      fallbackFormat: _fallbackFormat,
      unresolving: true,
      postTranslation: _postTranslation === null ? void 0 : _postTranslation,
      warnHtmlMessage: _warnHtmlMessage,
      escapeParameter: _escapeParameter,
      messageResolver: options.messageResolver,
      __meta: { framework: "vue" }
    };
    {
      ctxOptions.datetimeFormats = _datetimeFormats.value;
      ctxOptions.numberFormats = _numberFormats.value;
      ctxOptions.__datetimeFormatters = isPlainObject$2(_context) ? _context.__datetimeFormatters : void 0;
      ctxOptions.__numberFormatters = isPlainObject$2(_context) ? _context.__numberFormatters : void 0;
    }
    return createCoreContext(ctxOptions);
  }
  _context = getCoreContext();
  updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
  function trackReactivityValues() {
    return [
      _locale.value,
      _fallbackLocale.value,
      _messages.value,
      _datetimeFormats.value,
      _numberFormats.value
    ];
  }
  const locale = computed({
    get: () => _locale.value,
    set: (val) => {
      _locale.value = val;
      _context.locale = _locale.value;
    }
  });
  const fallbackLocale = computed({
    get: () => _fallbackLocale.value,
    set: (val) => {
      _fallbackLocale.value = val;
      _context.fallbackLocale = _fallbackLocale.value;
      updateFallbackLocale(_context, _locale.value, val);
    }
  });
  const messages = computed(() => _messages.value);
  const datetimeFormats = /* @__PURE__ */ computed(() => _datetimeFormats.value);
  const numberFormats = /* @__PURE__ */ computed(() => _numberFormats.value);
  function getPostTranslationHandler() {
    return isFunction$4(_postTranslation) ? _postTranslation : null;
  }
  function setPostTranslationHandler(handler) {
    _postTranslation = handler;
    _context.postTranslation = handler;
  }
  function getMissingHandler() {
    return _missing;
  }
  function setMissingHandler(handler) {
    if (handler !== null) {
      _runtimeMissing = defineCoreMissingHandler(handler);
    }
    _missing = handler;
    _context.missing = _runtimeMissing;
  }
  function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
    trackReactivityValues();
    let ret;
    if (__INTLIFY_PROD_DEVTOOLS__) {
      try {
        setAdditionalMeta(getMetaInfo());
        ret = fn(_context);
      } finally {
        setAdditionalMeta(null);
      }
    } else {
      ret = fn(_context);
    }
    if (isNumber$4(ret) && ret === NOT_REOSLVED) {
      const [key, arg2] = argumentParser();
      return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
    } else if (successCondition(ret)) {
      return ret;
    } else {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_RETURN_TYPE);
    }
  }
  function t2(...args) {
    return wrapWithDeps((context) => Reflect.apply(translate, null, [context, ...args]), () => parseTranslateArgs(...args), "translate", (root2) => Reflect.apply(root2.t, root2, [...args]), (key) => key, (val) => isString$4(val));
  }
  function rt(...args) {
    const [arg1, arg2, arg3] = args;
    if (arg3 && !isObject$4(arg3)) {
      throw createI18nError(I18nErrorCodes.INVALID_ARGUMENT);
    }
    return t2(...[arg1, arg2, assign$1({ resolvedMessage: true }, arg3 || {})]);
  }
  function d(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root2) => Reflect.apply(root2.d, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$4(val));
  }
  function n2(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root2) => Reflect.apply(root2.n, root2, [...args]), () => MISSING_RESOLVE_VALUE, (val) => isString$4(val));
  }
  function normalize(values) {
    return values.map((val) => isString$4(val) ? createVNode(Text$1, null, val, 0) : val);
  }
  const interpolate = (val) => val;
  const processor = {
    normalize,
    interpolate,
    type: "vnode"
  };
  function transrateVNode(...args) {
    return wrapWithDeps((context) => {
      let ret;
      const _context2 = context;
      try {
        _context2.processor = processor;
        ret = Reflect.apply(translate, null, [_context2, ...args]);
      } finally {
        _context2.processor = null;
      }
      return ret;
    }, () => parseTranslateArgs(...args), "translate", (root2) => root2[TransrateVNodeSymbol](...args), (key) => [createVNode(Text$1, null, key, 0)], (val) => isArray$4(val));
  }
  function numberParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(number, null, [context, ...args]), () => parseNumberArgs(...args), "number format", (root2) => root2[NumberPartsSymbol](...args), () => [], (val) => isString$4(val) || isArray$4(val));
  }
  function datetimeParts(...args) {
    return wrapWithDeps((context) => Reflect.apply(datetime, null, [context, ...args]), () => parseDateTimeArgs(...args), "datetime format", (root2) => root2[DatetimePartsSymbol](...args), () => [], (val) => isString$4(val) || isArray$4(val));
  }
  function setPluralRules(rules) {
    _pluralRules = rules;
    _context.pluralRules = _pluralRules;
  }
  function te(key, locale2) {
    const targetLocale = isString$4(locale2) ? locale2 : _locale.value;
    const message = getLocaleMessage(targetLocale);
    return _context.messageResolver(message, key) !== null;
  }
  function resolveMessages(key) {
    let messages2 = null;
    const locales = fallbackWithLocaleChain(_context, _fallbackLocale.value, _locale.value);
    for (let i2 = 0; i2 < locales.length; i2++) {
      const targetLocaleMessages = _messages.value[locales[i2]] || {};
      const messageValue = _context.messageResolver(targetLocaleMessages, key);
      if (messageValue != null) {
        messages2 = messageValue;
        break;
      }
    }
    return messages2;
  }
  function tm(key) {
    const messages2 = resolveMessages(key);
    return messages2 != null ? messages2 : __root ? __root.tm(key) || {} : {};
  }
  function getLocaleMessage(locale2) {
    return _messages.value[locale2] || {};
  }
  function setLocaleMessage(locale2, message) {
    _messages.value[locale2] = message;
    _context.messages = _messages.value;
  }
  function mergeLocaleMessage(locale2, message) {
    _messages.value[locale2] = _messages.value[locale2] || {};
    deepCopy(message, _messages.value[locale2]);
    _context.messages = _messages.value;
  }
  function getDateTimeFormat(locale2) {
    return _datetimeFormats.value[locale2] || {};
  }
  function setDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = format2;
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function mergeDateTimeFormat(locale2, format2) {
    _datetimeFormats.value[locale2] = assign$1(_datetimeFormats.value[locale2] || {}, format2);
    _context.datetimeFormats = _datetimeFormats.value;
    clearDateTimeFormat(_context, locale2, format2);
  }
  function getNumberFormat(locale2) {
    return _numberFormats.value[locale2] || {};
  }
  function setNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = format2;
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  function mergeNumberFormat(locale2, format2) {
    _numberFormats.value[locale2] = assign$1(_numberFormats.value[locale2] || {}, format2);
    _context.numberFormats = _numberFormats.value;
    clearNumberFormat(_context, locale2, format2);
  }
  composerID++;
  if (__root) {
    watch(__root.locale, (val) => {
      if (_inheritLocale) {
        _locale.value = val;
        _context.locale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
    watch(__root.fallbackLocale, (val) => {
      if (_inheritLocale) {
        _fallbackLocale.value = val;
        _context.fallbackLocale = val;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    });
  }
  const composer = {
    id: composerID,
    locale,
    fallbackLocale,
    get inheritLocale() {
      return _inheritLocale;
    },
    set inheritLocale(val) {
      _inheritLocale = val;
      if (val && __root) {
        _locale.value = __root.locale.value;
        _fallbackLocale.value = __root.fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
      }
    },
    get availableLocales() {
      return Object.keys(_messages.value).sort();
    },
    messages,
    get modifiers() {
      return _modifiers;
    },
    get pluralRules() {
      return _pluralRules || {};
    },
    get isGlobal() {
      return _isGlobal;
    },
    get missingWarn() {
      return _missingWarn;
    },
    set missingWarn(val) {
      _missingWarn = val;
      _context.missingWarn = _missingWarn;
    },
    get fallbackWarn() {
      return _fallbackWarn;
    },
    set fallbackWarn(val) {
      _fallbackWarn = val;
      _context.fallbackWarn = _fallbackWarn;
    },
    get fallbackRoot() {
      return _fallbackRoot;
    },
    set fallbackRoot(val) {
      _fallbackRoot = val;
    },
    get fallbackFormat() {
      return _fallbackFormat;
    },
    set fallbackFormat(val) {
      _fallbackFormat = val;
      _context.fallbackFormat = _fallbackFormat;
    },
    get warnHtmlMessage() {
      return _warnHtmlMessage;
    },
    set warnHtmlMessage(val) {
      _warnHtmlMessage = val;
      _context.warnHtmlMessage = val;
    },
    get escapeParameter() {
      return _escapeParameter;
    },
    set escapeParameter(val) {
      _escapeParameter = val;
      _context.escapeParameter = val;
    },
    t: t2,
    getLocaleMessage,
    setLocaleMessage,
    mergeLocaleMessage,
    getPostTranslationHandler,
    setPostTranslationHandler,
    getMissingHandler,
    setMissingHandler,
    [SetPluralRulesSymbol]: setPluralRules
  };
  {
    composer.datetimeFormats = datetimeFormats;
    composer.numberFormats = numberFormats;
    composer.rt = rt;
    composer.te = te;
    composer.tm = tm;
    composer.d = d;
    composer.n = n2;
    composer.getDateTimeFormat = getDateTimeFormat;
    composer.setDateTimeFormat = setDateTimeFormat;
    composer.mergeDateTimeFormat = mergeDateTimeFormat;
    composer.getNumberFormat = getNumberFormat;
    composer.setNumberFormat = setNumberFormat;
    composer.mergeNumberFormat = mergeNumberFormat;
    composer[InejctWithOption] = options.__injectWithOption;
    {
      composer[TransrateVNodeSymbol] = transrateVNode;
      composer[NumberPartsSymbol] = numberParts;
      composer[DatetimePartsSymbol] = datetimeParts;
    }
  }
  return composer;
}
const baseFormatProps = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (val) => val === "parent" || val === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
const Translation = /* @__PURE__ */ defineComponent({
  name: "i18n-t",
  props: assign$1({
    keypath: {
      type: String,
      required: true
    },
    plural: {
      type: [Number, String],
      validator: (val) => isNumber$4(val) || !isNaN(val)
    }
  }, baseFormatProps),
  setup(props, context) {
    const { slots, attrs } = context;
    const i18n2 = props.i18n || useI18n({
      useScope: props.scope,
      __useComponent: true
    });
    const keys = Object.keys(slots).filter((key) => key !== "_");
    return () => {
      const options = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (props.plural !== void 0) {
        options.plural = isString$4(props.plural) ? +props.plural : props.plural;
      }
      const arg = getInterpolateArg(context, keys);
      const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
      const assignedAttrs = assign$1({}, attrs);
      const tag = isString$4(props.tag) || isObject$4(props.tag) ? props.tag : Fragment;
      return h(tag, assignedAttrs, children);
    };
  }
});
function getInterpolateArg({ slots }, keys) {
  if (keys.length === 1 && keys[0] === "default") {
    return slots.default ? slots.default() : [];
  } else {
    return keys.reduce((arg, key) => {
      const slot = slots[key];
      if (slot) {
        arg[key] = slot();
      }
      return arg;
    }, {});
  }
}
function renderFormatter(props, context, slotKeys, partFormatter) {
  const { slots, attrs } = context;
  return () => {
    const options = { part: true };
    let overrides = {};
    if (props.locale) {
      options.locale = props.locale;
    }
    if (isString$4(props.format)) {
      options.key = props.format;
    } else if (isObject$4(props.format)) {
      if (isString$4(props.format.key)) {
        options.key = props.format.key;
      }
      overrides = Object.keys(props.format).reduce((options2, prop) => {
        return slotKeys.includes(prop) ? assign$1({}, options2, { [prop]: props.format[prop] }) : options2;
      }, {});
    }
    const parts = partFormatter(...[props.value, options, overrides]);
    let children = [options.key];
    if (isArray$4(parts)) {
      children = parts.map((part, index) => {
        const slot = slots[part.type];
        return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
      });
    } else if (isString$4(parts)) {
      children = [parts];
    }
    const assignedAttrs = assign$1({}, attrs);
    const tag = isString$4(props.tag) || isObject$4(props.tag) ? props.tag : Fragment;
    return h(tag, assignedAttrs, children);
  };
}
const NUMBER_FORMAT_KEYS = [
  "localeMatcher",
  "style",
  "unit",
  "unitDisplay",
  "currency",
  "currencyDisplay",
  "useGrouping",
  "numberingSystem",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "notation",
  "formatMatcher"
];
const NumberFormat = /* @__PURE__ */ defineComponent({
  name: "i18n-n",
  props: assign$1({
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => i18n2[NumberPartsSymbol](...args));
  }
});
const DATETIME_FORMAT_KEYS = [
  "dateStyle",
  "timeStyle",
  "fractionalSecondDigits",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "localeMatcher",
  "timeZone",
  "hour12",
  "hourCycle",
  "formatMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName"
];
const DatetimeFormat = /* @__PURE__ */ defineComponent({
  name: "i18n-d",
  props: assign$1({
    value: {
      type: [Number, Date],
      required: true
    },
    format: {
      type: [String, Object]
    }
  }, baseFormatProps),
  setup(props, context) {
    const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
    return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => i18n2[DatetimePartsSymbol](...args));
  }
});
function getComposer$2(i18n2, instance) {
  const i18nInternal = i18n2;
  if (i18n2.mode === "composition") {
    return i18nInternal.__getInstance(instance) || i18n2.global;
  } else {
    const vueI18n = i18nInternal.__getInstance(instance);
    return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
  }
}
function vTDirective(i18n2) {
  const bind3 = (el, { instance, value, modifiers }) => {
    if (!instance || !instance.$) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const composer = getComposer$2(i18n2, instance.$);
    const parsedValue = parseValue(value);
    el.textContent = Reflect.apply(composer.t, composer, [
      ...makeParams(parsedValue)
    ]);
  };
  return {
    beforeMount: bind3,
    beforeUpdate: bind3
  };
}
function parseValue(value) {
  if (isString$4(value)) {
    return { path: value };
  } else if (isPlainObject$2(value)) {
    if (!("path" in value)) {
      throw createI18nError(I18nErrorCodes.REQUIRED_VALUE, "path");
    }
    return value;
  } else {
    throw createI18nError(I18nErrorCodes.INVALID_VALUE);
  }
}
function makeParams(value) {
  const { path, locale, args, choice, plural } = value;
  const options = {};
  const named = args || {};
  if (isString$4(locale)) {
    options.locale = locale;
  }
  if (isNumber$4(choice)) {
    options.plural = choice;
  }
  if (isNumber$4(plural)) {
    options.plural = plural;
  }
  return [path, named, options];
}
function apply(app, i18n2, ...options) {
  const pluginOptions = isPlainObject$2(options[0]) ? options[0] : {};
  const useI18nComponentName = !!pluginOptions.useI18nComponentName;
  const globalInstall = isBoolean$3(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
  if (globalInstall) {
    app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
    app.component(NumberFormat.name, NumberFormat);
    app.component(DatetimeFormat.name, DatetimeFormat);
  }
  {
    app.directive("t", vTDirective(i18n2));
  }
}
const I18nInjectionKey = /* @__PURE__ */ makeSymbol("global-vue-i18n");
function createI18n(options = {}, VueI18nLegacy) {
  const __globalInjection = !!options.globalInjection;
  const __instances = new Map();
  const __global = createGlobal(options);
  const symbol = makeSymbol("");
  function __getInstance(component) {
    return __instances.get(component) || null;
  }
  function __setInstance(component, instance) {
    __instances.set(component, instance);
  }
  function __deleteInstance(component) {
    __instances.delete(component);
  }
  {
    const i18n2 = {
      get mode() {
        return "composition";
      },
      async install(app, ...options2) {
        {
          app.__VUE_I18N_SYMBOL__ = symbol;
          app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        }
        if (__globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
      },
      get global() {
        return __global;
      },
      __instances,
      __getInstance,
      __setInstance,
      __deleteInstance
    };
    return i18n2;
  }
}
function useI18n(options = {}) {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw createI18nError(I18nErrorCodes.MUST_BE_CALL_SETUP_TOP);
  }
  if (!instance.isCE && instance.appContext.app != null && !instance.appContext.app.__VUE_I18N_SYMBOL__) {
    throw createI18nError(I18nErrorCodes.NOT_INSLALLED);
  }
  const i18n2 = getI18nInstance(instance);
  const global2 = getGlobalComposer(i18n2);
  const componentOptions = getComponentOptions(instance);
  const scope = getScope(options, componentOptions);
  if (scope === "global") {
    adjustI18nResources(global2, options, componentOptions);
    return global2;
  }
  if (scope === "parent") {
    let composer2 = getComposer(i18n2, instance, options.__useComponent);
    if (composer2 == null) {
      composer2 = global2;
    }
    return composer2;
  }
  if (i18n2.mode === "legacy") {
    throw createI18nError(I18nErrorCodes.NOT_AVAILABLE_IN_LEGACY_MODE);
  }
  const i18nInternal = i18n2;
  let composer = i18nInternal.__getInstance(instance);
  if (composer == null) {
    const composerOptions = assign$1({}, options);
    if ("__i18n" in componentOptions) {
      composerOptions.__i18n = componentOptions.__i18n;
    }
    if (global2) {
      composerOptions.__root = global2;
    }
    composer = createComposer(composerOptions);
    setupLifeCycle(i18nInternal, instance);
    i18nInternal.__setInstance(instance, composer);
  }
  return composer;
}
function createGlobal(options, legacyMode, VueI18nLegacy) {
  {
    return createComposer(options);
  }
}
function getI18nInstance(instance) {
  {
    const i18n2 = inject(!instance.isCE ? instance.appContext.app.__VUE_I18N_SYMBOL__ : I18nInjectionKey);
    if (!i18n2) {
      throw createI18nError(!instance.isCE ? I18nErrorCodes.UNEXPECTED_ERROR : I18nErrorCodes.NOT_INSLALLED_WITH_PROVIDE);
    }
    return i18n2;
  }
}
function getScope(options, componentOptions) {
  return isEmptyObject$1(options) ? "__i18n" in componentOptions ? "local" : "global" : !options.useScope ? "local" : options.useScope;
}
function getGlobalComposer(i18n2) {
  return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
}
function adjustI18nResources(global2, options, componentOptions) {
  let messages = isObject$4(options.messages) ? options.messages : {};
  if ("__i18nGlobal" in componentOptions) {
    messages = getLocaleMessages(global2.locale.value, {
      messages,
      __i18n: componentOptions.__i18nGlobal
    });
  }
  const locales = Object.keys(messages);
  if (locales.length) {
    locales.forEach((locale) => {
      global2.mergeLocaleMessage(locale, messages[locale]);
    });
  }
  {
    if (isObject$4(options.datetimeFormats)) {
      const locales2 = Object.keys(options.datetimeFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
        });
      }
    }
    if (isObject$4(options.numberFormats)) {
      const locales2 = Object.keys(options.numberFormats);
      if (locales2.length) {
        locales2.forEach((locale) => {
          global2.mergeNumberFormat(locale, options.numberFormats[locale]);
        });
      }
    }
  }
}
function getComposer(i18n2, target, useComponent = false) {
  let composer = null;
  const root2 = target.root;
  let current = target.parent;
  while (current != null) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      composer = i18nInternal.__getInstance(current);
    }
    if (composer != null) {
      break;
    }
    if (root2 === current) {
      break;
    }
    current = current.parent;
  }
  return composer;
}
function setupLifeCycle(i18n2, target, composer) {
  {
    onMounted(() => {
    }, target);
    onUnmounted(() => {
      i18n2.__deleteInstance(target);
    }, target);
  }
}
const globalExportProps = [
  "locale",
  "fallbackLocale",
  "availableLocales"
];
const globalExportMethods = ["t", "rt", "d", "n", "tm"];
function injectGlobalFields(app, composer) {
  const i18n2 = Object.create(null);
  globalExportProps.forEach((prop) => {
    const desc = Object.getOwnPropertyDescriptor(composer, prop);
    if (!desc) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    const wrap2 = isRef(desc.value) ? {
      get() {
        return desc.value.value;
      },
      set(val) {
        desc.value.value = val;
      }
    } : {
      get() {
        return desc.get && desc.get();
      }
    };
    Object.defineProperty(i18n2, prop, wrap2);
  });
  app.config.globalProperties.$i18n = i18n2;
  globalExportMethods.forEach((method) => {
    const desc = Object.getOwnPropertyDescriptor(composer, method);
    if (!desc || !desc.value) {
      throw createI18nError(I18nErrorCodes.UNEXPECTED_ERROR);
    }
    Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
  });
}
registerMessageResolver(resolveValue);
registerLocaleFallbacker(fallbackWithLocaleChain);
{
  initFeatureFlags();
}
if (__INTLIFY_PROD_DEVTOOLS__) {
  const target = getGlobalThis$1();
  target.__INTLIFY__ = true;
  setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
var nprogress = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports) {
  (function(root2, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress.status = null;
    NProgress.set = function(n2) {
      var started = NProgress.isStarted();
      n2 = clamp2(n2, Settings.minimum, 1);
      NProgress.status = n2 === 1 ? null : n2;
      var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue2(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress.getPositioningCSS();
        css(bar, barPositionCSS(n2, speed, ease));
        if (n2 === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress.isStarted = function() {
      return typeof NProgress.status === "number";
    };
    NProgress.start = function() {
      if (!NProgress.status)
        NProgress.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress.status)
            return;
          NProgress.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress.done = function(force) {
      if (!force && !NProgress.status)
        return this;
      return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress.inc = function(amount) {
      var n2 = NProgress.status;
      if (!n2) {
        return NProgress.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n2) * clamp2(Math.random() * n2, 0.1, 0.95);
        }
        n2 = clamp2(n2 + amount, 0, 0.994);
        return NProgress.set(n2);
      }
    };
    NProgress.trickle = function() {
      return NProgress.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress.done();
          } else {
            NProgress.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress.render = function(fromStart) {
      if (NProgress.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement2(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement2(progress);
    };
    NProgress.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp2(n2, min, max) {
      if (n2 < min)
        return min;
      if (n2 > max)
        return max;
      return n2;
    }
    function toBarPerc(n2) {
      return (-1 + n2) * 100;
    }
    function barPositionCSS(n2, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n2) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n2) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n2) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue2 = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i2 = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i2--) {
          vendorName = cssPrefixes[i2] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass2(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass2(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass2(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement2(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress;
  });
})(nprogress);
var vueScrollto = { exports: {} };
/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i2 = 1; i2 < arguments.length; i2++) {
          var source3 = arguments[i2];
          for (var key in source3) {
            if (Object.prototype.hasOwnProperty.call(source3, key)) {
              target[key] = source3[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 1e-3;
    var SUBDIVISION_PRECISION = 1e-7;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    var float32ArraySupported = typeof Float32Array === "function";
    function A(aA1, aA2) {
      return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
      return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
      return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
      return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX, currentT, i2 = 0;
      do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i2 < SUBDIVISION_MAX_ITERATIONS);
      return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i2 = 0; i2 < NEWTON_ITERATIONS; ++i2) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) {
          return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }
    function LinearEasing(x) {
      return x;
    }
    var src = function bezier(mX1, mY1, mX2, mY2) {
      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error("bezier x values must be in [0, 1] range");
      }
      if (mX1 === mY1 && mX2 === mY2) {
        return LinearEasing;
      }
      var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      for (var i2 = 0; i2 < kSplineTableSize; ++i2) {
        sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
      }
      function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
      }
      return function BezierEasing(x) {
        if (x === 0) {
          return 0;
        }
        if (x === 1) {
          return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
      };
    };
    var easings = {
      ease: [0.25, 0.1, 0.25, 1],
      linear: [0, 0, 1, 1],
      "ease-in": [0.42, 0, 1, 1],
      "ease-out": [0, 0, 0.58, 1],
      "ease-in-out": [0.42, 0, 0.58, 1]
    };
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get2() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e2) {
    }
    var _2 = {
      $: function $(selector) {
        if (typeof selector !== "string") {
          return selector;
        }
        return document.querySelector(selector);
      },
      on: function on2(element, events, handler) {
        var opts2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
          passive: false
        };
        if (!(events instanceof Array)) {
          events = [events];
        }
        for (var i2 = 0; i2 < events.length; i2++) {
          element.addEventListener(events[i2], handler, supportsPassive ? opts2 : false);
        }
      },
      off: function off2(element, events, handler) {
        if (!(events instanceof Array)) {
          events = [events];
        }
        for (var i2 = 0; i2 < events.length; i2++) {
          element.removeEventListener(events[i2], handler);
        }
      },
      cumulativeOffset: function cumulativeOffset(element) {
        var top = 0;
        var left = 0;
        do {
          top += element.offsetTop || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
        } while (element);
        return {
          top,
          left
        };
      }
    };
    var abortEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"];
    var defaults2 = {
      container: "body",
      duration: 500,
      lazy: true,
      easing: "ease",
      offset: 0,
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true
    };
    function setDefaults(options) {
      defaults2 = _extends({}, defaults2, options);
    }
    var scroller = function scroller2() {
      var element;
      var container;
      var duration;
      var easing;
      var lazy;
      var offset;
      var force;
      var cancelable;
      var onStart;
      var onDone;
      var onCancel;
      var x;
      var y;
      var initialX;
      var targetX;
      var initialY;
      var targetY;
      var diffX;
      var diffY;
      var abort;
      var cumulativeOffsetContainer;
      var cumulativeOffsetElement;
      var abortEv;
      var abortFn = function abortFn2(e2) {
        if (!cancelable)
          return;
        abortEv = e2;
        abort = true;
      };
      var easingFn;
      var timeStart;
      var timeElapsed;
      var progress;
      function scrollTop(container2) {
        var scrollTop2 = container2.scrollTop;
        if (container2.tagName.toLowerCase() === "body") {
          scrollTop2 = scrollTop2 || document.documentElement.scrollTop;
        }
        return scrollTop2;
      }
      function scrollLeft(container2) {
        var scrollLeft2 = container2.scrollLeft;
        if (container2.tagName.toLowerCase() === "body") {
          scrollLeft2 = scrollLeft2 || document.documentElement.scrollLeft;
        }
        return scrollLeft2;
      }
      function recalculateTargets() {
        cumulativeOffsetContainer = _2.cumulativeOffset(container);
        cumulativeOffsetElement = _2.cumulativeOffset(element);
        if (x) {
          targetX = cumulativeOffsetElement.left - cumulativeOffsetContainer.left + offset;
          diffX = targetX - initialX;
        }
        if (y) {
          targetY = cumulativeOffsetElement.top - cumulativeOffsetContainer.top + offset;
          diffY = targetY - initialY;
        }
      }
      function step(timestamp) {
        if (abort)
          return done();
        if (!timeStart)
          timeStart = timestamp;
        if (!lazy) {
          recalculateTargets();
        }
        timeElapsed = timestamp - timeStart;
        progress = Math.min(timeElapsed / duration, 1);
        progress = easingFn(progress);
        topLeft(container, initialY + diffY * progress, initialX + diffX * progress);
        timeElapsed < duration ? window.requestAnimationFrame(step) : done();
      }
      function done() {
        if (!abort)
          topLeft(container, targetY, targetX);
        timeStart = false;
        _2.off(container, abortEvents, abortFn);
        if (abort && onCancel)
          onCancel(abortEv, element);
        if (!abort && onDone)
          onDone(element);
      }
      function topLeft(element2, top, left) {
        if (y)
          element2.scrollTop = top;
        if (x)
          element2.scrollLeft = left;
        if (element2.tagName.toLowerCase() === "body") {
          if (y)
            document.documentElement.scrollTop = top;
          if (x)
            document.documentElement.scrollLeft = left;
        }
      }
      function scrollTo(target, _duration) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (_typeof(_duration) === "object") {
          options = _duration;
        } else if (typeof _duration === "number") {
          options.duration = _duration;
        }
        element = _2.$(target);
        if (!element) {
          return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: " + target);
        }
        container = _2.$(options.container || defaults2.container);
        duration = options.hasOwnProperty("duration") ? options.duration : defaults2.duration;
        lazy = options.hasOwnProperty("lazy") ? options.lazy : defaults2.lazy;
        easing = options.easing || defaults2.easing;
        offset = options.hasOwnProperty("offset") ? options.offset : defaults2.offset;
        force = options.hasOwnProperty("force") ? options.force !== false : defaults2.force;
        cancelable = options.hasOwnProperty("cancelable") ? options.cancelable !== false : defaults2.cancelable;
        onStart = options.onStart || defaults2.onStart;
        onDone = options.onDone || defaults2.onDone;
        onCancel = options.onCancel || defaults2.onCancel;
        x = options.x === void 0 ? defaults2.x : options.x;
        y = options.y === void 0 ? defaults2.y : options.y;
        if (typeof offset === "function") {
          offset = offset(element, container);
        }
        initialX = scrollLeft(container);
        initialY = scrollTop(container);
        recalculateTargets();
        abort = false;
        if (!force) {
          var containerHeight = container.tagName.toLowerCase() === "body" ? document.documentElement.clientHeight || window.innerHeight : container.offsetHeight;
          var containerTop = initialY;
          var containerBottom = containerTop + containerHeight;
          var elementTop = targetY - offset;
          var elementBottom = elementTop + element.offsetHeight;
          if (elementTop >= containerTop && elementBottom <= containerBottom) {
            if (onDone)
              onDone(element);
            return;
          }
        }
        if (onStart)
          onStart(element);
        if (!diffY && !diffX) {
          if (onDone)
            onDone(element);
          return;
        }
        if (typeof easing === "string") {
          easing = easings[easing] || easings["ease"];
        }
        easingFn = src.apply(src, easing);
        _2.on(container, abortEvents, abortFn, {
          passive: true
        });
        window.requestAnimationFrame(step);
        return function() {
          abortEv = null;
          abort = true;
        };
      }
      return scrollTo;
    };
    var _scroller = scroller();
    var bindings = [];
    function deleteBinding(el) {
      for (var i2 = 0; i2 < bindings.length; ++i2) {
        if (bindings[i2].el === el) {
          bindings.splice(i2, 1);
          return true;
        }
      }
      return false;
    }
    function findBinding(el) {
      for (var i2 = 0; i2 < bindings.length; ++i2) {
        if (bindings[i2].el === el) {
          return bindings[i2];
        }
      }
    }
    function getBinding(el) {
      var binding = findBinding(el);
      if (binding) {
        return binding;
      }
      bindings.push(binding = {
        el,
        binding: {}
      });
      return binding;
    }
    function handleClick(e2) {
      var ctx = getBinding(this).binding;
      if (!ctx.value)
        return;
      e2.preventDefault();
      if (typeof ctx.value === "string") {
        return _scroller(ctx.value);
      }
      _scroller(ctx.value.el || ctx.value.element, ctx.value);
    }
    var directiveHooks = {
      bind: function bind3(el, binding) {
        getBinding(el).binding = binding;
        _2.on(el, "click", handleClick);
      },
      unbind: function unbind(el) {
        deleteBinding(el);
        _2.off(el, "click", handleClick);
      },
      update: function update(el, binding) {
        getBinding(el).binding = binding;
      }
    };
    var VueScrollTo2 = {
      bind: directiveHooks.bind,
      unbind: directiveHooks.unbind,
      update: directiveHooks.update,
      beforeMount: directiveHooks.bind,
      unmounted: directiveHooks.unbind,
      updated: directiveHooks.update,
      scrollTo: _scroller,
      bindings
    };
    var install = function install2(Vue, options) {
      if (options)
        setDefaults(options);
      Vue.directive("scroll-to", VueScrollTo2);
      var properties = Vue.config.globalProperties || Vue.prototype;
      properties.$scrollTo = VueScrollTo2.scrollTo;
    };
    if (typeof window !== "undefined" && window.Vue) {
      window.VueScrollTo = VueScrollTo2;
      window.VueScrollTo.setDefaults = setDefaults;
      window.VueScrollTo.scroller = scroller;
      if (window.Vue.use)
        window.Vue.use(install);
    }
    VueScrollTo2.install = install;
    return VueScrollTo2;
  });
})(vueScrollto);
var VueScrollTo = vueScrollto.exports;
function _defineProperty$1(e2, t2, i2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
}
function _classCallCheck(e2, t2) {
  if (!(e2 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e2, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) {
    var s2 = t2[i2];
    s2.enumerable = s2.enumerable || false, s2.configurable = true, "value" in s2 && (s2.writable = true), Object.defineProperty(e2, s2.key, s2);
  }
}
function _createClass(e2, t2, i2) {
  return t2 && _defineProperties(e2.prototype, t2), i2 && _defineProperties(e2, i2), e2;
}
function _defineProperty(e2, t2, i2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
}
function ownKeys(e2, t2) {
  var i2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e2);
    t2 && (s2 = s2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), i2.push.apply(i2, s2);
  }
  return i2;
}
function _objectSpread2(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var i2 = arguments[t2] != null ? arguments[t2] : {};
    t2 % 2 ? ownKeys(Object(i2), true).forEach(function(t3) {
      _defineProperty(e2, t3, i2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(i2)) : ownKeys(Object(i2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(i2, t3));
    });
  }
  return e2;
}
var defaults$1$1 = { addCSS: true, thumbWidth: 15, watch: true };
function matches$1(e2, t2) {
  return function() {
    return Array.from(document.querySelectorAll(t2)).includes(this);
  }.call(e2, t2);
}
function trigger(e2, t2) {
  if (e2 && t2) {
    var i2 = new Event(t2, { bubbles: true });
    e2.dispatchEvent(i2);
  }
}
var getConstructor$1 = function(e2) {
  return e2 != null ? e2.constructor : null;
}, instanceOf$1 = function(e2, t2) {
  return !!(e2 && t2 && e2 instanceof t2);
}, isNullOrUndefined$1 = function(e2) {
  return e2 == null;
}, isObject$1 = function(e2) {
  return getConstructor$1(e2) === Object;
}, isNumber$1 = function(e2) {
  return getConstructor$1(e2) === Number && !Number.isNaN(e2);
}, isString$1 = function(e2) {
  return getConstructor$1(e2) === String;
}, isBoolean$1 = function(e2) {
  return getConstructor$1(e2) === Boolean;
}, isFunction$1 = function(e2) {
  return getConstructor$1(e2) === Function;
}, isArray$1 = function(e2) {
  return Array.isArray(e2);
}, isNodeList$1 = function(e2) {
  return instanceOf$1(e2, NodeList);
}, isElement$1 = function(e2) {
  return instanceOf$1(e2, Element);
}, isEvent$1 = function(e2) {
  return instanceOf$1(e2, Event);
}, isEmpty$1 = function(e2) {
  return isNullOrUndefined$1(e2) || (isString$1(e2) || isArray$1(e2) || isNodeList$1(e2)) && !e2.length || isObject$1(e2) && !Object.keys(e2).length;
}, is$1 = { nullOrUndefined: isNullOrUndefined$1, object: isObject$1, number: isNumber$1, string: isString$1, boolean: isBoolean$1, function: isFunction$1, array: isArray$1, nodeList: isNodeList$1, element: isElement$1, event: isEvent$1, empty: isEmpty$1 };
function getDecimalPlaces(e2) {
  var t2 = "".concat(e2).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t2 ? Math.max(0, (t2[1] ? t2[1].length : 0) - (t2[2] ? +t2[2] : 0)) : 0;
}
function round(e2, t2) {
  if (1 > t2) {
    var i2 = getDecimalPlaces(t2);
    return parseFloat(e2.toFixed(i2));
  }
  return Math.round(e2 / t2) * t2;
}
var RangeTouch = function() {
  function e2(t2, i2) {
    _classCallCheck(this, e2), is$1.element(t2) ? this.element = t2 : is$1.string(t2) && (this.element = document.querySelector(t2)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1$1, {}, i2), this.init());
  }
  return _createClass(e2, [{ key: "init", value: function() {
    e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
  } }, { key: "destroy", value: function() {
    e2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
  } }, { key: "listeners", value: function(e3) {
    var t2 = this, i2 = e3 ? "addEventListener" : "removeEventListener";
    ["touchstart", "touchmove", "touchend"].forEach(function(e4) {
      t2.element[i2](e4, function(e5) {
        return t2.set(e5);
      }, false);
    });
  } }, { key: "get", value: function(t2) {
    if (!e2.enabled || !is$1.event(t2))
      return null;
    var i2, s2 = t2.target, n2 = t2.changedTouches[0], r2 = parseFloat(s2.getAttribute("min")) || 0, a2 = parseFloat(s2.getAttribute("max")) || 100, o2 = parseFloat(s2.getAttribute("step")) || 1, l = s2.getBoundingClientRect(), c2 = 100 / l.width * (this.config.thumbWidth / 2) / 100;
    return 0 > (i2 = 100 / l.width * (n2.clientX - l.left)) ? i2 = 0 : 100 < i2 && (i2 = 100), 50 > i2 ? i2 -= (100 - 2 * i2) * c2 : 50 < i2 && (i2 += 2 * (i2 - 50) * c2), r2 + round(i2 / 100 * (a2 - r2), o2);
  } }, { key: "set", value: function(t2) {
    e2.enabled && is$1.event(t2) && !t2.target.disabled && (t2.preventDefault(), t2.target.value = this.get(t2), trigger(t2.target, t2.type === "touchend" ? "change" : "input"));
  } }], [{ key: "setup", value: function(t2) {
    var i2 = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, s2 = null;
    if (is$1.empty(t2) || is$1.string(t2) ? s2 = Array.from(document.querySelectorAll(is$1.string(t2) ? t2 : 'input[type="range"]')) : is$1.element(t2) ? s2 = [t2] : is$1.nodeList(t2) ? s2 = Array.from(t2) : is$1.array(t2) && (s2 = t2.filter(is$1.element)), is$1.empty(s2))
      return null;
    var n2 = _objectSpread2({}, defaults$1$1, {}, i2);
    if (is$1.string(t2) && n2.watch) {
      var r2 = new MutationObserver(function(i3) {
        Array.from(i3).forEach(function(i4) {
          Array.from(i4.addedNodes).forEach(function(i5) {
            is$1.element(i5) && matches$1(i5, t2) && new e2(i5, n2);
          });
        });
      });
      r2.observe(document.body, { childList: true, subtree: true });
    }
    return s2.map(function(t3) {
      return new e2(t3, i2);
    });
  } }, { key: "enabled", get: function() {
    return "ontouchstart" in document.documentElement;
  } }]), e2;
}();
const getConstructor = (e2) => e2 != null ? e2.constructor : null, instanceOf = (e2, t2) => Boolean(e2 && t2 && e2 instanceof t2), isNullOrUndefined = (e2) => e2 == null, isObject$2 = (e2) => getConstructor(e2) === Object, isNumber$2 = (e2) => getConstructor(e2) === Number && !Number.isNaN(e2), isString$2 = (e2) => getConstructor(e2) === String, isBoolean = (e2) => getConstructor(e2) === Boolean, isFunction$2 = (e2) => getConstructor(e2) === Function, isArray$2 = (e2) => Array.isArray(e2), isWeakMap = (e2) => instanceOf(e2, WeakMap), isNodeList = (e2) => instanceOf(e2, NodeList), isTextNode = (e2) => getConstructor(e2) === Text, isEvent = (e2) => instanceOf(e2, Event), isKeyboardEvent = (e2) => instanceOf(e2, KeyboardEvent), isCue = (e2) => instanceOf(e2, window.TextTrackCue) || instanceOf(e2, window.VTTCue), isTrack = (e2) => instanceOf(e2, TextTrack) || !isNullOrUndefined(e2) && isString$2(e2.kind), isPromise = (e2) => instanceOf(e2, Promise) && isFunction$2(e2.then), isElement = (e2) => e2 !== null && typeof e2 == "object" && e2.nodeType === 1 && typeof e2.style == "object" && typeof e2.ownerDocument == "object", isEmpty = (e2) => isNullOrUndefined(e2) || (isString$2(e2) || isArray$2(e2) || isNodeList(e2)) && !e2.length || isObject$2(e2) && !Object.keys(e2).length, isUrl = (e2) => {
  if (instanceOf(e2, window.URL))
    return true;
  if (!isString$2(e2))
    return false;
  let t2 = e2;
  e2.startsWith("http://") && e2.startsWith("https://") || (t2 = `http://${e2}`);
  try {
    return !isEmpty(new URL(t2).hostname);
  } catch (e3) {
    return false;
  }
};
var is = { nullOrUndefined: isNullOrUndefined, object: isObject$2, number: isNumber$2, string: isString$2, boolean: isBoolean, function: isFunction$2, array: isArray$2, weakMap: isWeakMap, nodeList: isNodeList, element: isElement, textNode: isTextNode, event: isEvent, keyboardEvent: isKeyboardEvent, cue: isCue, track: isTrack, promise: isPromise, url: isUrl, empty: isEmpty };
const transitionEndEvent = (() => {
  const e2 = document.createElement("span"), t2 = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, i2 = Object.keys(t2).find((t3) => e2.style[t3] !== void 0);
  return !!is.string(i2) && t2[i2];
})();
function repaint(e2, t2) {
  setTimeout(() => {
    try {
      e2.hidden = true, e2.offsetHeight, e2.hidden = false;
    } catch (e3) {
    }
  }, t2);
}
const browser = { isIE: Boolean(window.document.documentMode), isEdge: window.navigator.userAgent.includes("Edge"), isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), isIPhone: /(iPhone|iPod)/gi.test(navigator.platform), isIos: navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform) };
function cloneDeep(e2) {
  return JSON.parse(JSON.stringify(e2));
}
function getDeep(e2, t2) {
  return t2.split(".").reduce((e3, t3) => e3 && e3[t3], e2);
}
function extend$1(e2 = {}, ...t2) {
  if (!t2.length)
    return e2;
  const i2 = t2.shift();
  return is.object(i2) ? (Object.keys(i2).forEach((t3) => {
    is.object(i2[t3]) ? (Object.keys(e2).includes(t3) || Object.assign(e2, { [t3]: {} }), extend$1(e2[t3], i2[t3])) : Object.assign(e2, { [t3]: i2[t3] });
  }), extend$1(e2, ...t2)) : e2;
}
function wrap(e2, t2) {
  const i2 = e2.length ? e2 : [e2];
  Array.from(i2).reverse().forEach((e3, i3) => {
    const s2 = i3 > 0 ? t2.cloneNode(true) : t2, n2 = e3.parentNode, r2 = e3.nextSibling;
    s2.appendChild(e3), r2 ? n2.insertBefore(s2, r2) : n2.appendChild(s2);
  });
}
function setAttributes(e2, t2) {
  is.element(e2) && !is.empty(t2) && Object.entries(t2).filter(([, e3]) => !is.nullOrUndefined(e3)).forEach(([t3, i2]) => e2.setAttribute(t3, i2));
}
function createElement(e2, t2, i2) {
  const s2 = document.createElement(e2);
  return is.object(t2) && setAttributes(s2, t2), is.string(i2) && (s2.innerText = i2), s2;
}
function insertAfter(e2, t2) {
  is.element(e2) && is.element(t2) && t2.parentNode.insertBefore(e2, t2.nextSibling);
}
function insertElement(e2, t2, i2, s2) {
  is.element(t2) && t2.appendChild(createElement(e2, i2, s2));
}
function removeElement(e2) {
  is.nodeList(e2) || is.array(e2) ? Array.from(e2).forEach(removeElement) : is.element(e2) && is.element(e2.parentNode) && e2.parentNode.removeChild(e2);
}
function emptyElement(e2) {
  if (!is.element(e2))
    return;
  let { length: t2 } = e2.childNodes;
  for (; t2 > 0; )
    e2.removeChild(e2.lastChild), t2 -= 1;
}
function replaceElement(e2, t2) {
  return is.element(t2) && is.element(t2.parentNode) && is.element(e2) ? (t2.parentNode.replaceChild(e2, t2), e2) : null;
}
function getAttributesFromSelector(e2, t2) {
  if (!is.string(e2) || is.empty(e2))
    return {};
  const i2 = {}, s2 = extend$1({}, t2);
  return e2.split(",").forEach((e3) => {
    const t3 = e3.trim(), n2 = t3.replace(".", ""), r2 = t3.replace(/[[\]]/g, "").split("="), [a2] = r2, o2 = r2.length > 1 ? r2[1].replace(/["']/g, "") : "";
    switch (t3.charAt(0)) {
      case ".":
        is.string(s2.class) ? i2.class = `${s2.class} ${n2}` : i2.class = n2;
        break;
      case "#":
        i2.id = t3.replace("#", "");
        break;
      case "[":
        i2[a2] = o2;
    }
  }), extend$1(s2, i2);
}
function toggleHidden(e2, t2) {
  if (!is.element(e2))
    return;
  let i2 = t2;
  is.boolean(i2) || (i2 = !e2.hidden), e2.hidden = i2;
}
function toggleClass(e2, t2, i2) {
  if (is.nodeList(e2))
    return Array.from(e2).map((e3) => toggleClass(e3, t2, i2));
  if (is.element(e2)) {
    let s2 = "toggle";
    return i2 !== void 0 && (s2 = i2 ? "add" : "remove"), e2.classList[s2](t2), e2.classList.contains(t2);
  }
  return false;
}
function hasClass(e2, t2) {
  return is.element(e2) && e2.classList.contains(t2);
}
function matches(e2, t2) {
  const { prototype: i2 } = Element;
  return (i2.matches || i2.webkitMatchesSelector || i2.mozMatchesSelector || i2.msMatchesSelector || function() {
    return Array.from(document.querySelectorAll(t2)).includes(this);
  }).call(e2, t2);
}
function closest$1(e2, t2) {
  const { prototype: i2 } = Element;
  return (i2.closest || function() {
    let e3 = this;
    do {
      if (matches.matches(e3, t2))
        return e3;
      e3 = e3.parentElement || e3.parentNode;
    } while (e3 !== null && e3.nodeType === 1);
    return null;
  }).call(e2, t2);
}
function getElements(e2) {
  return this.elements.container.querySelectorAll(e2);
}
function getElement(e2) {
  return this.elements.container.querySelector(e2);
}
function setFocus(e2 = null, t2 = false) {
  is.element(e2) && (e2.focus({ preventScroll: true }), t2 && toggleClass(e2, this.config.classNames.tabFocus));
}
const defaultCodecs = { "audio/ogg": "vorbis", "audio/wav": "1", "video/webm": "vp8, vorbis", "video/mp4": "avc1.42E01E, mp4a.40.2", "video/ogg": "theora" }, support = { audio: "canPlayType" in document.createElement("audio"), video: "canPlayType" in document.createElement("video"), check(e2, t2, i2) {
  const s2 = browser.isIPhone && i2 && support.playsinline, n2 = support[e2] || t2 !== "html5";
  return { api: n2, ui: n2 && support.rangeInput && (e2 !== "video" || !browser.isIPhone || s2) };
}, pip: !(browser.isIPhone || !is.function(createElement("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || createElement("video").disablePictureInPicture)), airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent), playsinline: "playsInline" in document.createElement("video"), mime(e2) {
  if (is.empty(e2))
    return false;
  const [t2] = e2.split("/");
  let i2 = e2;
  if (!this.isHTML5 || t2 !== this.type)
    return false;
  Object.keys(defaultCodecs).includes(i2) && (i2 += `; codecs="${defaultCodecs[e2]}"`);
  try {
    return Boolean(i2 && this.media.canPlayType(i2).replace(/no/, ""));
  } catch (e3) {
    return false;
  }
}, textTracks: "textTracks" in document.createElement("video"), rangeInput: (() => {
  const e2 = document.createElement("input");
  return e2.type = "range", e2.type === "range";
})(), touch: "ontouchstart" in document.documentElement, transitions: transitionEndEvent !== false, reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches }, supportsPassiveListeners = (() => {
  let e2 = false;
  try {
    const t2 = Object.defineProperty({}, "passive", { get: () => (e2 = true, null) });
    window.addEventListener("test", null, t2), window.removeEventListener("test", null, t2);
  } catch (e3) {
  }
  return e2;
})();
function toggleListener(e2, t2, i2, s2 = false, n2 = true, r2 = false) {
  if (!e2 || !("addEventListener" in e2) || is.empty(t2) || !is.function(i2))
    return;
  const a2 = t2.split(" ");
  let o2 = r2;
  supportsPassiveListeners && (o2 = { passive: n2, capture: r2 }), a2.forEach((t3) => {
    this && this.eventListeners && s2 && this.eventListeners.push({ element: e2, type: t3, callback: i2, options: o2 }), e2[s2 ? "addEventListener" : "removeEventListener"](t3, i2, o2);
  });
}
function on(e2, t2 = "", i2, s2 = true, n2 = false) {
  toggleListener.call(this, e2, t2, i2, true, s2, n2);
}
function off(e2, t2 = "", i2, s2 = true, n2 = false) {
  toggleListener.call(this, e2, t2, i2, false, s2, n2);
}
function once(e2, t2 = "", i2, s2 = true, n2 = false) {
  const r2 = (...a2) => {
    off(e2, t2, r2, s2, n2), i2.apply(this, a2);
  };
  toggleListener.call(this, e2, t2, r2, true, s2, n2);
}
function triggerEvent(e2, t2 = "", i2 = false, s2 = {}) {
  if (!is.element(e2) || is.empty(t2))
    return;
  const n2 = new CustomEvent(t2, { bubbles: i2, detail: __spreadProps(__spreadValues({}, s2), { plyr: this }) });
  e2.dispatchEvent(n2);
}
function unbindListeners() {
  this && this.eventListeners && (this.eventListeners.forEach((e2) => {
    const { element: t2, type: i2, callback: s2, options: n2 } = e2;
    t2.removeEventListener(i2, s2, n2);
  }), this.eventListeners = []);
}
function ready() {
  return new Promise((e2) => this.ready ? setTimeout(e2, 0) : on.call(this, this.elements.container, "ready", e2)).then(() => {
  });
}
function silencePromise(e2) {
  is.promise(e2) && e2.then(null, () => {
  });
}
function dedupe(e2) {
  return is.array(e2) ? e2.filter((t2, i2) => e2.indexOf(t2) === i2) : e2;
}
function closest(e2, t2) {
  return is.array(e2) && e2.length ? e2.reduce((e3, i2) => Math.abs(i2 - t2) < Math.abs(e3 - t2) ? i2 : e3) : null;
}
function supportsCSS(e2) {
  return !(!window || !window.CSS) && window.CSS.supports(e2);
}
const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((e2, [t2, i2]) => __spreadProps(__spreadValues({}, e2), { [t2 / i2]: [t2, i2] }), {});
function validateAspectRatio(e2) {
  if (!(is.array(e2) || is.string(e2) && e2.includes(":")))
    return false;
  return (is.array(e2) ? e2 : e2.split(":")).map(Number).every(is.number);
}
function reduceAspectRatio(e2) {
  if (!is.array(e2) || !e2.every(is.number))
    return null;
  const [t2, i2] = e2, s2 = (e3, t3) => t3 === 0 ? e3 : s2(t3, e3 % t3), n2 = s2(t2, i2);
  return [t2 / n2, i2 / n2];
}
function getAspectRatio(e2) {
  const t2 = (e3) => validateAspectRatio(e3) ? e3.split(":").map(Number) : null;
  let i2 = t2(e2);
  if (i2 === null && (i2 = t2(this.config.ratio)), i2 === null && !is.empty(this.embed) && is.array(this.embed.ratio) && ({ ratio: i2 } = this.embed), i2 === null && this.isHTML5) {
    const { videoWidth: e3, videoHeight: t3 } = this.media;
    i2 = [e3, t3];
  }
  return reduceAspectRatio(i2);
}
function setAspectRatio(e2) {
  if (!this.isVideo)
    return {};
  const { wrapper: t2 } = this.elements, i2 = getAspectRatio.call(this, e2);
  if (!is.array(i2))
    return {};
  const [s2, n2] = reduceAspectRatio(i2), r2 = 100 / s2 * n2;
  if (supportsCSS(`aspect-ratio: ${s2}/${n2}`) ? t2.style.aspectRatio = `${s2}/${n2}` : t2.style.paddingBottom = `${r2}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
    const e3 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10), i3 = (e3 - r2) / (e3 / 50);
    this.fullscreen.active ? t2.style.paddingBottom = null : this.media.style.transform = `translateY(-${i3}%)`;
  } else
    this.isHTML5 && t2.classList.add(this.config.classNames.videoFixedRatio);
  return { padding: r2, ratio: i2 };
}
function roundAspectRatio(e2, t2, i2 = 0.05) {
  const s2 = e2 / t2, n2 = closest(Object.keys(standardRatios), s2);
  return Math.abs(n2 - s2) <= i2 ? standardRatios[n2] : [e2, t2];
}
function getViewportSize() {
  return [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)];
}
const html5 = { getSources() {
  if (!this.isHTML5)
    return [];
  return Array.from(this.media.querySelectorAll("source")).filter((e2) => {
    const t2 = e2.getAttribute("type");
    return !!is.empty(t2) || support.mime.call(this, t2);
  });
}, getQualityOptions() {
  return this.config.quality.forced ? this.config.quality.options : html5.getSources.call(this).map((e2) => Number(e2.getAttribute("size"))).filter(Boolean);
}, setup() {
  if (!this.isHTML5)
    return;
  const e2 = this;
  e2.options.speed = e2.config.speed.options, is.empty(this.config.ratio) || setAspectRatio.call(e2), Object.defineProperty(e2.media, "quality", { get() {
    const t2 = html5.getSources.call(e2).find((t3) => t3.getAttribute("src") === e2.source);
    return t2 && Number(t2.getAttribute("size"));
  }, set(t2) {
    if (e2.quality !== t2) {
      if (e2.config.quality.forced && is.function(e2.config.quality.onChange))
        e2.config.quality.onChange(t2);
      else {
        const i2 = html5.getSources.call(e2).find((e3) => Number(e3.getAttribute("size")) === t2);
        if (!i2)
          return;
        const { currentTime: s2, paused: n2, preload: r2, readyState: a2, playbackRate: o2 } = e2.media;
        e2.media.src = i2.getAttribute("src"), (r2 !== "none" || a2) && (e2.once("loadedmetadata", () => {
          e2.speed = o2, e2.currentTime = s2, n2 || silencePromise(e2.play());
        }), e2.media.load());
      }
      triggerEvent.call(e2, e2.media, "qualitychange", false, { quality: t2 });
    }
  } });
}, cancelRequests() {
  this.isHTML5 && (removeElement(html5.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
} };
function generateId(e2) {
  return `${e2}-${Math.floor(1e4 * Math.random())}`;
}
function format(e2, ...t2) {
  return is.empty(e2) ? e2 : e2.toString().replace(/{(\d+)}/g, (e3, i2) => t2[i2].toString());
}
function getPercentage(e2, t2) {
  return e2 === 0 || t2 === 0 || Number.isNaN(e2) || Number.isNaN(t2) ? 0 : (e2 / t2 * 100).toFixed(2);
}
const replaceAll = (e2 = "", t2 = "", i2 = "") => e2.replace(new RegExp(t2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i2.toString()), toTitleCase = (e2 = "") => e2.toString().replace(/\w\S*/g, (e3) => e3.charAt(0).toUpperCase() + e3.substr(1).toLowerCase());
function toPascalCase(e2 = "") {
  let t2 = e2.toString();
  return t2 = replaceAll(t2, "-", " "), t2 = replaceAll(t2, "_", " "), t2 = toTitleCase(t2), replaceAll(t2, " ", "");
}
function toCamelCase(e2 = "") {
  let t2 = e2.toString();
  return t2 = toPascalCase(t2), t2.charAt(0).toLowerCase() + t2.slice(1);
}
function stripHTML(e2) {
  const t2 = document.createDocumentFragment(), i2 = document.createElement("div");
  return t2.appendChild(i2), i2.innerHTML = e2, t2.firstChild.innerText;
}
function getHTML(e2) {
  const t2 = document.createElement("div");
  return t2.appendChild(e2), t2.innerHTML;
}
const resources = { pip: "PIP", airplay: "AirPlay", html5: "HTML5", vimeo: "Vimeo", youtube: "YouTube" }, i18n = { get(e2 = "", t2 = {}) {
  if (is.empty(e2) || is.empty(t2))
    return "";
  let i2 = getDeep(t2.i18n, e2);
  if (is.empty(i2))
    return Object.keys(resources).includes(e2) ? resources[e2] : "";
  const s2 = { "{seektime}": t2.seekTime, "{title}": t2.title };
  return Object.entries(s2).forEach(([e3, t3]) => {
    i2 = replaceAll(i2, e3, t3);
  }), i2;
} };
class Storage {
  constructor(e2) {
    _defineProperty$1(this, "get", (e3) => {
      if (!Storage.supported || !this.enabled)
        return null;
      const t2 = window.localStorage.getItem(this.key);
      if (is.empty(t2))
        return null;
      const i2 = JSON.parse(t2);
      return is.string(e3) && e3.length ? i2[e3] : i2;
    }), _defineProperty$1(this, "set", (e3) => {
      if (!Storage.supported || !this.enabled)
        return;
      if (!is.object(e3))
        return;
      let t2 = this.get();
      is.empty(t2) && (t2 = {}), extend$1(t2, e3), window.localStorage.setItem(this.key, JSON.stringify(t2));
    }), this.enabled = e2.config.storage.enabled, this.key = e2.config.storage.key;
  }
  static get supported() {
    try {
      if (!("localStorage" in window))
        return false;
      const e2 = "___test";
      return window.localStorage.setItem(e2, e2), window.localStorage.removeItem(e2), true;
    } catch (e2) {
      return false;
    }
  }
}
function fetch$1(e2, t2 = "text") {
  return new Promise((i2, s2) => {
    try {
      const s3 = new XMLHttpRequest();
      if (!("withCredentials" in s3))
        return;
      s3.addEventListener("load", () => {
        if (t2 === "text")
          try {
            i2(JSON.parse(s3.responseText));
          } catch (e3) {
            i2(s3.responseText);
          }
        else
          i2(s3.response);
      }), s3.addEventListener("error", () => {
        throw new Error(s3.status);
      }), s3.open("GET", e2, true), s3.responseType = t2, s3.send();
    } catch (e3) {
      s2(e3);
    }
  });
}
function loadSprite(e2, t2) {
  if (!is.string(e2))
    return;
  const i2 = is.string(t2);
  let s2 = false;
  const n2 = () => document.getElementById(t2) !== null, r2 = (e3, t3) => {
    e3.innerHTML = t3, i2 && n2() || document.body.insertAdjacentElement("afterbegin", e3);
  };
  if (!i2 || !n2()) {
    const n3 = Storage.supported, a2 = document.createElement("div");
    if (a2.setAttribute("hidden", ""), i2 && a2.setAttribute("id", t2), n3) {
      const e3 = window.localStorage.getItem(`cache-${t2}`);
      if (s2 = e3 !== null, s2) {
        const t3 = JSON.parse(e3);
        r2(a2, t3.content);
      }
    }
    fetch$1(e2).then((e3) => {
      is.empty(e3) || (n3 && window.localStorage.setItem(`cache-${t2}`, JSON.stringify({ content: e3 })), r2(a2, e3));
    }).catch(() => {
    });
  }
}
const getHours = (e2) => Math.trunc(e2 / 60 / 60 % 60, 10), getSeconds = (e2) => Math.trunc(e2 % 60, 10);
function formatTime(e2 = 0, t2 = false, i2 = false) {
  if (!is.number(e2))
    return formatTime(void 0, t2, i2);
  const s2 = (e3) => `0${e3}`.slice(-2);
  let n2 = getHours(e2);
  const r2 = (a2 = e2, Math.trunc(a2 / 60 % 60, 10));
  var a2;
  const o2 = getSeconds(e2);
  return n2 = t2 || n2 > 0 ? `${n2}:` : "", `${i2 && e2 > 0 ? "-" : ""}${n2}${s2(r2)}:${s2(o2)}`;
}
const controls = { getIconUrl() {
  const e2 = new URL(this.config.iconUrl, window.location).host !== window.location.host || browser.isIE && !window.svg4everybody;
  return { url: this.config.iconUrl, cors: e2 };
}, findElements() {
  try {
    return this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = { play: getElements.call(this, this.config.selectors.buttons.play), pause: getElement.call(this, this.config.selectors.buttons.pause), restart: getElement.call(this, this.config.selectors.buttons.restart), rewind: getElement.call(this, this.config.selectors.buttons.rewind), fastForward: getElement.call(this, this.config.selectors.buttons.fastForward), mute: getElement.call(this, this.config.selectors.buttons.mute), pip: getElement.call(this, this.config.selectors.buttons.pip), airplay: getElement.call(this, this.config.selectors.buttons.airplay), settings: getElement.call(this, this.config.selectors.buttons.settings), captions: getElement.call(this, this.config.selectors.buttons.captions), fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen) }, this.elements.progress = getElement.call(this, this.config.selectors.progress), this.elements.inputs = { seek: getElement.call(this, this.config.selectors.inputs.seek), volume: getElement.call(this, this.config.selectors.inputs.volume) }, this.elements.display = { buffer: getElement.call(this, this.config.selectors.display.buffer), currentTime: getElement.call(this, this.config.selectors.display.currentTime), duration: getElement.call(this, this.config.selectors.display.duration) }, is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), true;
  } catch (e2) {
    return this.debug.warn("It looks like there is a problem with your custom controls HTML", e2), this.toggleNativeControls(true), false;
  }
}, createIcon(e2, t2) {
  const i2 = "http://www.w3.org/2000/svg", s2 = controls.getIconUrl.call(this), n2 = `${s2.cors ? "" : s2.url}#${this.config.iconPrefix}`, r2 = document.createElementNS(i2, "svg");
  setAttributes(r2, extend$1(t2, { "aria-hidden": "true", focusable: "false" }));
  const a2 = document.createElementNS(i2, "use"), o2 = `${n2}-${e2}`;
  return "href" in a2 && a2.setAttributeNS("http://www.w3.org/1999/xlink", "href", o2), a2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o2), r2.appendChild(a2), r2;
}, createLabel(e2, t2 = {}) {
  const i2 = i18n.get(e2, this.config);
  return createElement("span", __spreadProps(__spreadValues({}, t2), { class: [t2.class, this.config.classNames.hidden].filter(Boolean).join(" ") }), i2);
}, createBadge(e2) {
  if (is.empty(e2))
    return null;
  const t2 = createElement("span", { class: this.config.classNames.menu.value });
  return t2.appendChild(createElement("span", { class: this.config.classNames.menu.badge }, e2)), t2;
}, createButton(e2, t2) {
  const i2 = extend$1({}, t2);
  let s2 = toCamelCase(e2);
  const n2 = { element: "button", toggle: false, label: null, icon: null, labelPressed: null, iconPressed: null };
  switch (["element", "icon", "label"].forEach((e3) => {
    Object.keys(i2).includes(e3) && (n2[e3] = i2[e3], delete i2[e3]);
  }), n2.element !== "button" || Object.keys(i2).includes("type") || (i2.type = "button"), Object.keys(i2).includes("class") ? i2.class.split(" ").some((e3) => e3 === this.config.classNames.control) || extend$1(i2, { class: `${i2.class} ${this.config.classNames.control}` }) : i2.class = this.config.classNames.control, e2) {
    case "play":
      n2.toggle = true, n2.label = "play", n2.labelPressed = "pause", n2.icon = "play", n2.iconPressed = "pause";
      break;
    case "mute":
      n2.toggle = true, n2.label = "mute", n2.labelPressed = "unmute", n2.icon = "volume", n2.iconPressed = "muted";
      break;
    case "captions":
      n2.toggle = true, n2.label = "enableCaptions", n2.labelPressed = "disableCaptions", n2.icon = "captions-off", n2.iconPressed = "captions-on";
      break;
    case "fullscreen":
      n2.toggle = true, n2.label = "enterFullscreen", n2.labelPressed = "exitFullscreen", n2.icon = "enter-fullscreen", n2.iconPressed = "exit-fullscreen";
      break;
    case "play-large":
      i2.class += ` ${this.config.classNames.control}--overlaid`, s2 = "play", n2.label = "play", n2.icon = "play";
      break;
    default:
      is.empty(n2.label) && (n2.label = s2), is.empty(n2.icon) && (n2.icon = e2);
  }
  const r2 = createElement(n2.element);
  return n2.toggle ? (r2.appendChild(controls.createIcon.call(this, n2.iconPressed, { class: "icon--pressed" })), r2.appendChild(controls.createIcon.call(this, n2.icon, { class: "icon--not-pressed" })), r2.appendChild(controls.createLabel.call(this, n2.labelPressed, { class: "label--pressed" })), r2.appendChild(controls.createLabel.call(this, n2.label, { class: "label--not-pressed" }))) : (r2.appendChild(controls.createIcon.call(this, n2.icon)), r2.appendChild(controls.createLabel.call(this, n2.label))), extend$1(i2, getAttributesFromSelector(this.config.selectors.buttons[s2], i2)), setAttributes(r2, i2), s2 === "play" ? (is.array(this.elements.buttons[s2]) || (this.elements.buttons[s2] = []), this.elements.buttons[s2].push(r2)) : this.elements.buttons[s2] = r2, r2;
}, createRange(e2, t2) {
  const i2 = createElement("input", extend$1(getAttributesFromSelector(this.config.selectors.inputs[e2]), { type: "range", min: 0, max: 100, step: 0.01, value: 0, autocomplete: "off", role: "slider", "aria-label": i18n.get(e2, this.config), "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": 0 }, t2));
  return this.elements.inputs[e2] = i2, controls.updateRangeFill.call(this, i2), RangeTouch.setup(i2), i2;
}, createProgress(e2, t2) {
  const i2 = createElement("progress", extend$1(getAttributesFromSelector(this.config.selectors.display[e2]), { min: 0, max: 100, value: 0, role: "progressbar", "aria-hidden": true }, t2));
  if (e2 !== "volume") {
    i2.appendChild(createElement("span", null, "0"));
    const t3 = { played: "played", buffer: "buffered" }[e2], s2 = t3 ? i18n.get(t3, this.config) : "";
    i2.innerText = `% ${s2.toLowerCase()}`;
  }
  return this.elements.display[e2] = i2, i2;
}, createTime(e2, t2) {
  const i2 = getAttributesFromSelector(this.config.selectors.display[e2], t2), s2 = createElement("div", extend$1(i2, { class: `${i2.class ? i2.class : ""} ${this.config.classNames.display.time} `.trim(), "aria-label": i18n.get(e2, this.config) }), "00:00");
  return this.elements.display[e2] = s2, s2;
}, bindMenuItemShortcuts(e2, t2) {
  on.call(this, e2, "keydown keyup", (i2) => {
    if (![32, 38, 39, 40].includes(i2.which))
      return;
    if (i2.preventDefault(), i2.stopPropagation(), i2.type === "keydown")
      return;
    const s2 = matches(e2, '[role="menuitemradio"]');
    if (!s2 && [32, 39].includes(i2.which))
      controls.showMenuPanel.call(this, t2, true);
    else {
      let t3;
      i2.which !== 32 && (i2.which === 40 || s2 && i2.which === 39 ? (t3 = e2.nextElementSibling, is.element(t3) || (t3 = e2.parentNode.firstElementChild)) : (t3 = e2.previousElementSibling, is.element(t3) || (t3 = e2.parentNode.lastElementChild)), setFocus.call(this, t3, true));
    }
  }, false), on.call(this, e2, "keyup", (e3) => {
    e3.which === 13 && controls.focusFirstMenuItem.call(this, null, true);
  });
}, createMenuItem({ value: e2, list: t2, type: i2, title: s2, badge: n2 = null, checked: r2 = false }) {
  const a2 = getAttributesFromSelector(this.config.selectors.inputs[i2]), o2 = createElement("button", extend$1(a2, { type: "button", role: "menuitemradio", class: `${this.config.classNames.control} ${a2.class ? a2.class : ""}`.trim(), "aria-checked": r2, value: e2 })), l = createElement("span");
  l.innerHTML = s2, is.element(n2) && l.appendChild(n2), o2.appendChild(l), Object.defineProperty(o2, "checked", { enumerable: true, get: () => o2.getAttribute("aria-checked") === "true", set(e3) {
    e3 && Array.from(o2.parentNode.children).filter((e4) => matches(e4, '[role="menuitemradio"]')).forEach((e4) => e4.setAttribute("aria-checked", "false")), o2.setAttribute("aria-checked", e3 ? "true" : "false");
  } }), this.listeners.bind(o2, "click keyup", (t3) => {
    if (!is.keyboardEvent(t3) || t3.which === 32) {
      switch (t3.preventDefault(), t3.stopPropagation(), o2.checked = true, i2) {
        case "language":
          this.currentTrack = Number(e2);
          break;
        case "quality":
          this.quality = e2;
          break;
        case "speed":
          this.speed = parseFloat(e2);
      }
      controls.showMenuPanel.call(this, "home", is.keyboardEvent(t3));
    }
  }, i2, false), controls.bindMenuItemShortcuts.call(this, o2, i2), t2.appendChild(o2);
}, formatTime(e2 = 0, t2 = false) {
  if (!is.number(e2))
    return e2;
  return formatTime(e2, getHours(this.duration) > 0, t2);
}, updateTimeDisplay(e2 = null, t2 = 0, i2 = false) {
  is.element(e2) && is.number(t2) && (e2.innerText = controls.formatTime(t2, i2));
}, updateVolume() {
  this.supported.ui && (is.element(this.elements.inputs.volume) && controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), is.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
}, setRange(e2, t2 = 0) {
  is.element(e2) && (e2.value = t2, controls.updateRangeFill.call(this, e2));
}, updateProgress(e2) {
  if (!this.supported.ui || !is.event(e2))
    return;
  let t2 = 0;
  const i2 = (e3, t3) => {
    const i3 = is.number(t3) ? t3 : 0, s2 = is.element(e3) ? e3 : this.elements.display.buffer;
    if (is.element(s2)) {
      s2.value = i3;
      const e4 = s2.getElementsByTagName("span")[0];
      is.element(e4) && (e4.childNodes[0].nodeValue = i3);
    }
  };
  if (e2)
    switch (e2.type) {
      case "timeupdate":
      case "seeking":
      case "seeked":
        t2 = getPercentage(this.currentTime, this.duration), e2.type === "timeupdate" && controls.setRange.call(this, this.elements.inputs.seek, t2);
        break;
      case "playing":
      case "progress":
        i2(this.elements.display.buffer, 100 * this.buffered);
    }
}, updateRangeFill(e2) {
  const t2 = is.event(e2) ? e2.target : e2;
  if (is.element(t2) && t2.getAttribute("type") === "range") {
    if (matches(t2, this.config.selectors.inputs.seek)) {
      t2.setAttribute("aria-valuenow", this.currentTime);
      const e3 = controls.formatTime(this.currentTime), i2 = controls.formatTime(this.duration), s2 = i18n.get("seekLabel", this.config);
      t2.setAttribute("aria-valuetext", s2.replace("{currentTime}", e3).replace("{duration}", i2));
    } else if (matches(t2, this.config.selectors.inputs.volume)) {
      const e3 = 100 * t2.value;
      t2.setAttribute("aria-valuenow", e3), t2.setAttribute("aria-valuetext", `${e3.toFixed(1)}%`);
    } else
      t2.setAttribute("aria-valuenow", t2.value);
    browser.isWebkit && t2.style.setProperty("--value", t2.value / t2.max * 100 + "%");
  }
}, updateSeekTooltip(e2) {
  if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0)
    return;
  const t2 = `${this.config.classNames.tooltip}--visible`, i2 = (e3) => toggleClass(this.elements.display.seekTooltip, t2, e3);
  if (this.touch)
    return void i2(false);
  let s2 = 0;
  const n2 = this.elements.progress.getBoundingClientRect();
  if (is.event(e2))
    s2 = 100 / n2.width * (e2.pageX - n2.left);
  else {
    if (!hasClass(this.elements.display.seekTooltip, t2))
      return;
    s2 = parseFloat(this.elements.display.seekTooltip.style.left, 10);
  }
  s2 < 0 ? s2 = 0 : s2 > 100 && (s2 = 100), controls.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * s2), this.elements.display.seekTooltip.style.left = `${s2}%`, is.event(e2) && ["mouseenter", "mouseleave"].includes(e2.type) && i2(e2.type === "mouseenter");
}, timeUpdate(e2) {
  const t2 = !is.element(this.elements.display.duration) && this.config.invertTime;
  controls.updateTimeDisplay.call(this, this.elements.display.currentTime, t2 ? this.duration - this.currentTime : this.currentTime, t2), e2 && e2.type === "timeupdate" && this.media.seeking || controls.updateProgress.call(this, e2);
}, durationUpdate() {
  if (!this.supported.ui || !this.config.invertTime && this.currentTime)
    return;
  if (this.duration >= 2 ** 32)
    return toggleHidden(this.elements.display.currentTime, true), void toggleHidden(this.elements.progress, true);
  is.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
  const e2 = is.element(this.elements.display.duration);
  !e2 && this.config.displayDuration && this.paused && controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e2 && controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), controls.updateSeekTooltip.call(this);
}, toggleMenuButton(e2, t2) {
  toggleHidden(this.elements.settings.buttons[e2], !t2);
}, updateSetting(e2, t2, i2) {
  const s2 = this.elements.settings.panels[e2];
  let n2 = null, r2 = t2;
  if (e2 === "captions")
    n2 = this.currentTrack;
  else {
    if (n2 = is.empty(i2) ? this[e2] : i2, is.empty(n2) && (n2 = this.config[e2].default), !is.empty(this.options[e2]) && !this.options[e2].includes(n2))
      return void this.debug.warn(`Unsupported value of '${n2}' for ${e2}`);
    if (!this.config[e2].options.includes(n2))
      return void this.debug.warn(`Disabled value of '${n2}' for ${e2}`);
  }
  if (is.element(r2) || (r2 = s2 && s2.querySelector('[role="menu"]')), !is.element(r2))
    return;
  this.elements.settings.buttons[e2].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = controls.getLabel.call(this, e2, n2);
  const a2 = r2 && r2.querySelector(`[value="${n2}"]`);
  is.element(a2) && (a2.checked = true);
}, getLabel(e2, t2) {
  switch (e2) {
    case "speed":
      return t2 === 1 ? i18n.get("normal", this.config) : `${t2}&times;`;
    case "quality":
      if (is.number(t2)) {
        const e3 = i18n.get(`qualityLabel.${t2}`, this.config);
        return e3.length ? e3 : `${t2}p`;
      }
      return toTitleCase(t2);
    case "captions":
      return captions.getLabel.call(this);
    default:
      return null;
  }
}, setQualityMenu(e2) {
  if (!is.element(this.elements.settings.panels.quality))
    return;
  const t2 = "quality", i2 = this.elements.settings.panels.quality.querySelector('[role="menu"]');
  is.array(e2) && (this.options.quality = dedupe(e2).filter((e3) => this.config.quality.options.includes(e3)));
  const s2 = !is.empty(this.options.quality) && this.options.quality.length > 1;
  if (controls.toggleMenuButton.call(this, t2, s2), emptyElement(i2), controls.checkMenu.call(this), !s2)
    return;
  const n2 = (e3) => {
    const t3 = i18n.get(`qualityBadge.${e3}`, this.config);
    return t3.length ? controls.createBadge.call(this, t3) : null;
  };
  this.options.quality.sort((e3, t3) => {
    const i3 = this.config.quality.options;
    return i3.indexOf(e3) > i3.indexOf(t3) ? 1 : -1;
  }).forEach((e3) => {
    controls.createMenuItem.call(this, { value: e3, list: i2, type: t2, title: controls.getLabel.call(this, "quality", e3), badge: n2(e3) });
  }), controls.updateSetting.call(this, t2, i2);
}, setCaptionsMenu() {
  if (!is.element(this.elements.settings.panels.captions))
    return;
  const e2 = "captions", t2 = this.elements.settings.panels.captions.querySelector('[role="menu"]'), i2 = captions.getTracks.call(this), s2 = Boolean(i2.length);
  if (controls.toggleMenuButton.call(this, e2, s2), emptyElement(t2), controls.checkMenu.call(this), !s2)
    return;
  const n2 = i2.map((e3, i3) => ({ value: i3, checked: this.captions.toggled && this.currentTrack === i3, title: captions.getLabel.call(this, e3), badge: e3.language && controls.createBadge.call(this, e3.language.toUpperCase()), list: t2, type: "language" }));
  n2.unshift({ value: -1, checked: !this.captions.toggled, title: i18n.get("disabled", this.config), list: t2, type: "language" }), n2.forEach(controls.createMenuItem.bind(this)), controls.updateSetting.call(this, e2, t2);
}, setSpeedMenu() {
  if (!is.element(this.elements.settings.panels.speed))
    return;
  const e2 = "speed", t2 = this.elements.settings.panels.speed.querySelector('[role="menu"]');
  this.options.speed = this.options.speed.filter((e3) => e3 >= this.minimumSpeed && e3 <= this.maximumSpeed);
  const i2 = !is.empty(this.options.speed) && this.options.speed.length > 1;
  controls.toggleMenuButton.call(this, e2, i2), emptyElement(t2), controls.checkMenu.call(this), i2 && (this.options.speed.forEach((i3) => {
    controls.createMenuItem.call(this, { value: i3, list: t2, type: e2, title: controls.getLabel.call(this, "speed", i3) });
  }), controls.updateSetting.call(this, e2, t2));
}, checkMenu() {
  const { buttons: e2 } = this.elements.settings, t2 = !is.empty(e2) && Object.values(e2).some((e3) => !e3.hidden);
  toggleHidden(this.elements.settings.menu, !t2);
}, focusFirstMenuItem(e2, t2 = false) {
  if (this.elements.settings.popup.hidden)
    return;
  let i2 = e2;
  is.element(i2) || (i2 = Object.values(this.elements.settings.panels).find((e3) => !e3.hidden));
  const s2 = i2.querySelector('[role^="menuitem"]');
  setFocus.call(this, s2, t2);
}, toggleMenu(e2) {
  const { popup: t2 } = this.elements.settings, i2 = this.elements.buttons.settings;
  if (!is.element(t2) || !is.element(i2))
    return;
  const { hidden: s2 } = t2;
  let n2 = s2;
  if (is.boolean(e2))
    n2 = e2;
  else if (is.keyboardEvent(e2) && e2.which === 27)
    n2 = false;
  else if (is.event(e2)) {
    const s3 = is.function(e2.composedPath) ? e2.composedPath()[0] : e2.target, r2 = t2.contains(s3);
    if (r2 || !r2 && e2.target !== i2 && n2)
      return;
  }
  i2.setAttribute("aria-expanded", n2), toggleHidden(t2, !n2), toggleClass(this.elements.container, this.config.classNames.menu.open, n2), n2 && is.keyboardEvent(e2) ? controls.focusFirstMenuItem.call(this, null, true) : n2 || s2 || setFocus.call(this, i2, is.keyboardEvent(e2));
}, getMenuSize(e2) {
  const t2 = e2.cloneNode(true);
  t2.style.position = "absolute", t2.style.opacity = 0, t2.removeAttribute("hidden"), e2.parentNode.appendChild(t2);
  const i2 = t2.scrollWidth, s2 = t2.scrollHeight;
  return removeElement(t2), { width: i2, height: s2 };
}, showMenuPanel(e2 = "", t2 = false) {
  const i2 = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e2}`);
  if (!is.element(i2))
    return;
  const s2 = i2.parentNode, n2 = Array.from(s2.children).find((e3) => !e3.hidden);
  if (support.transitions && !support.reducedMotion) {
    s2.style.width = `${n2.scrollWidth}px`, s2.style.height = `${n2.scrollHeight}px`;
    const e3 = controls.getMenuSize.call(this, i2), t3 = (e4) => {
      e4.target === s2 && ["width", "height"].includes(e4.propertyName) && (s2.style.width = "", s2.style.height = "", off.call(this, s2, transitionEndEvent, t3));
    };
    on.call(this, s2, transitionEndEvent, t3), s2.style.width = `${e3.width}px`, s2.style.height = `${e3.height}px`;
  }
  toggleHidden(n2, true), toggleHidden(i2, false), controls.focusFirstMenuItem.call(this, i2, t2);
}, setDownloadUrl() {
  const e2 = this.elements.buttons.download;
  is.element(e2) && e2.setAttribute("href", this.download);
}, create(e2) {
  const { bindMenuItemShortcuts: t2, createButton: i2, createProgress: s2, createRange: n2, createTime: r2, setQualityMenu: a2, setSpeedMenu: o2, showMenuPanel: l } = controls;
  this.elements.controls = null, is.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i2.call(this, "play-large"));
  const c2 = createElement("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
  this.elements.controls = c2;
  const u2 = { class: "plyr__controls__item" };
  return dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach((a3) => {
    if (a3 === "restart" && c2.appendChild(i2.call(this, "restart", u2)), a3 === "rewind" && c2.appendChild(i2.call(this, "rewind", u2)), a3 === "play" && c2.appendChild(i2.call(this, "play", u2)), a3 === "fast-forward" && c2.appendChild(i2.call(this, "fast-forward", u2)), a3 === "progress") {
      const t3 = createElement("div", { class: `${u2.class} plyr__progress__container` }), i3 = createElement("div", getAttributesFromSelector(this.config.selectors.progress));
      if (i3.appendChild(n2.call(this, "seek", { id: `plyr-seek-${e2.id}` })), i3.appendChild(s2.call(this, "buffer")), this.config.tooltips.seek) {
        const e3 = createElement("span", { class: this.config.classNames.tooltip }, "00:00");
        i3.appendChild(e3), this.elements.display.seekTooltip = e3;
      }
      this.elements.progress = i3, t3.appendChild(this.elements.progress), c2.appendChild(t3);
    }
    if (a3 === "current-time" && c2.appendChild(r2.call(this, "currentTime", u2)), a3 === "duration" && c2.appendChild(r2.call(this, "duration", u2)), a3 === "mute" || a3 === "volume") {
      let { volume: t3 } = this.elements;
      if (is.element(t3) && c2.contains(t3) || (t3 = createElement("div", extend$1({}, u2, { class: `${u2.class} plyr__volume`.trim() })), this.elements.volume = t3, c2.appendChild(t3)), a3 === "mute" && t3.appendChild(i2.call(this, "mute")), a3 === "volume" && !browser.isIos) {
        const i3 = { max: 1, step: 0.05, value: this.config.volume };
        t3.appendChild(n2.call(this, "volume", extend$1(i3, { id: `plyr-volume-${e2.id}` })));
      }
    }
    if (a3 === "captions" && c2.appendChild(i2.call(this, "captions", u2)), a3 === "settings" && !is.empty(this.config.settings)) {
      const s3 = createElement("div", extend$1({}, u2, { class: `${u2.class} plyr__menu`.trim(), hidden: "" }));
      s3.appendChild(i2.call(this, "settings", { "aria-haspopup": true, "aria-controls": `plyr-settings-${e2.id}`, "aria-expanded": false }));
      const n3 = createElement("div", { class: "plyr__menu__container", id: `plyr-settings-${e2.id}`, hidden: "" }), r3 = createElement("div"), a4 = createElement("div", { id: `plyr-settings-${e2.id}-home` }), o3 = createElement("div", { role: "menu" });
      a4.appendChild(o3), r3.appendChild(a4), this.elements.settings.panels.home = a4, this.config.settings.forEach((i3) => {
        const s4 = createElement("button", extend$1(getAttributesFromSelector(this.config.selectors.buttons.settings), { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`, role: "menuitem", "aria-haspopup": true, hidden: "" }));
        t2.call(this, s4, i3), on.call(this, s4, "click", () => {
          l.call(this, i3, false);
        });
        const n4 = createElement("span", null, i18n.get(i3, this.config)), a5 = createElement("span", { class: this.config.classNames.menu.value });
        a5.innerHTML = e2[i3], n4.appendChild(a5), s4.appendChild(n4), o3.appendChild(s4);
        const c3 = createElement("div", { id: `plyr-settings-${e2.id}-${i3}`, hidden: "" }), u3 = createElement("button", { type: "button", class: `${this.config.classNames.control} ${this.config.classNames.control}--back` });
        u3.appendChild(createElement("span", { "aria-hidden": true }, i18n.get(i3, this.config))), u3.appendChild(createElement("span", { class: this.config.classNames.hidden }, i18n.get("menuBack", this.config))), on.call(this, c3, "keydown", (e3) => {
          e3.which === 37 && (e3.preventDefault(), e3.stopPropagation(), l.call(this, "home", true));
        }, false), on.call(this, u3, "click", () => {
          l.call(this, "home", false);
        }), c3.appendChild(u3), c3.appendChild(createElement("div", { role: "menu" })), r3.appendChild(c3), this.elements.settings.buttons[i3] = s4, this.elements.settings.panels[i3] = c3;
      }), n3.appendChild(r3), s3.appendChild(n3), c2.appendChild(s3), this.elements.settings.popup = n3, this.elements.settings.menu = s3;
    }
    if (a3 === "pip" && support.pip && c2.appendChild(i2.call(this, "pip", u2)), a3 === "airplay" && support.airplay && c2.appendChild(i2.call(this, "airplay", u2)), a3 === "download") {
      const e3 = extend$1({}, u2, { element: "a", href: this.download, target: "_blank" });
      this.isHTML5 && (e3.download = "");
      const { download: t3 } = this.config.urls;
      !is.url(t3) && this.isEmbed && extend$1(e3, { icon: `logo-${this.provider}`, label: this.provider }), c2.appendChild(i2.call(this, "download", e3));
    }
    a3 === "fullscreen" && c2.appendChild(i2.call(this, "fullscreen", u2));
  }), this.isHTML5 && a2.call(this, html5.getQualityOptions.call(this)), o2.call(this), c2;
}, inject() {
  if (this.config.loadSprite) {
    const e3 = controls.getIconUrl.call(this);
    e3.cors && loadSprite(e3.url, "sprite-plyr");
  }
  this.id = Math.floor(1e4 * Math.random());
  let e2 = null;
  this.elements.controls = null;
  const t2 = { id: this.id, seektime: this.config.seekTime, title: this.config.title };
  let i2 = true;
  is.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t2)), this.config.controls || (this.config.controls = []), is.element(this.config.controls) || is.string(this.config.controls) ? e2 = this.config.controls : (e2 = controls.create.call(this, { id: this.id, seektime: this.config.seekTime, speed: this.speed, quality: this.quality, captions: captions.getLabel.call(this) }), i2 = false);
  let s2;
  i2 && is.string(this.config.controls) && (e2 = ((e3) => {
    let i3 = e3;
    return Object.entries(t2).forEach(([e4, t3]) => {
      i3 = replaceAll(i3, `{${e4}}`, t3);
    }), i3;
  })(e2)), is.string(this.config.selectors.controls.container) && (s2 = document.querySelector(this.config.selectors.controls.container)), is.element(s2) || (s2 = this.elements.container);
  if (s2[is.element(e2) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e2), is.element(this.elements.controls) || controls.findElements.call(this), !is.empty(this.elements.buttons)) {
    const e3 = (e4) => {
      const t3 = this.config.classNames.controlPressed;
      Object.defineProperty(e4, "pressed", { enumerable: true, get: () => hasClass(e4, t3), set(i3 = false) {
        toggleClass(e4, t3, i3);
      } });
    };
    Object.values(this.elements.buttons).filter(Boolean).forEach((t3) => {
      is.array(t3) || is.nodeList(t3) ? Array.from(t3).filter(Boolean).forEach(e3) : e3(t3);
    });
  }
  if (browser.isEdge && repaint(s2), this.config.tooltips.controls) {
    const { classNames: e3, selectors: t3 } = this.config, i3 = `${t3.controls.wrapper} ${t3.labels} .${e3.hidden}`, s3 = getElements.call(this, i3);
    Array.from(s3).forEach((e4) => {
      toggleClass(e4, this.config.classNames.hidden, false), toggleClass(e4, this.config.classNames.tooltip, true);
    });
  }
} };
function parseUrl(e2, t2 = true) {
  let i2 = e2;
  if (t2) {
    const e3 = document.createElement("a");
    e3.href = i2, i2 = e3.href;
  }
  try {
    return new URL(i2);
  } catch (e3) {
    return null;
  }
}
function buildUrlParams(e2) {
  const t2 = new URLSearchParams();
  return is.object(e2) && Object.entries(e2).forEach(([e3, i2]) => {
    t2.set(e3, i2);
  }), t2;
}
const captions = { setup() {
  if (!this.supported.ui)
    return;
  if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks)
    return void (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && controls.setCaptionsMenu.call(this));
  if (is.element(this.elements.captions) || (this.elements.captions = createElement("div", getAttributesFromSelector(this.config.selectors.captions)), insertAfter(this.elements.captions, this.elements.wrapper)), browser.isIE && window.URL) {
    const e3 = this.media.querySelectorAll("track");
    Array.from(e3).forEach((e4) => {
      const t3 = e4.getAttribute("src"), i3 = parseUrl(t3);
      i3 !== null && i3.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i3.protocol) && fetch$1(t3, "blob").then((t4) => {
        e4.setAttribute("src", window.URL.createObjectURL(t4));
      }).catch(() => {
        removeElement(e4);
      });
    });
  }
  const e2 = dedupe((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((e3) => e3.split("-")[0]));
  let t2 = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
  t2 === "auto" && ([t2] = e2);
  let i2 = this.storage.get("captions");
  if (is.boolean(i2) || ({ active: i2 } = this.config.captions), Object.assign(this.captions, { toggled: false, active: i2, language: t2, languages: e2 }), this.isHTML5) {
    const e3 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
    on.call(this, this.media.textTracks, e3, captions.update.bind(this));
  }
  setTimeout(captions.update.bind(this), 0);
}, update() {
  const e2 = captions.getTracks.call(this, true), { active: t2, language: i2, meta: s2, currentTrackNode: n2 } = this.captions, r2 = Boolean(e2.find((e3) => e3.language === i2));
  this.isHTML5 && this.isVideo && e2.filter((e3) => !s2.get(e3)).forEach((e3) => {
    this.debug.log("Track added", e3), s2.set(e3, { default: e3.mode === "showing" }), e3.mode === "showing" && (e3.mode = "hidden"), on.call(this, e3, "cuechange", () => captions.updateCues.call(this));
  }), (r2 && this.language !== i2 || !e2.includes(n2)) && (captions.setLanguage.call(this, i2), captions.toggle.call(this, t2 && r2)), toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(e2)), is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && controls.setCaptionsMenu.call(this);
}, toggle(e2, t2 = true) {
  if (!this.supported.ui)
    return;
  const { toggled: i2 } = this.captions, s2 = this.config.classNames.captions.active, n2 = is.nullOrUndefined(e2) ? !i2 : e2;
  if (n2 !== i2) {
    if (t2 || (this.captions.active = n2, this.storage.set({ captions: n2 })), !this.language && n2 && !t2) {
      const e3 = captions.getTracks.call(this), t3 = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
      return this.captions.language = t3.language, void captions.set.call(this, e3.indexOf(t3));
    }
    this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n2), toggleClass(this.elements.container, s2, n2), this.captions.toggled = n2, controls.updateSetting.call(this, "captions"), triggerEvent.call(this, this.media, n2 ? "captionsenabled" : "captionsdisabled");
  }
  setTimeout(() => {
    n2 && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
  });
}, set(e2, t2 = true) {
  const i2 = captions.getTracks.call(this);
  if (e2 !== -1)
    if (is.number(e2))
      if (e2 in i2) {
        if (this.captions.currentTrack !== e2) {
          this.captions.currentTrack = e2;
          const s2 = i2[e2], { language: n2 } = s2 || {};
          this.captions.currentTrackNode = s2, controls.updateSetting.call(this, "captions"), t2 || (this.captions.language = n2, this.storage.set({ language: n2 })), this.isVimeo && this.embed.enableTextTrack(n2), triggerEvent.call(this, this.media, "languagechange");
        }
        captions.toggle.call(this, true, t2), this.isHTML5 && this.isVideo && captions.updateCues.call(this);
      } else
        this.debug.warn("Track not found", e2);
    else
      this.debug.warn("Invalid caption argument", e2);
  else
    captions.toggle.call(this, false, t2);
}, setLanguage(e2, t2 = true) {
  if (!is.string(e2))
    return void this.debug.warn("Invalid language argument", e2);
  const i2 = e2.toLowerCase();
  this.captions.language = i2;
  const s2 = captions.getTracks.call(this), n2 = captions.findTrack.call(this, [i2]);
  captions.set.call(this, s2.indexOf(n2), t2);
}, getTracks(e2 = false) {
  return Array.from((this.media || {}).textTracks || []).filter((t2) => !this.isHTML5 || e2 || this.captions.meta.has(t2)).filter((e3) => ["captions", "subtitles"].includes(e3.kind));
}, findTrack(e2, t2 = false) {
  const i2 = captions.getTracks.call(this), s2 = (e3) => Number((this.captions.meta.get(e3) || {}).default), n2 = Array.from(i2).sort((e3, t3) => s2(t3) - s2(e3));
  let r2;
  return e2.every((e3) => (r2 = n2.find((t3) => t3.language === e3), !r2)), r2 || (t2 ? n2[0] : void 0);
}, getCurrentTrack() {
  return captions.getTracks.call(this)[this.currentTrack];
}, getLabel(e2) {
  let t2 = e2;
  return !is.track(t2) && support.textTracks && this.captions.toggled && (t2 = captions.getCurrentTrack.call(this)), is.track(t2) ? is.empty(t2.label) ? is.empty(t2.language) ? i18n.get("enabled", this.config) : e2.language.toUpperCase() : t2.label : i18n.get("disabled", this.config);
}, updateCues(e2) {
  if (!this.supported.ui)
    return;
  if (!is.element(this.elements.captions))
    return void this.debug.warn("No captions element to render to");
  if (!is.nullOrUndefined(e2) && !Array.isArray(e2))
    return void this.debug.warn("updateCues: Invalid input", e2);
  let t2 = e2;
  if (!t2) {
    const e3 = captions.getCurrentTrack.call(this);
    t2 = Array.from((e3 || {}).activeCues || []).map((e4) => e4.getCueAsHTML()).map(getHTML);
  }
  const i2 = t2.map((e3) => e3.trim()).join("\n");
  if (i2 !== this.elements.captions.innerHTML) {
    emptyElement(this.elements.captions);
    const e3 = createElement("span", getAttributesFromSelector(this.config.selectors.caption));
    e3.innerHTML = i2, this.elements.captions.appendChild(e3), triggerEvent.call(this, this.media, "cuechange");
  }
} }, defaults$5 = { enabled: true, title: "", debug: false, autoplay: false, autopause: true, playsinline: true, seekTime: 10, volume: 1, muted: false, duration: null, displayDuration: true, invertTime: true, toggleInvert: true, ratio: null, clickToPlay: true, hideControls: true, resetOnEnd: false, disableContextMenu: true, loadSprite: true, iconPrefix: "plyr", iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg", blankVideo: "https://cdn.plyr.io/static/blank.mp4", quality: { default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240], forced: false, onChange: null }, loop: { active: false }, speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }, keyboard: { focused: true, global: false }, tooltips: { controls: false, seek: true }, captions: { active: false, language: "auto", update: false }, fullscreen: { enabled: true, fallback: true, iosNative: false }, storage: { enabled: true, key: "plyr" }, controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"], settings: ["captions", "quality", "speed"], i18n: { restart: "Restart", rewind: "Rewind {seektime}s", play: "Play", pause: "Pause", fastForward: "Forward {seektime}s", seek: "Seek", seekLabel: "{currentTime} of {duration}", played: "Played", buffered: "Buffered", currentTime: "Current time", duration: "Duration", volume: "Volume", mute: "Mute", unmute: "Unmute", enableCaptions: "Enable captions", disableCaptions: "Disable captions", download: "Download", enterFullscreen: "Enter fullscreen", exitFullscreen: "Exit fullscreen", frameTitle: "Player for {title}", captions: "Captions", settings: "Settings", pip: "PIP", menuBack: "Go back to previous menu", speed: "Speed", normal: "Normal", quality: "Quality", loop: "Loop", start: "Start", end: "End", all: "All", reset: "Reset", disabled: "Disabled", enabled: "Enabled", advertisement: "Ad", qualityBadge: { 2160: "4K", 1440: "HD", 1080: "HD", 720: "HD", 576: "SD", 480: "SD" } }, urls: { download: null, vimeo: { sdk: "https://player.vimeo.com/api/player.js", iframe: "https://player.vimeo.com/video/{0}?{1}", api: "https://vimeo.com/api/oembed.json?url={0}" }, youtube: { sdk: "https://www.youtube.com/iframe_api", api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}" }, googleIMA: { sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js" } }, listeners: { seek: null, play: null, pause: null, restart: null, rewind: null, fastForward: null, mute: null, volume: null, captions: null, download: null, fullscreen: null, pip: null, airplay: null, speed: null, quality: null, loop: null, language: null }, events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"], selectors: { editable: "input, textarea, select, [contenteditable]", container: ".plyr", controls: { container: null, wrapper: ".plyr__controls" }, labels: "[data-plyr]", buttons: { play: '[data-plyr="play"]', pause: '[data-plyr="pause"]', restart: '[data-plyr="restart"]', rewind: '[data-plyr="rewind"]', fastForward: '[data-plyr="fast-forward"]', mute: '[data-plyr="mute"]', captions: '[data-plyr="captions"]', download: '[data-plyr="download"]', fullscreen: '[data-plyr="fullscreen"]', pip: '[data-plyr="pip"]', airplay: '[data-plyr="airplay"]', settings: '[data-plyr="settings"]', loop: '[data-plyr="loop"]' }, inputs: { seek: '[data-plyr="seek"]', volume: '[data-plyr="volume"]', speed: '[data-plyr="speed"]', language: '[data-plyr="language"]', quality: '[data-plyr="quality"]' }, display: { currentTime: ".plyr__time--current", duration: ".plyr__time--duration", buffer: ".plyr__progress__buffer", loop: ".plyr__progress__loop", volume: ".plyr__volume--display" }, progress: ".plyr__progress", captions: ".plyr__captions", caption: ".plyr__caption" }, classNames: { type: "plyr--{0}", provider: "plyr--{0}", video: "plyr__video-wrapper", embed: "plyr__video-embed", videoFixedRatio: "plyr__video-wrapper--fixed-ratio", embedContainer: "plyr__video-embed__container", poster: "plyr__poster", posterEnabled: "plyr__poster-enabled", ads: "plyr__ads", control: "plyr__control", controlPressed: "plyr__control--pressed", playing: "plyr--playing", paused: "plyr--paused", stopped: "plyr--stopped", loading: "plyr--loading", hover: "plyr--hover", tooltip: "plyr__tooltip", cues: "plyr__cues", hidden: "plyr__sr-only", hideControls: "plyr--hide-controls", isIos: "plyr--is-ios", isTouch: "plyr--is-touch", uiSupported: "plyr--full-ui", noTransition: "plyr--no-transition", display: { time: "plyr__time" }, menu: { value: "plyr__menu__value", badge: "plyr__badge", open: "plyr--menu-open" }, captions: { enabled: "plyr--captions-enabled", active: "plyr--captions-active" }, fullscreen: { enabled: "plyr--fullscreen-enabled", fallback: "plyr--fullscreen-fallback" }, pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" }, airplay: { supported: "plyr--airplay-supported", active: "plyr--airplay-active" }, tabFocus: "plyr__tab-focus", previewThumbnails: { thumbContainer: "plyr__preview-thumb", thumbContainerShown: "plyr__preview-thumb--is-shown", imageContainer: "plyr__preview-thumb__image-container", timeContainer: "plyr__preview-thumb__time-container", scrubbingContainer: "plyr__preview-scrubbing", scrubbingContainerShown: "plyr__preview-scrubbing--is-shown" } }, attributes: { embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" } }, ads: { enabled: false, publisherId: "", tagUrl: "" }, previewThumbnails: { enabled: false, src: "" }, vimeo: { byline: false, portrait: false, title: false, speed: true, transparent: false, customControls: true, referrerPolicy: null, premium: false }, youtube: { rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, customControls: true, noCookie: false } }, pip = { active: "picture-in-picture", inactive: "inline" }, providers = { html5: "html5", youtube: "youtube", vimeo: "vimeo" }, types = { audio: "audio", video: "video" };
function getProviderByUrl(e2) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e2) ? providers.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e2) ? providers.vimeo : null;
}
const noop = () => {
};
class Console {
  constructor(e2 = false) {
    this.enabled = window.console && e2, this.enabled && this.log("Debugging enabled");
  }
  get log() {
    return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
  }
  get warn() {
    return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
  }
  get error() {
    return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
  }
}
class Fullscreen {
  constructor(e2) {
    _defineProperty$1(this, "onChange", () => {
      if (!this.enabled)
        return;
      const e3 = this.player.elements.buttons.fullscreen;
      is.element(e3) && (e3.pressed = this.active);
      const t2 = this.target === this.player.media ? this.target : this.player.elements.container;
      triggerEvent.call(this.player, t2, this.active ? "enterfullscreen" : "exitfullscreen", true);
    }), _defineProperty$1(this, "toggleFallback", (e3 = false) => {
      if (e3 ? this.scrollPosition = { x: window.scrollX || 0, y: window.scrollY || 0 } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e3 ? "hidden" : "", toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e3), browser.isIos) {
        let t2 = document.head.querySelector('meta[name="viewport"]');
        const i2 = "viewport-fit=cover";
        t2 || (t2 = document.createElement("meta"), t2.setAttribute("name", "viewport"));
        const s2 = is.string(t2.content) && t2.content.includes(i2);
        e3 ? (this.cleanupViewport = !s2, s2 || (t2.content += `,${i2}`)) : this.cleanupViewport && (t2.content = t2.content.split(",").filter((e4) => e4.trim() !== i2).join(","));
      }
      this.onChange();
    }), _defineProperty$1(this, "trapFocus", (e3) => {
      if (browser.isIos || !this.active || e3.key !== "Tab" || e3.keyCode !== 9)
        return;
      const t2 = document.activeElement, i2 = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [s2] = i2, n2 = i2[i2.length - 1];
      t2 !== n2 || e3.shiftKey ? t2 === s2 && e3.shiftKey && (n2.focus(), e3.preventDefault()) : (s2.focus(), e3.preventDefault());
    }), _defineProperty$1(this, "update", () => {
      if (this.enabled) {
        let e3;
        e3 = this.forceFallback ? "Fallback (forced)" : Fullscreen.native ? "Native" : "Fallback", this.player.debug.log(`${e3} fullscreen enabled`);
      } else
        this.player.debug.log("Fullscreen not supported and fallback disabled");
      toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
    }), _defineProperty$1(this, "enter", () => {
      this.enabled && (browser.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !Fullscreen.native || this.forceFallback ? this.toggleFallback(true) : this.prefix ? is.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({ navigationUI: "hide" }));
    }), _defineProperty$1(this, "exit", () => {
      if (this.enabled)
        if (browser.isIos && this.player.config.fullscreen.iosNative)
          this.target.webkitExitFullscreen(), silencePromise(this.player.play());
        else if (!Fullscreen.native || this.forceFallback)
          this.toggleFallback(false);
        else if (this.prefix) {
          if (!is.empty(this.prefix)) {
            const e3 = this.prefix === "moz" ? "Cancel" : "Exit";
            document[`${this.prefix}${e3}${this.property}`]();
          }
        } else
          (document.cancelFullScreen || document.exitFullscreen).call(document);
    }), _defineProperty$1(this, "toggle", () => {
      this.active ? this.exit() : this.enter();
    }), this.player = e2, this.prefix = Fullscreen.prefix, this.property = Fullscreen.property, this.scrollPosition = { x: 0, y: 0 }, this.forceFallback = e2.config.fullscreen.fallback === "force", this.player.elements.fullscreen = e2.config.fullscreen.container && closest$1(this.player.elements.container, e2.config.fullscreen.container), on.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
      this.onChange();
    }), on.call(this.player, this.player.elements.container, "dblclick", (e3) => {
      is.element(this.player.elements.controls) && this.player.elements.controls.contains(e3.target) || this.player.listeners.proxy(e3, this.toggle, "fullscreen");
    }), on.call(this, this.player.elements.container, "keydown", (e3) => this.trapFocus(e3)), this.update();
  }
  static get native() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  }
  get usingNative() {
    return Fullscreen.native && !this.forceFallback;
  }
  static get prefix() {
    if (is.function(document.exitFullscreen))
      return "";
    let e2 = "";
    return ["webkit", "moz", "ms"].some((t2) => !(!is.function(document[`${t2}ExitFullscreen`]) && !is.function(document[`${t2}CancelFullScreen`])) && (e2 = t2, true)), e2;
  }
  static get property() {
    return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
  }
  get enabled() {
    return (Fullscreen.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
  }
  get active() {
    if (!this.enabled)
      return false;
    if (!Fullscreen.native || this.forceFallback)
      return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
    const e2 = this.prefix ? document[`${this.prefix}${this.property}Element`] : document.fullscreenElement;
    return e2 && e2.shadowRoot ? e2 === this.target.getRootNode().host : e2 === this.target;
  }
  get target() {
    return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container;
  }
}
function loadImage(e2, t2 = 1) {
  return new Promise((i2, s2) => {
    const n2 = new Image(), r2 = () => {
      delete n2.onload, delete n2.onerror, (n2.naturalWidth >= t2 ? i2 : s2)(n2);
    };
    Object.assign(n2, { onload: r2, onerror: r2, src: e2 });
  });
}
const ui = { addStyleHook() {
  toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true), toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
}, toggleNativeControls(e2 = false) {
  e2 && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
}, build() {
  if (this.listeners.media(), !this.supported.ui)
    return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void ui.toggleNativeControls.call(this, true);
  is.element(this.elements.controls) || (controls.inject.call(this), this.listeners.controls()), ui.toggleNativeControls.call(this), this.isHTML5 && captions.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, controls.updateVolume.call(this), controls.timeUpdate.call(this), ui.checkPlaying.call(this), toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo), toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5), toggleClass(this.elements.container, this.config.classNames.isIos, browser.isIos), toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = true, setTimeout(() => {
    triggerEvent.call(this, this.media, "ready");
  }, 0), ui.setTitle.call(this), this.poster && ui.setPoster.call(this, this.poster, false).catch(() => {
  }), this.config.duration && controls.durationUpdate.call(this);
}, setTitle() {
  let e2 = i18n.get("play", this.config);
  if (is.string(this.config.title) && !is.empty(this.config.title) && (e2 += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((t2) => {
    t2.setAttribute("aria-label", e2);
  }), this.isEmbed) {
    const e3 = getElement.call(this, "iframe");
    if (!is.element(e3))
      return;
    const t2 = is.empty(this.config.title) ? "video" : this.config.title, i2 = i18n.get("frameTitle", this.config);
    e3.setAttribute("title", i2.replace("{title}", t2));
  }
}, togglePoster(e2) {
  toggleClass(this.elements.container, this.config.classNames.posterEnabled, e2);
}, setPoster(e2, t2 = true) {
  return t2 && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e2), this.elements.poster.removeAttribute("hidden"), ready.call(this).then(() => loadImage(e2)).catch((t3) => {
    throw e2 === this.poster && ui.togglePoster.call(this, false), t3;
  }).then(() => {
    if (e2 !== this.poster)
      throw new Error("setPoster cancelled by later call to setPoster");
  }).then(() => (Object.assign(this.elements.poster.style, { backgroundImage: `url('${e2}')`, backgroundSize: "" }), ui.togglePoster.call(this, true), e2)));
}, checkPlaying(e2) {
  toggleClass(this.elements.container, this.config.classNames.playing, this.playing), toggleClass(this.elements.container, this.config.classNames.paused, this.paused), toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e3) => {
    Object.assign(e3, { pressed: this.playing }), e3.setAttribute("aria-label", i18n.get(this.playing ? "pause" : "play", this.config));
  }), is.event(e2) && e2.type === "timeupdate" || ui.toggleControls.call(this);
}, checkLoading(e2) {
  this.loading = ["stalled", "waiting"].includes(e2.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
    toggleClass(this.elements.container, this.config.classNames.loading, this.loading), ui.toggleControls.call(this);
  }, this.loading ? 250 : 0);
}, toggleControls(e2) {
  const { controls: t2 } = this.elements;
  if (t2 && this.config.hideControls) {
    const i2 = this.touch && this.lastSeekTime + 2e3 > Date.now();
    this.toggleControls(Boolean(e2 || this.loading || this.paused || t2.pressed || t2.hover || i2));
  }
}, migrateStyles() {
  Object.values(__spreadValues({}, this.media.style)).filter((e2) => !is.empty(e2) && is.string(e2) && e2.startsWith("--plyr")).forEach((e2) => {
    this.elements.container.style.setProperty(e2, this.media.style.getPropertyValue(e2)), this.media.style.removeProperty(e2);
  }), is.empty(this.media.style) && this.media.removeAttribute("style");
} };
class Listeners {
  constructor(e2) {
    _defineProperty$1(this, "firstTouch", () => {
      const { player: e3 } = this, { elements: t2 } = e3;
      e3.touch = true, toggleClass(t2.container, e3.config.classNames.isTouch, true);
    }), _defineProperty$1(this, "setTabFocus", (e3) => {
      const { player: t2 } = this, { elements: i2 } = t2;
      if (clearTimeout(this.focusTimer), e3.type === "keydown" && e3.which !== 9)
        return;
      e3.type === "keydown" && (this.lastKeyDown = e3.timeStamp);
      const s2 = e3.timeStamp - this.lastKeyDown <= 20;
      (e3.type !== "focus" || s2) && ((() => {
        const e4 = t2.config.classNames.tabFocus;
        toggleClass(getElements.call(t2, `.${e4}`), e4, false);
      })(), e3.type !== "focusout" && (this.focusTimer = setTimeout(() => {
        const e4 = document.activeElement;
        i2.container.contains(e4) && toggleClass(document.activeElement, t2.config.classNames.tabFocus, true);
      }, 10)));
    }), _defineProperty$1(this, "global", (e3 = true) => {
      const { player: t2 } = this;
      t2.config.keyboard.global && toggleListener.call(t2, window, "keydown keyup", this.handleKey, e3, false), toggleListener.call(t2, document.body, "click", this.toggleMenu, e3), once.call(t2, document.body, "touchstart", this.firstTouch), toggleListener.call(t2, document.body, "keydown focus blur focusout", this.setTabFocus, e3, false, true);
    }), _defineProperty$1(this, "container", () => {
      const { player: e3 } = this, { config: t2, elements: i2, timers: s2 } = e3;
      !t2.keyboard.global && t2.keyboard.focused && on.call(e3, i2.container, "keydown keyup", this.handleKey, false), on.call(e3, i2.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (t3) => {
        const { controls: n3 } = i2;
        n3 && t3.type === "enterfullscreen" && (n3.pressed = false, n3.hover = false);
        let r3 = 0;
        ["touchstart", "touchmove", "mousemove"].includes(t3.type) && (ui.toggleControls.call(e3, true), r3 = e3.touch ? 3e3 : 2e3), clearTimeout(s2.controls), s2.controls = setTimeout(() => ui.toggleControls.call(e3, false), r3);
      });
      const n2 = () => {
        if (!e3.isVimeo || e3.config.vimeo.premium)
          return;
        const t3 = i2.wrapper, { active: s3 } = e3.fullscreen, [n3, r3] = getAspectRatio.call(e3), a2 = supportsCSS(`aspect-ratio: ${n3} / ${r3}`);
        if (!s3)
          return void (a2 ? (t3.style.width = null, t3.style.height = null) : (t3.style.maxWidth = null, t3.style.margin = null));
        const [o2, l] = getViewportSize(), c2 = o2 / l > n3 / r3;
        a2 ? (t3.style.width = c2 ? "auto" : "100%", t3.style.height = c2 ? "100%" : "auto") : (t3.style.maxWidth = c2 ? l / r3 * n3 + "px" : null, t3.style.margin = c2 ? "0 auto" : null);
      }, r2 = () => {
        clearTimeout(s2.resized), s2.resized = setTimeout(n2, 50);
      };
      on.call(e3, i2.container, "enterfullscreen exitfullscreen", (t3) => {
        const { target: s3 } = e3.fullscreen;
        if (s3 !== i2.container)
          return;
        if (!e3.isEmbed && is.empty(e3.config.ratio))
          return;
        n2();
        (t3.type === "enterfullscreen" ? on : off).call(e3, window, "resize", r2);
      });
    }), _defineProperty$1(this, "media", () => {
      const { player: e3 } = this, { elements: t2 } = e3;
      if (on.call(e3, e3.media, "timeupdate seeking seeked", (t3) => controls.timeUpdate.call(e3, t3)), on.call(e3, e3.media, "durationchange loadeddata loadedmetadata", (t3) => controls.durationUpdate.call(e3, t3)), on.call(e3, e3.media, "ended", () => {
        e3.isHTML5 && e3.isVideo && e3.config.resetOnEnd && (e3.restart(), e3.pause());
      }), on.call(e3, e3.media, "progress playing seeking seeked", (t3) => controls.updateProgress.call(e3, t3)), on.call(e3, e3.media, "volumechange", (t3) => controls.updateVolume.call(e3, t3)), on.call(e3, e3.media, "playing play pause ended emptied timeupdate", (t3) => ui.checkPlaying.call(e3, t3)), on.call(e3, e3.media, "waiting canplay seeked playing", (t3) => ui.checkLoading.call(e3, t3)), e3.supported.ui && e3.config.clickToPlay && !e3.isAudio) {
        const i3 = getElement.call(e3, `.${e3.config.classNames.video}`);
        if (!is.element(i3))
          return;
        on.call(e3, t2.container, "click", (s2) => {
          ([t2.container, i3].includes(s2.target) || i3.contains(s2.target)) && (e3.touch && e3.config.hideControls || (e3.ended ? (this.proxy(s2, e3.restart, "restart"), this.proxy(s2, () => {
            silencePromise(e3.play());
          }, "play")) : this.proxy(s2, () => {
            silencePromise(e3.togglePlay());
          }, "play")));
        });
      }
      e3.supported.ui && e3.config.disableContextMenu && on.call(e3, t2.wrapper, "contextmenu", (e4) => {
        e4.preventDefault();
      }, false), on.call(e3, e3.media, "volumechange", () => {
        e3.storage.set({ volume: e3.volume, muted: e3.muted });
      }), on.call(e3, e3.media, "ratechange", () => {
        controls.updateSetting.call(e3, "speed"), e3.storage.set({ speed: e3.speed });
      }), on.call(e3, e3.media, "qualitychange", (t3) => {
        controls.updateSetting.call(e3, "quality", null, t3.detail.quality);
      }), on.call(e3, e3.media, "ready qualitychange", () => {
        controls.setDownloadUrl.call(e3);
      });
      const i2 = e3.config.events.concat(["keyup", "keydown"]).join(" ");
      on.call(e3, e3.media, i2, (i3) => {
        let { detail: s2 = {} } = i3;
        i3.type === "error" && (s2 = e3.media.error), triggerEvent.call(e3, t2.container, i3.type, true, s2);
      });
    }), _defineProperty$1(this, "proxy", (e3, t2, i2) => {
      const { player: s2 } = this, n2 = s2.config.listeners[i2];
      let r2 = true;
      is.function(n2) && (r2 = n2.call(s2, e3)), r2 !== false && is.function(t2) && t2.call(s2, e3);
    }), _defineProperty$1(this, "bind", (e3, t2, i2, s2, n2 = true) => {
      const { player: r2 } = this, a2 = r2.config.listeners[s2], o2 = is.function(a2);
      on.call(r2, e3, t2, (e4) => this.proxy(e4, i2, s2), n2 && !o2);
    }), _defineProperty$1(this, "controls", () => {
      const { player: e3 } = this, { elements: t2 } = e3, i2 = browser.isIE ? "change" : "input";
      if (t2.buttons.play && Array.from(t2.buttons.play).forEach((t3) => {
        this.bind(t3, "click", () => {
          silencePromise(e3.togglePlay());
        }, "play");
      }), this.bind(t2.buttons.restart, "click", e3.restart, "restart"), this.bind(t2.buttons.rewind, "click", () => {
        e3.lastSeekTime = Date.now(), e3.rewind();
      }, "rewind"), this.bind(t2.buttons.fastForward, "click", () => {
        e3.lastSeekTime = Date.now(), e3.forward();
      }, "fastForward"), this.bind(t2.buttons.mute, "click", () => {
        e3.muted = !e3.muted;
      }, "mute"), this.bind(t2.buttons.captions, "click", () => e3.toggleCaptions()), this.bind(t2.buttons.download, "click", () => {
        triggerEvent.call(e3, e3.media, "download");
      }, "download"), this.bind(t2.buttons.fullscreen, "click", () => {
        e3.fullscreen.toggle();
      }, "fullscreen"), this.bind(t2.buttons.pip, "click", () => {
        e3.pip = "toggle";
      }, "pip"), this.bind(t2.buttons.airplay, "click", e3.airplay, "airplay"), this.bind(t2.buttons.settings, "click", (t3) => {
        t3.stopPropagation(), t3.preventDefault(), controls.toggleMenu.call(e3, t3);
      }, null, false), this.bind(t2.buttons.settings, "keyup", (t3) => {
        const i3 = t3.which;
        [13, 32].includes(i3) && (i3 !== 13 ? (t3.preventDefault(), t3.stopPropagation(), controls.toggleMenu.call(e3, t3)) : controls.focusFirstMenuItem.call(e3, null, true));
      }, null, false), this.bind(t2.settings.menu, "keydown", (t3) => {
        t3.which === 27 && controls.toggleMenu.call(e3, t3);
      }), this.bind(t2.inputs.seek, "mousedown mousemove", (e4) => {
        const i3 = t2.progress.getBoundingClientRect(), s2 = 100 / i3.width * (e4.pageX - i3.left);
        e4.currentTarget.setAttribute("seek-value", s2);
      }), this.bind(t2.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (t3) => {
        const i3 = t3.currentTarget, s2 = t3.keyCode ? t3.keyCode : t3.which, n2 = "play-on-seeked";
        if (is.keyboardEvent(t3) && s2 !== 39 && s2 !== 37)
          return;
        e3.lastSeekTime = Date.now();
        const r2 = i3.hasAttribute(n2), a2 = ["mouseup", "touchend", "keyup"].includes(t3.type);
        r2 && a2 ? (i3.removeAttribute(n2), silencePromise(e3.play())) : !a2 && e3.playing && (i3.setAttribute(n2, ""), e3.pause());
      }), browser.isIos) {
        const t3 = getElements.call(e3, 'input[type="range"]');
        Array.from(t3).forEach((e4) => this.bind(e4, i2, (e5) => repaint(e5.target)));
      }
      this.bind(t2.inputs.seek, i2, (t3) => {
        const i3 = t3.currentTarget;
        let s2 = i3.getAttribute("seek-value");
        is.empty(s2) && (s2 = i3.value), i3.removeAttribute("seek-value"), e3.currentTime = s2 / i3.max * e3.duration;
      }, "seek"), this.bind(t2.progress, "mouseenter mouseleave mousemove", (t3) => controls.updateSeekTooltip.call(e3, t3)), this.bind(t2.progress, "mousemove touchmove", (t3) => {
        const { previewThumbnails: i3 } = e3;
        i3 && i3.loaded && i3.startMove(t3);
      }), this.bind(t2.progress, "mouseleave touchend click", () => {
        const { previewThumbnails: t3 } = e3;
        t3 && t3.loaded && t3.endMove(false, true);
      }), this.bind(t2.progress, "mousedown touchstart", (t3) => {
        const { previewThumbnails: i3 } = e3;
        i3 && i3.loaded && i3.startScrubbing(t3);
      }), this.bind(t2.progress, "mouseup touchend", (t3) => {
        const { previewThumbnails: i3 } = e3;
        i3 && i3.loaded && i3.endScrubbing(t3);
      }), browser.isWebkit && Array.from(getElements.call(e3, 'input[type="range"]')).forEach((t3) => {
        this.bind(t3, "input", (t4) => controls.updateRangeFill.call(e3, t4.target));
      }), e3.config.toggleInvert && !is.element(t2.display.duration) && this.bind(t2.display.currentTime, "click", () => {
        e3.currentTime !== 0 && (e3.config.invertTime = !e3.config.invertTime, controls.timeUpdate.call(e3));
      }), this.bind(t2.inputs.volume, i2, (t3) => {
        e3.volume = t3.target.value;
      }, "volume"), this.bind(t2.controls, "mouseenter mouseleave", (i3) => {
        t2.controls.hover = !e3.touch && i3.type === "mouseenter";
      }), t2.fullscreen && Array.from(t2.fullscreen.children).filter((e4) => !e4.contains(t2.container)).forEach((i3) => {
        this.bind(i3, "mouseenter mouseleave", (i4) => {
          t2.controls.hover = !e3.touch && i4.type === "mouseenter";
        });
      }), this.bind(t2.controls, "mousedown mouseup touchstart touchend touchcancel", (e4) => {
        t2.controls.pressed = ["mousedown", "touchstart"].includes(e4.type);
      }), this.bind(t2.controls, "focusin", () => {
        const { config: i3, timers: s2 } = e3;
        toggleClass(t2.controls, i3.classNames.noTransition, true), ui.toggleControls.call(e3, true), setTimeout(() => {
          toggleClass(t2.controls, i3.classNames.noTransition, false);
        }, 0);
        const n2 = this.touch ? 3e3 : 4e3;
        clearTimeout(s2.controls), s2.controls = setTimeout(() => ui.toggleControls.call(e3, false), n2);
      }), this.bind(t2.inputs.volume, "wheel", (t3) => {
        const i3 = t3.webkitDirectionInvertedFromDevice, [s2, n2] = [t3.deltaX, -t3.deltaY].map((e4) => i3 ? -e4 : e4), r2 = Math.sign(Math.abs(s2) > Math.abs(n2) ? s2 : n2);
        e3.increaseVolume(r2 / 50);
        const { volume: a2 } = e3.media;
        (r2 === 1 && a2 < 1 || r2 === -1 && a2 > 0) && t3.preventDefault();
      }, "volume", false);
    }), this.player = e2, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
  }
  handleKey(e2) {
    const { player: t2 } = this, { elements: i2 } = t2, s2 = e2.keyCode ? e2.keyCode : e2.which, n2 = e2.type === "keydown", r2 = n2 && s2 === this.lastKey;
    if (e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey)
      return;
    if (!is.number(s2))
      return;
    if (n2) {
      const n3 = document.activeElement;
      if (is.element(n3)) {
        const { editable: s3 } = t2.config.selectors, { seek: r3 } = i2.inputs;
        if (n3 !== r3 && matches(n3, s3))
          return;
        if (e2.which === 32 && matches(n3, 'button, [role^="menuitem"]'))
          return;
      }
      switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(s2) && (e2.preventDefault(), e2.stopPropagation()), s2) {
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          r2 || (t2.currentTime = t2.duration / 10 * (s2 - 48));
          break;
        case 32:
        case 75:
          r2 || silencePromise(t2.togglePlay());
          break;
        case 38:
          t2.increaseVolume(0.1);
          break;
        case 40:
          t2.decreaseVolume(0.1);
          break;
        case 77:
          r2 || (t2.muted = !t2.muted);
          break;
        case 39:
          t2.forward();
          break;
        case 37:
          t2.rewind();
          break;
        case 70:
          t2.fullscreen.toggle();
          break;
        case 67:
          r2 || t2.toggleCaptions();
          break;
        case 76:
          t2.loop = !t2.loop;
      }
      s2 === 27 && !t2.fullscreen.usingNative && t2.fullscreen.active && t2.fullscreen.toggle(), this.lastKey = s2;
    } else
      this.lastKey = null;
  }
  toggleMenu(e2) {
    controls.toggleMenu.call(this.player, e2);
  }
}
function createCommonjsModule(e2, t2) {
  return e2(t2 = { exports: {} }, t2.exports), t2.exports;
}
var loadjs_umd = createCommonjsModule(function(e2, t2) {
  e2.exports = function() {
    var e3 = function() {
    }, t3 = {}, i2 = {}, s2 = {};
    function n2(e4, t4) {
      e4 = e4.push ? e4 : [e4];
      var n3, r3, a3, o3 = [], l2 = e4.length, c3 = l2;
      for (n3 = function(e5, i3) {
        i3.length && o3.push(e5), --c3 || t4(o3);
      }; l2--; )
        r3 = e4[l2], (a3 = i2[r3]) ? n3(r3, a3) : (s2[r3] = s2[r3] || []).push(n3);
    }
    function r2(e4, t4) {
      if (e4) {
        var n3 = s2[e4];
        if (i2[e4] = t4, n3)
          for (; n3.length; )
            n3[0](e4, t4), n3.splice(0, 1);
      }
    }
    function a2(t4, i3) {
      t4.call && (t4 = { success: t4 }), i3.length ? (t4.error || e3)(i3) : (t4.success || e3)(t4);
    }
    function o2(t4, i3, s3, n3) {
      var r3, a3, l2 = document, c3 = s3.async, u2 = (s3.numRetries || 0) + 1, d = s3.before || e3, h2 = t4.replace(/[\?|#].*$/, ""), m = t4.replace(/^(css|img)!/, "");
      n3 = n3 || 0, /(^css!|\.css$)/.test(h2) ? ((a3 = l2.createElement("link")).rel = "stylesheet", a3.href = m, (r3 = "hideFocus" in a3) && a3.relList && (r3 = 0, a3.rel = "preload", a3.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h2) ? (a3 = l2.createElement("img")).src = m : ((a3 = l2.createElement("script")).src = t4, a3.async = c3 === void 0 || c3), a3.onload = a3.onerror = a3.onbeforeload = function(e4) {
        var l3 = e4.type[0];
        if (r3)
          try {
            a3.sheet.cssText.length || (l3 = "e");
          } catch (e5) {
            e5.code != 18 && (l3 = "e");
          }
        if (l3 == "e") {
          if ((n3 += 1) < u2)
            return o2(t4, i3, s3, n3);
        } else if (a3.rel == "preload" && a3.as == "style")
          return a3.rel = "stylesheet";
        i3(t4, l3, e4.defaultPrevented);
      }, d(t4, a3) !== false && l2.head.appendChild(a3);
    }
    function l(e4, t4, i3) {
      var s3, n3, r3 = (e4 = e4.push ? e4 : [e4]).length, a3 = r3, l2 = [];
      for (s3 = function(e5, i4, s4) {
        if (i4 == "e" && l2.push(e5), i4 == "b") {
          if (!s4)
            return;
          l2.push(e5);
        }
        --r3 || t4(l2);
      }, n3 = 0; n3 < a3; n3++)
        o2(e4[n3], s3, i3);
    }
    function c2(e4, i3, s3) {
      var n3, o3;
      if (i3 && i3.trim && (n3 = i3), o3 = (n3 ? s3 : i3) || {}, n3) {
        if (n3 in t3)
          throw "LoadJS";
        t3[n3] = true;
      }
      function c3(t4, i4) {
        l(e4, function(e5) {
          a2(o3, e5), t4 && a2({ success: t4, error: i4 }, e5), r2(n3, e5);
        }, o3);
      }
      if (o3.returnPromise)
        return new Promise(c3);
      c3();
    }
    return c2.ready = function(e4, t4) {
      return n2(e4, function(e5) {
        a2(t4, e5);
      }), c2;
    }, c2.done = function(e4) {
      r2(e4, []);
    }, c2.reset = function() {
      t3 = {}, i2 = {}, s2 = {};
    }, c2.isDefined = function(e4) {
      return e4 in t3;
    }, c2;
  }();
});
function loadScript(e2) {
  return new Promise((t2, i2) => {
    loadjs_umd(e2, { success: t2, error: i2 });
  });
}
function parseId$1(e2) {
  if (is.empty(e2))
    return null;
  if (is.number(Number(e2)))
    return e2;
  return e2.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e2;
}
function assurePlaybackState$1(e2) {
  e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, triggerEvent.call(this, this.media, e2 ? "play" : "pause"));
}
const vimeo = { setup() {
  const e2 = this;
  toggleClass(e2.elements.wrapper, e2.config.classNames.embed, true), e2.options.speed = e2.config.speed.options, setAspectRatio.call(e2), is.object(window.Vimeo) ? vimeo.ready.call(e2) : loadScript(e2.config.urls.vimeo.sdk).then(() => {
    vimeo.ready.call(e2);
  }).catch((t2) => {
    e2.debug.warn("Vimeo SDK (player.js) failed to load", t2);
  });
}, ready() {
  const e2 = this, t2 = e2.config.vimeo, _a = t2, { premium: i2, referrerPolicy: s2 } = _a, n2 = __objRest(_a, ["premium", "referrerPolicy"]);
  i2 && Object.assign(n2, { controls: false, sidedock: false });
  const r2 = buildUrlParams(__spreadValues({ loop: e2.config.loop.active, autoplay: e2.autoplay, muted: e2.muted, gesture: "media", playsinline: !this.config.fullscreen.iosNative }, n2));
  let a2 = e2.media.getAttribute("src");
  is.empty(a2) && (a2 = e2.media.getAttribute(e2.config.attributes.embed.id));
  const o2 = parseId$1(a2), l = createElement("iframe"), c2 = format(e2.config.urls.vimeo.iframe, o2, r2);
  if (l.setAttribute("src", c2), l.setAttribute("allowfullscreen", ""), l.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), is.empty(s2) || l.setAttribute("referrerPolicy", s2), i2 || !t2.customControls)
    l.setAttribute("data-poster", e2.poster), e2.media = replaceElement(l, e2.media);
  else {
    const t3 = createElement("div", { class: e2.config.classNames.embedContainer, "data-poster": e2.poster });
    t3.appendChild(l), e2.media = replaceElement(t3, e2.media);
  }
  t2.customControls || fetch$1(format(e2.config.urls.vimeo.api, c2)).then((t3) => {
    !is.empty(t3) && t3.thumbnail_url && ui.setPoster.call(e2, t3.thumbnail_url).catch(() => {
    });
  }), e2.embed = new window.Vimeo.Player(l, { autopause: e2.config.autopause, muted: e2.muted }), e2.media.paused = true, e2.media.currentTime = 0, e2.supported.ui && e2.embed.disableTextTrack(), e2.media.play = () => (assurePlaybackState$1.call(e2, true), e2.embed.play()), e2.media.pause = () => (assurePlaybackState$1.call(e2, false), e2.embed.pause()), e2.media.stop = () => {
    e2.pause(), e2.currentTime = 0;
  };
  let { currentTime: u2 } = e2.media;
  Object.defineProperty(e2.media, "currentTime", { get: () => u2, set(t3) {
    const { embed: i3, media: s3, paused: n3, volume: r3 } = e2, a3 = n3 && !i3.hasPlayed;
    s3.seeking = true, triggerEvent.call(e2, s3, "seeking"), Promise.resolve(a3 && i3.setVolume(0)).then(() => i3.setCurrentTime(t3)).then(() => a3 && i3.pause()).then(() => a3 && i3.setVolume(r3)).catch(() => {
    });
  } });
  let d = e2.config.speed.selected;
  Object.defineProperty(e2.media, "playbackRate", { get: () => d, set(t3) {
    e2.embed.setPlaybackRate(t3).then(() => {
      d = t3, triggerEvent.call(e2, e2.media, "ratechange");
    }).catch(() => {
      e2.options.speed = [1];
    });
  } });
  let { volume: h2 } = e2.config;
  Object.defineProperty(e2.media, "volume", { get: () => h2, set(t3) {
    e2.embed.setVolume(t3).then(() => {
      h2 = t3, triggerEvent.call(e2, e2.media, "volumechange");
    });
  } });
  let { muted: m } = e2.config;
  Object.defineProperty(e2.media, "muted", { get: () => m, set(t3) {
    const i3 = !!is.boolean(t3) && t3;
    e2.embed.setVolume(i3 ? 0 : e2.config.volume).then(() => {
      m = i3, triggerEvent.call(e2, e2.media, "volumechange");
    });
  } });
  let p2, { loop: g } = e2.config;
  Object.defineProperty(e2.media, "loop", { get: () => g, set(t3) {
    const i3 = is.boolean(t3) ? t3 : e2.config.loop.active;
    e2.embed.setLoop(i3).then(() => {
      g = i3;
    });
  } }), e2.embed.getVideoUrl().then((t3) => {
    p2 = t3, controls.setDownloadUrl.call(e2);
  }).catch((e3) => {
    this.debug.warn(e3);
  }), Object.defineProperty(e2.media, "currentSrc", { get: () => p2 }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration }), Promise.all([e2.embed.getVideoWidth(), e2.embed.getVideoHeight()]).then((t3) => {
    const [i3, s3] = t3;
    e2.embed.ratio = roundAspectRatio(i3, s3), setAspectRatio.call(this);
  }), e2.embed.setAutopause(e2.config.autopause).then((t3) => {
    e2.config.autopause = t3;
  }), e2.embed.getVideoTitle().then((t3) => {
    e2.config.title = t3, ui.setTitle.call(this);
  }), e2.embed.getCurrentTime().then((t3) => {
    u2 = t3, triggerEvent.call(e2, e2.media, "timeupdate");
  }), e2.embed.getDuration().then((t3) => {
    e2.media.duration = t3, triggerEvent.call(e2, e2.media, "durationchange");
  }), e2.embed.getTextTracks().then((t3) => {
    e2.media.textTracks = t3, captions.setup.call(e2);
  }), e2.embed.on("cuechange", ({ cues: t3 = [] }) => {
    const i3 = t3.map((e3) => stripHTML(e3.text));
    captions.updateCues.call(e2, i3);
  }), e2.embed.on("loaded", () => {
    if (e2.embed.getPaused().then((t3) => {
      assurePlaybackState$1.call(e2, !t3), t3 || triggerEvent.call(e2, e2.media, "playing");
    }), is.element(e2.embed.element) && e2.supported.ui) {
      e2.embed.element.setAttribute("tabindex", -1);
    }
  }), e2.embed.on("bufferstart", () => {
    triggerEvent.call(e2, e2.media, "waiting");
  }), e2.embed.on("bufferend", () => {
    triggerEvent.call(e2, e2.media, "playing");
  }), e2.embed.on("play", () => {
    assurePlaybackState$1.call(e2, true), triggerEvent.call(e2, e2.media, "playing");
  }), e2.embed.on("pause", () => {
    assurePlaybackState$1.call(e2, false);
  }), e2.embed.on("timeupdate", (t3) => {
    e2.media.seeking = false, u2 = t3.seconds, triggerEvent.call(e2, e2.media, "timeupdate");
  }), e2.embed.on("progress", (t3) => {
    e2.media.buffered = t3.percent, triggerEvent.call(e2, e2.media, "progress"), parseInt(t3.percent, 10) === 1 && triggerEvent.call(e2, e2.media, "canplaythrough"), e2.embed.getDuration().then((t4) => {
      t4 !== e2.media.duration && (e2.media.duration = t4, triggerEvent.call(e2, e2.media, "durationchange"));
    });
  }), e2.embed.on("seeked", () => {
    e2.media.seeking = false, triggerEvent.call(e2, e2.media, "seeked");
  }), e2.embed.on("ended", () => {
    e2.media.paused = true, triggerEvent.call(e2, e2.media, "ended");
  }), e2.embed.on("error", (t3) => {
    e2.media.error = t3, triggerEvent.call(e2, e2.media, "error");
  }), t2.customControls && setTimeout(() => ui.build.call(e2), 0);
} };
function parseId(e2) {
  if (is.empty(e2))
    return null;
  return e2.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e2;
}
function assurePlaybackState(e2) {
  e2 && !this.embed.hasPlayed && (this.embed.hasPlayed = true), this.media.paused === e2 && (this.media.paused = !e2, triggerEvent.call(this, this.media, e2 ? "play" : "pause"));
}
function getHost(e2) {
  return e2.noCookie ? "https://www.youtube-nocookie.com" : window.location.protocol === "http:" ? "http://www.youtube.com" : void 0;
}
const youtube = { setup() {
  if (toggleClass(this.elements.wrapper, this.config.classNames.embed, true), is.object(window.YT) && is.function(window.YT.Player))
    youtube.ready.call(this);
  else {
    const e2 = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      is.function(e2) && e2(), youtube.ready.call(this);
    }, loadScript(this.config.urls.youtube.sdk).catch((e3) => {
      this.debug.warn("YouTube API failed to load", e3);
    });
  }
}, getTitle(e2) {
  fetch$1(format(this.config.urls.youtube.api, e2)).then((e3) => {
    if (is.object(e3)) {
      const { title: t2, height: i2, width: s2 } = e3;
      this.config.title = t2, ui.setTitle.call(this), this.embed.ratio = roundAspectRatio(s2, i2);
    }
    setAspectRatio.call(this);
  }).catch(() => {
    setAspectRatio.call(this);
  });
}, ready() {
  const e2 = this, t2 = e2.config.youtube, i2 = e2.media && e2.media.getAttribute("id");
  if (!is.empty(i2) && i2.startsWith("youtube-"))
    return;
  let s2 = e2.media.getAttribute("src");
  is.empty(s2) && (s2 = e2.media.getAttribute(this.config.attributes.embed.id));
  const n2 = parseId(s2), r2 = createElement("div", { id: generateId(e2.provider), "data-poster": t2.customControls ? e2.poster : void 0 });
  if (e2.media = replaceElement(r2, e2.media), t2.customControls) {
    const t3 = (e3) => `https://i.ytimg.com/vi/${n2}/${e3}default.jpg`;
    loadImage(t3("maxres"), 121).catch(() => loadImage(t3("sd"), 121)).catch(() => loadImage(t3("hq"))).then((t4) => ui.setPoster.call(e2, t4.src)).then((t4) => {
      t4.includes("maxres") || (e2.elements.poster.style.backgroundSize = "cover");
    }).catch(() => {
    });
  }
  e2.embed = new window.YT.Player(e2.media, { videoId: n2, host: getHost(t2), playerVars: extend$1({}, { autoplay: e2.config.autoplay ? 1 : 0, hl: e2.config.hl, controls: e2.supported.ui && t2.customControls ? 0 : 1, disablekb: 1, playsinline: e2.config.fullscreen.iosNative ? 0 : 1, cc_load_policy: e2.captions.active ? 1 : 0, cc_lang_pref: e2.config.captions.language, widget_referrer: window ? window.location.href : null }, t2), events: { onError(t3) {
    if (!e2.media.error) {
      const i3 = t3.data, s3 = { 2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.", 5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.", 100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.", 101: "The owner of the requested video does not allow it to be played in embedded players.", 150: "The owner of the requested video does not allow it to be played in embedded players." }[i3] || "An unknown error occured";
      e2.media.error = { code: i3, message: s3 }, triggerEvent.call(e2, e2.media, "error");
    }
  }, onPlaybackRateChange(t3) {
    const i3 = t3.target;
    e2.media.playbackRate = i3.getPlaybackRate(), triggerEvent.call(e2, e2.media, "ratechange");
  }, onReady(i3) {
    if (is.function(e2.media.play))
      return;
    const s3 = i3.target;
    youtube.getTitle.call(e2, n2), e2.media.play = () => {
      assurePlaybackState.call(e2, true), s3.playVideo();
    }, e2.media.pause = () => {
      assurePlaybackState.call(e2, false), s3.pauseVideo();
    }, e2.media.stop = () => {
      s3.stopVideo();
    }, e2.media.duration = s3.getDuration(), e2.media.paused = true, e2.media.currentTime = 0, Object.defineProperty(e2.media, "currentTime", { get: () => Number(s3.getCurrentTime()), set(t3) {
      e2.paused && !e2.embed.hasPlayed && e2.embed.mute(), e2.media.seeking = true, triggerEvent.call(e2, e2.media, "seeking"), s3.seekTo(t3);
    } }), Object.defineProperty(e2.media, "playbackRate", { get: () => s3.getPlaybackRate(), set(e3) {
      s3.setPlaybackRate(e3);
    } });
    let { volume: r3 } = e2.config;
    Object.defineProperty(e2.media, "volume", { get: () => r3, set(t3) {
      r3 = t3, s3.setVolume(100 * r3), triggerEvent.call(e2, e2.media, "volumechange");
    } });
    let { muted: a2 } = e2.config;
    Object.defineProperty(e2.media, "muted", { get: () => a2, set(t3) {
      const i4 = is.boolean(t3) ? t3 : a2;
      a2 = i4, s3[i4 ? "mute" : "unMute"](), s3.setVolume(100 * r3), triggerEvent.call(e2, e2.media, "volumechange");
    } }), Object.defineProperty(e2.media, "currentSrc", { get: () => s3.getVideoUrl() }), Object.defineProperty(e2.media, "ended", { get: () => e2.currentTime === e2.duration });
    const o2 = s3.getAvailablePlaybackRates();
    e2.options.speed = o2.filter((t3) => e2.config.speed.options.includes(t3)), e2.supported.ui && t2.customControls && e2.media.setAttribute("tabindex", -1), triggerEvent.call(e2, e2.media, "timeupdate"), triggerEvent.call(e2, e2.media, "durationchange"), clearInterval(e2.timers.buffering), e2.timers.buffering = setInterval(() => {
      e2.media.buffered = s3.getVideoLoadedFraction(), (e2.media.lastBuffered === null || e2.media.lastBuffered < e2.media.buffered) && triggerEvent.call(e2, e2.media, "progress"), e2.media.lastBuffered = e2.media.buffered, e2.media.buffered === 1 && (clearInterval(e2.timers.buffering), triggerEvent.call(e2, e2.media, "canplaythrough"));
    }, 200), t2.customControls && setTimeout(() => ui.build.call(e2), 50);
  }, onStateChange(i3) {
    const s3 = i3.target;
    clearInterval(e2.timers.playing);
    switch (e2.media.seeking && [1, 2].includes(i3.data) && (e2.media.seeking = false, triggerEvent.call(e2, e2.media, "seeked")), i3.data) {
      case -1:
        triggerEvent.call(e2, e2.media, "timeupdate"), e2.media.buffered = s3.getVideoLoadedFraction(), triggerEvent.call(e2, e2.media, "progress");
        break;
      case 0:
        assurePlaybackState.call(e2, false), e2.media.loop ? (s3.stopVideo(), s3.playVideo()) : triggerEvent.call(e2, e2.media, "ended");
        break;
      case 1:
        t2.customControls && !e2.config.autoplay && e2.media.paused && !e2.embed.hasPlayed ? e2.media.pause() : (assurePlaybackState.call(e2, true), triggerEvent.call(e2, e2.media, "playing"), e2.timers.playing = setInterval(() => {
          triggerEvent.call(e2, e2.media, "timeupdate");
        }, 50), e2.media.duration !== s3.getDuration() && (e2.media.duration = s3.getDuration(), triggerEvent.call(e2, e2.media, "durationchange")));
        break;
      case 2:
        e2.muted || e2.embed.unMute(), assurePlaybackState.call(e2, false);
        break;
      case 3:
        triggerEvent.call(e2, e2.media, "waiting");
    }
    triggerEvent.call(e2, e2.elements.container, "statechange", false, { code: i3.data });
  } } });
} }, media = { setup() {
  this.media ? (toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true), toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true), this.isEmbed && toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true), this.isVideo && (this.elements.wrapper = createElement("div", { class: this.config.classNames.video }), wrap(this.media, this.elements.wrapper), this.elements.poster = createElement("div", { class: this.config.classNames.poster }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? html5.setup.call(this) : this.isYouTube ? youtube.setup.call(this) : this.isVimeo && vimeo.setup.call(this)) : this.debug.warn("No media element found!");
} };
class Ads {
  constructor(e2) {
    _defineProperty$1(this, "load", () => {
      this.enabled && (is.object(window.google) && is.object(window.google.ima) ? this.ready() : loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
        this.ready();
      }).catch(() => {
        this.trigger("error", new Error("Google IMA SDK failed to load"));
      }));
    }), _defineProperty$1(this, "ready", () => {
      var e3;
      this.enabled || ((e3 = this).manager && e3.manager.destroy(), e3.elements.displayContainer && e3.elements.displayContainer.destroy(), e3.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
        this.clearSafetyTimer("onAdsManagerLoaded()");
      }), this.listeners(), this.setupIMA();
    }), _defineProperty$1(this, "setupIMA", () => {
      this.elements.container = createElement("div", { class: this.player.config.classNames.ads }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (e3) => this.onAdsManagerLoaded(e3), false), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e3) => this.onAdError(e3), false), this.requestAds();
    }), _defineProperty$1(this, "requestAds", () => {
      const { container: e3 } = this.player.elements;
      try {
        const t2 = new google.ima.AdsRequest();
        t2.adTagUrl = this.tagUrl, t2.linearAdSlotWidth = e3.offsetWidth, t2.linearAdSlotHeight = e3.offsetHeight, t2.nonLinearAdSlotWidth = e3.offsetWidth, t2.nonLinearAdSlotHeight = e3.offsetHeight, t2.forceNonLinearFullSlot = false, t2.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t2);
      } catch (e4) {
        this.onAdError(e4);
      }
    }), _defineProperty$1(this, "pollCountdown", (e3 = false) => {
      if (!e3)
        return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
      this.countdownTimer = setInterval(() => {
        const e4 = formatTime(Math.max(this.manager.getRemainingTime(), 0)), t2 = `${i18n.get("advertisement", this.player.config)} - ${e4}`;
        this.elements.container.setAttribute("data-badge-text", t2);
      }, 100);
    }), _defineProperty$1(this, "onAdsManagerLoaded", (e3) => {
      if (!this.enabled)
        return;
      const t2 = new google.ima.AdsRenderingSettings();
      t2.restoreCustomPlaybackStateOnAdBreakComplete = true, t2.enablePreloading = true, this.manager = e3.getAdsManager(this.player, t2), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (e4) => this.onAdError(e4)), Object.keys(google.ima.AdEvent.Type).forEach((e4) => {
        this.manager.addEventListener(google.ima.AdEvent.Type[e4], (e5) => this.onAdEvent(e5));
      }), this.trigger("loaded");
    }), _defineProperty$1(this, "addCuePoints", () => {
      is.empty(this.cuePoints) || this.cuePoints.forEach((e3) => {
        if (e3 !== 0 && e3 !== -1 && e3 < this.player.duration) {
          const t2 = this.player.elements.progress;
          if (is.element(t2)) {
            const i2 = 100 / this.player.duration * e3, s2 = createElement("span", { class: this.player.config.classNames.cues });
            s2.style.left = `${i2.toString()}%`, t2.appendChild(s2);
          }
        }
      });
    }), _defineProperty$1(this, "onAdEvent", (e3) => {
      const { container: t2 } = this.player.elements, i2 = e3.getAd(), s2 = e3.getAdData();
      switch (((e4) => {
        triggerEvent.call(this.player, this.player.media, `ads${e4.replace(/_/g, "").toLowerCase()}`);
      })(e3.type), e3.type) {
        case google.ima.AdEvent.Type.LOADED:
          this.trigger("loaded"), this.pollCountdown(true), i2.isLinear() || (i2.width = t2.offsetWidth, i2.height = t2.offsetHeight);
          break;
        case google.ima.AdEvent.Type.STARTED:
          this.manager.setVolume(this.player.volume);
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          this.player.ended ? this.loadAds() : this.loader.contentComplete();
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          this.pauseContent();
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          this.pollCountdown(), this.resumeContent();
          break;
        case google.ima.AdEvent.Type.LOG:
          s2.adError && this.player.debug.warn(`Non-fatal ad error: ${s2.adError.getMessage()}`);
      }
    }), _defineProperty$1(this, "onAdError", (e3) => {
      this.cancel(), this.player.debug.warn("Ads error", e3);
    }), _defineProperty$1(this, "listeners", () => {
      const { container: e3 } = this.player.elements;
      let t2;
      this.player.on("canplay", () => {
        this.addCuePoints();
      }), this.player.on("ended", () => {
        this.loader.contentComplete();
      }), this.player.on("timeupdate", () => {
        t2 = this.player.currentTime;
      }), this.player.on("seeked", () => {
        const e4 = this.player.currentTime;
        is.empty(this.cuePoints) || this.cuePoints.forEach((i2, s2) => {
          t2 < i2 && i2 < e4 && (this.manager.discardAdBreak(), this.cuePoints.splice(s2, 1));
        });
      }), window.addEventListener("resize", () => {
        this.manager && this.manager.resize(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL);
      });
    }), _defineProperty$1(this, "play", () => {
      const { container: e3 } = this.player.elements;
      this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
        this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
        try {
          this.initialized || (this.manager.init(e3.offsetWidth, e3.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = true;
        } catch (e4) {
          this.onAdError(e4);
        }
      }).catch(() => {
      });
    }), _defineProperty$1(this, "resumeContent", () => {
      this.elements.container.style.zIndex = "", this.playing = false, silencePromise(this.player.media.play());
    }), _defineProperty$1(this, "pauseContent", () => {
      this.elements.container.style.zIndex = 3, this.playing = true, this.player.media.pause();
    }), _defineProperty$1(this, "cancel", () => {
      this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
    }), _defineProperty$1(this, "loadAds", () => {
      this.managerPromise.then(() => {
        this.manager && this.manager.destroy(), this.managerPromise = new Promise((e3) => {
          this.on("loaded", e3), this.player.debug.log(this.manager);
        }), this.initialized = false, this.requestAds();
      }).catch(() => {
      });
    }), _defineProperty$1(this, "trigger", (e3, ...t2) => {
      const i2 = this.events[e3];
      is.array(i2) && i2.forEach((e4) => {
        is.function(e4) && e4.apply(this, t2);
      });
    }), _defineProperty$1(this, "on", (e3, t2) => (is.array(this.events[e3]) || (this.events[e3] = []), this.events[e3].push(t2), this)), _defineProperty$1(this, "startSafetyTimer", (e3, t2) => {
      this.player.debug.log(`Safety timer invoked from: ${t2}`), this.safetyTimer = setTimeout(() => {
        this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
      }, e3);
    }), _defineProperty$1(this, "clearSafetyTimer", (e3) => {
      is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e3}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
    }), this.player = e2, this.config = e2.config.ads, this.playing = false, this.initialized = false, this.elements = { container: null, displayContainer: null }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e3, t2) => {
      this.on("loaded", e3), this.on("error", t2);
    }), this.load();
  }
  get enabled() {
    const { config: e2 } = this;
    return this.player.isHTML5 && this.player.isVideo && e2.enabled && (!is.empty(e2.publisherId) || is.url(e2.tagUrl));
  }
  get tagUrl() {
    const { config: e2 } = this;
    if (is.url(e2.tagUrl))
      return e2.tagUrl;
    return `https://go.aniview.com/api/adserver6/vast/?${buildUrlParams({ AV_PUBLISHERID: "58c25bb0073ef448b1087ad6", AV_CHANNELID: "5a0458dc28a06145e4519d21", AV_URL: window.location.hostname, cb: Date.now(), AV_WIDTH: 640, AV_HEIGHT: 480, AV_CDIM2: e2.publisherId })}`;
  }
}
const parseVtt = (e2) => {
  const t2 = [];
  return e2.split(/\r\n\r\n|\n\n|\r\r/).forEach((e3) => {
    const i2 = {};
    e3.split(/\r\n|\n|\r/).forEach((e4) => {
      if (is.number(i2.startTime)) {
        if (!is.empty(e4.trim()) && is.empty(i2.text)) {
          const t3 = e4.trim().split("#xywh=");
          [i2.text] = t3, t3[1] && ([i2.x, i2.y, i2.w, i2.h] = t3[1].split(","));
        }
      } else {
        const t3 = e4.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
        t3 && (i2.startTime = 60 * Number(t3[1] || 0) * 60 + 60 * Number(t3[2]) + Number(t3[3]) + Number(`0.${t3[4]}`), i2.endTime = 60 * Number(t3[6] || 0) * 60 + 60 * Number(t3[7]) + Number(t3[8]) + Number(`0.${t3[9]}`));
      }
    }), i2.text && t2.push(i2);
  }), t2;
}, fitRatio = (e2, t2) => {
  const i2 = {};
  return e2 > t2.width / t2.height ? (i2.width = t2.width, i2.height = 1 / e2 * t2.width) : (i2.height = t2.height, i2.width = e2 * t2.height), i2;
};
class PreviewThumbnails {
  constructor(e2) {
    _defineProperty$1(this, "load", () => {
      this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
        this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = true);
      });
    }), _defineProperty$1(this, "getThumbnails", () => new Promise((e3) => {
      const { src: t2 } = this.player.config.previewThumbnails;
      if (is.empty(t2))
        throw new Error("Missing previewThumbnails.src config attribute");
      const i2 = () => {
        this.thumbnails.sort((e4, t3) => e4.height - t3.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e3();
      };
      if (is.function(t2))
        t2((e4) => {
          this.thumbnails = e4, i2();
        });
      else {
        const e4 = (is.string(t2) ? [t2] : t2).map((e5) => this.getThumbnail(e5));
        Promise.all(e4).then(i2);
      }
    })), _defineProperty$1(this, "getThumbnail", (e3) => new Promise((t2) => {
      fetch$1(e3).then((i2) => {
        const s2 = { frames: parseVtt(i2), height: null, urlPrefix: "" };
        s2.frames[0].text.startsWith("/") || s2.frames[0].text.startsWith("http://") || s2.frames[0].text.startsWith("https://") || (s2.urlPrefix = e3.substring(0, e3.lastIndexOf("/") + 1));
        const n2 = new Image();
        n2.onload = () => {
          s2.height = n2.naturalHeight, s2.width = n2.naturalWidth, this.thumbnails.push(s2), t2();
        }, n2.src = s2.urlPrefix + s2.frames[0].text;
      });
    })), _defineProperty$1(this, "startMove", (e3) => {
      if (this.loaded && is.event(e3) && ["touchmove", "mousemove"].includes(e3.type) && this.player.media.duration) {
        if (e3.type === "touchmove")
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        else {
          const t2 = this.player.elements.progress.getBoundingClientRect(), i2 = 100 / t2.width * (e3.pageX - t2.left);
          this.seekTime = this.player.media.duration * (i2 / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e3.pageX, this.elements.thumb.time.innerText = formatTime(this.seekTime);
        }
        this.showImageAtCurrentTime();
      }
    }), _defineProperty$1(this, "endMove", () => {
      this.toggleThumbContainer(false, true);
    }), _defineProperty$1(this, "startScrubbing", (e3) => {
      (is.nullOrUndefined(e3.button) || e3.button === false || e3.button === 0) && (this.mouseDown = true, this.player.media.duration && (this.toggleScrubbingContainer(true), this.toggleThumbContainer(false, true), this.showImageAtCurrentTime()));
    }), _defineProperty$1(this, "endScrubbing", () => {
      this.mouseDown = false, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(false) : once.call(this.player, this.player.media, "timeupdate", () => {
        this.mouseDown || this.toggleScrubbingContainer(false);
      });
    }), _defineProperty$1(this, "listeners", () => {
      this.player.on("play", () => {
        this.toggleThumbContainer(false, true);
      }), this.player.on("seeked", () => {
        this.toggleThumbContainer(false);
      }), this.player.on("timeupdate", () => {
        this.lastTime = this.player.media.currentTime;
      });
    }), _defineProperty$1(this, "render", () => {
      this.elements.thumb.container = createElement("div", { class: this.player.config.classNames.previewThumbnails.thumbContainer }), this.elements.thumb.imageContainer = createElement("div", { class: this.player.config.classNames.previewThumbnails.imageContainer }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
      const e3 = createElement("div", { class: this.player.config.classNames.previewThumbnails.timeContainer });
      this.elements.thumb.time = createElement("span", {}, "00:00"), e3.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e3), is.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = createElement("div", { class: this.player.config.classNames.previewThumbnails.scrubbingContainer }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
    }), _defineProperty$1(this, "destroy", () => {
      this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
    }), _defineProperty$1(this, "showImageAtCurrentTime", () => {
      this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
      const e3 = this.thumbnails[0].frames.findIndex((e4) => this.seekTime >= e4.startTime && this.seekTime <= e4.endTime), t2 = e3 >= 0;
      let i2 = 0;
      this.mouseDown || this.toggleThumbContainer(t2), t2 && (this.thumbnails.forEach((t3, s2) => {
        this.loadedImages.includes(t3.frames[e3].text) && (i2 = s2);
      }), e3 !== this.showingThumb && (this.showingThumb = e3, this.loadImage(i2)));
    }), _defineProperty$1(this, "loadImage", (e3 = 0) => {
      const t2 = this.showingThumb, i2 = this.thumbnails[e3], { urlPrefix: s2 } = i2, n2 = i2.frames[t2], r2 = i2.frames[t2].text, a2 = s2 + r2;
      if (this.currentImageElement && this.currentImageElement.dataset.filename === r2)
        this.showImage(this.currentImageElement, n2, e3, t2, r2, false), this.currentImageElement.dataset.index = t2, this.removeOldImages(this.currentImageElement);
      else {
        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
        const i3 = new Image();
        i3.src = a2, i3.dataset.index = t2, i3.dataset.filename = r2, this.showingThumbFilename = r2, this.player.debug.log(`Loading image: ${a2}`), i3.onload = () => this.showImage(i3, n2, e3, t2, r2, true), this.loadingImage = i3, this.removeOldImages(i3);
      }
    }), _defineProperty$1(this, "showImage", (e3, t2, i2, s2, n2, r2 = true) => {
      this.player.debug.log(`Showing thumb: ${n2}. num: ${s2}. qual: ${i2}. newimg: ${r2}`), this.setImageSizeAndOffset(e3, t2), r2 && (this.currentImageContainer.appendChild(e3), this.currentImageElement = e3, this.loadedImages.includes(n2) || this.loadedImages.push(n2)), this.preloadNearby(s2, true).then(this.preloadNearby(s2, false)).then(this.getHigherQuality(i2, e3, t2, n2));
    }), _defineProperty$1(this, "removeOldImages", (e3) => {
      Array.from(this.currentImageContainer.children).forEach((t2) => {
        if (t2.tagName.toLowerCase() !== "img")
          return;
        const i2 = this.usingSprites ? 500 : 1e3;
        if (t2.dataset.index !== e3.dataset.index && !t2.dataset.deleting) {
          t2.dataset.deleting = true;
          const { currentImageContainer: e4 } = this;
          setTimeout(() => {
            e4.removeChild(t2), this.player.debug.log(`Removing thumb: ${t2.dataset.filename}`);
          }, i2);
        }
      });
    }), _defineProperty$1(this, "preloadNearby", (e3, t2 = true) => new Promise((i2) => {
      setTimeout(() => {
        const s2 = this.thumbnails[0].frames[e3].text;
        if (this.showingThumbFilename === s2) {
          let n2;
          n2 = t2 ? this.thumbnails[0].frames.slice(e3) : this.thumbnails[0].frames.slice(0, e3).reverse();
          let r2 = false;
          n2.forEach((e4) => {
            const t3 = e4.text;
            if (t3 !== s2 && !this.loadedImages.includes(t3)) {
              r2 = true, this.player.debug.log(`Preloading thumb filename: ${t3}`);
              const { urlPrefix: e5 } = this.thumbnails[0], s3 = e5 + t3, n3 = new Image();
              n3.src = s3, n3.onload = () => {
                this.player.debug.log(`Preloaded thumb filename: ${t3}`), this.loadedImages.includes(t3) || this.loadedImages.push(t3), i2();
              };
            }
          }), r2 || i2();
        }
      }, 300);
    })), _defineProperty$1(this, "getHigherQuality", (e3, t2, i2, s2) => {
      if (e3 < this.thumbnails.length - 1) {
        let n2 = t2.naturalHeight;
        this.usingSprites && (n2 = i2.h), n2 < this.thumbContainerHeight && setTimeout(() => {
          this.showingThumbFilename === s2 && (this.player.debug.log(`Showing higher quality thumb for: ${s2}`), this.loadImage(e3 + 1));
        }, 300);
      }
    }), _defineProperty$1(this, "toggleThumbContainer", (e3 = false, t2 = false) => {
      const i2 = this.player.config.classNames.previewThumbnails.thumbContainerShown;
      this.elements.thumb.container.classList.toggle(i2, e3), !e3 && t2 && (this.showingThumb = null, this.showingThumbFilename = null);
    }), _defineProperty$1(this, "toggleScrubbingContainer", (e3 = false) => {
      const t2 = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
      this.elements.scrubbing.container.classList.toggle(t2, e3), e3 || (this.showingThumb = null, this.showingThumbFilename = null);
    }), _defineProperty$1(this, "determineContainerAutoSizing", () => {
      (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = true);
    }), _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
      if (this.sizeSpecifiedInCSS) {
        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
          const e3 = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.width = `${e3}px`;
        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
          const e3 = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = `${e3}px`;
        }
      } else {
        const e3 = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
        this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`, this.elements.thumb.imageContainer.style.width = `${e3}px`;
      }
      this.setThumbContainerPos();
    }), _defineProperty$1(this, "setThumbContainerPos", () => {
      const e3 = this.player.elements.progress.getBoundingClientRect(), t2 = this.player.elements.container.getBoundingClientRect(), { container: i2 } = this.elements.thumb, s2 = t2.left - e3.left + 10, n2 = t2.right - e3.left - i2.clientWidth - 10;
      let r2 = this.mousePosX - e3.left - i2.clientWidth / 2;
      r2 < s2 && (r2 = s2), r2 > n2 && (r2 = n2), i2.style.left = `${r2}px`;
    }), _defineProperty$1(this, "setScrubbingContainerSize", () => {
      const { width: e3, height: t2 } = fitRatio(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
      this.elements.scrubbing.container.style.width = `${e3}px`, this.elements.scrubbing.container.style.height = `${t2}px`;
    }), _defineProperty$1(this, "setImageSizeAndOffset", (e3, t2) => {
      if (!this.usingSprites)
        return;
      const i2 = this.thumbContainerHeight / t2.h;
      e3.style.height = e3.naturalHeight * i2 + "px", e3.style.width = e3.naturalWidth * i2 + "px", e3.style.left = `-${t2.x * i2}px`, e3.style.top = `-${t2.y * i2}px`;
    }), this.player = e2, this.thumbnails = [], this.loaded = false, this.lastMouseMoveTime = Date.now(), this.mouseDown = false, this.loadedImages = [], this.elements = { thumb: {}, scrubbing: {} }, this.load();
  }
  get enabled() {
    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
  }
  get currentImageContainer() {
    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
  }
  get usingSprites() {
    return Object.keys(this.thumbnails[0].frames[0]).includes("w");
  }
  get thumbAspectRatio() {
    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
  }
  get thumbContainerHeight() {
    if (this.mouseDown) {
      const { height: e2 } = fitRatio(this.thumbAspectRatio, { width: this.player.media.clientWidth, height: this.player.media.clientHeight });
      return e2;
    }
    return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
  }
  get currentImageElement() {
    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
  }
  set currentImageElement(e2) {
    this.mouseDown ? this.currentScrubbingImageElement = e2 : this.currentThumbnailImageElement = e2;
  }
}
const source = { insertElements(e2, t2) {
  is.string(t2) ? insertElement(e2, this.media, { src: t2 }) : is.array(t2) && t2.forEach((t3) => {
    insertElement(e2, this.media, t3);
  });
}, change(e2) {
  getDeep(e2, "sources.length") ? (html5.cancelRequests.call(this), this.destroy.call(this, () => {
    this.options.quality = [], removeElement(this.media), this.media = null, is.element(this.elements.container) && this.elements.container.removeAttribute("class");
    const { sources: t2, type: i2 } = e2, [{ provider: s2 = providers.html5, src: n2 }] = t2, r2 = s2 === "html5" ? i2 : "div", a2 = s2 === "html5" ? {} : { src: n2 };
    Object.assign(this, { provider: s2, type: i2, supported: support.check(i2, s2, this.config.playsinline), media: createElement(r2, a2) }), this.elements.container.appendChild(this.media), is.boolean(e2.autoplay) && (this.config.autoplay = e2.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), is.empty(e2.poster) || (this.poster = e2.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), ui.addStyleHook.call(this), this.isHTML5 && source.insertElements.call(this, "source", t2), this.config.title = e2.title, media.setup.call(this), this.isHTML5 && Object.keys(e2).includes("tracks") && source.insertElements.call(this, "track", e2.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ui.build.call(this), this.isHTML5 && this.media.load(), is.empty(e2.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e2.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new PreviewThumbnails(this))), this.fullscreen.update();
  }, true)) : this.debug.warn("Invalid source format");
} };
function clamp(e2 = 0, t2 = 0, i2 = 255) {
  return Math.min(Math.max(e2, t2), i2);
}
class Plyr {
  constructor(e2, t2) {
    if (_defineProperty$1(this, "play", () => is.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play())), this.media.play()) : null), _defineProperty$1(this, "pause", () => this.playing && is.function(this.media.pause) ? this.media.pause() : null), _defineProperty$1(this, "togglePlay", (e3) => (is.boolean(e3) ? e3 : !this.playing) ? this.play() : this.pause()), _defineProperty$1(this, "stop", () => {
      this.isHTML5 ? (this.pause(), this.restart()) : is.function(this.media.stop) && this.media.stop();
    }), _defineProperty$1(this, "restart", () => {
      this.currentTime = 0;
    }), _defineProperty$1(this, "rewind", (e3) => {
      this.currentTime -= is.number(e3) ? e3 : this.config.seekTime;
    }), _defineProperty$1(this, "forward", (e3) => {
      this.currentTime += is.number(e3) ? e3 : this.config.seekTime;
    }), _defineProperty$1(this, "increaseVolume", (e3) => {
      const t3 = this.media.muted ? 0 : this.volume;
      this.volume = t3 + (is.number(e3) ? e3 : 0);
    }), _defineProperty$1(this, "decreaseVolume", (e3) => {
      this.increaseVolume(-e3);
    }), _defineProperty$1(this, "airplay", () => {
      support.airplay && this.media.webkitShowPlaybackTargetPicker();
    }), _defineProperty$1(this, "toggleControls", (e3) => {
      if (this.supported.ui && !this.isAudio) {
        const t3 = hasClass(this.elements.container, this.config.classNames.hideControls), i3 = e3 === void 0 ? void 0 : !e3, s3 = toggleClass(this.elements.container, this.config.classNames.hideControls, i3);
        if (s3 && is.array(this.config.controls) && this.config.controls.includes("settings") && !is.empty(this.config.settings) && controls.toggleMenu.call(this, false), s3 !== t3) {
          const e4 = s3 ? "controlshidden" : "controlsshown";
          triggerEvent.call(this, this.media, e4);
        }
        return !s3;
      }
      return false;
    }), _defineProperty$1(this, "on", (e3, t3) => {
      on.call(this, this.elements.container, e3, t3);
    }), _defineProperty$1(this, "once", (e3, t3) => {
      once.call(this, this.elements.container, e3, t3);
    }), _defineProperty$1(this, "off", (e3, t3) => {
      off(this.elements.container, e3, t3);
    }), _defineProperty$1(this, "destroy", (e3, t3 = false) => {
      if (!this.ready)
        return;
      const i3 = () => {
        document.body.style.overflow = "", this.embed = null, t3 ? (Object.keys(this.elements).length && (removeElement(this.elements.buttons.play), removeElement(this.elements.captions), removeElement(this.elements.controls), removeElement(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), is.function(e3) && e3()) : (unbindListeners.call(this), html5.cancelRequests.call(this), replaceElement(this.elements.original, this.elements.container), triggerEvent.call(this, this.elements.original, "destroyed", true), is.function(e3) && e3.call(this.elements.original), this.ready = false, setTimeout(() => {
          this.elements = null, this.media = null;
        }, 200));
      };
      this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (ui.toggleNativeControls.call(this, true), i3()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), this.embed !== null && is.function(this.embed.destroy) && this.embed.destroy(), i3()) : this.isVimeo && (this.embed !== null && this.embed.unload().then(i3), setTimeout(i3, 200));
    }), _defineProperty$1(this, "supports", (e3) => support.mime.call(this, e3)), this.timers = {}, this.ready = false, this.loading = false, this.failed = false, this.touch = support.touch, this.media = e2, is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) && (this.media = this.media[0]), this.config = extend$1({}, defaults$5, Plyr.defaults, t2 || {}, (() => {
      try {
        return JSON.parse(this.media.getAttribute("data-plyr-config"));
      } catch (e3) {
        return {};
      }
    })()), this.elements = { container: null, fullscreen: null, captions: null, buttons: {}, display: {}, progress: {}, inputs: {}, settings: { popup: null, menu: null, panels: {}, buttons: {} } }, this.captions = { active: null, currentTrack: -1, meta: new WeakMap() }, this.fullscreen = { active: false }, this.options = { speed: [], quality: [] }, this.debug = new Console(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", support), is.nullOrUndefined(this.media) || !is.element(this.media))
      return void this.debug.error("Setup failed: no suitable element passed");
    if (this.media.plyr)
      return void this.debug.warn("Target already setup");
    if (!this.config.enabled)
      return void this.debug.error("Setup failed: disabled by config");
    if (!support.check().api)
      return void this.debug.error("Setup failed: no support");
    const i2 = this.media.cloneNode(true);
    i2.autoplay = false, this.elements.original = i2;
    const s2 = this.media.tagName.toLowerCase();
    let n2 = null, r2 = null;
    switch (s2) {
      case "div":
        if (n2 = this.media.querySelector("iframe"), is.element(n2)) {
          if (r2 = parseUrl(n2.getAttribute("src")), this.provider = getProviderByUrl(r2.toString()), this.elements.container = this.media, this.media = n2, this.elements.container.className = "", r2.search.length) {
            const e3 = ["1", "true"];
            e3.includes(r2.searchParams.get("autoplay")) && (this.config.autoplay = true), e3.includes(r2.searchParams.get("loop")) && (this.config.loop.active = true), this.isYouTube ? (this.config.playsinline = e3.includes(r2.searchParams.get("playsinline")), this.config.youtube.hl = r2.searchParams.get("hl")) : this.config.playsinline = true;
          }
        } else
          this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
        if (is.empty(this.provider) || !Object.values(providers).includes(this.provider))
          return void this.debug.error("Setup failed: Invalid provider");
        this.type = types.video;
        break;
      case "video":
      case "audio":
        this.type = s2, this.provider = providers.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = true), this.media.hasAttribute("autoplay") && (this.config.autoplay = true), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = true), this.media.hasAttribute("muted") && (this.config.muted = true), this.media.hasAttribute("loop") && (this.config.loop.active = true);
        break;
      default:
        return void this.debug.error("Setup failed: unsupported type");
    }
    this.supported = support.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new Listeners(this), this.storage = new Storage(this), this.media.plyr = this, is.element(this.elements.container) || (this.elements.container = createElement("div", { tabindex: 0 }), wrap(this.media, this.elements.container)), ui.migrateStyles.call(this), ui.addStyleHook.call(this), media.setup.call(this), this.config.debug && on.call(this, this.elements.container, this.config.events.join(" "), (e3) => {
      this.debug.log(`event: ${e3.type}`);
    }), this.fullscreen = new Fullscreen(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ui.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Ads(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => silencePromise(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new PreviewThumbnails(this))) : this.debug.error("Setup failed: no support");
  }
  get isHTML5() {
    return this.provider === providers.html5;
  }
  get isEmbed() {
    return this.isYouTube || this.isVimeo;
  }
  get isYouTube() {
    return this.provider === providers.youtube;
  }
  get isVimeo() {
    return this.provider === providers.vimeo;
  }
  get isVideo() {
    return this.type === types.video;
  }
  get isAudio() {
    return this.type === types.audio;
  }
  get playing() {
    return Boolean(this.ready && !this.paused && !this.ended);
  }
  get paused() {
    return Boolean(this.media.paused);
  }
  get stopped() {
    return Boolean(this.paused && this.currentTime === 0);
  }
  get ended() {
    return Boolean(this.media.ended);
  }
  set currentTime(e2) {
    if (!this.duration)
      return;
    const t2 = is.number(e2) && e2 > 0;
    this.media.currentTime = t2 ? Math.min(e2, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
  }
  get currentTime() {
    return Number(this.media.currentTime);
  }
  get buffered() {
    const { buffered: e2 } = this.media;
    return is.number(e2) ? e2 : e2 && e2.length && this.duration > 0 ? e2.end(0) / this.duration : 0;
  }
  get seeking() {
    return Boolean(this.media.seeking);
  }
  get duration() {
    const e2 = parseFloat(this.config.duration), t2 = (this.media || {}).duration, i2 = is.number(t2) && t2 !== 1 / 0 ? t2 : 0;
    return e2 || i2;
  }
  set volume(e2) {
    let t2 = e2;
    is.string(t2) && (t2 = Number(t2)), is.number(t2) || (t2 = this.storage.get("volume")), is.number(t2) || ({ volume: t2 } = this.config), t2 > 1 && (t2 = 1), t2 < 0 && (t2 = 0), this.config.volume = t2, this.media.volume = t2, !is.empty(e2) && this.muted && t2 > 0 && (this.muted = false);
  }
  get volume() {
    return Number(this.media.volume);
  }
  set muted(e2) {
    let t2 = e2;
    is.boolean(t2) || (t2 = this.storage.get("muted")), is.boolean(t2) || (t2 = this.config.muted), this.config.muted = t2, this.media.muted = t2;
  }
  get muted() {
    return Boolean(this.media.muted);
  }
  get hasAudio() {
    return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)));
  }
  set speed(e2) {
    let t2 = null;
    is.number(e2) && (t2 = e2), is.number(t2) || (t2 = this.storage.get("speed")), is.number(t2) || (t2 = this.config.speed.selected);
    const { minimumSpeed: i2, maximumSpeed: s2 } = this;
    t2 = clamp(t2, i2, s2), this.config.speed.selected = t2, setTimeout(() => {
      this.media.playbackRate = t2;
    }, 0);
  }
  get speed() {
    return Number(this.media.playbackRate);
  }
  get minimumSpeed() {
    return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
  }
  get maximumSpeed() {
    return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
  }
  set quality(e2) {
    const t2 = this.config.quality, i2 = this.options.quality;
    if (!i2.length)
      return;
    let s2 = [!is.empty(e2) && Number(e2), this.storage.get("quality"), t2.selected, t2.default].find(is.number), n2 = true;
    if (!i2.includes(s2)) {
      const e3 = closest(i2, s2);
      this.debug.warn(`Unsupported quality option: ${s2}, using ${e3} instead`), s2 = e3, n2 = false;
    }
    t2.selected = s2, this.media.quality = s2, n2 && this.storage.set({ quality: s2 });
  }
  get quality() {
    return this.media.quality;
  }
  set loop(e2) {
    const t2 = is.boolean(e2) ? e2 : this.config.loop.active;
    this.config.loop.active = t2, this.media.loop = t2;
  }
  get loop() {
    return Boolean(this.media.loop);
  }
  set source(e2) {
    source.change.call(this, e2);
  }
  get source() {
    return this.media.currentSrc;
  }
  get download() {
    const { download: e2 } = this.config.urls;
    return is.url(e2) ? e2 : this.source;
  }
  set download(e2) {
    is.url(e2) && (this.config.urls.download = e2, controls.setDownloadUrl.call(this));
  }
  set poster(e2) {
    this.isVideo ? ui.setPoster.call(this, e2, false).catch(() => {
    }) : this.debug.warn("Poster can only be set for video");
  }
  get poster() {
    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
  }
  get ratio() {
    if (!this.isVideo)
      return null;
    const e2 = reduceAspectRatio(getAspectRatio.call(this));
    return is.array(e2) ? e2.join(":") : e2;
  }
  set ratio(e2) {
    this.isVideo ? is.string(e2) && validateAspectRatio(e2) ? (this.config.ratio = reduceAspectRatio(e2), setAspectRatio.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e2})`) : this.debug.warn("Aspect ratio can only be set for video");
  }
  set autoplay(e2) {
    const t2 = is.boolean(e2) ? e2 : this.config.autoplay;
    this.config.autoplay = t2;
  }
  get autoplay() {
    return Boolean(this.config.autoplay);
  }
  toggleCaptions(e2) {
    captions.toggle.call(this, e2, false);
  }
  set currentTrack(e2) {
    captions.set.call(this, e2, false);
  }
  get currentTrack() {
    const { toggled: e2, currentTrack: t2 } = this.captions;
    return e2 ? t2 : -1;
  }
  set language(e2) {
    captions.setLanguage.call(this, e2, false);
  }
  get language() {
    return (captions.getCurrentTrack.call(this) || {}).language;
  }
  set pip(e2) {
    if (!support.pip)
      return;
    const t2 = is.boolean(e2) ? e2 : !this.pip;
    is.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t2 ? pip.active : pip.inactive), is.function(this.media.requestPictureInPicture) && (!this.pip && t2 ? this.media.requestPictureInPicture() : this.pip && !t2 && document.exitPictureInPicture());
  }
  get pip() {
    return support.pip ? is.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === pip.active : null;
  }
  static supported(e2, t2, i2) {
    return support.check(e2, t2, i2);
  }
  static loadSprite(e2, t2) {
    return loadSprite(e2, t2);
  }
  static setup(e2, t2 = {}) {
    let i2 = null;
    return is.string(e2) ? i2 = Array.from(document.querySelectorAll(e2)) : is.nodeList(e2) ? i2 = Array.from(e2) : is.array(e2) && (i2 = e2.filter(is.element)), is.empty(i2) ? null : i2.map((e3) => new Plyr(e3, t2));
  }
}
Plyr.defaults = cloneDeep(defaults$5);
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap2() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l = obj.length; i2 < l; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l = arguments.length; i2 < l; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a2, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a2[key] = bind$1(val, thisArg);
    } else {
      a2[key] = val;
    }
  });
  return a2;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$d = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$c = utils$d;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$c.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$c.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$c.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$c.forEach(val, function parseValue2(v2) {
        if (utils$c.isDate(v2)) {
          v2 = v2.toISOString();
        } else if (utils$c.isObject(v2)) {
          v2 = JSON.stringify(v2);
        }
        parts.push(encode(key) + "=" + encode(v2));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$b = utils$d;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$b.forEach(this.handlers, function forEachHandler(h2) {
    if (h2 !== null) {
      fn(h2);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$a = utils$d;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$a.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config, code2, request2, response) {
  error.config = config;
  if (code2) {
    error.code = code2;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config, code2, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code2, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve2, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve2(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$9 = utils$d;
var cookies$1 = utils$9.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$9.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$9.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$9.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove2(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove2() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$8 = utils$d;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$8.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$8.trim(line.substr(0, i2)).toLowerCase();
    val = utils$8.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$7 = utils$d;
var isURLSameOrigin$1 = utils$7.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$7.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$6 = utils$d;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve2, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$6.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve2(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError2() {
      reject(createError2("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
      var transitional2 = config.transitional || defaults$4.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$6.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$6.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$5 = utils$d;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e2) {
      if (e2.name !== "SyntaxError") {
        throw e2;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$5.isFormData(data2) || utils$5.isArrayBuffer(data2) || utils$5.isBuffer(data2) || utils$5.isStream(data2) || utils$5.isFile(data2) || utils$5.isBlob(data2)) {
      return data2;
    }
    if (utils$5.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$5.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$5.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$5.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e2) {
        if (strictJSONParsing) {
          if (e2.name === "SyntaxError") {
            throw enhanceError2(e2, this, "E_JSON_PARSE");
          }
          throw e2;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$5.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$5.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$4 = utils$d;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$4.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$3 = utils$d;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$3.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$3.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$2 = utils$d;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source3) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source3)) {
      return utils$2.merge(target, source3);
    } else if (utils$2.isPlainObject(source3)) {
      return utils$2.merge({}, source3);
    } else if (utils$2.isArray(source3)) {
      return source3.slice();
    }
    return source3;
  }
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$2.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.22.0"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")));
    }
    if (version2 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$1 = utils$d;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config) {
  if (typeof config === "string") {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional2 = config.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve2) {
    resolvePromise = resolve2;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l = token._listeners.length;
    for (i2 = 0; i2 < l; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve2) {
      token.subscribe(resolve2);
      _resolve = resolve2;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source2() {
  var cancel;
  var token = new CancelToken(function executor(c2) {
    cancel = c2;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap2(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils = utils$d;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var NotyfNotification = function() {
  function NotyfNotification2(options) {
    this.options = options;
    this.listeners = {};
  }
  NotyfNotification2.prototype.on = function(eventType, cb) {
    var callbacks = this.listeners[eventType] || [];
    this.listeners[eventType] = callbacks.concat([cb]);
  };
  NotyfNotification2.prototype.triggerEvent = function(eventType, event) {
    var _this = this;
    var callbacks = this.listeners[eventType] || [];
    callbacks.forEach(function(cb) {
      return cb({ target: _this, event });
    });
  };
  return NotyfNotification2;
}();
var NotyfArrayEvent;
(function(NotyfArrayEvent2) {
  NotyfArrayEvent2[NotyfArrayEvent2["Add"] = 0] = "Add";
  NotyfArrayEvent2[NotyfArrayEvent2["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = function() {
  function NotyfArray2() {
    this.notifications = [];
  }
  NotyfArray2.prototype.push = function(elem) {
    this.notifications.push(elem);
    this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
  };
  NotyfArray2.prototype.splice = function(index, num) {
    var elem = this.notifications.splice(index, num)[0];
    this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
    return elem;
  };
  NotyfArray2.prototype.indexOf = function(elem) {
    return this.notifications.indexOf(elem);
  };
  NotyfArray2.prototype.onUpdate = function(fn) {
    this.updateFn = fn;
  };
  return NotyfArray2;
}();
var NotyfEvent;
(function(NotyfEvent2) {
  NotyfEvent2["Dismiss"] = "dismiss";
  NotyfEvent2["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
  types: [
    {
      type: "success",
      className: "notyf__toast--success",
      backgroundColor: "#3dc763",
      icon: {
        className: "notyf__icon--success",
        tagName: "i"
      }
    },
    {
      type: "error",
      className: "notyf__toast--error",
      backgroundColor: "#ed3d3d",
      icon: {
        className: "notyf__icon--error",
        tagName: "i"
      }
    }
  ],
  duration: 2e3,
  ripple: true,
  position: {
    x: "right",
    y: "bottom"
  },
  dismissible: false
};
var NotyfView = function() {
  function NotyfView2() {
    this.notifications = [];
    this.events = {};
    this.X_POSITION_FLEX_MAP = {
      left: "flex-start",
      center: "center",
      right: "flex-end"
    };
    this.Y_POSITION_FLEX_MAP = {
      top: "flex-start",
      center: "center",
      bottom: "flex-end"
    };
    var docFrag = document.createDocumentFragment();
    var notyfContainer = this._createHTMLElement({ tagName: "div", className: "notyf" });
    docFrag.appendChild(notyfContainer);
    document.body.appendChild(docFrag);
    this.container = notyfContainer;
    this.animationEndEventName = this._getAnimationEndEventName();
    this._createA11yContainer();
  }
  NotyfView2.prototype.on = function(event, cb) {
    var _a;
    this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
  };
  NotyfView2.prototype.update = function(notification, type) {
    if (type === NotyfArrayEvent.Add) {
      this.addNotification(notification);
    } else if (type === NotyfArrayEvent.Remove) {
      this.removeNotification(notification);
    }
  };
  NotyfView2.prototype.removeNotification = function(notification) {
    var _this = this;
    var renderedNotification = this._popRenderedNotification(notification);
    var node;
    if (!renderedNotification) {
      return;
    }
    node = renderedNotification.node;
    node.classList.add("notyf__toast--disappear");
    var handleEvent;
    node.addEventListener(this.animationEndEventName, handleEvent = function(event) {
      if (event.target === node) {
        node.removeEventListener(_this.animationEndEventName, handleEvent);
        _this.container.removeChild(node);
      }
    });
  };
  NotyfView2.prototype.addNotification = function(notification) {
    var node = this._renderNotification(notification);
    this.notifications.push({ notification, node });
    this._announce(notification.options.message || "Notification");
  };
  NotyfView2.prototype._renderNotification = function(notification) {
    var _a;
    var card = this._buildNotificationCard(notification);
    var className = notification.options.className;
    if (className) {
      (_a = card.classList).add.apply(_a, className.split(" "));
    }
    this.container.appendChild(card);
    return card;
  };
  NotyfView2.prototype._popRenderedNotification = function(notification) {
    var idx = -1;
    for (var i2 = 0; i2 < this.notifications.length && idx < 0; i2++) {
      if (this.notifications[i2].notification === notification) {
        idx = i2;
      }
    }
    if (idx !== -1) {
      return this.notifications.splice(idx, 1)[0];
    }
    return;
  };
  NotyfView2.prototype.getXPosition = function(options) {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || "right";
  };
  NotyfView2.prototype.getYPosition = function(options) {
    var _a;
    return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || "bottom";
  };
  NotyfView2.prototype.adjustContainerAlignment = function(options) {
    var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
    var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
    var style = this.container.style;
    style.setProperty("justify-content", justify);
    style.setProperty("align-items", align);
  };
  NotyfView2.prototype._buildNotificationCard = function(notification) {
    var _this = this;
    var options = notification.options;
    var iconOpts = options.icon;
    this.adjustContainerAlignment(options);
    var notificationElem = this._createHTMLElement({ tagName: "div", className: "notyf__toast" });
    var ripple = this._createHTMLElement({ tagName: "div", className: "notyf__ripple" });
    var wrapper = this._createHTMLElement({ tagName: "div", className: "notyf__wrapper" });
    var message = this._createHTMLElement({ tagName: "div", className: "notyf__message" });
    message.innerHTML = options.message || "";
    var mainColor = options.background || options.backgroundColor;
    if (iconOpts) {
      var iconContainer = this._createHTMLElement({ tagName: "div", className: "notyf__icon" });
      if (typeof iconOpts === "string" || iconOpts instanceof String)
        iconContainer.innerHTML = new String(iconOpts).valueOf();
      if (typeof iconOpts === "object") {
        var _a = iconOpts.tagName, tagName = _a === void 0 ? "i" : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
        var iconElement = this._createHTMLElement({ tagName, className: className_1, text });
        if (color)
          iconElement.style.color = color;
        iconContainer.appendChild(iconElement);
      }
      wrapper.appendChild(iconContainer);
    }
    wrapper.appendChild(message);
    notificationElem.appendChild(wrapper);
    if (mainColor) {
      if (options.ripple) {
        ripple.style.background = mainColor;
        notificationElem.appendChild(ripple);
      } else {
        notificationElem.style.background = mainColor;
      }
    }
    if (options.dismissible) {
      var dismissWrapper = this._createHTMLElement({ tagName: "div", className: "notyf__dismiss" });
      var dismissButton = this._createHTMLElement({
        tagName: "button",
        className: "notyf__dismiss-btn"
      });
      dismissWrapper.appendChild(dismissButton);
      wrapper.appendChild(dismissWrapper);
      notificationElem.classList.add("notyf__toast--dismissible");
      dismissButton.addEventListener("click", function(event) {
        var _a2, _b2;
        (_b2 = (_a2 = _this.events)[NotyfEvent.Dismiss]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, { target: notification, event });
        event.stopPropagation();
      });
    }
    notificationElem.addEventListener("click", function(event) {
      var _a2, _b2;
      return (_b2 = (_a2 = _this.events)[NotyfEvent.Click]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, { target: notification, event });
    });
    var className = this.getYPosition(options) === "top" ? "upper" : "lower";
    notificationElem.classList.add("notyf__toast--" + className);
    return notificationElem;
  };
  NotyfView2.prototype._createHTMLElement = function(_a) {
    var tagName = _a.tagName, className = _a.className, text = _a.text;
    var elem = document.createElement(tagName);
    if (className) {
      elem.className = className;
    }
    elem.textContent = text || null;
    return elem;
  };
  NotyfView2.prototype._createA11yContainer = function() {
    var a11yContainer = this._createHTMLElement({ tagName: "div", className: "notyf-announcer" });
    a11yContainer.setAttribute("aria-atomic", "true");
    a11yContainer.setAttribute("aria-live", "polite");
    a11yContainer.style.border = "0";
    a11yContainer.style.clip = "rect(0 0 0 0)";
    a11yContainer.style.height = "1px";
    a11yContainer.style.margin = "-1px";
    a11yContainer.style.overflow = "hidden";
    a11yContainer.style.padding = "0";
    a11yContainer.style.position = "absolute";
    a11yContainer.style.width = "1px";
    a11yContainer.style.outline = "0";
    document.body.appendChild(a11yContainer);
    this.a11yContainer = a11yContainer;
  };
  NotyfView2.prototype._announce = function(message) {
    var _this = this;
    this.a11yContainer.textContent = "";
    setTimeout(function() {
      _this.a11yContainer.textContent = message;
    }, 100);
  };
  NotyfView2.prototype._getAnimationEndEventName = function() {
    var el = document.createElement("_fake");
    var transitions = {
      MozTransition: "animationend",
      OTransition: "oAnimationEnd",
      WebkitTransition: "webkitAnimationEnd",
      transition: "animationend"
    };
    var t2;
    for (t2 in transitions) {
      if (el.style[t2] !== void 0) {
        return transitions[t2];
      }
    }
    return "animationend";
  };
  return NotyfView2;
}();
var Notyf = function() {
  function Notyf2(opts) {
    var _this = this;
    this.dismiss = this._removeNotification;
    this.notifications = new NotyfArray();
    this.view = new NotyfView();
    var types2 = this.registerTypes(opts);
    this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
    this.options.types = types2;
    this.notifications.onUpdate(function(elem, type) {
      return _this.view.update(elem, type);
    });
    this.view.on(NotyfEvent.Dismiss, function(_a) {
      var target = _a.target, event = _a.event;
      _this._removeNotification(target);
      target["triggerEvent"](NotyfEvent.Dismiss, event);
    });
    this.view.on(NotyfEvent.Click, function(_a) {
      var target = _a.target, event = _a.event;
      return target["triggerEvent"](NotyfEvent.Click, event);
    });
  }
  Notyf2.prototype.error = function(payload) {
    var options = this.normalizeOptions("error", payload);
    return this.open(options);
  };
  Notyf2.prototype.success = function(payload) {
    var options = this.normalizeOptions("success", payload);
    return this.open(options);
  };
  Notyf2.prototype.open = function(options) {
    var defaultOpts = this.options.types.find(function(_a) {
      var type = _a.type;
      return type === options.type;
    }) || {};
    var config = __assign(__assign({}, defaultOpts), options);
    this.assignProps(["ripple", "position", "dismissible"], config);
    var notification = new NotyfNotification(config);
    this._pushNotification(notification);
    return notification;
  };
  Notyf2.prototype.dismissAll = function() {
    while (this.notifications.splice(0, 1))
      ;
  };
  Notyf2.prototype.assignProps = function(props, config) {
    var _this = this;
    props.forEach(function(prop) {
      config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
    });
  };
  Notyf2.prototype._pushNotification = function(notification) {
    var _this = this;
    this.notifications.push(notification);
    var duration = notification.options.duration !== void 0 ? notification.options.duration : this.options.duration;
    if (duration) {
      setTimeout(function() {
        return _this._removeNotification(notification);
      }, duration);
    }
  };
  Notyf2.prototype._removeNotification = function(notification) {
    var index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  };
  Notyf2.prototype.normalizeOptions = function(type, payload) {
    var options = { type };
    if (typeof payload === "string") {
      options.message = payload;
    } else if (typeof payload === "object") {
      options = __assign(__assign({}, options), payload);
    }
    return options;
  };
  Notyf2.prototype.registerTypes = function(opts) {
    var incomingTypes = (opts && opts.types || []).slice();
    var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function(defaultType) {
      var userTypeIdx = -1;
      incomingTypes.forEach(function(t2, idx) {
        if (t2.type === defaultType.type)
          userTypeIdx = idx;
      });
      var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
      return __assign(__assign({}, defaultType), userType);
    });
    return finalDefaultTypes.concat(incomingTypes);
  };
  return Notyf2;
}();
try {
  self["workbox:window:6.2.4"] && _();
} catch (n2) {
}
function n(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r(n2, t2) {
  (t2 == null || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e(n2, t2) {
  var e2;
  if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if (typeof n3 == "string")
          return r(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return e3 === "Object" && n3.constructor && (e3 = n3.constructor.name), e3 === "Map" || e3 === "Set" ? Array.from(n3) : e3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && typeof n2.length == "number") {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.2.4"] && _();
} catch (n2) {
}
var i = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c) : Promise.resolve();
}
var v = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return t2 === void 0 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i(), e3.en = new i(), e3.on = new i(), e3.un = 0, e3.an = new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u(i2, a2)), i2 === "installed" ? e3.wn = self.setTimeout(function() {
        i2 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new u("waiting", a2));
      }, 200) : i2 === "activating" && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h2, l, w = v2.prototype;
  return w.register = function(n2) {
    var t2 = (n2 === void 0 ? {} : n2).immediate, r3 = t2 !== void 0 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && document.readyState !== "complete")
          return s(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.getSW = function() {
    return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t2) {
    try {
      return a(this.getSW(), function(r3) {
        return n(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h2 = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h2.prototype, l), v2;
}(function() {
  function n2() {
    this.Pn = new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, new Set()), this.Pn.get(n3);
  }, n2;
}());
export { createPinia as $, createTextVNode as A, createStaticVNode as B, renderSlot as C, createCommentVNode as D, toDisplayString$1 as E, onMounted as F, onBeforeUnmount as G, Fragment as H, renderList as I, useHead as J, createBlock as K, createRouter as L, Module as M, createWebHistory as N, nprogress as O, Plyr as P, defineStore as Q, RouterLink as R, axios as S, provide as T, Notyf as U, VueScrollTo as V, v as W, n as X, useI18n as Y, Transition as Z, createHead as _, useRouter as a, createApp as a0, RouterView as a1, resolveDynamicComponent as a2, reactive as a3, mergeProps as a4, withScopeId as a5, toRefs as a6, watch as a7, nextTick as a8, onUnmounted as a9, isReactive as aa, getCurrentInstance as ab, isVNode as ac, render as ad, useRoute as ae, toRef as af, inject as ag, warn$1 as ah, readonly as ai, markRaw as aj, commonjsGlobal as ak, resolveDirective as al, vModelRadio as am, watchPostEffect as an, onClickOutside as ao, normalizeProps as ap, guardReactiveProps as aq, toHandlers as ar, createElementBlock as b, createI18n as c, defineComponent as d, createBaseVNode as e, popScopeId as f, useCssVars as g, computed as h, h as i, useMediaQuery as j, usePreferredDark as k, useWindowScroll as l, resolveComponent as m, normalizeClass as n, openBlock as o, pushScopeId as p, withModifiers as q, ref as r, unref as s, createVNode as t, useStorage as u, withCtx as v, watchEffect as w, withDirectives as x, vModelCheckbox as y, isRef as z };
