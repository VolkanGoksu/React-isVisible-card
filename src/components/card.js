import React, { Component } from 'react';


class Card extends Component {
    state={
        isVisible:false
    }
    onClickEvent=(e)=>{
        this.setState({
            isVisible : !this.state.isVisible
        })
     }
    render() {
        const {name,surName,department,salary}=this.props;
        const {isVisible}=this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this)} >{name} adlı personel bilgisi için tıkla 
                        &emsp;
                        <i class="fas fa-hand-point-left"></i>
                        </h4>
                        <i className style={{ cursor: "pointer" }}></i>
                    </div>
                 { isVisible ?
                    <div className="card-body">
                        <ul>
                            <li>
                            <p className="card-text">Ad: {name}</p>
                            </li>
                            <li>
                            <p className="card-text">Soyad: {surName}</p>
                            </li>
                            <li>
                            <p className="card-text">Department: {department}</p>
                            </li>
                            <li>
                            <p className="card-text">Maaş: {salary} </p>
                            </li>
                        </ul>    
                    </div> :null
                }      
                </div>
            </div>


        )
    }
}

export default Card