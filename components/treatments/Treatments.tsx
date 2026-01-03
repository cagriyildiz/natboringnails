import { items } from "./data"
import {Treatment} from "./Treatment";

function Treatments() {

  return (
    <div id="inspiration" className="">
      <div className="max-w-7xl m-auto">
        {items.map((item, idx) => (
          <Treatment key={idx} item={item} />)
        )}
      </div>
    </div>
  )
}

export default Treatments