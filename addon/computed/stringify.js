import Ember from 'ember';

const { get, computed } = Ember;

export default function (key) {
  return computed(key, {
    get() {
      if (get(this, key) != null) {
        return get(this, key).toString();
      }
    }
  });
}
