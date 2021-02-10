import React from 'react';

export default function LabelMenu(props) {
  const { title } = props;
  return (
    <div>
      <h1 className="topTitle" data-testid="top-title">
        {title}
      </h1>
    </div>
  );
}
