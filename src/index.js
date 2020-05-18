import React from 'react';
import ReactDOM from 'react-dom';
import Emojis from "emoji-book"
import Entry from "/components/Entry"




function CreateEmojiEntry(emojiTerm){
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

ReactDOM.render(
  <div>
    {Emojis.map(CreateEmojiEntry)}
  </div>,
  document.getElementById('root')
);
