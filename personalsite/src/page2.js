import React, { Component } from 'react';

const allLocations = this.state.location.entrySeq().map(
    ([id, location]) => {
        return <LocationPosting delete={this.delete} city={location.city} country={location.country} id={id}/>
    }

)

class LocationPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {editing: false};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }

    submit = () => {
        var newName = {
            city:this.state.newTitle
        }
        this.props.save(this.props.id, newName);
        this.setState({editing: false})
    }

    render() {

        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                    <button> submit </button>
                </div>


            )
        }

        else{
            editBoxOrEditButton = <button onClick={this.editTitle}>Edit Title</button>
        }

        return (
            <div>
                <p>{this.props.city}, {this.props.country}</p>
                <button onClick={this.deletePosting}>Delete</button>
                {editBoxOrEditButton}
            </div>
        )

    }

    save = (id, field) => {
        this.setState({locations: this.state.locations.update(id, (n) => {return Object.assign({}, n, field); })})
    
        return <LocationPosting
                save = {this.save}
                delete = {this.delete}
                city = {location.city}
                country = {location.country}
                id = {id}
            ></LocationPosting>
    }


}

export default LocationPosting