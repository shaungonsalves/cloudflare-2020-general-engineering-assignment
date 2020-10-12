const links = 
  [
    { "name": "Shaun's Github", "url": "https://github.com/shaungonsalves" },
    { "name": "Shaun's Website", "url": "https://bit.ly/2RUqx3i" },
    { "name": "Shaun's Facebook", "url": "https://www.facebook.com/shaun.gonsalves288"},
    { "name": "Shaun's Instagram", "url": "https://www.instagram.com/shaun.gonsalves"}
  ]
const socials =
  [
    {'name':'<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>','url':'https://github.com/shaungonsalves'},
    {'name':'<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>', 'url':'https://www.facebook.com/shaun.gonsalves288'},
    {'name':'<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="32" height="32" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>','url':'https://www.instagram.com/shaun.gonsalves'}
  ]

class LinksTransformer {
  constructor(link) {
    this.link = link
  }
  
  async element(element) {
    // console.log(`Incoming element: ${element.tagName}`)
    for (let i=0;i<this.link.length;i++) {
      element.append('<a href="'+this.link[i]["url"]+'">'+this.link[i]["name"]+'</a>',{html:true})
    }
    return new Response(element)
  }
}

class AvatarTransformer {
  constructor(img) {
    this.img = img
  }

  async element(element){
    // console.log(`Incoming element: ${element.tagName}`)
    element.setAttribute("src",this.img)
  }
}

class RemoveStyle {
  constructor() {
  }

  async element(element) {
    element.removeAttribute("style")
  }
}

class FontAwesomeStyleSheet {
  constructor() {
  }

  async element(element) {
    console.log(`Incoming element: ${element.tagName}`)
    element.append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">',{html:true})
  }
}

class UpdateName {
  constructor(){
  }
  
  async element(element){
    element.setInnerContent("Shaun Augustin Gonsalves (shaun.gonsalves288)")
  }
}

class UpdateTitle {
  constructor(){
  }
  async element(element){
    element.setInnerContent("Shaun Gonsalves")
  }
}

class SetBackgroundColor {
  constructor(color){
    this.color = color
  }
  async element(element){
    element.setAttribute("class",this.color)
  }
}

const htmlRewriter = new HTMLRewriter()  
.on("div#links", new LinksTransformer(links))
.on("div#profile", new RemoveStyle())
.on("h1#name", new UpdateName())
.on("div#social", new RemoveStyle())
.on("img#avatar", new AvatarTransformer("https://github.com/shaungonsalves/shaungonsalves.github.io/raw/master/img/profile.jpg"))
.on("div#social", new LinksTransformer(socials))
.on("title", new UpdateTitle())
.on("body", new SetBackgroundColor('bg-indigo-800'))

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

  console.log('------------------------------------')

  if (link.pathname=="/links"){
    response = await getLinks()
    contentType = 'application/json'
  }
  else {
    response = await rewriteHtmlController()
    contentType = 'text/html'
  }

  return new Response(response,{
    headers:{'content-type':contentType}
  })
}

async function getLinks() {
  return JSON.stringify(links)
}

async function rewriteHtmlController() {
  var staticPage = await fetch("https://static-links-page.signalnerve.workers.dev/")

  response = htmlRewriter.transform(staticPage)

  return response.body
}

