import React from 'react';

function Color() {
    
  return (
    <>
        <div className='sidebarHeader'>
            <h3>COLOR</h3>
            <div className='colorize'>
                {/* <input className='color' type="radio" value="blue" name="panel" style={{ size:"2rem" ,border: "10px dashed red"}} />
                <input className='color' type="radio" value="red" name="panel" />
                <input className='color' type="radio" value="black" name="black" />
                <input className='color' type="radio" value="yellow" name="black" />
                <input className='color' type="radio" value="pink" name="black" />
                <input className='color' type="radio" value="grey" name="black" /> */}8
            
                <input type="radio" class="radio" id="radio-1" name="group"/>
                    <label for="radio-1"></label>
                <input type="radio" class="radio" id="radio-2" name="group"/>
                    <label for="radio-2"></label>
                <input type="radio" class="radio" id="radio-3" name="group"/>
                    <label for="radio-3"></label>
                <input type="radio" class="radio" id="radio-4" name="group"/>
                    <label for="radio-4"></label>
            </div>
        </div>
    </>
  )
}
export default Color;

// import React, { Component } from 'react'

// export default class Color extends Component {
//     constructor() {
//         super();
//         this.state = {checked: false};
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange() {
//         this.setState({
//             checked: !this.state.checked
//         })
//     }
//     render() {

//         const styles = {
//           radioWhite: {
//             border: "10px solid #90DDD0",
//           },
//           radioPink: {
//             border: "10px solid #EF959D",
//           },
//           radioRed: {
//             border: "10px solid #90DDD0",
//           }
//         };
      
//         // pink on click
//         styles.radioPink['backgroundColor'] = '#EF959D';
//         // style={{backgroundColor: this.state.isCheck ? 'red': 'white'}}
      
//         return (
//             <>
//                 <input type="radio" className="circle" name="icing" defaultValue={1} id="white" style={styles.radioWhite} />
//                 <label class="radio" htmlFor="white"></label>
//                 <input type="radio" className="circle" name="icing" defaultValue={2} id="pink" style={styles.radioPink} />
//                 <label class="radio" htmlFor="pink"></label>
//                 <input type="radio" className="circle" name="icing" defaultValue={3} id="red" style={styles.radioRed} />
//                 <label class="radio" htmlFor="red"></label>
//             </>
//         );
//       }
// }
