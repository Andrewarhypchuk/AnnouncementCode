import React , {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import classes from './CreateComponent.module.css';

const CreateAnnouncement = (props) =>{
    const [state, setState] = useState({
        valueOfTitle: '',
        valueOfDescription: '',
        valueOfData: ' '
    })
    useEffect(() => {
        console.log(props.base)
    }, [props.base])
    const [currentTitle, setCurrentTitle] = useState('')
    const [desire, setDesire] = useState(false);
    let addAnn = () => {
        setDesire(true)
    }
    const title = React.createRef();
    const description = React.createRef();
    let handleClickTitle = () => {
        let newValueOfTitle = title.current.value
        let checkNumberOfWords = title.current.value.trim().split(' ');

        if(checkNumberOfWords.length <= 3){setState({
            ...state, valueOfTitle: newValueOfTitle
        })}else{
            console.log('to much words')
        }
    }
    let handleClickDescription = () => {
        let newValueOfDescription = description.current.value
        setState({
            ...state, valueOfDescription: newValueOfDescription
        })
    }
    let formAnnouncement = () => {
        let newAnnouncement = {
            title: '',
            description: '',
            date: ''
        }
        let date = new Date()
        newAnnouncement.date = date.toString();
        newAnnouncement.title = state.valueOfTitle

        newAnnouncement.description = state.valueOfDescription
        props.setBase([...props.base, newAnnouncement])
        state.valueOfTitle = ' ';
        state.valueOfDescription = ' ';
        alert(`you added announcement tilte:${newAnnouncement.title},description ${newAnnouncement.description}`)
    }
    let deleteAnnouncement = () => {
        console.log(props.base)
        let newbase = props.base.splice(0, props.base.length - 1)
            props.setBase(newbase)
        console.log(props.base)

    }

    return (
            <div className={classes.container}>
                <div>Please, write a name and a description for your new title!</div>
                <label><span className={classes.span}>Name of Title</span>
                    <input className={classes.input} value={state.valueOfTitle} ref={title} onChange={handleClickTitle} type="text" />
                </label>
                <label><span className={classes.span}>Description</span>
                    <input className={classes.input} value={state.valueOfDescription} ref={description} onChange={handleClickDescription} type="text" />
                </label>
                <p><button className={classes.button} onClick={formAnnouncement}>Add an Announcement</button></p>
                <button className={classes.button} onClick={deleteAnnouncement}>Delete Last Announcement</button>

                <Link className={classes.button} to="/list">Show an Announcement List</Link>


            </div>
        )
}
export default CreateAnnouncement
