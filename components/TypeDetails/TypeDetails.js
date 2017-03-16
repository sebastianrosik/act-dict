import React from 'react';

import SuperTypes from '../SuperTypes';
import SourceCode from '../SourceCode';

const renderFieldValue = (value) => {
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  return JSON.stringify(value);
}

const isBuildable = (type) => type.buildable;

export default ({ type, astTypes }) => (
  <div className="typeDetails">
    <header className="typeDetails-header">
        <h3 className="typeDetails-heading">{type.typeName}</h3>
        <nav className="typeDetails-breadcrumb">
          <SuperTypes type={type} astTypes={astTypes} />
        </nav>
    </header>
    {
      isBuildable(type)
      ?
      <div className="typeDetails-source">
        <SourceCode type={type} />
      </div>
      :
      <p className="typeDetails-info">This Type is not buildable.</p>
    }
  </div>
);
