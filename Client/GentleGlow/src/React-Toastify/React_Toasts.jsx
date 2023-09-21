import { toast } from 'react-toastify';
import FontLoader from 'react-google-font-loader';


export const SuccessToast = (message , duration) => {
    return (
        <>
            <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
               
                {toast.success(<h4 style={{ fontFamily: 'Roboto, sans-serif', height: "6px",marginTop : "-10px" , display : "flex" , justifyContent : "left" }}><img src='images/checked.png' style={{ height: "40px", marginTop: "-1px" }} /><span style={{marginLeft : "10px" , marginTop : "10px"}}>{message}</span></h4> , {autoClose : duration} )}
              
              </FontLoader>
        </>
   )
};
export const ErrorToast = (message , duration) => {
    return (
        <>
            <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
               
                {toast.error(<h4 style={{ fontFamily: 'Roboto, sans-serif', height: "6px",marginTop : "-10px" , display : "flex" , justifyContent : "left" }}><img src='images/cancel.png' style={{ height: "40px", marginTop: "-1px" }} /><span style={{marginLeft : "10px" , marginTop : "10px"}}>{message}</span></h4> , {autoClose : duration} )}
              
              </FontLoader>
        </>
   )
};
export const WarningToast = (message , duration) => {
    return (
        <>
            <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
               
                {toast.warning(<h4 style={{ fontFamily: 'Roboto, sans-serif', height: "6px",marginTop : "-10px" , display : "flex" , justifyContent : "left" }}><img src='images/warning.png' style={{ height: "40px", marginTop: "-1px" }} /><span style={{marginLeft : "10px" , marginTop : "10px"}}>{message}</span></h4> , {autoClose : duration})}
              
              </FontLoader>
        </>
   )
};
export const InfoToast = (message , duration) => {
    return (
        <>
            <FontLoader fonts={[{ font: 'Roboto', weights: [400, 700] }]}>
               
                {toast.info(<h4 style={{ fontFamily: 'Roboto, sans-serif', height: "6px",marginTop : "-10px" , display : "flex" , justifyContent : "left" }}><img src='images/info.png' style={{ height: "40px", marginTop: "-1px" }} /><span style={{marginLeft : "10px" , marginTop : "10px"}}>{message}</span></h4> , {autoClose : duration})}
              
              </FontLoader>
        </>
   )
  };
