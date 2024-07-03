import { random, cachedRandom } from "@/lib/random";

import { Inner } from "./Inner";

export const dynamic = "force-dynamic";

export default async function Page() {
  const r1 = random();
  const r2 = cachedRandom();

  return (
    <>
      <h1>Page</h1>
      <div>random: <pre>{r1}</pre></div>
      <div>random(cached): <pre>{r2}</pre></div>
      <Inner />
    </>
  )
}
