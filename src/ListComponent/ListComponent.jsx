import React, {useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import classes from './ListComponent.module.css'


const List = (props)=> {
    let allAnnouncements = props.base.map((item, index) => {
        if(item.title !== undefined) {
            return <div className={classes.list} key={index}>

                <span className={classes.margin}>{item.title}</span>,
                <span className={classes.margin}>{item.description},</span>
                <span className={classes.margin}>{item.date}</span>

            </div>
        }
        return console.log('empty announcemet')
    })
    let currentAnnouncement = React.createRef();
    let currentAnnouncementTitle = React.createRef();
    let currentAnnouncementDescription = React.createRef();
    let searchItem = React.createRef();
    let showCurrentAnnouncement = () =>{
        console.log(currentAnnouncement.current.value)
      if(props.base.length !==  0 && currentAnnouncement.current.value !== '' ){
          currentAnnouncementTitle.current.value = props.base[currentAnnouncement.current.value-1].title
          currentAnnouncementDescription.current.value = props.base[currentAnnouncement.current.value-1].description
      }
    }
    let changeAnnouncement = () => {
        props.setBase( [...props.base,props.base[currentAnnouncement.current.value-1].title = currentAnnouncementTitle.current.value]);
        console.log(props.base)
    }

    const  [showResultsOfSearching,setShowResultsOfSearching]= useState( [{
        title:'-',description:'-',date:'-'
    }] )
    useEffect(()=>{
        console.log(showResultsOfSearching)
    },showResultsOfSearching)
    let finalSearchResult = showResultsOfSearching.map((item, index) => {
        return <div  key={index}> <span className={classes.spanResult}>{item.title}</span>  ,
            <span className={classes.spanResult}>{item.description}</span> ,
            <span className={classes.spanResult}>{item.date}</span>  </div>
    })

    let searchSimilar = () =>{
        let resultsOfSearch
        let filterBase
        let searchBase = props.base.map( (item)=>{
          return item.title
        } )
        console.log(searchBase);
        let results = searchBase.forEach( (item)=>{
            if(item !== undefined || '') {
                if (item.toString() === searchItem.current.value) {
                    resultsOfSearch = item
                } else {
                    setShowResultsOfSearching([{
                        title: '-', description: '-', date: '-'
                    }])
                }
            }
        }  );
        if( resultsOfSearch !== undefined ){
            filterBase = props.base.filter( (announcement)=> announcement.title === resultsOfSearch )
            console.log(filterBase)
            setShowResultsOfSearching( filterBase)
        }

    }

    return (
        <div className={classes.container}>
            {allAnnouncements}
            <Link className={classes.button} to="/create">Go Back</Link>
            <div className={classes.changeContainer}>

                <label>Which number of Announcement you want to edit ,you can choose form 1 to {props.base.length},choose
                    <input className={classes.input} onChange={showCurrentAnnouncement} ref={currentAnnouncement} type="text" />
                </label>
                <div>
                    <input className={classes.input} ref={currentAnnouncementTitle}  type="text" />
                    <input className={classes.input} ref={currentAnnouncementDescription} type="text" />
                </div>
                <button className={classes.button} onClick={changeAnnouncement}>Change!</button>
            </div>
            <div className={classes.changeContainer}>
                <div >
                <h3 className={classes.text} >Search by Title</h3>
            </div>
             <input className={classes.input} onChange={searchSimilar}  ref={searchItem}type="text" />
            <div>
                <h3>Results</h3>
                {finalSearchResult}
            </div>
            </div>
        </div>

    )

}

export default List;