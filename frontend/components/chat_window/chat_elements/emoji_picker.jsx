var React = require('react');
var EmojiPicker = require('react-emoji-picker');
var emojiMap = require('react-emoji-picker/lib/emojiMap');

// styles for the emoji picker wrapper
var emojiPickerStyles = {
  position: 'absolute',
  right: '-16px', top: '-300px',
  backgroundColor: 'white',
  width: '300px',
  padding: '16px',
  border: '1px solid #79707F',
  borderRadius: '8px 8px 2px 8px',
  boxShadow: "0px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  zIndex: '2'
};

var EmojiInput = React.createClass({
  getInitialState: function() {
    return {
      emoji: null,
      showEmojiPicker: false,
    };
  },

  toggleEmojiPicker: function(e) {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  },

  setEmoji: function(emoji) {
    this.props.addEmoji(emoji);
    this.toggleEmojiPicker();
  },

  // allows selecting first emoji by pressing "Enter" without submitting form
  grabKeyPress: function(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
    }
  },

  emojiPicker: function() {
    if(this.state.showEmojiPicker) {
      return (
        <EmojiPicker
          style={emojiPickerStyles} onSelect={this.setEmoji}
        />
    );
    }
  },

  render: function() {
    return (
      <div ref="emoji" className='emoji-picker-container'>
        <i onClick={this.toggleEmojiPicker} className="fa fa-smile-o fa-lg" aria-hidden="true"></i>
        <div className='emoji-picker'>{this.emojiPicker()}</div>
      </div>
    );
  }
});

export default EmojiInput;
