export const get = async () => {
  const domains = await fetch('https://api.retheme.org/v1/domains/themed')
                          .then(res => res.json())

  return {
    body: { domains },
  }
}


