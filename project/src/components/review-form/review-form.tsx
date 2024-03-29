import {FormEvent, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {sendCommentAction} from '../../store/api-actions';

export default function ReviewForm(): JSX.Element {
  const navigate = useNavigate();
  const [ratingData, setRatingData] = useState(8);
  const [commentText, setCommentText] = useState('');
  const idFilm = Number(useParams().id);
  const dispatch = useAppDispatch();
  return (
    <form onSubmit={(evt:FormEvent<HTMLFormElement>) =>{
      evt.preventDefault();
      dispatch(sendCommentAction({id: idFilm, data:{comment: commentText, rating: ratingData}}));
      navigate(`/films/${idFilm}`);
    }} action="#" className="add-review__form"
    >
      <div className="rating">
        <div className="rating__stars">
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-10" type="radio" name="rating" defaultValue={10} />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-9" type="radio" name="rating" defaultValue={9} />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-8" type="radio" name="rating" defaultValue={8} defaultChecked />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-7" type="radio" name="rating" defaultValue={7} />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-6" type="radio" name="rating" defaultValue={6} />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>
          <input onClick={(evt)=>{setRatingData(Number(evt.currentTarget.value));}} className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>
      <div className="add-review__text">
        <textarea onChange={(evt) => {setCommentText(evt.currentTarget.value);}} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={''} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
