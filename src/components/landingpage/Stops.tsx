export default function Stops() {

    const events = [
      {
        date: "07.03.-24.03.2024",
        imageUrl: "/carousel/_72A0906.jpg",
        children: [
          {
            caption: "Dortmund (NRW), Hansastraße 6-10",
            title: "Hans A",
          },
          {
            bio: "Partner: Dortmund Kreativ, Dortmunder Volksbank",
          }
        ]
      },
      {
        date: "08.08.-17.11.2024",
        imageUrl: "/lwl.jpeg",
        children: [
          {
            caption: "Herne (NRW), Europaplatz 1",
            title: "LWL-Museum für Archäologie und Kultur",
          },
          {
            bio: "Partner: LWL-Museum für Archäologie und Kultur, LWL",
          }
        ]
      },
      // {
      //   date: "17.10. // 19 Uhr",
      //   children: [
      //     {
      //       caption: "Vortrag",
      //       title: "„Auswirkungen des Klimawandels auf das materielle und kulturelle Erbe“",
      //     },
      //     {
      //       bio: "Mit Prof. Dr. Ralf Kilian, Universität Bamberg. Die Veranstaltung findet ausschließlich online statt.",
      //     }
      //   ]
      // },
      // {
      //   date: "21.11. // 19 Uhr",
      //   children: [
      //     {
      //       caption: "Vortrag",
      //       title: "„Der Schwarze Tod und das Klima: Sterne, Wetter und Getreide“",
      //     },
      //     {
      //       bio: "Mit Dr. Martin Bauch, Leibniz-Institut für Geschichte und Kultur des östlichen Europa (GWZO), Leipzig",
      //     }
      //   ]
      // },
      // {
      //   date: "30.11. // 19 Uhr",
      //   children: [
      //     {
      //       caption: "Vortrag",
      //       title: "„Klimawandel und historische Gärten“",
      //     },
      //     {
      //       bio: "Mit Philipp Sattler",
      //     }
      //   ]
      // },
    ]
    
    return (
      <div id="stationen" className="bg-zinc-50 font-rubik">
        <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 pt-12 lg:pt-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-venusmartre pb-4">{"Stationen"}</h2>
                    <p className="text-xl text-gray-500">
                        {"Übersicht über vergangene Stationen"}
                    </p>
                    
                </div>
            </div>
            <div className="lg:col-span-2 pb-12 lg:pb-24">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {events.map((event: any) => (
                  <li key={event.name}>
                    <div className="space-y-2">
                      {event.imageUrl && <div className="aspect-w-3 aspect-h-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="object-cover shadow-lg rounded-lg" alt="event image" src={event.imageUrl} />
                      </div>}
                      <div className="text-lg">
                        <p className="text-zinc-900 font-medium">{event.date}</p>
                      </div>
                      {event.children.map((child: any, index: number) =>  {
                        return <div key={index} className="pb-4">
                          <div className="text-lg">
                            <p className="text-zinc-600">{child.caption}</p>
                            <p className="text-[#5E63AE] font-medium">{child.title}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-zinc-600">{child.bio}</p>
                          </div>
                          <a href={child.link} className="text-lg">
                            <p className="underline text-zinc-600">{child.linkLabel}</p>
                          </a>
                        </div>
                      })}
                      {event.author && <p className="text-zinc-600">{event.author}</p>}
                    </div>
                  </li>
                ))}
                <div className="flex flex-col-reverse lg:flex-col bg-white border-zinc-200 sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className='p-6'>
                    <p className="pb-1 font-bold text-s leading-5 text-zinc-500">{"Interessiert an einer Kooperation?"}</p>
                    <p className="pb-3 font-bold text-s leading-5 text-zinc-500">{"Wir auch!"}</p>
                    <p className="pb-8 font-regular text-s leading-5 text-zinc-500">{"Alle Infos zur Umsetzbarkeit finden sie hier zum Download in unserem Portfolio."}</p>
                    <div className="w-full rounded-md">
                      <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1fT9RM8KHHvYbxkPQFuilC7murkErHKR4?usp=sharing"
                        className="bg-zinc-100 relative z-40 hover:bg-zinc-200 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black"
                      >
                        {"Zu den Infos"}
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
