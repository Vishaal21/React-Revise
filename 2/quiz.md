1) Where does react put all of the elements i create in jsx when i call root.render?
ANs -> All the elements i render get put into the element(div) with id "root". (Or whatever element i call during createRoot method)

2) What would show up in my console when i do console.log(<h1>Hello From React</h1>)
Ans -> If my project is using babel(which converts jsx to javascript) than the jsx will be transformed into

Console.log(React.createElement("h1", "null", "Hello From React"))

It wont show html it will show the above object like this.
{
  "$$typeof": Symbol(react.element),  // Identifies it as a React Element
  "type": "h1",                        // Represents the element type
  "key": null,                          // Used for list rendering (null if not provided)
  "ref": null,                          // Used for referencing DOM elements (null by default)
  "props": { 
    "children": "Hello From React"      // Contains the inner text of the element
  }
}
