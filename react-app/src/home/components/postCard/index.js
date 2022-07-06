import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";


function PostCard ( { post }) {
    return(
        <Card className="card">
            <CardHeader
            avatar={<Avatar src={post.author.avatar}/>}
            subheader={<Typography variant="h6">{post.author.name}</Typography>}
            action={<Typography variant="caption">{post.date}</Typography>}/>

            <CardContent>
                <CardMedia>
                    <img src={ post.image } alt='/'className='image'/>
                </CardMedia>
            </CardContent>
            
            <CardActions></CardActions>
        </Card>
    );
}

export default PostCard;