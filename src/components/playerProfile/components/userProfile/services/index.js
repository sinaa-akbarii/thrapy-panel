import { accountBaseApi } from "api";

export const headers = ["Register Date" , "User Name" , "Last Active Time" ,"Phone Number" , "Email"  ];

export const handleChangeActivation = async(setChecked, checked, player_id) => {
    let token = localStorage.getItem('token');
    // let token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2NvdW50cyIsImV4cCI6MTY2MDEyMDExNSwiaWF0IjoxNjU3NzAwOTE1LCJpc3MiOiJhY2NvdW50cyIsImp0aSI6IjE5Yzk0Mjk2LTc0YjgtNDhkNS05Njc4LTZmMWQyNzJhZGIwZiIsIm5iZiI6MTY1NzcwMDkxNCwicm9sIjoiYWRtaW4iLCJzdWIiOiI4NjcyNDc4NSIsInR5cCI6ImFjY2VzcyIsInVzbiI6IkZhcmhvb2QifQ.wAiskvOMSfZGhwWTS4CNkew25lPziw6B5sQlEQIN40yccMb-8gPyteQ3-bnDh7w3BblsMYv1HHiLS84lgdQMrg";
    let activeChange = '';
    if(checked){
        activeChange = 'inactive'
    }else{
        activeChange='active'
    }
    
    const res = await accountBaseApi({
        method: "PUT",
        url: `/admin/accounts/${player_id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data:{
            user: {
                status: activeChange
            }
        }
      })
      if(res.status === 200){
        setChecked(!checked)
      }
}