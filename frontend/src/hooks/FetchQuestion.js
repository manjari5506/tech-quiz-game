import { useEffect, useState } from "react";
// import data, { answers } from "../database/data";
import { useDispatch } from "react-redux";
import * as Action from "../redux/question_reducer";
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));
// ${process.env.REACT_APP_SERVER_HOSTNAME}
    (async () => {
      try {
        // let question = await data;
        const [{questions, answers}] = await getServerData(
          // `http://localhost:5000/api/questions`,
          "https://backend-bice-delta.vercel.app/api/questions",
          (data) => data);
          
        console.log({questions,answers});

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData:  questions }));
          dispatch(Action.startExamAction({ question:questions, answers }));
        } else {
          throw new Error("No Question Available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
 
};

export const moveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

export const movePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
