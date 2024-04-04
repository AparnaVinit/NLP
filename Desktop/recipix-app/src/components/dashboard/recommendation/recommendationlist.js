import * as React from 'react';
import { styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import piccZDaro from '../../../images/piccZDaro.jpeg'

const RecommendationList=({title})=>{
    const navigate = useNavigate()  

    return(
        
            <Card sx={{ maxWidth: 345 }} onClick={() => navigate('/detailrecipe')}>
                <CardHeader title={title}/>
                <CardMedia
                    component="img"
                    height="194"
                    image={piccZDaro}
                    alt="dishes"
            />
            </Card>
       
    )

};
export default RecommendationList;