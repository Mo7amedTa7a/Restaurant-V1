import Button from "@mui/material/Button";

 
export function ErrorFillBack({error , resetErrorBoundary}){
    return(
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh"}}>
            <h2>Something went wrong !</h2>
            <p>{error.message}</p>
            <Button variant="contained" onClick={resetErrorBoundary}>Try Again</Button>
        </div>
    )
}


