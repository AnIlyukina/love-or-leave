import * as React from 'react';

export function Spoiler({ title, children }) {
  return (
    <div>
      <details>
        <summary className='spoiler-summary'>{title}</summary>
        <div className='spoiler-content'>{children}</div>
      </details>
      <style jsx>
        {`
          .spoiler-summary {
            padding-bottom: 5px;
          }
          .spoiler-content {
            border: 1px solid grey;
            border-radius: 5px;
            padding: 10px;
            font-size:14px
          }
        `}
      </style>
    </div>
  );
}