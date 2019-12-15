import React from 'react';

import { formatDate } from '../helpers';

const DEFAULT_IMAGE =
  'https://imgs.xkcd.com/comics/brussels_sprouts_mandela_effect.png';
const HEADING = 'Brussels Sprouts Mandela Effect';

const Cartoon = () => {
  return (
    <div className="ui container segment">
      <h1 className="ui center aligned header">
        {HEADING}
        <div class="sub header">
          {formatDate(12,13,2019)}
        </div>
      </h1>
      <img className="ui centered image" src={DEFAULT_IMAGE} alt={HEADING} />
    </div>
  );
};

export default Cartoon;
