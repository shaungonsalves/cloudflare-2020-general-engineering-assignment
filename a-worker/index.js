addEventListener('fetch', event => {
  event.respondWith(checkRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker has changed!', {
    headers: { 'content-type': 'text/plain' },
  })
}

async function checkRequest(request) {
  var url = request.url
  var response
  var contentType
  console.log('------------------------------------')
  var link = new URL(url)
  console.log(link.pathname)
  
  // console.log(url.substring(url.lastIndexOf("/")))

  console.log('------------------------------------')

  if (link.pathname=="/links"){
    response = await processLinks()
    contentType = 'application/json'
  }
  else {
    var staticPage = await fetch("https://static-links-page.signalnerve.workers.dev/")
    response = staticPage.body;
    contentType = 'text/html'
  }

  return new Response(response,{
    headers:{'content-type':contentType}
  })
}

async function processLinks() {
  const links = '{ "name": "Link Name", "url": "https://linkurl" }'
  return links
}