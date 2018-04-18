'use babel'

export default {
  activate () {
    atom.notifications.addError(
      'This package (deployment) is under construction. At the 1.0.0 update it gets its function.',
      { dismissable: true }
    )
  },
  deactivate () {
  }
}
