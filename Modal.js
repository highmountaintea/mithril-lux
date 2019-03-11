var m = require('mithril').default;

function Modal() {
  var content = null;

  function show(cnt) {
    content = cnt;
  }

  function hide() {
    content = null;
  }

  function view() {
    if (content != null) {
      return m('div.modal-background',
        m('div.modal-box', content()),
      );
    }
  }

  return { show, hide, view };
}

module.exports = Modal;
