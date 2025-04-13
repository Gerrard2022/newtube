"use client";

import { trpc } from "@/trpc/client";

const Pageclient = () => {

    const [data] = trpc.hello.useSuspenseQuery({
        text: "Thor Odin Son"
    })

  return (
    <div>
        Page client says: {data.greeting}
    </div>
  )
}

export default Pageclient