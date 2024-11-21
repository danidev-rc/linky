import CardLink from '../components/link/link-card'
import { ButtonTag, ButtonAmount } from '../components/link/link-button'

export default function LinkPage() {
  return (
    <div className="text-white ">
      <div className="flex justify-between px-24">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-white bg-neutral-900 border rounded-lg border-neutral-500 focus:outline-none focus:border-neutral-400"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <span>
              <ButtonAmount name="10/30" />
            </span>
          </div>
          <div>
            <ButtonTag name="Select tag" />
          </div>
          <div>
            <span>+Create Link</span>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-3 px-24 gap-6 md:grid-cols-2">
        <CardLink
          name="example"
          url="https://example.com"
          clicks={0}
          date="16 January,2024"
        />
        <CardLink
          name="example"
          url="https://example.com"
          clicks={0}
          date="16 January,2024"
        />
      </section>
    </div>
  )
}
