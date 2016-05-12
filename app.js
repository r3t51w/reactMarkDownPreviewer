var Header = React.createClass({
render: function(){
return(
<header>
   <a href='http://www.freecodecamp.com'>
    <img className='logo' src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'/>
   </a>
</header>
);
}
});
var MarkPrev = React.createClass({
getInitialState:function(){
return ({
  value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * Bacon\n  * Bacon\n  * Bacon\n\nNumbered list:\n\n  1. Bacon\n  2. Bacon\n  3. Bacon\n\nThe Snow---not the rain---in\nCanada.\n\n *[Wister Ng](http://www.freecodecamp.com/r3t51w)*'});
},
updateV:function(V){
this.setState({
  value:V
})
},
rawM:function(value){
var rawMark = marked(value, {sanitize:true});
return{ __html:rawMark};
},
render:function(){
return(

  <div className='row'>
    <Header />
    <div className='col-md-6'>
      <h1>Raw</h1>
      <br/>
      <InputArea value={this.state.value} update={this.updateV}/>
    </div>
    <div className='col-md-6'><h1>Result</h1>
      <hr/>
      <span dangerouslySetInnerHTML={this.rawM(this.state.value)} ></span>
    </div>
  </div>
);
}
});
var InputArea= React.createClass({
update: function(){
console.log(this.refs.inputV.value);
var newValue= this.refs.inputV.value;
this.props.update(newValue);
},
render: function(){
return(<textarea type='text'className='form-control' rows='20'className='' ref='inputV' value= {this.props.value} onChange={this.update} />
  )
}
});
ReactDOM.render(<MarkPrev />, document.getElementById("container"));
