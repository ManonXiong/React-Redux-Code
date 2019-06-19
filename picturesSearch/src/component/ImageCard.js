import React from 'react';

//We try to get the height of the image, and calculate how many spans it needs in the grid, using grid-row-end: span num
//To get the height, we have to access the DOM node. Use ref system.

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans:0}; //in constructor, don't forget "this"
        this.myRef = React.createRef();
    }

    //After the component is mounted, the app will get the img's height back.
    //Use Lifecycle methods:
    componentDidMount() {
        this.myRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.myRef.current.clientHeight;
        console.log(height);
        const spans = Math.ceil(height / 10); //a row is 10px
        
        // this.setState({spans: spans});
        this.setState({spans}); //when the key and value have the same name
    }

    render() {
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img alt={description}
                  src={urls.regular}
                  ref={this.myRef}
                  />
            </div>
        )
    }
}

export default ImageCard

//A prop, "image" object from the array of objects is passed from ImageList (parent) to ImageCard (child).
//Note: ImageList is a functional component, but ImageCard is a class component. This doesn't affect ImageList is the parent.

//The following code can be changed to the one aboe, using destructuring objects
//because this.props.image appears quite often
//return(
//     <div>
//     <img alt={this.props.image.description}
//       src={this.props.image.urls.regular}
//       />
// </div>

//<img ref={this.myRef} /> -- this is how to wire up ref system and the image element

//In method componentDidMount(), before the images' data are fetched and loaded, the height will be 0. Our app should wait until the image is loaded completely, so that we can get the height. Otherwise, the height will be 0.
//Listen to an event, 'load'.
//Add event listener to that DOM node, refering as this.myRef.current. Here "current" is the current node.