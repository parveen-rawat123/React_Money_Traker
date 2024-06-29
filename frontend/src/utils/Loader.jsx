import "../App.css"
import Loading from "./svg/Loading";
export default function CircularIndeterminate() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap : 5}}>
          <Loading/> Loading...
    </div>
  );
}


