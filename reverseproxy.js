export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!env.HOST) {
      return new Response("环境变量 HOST 未设置", { status: 400 });
    }
    url.hostname = env.HOST;

    if (!env.URL) {
      return fetch(url, request);
    }

    if (url.pathname == '/') {
      if (env.URL.toLowerCase() == 'nginx') {
        return new Response(await nginx(), {
			headers: {
					'Content-Type': 'text/html; charset=UTF-8',
			},
		});
      } else return fetch(new Request(env.URL, request));
    }

    return fetch(url, request);
  }
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text;
}