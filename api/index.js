export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // if (url.pathname.startsWith("/api/")) {
    //   return new Response(JSON.stringify({ name: "Cloudflare" }), {
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }
    console.log(url);

    return env.ASSETS.fetch(request);
  },
};
