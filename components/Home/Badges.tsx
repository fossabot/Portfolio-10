const BADGE_ENDPOINT =
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  process.env.NEXT_PUBLIC_MOCKUP_URL ||
  '';

export default function Badges() {
  return (
    <div className='space-y-2'>
      <img
        alt='Commit Count'
        src={`https://img.shields.io/endpoint?url=https%3A%2F%2F${BADGE_ENDPOINT}%2Fapi%2Fcommit-count`}
        width={136}
        height={20}
      />
      <img
        alt='Last commit'
        src={`https://img.shields.io/endpoint?url=https%3A%2F%2F${BADGE_ENDPOINT}%2Fapi%2Flast-commit`}
        width={152}
        height={20}
      />
    </div>
  );
}
