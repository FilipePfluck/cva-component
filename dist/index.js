var react = require('react');
var classVarianceAuthority = require('class-variance-authority');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var _excluded = ["children", "className", "variants"];
var CVAComponent = function CVAComponent(element, cvaObject, displayName) {
  var _cvaObject$base = cvaObject.base,
    base = _cvaObject$base === void 0 ? '' : _cvaObject$base,
    requestVariants = cvaObject.variants,
    _cvaObject$defaultVar = cvaObject.defaultVariants,
    defaultVariants = _cvaObject$defaultVar === void 0 ? {} : _cvaObject$defaultVar;
  var _variants = requestVariants != null ? requestVariants : {};
  var createClassname = classVarianceAuthority.cva(base, {
    variants: _variants
  });
  var Component = function Component(_ref) {
    var children = _ref.children,
      className = _ref.className,
      variants = _ref.variants,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);
    var mergedVariants = _extends({}, defaultVariants, variants);
    var cvaClassName = createClassname(_extends({
      className: className
    }, mergedVariants));
    console.log({
      cvaClassName: cvaClassName
    });
    return react.createElement(element, _extends({
      className: cvaClassName
    }, props), children);
  };
  Component.displayName = displayName;
  return Component;
};
var selector = function selector(_selector, classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return _selector + className;
  }).join(' ');
  return classesWithSelector;
};
var hover = function hover(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'hover:' + className;
  }).join(' ');
  return classesWithSelector;
};
var focus = function focus(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'focus:' + className;
  }).join(' ');
  return classesWithSelector;
};
var focusWithin = function focusWithin(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'focus-within:' + className;
  }).join(' ');
  return classesWithSelector;
};
var focusVisible = function focusVisible(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'focus-visible:' + className;
  }).join(' ');
  return classesWithSelector;
};
var active = function active(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'active:' + className;
  }).join(' ');
  return classesWithSelector;
};
var first = function first(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'first:' + className;
  }).join(' ');
  return classesWithSelector;
};
var last = function last(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'last:' + className;
  }).join(' ');
  return classesWithSelector;
};
var only = function only(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'only:' + className;
  }).join(' ');
  return classesWithSelector;
};
var odd = function odd(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'odd:' + className;
  }).join(' ');
  return classesWithSelector;
};
var even = function even(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'even:' + className;
  }).join(' ');
  return classesWithSelector;
};
var disabled = function disabled(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'disabled:' + className;
  }).join(' ');
  return classesWithSelector;
};
var enabled = function enabled(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'enabled:' + className;
  }).join(' ');
  return classesWithSelector;
};
var required = function required(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'required:' + className;
  }).join(' ');
  return classesWithSelector;
};
var valid = function valid(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'valid:' + className;
  }).join(' ');
  return classesWithSelector;
};
var invalid = function invalid(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'invalid:' + className;
  }).join(' ');
  return classesWithSelector;
};
var autofill = function autofill(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'autofill:' + className;
  }).join(' ');
  return classesWithSelector;
};
var before = function before(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'before:' + className;
  }).join(' ');
  return classesWithSelector;
};
var after = function after(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'after:' + className;
  }).join(' ');
  return classesWithSelector;
};
var placeholder = function placeholder(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'placeholder:' + className;
  }).join(' ');
  return classesWithSelector;
};
var dark = function dark(classes) {
  var classesArray = classes.split(' ');
  var classesWithSelector = classesArray.map(function (className) {
    return 'dark:' + className;
  }).join(' ');
  return classesWithSelector;
};

exports.CVAComponent = CVAComponent;
exports.active = active;
exports.after = after;
exports.autofill = autofill;
exports.before = before;
exports.dark = dark;
exports.disabled = disabled;
exports.enabled = enabled;
exports.even = even;
exports.first = first;
exports.focus = focus;
exports.focusVisible = focusVisible;
exports.focusWithin = focusWithin;
exports.hover = hover;
exports.invalid = invalid;
exports.last = last;
exports.odd = odd;
exports.only = only;
exports.placeholder = placeholder;
exports.required = required;
exports.selector = selector;
exports.valid = valid;
//# sourceMappingURL=index.js.map
