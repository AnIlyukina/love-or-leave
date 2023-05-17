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
            padding: 10px;
            //background: #c8c8ee;
            background: #fff;
            border-radius: 5px;
            margin-top:15px;
            cursor: pointer;
          }
          .spoiler-content {
            border: 2px solid #fff;
            border-radius: 5px;
            padding: 10px;
            font-size:14px
          }
        `}
      </style>
    </div>
  );
}