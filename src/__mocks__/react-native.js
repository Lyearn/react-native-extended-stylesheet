/**
 * React-native mock
 */

export let Dimensions = {
  get: () => {
    return {width: 100, height: 200};
  }
};

export let Platform = {
  OS: 'ios'
};

export let I18nManager = {
  isRTL: false
};

export let StyleSheet = {
  create(obj) {
    return obj;
  },
  flatten(style) {
    if (style === null || typeof style !== 'object') {
      return undefined;
    }

    if (!Array.isArray(style)) {
      return style;
    }

    const result = {};
    for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
      const computedStyle = StyleSheet.flatten(style[i]);
      if (computedStyle) {
        // eslint-disable-next-line no-unused-vars
        for (const key in computedStyle) {
          result[key] = computedStyle[key];
        }
      }
    }
    return result;
  },
  hairlineWidth: 1
};

export default {
  Dimensions,
  Platform,
  StyleSheet,
  I18nManager
};
