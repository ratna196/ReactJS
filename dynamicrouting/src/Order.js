import { useParams } from "react-router-dom"




export default function Order() {
  let params = useParams()
  return <h2>Order id here & orderid from CustomUrl  using paramsin URL is: {params.orderId}</h2>
}


