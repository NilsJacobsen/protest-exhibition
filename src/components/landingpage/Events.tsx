export default function Events() {

    const events = [
      {
        date: "date",
        imageUrl: './logo.jpg',
        author: "author",
        children: [
          {
            caption: "caption",
            title: "title",
            bio: "desc",
            link: 'link',
            linkLabel: 'linklabel',
          }
        ]
      },
      {
        date: "date",
        imageUrl: './logo.jpg',
        author: "author",
        children: [
          {
            caption: "caption",
            title: "title",
            bio: "desc",
            link: 'link',
            linkLabel: 'linklabel',
          }
        ]
      },
      {
        date: "date",
        imageUrl: './logo.jpg',
        author: "author",
        children: [
          {
            caption: "caption",
            title: "title",
            bio: "desc",
            link: 'link',
            linkLabel: 'linklabel',
          }
        ]
      },
    ]
    
    return (
      <div id="events" className="bg-zinc-50 font-rubik">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-venusmartre">{"title"}</h2>
              <p className="text-xl text-gray-500">
                {"description"}
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {events.map((event: any) => (
                  <li key={event.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="object-cover shadow-lg rounded-lg" alt="event image" src={event.imageUrl} />
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{event.date}</p>
                      </div>
                      {event.children.map((child: any, index: number) =>  {
                        return <div key={index} className="pb-4">
                          <div className="text-lg">
                            <p className="text-gray-500">{child.caption}</p>
                            <p className="text-[#9B9ECE]">{child.title}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{child.bio}</p>
                          </div>
                          <a href={child.link} className="text-lg">
                            <p className="underline text-gray-500">{child.linkLabel}</p>
                          </a>
                        </div>
                      })}
                      {event.author && <p className="text-gray-500">{event.author}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
