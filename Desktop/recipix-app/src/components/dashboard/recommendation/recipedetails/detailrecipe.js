import React from 'react';

import './detailrecipes.css'
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const RecipeDetail=()=>{
    return(
    <div className='container'>
        <div className='recipe_container'>
            <p>Item Name</p>
        </div>
        <div style={{display:'flex',marginTop:'20px',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'70%',height:'80%',padding:'5px'}}>
            <div style={{width:'10%',height:'10%'}}>
                <LocalDiningIcon/>
            </div>
            <div style={{width:'90%',height:'10%',display:'flex',justifyContent:'flex-start'}}>
                <p>ingredient1</p>
            </div>
        </div>

    </div>
    
    )
}
export default RecipeDetail;