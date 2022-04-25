import { onDestroy } from 'svelte'

export const onInterval = (callback, ms, options = {}) => {
  const { start = true } = options

  if (start) {
    callback()
  }

  let interval = setInterval(callback, ms)

  onDestroy(() => {
    clearInterval(interval)
  })
}
