import React, {Purecomponent} from 'react';

export default class About extends Purecomponent {
    render () {
        return (
          <div className="inner cover">
              <h1 className="cover-heading">Any Questions?</h1>
              <p className="lead">Dont hesitate to contact me</p>
              <p className="lead">email : rothermal@gmail.com</p>
          </div>
        );
    }
}