addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // تغییر آدرس مقصد به دامنه‌ی مورد نظر شما
  const targetUrl = 'https://www.youtube.com/' + url.pathname + url.search;

  // ارسال درخواست به سرور مقصد
  const response = await fetch(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });

  // بازگرداندن پاسخ به کاربر
  return new Response(response.body, {
    status: response.status,
    headers: response.headers
  });
}});
}
