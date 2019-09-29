import React from 'react';

const Result = ({ imageUrl, labels }) => {
  console.log('Result');

  let labelHtml = [];
  for (let i=0; i<labels.length; ++i) {
    let labelDesc = labels[i].description;
    labelHtml.push(<p key={i}>{labelDesc}</p>);
  }
  console.log(labelHtml);

  return (
    <div className='center'>
      <div className='absolute mt3'>
        <img id='input-image' alt='' src={imageUrl} width='300px' height='auto'/>
        { labels.length > 0
          ? <div>
              <p>{'Best Guesses:'}</p>
              {labelHtml}
            </div>
          : ( imageUrl === ''
              ? <p></p>
              :<p>{'No good guesses yet!'}</p>
            )
        }
        
      </div>
    </div>
  );
}

export default Result;
