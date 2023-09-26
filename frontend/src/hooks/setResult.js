import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};


export const updateResult=(index)=> async(dispatch)=>{
  try{
   dispatch(Action.updateResultAction(index));
  }
  catch(error){
     console.log(error)
  }
}


// insert userData

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
      try {
          if(result !== [] && !username) throw new Error("Couldn't get Result");
          await postServerData("https://backend-bice-delta.vercel.app/api/result", resultData, data => data)
      } catch (error) {
          console.log(error)
      }
  })();
}