import React, { Component } from 'react';

// STATELESS FUNCTIONS

const Forms = props => (
     <div>
         <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Enter City"/>
            <input type="text" name="country" placeholder="Enter Country"/>

            <button>Get Weather</button>  
         </form>
      </div>
)

export default Forms;
