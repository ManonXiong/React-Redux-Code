## Project: Streams
This project is an application using **React/Redux** to build a simple twich-style streaming website.<br />
It contains Streams List page, Stream Detail page, Stream Create page, Stream Edit page and Stream Delete page(a modal). When the user is logged out, he/she may see the list of streams and watch a stream; however, they can create, edit and delete streams after they log in.<br />
The naviagation through pages is implemented by **react-router-dom**. And **Google OAuth** is applied for authentication. The operations of creating, reading(watching), editing and deleting streams are coded under **Rest-ful** conventions. A database is created and used via **JSON server** API.

## Notes:

### Navigation
1. **Introduction: BrowserRouter**
BrowserRouter is a react component. <br />
It creates an object called "history". This "history" communicates with the address bar to extract the new path and sends it to a BrowserRouter instance.<br />
BrowserRouter then sends the path to its Route instances. And the Route instances decide whether they render or not.

```
<BrowserRouter>
  <div>
    <Route path="/" exact component={pageOne} />
    <Route path="/pagetwo" component={pageTwo} />
  </div>
</BrowserRouter>
```

The BrowserRouter component can have only one child, which means, if the `<div></div>` is not provided in `<BrowserRouter></BrowserRouter>`, the complier returns an error message.<br />
There are 2 Routes in this router.

2. **Navigate Through / Not Through React Router**
In HTML, there is a tag `<a>` for navigation: `<a href=""></a>`.<br />
The usage of "a" tag in navigation is bad. The process of navigation through "a" tag is as following:<br />
a. You add an `<a />` tag to your applciation with `href="/pagetwo"` and click it<br />
b. Your browser makes a request to localhost:3000/pagetwo<br />
c. Development server responds with index.hteml file<br />
d. *Browser recieves index.html file, dumps old HTML file it was showing(including all of your React/Redux state data)*<br />
e. index.html file lists our JS files in script tags - browser downloads and executes these scripts.<br />
f. Our app starts up.

We don't want the state date be dumped when navigating to a new page, so we use `<Link>` in React router.

You can see the browser make requests every time clicking "a" tag, from the console -> Network.

*How React Router Link Works?*
a. User clicks a "Link" tag<br />
b. React Router prevents the browser from navigating to the new page and fetching a new index.html file<br />
c. URL still changes<br />
d. 'History' sees updated URL, takes URL and sends it to BrowserRouter.<br />
e. BrowserRouter communicates the URL to Route components.<br />
f. Route components rerender to show new set of components.

*Single Page App*
It means that we only load up a single HTML document. We allow the users to navigate through various Link tags, but when they navigate around, they still make use of the same document. We are just showing or hiding different sets of components based on the URL.

3. **Always Visible Components**
To show components all the time, put these components outside of `BrowserRoute` but inside `<div>`.

4. **Link Tag Outside `<Router>`**
If we use `<Link />` element in a component and this component is not wrapped in `<BrowserRouter>`, there is an error message instantly.<br />

```
Error: You should not use <Link> outside a <Router>
```

Any component that is not a child of oru router cannot contain any react-router related components.<br />
As long as the component is not wrapped in Route component, it can always be visible.
