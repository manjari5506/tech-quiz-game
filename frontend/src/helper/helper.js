import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import axios from "axios"
export function attempts_Number(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPoints_Number(result, answers, point) {
  return result
    .map((elememt, i) => answers[i] === elememt)
    .filter((i) => i)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
}


export function flagResult(totalpoints,earnPoints){
    return(totalpoints*50 /100)<earnPoints
}


export function CheckUserExit({children}){
const auth= useSelector(state=> state.result.userId)
 return auth ? children: <Navigate to={"/"} replace={true}></Navigate>
}

export async function getServerData(url,callback){
  //  const data=await axios.get(url);
  const data=await(await axios.get(url))?.data;
  return callback ? callback(data): data;
  
}
// getServerData("http://localhost:5000/api/result")

export async function postServerData(url,result,callback){
    const data = await(await axios.post(url,result))?.data;
  return callback ? callback(data):data;
  
}