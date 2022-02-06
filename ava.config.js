import avaConfig from '@ehmicky/dev-tasks/ava.config.js'

export default {
  ...avaConfig,
  // Testing `stdout.fd` in this module is simpler with processes
  workerThreads: false,
}
