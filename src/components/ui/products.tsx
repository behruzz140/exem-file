

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; 
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import Foto from "../../assets/2_big1.png";
import CloseIcon from "@mui/icons-material/Close"; 
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import TextField from "@mui/material/TextField";
import Dressing from '../../assets/dressing.jpg'
export default function RecipeReviewCard() {
  const [openModal, setOpenModal] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [openCommentModal, setOpenCommentModal] = React.useState(false); 

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked); 
  };

  const handleOpenCommentModal = () => {
    setOpenCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setOpenCommentModal(false);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={Foto}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <a
                className="mt-[5px] w-[25px] h-[20px] flex items-center justify-center"
                href="https://t.me/behruzz_140"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ShareIcon>Share</ShareIcon>
              </a>
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="DressBarn Shop"
        />
        <CardMedia
          component="img"
          height="194"
          image={Dressing}
          // image='https://picsum.photos/200/170'
          alt="DressBarn Shop"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
           
            {isLiked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton
            aria-label="write comment"
            onClick={handleOpenCommentModal}
          >
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="show more" onClick={handleOpenModal}>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="p-[30px] w-[500px] mt-[250px] ml-[530px] bg-[#dce0dd] relative">
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <span className="p-[13px]">
              {" "}
              <CloseIcon />
            </span>
          </IconButton>
          <Typography variant="h6" id="modal-title">
            Mahsulot haqida...
          </Typography>
          <Typography variant="body1" id="modal-description" sx={{ mt: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes. lorem50
          </Typography>
        </div>
      </Modal>
      <Modal
        open={openCommentModal}
        onClose={handleCloseCommentModal}
        aria-labelledby="comment-modal-title"
        aria-describedby="comment-modal-description"
      >
        <div className="p-[30px] w-[500px] mt-[250px] ml-[530px] bg-[#dce0dd] relative">
          <IconButton
            aria-label="close"
            onClick={handleCloseCommentModal}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <span className="p-[13px]">
              {" "}
              <CloseIcon />
            </span>
          </IconButton>
          <Typography variant="h6" id="comment-modal-title">
            Fikringiz biz uchun muhim!
          </Typography>

          <Typography
            variant="body1"
            id="comment-modal-description"
            sx={{ mt: 2 }}
          >
            <TextField
              id="standard-basic"
              label=" Write your comment here.."
              variant="standard"
            />
          </Typography>
        </div>
      </Modal>
    </div>
  );
}
