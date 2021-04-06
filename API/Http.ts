export default class Http {
  static async request(method: string, url: string, body?: object) {
    return (
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
    ).json();
  }
}
