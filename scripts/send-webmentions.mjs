/**
 * Send outgoing webmentions after the new post/feed is live.
 * Usage:
 *   npm run webmentions:send
 *   npm run webmentions:send -- https://dobrow.blog/blog/my-new-post/
 * Optional environment variable WEBMENTION_APP_TOKEN reduces rate limiting.
 * Requires Node.js 22+; no local credentials are embedded in the website.
 */
const url = process.argv[2] ?? 'https://dobrow.blog/rss.xml';
const parsed = new URL(url);
if (parsed.protocol !== 'https:' || parsed.hostname !== 'dobrow.blog') {
  console.error('For safety, the source URL must be a published https://dobrow.blog page or feed.');
  process.exit(1);
}
const endpoint = new URL('https://webmention.app/check');
endpoint.searchParams.set('url', url);
if (!process.argv[2]) endpoint.searchParams.set('limit', '1');
if (process.env.WEBMENTION_APP_TOKEN) endpoint.searchParams.set('token', process.env.WEBMENTION_APP_TOKEN);
console.log(`Notifying linked sites about ${url}`);
const response = await fetch(endpoint, { method: 'POST', signal: AbortSignal.timeout(60000) });
if (!response.ok) {
  console.error(`Outgoing webmention service responded ${response.status}: ${await response.text()}`);
  process.exit(1);
}
console.log((await response.text()).slice(0, 5000));
console.log('Finished. Receiving sites may process and verify these asynchronously.');
