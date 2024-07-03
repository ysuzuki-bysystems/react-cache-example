import { random, cachedRandom } from "@/lib/random";

export const dynamic = "force-dynamic";

export async function Inner() {
  const r1 = random();
  const r2 = cachedRandom();

  return (
    <>
      <h1>Inner</h1>
      <div>random: <pre>{r1}</pre></div>
      <div>random(cached): <pre>{r2}</pre></div>
    </>
  )
}
