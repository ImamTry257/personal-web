import React, { Fragment } from 'react';
import image3 from '../../img/Imam_Try_Wibowo.png';

class Photo extends React.Component{
    render(){
        return (
            <Fragment>
                <div className="mx-2 my-2" style={{backgroundColor:'#022F58'}}>
                    <div className="photo text-center pt-3">
                        <img src={image3} alt="" className="rounded" width="200"/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Photo;