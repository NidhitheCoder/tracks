import {Context, useContext } from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import  {Context as TrackContext} from  '../context/TrackContext';

export default () => {
    const {createTrack}  = useContext(TrackContext);
    const {state:{locations,name}} = useContext(LocationContext);

    const savetrack = () =>{
        createTrack(name,locations);
    }

    return [savetrack];
};