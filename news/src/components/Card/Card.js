import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/More';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: '1rem',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class CustomCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        // console.log(props)
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    

    render() {
        const { classes, title, urlToImage, publishedAt, content, url } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    // avatar={
                    //     <Avatar aria-label="Recipe" className={classes.avatar}>
                    //         R
                    //     </Avatar>
                    // }
                    // action={
                        // <IconButton aria-label="More">
                        //     <MoreIcon />
                        // </IconButton>
                    // }
                    title={title}
                    subheader={publishedAt}
                />
                <CardMedia
                    className={classes.media}
                    image={urlToImage}
                    title={title}
                />
                <CardContent>
                    <Typography component="p">
                        {content}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <a href={url} target='_blank'>
                        <IconButton aria-label="More">
                            <MoreHorizIcon />
                        </IconButton>
                    </a>
                </CardActions>
            </Card>
        );
    }
}

CustomCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomCard);